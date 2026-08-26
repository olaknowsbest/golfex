# Prompt 11A — Dashboard Card Hierarchy and NK Visual Polish

Work in `/Users/mac/Desktop/golf/site` on the current `athlete-platform-concept` branch.

Read `CLAUDE.md`, `docs/DASHBOARD-REFERENCE.md`, and the complete current `dashboard.html`, `assets/css/page-dashboard-shell.css`, and `assets/js/page-dashboard-shell.js` before editing.

Do not open, display, edit, stage, or process the four sensitive untracked screenshots numbered 17–20 in `docs/reference/dashboard/`. Do not repeat any exposed value.

## Goal

Polish the existing static dashboard shell so its cards feel premium, purposeful, and recognizably NK. Preserve its honest prototype boundary and responsive/accessibility behavior. This is a visual hierarchy correction, not a new feature stage.

Use the supplied NK Management dashboard screenshots only as general composition inspiration: compact summary cards, icon tiles, status labels, panel headers, populated/empty-state distinction, and quick actions. Do not copy its branding, blue palette, wording, customer data, counts, chat widget, search, donations, subscriptions, or functionality.

## Allowed files

Edit only:

- `dashboard.html`
- `assets/css/page-dashboard-shell.css`
- `assets/js/page-dashboard-shell.js` only if necessary to preserve/fix the existing drawer behavior; otherwise leave it untouched

Do not edit or link from public pages, shared shell files, documentation, authentication/backend files, or assets outside this dashboard.

## Required redesign

### 1. Compact overview row

Retain four cards: Fan Card, Membership, Orders, and Bookings. Make them more compact and scannable:

- small colored icon tile at the top;
- uppercase category label;
- honest primary state instead of a numeric `0`;
- restrained status chip such as `Not active`, `None yet`, or `No upcoming`;
- one short supporting line;
- subtle hover/focus lift and border treatment, never required to reveal information.

Use coordinated NK treatments—yellow, cream, sand, and muted neutral variants—not unrelated rainbow colors. Fan Card may receive the strongest yellow emphasis.

### 2. Main content hierarchy

Replace the current three equal generic panels with a deliberate dashboard composition:

- A wide `My Fan Card` feature panel containing an original visual inactive-card mockup using the NK monogram/ball-flight motif. It must say `Fan Card preview` and `No active fan card`; do not invent a member name, number, tier, issue date, expiry, barcode, QR code, or entitlement. Include a real link to `pricing-plan.html` labelled `Explore Fan Cards`.
- An `Orders & payment review` panel with an honest empty state explaining that order and review updates will appear after secure account features exist. No amounts, payment methods, crypto details, fake orders, or submission controls.
- An `Upcoming bookings` panel with a compact empty state and no create-booking control yet.
- An `Account notices` panel explaining that verification, membership activation, payment review, and booking updates will eventually appear here.
- A wide `Recent activity` empty state that does not fabricate history.

On wide screens, use an intentional asymmetric grid: the Fan Card panel should carry greater visual weight, while secondary panels occupy a narrower column or balanced lower row. Avoid tall, mostly empty cards and large dead areas. Stack cleanly on small screens.

### 3. Authenticated merchandise destination

Add `Merchandise` to the dashboard sidebar after `My Bookings`. At this prototype stage it must remain the same honest, non-interactive `Coming later` placeholder as the other unavailable account areas. This records that merchandise will eventually live inside the authenticated dashboard; do not link it to the current public `shop.html` and do not add catalogue, cart, product, quantity, checkout, order, or payment behavior.

### 4. Restrained quick actions

Replace the generic Explore panel with a compact `Explore the public prototype` quick-action strip containing only real links:

- Fan Cards → `pricing-plan.html`
- Contact → `contact-us.html`
- Home → `index.html`

Use one yellow primary action and coordinated cream/outlined actions. Do not imitate the reference's purple/blue/pink buttons.

The public Shop is intentionally omitted because merchandise will require authenticated access in the future.

### 5. NK-specific polish

- Add a subtle ball-flight arc or dot motif as CSS/SVG decoration within the Fan Card feature only.
- Preserve the NK monogram asset; do not create or imitate another brand mark.
- Keep typography concise and information-dense.
- Use yellow glow/border emphasis sparingly for the primary card and active navigation.
- Fix the reintroduced low-contrast hover color `#8a7a00`; use the already approved accessible value `#7c6d00` or an equivalent existing token.

## Preserve exactly

- standalone, unlinked dashboard status;
- sidebar IA and honest non-interactive placeholders, including the new `Merchandise` destination;
- `Prototype` and `Account preview` disclosures;
- one `<h1>` and the current truthful lead copy;
- skip link;
- mobile drawer behavior: toggle, close control, backdrop, Escape, focus return, scroll lock, `aria-expanded`;
- no public header/footer or legacy bundle.

## Hard boundaries

Do not add forms, authentication, registration, sessions, logout behavior, storage, cookies, mock JSON, API calls, backend simulation, editable data, payment submission, crypto/wallet/TXID/QR content, admin controls, fake customer information, fake counts, fake dates, subscriptions, donations, personalized messages, cart/search, notifications, or chat.

## Verification

Serve locally over HTTP and verify:

1. Desktop, tablet, and narrow-mobile composition with no page-level overflow.
2. The Fan Card feature has no invented identity/account fields.
3. Overview and content panels contain no numeric zero metrics or fabricated records.
4. All four public links resolve HTTP 200.
5. Drawer keyboard/pointer behavior remains correct and console stays clean.
6. Exactly one `<h1>`; logical headings; visible focus states; adequate contrast; reduced-motion support.
7. Zero forbidden forms, storage, APIs, auth/payment code, real athlete/brand names, or sensitive data.
8. Public pages/shared shell remain untouched.
9. The four excluded screenshots remain untracked, untouched, and unstaged.
10. `git diff --check` passes.

Do not commit, amend, push, create a PR, change branches, or modify Git configuration. Finish with the exact files changed, verification results, `git status --short`, and any disclosed testing limitation.
