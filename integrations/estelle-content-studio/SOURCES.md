# Upstream register (verified 2026-11-08)

Each entry is a Git submodule pinned to the listed commit; these are GitHub-hosted source copies, not evidence of a successful runtime install.

| Name | Source | Type | Pinned revision |
| --- | --- | --- | --- |
| `guizang-social-card-skill` | [op7418/guizang-social-card-skill](https://github.com/op7418/guizang-social-card-skill) | Agent Skill, root SKILL.md | `64d02d435fb0` |
| `xiaohongshu-text-layout` | [NowhereMan-in-Galaxy/xiaohongshu-text-layout](https://github.com/NowhereMan-in-Galaxy/xiaohongshu-text-layout) | Browser app, NOT Agent Skill | `8dd423e36238` |
| `lieflat-html-design` | [larashero3-dotcom/lieflat-html-design](https://github.com/larashero3-dotcom/lieflat-html-design) | Agent Skills (cover + longform inside skills/) | `0bff0af53095` |
| `frontend-post` | [KellyGong0301/frontend-post](https://github.com/KellyGong0301/frontend-post) | Agent Skill, root SKILL.md | `0c19e9a4d40c` |
| `obsidian-note-renderer` | [filosfino/obsidian-note-renderer](https://github.com/filosfino/obsidian-note-renderer) | Obsidian plugin, NOT Agent Skill | `408745be69bc` |
| `sparki-video-editor` | [sparki-ai/sparki-video-editor](https://github.com/sparki-ai/sparki-video-editor) | Codex plugin + cloud service | `7932999d296b` |
| `eachlabs-skills` | [eachlabs/skills](https://github.com/eachlabs/skills) | Agent Skills; video-highlight-extraction is a nested skill | `7f1f4ff84707` |
| `ffmpeg-skill` | [kajisho5/ffmpeg-skill](https://github.com/kajisho5/ffmpeg-skill) | Agent Skill, root SKILL.md | `6e42a7924790` |
| `remotion-skills` | [remotion-dev/skills](https://github.com/remotion-dev/skills) | Agent Skills; remotion-best-practices is nested | `a2824c67f8b4` |
| `xiaohongshu-publishing` | [white0dew/XiaohongshuSkills](https://github.com/white0dew/XiaohongshuSkills) | Xiaohongshu publishing Skill; authentication needed | `32bea86ea4bc` |
| `koki-short-video-skill` | [estelle-ma/koki-short-video-skill](https://github.com/estelle-ma/koki-short-video-skill) | User-owned fork; nested video Skill | `e337e040ab48` |
| `koki-long-video-skill` | [estelle-ma/koki-long-video-skill](https://github.com/estelle-ma/koki-long-video-skill) | User-owned fork; nested video Skill | `c41dbaf7a990` |

The repository root itself is [estelle-ma/koki-writing-skill](https://github.com/estelle-ma/koki-writing-skill), already in the user's GitHub account.

## License/readiness notes

- `guizang-social-card-skill`: AGPL-3.0; review [COMMERCIAL_LICENSING.md](https://github.com/op7418/guizang-social-card-skill/blob/main/COMMERCIAL_LICENSING.md) and the license before reuse.
- `xiaohongshu-text-layout`, `lieflat-html-design`, `frontend-post`, `obsidian-note-renderer`, `ffmpeg-skill` and `xiaohongshu-publishing`: MIT license files observed.
- `sparki-video-editor`: README states MIT-0, but no root LICENSE file was found; requires an account and may involve paid runs.
- `eachlabs-skills`: README states MIT, but no root LICENSE file was found. Some features require service API credentials/charges.
- `remotion-skills`: official upstream skill documentation; no root LICENSE file found in this repository. Check the relevant Remotion product license before commercial use.
- Koki forks: respect upstream authorship, individual licenses, dependencies and media rights.

No licenses have been altered, and no third-party source files are copied verbatim into the two Estelle-authored workflow Skills.

## What isn't yet verified

- Whether the actual renderers work on Estelle's operating system.
- Whether the on-platform Xiaohongshu account accepts a particular page count, image size or Live Photo output.
- Whether any cloud video service identifies rock-climbing moves or sends accurately.
- Whether a client has installed these skills locally. GitHub submodules alone cannot provide runtime capability.
