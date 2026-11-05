# Privacy / 隐私说明

## English

This public edition contains reusable instructions, source code where needed, and neutral example configuration. Private paths, historical project identifiers, private editor links, original media, unpublished transcripts, credentials, and personal closing assets have been removed. The public website and social profiles in the READMEs are intentionally included as author contact links.

Keep your configuration in `creator.local.yaml` and media outside the public repository. These files, common media formats, working outputs, and credentials are covered by `.gitignore`. Only import material needed and authorized for the current task. Installing a skill does not authorize uploads, messages, scheduling, or public publication; follow the current user's request.

Run `python3 scripts/check_public_package.py` before contributing and inspect the staged files and commit metadata. The scanner checks common secret formats, private paths, email addresses, project identifiers, and local references; it does not replace review. `.gitignore` cannot remove anything already committed. Revoke exposed credentials before cleaning history.

## 简体中文

公开版只包含可复用的技能说明、必要源代码和中性的示例配置。已移除私人路径、历史项目标识、私有编辑器链接、原片、未公开文稿、凭证及个人固定收尾素材。README 中的个人网站与社交主页是按作者要求公开保留的联系入口。

私人配置放在 `creator.local.yaml`，素材保存在自己的非公开目录。配置、常见媒体、工作文件、导出文件和凭证已加入 `.gitignore`。只导入当前任务需要且已获授权的素材；安装 Skill 本身不代表允许上传、发消息、排期或公开发布，仍按当前用户的请求执行。

贡献前运行 `python3 scripts/check_public_package.py`，再人工检查待提交文件和提交署名。扫描器检查常见密钥、私人路径、邮箱、项目标识与相对引用，不能替代人工审阅。`.gitignore` 不能清除历史文件；凭证一旦泄露，应先撤销或轮换，再处理历史。
