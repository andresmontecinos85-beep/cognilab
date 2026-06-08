import * as React from 'react';

/** Generic surface container with the brand's soft, warm card styling. */
export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  /** Surface treatment. Omit for the default white paper card. */
  variant?: 'flat' | 'tint';
  /** Add hover lift + pointer for clickable cards. */
  interactive?: boolean;
  /** Element/tag to render as. @default "div" */
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
}

export declare function Card(props: CardProps): JSX.Element;
