import type { ServicesGridProps } from "@/components/blocks/ServicesGrid";

/*
 * Local fixture standing in for a resolved Payload document. Typed against
 * the block's prop contract, so a field renamed in config.ts / types.ts
 * breaks the build here rather than silently rendering nothing.
 *
 * Copy transcribed verbatim from the "Our Services" frame (node 681:23419),
 * including the design's own casing on "Kol rounds" and "Seo & Content
 * marketing".
 *
 * The eyebrow is the one string stored differently from how it appears: the
 * design renders it uppercase via text-transform rather than storing it that
 * way, so it lives here as "Our Services" and is uppercased at render.
 *
 * Icons are the original transparent uploads from the file rather than the
 * flattened node exports — the exports arrive pre-composited onto the
 * section background and cannot sit over a card that changes colour.
 *
 * `cta` is intentionally absent — the source frame has no CTA banner.
 */
export const servicesGridFixture: ServicesGridProps = {
  eyebrow: "Our Services",
  heading: "Web3 & Crypto Marketing Services",
  headingLevel: 1,
  intro:
    "We help Web3 and crypto projects build strong brands, engage communities, and scale growth.",
  cards: [
    {
      icon: {
        url: "/icons/crypto-influencer-marketing.png",
        alt: "",
        width: 540,
        height: 515,
      },
      iconWidthPercent: 93.5,
      title: "Crypto influencer marketing",
      body: "We are proven to have the most elite crypto KOL network in the industry – with exclusive access to many of the biggest names.",
      link: { label: "Explore", href: "/services/crypto-influencer-marketing" },
    },
    {
      icon: {
        url: "/icons/social-media-marketing.png",
        alt: "",
        width: 308,
        height: 384,
      },
      iconWidthPercent: 55.1,
      title: "Social media marketing",
      body: "The lifeblood of your crypto project. We create & activate expert growth strategies that drive user interest.",
      link: { label: "Explore", href: "/services/social-media-marketing" },
    },
    {
      icon: {
        url: "/icons/public-relations.png",
        alt: "",
        width: 381,
        height: 441,
      },
      iconWidthPercent: 68.3,
      title: "Public relations",
      body: "The lifeblood of your crypto project. We create & activate expert growth strategies that drive user interest.",
      link: { label: "Explore", href: "/services/public-relations" },
    },
    {
      icon: {
        url: "/icons/kol-rounds.png",
        alt: "",
        width: 265,
        height: 437,
      },
      iconWidthPercent: 43.0,
      title: "Kol rounds",
      body: "As one of the most renowned KOL onboarding agencies, we have raised over $2.5M+ from KOLs into Presale & OTC investments.",
      link: { label: "Explore", href: "/services/kol-rounds" },
    },
    {
      icon: {
        url: "/icons/seo-content-marketing.png",
        alt: "",
        width: 480,
        height: 480,
      },
      iconWidthPercent: 86.0,
      title: "Seo & Content marketing",
      body: "Our analysts and writers will get your crypto content ranking high in the SERPs in order to deliver high-intent organic traffic.",
      link: { label: "Explore", href: "/services/seo-content-marketing" },
    },
    {
      icon: {
        url: "/icons/paid-search-social.png",
        alt: "",
        width: 551,
        height: 522,
      },
      iconWidthPercent: 98.7,
      title: "Paid search & social",
      body: "Expert strategies designed to convert interest into action. Our paid crypto advertising team optimises campaigns for maximum ROI.",
      link: { label: "Explore", href: "/services/paid-search-social" },
    },
  ],
};

export default servicesGridFixture;
