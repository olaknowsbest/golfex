# Claude Code Prompt 02B — Homepage Concept-Partner Marks

Copy everything inside the prompt block into Claude Code while its working directory is `/Users/mac/Desktop/golf/site`.

```text
Add one narrowly scoped concept-partner showcase to the completed fictional Nazario Kayla homepage.

Before editing, reread `CLAUDE.md`, `docs/BRAND-DIRECTION.md`, `docs/prompts/02-homepage.md`, `index.html`, `assets/css/site-shell.css`, and `assets/css/page-home-prototype.css`. Inspect the relevant supplied NK Management screenshot/reference for the visual idea of a clean global-brand logo row, but do not copy its brands, logos, wording, or implied affiliations.

Inspect git status and preserve all existing work. Remain on `athlete-platform-concept`. Do not commit. Do not alter any completed page except `index.html`, its homepage stylesheet, and the new fictional mark assets described below.

Add a homepage section between `Inside the journey` and the final CTA:

- Eyebrow: `CONCEPT PARTNERS`
- H2: `A partner showcase, ready for future approvals.`
- Supporting sentence: `Original placeholder marks demonstrate how approved partnerships could appear on the finished platform.`
- Display six polished logo-style marks in a restrained monochrome grid or row:
  - Northline
  - Meridian
  - Fairway Systems
  - Altitude
  - Motive
  - Signal
- Small visible disclosure: `Fictional partner names and marks for prototype demonstration. No affiliations implied.`
- CTA: `Partnership enquiries` → `contact-us.html`

Create six original lightweight SVG marks under `assets/images/partners/concept/`. Each mark must be visually distinct and suitable for a premium logo wall, using simple original geometry plus the fictional wordmark. Use only project colors or `currentColor` where practical. These are design placeholders, not imitations or close variations of existing company logos.

Do not use Nike, BMW, Cisco, Delta, T-Mobile, Richard Mille, Nelly Korda, or any other real company/athlete name, logo, slogan, trade dress, or sponsorship claim. Do not download any logo from the web. Do not add a marquee that constantly moves; use a stable responsive grid with optional subtle hover/focus treatment. The logos themselves are noninteractive unless wrapped by the single section CTA.

Design direction:

- Take the NK Management reference's polished partner-logo presentation as inspiration.
- Reinterpret it in the existing cream, ink-black, sand, yellow, and white Nazario Kayla system.
- Keep the section visually premium and concise, not a large content block.
- Desktop: six marks in one row or a balanced 3×2 grid.
- Tablet: 3×2 or 2×3 grid.
- Mobile near 390px: two columns or one column, with no clipping or page-level horizontal overflow.
- Ensure every SVG has a meaningful accessible name via the `<img alt>` in HTML; avoid redundant embedded SVG titles if the image alt already provides the name.
- Preserve the completed header, navigation, hero, achievements, Fan Cards, experiences, journey section, final CTA, footer, and all existing links/content.

Verification:

1. Serve locally over HTTP and verify near 1280px, 768px, and an actual width near 390px.
2. Confirm all six SVGs load without 404s and remain legible on their section background.
3. Confirm no horizontal overflow at each width.
4. Confirm the section appears between `Inside the journey` and the final CTA.
5. Confirm `Partnership enquiries` resolves to `contact-us.html` with HTTP 200.
6. Confirm header/mobile menu/footer still work and there are no console errors.
7. Search the changed files and new SVGs for real brand names and `Nelly`/`Korda`; there must be no matches apart from this prompt file, which is documentation and not public output.
8. Report every changed/created file and do not commit.

Before editing, restate this homepage-partner-section-only scope and list the exact files you expect to touch. Then implement and verify.
```
