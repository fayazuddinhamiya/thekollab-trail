/* Prop contract for the block. ./config.ts mirrors these field names. */

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

/** A resolved Payload upload, so a CMS response drops in without a mapper. */
export interface ServicesGridMedia {
  url: string;
  alt: string;
  width: number;
  height: number;
}

export interface ServicesGridLink {
  label: string;
  href: string;
}

export interface ServicesGridCard {
  icon: ServicesGridMedia;
  /**
   * Artwork width as a percentage of the card's content width; height
   * follows from the image. Per card rather than per media doc, since the
   * frame sizes each icon differently (160px to 367px on a 432px card).
   */
  iconWidthPercent?: number;
  title: string;
  body: string;
  link: ServicesGridLink;
}

export interface ServicesGridProps {
  /** Small label above the heading. Rendered uppercase via CSS. */
  eyebrow?: string;
  heading: string;
  /**
   * Rendered heading tag. A prop because the block gets rearranged and the
   * outline has to stay valid wherever it lands. Card titles follow one down.
   */
  headingLevel?: HeadingLevel;
  intro: string;
  cards: ServicesGridCard[];
  /** Optional — the frame has no CTA banner, only the per-card links. */
  cta?: ServicesGridLink;
}
