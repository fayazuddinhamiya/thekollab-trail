import type { Block } from "payload";

/*
 * Payload block config for the services grid.
 *
 * This is the config object only — there is no Payload instance, database
 * or admin server in this repo. `payload` is a devDependency purely so this
 * file typechecks against the real Block type rather than a hand-written
 * approximation.
 *
 * Field names mirror ./types.ts one-for-one, so a resolved Payload document
 * can be spread straight into <ServicesGrid /> with no mapping layer.
 */
export const ServicesGridBlock: Block = {
  slug: "servicesGrid",
  interfaceName: "ServicesGridBlock",
  labels: {
    singular: "Services Grid",
    plural: "Services Grids",
  },
  fields: [
    {
      name: "eyebrow",
      type: "text",
      label: "Eyebrow",
      admin: {
        description:
          "Small label above the heading. Rendered in uppercase — enter it in normal sentence case.",
      },
    },
    {
      name: "heading",
      type: "text",
      label: "Heading",
      required: true,
    },
    {
      name: "headingLevel",
      type: "number",
      label: "Heading level",
      required: true,
      defaultValue: 2,
      min: 1,
      max: 6,
      admin: {
        description:
          "Which heading tag this block renders (1–6). Set this so the page's heading order stays in sequence — blocks can be reordered, so it is not safe to assume this block is always second.",
        step: 1,
      },
    },
    {
      name: "intro",
      type: "textarea",
      label: "Intro",
      required: true,
    },
    {
      name: "cards",
      type: "array",
      label: "Cards",
      labels: {
        singular: "Card",
        plural: "Cards",
      },
      required: true,
      minRows: 1,
      admin: {
        description:
          "Cards are numbered automatically in the order listed — reordering renumbers them.",
      },
      fields: [
        {
          name: "icon",
          type: "upload",
          relationTo: "media",
          label: "Icon",
          required: true,
        },
        {
          name: "iconWidthPercent",
          type: "number",
          label: "Icon width (%)",
          defaultValue: 70,
          min: 10,
          max: 100,
          admin: {
            description:
              "How wide the artwork renders, as a percentage of the card's content width. Height follows from the image itself. Each card in the design sizes its own icon, so this is set per card rather than on the media.",
          },
        },
        {
          name: "title",
          type: "text",
          label: "Title",
          required: true,
        },
        {
          name: "body",
          type: "textarea",
          label: "Body",
          required: true,
        },
        {
          name: "link",
          type: "group",
          label: "Link",
          fields: [
            {
              name: "label",
              type: "text",
              label: "Label",
              required: true,
              defaultValue: "Explore",
            },
            {
              name: "href",
              type: "text",
              label: "URL",
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: "cta",
      type: "group",
      label: "Call to action",
      admin: {
        description:
          "Optional. Leave both fields empty to omit the CTA entirely — the source design has no CTA banner in this section, only the per-card links.",
      },
      fields: [
        {
          name: "label",
          type: "text",
          label: "Label",
        },
        {
          name: "href",
          type: "text",
          label: "URL",
        },
      ],
    },
  ],
};

export default ServicesGridBlock;
