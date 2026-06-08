import React from 'react';

/** Labeled form field wrapper: label + control + hint/error. */
export function Field({ label, htmlFor, required = false, hint, error, className = '', children }) {
  const cls = ['cl-field', error ? 'cl-field--error' : '', className].filter(Boolean).join(' ');
  const msg = error || hint;
  return (
    <div className={cls}>
      {label ? (
        <label className="cl-label" htmlFor={htmlFor}>
          {label}{required ? <span className="cl-label__req" aria-hidden="true">*</span> : null}
        </label>
      ) : null}
      {children}
      {msg ? <span className="cl-hint">{msg}</span> : null}
    </div>
  );
}
