import React from 'react';

/** Compact count/status badge. */
export function Badge({ soft = false, className = '', children, ...rest }) {
  const cls = ['cl-badge', soft ? 'cl-badge--soft' : '', className].filter(Boolean).join(' ');
  return <span className={cls} {...rest}>{children}</span>;
}
