# Claude Code Prompt 09 — Active Public-Site QA

Copy the block below into Claude Code in `/Users/mac/Desktop/golf/site`.

```text
Perform Prompt 09: final QA and narrowly scoped corrections for the active fictional Nazario Kayla public site.

Read `CLAUDE.md`, core docs, Prompts 01–08, and `docs/AUTHENTICATION-REQUIREMENTS.md`. Preserve branch `athlete-platform-concept`, the dirty worktree, and completed designs; do not commit.

Scope is only these seven active pages and their existing dedicated/shared assets:

- `index.html`
- `about-us.html`
- `stats.html`
- `pricing-plan.html`
- `shop.html`
- `contact-us.html`
- `login.html`

Do not edit, delete, rename, or relink any legacy/unlinked Golfex page. Do not redesign content, add features, choose a backend, add forms/auth/dashboard/payment behavior, or perform broad dependency cleanup. Fix only issues demonstrated by the checks below. Before changing anything, report the issue, affected file, and intended narrow fix.

Audit and correct where necessary:

1. Shared shell consistency: exact header/nav order, correct `aria-current`, NK logos, NK loader, mobile menu, skip link, footer, disclosure, and no unexpected section-to-footer gaps.
2. Identity/content: no visible Nelly/Korda, real-brand affiliation, copied NK Management identity, or visible Golfex body copy; fictional/prototype status remains clear.
3. HTML: one H1 per page, logical headings, unique ids, valid same-page anchors, no accidental nested interactive controls, useful image alt text, decorative SVG/icon treatment, and valid HTML structure.
4. Links/assets: every local href/src on these pages resolves over HTTP; distinguish intentional `#` footer placeholders from broken paths. No old Golfex loader reference.
5. Responsiveness: test 1280px, 768px, and an actual viewport near 390px. If the in-app resize tool cannot reach 390px, use another safe local browser method if available; otherwise disclose the limitation and inspect/test at ≤390px using a contained rendering method. No page-level horizontal overflow.
6. Keyboard/accessibility: visible focus, mobile-menu focus/escape behavior, focusable scroll tables, `<details>` usability, adequate text contrast, reduced-motion loader source rules, and no color-only status meaning.
7. Runtime: no console errors, stuck loader, failed assets, accidental external network requests required for core content, fake functional controls, forms, local/session storage, cookies, or application state.
8. Cross-page consistency: Fan Card names/prices, fictional stats/totals, prototype language, CTA destinations, palette, button labels, and page titles/meta descriptions agree.
9. Performance sanity: identify obviously unused or duplicate assets loaded by these seven pages, but remove a reference only when proven safe for all seven pages and within this scope. Do not purge files from disk.

Verification report must include:

- checks run and exact viewport sizes;
- every issue found, including issues intentionally deferred;
- every changed file and reason;
- HTTP/console/overflow/accessibility results per page;
- confirmation that legacy pages were untouched;
- final `git status --short` summary;
- no commit.

If all seven pages already pass a check, say so and do not manufacture a change. Start with a read-only audit, then apply only proven corrections, then retest the full active set.
```
