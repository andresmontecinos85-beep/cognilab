import * as React from 'react';

/** Large editorial statistic with a caption. Wrap part of `value` in <em> to color it coral. */
export interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The number/figure, e.g. "14" or <>14<em>+</em></>. */
  value?: React.ReactNode;
  /** Caption under the figure. */
  label?: React.ReactNode;
}

export declare function Stat(props: StatProps): JSX.Element;
