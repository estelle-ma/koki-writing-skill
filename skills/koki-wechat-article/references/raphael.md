# Raphael 本地排版

本仓库包含一个针对特定 Raphael 官方公开前端版本的本地适配器。它不是云端草稿接口，不挂载编辑器、不上传文章，也不操作微信公众号。

支持的官方构建文件：

https://publish.raphael.app/assets/index-B1xyRFkz.js

该文件的 SHA-256：

`a72c53c9b1eba634cfa27d01f62c882d9d6035aa41be04bc801d203ba3e3b069`

使用者从官方地址下载到自己的工作目录。适配器会核对摘要，不认识的版本直接报错；若官方版本变化，应先检查 API 并更新适配器，不静默换成自制 CSS 后继续称 Raphael 排版。

## 运行

在仓库根目录安装依赖：

```sh
npm install --ignore-scripts
```

提供文章、输出目录和自行下载的官方构建文件：

```sh
node skills/koki-wechat-article/scripts/render_raphael.cjs \
  --input ./article/article.md \
  --out ./outputs/article \
  --bundle ./work/raphael-bundle.js \
  --theme sspai
```

也可用 `--jsdom` 指定现有 `jsdom` 26 模块目录。输入图片相对于 Markdown 所在目录，脚本只接受目录内本地图片并嵌入 HTML。

图注用 `<p class="image-caption">`。简短补充资料可用：

```html
<aside class="evidence" data-evidence-id="example">
  <p class="evidence-title">资料补充｜主题</p>
  <p>资料与可核验来源链接。</p>
</aside>
```

这些块与前后正文留空行。输出排版预览、微信富文本和引擎/图片记录。生成后实际检查约 390 px 与 360 px 的阅读效果，复制到公众号后台后再确认图片入库与显示。

本仓库不分发 Raphael 前端代码。Raphael 自身许可与更新以 [官方仓库](https://github.com/liuxiaopai-ai/raphael-publish) 为准。
