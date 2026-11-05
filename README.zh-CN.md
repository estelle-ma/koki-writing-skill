# 文字创作 Skill

[![English](https://img.shields.io/badge/English-2563EB?style=for-the-badge)](README.md) [![简体中文](https://img.shields.io/badge/简体中文-DC2626?style=for-the-badge)](README.zh-CN.md)

把口播和想法整理成保留自己语气的文章，补证据、找真实配图，用 Raphael 完成公众号排版。

这是从我的日常创作流程整理出的独立 Skill，公开版已做脱敏并支持自定义。技能说明与流程参考提供英文和简体中文版本。

## 能做什么

- 保留作者的原话、立场、情绪与叙述顺序。
- 在对应段落补可追溯证据和真实配图。
- 续改保留已确认正文与图片；仅排版时不擅自改词。
- 交付可编辑 Markdown、可复制公众号 HTML、原图与来源记录。
- 实际检查约 390 px 与 360 px 的手机阅读效果。

## 安装与使用

把[本仓库链接](https://github.com/leilei926524-tech/koki-writing-skill)发给你的 Agent，并说明：

```text
安装本仓库 skills/koki-wechat-article 中的技能。如果已有同名 Skill，先保留并说明冲突位置，不要直接覆盖。
```

也可以下载仓库，把完整的 `skills/koki-wechat-article` 文件夹复制到工具的个人技能目录。需要使用支持 Agent Skills 的工具；剪辑还需要可用的编辑器连接。

```text
用 $koki-wechat-article 把这份口播整理成公众号文章。保留我的语气，核对事实、补真实配图，交付可编辑 Markdown 和本地 Raphael 排版稿。
```

默认加载的 [SKILL.md](skills/koki-wechat-article/SKILL.md) 为英文，同时提供完整的[中文说明](skills/koki-wechat-article/SKILL.zh-CN.md)，流程参考包含中英两种语言。实际输出语言按你的要求。

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
