import React from 'react';

/** Single-line text input. */
export function Input({ className = '', ...rest }) {
  return <input className={['cl-input', className].filter(Boolean).join(' ')} {...rest} />;
}
