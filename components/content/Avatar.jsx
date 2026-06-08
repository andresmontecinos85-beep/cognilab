import React from 'react';

/** Circular avatar — image or initials fallback. */
export function Avatar({ src, alt = '', initials, size = 'md', className = '', ...rest }) {
  const cls = ['cl-avatar', `cl-avatar--${size}`, className].filter(Boolean).join(' ');
  return (
    <span className={cls} {...rest}>
      {src ? <img src={src} alt={alt} /> : <span>{initials}</span>}
    </span>
  );
}
