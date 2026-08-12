import Link from "next/link";

import SiteHeaderMotion from "./SiteHeaderMotion";
import styles from "./SiteHeader.module.css";

/*
 * Floating nav from the top of the "Our Services" frame (node 681:30714).
 * Kept out of the ServicesGrid block, which gets reordered within a page
 * and must not carry site chrome. Server component — labels are in the
 * initial HTML.
 */

interface NavLink {
  label: string;
  href: string;
  current?: boolean;
}

const NAV_LINKS: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", current: true },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "FAQs", href: "/faqs" },
  { label: "Blog", href: "/blog" },
];

/** Three-dot mark in the proposal pill. */
function DotGlyph({ className }: { className?: string }) {
  return (
    <span className={className} aria-hidden="true">
      <svg viewBox="0 0 34 32" width="34" height="32" focusable="false">
        <rect x="14" y="10" width="4" height="4" fill="currentColor" />
        <rect x="18" y="14" width="4" height="4" fill="currentColor" />
        <rect x="14" y="18" width="4" height="4" fill="currentColor" />
      </svg>
    </span>
  );
}

export default function SiteHeader() {
  return (
    <header className={styles.siteHeader}>
      <SiteHeaderMotion>
        <nav className={styles.siteHeader__bar} aria-label="Main">
          <Link className={styles.siteHeader__brand} href="/">
            {/* eslint-disable-next-line @next/next/no-img-element -- vector brand marks, not raster; next/image would need dangerouslyAllowSVG */}
            <img
              className={styles.siteHeader__logoMark}
              src="/brand/logo-mark.svg"
              alt=""
              width={38}
              height={26}
            />
            {/* eslint-disable-next-line @next/next/no-img-element -- see above */}
            <img
              className={styles.siteHeader__logoWordmark}
              src="/brand/logo-wordmark.svg"
              alt="TheKollab"
              width={77}
              height={11}
            />
          </Link>

          <ul className={styles.siteHeader__links} role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className={styles.siteHeader__linkItem}>
                <Link
                  className={
                    link.current
                      ? `${styles.siteHeader__link} ${styles["siteHeader__link--current"]}`
                      : styles.siteHeader__link
                  }
                  href={link.href}
                  aria-current={link.current ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className={styles.siteHeader__actions}>
            <a
              className={styles.siteHeader__iconLink}
              href="https://t.me/"
              aria-label="TheKollab on Telegram"
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- see above */}
              <img
                className={styles.siteHeader__iconLinkGlyph}
                src="/brand/telegram.svg"
                alt=""
                width={18}
                height={18}
              />
            </a>

            <Link className={styles.siteHeader__cta} href="/proposal">
              <DotGlyph className={styles.siteHeader__ctaGlyph} />
              Free Proposal
            </Link>
          </div>
        </nav>
      </SiteHeaderMotion>
    </header>
  );
}
