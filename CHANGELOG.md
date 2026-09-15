# Changelog

## What this is

`golf/site/` is a cleaned, self-contained static rebuild of the **Golfex** golf-club
theme demo (`https://demo.awaikenthemes.com/golfex/home-slider/`), used as the design
reference for this project. The original folders on disk (`demo.awaikenthemes.com/`,
`127.0.0.1_8081/`) were a browser-saved mirror of that live WordPress + Elementor site
— no PHP, no database, just scraped assets. A full backup of that original scrape was
made before any work started: `~/Desktop/golf_original_backup_<timestamp>.zip`.

This site is plain HTML/CSS/JS. There is no WordPress, no PHP, and no server-side code.

## What was found

- **No WordPress install existed.** The project folder was a static scrape (via a
  tool called saveweb2zip) of one live page, not a working theme/plugin codebase.
- **Every `data-settings` attribute on the scraped page was corrupted** (134 of them).
  The scraper's URL-rewriter had mangled the `&quot;`-escaped JSON WordPress embeds in
  those attributes — turning e.g. `{&quot;position&quot;:&quot;absolute&quot;}` into
  garbage HTML the browser silently truncated to `{`. This broke Elementor's entrance
  animations sitewide (the "Home – Slider" hero background rotation, plus the
  fade-in-up reveal on most sections) — nothing using `data-settings` at runtime
  would have worked. Fixed by re-fetching the page fresh, directly from the live
  demo, where the markup is correctly escaped.
- **Two hero background images were never downloaded** (`hero-bg.jpg`, `hero-bg-2.jpg`)
  — the scraper's asset-downloader didn't recognize the URL because it was buried
  inside the corrupted JSON above. Fetched directly from the live demo.
- **Elementor's frontend JS lazy-loads several per-widget bundles at runtime**
  (`text-editor`, `text-path`, `counter`, `shared-frontend-handlers`, and one
  hash-named chunk) via webpack code-splitting. These aren't `<script src>` tags in
  the HTML, so nothing in the original scrape captured them — the page would have
  silently pulled these from the *original live domain* forever. Downloaded them
  and repointed Elementor's `urls.assets` config to the local copy.
- **Contact Form 7's own JS talks to a WordPress REST API** (schema fetch + AJAX
  submit) that doesn't exist here — it was throwing a console error on every load.
- **ElementsKit's video-popup widget crashed** (`mediaelementplayer is not a
  function`) because the MediaElement.js library it depends on had been dropped as
  "seemingly unused" in an earlier cleanup pass — it wasn't unused, the widget calls
  it on init even without a visible `<video>` tag.
- A stray third-party script (`theme-panel-dynamic.js`) was Awaiken Themes' own
  demo-network switcher widget (cross-theme upsell panel) — irrelevant to this site
  and removed.

## What changed

- **New clean folder structure**: `assets/css/`, `assets/js/`, `assets/fonts/`,
  `assets/images/` — flat by file type, not mirroring the original WordPress
  plugin/theme folder trees. (The first pass kept each vendor library in its own
  `assets/vendor/<plugin>/<plugin's internal nested folders>/...` — safe, but it
  still looked and read like an imported plugin dump. Flattened it afterward: every
  `url()`/`@font-face` reference and every page's asset links were rewired file by
  file to the new paths, then verified again in the browser with a full network-log
  pass showing zero 404s.) The only exception is `assets/js/elementor-chunks/js/` —
  Elementor's own runtime lazy-loads a few widget bundles from an exact `js/`
  sub-path it constructs internally, so that one nesting level is load-bearing, not
  leftover structure.
  - `assets/js/main.js` — the one hand-written file, new, site-specific glue code
    (see below).
  - All filenames had their `_ver=x.x.x` query-string cruft stripped.
- **`index.html`** — the real, working homepage (the "Home – Slider" design),
  rebuilt from a fresh fetch of the live page rather than the corrupted scrape:
  - Stripped WordPress-only markup with no function in a static site: oEmbed
    discovery links, RSD/`xmlrpc.php` link, REST API link, `generator` meta tag,
    the WP emoji-detection script/styles (modern browsers render emoji natively).
  - Rewired every asset URL to the new local paths.
  - Removed the "Header Layouts" / "Footer Layouts" nav dropdowns — these were
    Elementor-editor-only preview links (`?elementskit_template=...`), meaningless
    outside the WP admin.
  - Collapsed the "Home" dropdown's 3 demo variants (Main / Video / Slider) down to
    "Home" (→ this page) and "Home – Video" (→ placeholder), since a real site
    doesn't need 3 interchangeable homepages.
  - Removed the external Awaiken Themes demo-switcher script.
  - Added `<meta name="description">`, a real `<title>`, `loading="lazy"` on
    below-the-fold images, a honeypot field on the newsletter form, and
    `rel="noopener noreferrer"` auto-applied to any `target="_blank"` link.
