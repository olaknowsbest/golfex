# Claude Code Prompt 10 — Public Prototype Git Checkpoint

```text
Create a careful local Git checkpoint for the completed Nazario Kayla public-site prototype in `/Users/mac/Desktop/golf/site`.

Do not edit product/page content during this task. Do not switch branches, push, open a PR, merge, rebase, tag, or alter remotes. Remain on `athlete-platform-concept`.

Before staging:

1. Read `CLAUDE.md` and `docs/PENDING-WORK.md`.
2. Confirm the active branch and inspect full `git status --short`, `git diff --stat`, tracked diff, and untracked files.
3. Search staged candidates for secrets or private material: `.env`, credentials, API keys, tokens, private keys, wallet recovery material, browser profiles, server logs, screenshots, caches, temporary files, and editor/system artifacts.
4. Exclude runtime/temporary artifacts and anything unrelated to the project work. Do not delete excluded user files.
5. Confirm the intended checkpoint includes the completed public shell/pages, NK branding/loader, fictional character and concept assets, page CSS/JS, documentation, prompts, and pending-work tracker.
6. Run `git diff --check` and the existing lightweight local verification available for this static site. Confirm all active local pages/assets resolve and there are zero old Golfex loader references.

Then stage only the reviewed project files and show `git diff --cached --stat` plus a concise staged-file summary before committing. If secrets, unrelated files, unresolved conflict markers, broken active-page assets, or diff-check errors are found, stop and report them instead of committing.

If clean, create exactly one local commit with message:

`feat: build fictional athlete public prototype`

After committing, report:

- commit hash and subject;
- files included/excluded;
- verification results;
- `git status --short --branch`;
- confirmation that nothing was pushed.

Do not start backend, authentication, dashboard, legacy-page cleanup, or any pending feature in this task.
```
