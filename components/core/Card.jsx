import React from 'react';

/** Generic surface container with the brand's soft card styling. */
export function Card({ variant, interactive = false, as = 'div', className = '', children, ...rest }) {
  const Comp = as;
  const cls = [
    'cl-card',
    variant ? `cl-card--${variant}` : '',
    interactive ? 'cl-card--interactive' : '',
    className,
  ].filter(Boolean).join(' ');
  return <Comp className={cls} {...rest}>{children}</Comp>;
}