- **Contact form** (footer newsletter signup): Contact Form 7's own JS (which POSTs
  to a WordPress REST endpoint) was removed and replaced with `assets/js/main.js`,
  which validates the field natively and shows a success message client-side.
  **No email is actually sent** — wire this to a real backend before launch (a
  simple PHP mail script, or a hosted form service like Formspree/Netlify Forms).
- **21 placeholder pages** generated for every other nav link that had no captured
  content (About Us, Services + 3 sub-pages, Courses + 1 sub-page, Blog + 3 posts,
  Our Team + 1 member, Testimonials, Gallery, Videos, FAQs, Contact Us,
  Book an Appointment, Home – Video) plus a real **`404.html`**. Each reuses the
  real header/footer/nav so no link on the site 404s; each has a "this page is on
  its way" section and its own `<title>`/meta description.
- **Performance/security pass**: `robots.txt`, `sitemap.xml`, `.htaccess` (security
  headers, far-future caching for static assets, gzip, custom 404 — only takes
  effect if hosted on Apache), removed the Google Fonts CDN `<link>` (Inter Tight
  was already being self-hosted locally by Elementor's "local Google Fonts"
  feature — the CDN link was a redundant duplicate load).
- **Nav: "Pages" → "Plans"**. The old "Pages" dropdown was a leftover grab-bag from
  the original theme demo (Service Details, Blog Details, Team Details, 404, …) —
  not something a real visitor needs. Replaced it with a "Plans" dropdown (Basic /
  Premium / VIP membership + "Compare All Plans") that jumps to anchors on a newly
  built-out **`pricing-plan.html`** — three real pricing cards with placeholder
  prices/features you should replace with actual numbers. The pages that were only
  reachable from the old "Pages" dropdown (Our Team, Testimonials, Gallery, Videos,
  Course Details) are still on disk and still linked from elsewhere on the
  homepage, but no longer have a nav entry — ask if you want them back in the menu
  somewhere.

## Known limitations / next steps

- **Only the homepage has real content.** Every other page is a styled placeholder.
  Ask for them one at a time (or in a batch) when you have copy/images for them.
- **The contact/newsletter form doesn't send email.** It needs a real backend.
- **Placeholder business details** (phone `+1 234 467 88`, `info@domainname.com`,
  the footer address, social links pointing to `#`) are the original demo's
  placeholder content — replace with real details.
- `elementorFrontendConfig.urls.ajaxurl` and `elementskit.resturl` still point at
  the original demo domain. Neither is called by anything on the current homepage
  (they'd only matter for a "Mega Menu" widget or Elementor's admin/AJAX features,
  none of which are used here) — but worth knowing if new widgets are added later.

## Fan Card tier migration — Bronze / Silver / Gold / Platinum

- **Replaced the three-tier Standard/Premium/VIP Fan Card model with the approved
  four-tier model**: Bronze ($250), Silver ($500), Gold ($1,000), Platinum ($1,500),
  each a one-time purchase with its own cumulative benefit list. Canonical tier
  slugs are `bronze`/`silver`/`gold`/`platinum` throughout.
