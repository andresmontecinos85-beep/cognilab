import * as React from 'react';

/**
 * Pill-shaped button with CogniLab brand variants.
 * Use `primary` for the main action on a view, `accent` (coral) for warm
 * emotional CTAs, `secondary`/`ghost` for lower emphasis, and `whatsapp`
 * for "Agenda por WhatsApp" actions.
 *
 * @startingPoint section="Core" subtitle="Pill button · 5 variants" viewport="700x180"
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** Visual emphasis. @default "primary" */
  variant?: 'primary' | 'accent' | 'secondary' | 'ghost' | 'whatsapp';
  /** Size. @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Stretch to fill the container width. */
  block?: boolean;
  /** Render as a link to this URL instead of a <button>. */
  href?: string;
  /** Icon node placed before the label. */
  leadingIcon?: React.ReactNode;
  /** Icon node placed after the label. */
  trailingIcon?: React.ReactNode;
  children?: React.ReactNode;
}

export declare function Button(props: ButtonProps): JSX.Element;
