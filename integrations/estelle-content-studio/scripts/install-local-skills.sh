#!/usr/bin/env bash
# Copy only selected skills after submodules have been checked out.
# No third-party code or API operations are executed by this installer.
set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../.." && pwd)"
UPSTREAM="$ROOT/integrations/estelle-content-studio/upstream"
TARGET="${1:-$HOME/.agents/skills}"
mkdir -p "$TARGET"
copy_skill() {
  local name="$1"; local source="$2"
  if [[ ! -f "$source/SKILL.md" ]]; then
    echo "SKIP $name (SKILL.md missing; initialize submodules first)"
    return
  fi
  if [[ -e "$TARGET/$name" ]]; then
    echo "SKIP $name (destination already exists)"
    return
  fi
  cp -R "$source" "$TARGET/$name"
  if [[ -f "$TARGET/$name/.git" ]]; then rm "$TARGET/$name/.git"; fi
  echo "COPIED $name"
}
copy_skill estelle-xhs-editorial "$ROOT/.agents/skills/estelle-xhs-editorial"
copy_skill estelle-climbing-video "$ROOT/.agents/skills/estelle-climbing-video"
copy_skill guizang-social-card-skill "$UPSTREAM/guizang-social-card-skill"
copy_skill frontend-post "$UPSTREAM/frontend-post"
copy_skill ffmpeg-skill "$UPSTREAM/ffmpeg-skill"
copy_skill lieflat-xhs-cover "$UPSTREAM/lieflat-html-design/skills/lieflat-xhs-cover"
copy_skill lieflat-xhs-longform "$UPSTREAM/lieflat-html-design/skills/lieflat-xhs-longform"
copy_skill video-highlight-extraction "$UPSTREAM/eachlabs-skills/skills/video-highlight-extraction"
copy_skill vertical-talking-head "$UPSTREAM/koki-short-video-skill/skills/vertical-talking-head"
copy_skill long-video-editing "$UPSTREAM/koki-long-video-skill/skills/long-video-editing"
copy_skill koki-wechat-article "$ROOT/skills/koki-wechat-article"
# Remotion best-practices is a router that may rely on sibling skills. Copy its family.
if [[ -d "$UPSTREAM/remotion-skills/skills" ]]; then
  for d in "$UPSTREAM"/remotion-skills/skills/*; do
    if [[ -d "$d" && -f "$d/SKILL.md" ]]; then
      copy_skill "$(basename "$d")" "$d"
    fi
  done
fi
echo "Not auto-installed: web applications, Obsidian plugin, Sparki plugin, Xiaohongshu publishing automation."
echo "Review upstream terms, external accounts, API costs, assets and scripts before any runtime use."
