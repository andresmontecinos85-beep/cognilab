import React from 'react';

/**
 * Accessible accordion for FAQs. Self-managed open state.
 * Pass items as [{ q, a }] or compose Accordion.Item children.
 */
export function Accordion({ items = [], allowMultiple = false, defaultOpen = [], className = '' }) {
  const [open, setOpen] = React.useState(() => new Set(defaultOpen));
  const toggle = (i) => {
    setOpen((prev) => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(i)) next.delete(i); else next.add(i);
      return next;
    });
  };
  return (
    <div className={['cl-accordion', className].filter(Boolean).join(' ')}>
      {items.map((it, i) => {
        const isOpen = open.has(i);
        return (
          <div className="cl-accordion__item" data-open={isOpen} key={i}>
            <button className="cl-accordion__trigger" aria-expanded={isOpen} onClick={() => toggle(i)}>
              <span>{it.q}</span>
              <span className="cl-accordion__icon" aria-hidden="true">+</span>
            </button>
            <div className="cl-accordion__panel">
              <div><div className="cl-accordion__body">{it.a}</div></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
