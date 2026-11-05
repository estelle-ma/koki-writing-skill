# Koki Writing Skill

[![English](https://img.shields.io/badge/English-2563EB?style=for-the-badge)](README.md) [![简体中文](https://img.shields.io/badge/简体中文-DC2626?style=for-the-badge)](README.zh-CN.md)

Turn spoken ideas into articles that still sound like you, with evidence, real images, and WeChat-ready Raphael layouts.

A standalone skill from my own creator workflow, shared as a configurable public edition. Instructions and workflow references are available in English and Simplified Chinese.

## What it does

- Preserve the author's wording, stance, emotion, and narrative order.
- Add traceable evidence and real images beside the relevant passages.
- Keep approved text and images when revising; respect layout-only requests.
- Deliver editable Markdown, copyable WeChat HTML, images, and source records.
- Check actual mobile layouts at approximately 390 px and 360 px.

## Install & use

Send [this repository](https://github.com/leilei926524-tech/koki-writing-skill) to your agent and ask:

```text
Install the skill in skills/koki-wechat-article from this repository. If a skill with the same name already exists, keep it and tell me about the conflict before replacing it.
```

Alternatively, download the repository and copy the complete `skills/koki-wechat-article` folder into your tool's personal skill directory. Use a tool that supports Agent Skills; editing also needs an available editor connection.

```text
Use $koki-wechat-article to turn this transcript into a WeChat article. Keep my voice, verify factual claims, find real images, and deliver editable Markdown and a local Raphael layout.
```

The default [SKILL.md](skills/koki-wechat-article/SKILL.md) is in English. A [Chinese edition](skills/koki-wechat-article/SKILL.zh-CN.md) is included; references contain both languages. Output language follows your request.

## Make it yours

Copy [creator.example.yaml](creator.example.yaml) to `creator.local.yaml` in your working project and fill in your name, media directories, and preferences. The agent reads this file; it does not connect accounts or execute by itself. Missing private media or closing text should be skipped or reported, never borrowed from the original author. See [PRIVACY.md](PRIVACY.md).

## Tools

Use [Raphael Publish](https://publish.raphael.app/) or the included [local adapter](skills/koki-wechat-article/references/raphael.md). The optional adapter requires Node.js 20+ and `jsdom` 26.1.0: run `npm install --ignore-scripts` in the repository root. Download the supported Raphael bundle separately from its official source. The bundle is not redistributed here.

## About Koki & contact

Created by **Koki**, creator of Anti-Distill Skill and initiator of Social Coding.

[Website](https://kokiai.net/) · [X / Twitter](https://x.com/kokisanai) · [Instagram](https://www.instagram.com/kokisanai/) · [YouTube](https://www.youtube.com/@kokiainet) · [LinkedIn](https://www.linkedin.com/in/koki-x-309815217/) · [Substack](https://kokimemo.substack.com/)

For collaborations or questions, message me on [X](https://x.com/kokisanai) or [LinkedIn](https://www.linkedin.com/in/koki-x-309815217/). For a skill bug or suggestion, open an issue in this repository. Please keep private media and account details out of public issues.

## Other creator skills

- [Koki Short Video Skill](https://github.com/leilei926524-tech/koki-short-video-skill)
- [Koki Long Video Skill](https://github.com/leilei926524-tech/koki-long-video-skill)

## License

Original skill instructions and adapter code are licensed under [MIT](LICENSE). Third-party products, fonts, media, and services retain their own licenses and terms.
