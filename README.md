# TheKollab — Services Grid Block

A single block from the TheKollab × QClay Figma file (the "Our Services" frame), built as a
Payload-ready Next.js block. Next.js App Router, TypeScript, CSS Modules with BEM, GSAP for motion.

- **Run it.** `npm install && npm run build && npm start`, then open
  [http://localhost:3000/services-grid](http://localhost:3000/services-grid) — or `npm run dev` for
  the dev server. The page renders `<ServicesGrid />` from a local fixture
  (`fixtures/servicesGrid.ts`) typed against the block's prop contract; there is no CMS call and no
  database. The Payload config at `components/blocks/ServicesGrid/config.ts` is the exported `Block`
  object only — `payload` is a devDependency purely so that file typechecks against the real `Block`
  type. To see the heading level change, edit `headingLevel` in the fixture (1–6) and reload: the
  block heading renders as that tag and card titles follow one level below it, clamped at `h6`.

- **Add the next block.** Copy the folder shape at `components/blocks/ServicesGrid/` — `types.ts`
  (prop contract), `config.ts` (Payload `Block`, field names mirroring the types one-for-one),
  `YourBlock.tsx` (server component), `YourBlock.module.css`, `index.ts`, plus a
  `YourBlockMotion.tsx` client wrapper only if it needs JS-driven motion. Keep to the rules this
  block follows: take `headingLevel` as a prop rather than hardcoding a tag, pull every colour from
  `styles/tokens.css` so no literal value lands in a module, keep all copy in the server component
  and let any client wrapper receive it as `children`, and give animated elements their space in
  normal flow so nothing shifts after paint. Add a fixture beside it, render it from a route, then
  register the config in the `blocks` array of the Payload `Pages` collection when there is one.

- **What could not be reproduced exactly.** The design uses four commercial faces, none of them
  licensed for this project yet — **PP Monument Narrow** (heading, card titles), **Sequel Sans Light
  Disp** (intro and card body), **Proto Mono** (eyebrow, card numerals) and **Helvetica Now
  Display** (link labels). They are substituted with **Archivo**, **Inter** and **JetBrains Mono**
  via `next/font`; swapping them means changing `--font-display`, `--font-body` and `--font-mono` in
  `styles/tokens.css` and the corresponding loaders in `app/layout.tsx`. Because Archivo is
  proportionally wider than the condensed original, the header needs more width than the measured
  518px to hold the heading on two lines. The heading itself is vector-outlined artwork in Figma
  rather than a text layer, so it is rebuilt as real text — it will not be glyph-for-glyph identical
  until the licensed font is in place. The card icons export from Figma already flattened onto the
  section background rather than as transparent assets, which is why the card hover state changes
  only its border and never its fill; a fill would reveal the icons' opaque backing. The blurred
  accent shape behind the section is a CSS radial gradient rather than the exported SVG, so it
  scales to any viewport instead of being pinned to the 1512px frame. The source frame contains no
  CTA banner — only the per-card links — so `cta` is an optional field that renders nothing when
  omitted, which is how the fixture leaves it.
