import type { Metadata } from "next";

import ServicesGrid from "@/components/blocks/ServicesGrid";
import { servicesGridFixture } from "@/fixtures/servicesGrid";

export const metadata: Metadata = {
  title: "Web3 & Crypto Marketing Services — TheKollab",
  description: servicesGridFixture.intro,
};

/*
 * Server component. The fixture stands in for a resolved Payload document;
 * there is no CMS call and no client boundary anywhere beneath this, so all
 * copy is present in the initial HTML.
 */
export default function ServicesGridPage() {
  return (
    <main>
      <ServicesGrid {...servicesGridFixture} />
    </main>
  );
}
