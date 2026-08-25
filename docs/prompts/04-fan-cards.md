# Claude Code Prompt 04 — Public Fan Cards Concept Page

Copy everything inside the prompt block into Claude Code while its working directory is `/Users/mac/Desktop/golf/site`.

```text
Prompts 01–03 and their correction passes are complete. Build Prompt 04: the public Fan Cards concept page for the fictional Nazario Kayla platform.

Before editing, reread these files completely:

1. CLAUDE.md
2. docs/BRAND-DIRECTION.md
3. docs/PLATFORM-ARCHITECTURE.md
4. docs/DASHBOARD-REFERENCE.md
5. docs/prompts/01-public-foundation.md
6. docs/prompts/02-homepage.md
7. docs/prompts/03-about-career.md
8. pricing-plan.html
9. index.html
10. about-us.html
11. assets/css/site-shell.css
12. assets/css/page-home-prototype.css
13. assets/css/page-about-career.css

Inspect every image in `docs/reference/dashboard/` that relates to Fan Cards, tier selection, order summaries, or polished dashboard cards. Actively take design ideas from those references: strong information hierarchy, premium card spacing, restrained borders, dark-surface contrast, clear selected/featured states, concise labels, and organized detail panels. Reinterpret those ideas in the Nazario Kayla cream/black/sand/yellow public-site system.

The reference is inspiration, not content to copy. Do not copy NK Management branding, identity, user data, wording, prices, wallet addresses, QR codes, cryptocurrency selection, payment instructions, transaction-proof upload, payment status, admin-approval interfaces, or blue visual identity.

Inspect git status and preserve all existing work. Remain on `athlete-platform-concept`. Do not create, switch, merge, or delete branches. Do not commit unless explicitly requested.

Scope boundary:

- Redesign only the body of `pricing-plan.html` as a public Fan Cards concept comparison page.
- Update its title and meta description for the fictional Nazario Kayla prototype.
- You may create one page-specific stylesheet, preferably `assets/css/page-fan-cards.css`, loaded after `site-shell.css` and inherited theme CSS.
- Preserve the verified shared header, exact navigation order, footer, logos, mobile menu, skip link, prototype disclosure, active Fan Cards nav state, and shared shell behavior.
- Do not change the homepage, About/Career, Stats, Shop, Contact, Login, legacy pages, shared shell CSS/JS, or brand assets unless a verified regression requires a minimal correction.
- Do not build checkout, purchasing, orders, authentication, accounts, dashboards, databases, cryptocurrency, wallet displays, QR codes, payment submission, administrator approval, subscriptions, donations, bookings, or personalized-message ordering in this prompt.
- Do not add forms, quantity controls, fake payment buttons, fake success states, localStorage/sessionStorage, or mocked application state.

Identity and product-language rules:

- Nazario Kayla remains an original fictional adult woman golfer created for this prototype.
- Do not mention or imply any real athlete.
- The Fan Cards are product concepts only and must be described as unavailable for purchase.
- Prices are fictional planning values, not offers or active charges.
- Do not use scarcity claims, countdowns, stock quantities, fabricated sales, customer counts, testimonials, endorsements, guaranteed access, or promises of direct contact with the athlete.
- Do not call the platform official, authorized, endorsed, or represented by a real management organization.

Build a focused page with these sections:

1. PAGE HERO
   - Eyebrow: `FAN CARDS · PROTOTYPE CONCEPT`
   - H1: `Choose how you want to follow the journey.`
   - Supporting copy: explain that the three fictional tiers demonstrate how a future fan-card program could be organized.
   - Add a prominent visible status label: `Concept only · Purchasing unavailable`
   - Include a small link to `#compare-tiers` labeled `Compare the concepts`.
   - Use an editorial public-page hero, not a customer dashboard or checkout screen.

2. THREE FAN-CARD CONCEPTS
   - Section id: `compare-tiers`.
   - Present three visually distinctive tier cards:

     STANDARD — `$100 concept price`
     - Digital prototype card
     - Fan-platform updates
     - Community feature previews
     - Standard concept badge

     PREMIUM — `$250 concept price`
     - Everything in Standard
     - Expanded digital-content previews
     - Early concept announcements
     - Premium concept badge

     VIP — `$500 concept price`
     - Everything in Premium
     - Priority experience-request previews
     - Limited-edition concept artwork previews
     - VIP concept badge

   - Keep Premium as the yellow featured card with the visible `Most Popular` badge, consistent with the approved homepage preview.
   - Keep VIP as the refined black card.
   - Standard should use a light cream/white treatment with an ink border.
   - All tiers must clearly say `Prototype concept`.
   - Do not use `Buy`, `Purchase`, `Subscribe`, `Checkout`, `Pay`, or `Get started` buttons.
   - Each card may use a non-transactional anchor labeled `View tier details` that jumps to its matching detail section on the same page.

3. TIER DETAIL PANELS
   - Create one concise detail panel for Standard, Premium, and VIP with matching ids.
   - Use NK Management-inspired information hierarchy—eyebrow, tier name, short summary, structured benefit list, and concept-status note—without copying its content.
   - Explain that actual benefits, fulfillment rules, availability, eligibility, duration, refund policy, and final prices require approval before launch.
   - Do not promise meet-and-greets, direct messages, tournament access, dinners, gifts, or personal interaction as guaranteed benefits.

