#!/usr/bin/env python3
"""Check the files intended for the public skills repository, without printing secrets."""
from pathlib import Path
import re
import subprocess
import sys

ROOT = Path(sys.argv[1]).resolve() if len(sys.argv) > 1 else Path(__file__).resolve().parents[1]
ROOT_FILES = {"README.md", "README.zh-CN.md", "PRIVACY.md", "LICENSE", ".gitignore", "creator.example.yaml", "package.json", "package-lock.json"}
ALLOWED_SUFFIXES = {".md", ".yaml", ".cjs", ".py"}
PATTERNS = {
    "private-absolute-path": re.compile(r"/(?:Users|home|private/var|var/folders)/[^\s`\"'<>]+"),
    "windows-user-path": re.compile(r"\b[A-Za-z]:\\Users\\[^\s`\"'<>]+"),
    "github-token": re.compile(r"\b(?:gh[pousr]_[A-Za-z0-9_]{20,}|github_pat_[A-Za-z0-9_]{30,})\b"),
    "private-key": re.compile(r"-----BEGIN (?:[A-Z ]+ )?PRIVATE KEY-----"),
    "email-address": re.compile(r"\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b"),
    "private-project-id": re.compile(r"\b[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}\b", re.I),
    "signed-or-authorized-url": re.compile(r"(?:editor-boot-token|X-Amz-Signature|GoogleAccessId|access_token|refresh_token)\s*[=:]\s*[A-Za-z0-9%_./+-]{8,}", re.I),
    "assigned-secret": re.compile(r"(?:api[_-]?key|client[_-]?secret|password)\s*[=:]\s*[\"']?[A-Za-z0-9_./+-]{16,}", re.I),
}

def candidates():
    if (ROOT / ".git").exists():
        try:
            result = subprocess.run(["git", "-C", str(ROOT), "ls-files", "--cached", "--others", "--exclude-standard", "-z"], capture_output=True, check=True)
            return sorted({ROOT / s.decode("utf-8") for s in result.stdout.split(b"\0") if s})
        except (OSError, subprocess.CalledProcessError):
            pass
    return sorted(p for p in ROOT.rglob("*") if p.is_file() and not any(part in {".git", "node_modules", "__pycache__"} for part in p.relative_to(ROOT).parts))

def check():
    findings = []
    files = candidates()
    for path in files:
        rel = path.relative_to(ROOT)
        allowed = str(rel) in ROOT_FILES or (rel.parts[0] in {"skills", "scripts"} and path.suffix in ALLOWED_SUFFIXES)
        if not allowed:
            findings.append((str(rel), 0, "unexpected-public-file"))
            continue
        try:
            content = path.read_text(encoding="utf-8")
        except UnicodeError:
            findings.append((str(rel), 0, "non-text-file"))
            continue
        for name, pattern in PATTERNS.items():
            for match in pattern.finditer(content):
                findings.append((str(rel), content.count("\n", 0, match.start()) + 1, name))
        if path.suffix == ".md":
            for target in re.findall(r"\[[^\]]*\]\(([^\s)]+)\)", content):
                if "://" in target or target.startswith("#"):
                    continue
                local = (path.parent / target.split("#", 1)[0]).resolve()
                if not local.is_relative_to(ROOT) or not local.exists():
                    findings.append((str(rel), 0, "missing-or-external-local-reference"))
    for rel, line, name in findings:
        print(f"{rel}:{line}: {name}")
    print(f"Checked {len(files)} public files; {len(findings)} finding(s).")
    return 1 if findings else 0

if __name__ == "__main__":
    sys.exit(check())
