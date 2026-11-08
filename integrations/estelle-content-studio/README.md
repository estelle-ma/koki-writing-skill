# Estelle Content Studio — Skills & Tools

This is the integration hub for Estelle's Xiaohongshu editorial cards, long articles, climbing footage, and creator workflow. It is a **staging integration inside the existing `koki-writing-skill` repository**, not a new stand-alone repository. The upstream projects are **pinned Git submodules**, so their original attribution, history and licenses stay intact.

## What is actually included

- 12 pinned upstream Git submodules under [`upstream/`](upstream/), including two already-present Koki forks. The current repository itself contains Koki's writing Skill.
- Two Estelle-specific Agent Skill instruction files: [XHS editorial](../../.agents/skills/estelle-xhs-editorial/SKILL.md) and [climbing video](../../.agents/skills/estelle-climbing-video/SKILL.md).
- A local, opt-in [skill-copying script](scripts/install-local-skills.sh) and an [upstream register](SOURCES.md).

**Important:** A GitHub submodule is source-code registration, not an installed or running Agent Skill. Merely viewing this repository does not install tools on your laptop, connect accounts, enable video editing, or publish posts. Web apps and Codex plugins are documented separately rather than mislabelled as Agent Skills.

## Checkout the sources

After the branch is checked out or the PR is merged:

```bash
git clone --branch estelle-content-studio-skills-20261108 --recurse-submodules https://github.com/estelle-ma/koki-writing-skill.git
cd koki-writing-skill
git submodule update --init --recursive
```

The branch name above is a staging branch; after merging, clone the default branch without `--branch`.

## Opt-in local Agent Skills

Inspect the source and read the original upstream installation instructions before installing dependencies or connecting accounts. For compatible local agents, this script **copies skill files only**. It does not install applications, execute the third-party skill scripts, post to Xiaohongshu or request API keys:

```bash
bash integrations/estelle-content-studio/scripts/install-local-skills.sh
```

By default it uses `~/.agents/skills`; pass an explicit destination for a different agent:

```bash
bash integrations/estelle-content-studio/scripts/install-local-skills.sh "$HOME/.codex/skills"
```

The script skips existing skill folders instead of overwriting them. Separate manual setup is required for Sparki (account/possible paid usage), Obsidian plugin, Xiaohongshu Text Layout (web app), and native Xiaohongshu publishing (cookies/login; explicitly opt-in). EachLabs highlight extraction requires service/API configuration. Remotion rendering requires its own local tooling; the Skill alone doesn't supply a renderer.

## Content rules

1. Estelle is the author. Preserve first-person experiences, original wording, uncertainty, quotes, conclusions and structure unless she requests substantive editing. Do not produce an unsolicited abridgment.
2. Visual styles: National Geographic-like documentary photography, Apple minimal, Swiss typography, and restrained Japanese magazine. Avoid cute, cluttered, flashy template aesthetics.
3. For 1,000–4,000 Chinese character articles, lay out **the complete text** on individually readable cards, with manual review of pagination, Chinese punctuation and source attribution. Do not assume any platform image-count limit.
4. For climbing, protect the truth of the attempts and the visibility of holds and foot placements. Never splice different attempts to falsely imply a send.
5. Never auto-publish; Estelle must check and approve exported assets, permissions and costs.

See each Skill for detailed workflow and deliverable gates.

## Recommended starting point

- **Editorial:** Guizang for visual direction + Xiaohongshu Text Layout for full-text pagination; Lieflat as the alternative cover/longform renderer.
- **Climbing:** FFmpeg for precise cuts + Remotion for overlays; optional Koki ChatCut when a narrated segment needs captions.
- These combinations are proposed workflows and have **not** yet been validated with actual Estelle draft text or climbing footage.

## Legal and security

Licenses remain upstream. Guizang uses **AGPL-3.0** with separate commercial licensing information; do not copy its code into a proprietary derivative without reviewing compliance. The upstream repository list contains optional commercial APIs and social-media automation; do not store tokens, cookies, credentials, private footage or account data in Git. Submodule pinning avoids silently taking upstream updates, but does not replace a security review before local execution.
