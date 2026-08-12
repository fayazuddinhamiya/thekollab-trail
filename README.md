# TheKollab — Services Grid Block

A single block from the TheKollab × QClay Figma file (the "Our Services" frame, node
`681:23419`), built as a Payload-ready Next.js block. Next.js App Router, TypeScript, CSS Modules
with BEM, GSAP for motion.

- **Run it.** `npm install && npm run build && npm start`, then open
  [http://localhost:3000/services-grid](http://localhost:3000/services-grid) — or `npm run dev` for
  the dev server. The page renders `<ServicesGrid />` from a local fixture
  (`fixtures/servicesGrid.ts`) typed against the block's prop contract; there is no CMS call and no
  database. The Payload config at `components/blocks/ServicesGrid/config.ts` is the exported `Block`
  object only — `payload` is a devDependency purely so that file typechecks against the real `Block`
  type. To see the heading level change, edit `headingLevel` in the fixture (1–6) and reload: the
  block heading renders as that tag and card titles follow one level below it, clamped at `h6`. The
  nav is a separate `SiteHeader` component rather than part of the block, since the block gets
  reordered within a page and should not carry site chrome with it.

- **Add the next block.** Copy the folder shape at `components/blocks/ServicesGrid/` — `types.ts`
  (prop contract), `config.ts` (Payload `Block`, field names mirroring the types one-for-one),
  `YourBlock.tsx` (server component), `YourBlock.module.css`, `index.ts`, plus a
  `YourBlockMotion.tsx` client wrapper only if it needs JS-driven motion. Keep to the rules this
  block follows: take `headingLevel` as a prop rather than hardcoding a tag, pull every colour from
  `styles/tokens.css` so no literal value lands in a module, keep all copy in the server component
  and let any client wrapper receive it as `children`, and give animated elements their space in
  normal flow so nothing shifts after paint. Anything a page needs to tell the block — the way this
  one is told how much room the floating header takes — passes down as an inherited custom property
  rather than the block reaching outward. Add a fixture beside it, render it from a route, then
  register the config in the `blocks` array of the Payload `Pages` collection when there is one.

- **What could not be reproduced exactly.** The design uses four commercial faces, none of them
  licensed for this project yet — **PP Monument Narrow** (heading, card titles), **Sequel Sans Light
  Disp** (intro and card body), **Proto Mono** (eyebrow, card numerals) and **Helvetica Now
  Display** (link labels). They are substituted with **Archivo**, **Inter** and **JetBrains Mono**
  via `next/font`; swapping them means changing `--font-display`, `--font-body` and `--font-mono` in
  `styles/tokens.css` and the corresponding loaders in `app/layout.tsx`. Because Archivo is
  proportionally wider than the condensed original, the header needs more width than the measured
  518px to hold the heading on two lines. The heading itself is vector-outlined artwork in Figma
  rather than a text layer, so it is rebuilt as real text and will not be glyph-for-glyph identical
  until the licensed font is in place. The blurred accent shape behind the section and the card
  hover wash are CSS gradients rather than the exported SVGs, so they scale to any viewport instead
  of being pinned to the 1512px frame; the halftone texture is the file's own tile. The card
  artwork is positioned rather than measured from a fixed frame — each piece takes its width from
  the card (`iconWidthPercent`) and its height from the image, since the six vary from 160×263 to
  367×348 and a shared height distorts them. The file carries two near-identical limes, `#e6f64d`
  on the star and logo against `#f0ff56` on the proposal pill; both are kept as separate tokens
  rather than silently reconciled. The source frame contains no CTA banner — only the per-card
  links — so `cta` is an optional field that renders nothing when omitted, which is how the fixture
  leaves it. The mobile frame's nav uses a hamburger where this build keeps the desktop actions, as
  the menu it opens is not in the file.
