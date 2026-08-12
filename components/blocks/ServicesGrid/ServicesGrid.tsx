import Image from "next/image";

import ServicesGridMotion from "./ServicesGridMotion";
import StarBadgeIcon from "./StarBadgeIcon";
import styles from "./ServicesGrid.module.css";
import type { HeadingLevel, ServicesGridProps } from "./types";

/** Decorative glyph in the Explore link, from the frame's measured geometry. */
function LinkGlyph() {
  return (
    <span className={styles.servicesGrid__linkGlyph} aria-hidden="true">
      <svg viewBox="0 0 26 26" width="26" height="26" focusable="false">
        <rect x="10" y="8" width="3.333" height="3.333" fill="currentColor" />
        <rect
          x="13.333"
          y="11.333"
          width="3.333"
          height="3.333"
          fill="currentColor"
        />
        <rect
          x="10"
          y="14.667"
          width="3.333"
          height="3.333"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}

/** Card titles sit one level below the block heading. Clamped at h6. */
function nextLevel(level: HeadingLevel): HeadingLevel {
  return Math.min(level + 1, 6) as HeadingLevel;
}

/**
 * Cuts the heading so the dot lands after the first ampersand and the badge
 * between the final two words, putting both in the text flow instead of
 * over it. Any heading works: no ampersand means no dot, one word no badge.
 */
function headingParts(heading: string) {
  const words = heading.trim().split(/\s+/);
  const lastWord = words.length > 1 ? words[words.length - 1] : null;
  const lead = (lastWord ? words.slice(0, -1) : words).join(" ");
  const ampersand = lead.indexOf("&");

  return {
    beforeDot: ampersand === -1 ? lead : lead.slice(0, ampersand + 1),
    afterDot: ampersand === -1 ? null : lead.slice(ampersand + 1),
    lastWord,
  };
}

export default function ServicesGrid({
  eyebrow,
  heading,
  headingLevel = 2,
  intro,
  cards,
  cta,
}: ServicesGridProps) {
  const Heading = `h${headingLevel}` as const;
  const CardTitle = `h${nextLevel(headingLevel)}` as const;
  const headingId = "services-grid-heading";
  const { beforeDot, afterDot, lastWord } = headingParts(heading);

  return (
    <ServicesGridMotion>
      <section className={styles.servicesGrid} aria-labelledby={headingId}>
        <div className={styles.servicesGrid__inner}>
          <header className={styles.servicesGrid__header}>
            {eyebrow ? (
              <p className={styles.servicesGrid__eyebrow} data-motion="intro">
                {eyebrow}
              </p>
            ) : null}

            <Heading
              id={headingId}
              className={styles.servicesGrid__heading}
              data-motion="intro"
            >
              {beforeDot}
              {afterDot === null ? null : (
                <>
                  <span
                    className={styles.servicesGrid__headingDot}
                    aria-hidden="true"
                  />
                  {afterDot}
                </>
              )}
              {lastWord === null ? null : (
                <>
                  <span
                    className={styles.servicesGrid__headingBadge}
                    data-motion="badge"
                    aria-hidden="true"
                  >
                    <StarBadgeIcon
                      className={styles.servicesGrid__headingBadgeIcon}
                    />
                  </span>
                  {lastWord}
                </>
              )}
            </Heading>

            <p className={styles.servicesGrid__intro} data-motion="intro">
              {intro}
            </p>
          </header>

          <ul className={styles.servicesGrid__cards} role="list">
            {cards.map((card, index) => (
              <li
                key={card.title}
                className={styles.servicesGrid__card}
                data-motion="card"
              >
                <p
                  className={styles.servicesGrid__cardNumber}
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </p>

                <div className={styles.servicesGrid__cardText}>
                  <CardTitle className={styles.servicesGrid__cardTitle}>
                    {card.title}
                  </CardTitle>
                  <p className={styles.servicesGrid__cardBody}>{card.body}</p>
                </div>

                <div
                  className={styles.servicesGrid__cardMedia}
                  style={
                    {
                      "--services-grid-icon-width": `${card.iconWidthPercent ?? 70}%`,
                    } as React.CSSProperties
                  }
                >
                  <Image
                    className={styles.servicesGrid__cardIcon}
                    src={card.icon.url}
                    alt={card.icon.alt}
                    width={card.icon.width}
                    height={card.icon.height}
                    sizes="(max-width: 767px) 80vw, (max-width: 1023px) 40vw, 27vw"
                  />
                </div>

                <a
                  className={styles.servicesGrid__cardLink}
                  href={card.link.href}
                >
                  <LinkGlyph />
                  {card.link.label}
                  <span className={styles.servicesGrid__srOnly}>
                    {` — ${card.title}`}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          {/* Payload returns an empty group as {label:"",href:""}, not undefined. */}
          {cta?.label && cta?.href ? (
            <div className={styles.servicesGrid__cta} data-motion="card">
              <a className={styles.servicesGrid__ctaLink} href={cta.href}>
                {cta.label}
              </a>
            </div>
          ) : null}
        </div>
      </section>
    </ServicesGridMotion>
  );
}
