import * as React from 'react';

/** Compact count or status badge, typically for counters or "nuevo" flags. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Soft tinted style instead of solid coral. */
  soft?: boolean;
  children?: React.ReactNode;
}

export declare function Badge(props: BadgeProps): JSX.Element;
