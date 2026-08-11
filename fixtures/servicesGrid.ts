import type { ServicesGridProps } from "@/components/blocks/ServicesGrid";

/*
 * Local fixture standing in for a resolved Payload document. Typed against
 * the block's prop contract, so a field renamed in config.ts / types.ts
 * breaks the build here rather than silently rendering nothing.
 *
 * Copy transcribed from the "Our Services" frame (node 681:23419).
 *
 * Two deliberate deviations from the literal Figma text, both noted in the
 * README:
 *
 * 1. Strings are stored in natural case. The design gets its display casing
 *    from CSS text-transform, not from the stored content — so the eyebrow
 *    lives here as "Our Services" and is uppercased at render.
 *
 * 2. Acronyms keep their capitals. Figma renders "Kol rounds" and "Seo &
 *    Content marketing", but that is a side effect of the lowercase
 *    transform applied over source text that reads "KOL ROUNDS" and "SEO &
 *    CONTENT MARKETING". Mangled acronyms are a rendering artifact rather
 *    than intent, and an editor typing into the CMS would not reproduce it.
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
        width: 696,
        height: 658,
      },
      title: "Crypto influencer marketing",
      body: "We are proven to have the most elite crypto KOL network in the industry – with exclusive access to many of the biggest names.",
      link: { label: "Explore", href: "/services/crypto-influencer-marketing" },
    },
    {
      icon: {
        url: "/icons/social-media-marketing.png",
        alt: "",
        width: 411,
        height: 512,
      },
      title: "Social media marketing",
      body: "The lifeblood of your crypto project. We create & activate expert growth strategies that drive user interest.",
      link: { label: "Explore", href: "/services/social-media-marketing" },
    },
    {
      icon: {
        url: "/icons/public-relations.png",
        alt: "",
        width: 508,
        height: 588,
      },
      title: "Public relations",
      body: "The lifeblood of your crypto project. We create & activate expert growth strategies that drive user interest.",
      link: { label: "Explore", href: "/services/public-relations" },
    },
    {
      icon: {
        url: "/icons/kol-rounds.png",
        alt: "",
        width: 320,
        height: 526,
      },
      title: "KOL rounds",
      body: "As one of the most renowned KOL onboarding agencies, we have raised over $2.5M+ from KOLs into Presale & OTC investments.",
      link: { label: "Explore", href: "/services/kol-rounds" },
    },
    {
      icon: {
        url: "/icons/seo-content-marketing.png",
        alt: "",
        width: 640,
        height: 640,
      },
      title: "SEO & content marketing",
      body: "Our analysts and writers will get your crypto content ranking high in the SERPs in order to deliver high-intent organic traffic.",
      link: { label: "Explore", href: "/services/seo-content-marketing" },
    },
    {
      icon: {
        url: "/icons/paid-search-social.png",
        alt: "",
        width: 735,
        height: 696,
      },
      title: "Paid search & social",
      body: "Expert strategies designed to convert interest into action. Our paid crypto advertising team optimises campaigns for maximum ROI.",
      link: { label: "Explore", href: "/services/paid-search-social" },
    },
  ],
};

export default servicesGridFixture;
