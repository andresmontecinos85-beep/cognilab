import React from 'react';

/** Service / specialty card: tinted icon, title, description, optional footer. */
export function ServiceCard({ icon, title, children, tone = 'primary', footer, className = '', ...rest }) {
  const cls = ['cl-service', tone !== 'primary' ? `cl-service--${tone}` : '', className].filter(Boolean).join(' ');
  return (
    <div className={cls} {...rest}>
      {icon ? <div className="cl-service__icon" aria-hidden="true">{icon}</div> : null}
      {title ? <h3 className="cl-service__title">{title}</h3> : null}
      {children ? <div className="cl-service__body">{children}</div> : null}
      {footer ? <div style={{ marginTop: 'auto' }}>{footer}</div> : null}
    </div>
  );
}
