import React from 'react';

/** Section header: eyebrow kicker + display title + optional lead. */
export function SectionHeading({ eyebrow, title, lead, align = 'start', as = 'h2', className = '', children }) {
  const Title = as;
  const cls = ['cl-section-head', align === 'center' ? 'cl-section-head--center' : '', className].filter(Boolean).join(' ');
  return (
    <div className={cls}>
      {eyebrow ? <span className="cl-eyebrow">{eyebrow}</span> : null}
      {title ? <Title className="cl-section-head__title">{title}</Title> : null}
      {lead ? <p className="cl-section-head__lead">{lead}</p> : null}
      {children}
    </div>
  );
}
