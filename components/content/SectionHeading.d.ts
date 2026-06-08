import * as React from 'react';

/**
 * Section header pairing an uppercase eyebrow kicker, a serif display
 * title, and an optional lead paragraph. The backbone of every page section.
 *
 * @startingPoint section="Content" subtitle="Eyebrow + serif title + lead" viewport="700x240"
 */
export interface SectionHeadingProps {
  /** Small uppercase kicker above the title. */
  eyebrow?: React.ReactNode;
  /** Serif display title. */
  title?: React.ReactNode;
  /** Supporting lead paragraph. */
  lead?: React.ReactNode;
  /** Alignment. @default "start" */
  align?: 'start' | 'center';
  /** Heading element to render the title as. @default "h2" */
  as?: 'h1' | 'h2' | 'h3';
  children?: React.ReactNode;
}

export declare function SectionHeading(props: SectionHeadingProps): JSX.Element;
