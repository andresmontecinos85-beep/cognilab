import * as React from 'react';

/**
 * Small pill label for service categories, attention modalities,
 * specialty areas, or lightweight status.
 */
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Color tone. @default "primary" */
  tone?: 'primary' | 'accent' | 'amber' | 'neutral' | 'outline';
  /** Show a leading dot in the current color. */
  dot?: boolean;
  children?: React.ReactNode;
}

export declare function Tag(props: TagProps): JSX.Element;
