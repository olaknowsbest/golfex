# Claude Code Prompt 07 — Public Fictional Stats

Copy the block below into Claude Code in `/Users/mac/Desktop/golf/site`.

```text
Build Prompt 07: the read-only public Stats page for fictional athlete Nazario Kayla.

Read `CLAUDE.md`, the core docs, Prompts 01–06, `stats.html`, `about-us.html`, and completed public-page CSS. Use the NK Management references for strong metric hierarchy, dark cards, labels, and spacing, but do not copy its identity, values, dashboard shell, controls, or blue styling.

Preserve branch `athlete-platform-concept`, dirty worktree, shared shell, NK loader, and completed pages; do not commit. Scope: `stats.html` plus one new `assets/css/page-stats.css`. This is a public editorial page, not a dashboard. No filters, account state, forms, API calls, charts requiring JS, storage, or backend.

Keep future authorized real-stat replacement simple without adding data architecture now:

- Keep all replaceable athlete statistics inside one clearly commented `PUBLIC ATHLETE STATS` region in `stats.html`.
- Add neutral `data-stat-key` hooks to the four snapshot values (`careerWins`, `majorTitles`, `peakWorldRanking`, `topTenRate`).
- Add `data-season` to each season row and neutral `data-field` hooks to its starts/wins/top-ten cells.
- Do not use Nazario-specific class names, ids, JavaScript variables, or CSS selectors for the data values; presentation selectors should remain athlete-neutral.
- Add a short authoring comment stating that replacing fictional data with real-athlete data later requires authorization, an approved/licensed source, source attribution, update timestamps, and verification of totals.
- These hooks are authoring/integration aids only. Do not add JSON, JavaScript rendering, an API, hidden real-athlete data, or visible implementation notes.

Replace the placeholder body with:

1. HERO
   - Eyebrow: `CAREER STATS · FICTIONAL DATA`
   - H1: `The numbers behind the fictional journey.`
   - Explain that every figure is invented for prototype demonstration.
   - Badge: `Fictional statistics · Not a real competitive record`
   - Link: `Back to About / Career` → `about-us.html`.

2. CAREER SNAPSHOT
   - Four cards consistent with the homepage/About page: `12 Career Wins`, `2 Major Titles`, `No. 1 Peak World Ranking`, `68% Top-10 Rate`.
   - Visible note: `Fictional statistics for prototype demonstration.`

3. FICTIONAL SEASON RECORD
   - Accessible HTML table with caption and columns `Season`, `Starts`, `Wins`, `Top-10 finishes`.
   - Rows:
     - 2021: 12, 1, 6
     - 2022: 18, 3, 12
     - 2023: 17, 2, 11
     - 2024: 19, 4, 14
     - 2025: 18, 2, 14
     - Career concept total: 84, 12, 57
   - Explain that 57/84 rounds to the displayed 68% Top-10 Rate and that wins are included within Top-10 finishes.
   - Keep the table usable in a labeled horizontal-scroll region on narrow screens without page-level overflow.

4. PERFORMANCE PROFILE
   - H2: `A fictional playing profile.`
   - Four qualitative cards—no extra fabricated precise measurements:
     - `Composure` / Defining strength
     - `Short game` / Primary performance edge
     - `Approach play` / Consistent foundation
     - `Fan connection` / Platform narrative focus
   - Use restrained original inline SVG icons or typographic markers; no fake progress bars pretending to be measured data.

5. DATA NOTE
   - Dark information panel explaining that the values are replaceable demonstration content, not sourced from a tour, athlete, ranking body, or statistics provider.
   - State that real launch data would require an approved source, update process, timestamps, corrections policy, and rights review.

6. FINAL CTA
   - H2: `Continue exploring the prototype.`
   - `Meet Nazario` → `about-us.html`
   - `View Fan Cards` → `pricing-plan.html`

Update title/meta description; remove visible Golfex placeholder copy. Maintain one H1, semantic headings, accessible table headers/caption, useful contrast, visible focus, and the cream/black/sand/yellow palette. Take visual ideas from NK Management but keep this clearly public and editorial. No real athlete names, tournament names, sponsors, quotes, external data, or misleading source claims.

Verify locally near 1280px, 768px, and actual ~390px where possible: no overflow, active navigation remains About / Career rather than adding a Stats nav item, shared loader/menu/footer work, table keyboard scrolling works, all links return 200, console is clean, totals calculate correctly, every required neutral data hook appears exactly where intended, no real-athlete data/name is present, and there is exactly one H1. Report files/results/deferrals; do not commit.

Before editing, state the Stats-only scope and expected files. Then implement and verify.
```
