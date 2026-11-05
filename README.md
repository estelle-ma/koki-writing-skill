# Koki Writing Skill

[![English](https://img.shields.io/badge/English-2563EB?style=for-the-badge)](README.md) [![简体中文](https://img.shields.io/badge/简体中文-DC2626?style=for-the-badge)](README.zh-CN.md)

Turn spoken ideas into articles that still sound like you, with evidence, real images, and WeChat-ready Raphael layouts.

A standalone skill from my own creator workflow, shared as a configurable public edition. Instructions and workflow references are available in English and Simplified Chinese.

## See the result

**An English script becomes a readable English article.** This is a real mobile rendering of an excerpt from my English article, “What the Midterms Mean for America’s AI Race,” with source notes and an English copy button.

<p align="center">
  <img src="docs/media/article-opening-en.jpg" width="375" alt="Actual English article: English headline, body, source notes and Copy article button">
</p>

| You provide | You get |
| --- | --- |
| A rough transcript, idea, or draft | An editable article preserving your wording and stance |
| Claims and topics that need support | Sources, relevant real images, and captions |
| Your layout preferences | A Raphael layout with a copy-to-WeChat button |

Try the English example: [source script excerpt](examples/source-script-en.txt) → [article Markdown](examples/article-en.md) → [Raphael HTML](examples/article-preview-en.html). Download the HTML and open it in a browser to try **Copy article**. The screenshot and downloadable files show the same English excerpt.

## Quick start

### 1. Prepare the tools

Use Codex or another Agent Skills-compatible agent with access to your text/files. Research and real web images need browsing. Layout uses [Raphael Publish](https://publish.raphael.app/); the included optional local adapter needs Node.js 20+ and `jsdom` 26.1.0. Writing alone does not need a video editor.

### 2. Install this skill

Paste the following into Codex:

```text
$skill-installer Install the skill from
https://github.com/leilei926524-tech/koki-writing-skill/tree/main/skills/koki-wechat-article
Keep an existing skill with the same name and report a conflict before replacing it.
```

Start a new chat after installation, then invoke `$koki-wechat-article`. Other Agent Skills-compatible tools can use the same complete `skills/koki-wechat-article` folder through their own installation method. See [Codex skills documentation](https://learn.chatgpt.com/docs/build-skills).

### 3. Provide your material

Paste a transcript/draft or attach a text file. Include any must-keep wording, verified source links, preferred title, and image folder. A rough voice-input transcript is enough to begin; an existing final draft can also be used for layout only.

### 4. Make your first article

```text
Use $koki-wechat-article.
Input: the transcript I attached.
Language: English. Keep my voice, opinions, and meaningful repetition.
Verify names and factual claims; add relevant real images with sources.
Use the Raphael sspai theme and check mobile readability.
Deliver editable Markdown, local layout HTML, WeChat rich text, images, and source notes.
Save the draft in ./outputs/my-article/.
```

Want to try before preparing your own material? Point the agent to `examples/source-script-en.txt` and ask it to make a layout in English from that excerpt.

### 5. Revise and use the result

```text
Keep the body text and approved images unchanged. Only adjust paragraphs,
heading hierarchy, emphasis, and image placement for phone reading.
```

Open the delivered layout HTML in a browser → click **Copy article** → paste into WeChat's editor → check the images and final appearance → publish when ready. The Markdown remains editable for later revisions.

| Deliverable | Purpose |
| --- | --- |
| Markdown | Continue editing the text |
| Layout HTML + WeChat rich text | Preview and copy the formatted article |
| Images and source records | Trace evidence and reuse relevant assets |

For the optional local adapter, run `npm install --ignore-scripts` in the repository root and follow [the complete render command](skills/koki-wechat-article/references/raphael.md). The supported official engine is downloaded separately.

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

Demo media are included for showcasing the workflow; rights in the footage, likenesses, and third-party excerpts remain with their respective owners and are not granted by the MIT code license. See [media details](docs/media/README.md).
