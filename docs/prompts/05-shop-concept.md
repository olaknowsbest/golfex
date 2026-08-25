# Claude Code Prompt 05 — Public Shop Concept

Copy the block below into Claude Code in `/Users/mac/Desktop/golf/site`.

```text
Build Prompt 05: the fictional Nazario Kayla public Shop concept page.

Read `CLAUDE.md`, the three core docs, Prompts 01–04, `shop.html`, the completed public pages, and their page CSS. Inspect the NK Management merchandise references for product-card hierarchy and detail ideas. Use them actively as inspiration, but copy no branding, product content, pricing, images, checkout UI, or blue styling.

Preserve the dirty worktree and branch `athlete-platform-concept`; do not commit. Scope is only `shop.html`, one new `assets/css/page-shop-concept.css`, and original shop concept SVGs under `assets/images/shop/concept/`. Preserve the shared shell exactly. No backend, cart, checkout, quantities, inventory, orders, payments, wallet/crypto, forms, fake success states, storage, or external downloads.

Replace the Shop placeholder body with:

1. HERO
   - Eyebrow: `SHOP · PROTOTYPE COLLECTION`
   - H1: `Made for fans of the journey.`
   - Explain that all merchandise and prices are fictional concepts.
   - Visible badge: `Concept only · Shopping unavailable`
   - Anchor: `Preview the collection` → `#concept-collection`.

2. CONCEPT COLLECTION (`id="concept-collection"`)
   - Six polished product cards in a responsive grid:
     - `Tour Cap` — `$35 concept price` — Apparel
     - `Performance Polo` — `$85 concept price` — Apparel
     - `Course Towel` — `$28 concept price` — Accessories
     - `NK Ball Marker` — `$18 concept price` — Accessories
     - `Digital Wallpaper Pack` — `$12 concept price` — Digital
     - `Collector Poster` — `$30 concept price` — Collectibles
   - Each card needs an original local SVG product illustration, name, category, concept price, one-line description, and `Prototype product` status.
   - Create original abstract illustrations using the approved NK palette/monogram direction; do not imitate real merchandise brands or use real company logos.
   - No product-card button or link should imply purchasing. A noninteractive `Details coming later` label is acceptable.

3. COLLECTION PRINCIPLES
   - H2: `Designed as a future collection.`
   - Three cards: `Original identity`, `Clear fulfillment`, `Approved production`.
   - Explain that rights, samples, suppliers, sizing, availability, shipping, returns, taxes, and final pricing must be approved before launch.

4. SHOP FAQ using semantic `<details>`
   - `Can I order these products now?` → No.
   - `Are the prices final?` → No, fictional planning values.
   - `Who will produce and fulfill them?` → Not selected; requires approved suppliers and policies.
   - `Will digital products be downloadable?` → Only in a future secured release after rights and delivery controls are approved.

5. FINAL CTA
   - H2: `Explore the fan-platform concept.`
   - `View Fan Cards` → `pricing-plan.html`
   - `Return home` → `index.html`
   - Visible note: `Merchandise is not available for purchase in this build.`

Design: use Inter Tight and the established cream/black/sand/yellow system. Take NK Management’s clean merchandise-card spacing, image framing, price hierarchy, and dark detail-panel ideas, translated into this public editorial brand. Avoid electric blue, gradients, glassmorphism, copied dashboard chrome, real trademarks, and old Golfex body copy. Use exactly one H1, semantic headings, useful image alt text, visible focus, and no color-only meaning.

Responsive requirements: 3-column collection on desktop, 2-column where appropriate, 1-column near 390px; no clipped product marks or page-level horizontal overflow. Use `width:auto; height:auto; max-width:100%` or an equally distortion-safe image rule.

Verify over local HTTP near 1280px, 768px, and an actual ~390px width. Check active Shop nav, mobile menu, footer, skip link, focus, all local assets/links, overflow, and console. Search public output for real brands/athletes, visible Golfex copy, forms, purchase controls, checkout, wallet, crypto, and transaction fields. Report exact files, widths/heights, results, and deferrals. Do not commit.

Before editing, restate the Shop-only scope and expected files. Then implement and verify.
```
