# Claude Code Prompt 02 — Public Homepage

Copy everything inside the prompt block into Claude Code while its working directory is `/Users/mac/Desktop/golf/site`.

```text
Prompt 01 and its correction pass are complete. Build Prompt 02: the fictional Nazario Kayla public homepage.

Before editing, reread these files completely:

1. CLAUDE.md
2. docs/BRAND-DIRECTION.md
3. docs/PLATFORM-ARCHITECTURE.md
4. docs/DASHBOARD-REFERENCE.md
5. docs/prompts/01-public-foundation.md
6. index.html
7. assets/css/site-shell.css

Inspect git status and preserve all existing work. Remain on `athlete-platform-concept`. Do not create, switch, merge, or delete branches. Do not commit unless explicitly requested.

Scope boundary:

- Redesign the body of `index.html` as the fictional Nazario Kayla homepage.
- Preserve the verified Prompt 01 header, navigation, footer, logos, mobile menu, skip link, prototype disclosure, and shared shell behavior.
- Do not redesign internal pages during this prompt.
- Do not implement authentication, customer accounts, dashboards, databases, orders, payments, cryptocurrency, bookings, admin controls, donations, subscriptions, personalized messages, or functional merchandise checkout.
- Do not use localStorage/sessionStorage or mocked application state.

Primary visual asset:

- `assets/images/characters/nazario-kayla-swing-cutout-v1.png`
- This is an original fictional adult woman golfer with a genuine transparent background.
- Use it as the central figure in the career-achievement showcase.
- Do not crop away her head, hands, shoes, or golf club at desktop width.
- Provide suitable alternative text describing the fictional character illustration/photo asset.

Remove all visible Golfex homepage identity and copy from the homepage body, including golf-club services, coaching claims, course membership language, template testimonials, copied statistics, external golf video, and repeated filler sections. Do not delete legacy assets from disk in this stage.

Build a focused homepage with these sections:

1. HERO
   - Eyebrow: `NAZARIO KAYLA · FICTIONAL ATHLETE PROTOTYPE`
   - H1: `Follow the journey. Join the experience.`
   - Supporting copy: a short original introduction positioning Nazario as a fictional world-class golfer and the site as a fan-platform prototype.
   - Primary CTA: `Explore Fan Cards` → `pricing-plan.html`
   - Secondary CTA: `Meet Nazario` → the achievement/career section on the same page
   - Use an existing generic golf background or an abstract black/cream/yellow treatment. Do not use or download real-athlete photography.

2. CAREER / ACHIEVEMENT SHOWCASE
   - This section should follow the supplied visual direction: one large fictional golfer image centered inside layered yellow circles or a refined trajectory/orbit graphic, with four achievement callouts placed around the image on desktop.
   - Heading: `Built for the biggest moments.`
   - Intro copy should be original and clearly about the fictional placeholder character.
   - Achievement callouts:
     - `12` / `Career Wins`
     - `2` / `Major Titles`
     - `No. 1` / `World Ranking`
     - `68%` / `Top-10 Rate`
   - Treat these as fictional demonstration statistics. Include a small visible note: `Fictional statistics for prototype demonstration.`
   - On tablet/mobile, stack the image and achievements into a clean two-column or single-column layout. Do not create overlapping or tiny text.

3. FAN CARDS PREVIEW
   - Three concise cards: Standard `$100`, Premium `$250`, VIP `$500`.
   - Describe these as prototype fan-card concepts, not active products.
   - Each CTA links to `pricing-plan.html` and says `View concept`.
   - Do not create orders or checkout behavior.

4. FAN EXPERIENCE PREVIEW
   - Present three non-bookable concepts: Meet & Greet, Personalized Message, Fan Experience.
   - Use original generic iconography or simple inline SVGs.
   - CTA: `Experiences coming later` as noninteractive text or an aria-disabled control, not a fake booking form.

5. LATEST / INSIDE THE JOURNEY
   - Use three clearly labeled placeholder editorial cards with original fictional headings and no fabricated links to real publishers.
   - Each card should say `Prototype story` or `Coming later`.
   - Do not invent quotes from Nazario or other people.

6. FINAL CTA
   - Heading: `Be part of what comes next.`
   - Link to `pricing-plan.html` with `Explore Fan Cards`.
   - Reinforce that the current build is a prototype and transactions are unavailable.

Design requirements:

- Preserve the approved ink black, warm cream, soft sand, yellow, and white palette.
- Continue using Inter Tight.
- Match the premium rounded-card language of the public shell.
- Use yellow with restraint for focal actions, orbit graphics, and small details.
- Avoid electric blue, generic crypto styling, copied dashboard visuals, and excessive gradients.
- The new homepage should be substantially shorter and more focused than the old ~13,200px mobile page.
- Prefer semantic, maintainable HTML and a dedicated homepage stylesheet such as `assets/css/page-home-prototype.css` loaded after inherited theme CSS.
- If old Elementor homepage scripts/styles are no longer needed after the body replacement, remove only homepage-specific references that you can prove are unused. Do not perform a broad dependency cleanup in this stage.

Accessibility and performance:

- One clear H1.
- Logical heading order.
- Do not split heading text into individual animated characters.
- All meaningful images require useful alt text; decorative orbit/circle graphics must be hidden from assistive technology.
- Visible focus states must remain intact.
- Respect `prefers-reduced-motion` if adding subtle animation.
- Avoid layout shift by supplying image dimensions/aspect ratio.
- Do not add autoplay video.
- Do not add externally hosted fonts, trackers, chat widgets, or third-party scripts.

Verification required:

1. Serve locally over HTTP.
2. Verify homepage at desktop width near 1280px.
3. Verify homepage near 768px tablet width.
4. Verify homepage near 390px mobile width.
5. Confirm no horizontal overflow at each width.
6. Confirm the header/mobile menu/footer from Prompt 01 still work.
7. Confirm all homepage links resolve locally and no CTA pretends to complete a transaction.
8. Check console errors/warnings.
9. Report homepage height at 390px and compare it with the old approximately 13,200px height.
10. Report every changed/created file and everything deferred.

Before editing, restate the exact homepage-only scope and list the files you expect to touch. Then implement and verify Prompt 02.
```
