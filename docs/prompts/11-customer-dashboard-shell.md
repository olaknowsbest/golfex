# Prompt 11 — Customer Dashboard Shell Prototype

Work in `/Users/mac/Desktop/golf/site` on the current `athlete-platform-concept` branch.

Read completely before editing:

- `CLAUDE.md`
- `docs/DASHBOARD-REFERENCE.md`
- `docs/PENDING-WORK.md`
- `docs/AUTHENTICATION-REQUIREMENTS.md`
- the existing public shell and active-page files needed to preserve the NK design system

Do **not** open, display, edit, stage, or otherwise process these sensitive untracked screenshots:

- `docs/reference/dashboard/17-crypto-payment-top.png`
- `docs/reference/dashboard/18-crypto-wallet-qr.png`
- `docs/reference/dashboard/19-crypto-instructions-txid.png`
- `docs/reference/dashboard/20-crypto-submission.png`

## Goal

Build only the responsive visual shell for the future signed-in customer dashboard. This is a static, honestly labelled interface prototype that establishes layout, navigation, hierarchy, reusable states, and future integration points. It is **not** authentication or a functioning customer account.

## Files and scope

Create:

- `dashboard.html`
- `assets/css/page-dashboard-shell.css`
- `assets/js/page-dashboard-shell.js` only if a small amount of JavaScript is genuinely needed for the responsive sidebar; do not add application state

Do not redesign or edit the seven active public pages, shared public header/footer, loader, public navigation, login holding page, or backend documentation during this brick. Do not link the dashboard from the public site yet.

## Visual direction

Use the existing NK black, cream, sand, white, and yellow system, Inter Tight typography, rounded bordered cards, restrained shadows, and accessible focus states. Draw only general layout ideas from the safe dashboard references and `docs/DASHBOARD-REFERENCE.md`:

- persistent desktop sidebar;
- compact top bar;
- clear page title and status context;
- summary/empty-state cards;
- recent-activity panels;
- responsive stacking.

Do not copy NK Management branding, electric-blue identity, wording, customer data, prices, wallet information, QR codes, chat widget, or proprietary assets.

## Required dashboard structure

### Sidebar

Use this focused first-release information architecture:

1. Dashboard — active
2. My Fan Cards
3. My Memberships
4. My Orders
5. My Payments
6. My Bookings
7. Profile
8. Logout

For this shell, only `Dashboard` should navigate to `dashboard.html`. Items whose screens do not exist must be visually honest non-functional placeholders—not broken links and not controls that pretend to work. `Logout` must not simulate logout. Include a clear `Prototype` label near the NK dashboard identity.

### Top bar

- responsive sidebar/menu toggle where needed;
- page/context label;
- neutral account placeholder such as `Account preview`;
- no merchandise search, cart, notifications, avatar photo, real name, member ID, or personal data.

### Main overview

Use one `<h1>Customer dashboard preview</h1>` and concise copy explaining that live account information will appear after secure account access is implemented.

Include four useful overview cards, without invented numbers or fake customer records:

- Fan card — `No active fan card`
- Membership — `No active membership`
- Orders — `No orders to display`
- Bookings — `No upcoming bookings`

Each should use an original/simple icon treatment and an honest empty-state description. Where helpful, link only to an existing public concept page such as `pricing-plan.html`; otherwise use plain text, not fake buttons.

Below the cards, include:

- `Recent activity` empty state;
- `Account notices` panel explaining that verification, payment review, membership activation, and booking updates will eventually appear here;
- a compact `Explore the public prototype` panel linking to Fan Cards, Shop, Contact, and Home.

Do not add zero-filled vanity metrics or fabricate status, history, dates, amounts, progress, notifications, or identities.

## Responsive and accessibility requirements

- Desktop sidebar; compact off-canvas/drawer behavior below an appropriate breakpoint.
- Menu closes with its close control, backdrop click, and Escape; return focus to the opener.
- Correct `aria-expanded`, `aria-controls`, active/current state, and meaningful labels.
- Prevent background scrolling while the mobile drawer is open.
- One `<h1>` only and logical heading order.
- Skip link targeting `#dashboard-main`.
- Visible keyboard focus styles and adequate contrast.
- No page-level horizontal overflow at desktop, tablet, and narrow mobile widths.
- Respect `prefers-reduced-motion`.

## Hard boundaries

Do not add:

- login, registration, Google OAuth, password, session, logout, or access-control behavior;
- forms or editable profile fields;
- local/session storage, cookies, mock JSON, API calls, `fetch`, databases, or backend simulation;
- payment submission, crypto networks, wallets, addresses, QR codes, TXIDs, uploads, or approval controls;
- admin UI;
- donations, subscriptions, personalized messages, merchandise/cart controls, or live support;
- fake user data, demo credentials, fake counts, or claims that anything is connected.

Do not choose a backend or authentication provider in this task.

## Verification

Serve locally over HTTP and verify:

1. Desktop, tablet, and narrow-mobile layouts, disclosing any tooling width limitation.
2. Sidebar/drawer behavior and keyboard interactions.
3. Exactly one `<h1>`, no page-level overflow, and no console errors.
4. All real links resolve with HTTP 200; placeholders are not broken anchors.
5. Zero forms, inputs, storage, cookies, API calls, auth libraries, fake customer records, payment/crypto data, or real athlete/brand names.
6. Public pages and shared public shell remain untouched.
7. The four excluded sensitive screenshots remain untracked, untouched, and unstaged; do not repeat any exposed value.
8. `git diff --check` passes.

Do not commit, amend, push, create a PR, change branches, or modify Git configuration. Finish with an exact file summary, verification results, `git status --short`, and any honestly disclosed limitation.
