/* @ds-bundle: {"format":3,"namespace":"CogniLabDesignSystem_b6f223","components":[{"name":"Accordion","sourcePath":"components/content/Accordion.jsx"},{"name":"Avatar","sourcePath":"components/content/Avatar.jsx"},{"name":"SectionHeading","sourcePath":"components/content/SectionHeading.jsx"},{"name":"ServiceCard","sourcePath":"components/content/ServiceCard.jsx"},{"name":"Stat","sourcePath":"components/content/Stat.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"}],"sourceHashes":{"components/content/Accordion.jsx":"51f43d3959d9","components/content/Avatar.jsx":"9ae839dc0d1e","components/content/SectionHeading.jsx":"9c94d9c0e0e3","components/content/ServiceCard.jsx":"e2f183cf2a8c","components/content/Stat.jsx":"8b384b35d8d4","components/core/Badge.jsx":"d724ff76f0ed","components/core/Button.jsx":"e29613488143","components/core/Card.jsx":"95f65b2801d5","components/core/Tag.jsx":"f50b8643e81e","components/forms/Field.jsx":"3ff4b7ee48d6","components/forms/Input.jsx":"fbf5f46d4bc2","components/forms/Select.jsx":"451337b4fad0","components/forms/Textarea.jsx":"8445c1b87b63","ui_kits/sitio/site-app.jsx":"a5ad13d58128","ui_kits/sitio/site-body.jsx":"1b32e10e332b","ui_kits/sitio/site-contact.jsx":"91facf10e9e7","ui_kits/sitio/site-founder.jsx":"3f2a3c591d4d","ui_kits/sitio/site-hero.jsx":"4cc2821852aa","ui_kits/sitio/site-parts.jsx":"774aa5025cf5"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CogniLabDesignSystem_b6f223 = window.CogniLabDesignSystem_b6f223 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Accordion.jsx
try { (() => {
/**
 * Accessible accordion for FAQs. Self-managed open state.
 * Pass items as [{ q, a }] or compose Accordion.Item children.
 */
