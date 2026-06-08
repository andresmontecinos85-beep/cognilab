import React from 'react';

/** Styled native select with a custom chevron. */
export function Select({ className = '', children, ...rest }) {
  return (
    <select className={['cl-select', className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </select>
  );
}
