const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

function args(argv) {
  const a = {};
  for (let i = 0; i < argv.length; i += 2) {
    if (!argv[i].startsWith('--') || !argv[i + 1]) throw new Error('Use --key value arguments');
    a[argv[i].slice(2)] = argv[i + 1];
  }
  for (const k of ['input', 'out', 'bundle']) if (!a[k]) throw new Error(`Missing --${k}`);
  return a;
}
function escapeHTML(s) { return s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }

async function main() {
  const a = args(process.argv.slice(2));
  const {JSDOM} = require(a.jsdom ? path.resolve(a.jsdom) : 'jsdom');
  const input = path.resolve(a.input), root = path.dirname(input), output = path.resolve(a.out);
  const md = fs.readFileSync(input, 'utf8');
  let source = fs.readFileSync(a.bundle, 'utf8');
  const digest = crypto.createHash('sha256').update(source).digest('hex');
  if (digest !== 'a72c53c9b1eba634cfa27d01f62c882d9d6035aa41be04bc801d203ba3e3b069') throw new Error('Unrecognized Raphael bundle; inspect and update the adapter first');
  const stop = source.lastIndexOf('dO(document.getElementById("root")).render(');
  if (stop < 0) throw new Error('Raphael entry point changed');
  source = source.slice(0, stop) + '\nglobalThis.RaphaelEngine={themes:$l,render:(md,t)=>X6($6(ub.render(q6(md)),t)),wechat:t8};';
  const dom = new JSDOM('<!doctype html><html><body></body></html>', {runScripts:'outside-only', pretendToBeVisual:true, url:'https://publish.raphael.app/'});
  try {
    dom.window.TextEncoder = TextEncoder;
    dom.window.TextDecoder = TextDecoder;
    dom.window.fetch = async () => { throw new Error('Offline renderer has no network access'); };
    dom.window.eval(source);
    const engine = dom.window.RaphaelEngine, theme = a.theme || 'sspai';
    const themeMeta = engine.themes.find(t => t.id === theme);
    if (!themeMeta) throw new Error(`Unknown theme: ${theme}`);
    const document = new dom.window.DOMParser().parseFromString(engine.render(md, theme), 'text/html');
    for (const el of document.querySelectorAll('figure.supplement-media')) el.setAttribute('style', 'display:block;margin:24px 0;padding:0;width:100%;');
    for (const el of document.querySelectorAll('p.image-caption')) el.setAttribute('style', 'font-size:13px !important;line-height:1.65 !important;color:#777 !important;margin:8px 0 26px !important;');
    for (const el of document.querySelectorAll('aside.evidence')) {
      el.setAttribute('style', 'display:block;margin:24px 0;padding:14px 16px;background:#faf7f6;border-left:3px solid #d71a1b;border-radius:3px;');
      for (const p of el.querySelectorAll('p')) p.setAttribute('style', 'font-size:15px !important;line-height:1.85 !important;color:#454545 !important;margin:12px 0 !important;');
      const title = el.querySelector('.evidence-title');
      if (title) title.setAttribute('style', 'font-size:15px !important;font-weight:700;color:#b8161b !important;line-height:1.65 !important;margin:0 0 12px !important;');
    }
    const embedded = [];
    for (const el of document.querySelectorAll('img')) {
      const src = el.getAttribute('src');
      if (!src) throw new Error('Image missing src');
      if (src.startsWith('data:image/')) continue;
      const file = path.resolve(root, decodeURI(src));
      if (!file.startsWith(root + path.sep)) throw new Error(`Image outside article directory: ${src}`);
      const mime = {'.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.webp':'image/webp','.gif':'image/gif','.svg':'image/svg+xml'}[path.extname(file).toLowerCase()];
      if (!mime) throw new Error(`Unsupported image: ${src}`);
      const bytes = fs.readFileSync(file);
      el.setAttribute('src', `data:${mime};base64,${bytes.toString('base64')}`);
      el.setAttribute('style', (el.getAttribute('style') || '') + ';max-width:100%;height:auto;');
      embedded.push({file:path.relative(root,file),bytes:bytes.length,sha256:crypto.createHash('sha256').update(bytes).digest('hex')});
    }
    const html = await engine.wechat(document.body.innerHTML, theme);
    const title = (md.match(/^#\s+(.+)$/m) || [null,'公众号文章'])[1];
    const head = `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${escapeHTML(title)}</title><style>body{margin:0;background:#f3f4f4}main{max-width:700px;margin:0 auto;background:white}#copybar{position:sticky;top:0;z-index:2;padding:10px 16px;background:#fffffff2;border-bottom:1px solid #eee;font:13px/1.5 -apple-system,BlinkMacSystemFont,sans-serif;display:flex;gap:10px;align-items:center}button{border:0;border-radius:6px;background:#d71920;color:white;padding:9px 12px;font-size:14px;cursor:pointer}#status{color:#666}a{overflow-wrap:anywhere}#article h1,#article h2{text-wrap:balance}@media print{#copybar{display:none}body{background:white}}</style></head><body>`;
    const script = `<script>document.getElementById('copy').onclick=async()=>{const e=document.getElementById('article'),s=document.getElementById('status');try{await navigator.clipboard.write([new ClipboardItem({'text/html':new Blob([e.innerHTML],{type:'text/html'}),'text/plain':new Blob([e.innerText],{type:'text/plain'})})]);s.textContent='已复制，可粘贴到公众号正文';}catch(err){const r=document.createRange();r.selectNodeContents(e);const z=window.getSelection();z.removeAllRanges();z.addRange(r);s.textContent=document.execCommand('copy')?'已复制，可粘贴到公众号正文':'请复制下方选中的正文';}};</script>`;
    fs.mkdirSync(path.join(output,'来源'), {recursive:true});
    fs.writeFileSync(path.join(output,'Raphael排版.html'), head + `<main><div id="copybar"><button id="copy">复制公众号正文</button><span id="status">Raphael · ${escapeHTML(themeMeta.name)}</span></div><article id="article">` + html + '</article></main>' + script + '</body></html>');
    fs.writeFileSync(path.join(output,'微信富文本.html'), html);
    const receipt = {title,engine:'https://publish.raphael.app/assets/index-B1xyRFkz.js',engineSHA256:digest,theme:themeMeta.name,embeddedImages:embedded,cloudDraftCreated:false,published:false};
    fs.writeFileSync(path.join(output,'来源/排版记录.json'), JSON.stringify(receipt,null,2)+'\n');
    console.log(JSON.stringify({title,theme,images:embedded.length,htmlBytes:Buffer.byteLength(html)}));
  } finally { dom.window.close(); }
}
main().catch(e => { console.error(e.message); process.exitCode=1; });
