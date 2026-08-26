# Prompt 14 — Dashboard and Homepage Checkpoint

Work in `/Users/mac/Desktop/golf/site` on the current `athlete-platform-concept` branch.

Create one local Git checkpoint for the completed work since commit `e0cb861`:

- customer dashboard shell and card polish;
- authenticated-dashboard Merchandise placeholder;
- removal of Shop from every public header/footer;
- homepage membership-story section and rotating NK `Get Membership` seal;
- Prompt 13 QA corrections;
- saved prompts/documentation in their current owner-approved state.

Do not redesign, correct product content, restore old prompt files, implement login, add a Google button, choose a backend, or add any functionality in this task.

## Pre-commit checks

1. Confirm branch `athlete-platform-concept` and inspect the full working tree.
2. Stage only the named implementation and documentation work from this checkpoint. Leave all unrelated untracked reference files untouched and unstaged; do not inspect or report their contents.
3. Scan staged candidates for secrets, environment files, credentials, private keys, seed phrases, browser profiles, logs, caches, editor/system artifacts, and unexpectedly large files. Stop and report any new concern.
4. Confirm the dashboard contains no forms/auth/session/storage/API/payment/crypto/admin behavior and no fabricated customer records.
5. Confirm `Merchandise` is a non-interactive dashboard placeholder and no HTML file links to `shop.html`; confirm `shop.html` still exists.
6. Confirm the homepage membership seal links to `pricing-plan.html`, uses the NK center mark, and the approved different-person exclusion remains respected.
7. Run `git diff --check` before staging.

## Stage and commit

Stage the reviewed current project work, including the dashboard files, homepage/navigation changes, QA fixes, and saved prompt/documentation files. Preserve the owner-approved current state of the older prompt-history files; do not restore or rewrite them during this task.

After staging:

- confirm no unrelated untracked reference files entered the staged set;
- run `git diff --cached --check`;
- inspect and report `git diff --cached --stat`;
- stop rather than commit if staged content includes an unexplained file, secret, sensitive screenshot, conflict marker, or diff-check error.

If clean, create exactly one local commit:

`feat: add dashboard prototype and membership story`

Do not amend earlier commits. Do not push, create a PR, set an upstream, change branches, alter remotes, or modify Git configuration.

## Final report

Report:

- commit hash and subject;
- exact staged/committed scope and file count;
- final `git status --short --branch`;
- confirmation that nothing was pushed;
- any excluded or unresolved file.
