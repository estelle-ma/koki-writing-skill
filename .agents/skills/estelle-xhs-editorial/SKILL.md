---
name: estelle-xhs-editorial
description: Long-form Xiaohongshu editorial layout and covers for Estelle's author-written articles, documentary fieldnotes, sports science and career reflections.
---

# Estelle XHS Editorial

## Authorship is a hard boundary

Estelle writes the article. Do not invent experience, emotion, dialogue, fieldnotes, citations, interviews, or conclusions. Preserve wording and voice as the default. Offer proposed substantive changes separately, with reasons and explicit approval. Do not turn a 2,000–4,000 character essay into a short "viral post" unless expressly asked.

## Inputs and modes

Ask for an existing draft, source photos/data and chosen visual direction only if missing and necessary. Default to **layout-only**. Modes: (a) cover only, (b) full-text card pagination, (c) a separately requested condensed carousel. Make editorial changes traceable against original text. Never infer that Xiaohongshu's native long-form editor supports this CSS; exported image cards are a separate publishing method.

## Art direction

- Documentary / National Geographic-like: authentic photographs, location/time (when supplied), labels that distinguish observations, interview quotations and analysis, restrained accent color.
- Apple minimal: large negative space, careful type scale, at most one prominent image or core idea on the cover.
- Swiss: rigorous grid, consistent baseline and hierarchy, single accent color, factual diagrams with citations.
- Japanese editorial: airy but purposeful pacing, restrained typography and informative captions; not kawaii and not busy.

Use user-owned imagery first. Obtain image rights and attribution before including third-party photos. Never generate a fabricated documentary photograph and present it as genuine evidence.

## Layout protocol

1. Extract the text **without rewriting**. Keep an audit trail of headings, quotes, footnotes and source citations.
2. Choose cover concept and one consistent system for all subsequent pages. Target initial 3:4 image cards (e.g. 1080 x 1440); check actual device and platform before final export.
3. For articles exceeding 1,000 Chinese characters, render the **entire original** into a sequence of image pages using real font/DOM measurements where possible, not guessed character counts. Preserve CJK line-breaking, widows/orphans and text contrast; never crop text.
4. Use Guizang for cover/editorial concepts, Xiaohongshu Text Layout for measured pagination, or Lieflat as an alternative. These are upstream modules in `integrations/estelle-content-studio/upstream/`, not tools assumed installed in the current session.
5. Render and visually inspect every page at phone scale. Check no occluded text, traceable captions, no missing pages, and reliable reading order.
6. Deliver the full original article, image set, a page-to-paragraph mapping, source list, and a change log that explicitly distinguishes layout changes from editorial suggestions.

Publishing is never automatic. If a platform imposes an image-count limit, report it and propose splitting or a different publishing format; do not silently delete the author's paragraphs.