4. COMPARISON TABLE
   - Heading: `Compare the concepts.`
   - Build an accessible HTML table comparing the three tiers.
   - Rows:
     - Digital prototype card
     - Platform update previews
     - Expanded content previews
     - Early concept announcements
     - Priority experience-request previews
     - Concept artwork previews
   - Use clear text such as `Included in concept` and `Not included`, not icon-only meaning.
   - Include a caption or adjacent note identifying all features as provisional fictional concepts.
   - On narrow screens, keep the table usable with a labeled horizontal scroll container or transform it into an equally accessible stacked comparison. It must not create page-level horizontal overflow.

5. HOW IT COULD WORK — FUTURE FLOW
   - Heading: `How Fan Cards could work later.`
   - Show four noninteractive steps:
     1. `Choose a concept tier`
     2. `Create a verified account`
     3. `Complete an approved checkout`
     4. `Access the future fan experience`
   - State that this workflow is not active in the current build.
   - Do not describe crypto transfer instructions or manual administrator approval here; those belong to later authenticated architecture and operational review, not this public concept page.

6. FAQ
   - Heading: `Fan Card concept questions.`
   - Use semantic `<details>`/`<summary>` elements or an accessible equivalent.
   - Include concise answers to:
     - `Can I buy a Fan Card now?` — No, purchasing is unavailable in this prototype.
     - `Are these final prices and benefits?` — No, all values and benefits are provisional fictional concepts.
     - `Does a Fan Card guarantee personal access?` — No; future experiences would depend on availability, eligibility, approval, and published terms.
     - `Will payments be added later?` — Only after the business, policies, secure backend, checkout method, and operational controls are approved.
   - Do not solicit email addresses or add a waitlist form.

7. FINAL CTA
   - Heading: `Explore the prototype.`
   - Primary link: `Meet Nazario` → `about-us.html`
   - Secondary link: `Return home` → `index.html`
   - Repeat clearly: `Fan Cards are not available for purchase in this build.`

Design requirements:

- Continue using Inter Tight and the approved ink black, warm cream, soft sand, yellow, and white palette.
- Use the NK Management screenshots actively for layout ideas and product-information clarity, while translating everything into the established public brand.
- Preserve the homepage’s established tier color language: Standard light, Premium yellow and featured, VIP black.
- Use premium rounded cards, strong headings, restrained dividers, small status badges, and organized detail panels.
- The page should feel like a credible product-concept presentation, not a live sales funnel or dashboard.
- Use yellow deliberately for the Premium card, active emphasis, focus, and small graphic details.
- Avoid electric blue, crypto visuals, copied dashboard shell elements, excessive gradients, glassmorphism, and generic Golfex template content.
- Prefer semantic maintainable HTML and page-specific CSS over retained Elementor body markup.
- Do not use real-athlete photos. This page does not require a character image; product graphics should be original CSS/SVG abstractions or existing project-owned brand marks.

Accessibility and responsiveness:

- Use exactly one H1 and a logical heading hierarchy.
- Meaning must not depend on color alone.
- Every link and disclosure control needs a visible focus state.
- Ensure `<details>` summaries have clear interactive affordance.
- Respect `prefers-reduced-motion` if any subtle motion is used.
- Do not split headings into animated characters.
- Avoid layout shift by giving graphics dimensions/aspect ratios.
- Do not add autoplay media, external fonts, trackers, chat widgets, or third-party scripts.
- At mobile width, tier cards, detail panels, workflow steps, FAQs, and CTAs must stack cleanly without clipped content.

Verification required:

1. Serve locally over HTTP.
2. Verify `pricing-plan.html` near 1280px desktop width.
3. Verify it near 768px tablet width.
4. Verify it at an actual width near 390px. Do not treat a 600px viewport as equivalent; if the browser resize tool cannot reach 390px, use another local responsive-testing method or report the limitation and inspect every `max-width: 480px` rule carefully.
5. Confirm no page-level horizontal overflow at every tested width.
6. Confirm the shared header, active Fan Cards nav state, mobile menu, footer, skip link, keyboard focus, and disclosure remain correct.
7. Confirm every same-page tier link targets an existing id and both final CTA links return HTTP 200 locally.
8. Confirm there are no forms, enabled purchase controls, checkout behavior, quantity controls, wallet information, QR codes, transaction fields, or fake success states.
9. Check browser console errors and warnings.
10. Search the finished page for `Nelly`, `Korda`, visible `Golfex` body copy, `wallet`, `QR`, `crypto`, `transaction ID`, `buy now`, `purchase`, and unsupported external links. The required disclosure sentence may contain the word `purchase`; report and distinguish that legitimate explanatory use.
11. Confirm the three displayed prices and shared benefits are consistent with the homepage preview.
12. Report page height at desktop and mobile widths.
13. Report every changed/created file and everything deferred.

Before editing, restate the exact Fan-Cards-page-only scope and list the files you expect to touch. Then implement and verify Prompt 04.
```
