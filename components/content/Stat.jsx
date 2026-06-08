import React from 'react';

/** Big editorial statistic with a label. Wrap part of the number in <em> to color it coral. */
export function Stat({ value, label, className = '', ...rest }) {
  return (
    <div className={['cl-stat', className].filter(Boolean).join(' ')} {...rest}>
      <span className="cl-stat__num">{value}</span>
      {label ? <span className="cl-stat__label">{label}</span> : null}
    </div>
  );
}
