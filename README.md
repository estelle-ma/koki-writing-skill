# Koki Creator Skills

把一个想法做成公众号、竖屏短视频和长视频的 AI 创作工作流。

由 Koki 的日常使用流程整理，公开版移除了个人路径、私有素材、历史项目标识和账号信息。适合在支持 Agent Skills 的工具中使用；视频流程主要配合 ChatCut，公众号使用 Raphael Publish 排版。

## 三个 Skill

| Skill | 用途 |
| --- | --- |
| [koki-wechat-article](skills/koki-wechat-article/SKILL.md) | 把口播和观点稿整理成保留作者语气的公众号文章，查证、配真实图片、排版与本地交付 |
| [vertical-talking-head](skills/vertical-talking-head/SKILL.md) | 竖屏单人口播：降噪、精剪、按语言分组的字幕、首帧封面、素材与结尾引导 |
| [long-video-editing](skills/long-video-editing/SKILL.md) | 教程与访谈长视频：文稿、结构、截图、小窗、字幕、章节、封面及 shownote |

## 使用方法

把本仓库链接发给 Codex，并说明：

> 用 $skill-installer 安装这个仓库 skills/ 下的三个 Skill。保留我已有的同名技能，先说明冲突位置。

也可以下载仓库，把需要的整个 Skill 文件夹放进工具的个人技能目录。Codex 的本地技能目录与安装方式以 [OpenAI 官方文档](https://learn.chatgpt.com/docs/build-skills) 为准。出现同名技能时先备份或选择一个版本。

安装后，可以这样说：

```text
用 $koki-wechat-article 把这份口播整理成公众号文章，保留我的语气，补真实配图，交付可编辑正文和本地排版。

用 $vertical-talking-head 剪这段竖屏口播，使用我提供的素材目录，按中文意思组做字幕，保留可编辑项目。

用 $long-video-editing 整理这次访谈，先给我完整转写和结构建议，等我确定文稿再剪。
```

## 改成自己的风格

将 [creator.example.yaml](creator.example.yaml) 复制成工作区里的 `creator.local.yaml`，填写自己的名字、素材目录、字幕偏好和结尾引导。这个配置由 Agent 阅读，不会自动连接账号或上传素材。

`creator.local.yaml`、私人素材、工作文件和导出文件已加入 `.gitignore`。不要把自己的照片、未公开文稿或登录信息提交到仓库。详细说明见 [PRIVACY.md](PRIVACY.md)。

未提供结尾照片或引导文案时，Agent 应跳过对应部分或说明缺失，不寻找原作者的私人素材，也不替使用者补造身份与经历。

## 工具与依赖

- 视频需要当前环境已连接、可用的编辑器工具。ChatCut 的安装和能力以 [官方文档](https://chatcut.io/docs/web-plugin) 为准；本仓库不包含 ChatCut 官方插件及其内置技能。
- Raphael 排版可使用 [官网](https://publish.raphael.app/)，或本仓库的本地适配脚本。脚本用法见 [Raphael 本地排版](skills/koki-wechat-article/references/raphael.md)。只使用写作或视频流程时，无需安装 Node 依赖。
- 如果运行 Raphael 本地适配器，需要 Node.js 20+ 和 `jsdom` 26.1.0。在仓库根目录运行 `npm install --ignore-scripts`。Raphael 引擎由使用者从官方地址单独下载；不随本仓库分发。
- 视频生成、图像生成、素材库、字体、编辑器与外部服务的费用及使用条款由各自提供方决定。

## 检查公开文件

```sh
python3 scripts/check_public_package.py
```

检查本仓库公开文件中的常见密钥格式、私人绝对路径、联系方式、项目标识和不应提交的媒体文件。检查结果不能代替人工审阅。

## 开源许可

本仓库原创 Skill 文本和本地适配代码采用 [MIT](LICENSE) 许可。Raphael、ChatCut、外部字体及其他第三方资源分别遵守其自身许可；本仓库不授予这些产品、服务或素材的使用权。
