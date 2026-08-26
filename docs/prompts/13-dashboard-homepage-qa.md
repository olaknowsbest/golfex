# Prompt 13 — Dashboard, Homepage Membership Section, and Navigation QA

Work in `/Users/mac/Desktop/golf/site` on the current `athlete-platform-concept` branch.

This is an independent verification and narrowly scoped correction pass for Prompts 11, 11A, 11B, and 12. Read `CLAUDE.md`, the relevant saved prompts, and the complete current files before testing or editing.

Do not open, display, edit, stage, or process the four sensitive untracked screenshots numbered 17–20 in `docs/reference/dashboard/`. Do not repeat any exposed value.

## Verify first

### Dashboard

Verify `dashboard.html`, `assets/css/page-dashboard-shell.css`, and `assets/js/page-dashboard-shell.js`:

- premium NK card hierarchy and no excessive dead space;
- four compact overview cards: Fan Card, Membership, Orders, Bookings;
- prominent honest `My Fan Card` preview with no invented identity/account fields;
- Orders & payment review, Upcoming bookings, Account notices, Recent activity;
- Merchandise appears only as a non-interactive `Coming later` dashboard-sidebar item;
- no link to `shop.html`;
- no numeric-zero vanity metrics or fabricated customer records;
- drawer opens/closes via toggle, close button, backdrop, and Escape; returns focus, maintains correct ARIA state, and locks background scrolling;
- desktop persistent sidebar and clean tablet/mobile stacking.

### Homepage membership story

Verify `index.html` and `assets/css/page-home-prototype.css`:

- `.home-story` occurs exactly once, after Achievements and before Fan Cards;
- hero `Meet Nazario` links to `#story` and the anchor scrolls correctly;
- rear golf-ball image and approved fictional Nazario cutout render without distortion or obstruction;
- the different-person `about-us-img-2.jpg` is not used;
- outer `Get Membership` text ring rotates while the central NK mark remains upright;
- seal hover and keyboard focus pause rotation and retain visible focus;
- seal links to `pricing-plan.html`;
- touch does not create a stuck hover state;
- `prefers-reduced-motion: reduce` leaves the seal static and usable and disables decorative image movement;
- section stacks cleanly without overlap or clipping at narrow widths.

### Public Shop removal

Verify across every HTML file:

- zero public header/footer or promotional links to `shop.html`;
- public header order is `Home · About / Career · Fan Cards · Contact · Login · Join the Fan Club`;
- mobile menu and remaining active states still work;
- `shop.html` remains on disk and returns HTTP 200 directly, with its body untouched by the navigation-removal task.

## Testing

Serve locally over HTTP. Test representative public pages plus `dashboard.html` at:

- desktop near 1280px;
- tablet near 768px;
- narrow mobile near 390px if tooling permits; disclose the exact width reached otherwise.

Check page-level overflow, console errors, local link/asset resolution, keyboard focus, reduced motion if emulation is available, exactly one `<h1>` per tested page, and `git diff --check`.

Search the changed/new implementation for forms, inputs, auth/session behavior, storage, cookies, mock data, API calls, checkout/payment submission, crypto/wallet/TXID/QR content, admin controls, real athlete/sponsor names, copied customer data, and visible Golfex copy. None should be present in the new dashboard/homepage work.

## Correction boundary

If a clear defect is found, correct only the smallest relevant implementation file among:

- `dashboard.html`
- `assets/css/page-dashboard-shell.css`
- `assets/js/page-dashboard-shell.js`
- `index.html`
- `assets/css/page-home-prototype.css`
- the duplicated public header/footer markup only if a stray Shop link remains

Do not redesign, expand scope, edit documentation, change product decisions, add functionality, or clean unrelated legacy code. Do not modify pre-existing user changes in `docs/AUTHENTICATION-REQUIREMENTS.md`, `docs/prompts/06-contact-concept.md`, or `docs/prompts/08-login-holding-page.md`.

After any correction, rerun the affected checks. If the browser tool is unstable, distinguish source verification from live verification instead of claiming success.

Do not stage, commit, amend, push, create a PR, change branches, or modify Git configuration. Finish with:

1. pass/fail result for each area;
2. exact files changed by this QA pass, if any;
3. exact viewport widths and live/source verification distinctions;
4. `git diff --check` result;
5. final `git status --short`;
6. confirmation that the four sensitive screenshots remain untouched, untracked, and unstaged.
