import type { Metadata } from "next";

import ServicesGrid from "@/components/blocks/ServicesGrid";
import SiteHeader from "@/components/SiteHeader";
import { servicesGridFixture } from "@/fixtures/servicesGrid";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Web3 & Crypto Marketing Services — TheKollab",
  description: servicesGridFixture.intro,
};

/*
 * Server component. The fixture stands in for a resolved Payload document —
 * no CMS call, and no client boundary below this, so all copy is in the
 * initial HTML. SiteHeader sits alongside the block rather than inside it,
 * since the block gets reordered within a page and must not carry chrome.
 */
export default function ServicesGridPage() {
  return (
    <main className={styles.page}>
      <SiteHeader />
      <ServicesGrid {...servicesGridFixture} />
    </main>
  );
}
