import React from 'react';

/** Small pill label for categories, modalities, or status. */
export function Tag({ tone = 'primary', dot = false, className = '', children, ...rest }) {
  const cls = ['cl-tag', tone !== 'primary' ? `cl-tag--${tone}` : '', className].filter(Boolean).join(' ');
  return (
    <span className={cls} {...rest}>
      {dot ? <span className="cl-tag__dot" aria-hidden="true" /> : null}
      {children}
    </span>
  );
}
