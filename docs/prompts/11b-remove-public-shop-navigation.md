# Prompt 11B — Remove Shop from the Public Site Navigation

Work in `/Users/mac/Desktop/golf/site` on the current `athlete-platform-concept` branch.

Read `CLAUDE.md`, `docs/PENDING-WORK.md`, the current public shell markup, and `dashboard.html` before editing.

## Confirmed product decision

Merchandise will eventually be available only to authenticated customers inside the dashboard. Remove Shop completely from public navigation now. Keep the existing `shop.html` and its assets on disk as an unlinked design reference until the authenticated merchandise stage; do not delete or redesign them in this task.

## Scope

Across every HTML page that contains the shared public shell:

- remove the `Shop` item linking to `shop.html` from the public header navigation;
- remove the `Shop` item linking to `shop.html` from the public footer navigation;
- preserve the order and behavior of all remaining links;
- preserve the mobile menu, active states, header CTA, footer, loader, and page bodies.

The resulting public header order must be:

`Home · About / Career · Fan Cards · Contact · Login · Join the Fan Club`

`Join the Fan Club` remains the CTA and retains its existing destination for now.

Also remove any public-page CTA or promotional link whose destination is `shop.html`, if one exists outside `shop.html`. Do not replace it with a fake destination; report what was removed. Do not alter content inside `shop.html` except removing Shop from its own copied public header/footer shell so the shared shell stays consistent.

On `dashboard.html`, ensure there is no link to `shop.html`. The dashboard's `Merchandise` item must remain a non-interactive `Coming later` placeholder; do not change it into a link.

## Hard boundaries

- Do not delete `shop.html` or any shop assets.
- Do not add authentication, catalogue, cart, checkout, orders, payment, crypto, storage, API, or backend behavior.
- Do not change public body designs or unrelated copy.
- Do not open or process the four sensitive untracked screenshots numbered 17–20 in `docs/reference/dashboard/`.

## Verification

1. Zero public header/footer links to `shop.html` across all HTML files.
2. Zero links to `shop.html` from `dashboard.html`; `Merchandise` is present as non-interactive `Coming later` text.
3. `shop.html` still exists and returns HTTP 200 when opened directly.
4. Every remaining public navigation/footer link resolves HTTP 200.
5. Desktop and mobile public navigation still render and operate correctly, with no overflow or console errors.
6. No files outside the necessary HTML shell copies are changed.
7. The four sensitive screenshots remain untouched, untracked, and unstaged.
8. `git diff --check` passes.

Do not commit, amend, push, create a PR, change branches, or modify Git configuration. Finish with exact files changed, verification results, `git status --short`, and any limitation.
