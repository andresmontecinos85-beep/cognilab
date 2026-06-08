import * as React from 'react';

/** Accessible FAQ accordion with self-managed open/close state. */
export interface AccordionItem {
  /** Question / trigger label. */
  q: React.ReactNode;
  /** Answer / panel body. */
  a: React.ReactNode;
}
export interface AccordionProps {
  /** Items to render. */
  items?: AccordionItem[];
  /** Allow more than one panel open at once. */
  allowMultiple?: boolean;
  /** Indices open by default. */
  defaultOpen?: number[];
  className?: string;
}

export declare function Accordion(props: AccordionProps): JSX.Element;
