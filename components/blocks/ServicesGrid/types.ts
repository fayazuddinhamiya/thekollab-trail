/*
 * Prop types for the ServicesGrid block.
 *
 * These are the contract the Payload block config in ./config.ts mirrors.
 * Field names are chosen to read naturally if this shape is later lifted
 * into a full Pages collection.
 */

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

/**
 * Shape of a resolved Payload upload. Matches the fields Payload's media
 * collection returns, so a real CMS response drops in without a mapper.
 */
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
  title: string;
  body: string;
  link: ServicesGridLink;
}

export interface ServicesGridProps {
  /** Small label above the heading. Rendered uppercase via CSS. */
  eyebrow?: string;
  heading: string;
  /**
   * Rendered heading tag. Not hardcoded — this block gets rearranged in
   * Payload and heading order has to stay valid wherever it lands.
   * Card titles derive from this, one level down.
   */
  headingLevel?: HeadingLevel;
  intro: string;
  cards: ServicesGridCard[];
  /**
   * Optional. The source Figma frame has no CTA banner — only the per-card
   * links — so this renders nothing when omitted.
   */
  cta?: ServicesGridLink;
}