function Accordion({
  items = [],
  allowMultiple = false,
  defaultOpen = [],
  className = ''
}) {
  const [open, setOpen] = React.useState(() => new Set(defaultOpen));
  const toggle = i => {
    setOpen(prev => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(i)) next.delete(i);else next.add(i);
      return next;
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: ['cl-accordion', className].filter(Boolean).join(' ')
  }, items.map((it, i) => {
    const isOpen = open.has(i);
    return /*#__PURE__*/React.createElement("div", {
      className: "cl-accordion__item",
      "data-open": isOpen,
      key: i
    }, /*#__PURE__*/React.createElement("button", {
      className: "cl-accordion__trigger",
      "aria-expanded": isOpen,
      onClick: () => toggle(i)
    }, /*#__PURE__*/React.createElement("span", null, it.q), /*#__PURE__*/React.createElement("span", {
      className: "cl-accordion__icon",
      "aria-hidden": "true"
    }, "+")), /*#__PURE__*/React.createElement("div", {
      className: "cl-accordion__panel"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "cl-accordion__body"
    }, it.a))));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/content/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Circular avatar — image or initials fallback. */
function Avatar({
  src,
  alt = '',
  initials,
  size = 'md',
  className = '',
  ...rest
}) {
  const cls = ['cl-avatar', `cl-avatar--${size}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt
  }) : /*#__PURE__*/React.createElement("span", null, initials));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHeading.jsx
try { (() => {
/** Section header: eyebrow kicker + display title + optional lead. */
function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'start',
  as = 'h2',
  className = '',
  children
}) {
  const Title = as;
  const cls = ['cl-section-head', align === 'center' ? 'cl-section-head--center' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: cls
  }, eyebrow ? /*#__PURE__*/React.createElement("span", {
    className: "cl-eyebrow"
  }, eyebrow) : null, title ? /*#__PURE__*/React.createElement(Title, {
    className: "cl-section-head__title"
  }, title) : null, lead ? /*#__PURE__*/React.createElement("p", {
    className: "cl-section-head__lead"
  }, lead) : null, children);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/content/ServiceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Service / specialty card: tinted icon, title, description, optional footer. */
function ServiceCard({
  icon,
  title,
  children,
  tone = 'primary',
  footer,
  className = '',
  ...rest
}) {
  const cls = ['cl-service', tone !== 'primary' ? `cl-service--${tone}` : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), icon ? /*#__PURE__*/React.createElement("div", {
    className: "cl-service__icon",
    "aria-hidden": "true"
  }, icon) : null, title ? /*#__PURE__*/React.createElement("h3", {
    className: "cl-service__title"
  }, title) : null, children ? /*#__PURE__*/React.createElement("div", {
    className: "cl-service__body"
  }, children) : null, footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto'
    }
  }, footer) : null);
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/content/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Big editorial statistic with a label. Wrap part of the number in <em> to color it coral. */
function Stat({
  value,
  label,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['cl-stat', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "cl-stat__num"
  }, value), label ? /*#__PURE__*/React.createElement("span", {
    className: "cl-stat__label"
  }, label) : null);
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Stat.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Compact count/status badge. */
function Badge({
  soft = false,
  className = '',
  children,
  ...rest
}) {
  const cls = ['cl-badge', soft ? 'cl-badge--soft' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CogniLab Button — pill-shaped action with brand variants.
 * Renders an <a> when `href` is provided, otherwise a <button>.
 */
function Button({
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
  const cls = ['cl-btn', `cl-btn--${variant}`, size !== 'md' ? `cl-btn--${size}` : '', block ? 'cl-btn--block' : '', className].filter(Boolean).join(' ');
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, leadingIcon ? /*#__PURE__*/React.createElement("span", {
    className: "cl-btn__icon",
    "aria-hidden": "true"
  }, leadingIcon) : null, children ? /*#__PURE__*/React.createElement("span", null, children) : null, trailingIcon ? /*#__PURE__*/React.createElement("span", {
    className: "cl-btn__icon",
    "aria-hidden": "true"
  }, trailingIcon) : null);
  if (href) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      className: cls
    }, rest), inner);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls
  }, rest), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Generic surface container with the brand's soft card styling. */
function Card({
  variant,
  interactive = false,
  as = 'div',
  className = '',
  children,
  ...rest
}) {
  const Comp = as;
  const cls = ['cl-card', variant ? `cl-card--${variant}` : '', interactive ? 'cl-card--interactive' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Comp, _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Small pill label for categories, modalities, or status. */
function Tag({
  tone = 'primary',
  dot = false,
  className = '',
  children,
  ...rest
}) {
  const cls = ['cl-tag', tone !== 'primary' ? `cl-tag--${tone}` : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), dot ? /*#__PURE__*/React.createElement("span", {
    className: "cl-tag__dot",
    "aria-hidden": "true"
  }) : null, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
/** Labeled form field wrapper: label + control + hint/error. */
function Field({
  label,
  htmlFor,
  required = false,
  hint,
  error,
  className = '',
  children
}) {
  const cls = ['cl-field', error ? 'cl-field--error' : '', className].filter(Boolean).join(' ');
  const msg = error || hint;
  return /*#__PURE__*/React.createElement("div", {
    className: cls
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "cl-label",
    htmlFor: htmlFor
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    className: "cl-label__req",
    "aria-hidden": "true"
  }, "*") : null) : null, children, msg ? /*#__PURE__*/React.createElement("span", {
    className: "cl-hint"
  }, msg) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Single-line text input. */
function Input({
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("input", _extends({
    className: ['cl-input', className].filter(Boolean).join(' ')
  }, rest));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Styled native select with a custom chevron. */
function Select({
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("select", _extends({
    className: ['cl-select', className].filter(Boolean).join(' ')
  }, rest), children);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Multi-line text area. */
function Textarea({
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("textarea", _extends({
    className: ['cl-textarea', className].filter(Boolean).join(' ')
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sitio/site-app.jsx
try { (() => {
// CogniLab site — App composition + scroll reveal + icon init
const {
  useEffect: useFx
} = React;
function App() {
  useFx(() => {
    if (window.lucide) window.lucide.createIcons();
    // reveal on scroll
    const els = document.querySelectorAll('.reveal:not(.is-in)');
    if (!('IntersectionObserver' in window)) {
      els.forEach(e => e.classList.add('is-in'));
      return;
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          en.target.classList.add('is-in');
          io.unobserve(en.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -8% 0px'
    });
    els.forEach(e => io.observe(e));
    return () => io.disconnect();
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "site"
  }, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Modalidades, null), /*#__PURE__*/React.createElement(Servicios, null), /*#__PURE__*/React.createElement(Especialidades, null), /*#__PURE__*/React.createElement(SobreCogniLab, null), /*#__PURE__*/React.createElement(Catalina, null), /*#__PURE__*/React.createElement(Faq, null), /*#__PURE__*/React.createElement(Contacto, null)), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
// safety re-runs for late icon mounts
requestAnimationFrame(() => window.lucide && window.lucide.createIcons());
setTimeout(() => window.lucide && window.lucide.createIcons(), 400);
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sitio/site-app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sitio/site-body.jsx
try { (() => {
// CogniLab site — Servicios, Especialidades, Sobre CogniLab

const SERVICIOS = [{
  tone: 'primary',
  ic: 'speech',
  t: 'Fonoaudiología',
  d: 'Evaluación y tratamiento del habla, el lenguaje, la comunicación y la motricidad orofacial.'
}, {
  tone: 'accent',
  ic: 'puzzle',
  t: 'Terapia Ocupacional',
  d: 'Autonomía, juego, integración sensorial y habilidades para la vida diaria.'
}, {
  tone: 'amber',
  ic: 'heart-handshake',
  t: 'Psicología',
  d: 'Bienestar emocional y acompañamiento para niños, jóvenes y sus familias.'
}];
function Servicios() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section section--alt",
    id: "servicios"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cl-section-head cl-section-head--center center-head reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cl-eyebrow"
  }, "Nuestros servicios"), /*#__PURE__*/React.createElement("h2", {
    className: "cl-section-head__title"
  }, "Tres especialidades, un mismo equipo"), /*#__PURE__*/React.createElement("p", {
    className: "cl-section-head__lead"
  }, "Trabajamos de forma integrada para mirar a cada persona de manera completa, no por partes.")), /*#__PURE__*/React.createElement("div", {
    className: "grid-3"
  }, SERVICIOS.map((s, i) => /*#__PURE__*/React.createElement("div", {
    className: 'cl-service reveal' + (s.tone !== 'primary' ? ' cl-service--' + s.tone : ''),
    key: i,
    style: {
      transitionDelay: i * 80 + 'ms'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "cl-service__icon"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": s.ic
  })), /*#__PURE__*/React.createElement("h3", {
    className: "cl-service__title"
  }, s.t), /*#__PURE__*/React.createElement("div", {
    className: "cl-service__body"
  }, s.d), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement("a", {
    className: "cl-btn cl-btn--ghost",
    href: "#contacto"
  }, "Conversemos ", /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-right",
    className: "ico"
  }))))))));
}
const AREAS = [{
  ic: 'audio-lines',
  t: 'Trastornos del Habla',
  d: 'Evaluación y tratamiento de los sonidos del habla y la articulación.'
}, {
  ic: 'baby',
  t: 'Estimulación Temprana',
  d: 'Intervención desde los primeros meses de vida del niño.'
}, {
  ic: 'messages-square',
  t: 'Lenguaje y Comunicación',
  d: 'Desarrollo comprensivo y expresivo del lenguaje en niños.'
}, {
  ic: 'utensils',
  t: 'Motricidad Orofacial',
  d: 'Funciones clave de alimentación, deglución y respiración.'
}, {
  ic: 'shapes',
  t: 'TEA y Comunicación Aumentativa',
  d: 'Apoyo a niños con autismo mediante herramientas alternativas al habla.'
}, {
  ic: 'mic',
  t: 'Apraxia y Hablantes Tardíos',
  d: 'Acompañamos a destrabar el habla en niños sin sus primeras palabras.'
}];
function Especialidades() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "especialidades"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cl-section-head reveal",
    style: {
      marginBottom: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "cl-eyebrow"
  }, "\xC1reas de especializaci\xF3n \xB7 Infanto-juvenil"), /*#__PURE__*/React.createElement("h2", {
    className: "cl-section-head__title"
  }, "Desarrollo comunicativo, paso a paso"), /*#__PURE__*/React.createElement("p", {
    className: "cl-section-head__lead"
  }, "Cada plan se dise\xF1a a la medida, con objetivos claros y acompa\xF1amiento a la familia en todo el proceso.")), /*#__PURE__*/React.createElement("div", {
    className: "grid-2"
  }, AREAS.map((a, i) => /*#__PURE__*/React.createElement("div", {
    className: "area reveal",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "area__ic"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": a.ic
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, a.t), /*#__PURE__*/React.createElement("p", null, a.d)))))));
}
const VALORES = [{
  ic: 'microscope',
  t: 'Basado en evidencia',
  d: 'Decisiones clínicas respaldadas por la mejor evidencia disponible.'
}, {
  ic: 'puzzle',
  t: 'Mirada integral',
  d: 'Tres disciplinas que conversan entre sí en un mismo lugar.'
}, {
  ic: 'heart',
  t: 'Cercanía real',
  d: 'Tiempo, calma y trato humano en cada sesión.'
}, {
  ic: 'users',
  t: 'Junto a la familia',
  d: 'Te entregamos herramientas para continuar en casa.'
}];
function SobreCogniLab() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section section--deep",
    id: "cognilab"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid-2",
    style: {
      alignItems: 'start',
      gap: 'clamp(2rem,5vw,4.5rem)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cl-eyebrow"
  }, "Sobre CogniLab"), /*#__PURE__*/React.createElement("h2", {
    className: "cl-section-head__title",
    style: {
      marginTop: 'var(--space-3)'
    }
  }, "Un espacio pensado para las familias"), /*#__PURE__*/React.createElement("p", {
    className: "cl-section-head__lead",
    style: {
      marginTop: 'var(--space-4)'
    }
  }, "CogniLab nace para reunir, en un solo lugar, la terapia que tu familia necesita. Creemos en una atenci\xF3n profesional y rigurosa, sin perder nunca la calidez de entender lo que cada hogar vive."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--body)',
      color: 'var(--text-muted)',
      marginTop: 'var(--space-4)',
      maxWidth: '52ch'
    }
  }, "M\xE1s que tratar un diagn\xF3stico, acompa\xF1amos un camino: con metas claras, comunicaci\xF3n honesta y la tranquilidad de saber que no est\xE1n solos.")), /*#__PURE__*/React.createElement("div", {
    className: "grid-2 reveal",
    style: {
      gap: 'var(--space-4)'
    }
  }, VALORES.map((v, i) => /*#__PURE__*/React.createElement("div", {
    className: "cl-card",
    key: i,
    style: {
      padding: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "cl-service__icon",
    style: {
      width: 46,
      height: 46,
      marginBottom: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": v.ic,
    style: {
      width: 22,
      height: 22
    }
  })), /*#__PURE__*/React.createElement("h4", {
    style: {
      font: 'var(--fw-semibold) var(--text-lg) var(--font-display)',
      color: 'var(--ink-900)',
      marginBottom: 4
    }
  }, v.t), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--body-sm)',
      color: 'var(--text-muted)'
    }
  }, v.d)))))));
}
Object.assign(window, {
  Servicios,
  Especialidades,
  SobreCogniLab,
  SERVICIOS,
  AREAS,
  VALORES
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sitio/site-body.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sitio/site-contact.jsx
try { (() => {
// CogniLab site — FAQ + Contacto

const FAQS = [{
  q: '¿Atienden a domicilio?',
  a: 'Sí. Llegamos a la comodidad de tu hogar para que la terapia ocurra en un entorno seguro y conocido para tu hijo o hija.'
}, {
  q: '¿Desde qué edad evalúan?',
  a: 'Realizamos estimulación temprana desde los primeros meses de vida. Nunca es demasiado pronto para acompañar el desarrollo.'
}, {
  q: '¿Trabajan con jardines y colegios?',
  a: 'Contamos con programas de detección preventiva in situ, coordinados con educadores y equipos docentes.'
}, {
  q: '¿Necesito una derivación médica para agendar?',
  a: 'No es indispensable. Puedes escribirnos directamente y te orientamos sobre el mejor primer paso.'
}];
function Faq() {
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "faq"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap wrap--narrow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cl-section-head cl-section-head--center center-head reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cl-eyebrow"
  }, "Preguntas frecuentes"), /*#__PURE__*/React.createElement("h2", {
    className: "cl-section-head__title"
  }, "Resolvamos tus dudas")), /*#__PURE__*/React.createElement("div", {
    className: "cl-accordion reveal"
  }, FAQS.map((f, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      className: "cl-accordion__item",
      "data-open": isOpen,
      key: i
    }, /*#__PURE__*/React.createElement("button", {
      className: "cl-accordion__trigger",
      "aria-expanded": isOpen,
      onClick: () => setOpen(isOpen ? -1 : i)
    }, /*#__PURE__*/React.createElement("span", null, f.q), /*#__PURE__*/React.createElement("span", {
      className: "cl-accordion__icon",
      "aria-hidden": "true"
    }, "+")), /*#__PURE__*/React.createElement("div", {
      className: "cl-accordion__panel"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "cl-accordion__body"
    }, f.a))));
  }))));
}
function Contacto() {
  const [sent, setSent] = React.useState(false);
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, [sent]);
  const submit = e => {
    e.preventDefault();
    setSent(true);
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "section section--deep",
    id: "contacto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cl-section-head cl-section-head--center center-head reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cl-eyebrow"
  }, "Contacto"), /*#__PURE__*/React.createElement("h2", {
    className: "cl-section-head__title"
  }, "Demos el primer paso, juntos"), /*#__PURE__*/React.createElement("p", {
    className: "cl-section-head__lead"
  }, "Cu\xE9ntanos qu\xE9 necesitas y te responderemos a la brevedad. Lo m\xE1s r\xE1pido es escribirnos por WhatsApp.")), /*#__PURE__*/React.createElement("div", {
    className: "contact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contact__info reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cinfo"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cinfo__ic"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "message-circle"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "WhatsApp"), /*#__PURE__*/React.createElement("a", {
    href: window.WHATSAPP_URL,
    target: "_blank",
    rel: "noopener"
  }, "+56 9 9789 6798"))), /*#__PURE__*/React.createElement("div", {
    className: "cinfo"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cinfo__ic"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "mail"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "Correo"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:facatalina.bobadilla@gmail.com"
  }, "facatalina.bobadilla@gmail.com"))), /*#__PURE__*/React.createElement("div", {
    className: "cinfo"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cinfo__ic"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "map-pin"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "Consulta"), /*#__PURE__*/React.createElement("span", null, "Av. Consistorial 5791, Of. 55, Pe\xF1alol\xE9n, Santiago"))), /*#__PURE__*/React.createElement("div", {
    className: "cinfo"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cinfo__ic"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "clock"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "Horario"), /*#__PURE__*/React.createElement("span", null, "Lunes a viernes \xB7 agenda flexible para familias"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-semibold) var(--text-sm) var(--font-body)',
      color: 'var(--ink-900)',
      marginBottom: 'var(--space-2)'
    }
  }, "S\xEDguenos"), /*#__PURE__*/React.createElement("div", {
    className: "socials"
  }, /*#__PURE__*/React.createElement("a", {
    className: "social",
    href: "#",
    "aria-label": "Instagram"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "instagram"
  })), /*#__PURE__*/React.createElement("a", {
    className: "social",
    href: "#",
    "aria-label": "Facebook"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "facebook"
  })), /*#__PURE__*/React.createElement("a", {
    className: "social",
    href: window.WHATSAPP_URL,
    target: "_blank",
    rel: "noopener",
    "aria-label": "WhatsApp"
  }, /*#__PURE__*/React.createElement(window.WA, {
    size: 21
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "form-card reveal"
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: 'var(--space-6) 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "cl-service__icon",
    style: {
      margin: '0 auto var(--space-4)',
      background: 'var(--success-100)',
      color: 'var(--success-600)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--h3)',
      fontFamily: 'var(--font-display)',
      color: 'var(--ink-900)'
    }
  }, "\xA1Gracias por escribirnos!"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--body)',
      color: 'var(--text-muted)',
      marginTop: 'var(--space-3)'
    }
  }, "Te responderemos muy pronto. Si prefieres, escr\xEDbenos directo por WhatsApp."), /*#__PURE__*/React.createElement("a", {
    className: "cl-btn cl-btn--whatsapp",
    href: window.WHATSAPP_URL,
    target: "_blank",
    rel: "noopener",
    style: {
      marginTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(window.WA, {
    size: 18
  }), " Abrir WhatsApp")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: submit
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cl-field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "cl-label",
    htmlFor: "c-n"
  }, "Nombre", /*#__PURE__*/React.createElement("span", {
    className: "cl-label__req"
  }, "*")), /*#__PURE__*/React.createElement("input", {
    className: "cl-input",
    id: "c-n",
    required: true,
    placeholder: "Tu nombre"
  })), /*#__PURE__*/React.createElement("div", {
    className: "cl-field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "cl-label",
    htmlFor: "c-t"
  }, "Tel\xE9fono", /*#__PURE__*/React.createElement("span", {
    className: "cl-label__req"
  }, "*")), /*#__PURE__*/React.createElement("input", {
    className: "cl-input",
    id: "c-t",
    required: true,
    placeholder: "+56 9 ..."
  }))), /*#__PURE__*/React.createElement("div", {
    className: "cl-field",
    style: {
      marginTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "cl-label",
    htmlFor: "c-s"
  }, "Servicio de inter\xE9s"), /*#__PURE__*/React.createElement("select", {
    className: "cl-select",
    id: "c-s"
  }, /*#__PURE__*/React.createElement("option", null, "Fonoaudiolog\xEDa"), /*#__PURE__*/React.createElement("option", null, "Terapia Ocupacional"), /*#__PURE__*/React.createElement("option", null, "Psicolog\xEDa"), /*#__PURE__*/React.createElement("option", null, "No estoy seguro/a"))), /*#__PURE__*/React.createElement("div", {
    className: "cl-field",
    style: {
      marginTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "cl-label",
    htmlFor: "c-m"
  }, "Mensaje"), /*#__PURE__*/React.createElement("textarea", {
    className: "cl-textarea",
    id: "c-m",
    rows: "4",
    placeholder: "Cu\xE9ntanos brevemente c\xF3mo podemos ayudar"
  })), /*#__PURE__*/React.createElement("button", {
    className: "cl-btn cl-btn--primary cl-btn--block cl-btn--lg",
    type: "submit",
    style: {
      marginTop: 'var(--space-5)'
    }
  }, "Enviar mensaje"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--body-sm)',
      color: 'var(--text-subtle)',
      textAlign: 'center',
      marginTop: 'var(--space-3)'
    }
  }, "Te responderemos en horario h\xE1bil."))))));
}
Object.assign(window, {
  Faq,
  Contacto,
  FAQS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sitio/site-contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sitio/site-founder.jsx
try { (() => {
// CogniLab site — Sobre Catalina (fundadora)

const CREDS = [{
  ic: 'stethoscope',
  t: '14 años de experiencia clínica',
  d: 'Trabajando con niños y sus familias.'
}, {
  ic: 'graduation-cap',
  t: 'Máster en TEA y Comunicación Aumentativa',
  d: 'Herramientas alternativas al habla.'
}, {
  ic: 'sparkles',
  t: 'Motricidad orofacial avanzada',
  d: 'Masticación, deglución y respiración.'
}];
function Catalina() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section section--alt",
    id: "catalina"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "founder"
  }, /*#__PURE__*/React.createElement("div", {
    className: "founder__photo reveal"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photo-catalina.png",
    alt: "Catalina Bobadilla Arias, fonoaudi\xF3loga y fundadora de CogniLab"
  })), /*#__PURE__*/React.createElement("div", {
    className: "reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cl-eyebrow"
  }, "Sobre Catalina \xB7 Fundadora"), /*#__PURE__*/React.createElement("h2", {
    className: "cl-section-head__title",
    style: {
      marginTop: 'var(--space-3)',
      marginBottom: 'var(--space-5)'
    }
  }, "Catalina Bobadilla Arias"), /*#__PURE__*/React.createElement("p", {
    className: "founder__quote"
  }, "\u201CMam\xE1 de dos y profesional con vocaci\xF3n: combino 14 a\xF1os de experiencia cl\xEDnica con la sensibilidad de entender, desde casa, lo que vive cada familia.\u201D"), /*#__PURE__*/React.createElement("div", {
    className: "founder__creds"
  }, CREDS.map((c, i) => /*#__PURE__*/React.createElement("div", {
    className: "cred",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "cred__ic"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": c.ic
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, c.t), /*#__PURE__*/React.createElement("span", null, c.d))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    className: "cl-btn cl-btn--accent",
    href: "#contacto"
  }, "Quiero conversar con Catalina"))))));
}
Object.assign(window, {
  Catalina,
  CREDS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sitio/site-founder.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sitio/site-hero.jsx
try { (() => {
// CogniLab site — Hero + Modalidades strip

function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    className: "hero",
    id: "inicio"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap hero__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal is-in"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cl-eyebrow"
  }, "Espacio Terap\xE9utico \xB7 Basado en evidencia"), /*#__PURE__*/React.createElement("h1", {
    className: "hero__title",
    style: {
      marginTop: 'var(--space-4)'
    }
  }, "Acompa\xF1amos el ", /*#__PURE__*/React.createElement("em", null, "desarrollo"), " de quienes m\xE1s amas"), /*#__PURE__*/React.createElement("p", {
    className: "hero__lead"
  }, "Fonoaudiolog\xEDa, terapia ocupacional y psicolog\xEDa que trabajan de forma integrada. Una mirada c\xE1lida, cercana y profesional para cada familia."), /*#__PURE__*/React.createElement("div", {
    className: "hero__actions"
  }, /*#__PURE__*/React.createElement("a", {
    className: "cl-btn cl-btn--primary cl-btn--lg",
    href: "#contacto"
  }, "Agenda tu hora ", /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-right",
    className: "ico"
  })), /*#__PURE__*/React.createElement("a", {
    className: "cl-btn cl-btn--secondary cl-btn--lg",
    href: "#servicios"
  }, "Conocer servicios")), /*#__PURE__*/React.createElement("div", {
    className: "hero__trust"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cl-stat"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cl-stat__num"
  }, "14", /*#__PURE__*/React.createElement("em", null, "+")), /*#__PURE__*/React.createElement("span", {
    className: "cl-stat__label"
  }, "A\xF1os de experiencia cl\xEDnica")), /*#__PURE__*/React.createElement("div", {
    className: "cl-stat"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cl-stat__num"
  }, "3"), /*#__PURE__*/React.createElement("span", {
    className: "cl-stat__label"
  }, "Disciplinas integradas")), /*#__PURE__*/React.createElement("div", {
    className: "cl-stat"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cl-stat__num"
  }, "3"), /*#__PURE__*/React.createElement("span", {
    className: "cl-stat__label"
  }, "Modalidades de atenci\xF3n")))), /*#__PURE__*/React.createElement("div", {
    className: "hero__media reveal is-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__blob"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero__photo"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photo-consulta.png",
    alt: "Espacio de terapia de CogniLab"
  })), /*#__PURE__*/React.createElement("img", {
    className: "hero__mark",
    src: "../../assets/cognilab-mark.png",
    alt: "",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero__badge"
  }, /*#__PURE__*/React.createElement("img", {
    className: "mk",
    src: "../../assets/cognilab-mark.png",
    alt: "",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-semibold) var(--text-sm) var(--font-body)',
      color: 'var(--ink-900)'
    }
  }, "Atenci\xF3n cercana"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--body-sm)',
      color: 'var(--text-muted)'
    }
  }, "En consulta \xB7 a domicilio"))))));
}
const MODALIDADES = [{
  ic: 'building-2',
  t: 'En consulta',
  d: 'Av. Consistorial 5791, Of. 55, Peñalolén.'
}, {
  ic: 'house',
  t: 'A domicilio',
  d: 'Terapia en la comodidad y seguridad de tu hogar.'
}, {
  ic: 'school',
  t: 'Jardines y colegios',
  d: 'Programas de detección preventiva in situ.'
}];
function Modalidades() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modals"
  }, MODALIDADES.map((m, i) => /*#__PURE__*/React.createElement("div", {
    className: "modal reveal",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "modal__ic"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": m.ic
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, m.t), /*#__PURE__*/React.createElement("p", null, m.d)))))));
}
Object.assign(window, {
  Hero,
  Modalidades,
  MODALIDADES
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sitio/site-hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sitio/site-parts.jsx
try { (() => {
// CogniLab site — shared helpers, Header, MobileMenu, Footer
const {
  useState,
  useEffect,
  useRef
} = React;

// Lucide icon wrapper
function Ico({
  n,
  cls
}) {
  return /*#__PURE__*/React.createElement("i", {
    "data-lucide": n,
    className: cls || 'ico'
  });
}

// WhatsApp glyph (brand icon, not in Lucide)
function WA({
  size = 22
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-1.595zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
  }));
}
const WHATSAPP_URL = "https://wa.me/56997896798";
const NAV = [{
  href: '#servicios',
  label: 'Servicios'
}, {
  href: '#especialidades',
  label: 'Especialidades'
}, {
  href: '#cognilab',
  label: 'Sobre CogniLab'
}, {
  href: '#catalina',
  label: 'Catalina'
}, {
  href: '#contacto',
  label: 'Contacto'
}];
function Brand({
  onClick
}) {
  return /*#__PURE__*/React.createElement("a", {
    className: "brand",
    href: "#inicio",
    onClick: onClick
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/cognilab-mark.png",
    alt: "CogniLab"
  }), /*#__PURE__*/React.createElement("span", {
    className: "brand__wm"
  }, "cogni", /*#__PURE__*/React.createElement("b", null, "lab")));
}
function Header() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, [open]);
  const close = () => setOpen(false);
  return /*#__PURE__*/React.createElement("header", {
    className: 'hdr' + (stuck ? ' is-stuck' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap hdr__inner"
  }, /*#__PURE__*/React.createElement(Brand, null), /*#__PURE__*/React.createElement("nav", {
    className: "nav"
  }, NAV.map(i => /*#__PURE__*/React.createElement("a", {
    key: i.href,
    href: i.href
  }, i.label))), /*#__PURE__*/React.createElement("div", {
    className: "hdr__cta"
  }, /*#__PURE__*/React.createElement("a", {
    className: "cl-btn cl-btn--whatsapp cl-btn--sm",
    href: WHATSAPP_URL,
    target: "_blank",
    rel: "noopener"
  }, /*#__PURE__*/React.createElement(WA, {
    size: 18
  }), " Agenda por WhatsApp"), /*#__PURE__*/React.createElement("button", {
    className: "hdr__burger",
    "aria-label": "Men\xFA",
    "aria-expanded": open,
    onClick: () => setOpen(o => !o)
  }, /*#__PURE__*/React.createElement(Ico, {
    n: open ? 'x' : 'menu'
  })))), /*#__PURE__*/React.createElement("div", {
    className: 'mnav' + (open ? ' is-open' : '')
  }, NAV.map(i => /*#__PURE__*/React.createElement("a", {
    key: i.href,
    href: i.href,
    onClick: close
  }, i.label)), /*#__PURE__*/React.createElement("a", {
    className: "cl-btn cl-btn--whatsapp",
    href: WHATSAPP_URL,
    target: "_blank",
    rel: "noopener",
    onClick: close
  }, /*#__PURE__*/React.createElement(WA, {
    size: 18
  }), " Agenda por WhatsApp")));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "ftr"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ftr__top"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ftr__wm"
  }, "cogni", /*#__PURE__*/React.createElement("b", null, "lab")), /*#__PURE__*/React.createElement("p", null, "Espacio terap\xE9utico para el desarrollo comunicativo, basado en evidencia y centrado en cada familia.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, "Servicios"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#servicios"
  }, "Fonoaudiolog\xEDa")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#servicios"
  }, "Terapia Ocupacional")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#servicios"
  }, "Psicolog\xEDa")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#especialidades"
  }, "Especialidades")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, "Contacto"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: WHATSAPP_URL,
    target: "_blank",
    rel: "noopener"
  }, "+56 9 9789 6798")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "mailto:facatalina.bobadilla@gmail.com"
  }, "facatalina.bobadilla@gmail.com")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", null, "Av. Consistorial 5791, Of. 55")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", null, "Pe\xF1alol\xE9n, Santiago"))))), /*#__PURE__*/React.createElement("div", {
    className: "ftr__bottom"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 ", new Date().getFullYear(), " CogniLab \xB7 Espacio Terap\xE9utico"), /*#__PURE__*/React.createElement("div", {
    className: "socials"
  }, /*#__PURE__*/React.createElement("a", {
    className: "social",
    href: "#",
    "aria-label": "Instagram"
  }, /*#__PURE__*/React.createElement(Ico, {
    n: "instagram"
  })), /*#__PURE__*/React.createElement("a", {
    className: "social",
    href: "#",
    "aria-label": "Facebook"
  }, /*#__PURE__*/React.createElement(Ico, {
    n: "facebook"
  })), /*#__PURE__*/React.createElement("a", {
    className: "social",
    href: WHATSAPP_URL,
    target: "_blank",
    rel: "noopener",
    "aria-label": "WhatsApp"
  }, /*#__PURE__*/React.createElement(WA, {
    size: 21
  }))))));
}
Object.assign(window, {
  Ico,
  WA,
  WHATSAPP_URL,
  NAV,
  Brand,
  Header,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sitio/site-parts.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

})();
