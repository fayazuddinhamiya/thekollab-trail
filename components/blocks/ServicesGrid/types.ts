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
  iconWidthPercent?: number;
  title: string;
  body: string;
  link: ServicesGridLink;
}

export interface ServicesGridProps {
  eyebrow?: string;
  heading: string;
  headingLevel?: HeadingLevel;
  intro: string;
  cards: ServicesGridCard[];
  cta?: ServicesGridLink;
}
