# Matthew Shell - academic portfolio

Live site: [shellmatthewk.github.io](https://shellmatthewk.github.io/).

A small multi-page academic website built with Vite and ready for GitHub Pages.
The design follows [Iris Xu's website](https://irisjxu.github.io/), using the
same 800px content width, Lato typography, blue links with orange hover states,
circular profile area, and compact research rows. The content is Matthew Shell's.

The home page uses an MS monogram because no portrait was supplied. Replace
`assets/profile-monogram.svg` and update the image's alt text in `index.html`
when adding a portrait. The climate diagram is the supplied PNG, with a
full-width version on the work page. The other research illustrations are
schematic SVGs, not experimental results. Lato is served locally; its license is included in
`assets/fonts/OFL.txt`.

## Routes

- / - home
- /about/ - background and research approach
- /work/ - selected research projects
- /notes/ - reading notes
- /contact/ - contact information

Each route is a directory with its own index.html, so direct links and page
refreshes work on GitHub Pages without a client-side router. Internal links
and assets are relative, which supports both user sites and project sites.
notes.html remains as a small redirect so older links still work.

The home page includes Research Groups with group names, dates, and mentors, followed
by Experience with the Amazon Project Kuiper and Lockheed Martin internships.
The stencil and climate projects link to their NeurIPS 2026 workshop pages.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

The finished site is written to `dist/`. To publish it to a `gh-pages` branch:

```bash
npm run deploy
```

The repository is `shellmatthewk/shellmatthewk.github.io`, and GitHub Pages
publishes from the root of the `gh-pages` branch. The deploy command requires
the configured Git remote and GitHub access.

GitHub and LinkedIn links appear on the home and contact pages. Before
publishing, replace the placeholder email, Google Scholar, and CV labels on
the contact page with your real links. No publication URLs are assumed.