- Rebuilt `pricing-plan.html`'s tier cards, tier detail panels, and the feature
  comparison table as four tiers in that order; removed the "Most Popular" badge
  (Platinum now carries a "Signature Edition" badge instead, matching the
  treatment already used on the homepage's Fan Card feature); removed the
  "online purchasing will be available soon" hedge language from the hero,
  status badge, and FAQ.
- Updated the dashboard purchase configurator (`dashboard-purchase-fan-card.html`
  + its JS/CSS) to offer four tiers, starting neutral with no tier preselected;
  `tier=` now only ever accepts `bronze|silver|gold|platinum` — anything else,
  including the old `standard|premium|vip` values, falls back to the neutral
  "no tier selected" state rather than erroring.
- The shared "Complete Payment" page (`assets/js/page-dashboard-payment.js`)
  now derives each Fan Card tier's price from its own internal table
  (bronze 250 / silver 500 / gold 1000 / platinum 1500) — it never trusts a
  price supplied via the URL, and an unrecognized tier still fails safely to
  the existing "missing" state.
- Updated all admin Fan Card sample data (`admin-fan-cards.html`,
  `admin-fan-card-detail.html`, `admin-customers.html`,
  `admin-customer-detail.html`, `admin-payment-review.html`) to the new tiers
  and added a fourth sample customer/card (`CU-DEMO-004` / `FC-DEMO-004`,
  Taylor Brooks, Silver, Active) so all four tiers have a representative
  sample record. Existing sample payment references were renumbered where a
  collision would otherwise have made one reference describe two different
  transactions.
- Fan Cards remain one-time purchases only — no gifting, no recurring/renewal
  language, and no benefit tied to Membership. Membership's own plan names
  (Supporter/Insider/Premier) and pricing were not touched.

## Membership monthly/yearly billing migration

- **Replaced the old single annual-only Membership price per plan with a
  monthly/yearly billing choice**: Supporter ($125/mo, $1,450/yr, saves
  $50/yr), Insider ($250/mo, $2,900/yr, saves $100/yr), Premier ($500/mo,
  $5,700/yr, saves $300/yr). Canonical plan slugs remain
  `supporter`/`insider`/`premier`; billing period is a new
  `billing=monthly|yearly` value alongside `plan=`.
- Rebuilt the public `memberships.html` as a restrained editorial page: one
  "Memberships from $125/month" price signal, three benefit-led plan
  previews with no price/toggle/savings detail, and login-intent CTAs
  (`login.html?intent=membership`, `signup.html?intent=membership`) — all
  interactive pricing now lives only in the signed-in dashboard.
- Rebuilt `dashboard-select-membership.html` as the primary interactive
  pricing screen: a real Monthly/Yearly radio selector plus Supporter/
  Insider/Premier plan-card radios (new `assets/js/page-dashboard-select-membership.js`,
  new `assets/css/page-dashboard-select-membership.css`), with live price,
  billing-basis label, and yearly-savings text kept in sync by JS. Prices
  are looked up from a fixed internal table, never invented from the URL;
  the page starts fully neutral and never defaults a billing period —
  "Review Membership" only activates once both a plan and a billing period
  are explicitly chosen, matching the Fan Card configurator's established
  pattern.
- Rebuilt `dashboard-confirm-membership.html` (+ its JS/CSS) to show billing
  period, price, yearly savings (when applicable), included benefits, a
  fuller manual-renewal explanation, and an access-begins-after-approval
  note; its "Edit Membership" link now restores both `plan=` and `billing=`.
  A missing or invalid plan/billing pair still falls back to the existing
  "Select a Membership first" neutral state — never a default plan or
  billing period.
- The shared "Complete Payment" page (`assets/js/page-dashboard-payment.js`)
  now derives the Membership total from `plan` + `billing` against its own
  internal table — it never trusts a price or amount supplied via the URL,
  and a missing/invalid plan or billing value still fails safely to the
  existing "missing" state. Added a Membership-specific note on
  `dashboard-payment.html` reiterating that renewal is always manual, with
  no automatic charge and no saved payment method.
- Updated `dashboard-memberships.html`'s empty-state copy and documented
  future states (Pending activation / Active / Suspended / Expired /
  payment-failed) to describe monthly-or-yearly billing and manual,
  customer-initiated renewal; no functional renewal control was added,
  since this static prototype still implements only the empty state.
- Updated the admin Membership samples for consistency across every
  surface: `admin-membership-detail.html` and `admin-memberships.html` now
  show each sample's billing period and price (MB-DEMO-001 Insider,
  Yearly, $2,900.00; MB-DEMO-002 Supporter, Monthly, $125.00, customer
  Avery Nguyen, Active September 15, 2026 to October 15, 2026, payment
  PAY-DEMO-006; MB-DEMO-003 Premier, Yearly, $5,700.00); removed the
  Active-status "Cancel future renewal" action, which implied an
  auto-renewing subscription that doesn't exist. `admin-customer-detail.html`
  now shows billing period alongside plan for its two linked Memberships.
  References, customers, statuses, and linked payment references were
  left unchanged.
- Two approved public-page copy corrections applied to `memberships.html`:
  "Sign in to Compare Plans" → "Sign in to compare plans"; the product-
  separation section (its heading, supporting paragraph, and "Explore Fan
  Cards" CTA) was removed outright per a follow-up simplification request,
  so the page now flows from the benefits section directly into the final
  CTA.
- Memberships and Fan Cards remain separate products throughout; Fan Card
  files, prices, benefits, visuals, and sample records were not touched.
