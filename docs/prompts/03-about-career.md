# Claude Code Prompt 03 — About / Career

Copy everything inside the prompt block into Claude Code while its working directory is `/Users/mac/Desktop/golf/site`.

```text
Prompt 01, its branding correction, Prompt 02, and the achievement-ring correction are complete. Build Prompt 03: the fictional Nazario Kayla About / Career page.

Before editing, reread these files completely:

1. CLAUDE.md
2. docs/BRAND-DIRECTION.md
3. docs/PLATFORM-ARCHITECTURE.md
4. docs/DASHBOARD-REFERENCE.md
5. docs/prompts/01-public-foundation.md
6. docs/prompts/02-homepage.md
7. about-us.html
8. stats.html
9. assets/css/site-shell.css
10. assets/css/page-home-prototype.css

Also inspect `docs/reference/dashboard/` and reread `docs/DASHBOARD-REFERENCE.md` for useful visual cues from the supplied NK Management screenshots. Use those references only for interface inspiration such as spacing, card hierarchy, strong headings, restrained borders, clear active states, and polished dark-surface contrast. Do not copy NK Management branding, wording, prices, user identity, cryptocurrency flow, wallet details, payment instructions, admin-approval mechanics, or unsupported functionality into this public About / Career page.

Inspect git status and preserve all existing work. Remain on `athlete-platform-concept`. Do not create, switch, merge, or delete branches. Do not commit unless explicitly requested.

Scope boundary:

- Redesign only the body of `about-us.html` as the fictional Nazario Kayla About / Career page.
- You may create one dedicated stylesheet, preferably `assets/css/page-about-career.css`, loaded after inherited theme CSS.
- Preserve the verified shared header, navigation, footer, brand assets, mobile menu, skip link, disclosure, and shell behavior.
- Keep the navigation label `About / Career` and its existing link to `about-us.html`.
- Keep `stats.html` as the separate detailed-stats destination. Change it only if a very small copy/link adjustment is necessary for a coherent connection from this page; do not redesign it in this prompt.
- Do not edit the homepage, Fan Cards, Shop, Contact, Login, legacy pages, shared shell CSS/JS, or brand assets unless a verified regression requires a minimal fix.
- Do not implement authentication, customer accounts, dashboards, databases, payments, cryptocurrency, bookings, admin controls, donations, subscriptions, personalized-message ordering, or functional merchandise checkout.
- Do not use localStorage/sessionStorage or mocked application state.

Identity and content rules:

- Nazario Kayla is an original fictional adult woman golfer created only for this prototype.
- Do not mention Nelly Korda or any other real athlete.
- Do not copy a real athlete's biography, chronology, tournament record, quotes, sponsors, hometown, family, education, or achievements.
- Write original fictional placeholder copy and label invented performance figures clearly.
- Do not claim endorsement, authorization, representation, official status, or real-world affiliation.
- Do not add sponsors, governing-body logos, tournament logos, national flags, or fabricated press quotations.

Primary visual asset:

- `assets/images/characters/nazario-kayla-swing-cutout-v1.png`
- Reuse it only if it adds value without making the About page look like a duplicate of the homepage achievement section.
- You may instead use existing generic golf imagery already stored locally, provided it does not depict or imply a named real athlete.
- Do not download real-athlete photography.
- Meaningful images need useful alt text; decorative shapes must be hidden from assistive technology.

Remove all visible Golfex identity, club-services copy, coaching/team claims, template statistics, and filler content from the About page body. Do not delete legacy assets from disk.

Build a focused About / Career page with these sections:

1. PAGE HERO
   - Eyebrow: `ABOUT / CAREER · FICTIONAL PROFILE`
   - H1: `Meet Nazario Kayla.`
   - Supporting copy: a concise original introduction explaining that Nazario is the fictional athlete at the center of this fan-platform prototype.
   - Include a visible label such as `Fictional athlete profile` near the hero copy.
   - Use the established ink-black, cream, sand, white, and restrained-yellow design language.

2. ATHLETE PROFILE
   - Heading: `Composure, precision, and an original story.`
   - Write two or three short paragraphs of fictional biography-style copy.
   - Keep personal details deliberately generic and clearly invented for prototype demonstration.
   - Add a compact facts panel with:
     - `Role` / `Professional golfer`
     - `Plays` / `Right-handed`
     - `Status` / `Fictional prototype athlete`
     - `Focus` / `Elite competition and fan connection`
   - Do not include birth date, home address, management contacts, real clubs, sponsors, or unverifiable personal details.

3. CAREER HIGHLIGHTS
   - Heading: `A fictional career built for the prototype.`
   - Present four refined metric cards using the same fictional values established on the homepage:
     - `12` / `Career Wins`
     - `2` / `Major Titles`
     - `No. 1` / `Peak World Ranking`
     - `68%` / `Top-10 Rate`
   - Include the visible note: `Fictional statistics for prototype demonstration.`
   - Add a `View detailed stats` button linking to `stats.html`.
   - Do not introduce additional precise performance statistics in this brick.

4. CAREER TIMELINE
   - Heading: `The journey so far.`
   - Create an accessible semantic timeline with four fictional milestones:
     - `2021` / `Professional debut` — brief original placeholder description.
     - `2022` / `Breakthrough season` — brief original placeholder description.
     - `2024` / `First major-title chapter` — brief original placeholder description.
     - `2026` / `Fan platform concept begins` — explain that the current website is a prototype experience.
   - Add a nearby note that the timeline is fictional.
   - Do not use real tournament names, venues, opponents, rankings history, or dates copied from a real player.

5. VALUES / PLAYING IDENTITY
   - Heading: `What defines the journey.`
   - Three concise cards:
     - `Composure`
     - `Precision`
     - `Connection`
   - Use original copy focused on the fictional character and future fan community.
   - Simple inline SVG icons are allowed; no third-party icon service.

6. FINAL CTA
   - Heading: `Follow the next chapter.`
   - Primary CTA: `Explore Fan Cards` → `pricing-plan.html`
   - Secondary CTA: `Return home` → `index.html`
   - State clearly that Fan Cards and transactions are prototype concepts and are not active yet.

Design requirements:

- Continue using Inter Tight and the approved premium rounded-card language.
- Create a distinct editorial/profile composition; do not simply copy the homepage section order.
- Use yellow as an accent for focus, timeline markers, and key actions—not as the background of every section.
- Maintain readable line lengths, generous spacing, and strong text contrast.
- Avoid electric blue, crypto styling, copied dashboard visuals, excessive gradients, glassmorphism, and generic template filler.
- Prefer semantic, maintainable HTML over retained Elementor body markup.
- The page should feel complete but focused, without becoming another extremely long template page.
- If old page-specific Elementor scripts/styles are provably unused after replacing the body, remove only those references that are safe and specific to this page. Do not perform broad dependency cleanup.

Accessibility and responsiveness:

- Use exactly one H1 and a logical heading hierarchy.
- Ensure the timeline is understandable without its visual line/markers.
- All controls and links must have visible keyboard focus.
- Do not split headings into individually animated characters.
- Respect `prefers-reduced-motion` for any optional motion.
- Avoid layout shift by supplying image dimensions or aspect ratios.
- Do not add autoplay media, trackers, chat widgets, external fonts, or third-party scripts.
- At mobile width, all profile facts, metrics, timeline items, and CTA buttons must stack without overlap or clipped text.

Verification required:

1. Serve locally over HTTP.
2. Verify `about-us.html` near 1280px desktop width.
3. Verify it near 768px tablet width.
4. Verify it near 390px mobile width.
5. Confirm no horizontal overflow at every tested width.
6. Confirm the shared header, active About / Career nav state, mobile menu, footer, skip link, and focus behavior still work.
7. Confirm `View detailed stats` resolves to `stats.html` and both final CTA links resolve locally.
8. Confirm there are no fake forms, transaction controls, or broken local assets.
9. Check browser console errors and warnings.
10. Search the finished About page for `Nelly`, `Korda`, visible `Golfex` body copy, real-athlete claims, and unsupported external links.
11. Report the final page height at desktop and mobile widths.
12. Report every changed/created file and everything deferred.

Before editing, restate the exact About/Career-only scope and list the files you expect to touch. Then implement and verify Prompt 03.
```
