import React from 'react';

/**
 * CogniLab Button — pill-shaped action with brand variants.
 * Renders an <a> when `href` is provided, otherwise a <button>.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  block = false,
  href,
  leadingIcon,
  trailingIcon,
  className = '',
  children,
  ...rest
}) {
  const cls = [
    'cl-btn',
    `cl-btn--${variant}`,
    size !== 'md' ? `cl-btn--${size}` : '',
    block ? 'cl-btn--block' : '',
    className,
  ].filter(Boolean).join(' ');

  const inner = (
    <>
      {leadingIcon ? <span className="cl-btn__icon" aria-hidden="true">{leadingIcon}</span> : null}
      {children ? <span>{children}</span> : null}
      {trailingIcon ? <span className="cl-btn__icon" aria-hidden="true">{trailingIcon}</span> : null}
    </>
  );

  if (href) {
    return <a href={href} className={cls} {...rest}>{inner}</a>;
  }
  return <button className={cls} {...rest}>{inner}</button>;
}
