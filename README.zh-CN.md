# 文字创作 Skill

[![English](https://img.shields.io/badge/English-2563EB?style=for-the-badge)](README.md) [![简体中文](https://img.shields.io/badge/简体中文-DC2626?style=for-the-badge)](README.zh-CN.md)

把口播和想法整理成保留自己语气的文章，补证据、找真实配图，用 Raphael 完成公众号排版。

这是从我的日常创作流程整理出的独立 Skill，公开版已做脱敏并支持自定义。技能说明与流程参考提供英文和简体中文版本。

## 先看实际效果

**把随口说的想法，变成仍然像你自己写的公众号文章。** 下面是我这篇「一个人用 AI 做自媒体」文章的真实手机排版。

<p align="center">
  <img src="docs/media/article-opening.jpg" width="300" alt="真实文章首屏：标题、红色重点与手机段落">
  <img src="docs/media/article-detail.jpg" width="300" alt="真实文章细节：小标题、链接与正文排版">
</p>

| 你交给它 | 它帮你完成 |
| --- | --- |
| 随口说的转写、想法或草稿 | 保留原话、观点和语气的可编辑正文 |
| 需要补证的论点与主题 | 来源、对应的真实图片和图注 |
| 自己的排版偏好 | 带「复制公众号正文」按钮的 Raphael 排版稿 |

可以直接看这个真实小例子：[原始口播](examples/voice-note.txt) → [整理后的 Markdown](examples/article.md) → [Raphael HTML](examples/article-preview.html)。下载 HTML 后用浏览器打开，就能试复制按钮。HTML 展示文章节选，上面的截图来自完整文章。

## 从安装到第一次出结果

### 1. 准备工具

使用 Codex，或其他支持 Agent Skills、能读取你文稿和文件的 Agent。找资料与真实网页配图需要联网；排版使用 [Raphael Publish](https://publish.raphael.app/)。只有运行仓库自带的本地适配器时，才需要 Node.js 20+ 和 `jsdom` 26.1.0。写文章无需连接视频编辑器。

### 2. 安装这个 Skill

在 Codex 里直接粘贴：

```text
$skill-installer 安装这个地址里的技能：
https://github.com/leilei926524-tech/koki-writing-skill/tree/main/skills/koki-wechat-article
如果已有同名 Skill，先保留并说明冲突，不要直接覆盖。
```

安装后开一个新对话，再用 `$koki-wechat-article` 调用。其他支持 Agent Skills 的工具，可按自己的安装方式导入完整的 `skills/koki-wechat-article` 文件夹。也可查看 [Codex 官方技能文档](https://learn.chatgpt.com/docs/build-skills)。

### 3. 把素材交给它

直接粘贴口播转写、草稿，或附上文稿文件。补充必须保留的原话、已核实的来源链接、想用的标题、配图文件夹。语音输入留下的粗稿就可以开始；已有定稿也可以只做排版。

### 4. 做第一篇文章

```text
用 $koki-wechat-article。
输入：我附上的口播转写。
语言：中文。保留我的语气、观点和有表达作用的重复。
核对人名与事实，补相关的真实配图并记录来源。
用 Raphael 的 sspai 主题排版，检查手机阅读效果。
交付可编辑 Markdown、本地排版 HTML、微信富文本、图片和来源说明。
草稿保存到 ./outputs/my-article/。
```

还没准备自己的内容，也可以先让 Agent 读取仓库里的 `examples/voice-note.txt`，用这段真实口播试做一份排版。

### 5. 修改与使用

```text
保留现在的正文和已确认图片，不改字句。
只调整分段、小标题层级、重点标注和图片位置，让手机读起来更舒服。
```

用浏览器打开交付的排版 HTML → 点击 **复制公众号正文** → 粘贴到公众号后台 → 检查图片入库和最终显示 → 准备好后再发表。后续改稿继续改 Markdown 即可。

| 最后拿到什么 | 怎么用 |
| --- | --- |
| Markdown 正文 | 继续编辑文字 |
| 排版 HTML 与微信富文本 | 预览、复制公众号正文 |
| 图片和来源记录 | 回查证据、复用对应素材 |

要运行可选的本地排版适配器，在仓库根目录执行 `npm install --ignore-scripts`，再按[完整排版命令](skills/koki-wechat-article/references/raphael.md)操作；支持的官方引擎需单独下载。

## 改成自己的风格

将 [creator.example.yaml](creator.example.yaml) 复制为当前项目中的 `creator.local.yaml`，填写自己的称呼、素材目录与偏好。配置供 Agent 读取，不会自行执行或连接账号。未提供的私人素材、结尾图片和 CTA 应跳过或说明，不寻找原作者的素材。隐私处理见 [PRIVACY.md](PRIVACY.md)。

## 工具

使用 [Raphael Publish](https://publish.raphael.app/)，或仓库提供的[本地适配器](skills/koki-wechat-article/references/raphael.md)。适配器需要 Node.js 20+ 和 `jsdom` 26.1.0，在仓库根目录运行 `npm install --ignore-scripts`。支持的 Raphael 引擎需从官方地址单独下载，本仓库不分发第三方前端构建产物。

## 关于作者与联系

作者：**邓小闲 Koki**，反蒸馏 Skill 作者、社会派编程发起人。

[中文个人网站](https://kokiai.net/zh) · [小红书](https://www.xiaohongshu.com/user/profile/5bfe825044363b01b593585e) · [B站](https://space.bilibili.com/438427470) · [抖音](https://www.douyin.com/user/MS4wLjABAAAAjxdS9GqgpuMLfZGvkM-Kctt6XSkvcr03ouQQv9oNlXHNIC64F4TjKr0cp-dkZcMK)

交流或合作请通过[小红书私信](https://www.xiaohongshu.com/user/profile/5bfe825044363b01b593585e)联系我。技能问题与建议可在本仓库提 issue；请勿在公开 issue 中上传私人素材和账号信息。

## 其他创作 Skill

- [短视频创作 Skill](https://github.com/leilei926524-tech/koki-short-video-skill)
- [长视频创作 Skill](https://github.com/leilei926524-tech/koki-long-video-skill)

## 开源许可

原创技能说明与适配代码采用 [MIT](LICENSE) 许可。第三方产品、字体、媒体与服务保留各自许可和条款。

演示图片与片段用于展示工作流；原片、人物形象及第三方摘录的权利归相应权利人，不随技能代码授予 MIT 许可。详见[素材说明](docs/media/README.md)。
