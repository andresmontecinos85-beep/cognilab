import React from 'react';

/** Multi-line text area. */
export function Textarea({ className = '', ...rest }) {
  return <textarea className={['cl-textarea', className].filter(Boolean).join(' ')} {...rest} />;
}
