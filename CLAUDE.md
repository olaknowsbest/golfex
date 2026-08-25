# Athlete Fan Platform — Claude Code Context

## Project purpose

Transform this existing Golfex static template into a professional US-focused fan-management platform prototype for the fictional placeholder athlete Nazario Kayla. Build it brick by brick. Do not jump from the public website directly into a fake dashboard or payment demo.

Nazario Kayla is a fictional placeholder identity created for this prototype. Do not connect the identity, biography, statistics, imagery, sponsors, testimonials, or achievements to a real person. Use original or appropriately licensed generic golf imagery and clearly marked placeholder content until final project-owned assets are supplied.

The intended platform eventually includes:

1. Public athlete website
2. Registration, verification, login, logout, and account recovery
3. Customer dashboard
4. Fan-card packages and memberships
5. Orders
6. Manual BTC, ETH, and SOL payments
7. Protected administrator verification
8. Membership activation
9. Bookings
10. Future conventional US payment methods
11. Production security and deployment

Read `docs/PLATFORM-ARCHITECTURE.md` before making architectural, authentication, database, order, payment, membership, booking, or admin changes.

Also read:

- `docs/BRAND-DIRECTION.md` before public branding/content work.
- `docs/DASHBOARD-REFERENCE.md` before dashboard or authenticated-flow design.
- `docs/reference/dashboard/` contains the 20 user-supplied visual references.

## Current repository

- Plain static HTML, CSS, and JavaScript; no build step or backend.
- `index.html` is the only substantially complete content page.
- `pricing-plan.html` contains three working visual pricing cards.
- Most other HTML pages are styled placeholders.
- Assets are under `assets/` and include Elementor-derived CSS/JS, Bootstrap, jQuery, GSAP, Swiper, self-hosted Inter Tight fonts, and images.
- The newsletter form only simulates success; it sends no email.
- The current design was adapted from a Golfex theme and still contains golf-specific content and placeholders.

## Approved design direction

Retain and adapt:

- Black, cream, white, and yellow palette (`#FDF567` accent)
- Inter Tight typography
- Rounded cards and CTA buttons
- Large editorial photography
- Premium, energetic visual tone
- Responsive mobile navigation
- Membership-card, testimonial, FAQ, media, statistics, and CTA patterns

Replace:

- Golfex name, logo, copy, images, icons, claims, services, video, and testimonials
- Golf navigation and appointment language
- Placeholder contact information, social links, pricing, policies, and domain references

Target public navigation:

`Home · About/Career · News & Media · Stats · Fan Cards · Bookings · Contact · Login`

Initial fan-card concepts:

- Standard Fan Card — $100
- Premium Fan Card — $250
- VIP Fan Card — $500

These are requirements placeholders until the owner supplies final names, prices, benefits, durations, and artwork.

## Implementation discipline

Before each development stage:

1. State exactly what is being built.
2. Explain why it is necessary.
3. Describe the customer experience.
4. Describe the server-side behavior.
5. Identify stored data.
6. Identify security implications.
7. Obtain or confirm the stage scope, then implement only that stage.
8. Test the result in proportion to risk.

Do not choose backend, database, or authentication technology without first comparing sensible Cloudflare-compatible options and recording the decision.

Do not represent static HTML, browser storage, mocked JSON, or client-only state as a production backend.

## First implementation boundary

The first coding stage is the public identity and shared shell only:

- Temporary athlete-platform branding
- Shared navigation and footer
- Reusable colors, typography, buttons, cards, and spacing
- Fix light-page header contrast
- Correct public page names and links
- Condense the unusually long homepage
- Improve heading accessibility where animation splits words into individual characters

Do not add authentication, customer dashboards, orders, payment submission, admin controls, or membership activation during this first stage.

## Core domain separation

Keep these concepts distinct:

- **Fan-card package:** the configurable product being offered.
- **Order:** the immutable commercial record of what a customer chose and its price.
- **Payment:** an attempt to settle an order.
- **Membership/fan card:** the entitlement created after valid approval.
- **Booking:** a separate service request that may require approval before payment.

Never collapse these records into one status object.

## Manual cryptocurrency safety rules

The site/database may store and display only public receiving addresses.

Never request, generate, store, log, paste, commit, or display:

- Private keys
- Seed phrases
- Recovery phrases
- Wallet passwords
- Signing credentials

Submitting a TXID must only set the payment to `PAYMENT_SUBMITTED`. It must never activate a fan card or mark an order paid.

Only an authorized administrator may approve a payment. Approval must atomically produce:

- Payment → `PAID`
- Order → `PAID`
- Membership/fan card → `ACTIVE`
- Audit event → recorded

Supported payment lifecycle:

`PENDING → PAYMENT_SUBMITTED → UNDER_REVIEW → PAID | REJECTED | EXPIRED`

## Security invariants

- Enforce authentication and authorization on the server, not only in the UI.
- Prevent customers from reading or changing other customers' records.
- Calculate prices and validate state transitions on the server.
- Never accept a browser-supplied price as authoritative.
- Use strong admin separation, audit logging, and MFA readiness.
- Use secure sessions and password hashing or a reviewed identity provider.
- Protect forms and APIs with validation, abuse controls, rate limits, and CSRF defenses where applicable.
- Keep development, staging, and production configuration separate.
- Do not commit application secrets.

## Known visual findings

- Desktop homepage hero renders strongly and the mobile homepage adapts without horizontal overflow.
- Pricing cards stack correctly on mobile.
- The pricing page uses white overlay navigation on a cream background, creating poor contrast.
- The homepage is roughly 13,200 pixels tall on a 390-pixel mobile viewport and should be shortened.
- Split-letter animation markup produces poor accessible heading text.
- Current public CTAs point to placeholder appointment/contact pages rather than real product flows.
- No console errors were observed during the initial homepage and pricing-page review.

## File and Git care

- Preserve existing work and unrelated changes.
- Inspect `git status` before and after edits.
- Make focused changes with clear commit boundaries when commits are requested.
- Do not delete the original template assets until replacements are verified and the owner approves cleanup.
- Keep the public site deployable to Cloudflare Pages during the staged rebuild.
