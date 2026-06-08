// CogniLab site — FAQ + Contacto

const FAQS = [
  { q: '¿Atienden a domicilio?', a: 'Sí. Llegamos a la comodidad de tu hogar para que la terapia ocurra en un entorno seguro y conocido para tu hijo o hija.' },
  { q: '¿Desde qué edad evalúan?', a: 'Realizamos estimulación temprana desde los primeros meses de vida. Nunca es demasiado pronto para acompañar el desarrollo.' },
  { q: '¿Trabajan con jardines y colegios?', a: 'Contamos con programas de detección preventiva in situ, coordinados con educadores y equipos docentes.' },
  { q: '¿Necesito una derivación médica para agendar?', a: 'No es indispensable. Puedes escribirnos directamente y te orientamos sobre el mejor primer paso.' },
];

function Faq() {
  const [open, setOpen] = React.useState(0);
  return (
    <section className="section" id="faq">
      <div className="wrap wrap--narrow">
        <div className="cl-section-head cl-section-head--center center-head reveal">
          <span className="cl-eyebrow">Preguntas frecuentes</span>
          <h2 className="cl-section-head__title">Resolvamos tus dudas</h2>
        </div>
        <div className="cl-accordion reveal">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div className="cl-accordion__item" data-open={isOpen} key={i}>
                <button className="cl-accordion__trigger" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? -1 : i)}>
                  <span>{f.q}</span>
                  <span className="cl-accordion__icon" aria-hidden="true">+</span>
                </button>
                <div className="cl-accordion__panel"><div><div className="cl-accordion__body">{f.a}</div></div></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  const [sent, setSent] = React.useState(false);
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); }, [sent]);
  const submit = (e) => { e.preventDefault(); setSent(true); };
  return (
    <section className="section section--deep" id="contacto">
      <div className="wrap">
        <div className="cl-section-head cl-section-head--center center-head reveal">
          <span className="cl-eyebrow">Contacto</span>
          <h2 className="cl-section-head__title">Demos el primer paso, juntos</h2>
          <p className="cl-section-head__lead">Cuéntanos qué necesitas y te responderemos a la brevedad. Lo más rápido es escribirnos por WhatsApp.</p>
        </div>
        <div className="contact">
          <div className="contact__info reveal">
            <div className="cinfo">
              <span className="cinfo__ic"><i data-lucide="message-circle"></i></span>
              <div><b>WhatsApp</b><a href={window.WHATSAPP_URL} target="_blank" rel="noopener">+56 9 9789 6798</a></div>
            </div>
            <div className="cinfo">
              <span className="cinfo__ic"><i data-lucide="mail"></i></span>
              <div><b>Correo</b><a href="mailto:facatalina.bobadilla@gmail.com">facatalina.bobadilla@gmail.com</a></div>
            </div>
            <div className="cinfo">
              <span className="cinfo__ic"><i data-lucide="map-pin"></i></span>
              <div><b>Consulta</b><span>Av. Consistorial 5791, Of. 55, Peñalolén, Santiago</span></div>
            </div>
            <div className="cinfo">
              <span className="cinfo__ic"><i data-lucide="clock"></i></span>
              <div><b>Horario</b><span>Lunes a viernes · agenda flexible para familias</span></div>
            </div>
            <div>
              <div style={{ font: 'var(--fw-semibold) var(--text-sm) var(--font-body)', color: 'var(--ink-900)', marginBottom: 'var(--space-2)' }}>Síguenos</div>
              <div className="socials">
                <a className="social" href="#" aria-label="Instagram"><i data-lucide="instagram"></i></a>
                <a className="social" href="#" aria-label="Facebook"><i data-lucide="facebook"></i></a>
                <a className="social" href={window.WHATSAPP_URL} target="_blank" rel="noopener" aria-label="WhatsApp"><window.WA size={21} /></a>
              </div>
            </div>
          </div>

          <div className="form-card reveal">
            {sent ? (
              <div style={{ textAlign: 'center', padding: 'var(--space-6) 0' }}>
                <span className="cl-service__icon" style={{ margin: '0 auto var(--space-4)', background: 'var(--success-100)', color: 'var(--success-600)' }}><i data-lucide="check"></i></span>
                <h3 style={{ font: 'var(--h3)', fontFamily: 'var(--font-display)', color: 'var(--ink-900)' }}>¡Gracias por escribirnos!</h3>
                <p style={{ font: 'var(--body)', color: 'var(--text-muted)', marginTop: 'var(--space-3)' }}>Te responderemos muy pronto. Si prefieres, escríbenos directo por WhatsApp.</p>
                <a className="cl-btn cl-btn--whatsapp" href={window.WHATSAPP_URL} target="_blank" rel="noopener" style={{ marginTop: 'var(--space-5)' }}><window.WA size={18} /> Abrir WhatsApp</a>
              </div>
            ) : (
              <form onSubmit={submit}>
                <div className="form-row">
                  <div className="cl-field"><label className="cl-label" htmlFor="c-n">Nombre<span className="cl-label__req">*</span></label><input className="cl-input" id="c-n" required placeholder="Tu nombre" /></div>
                  <div className="cl-field"><label className="cl-label" htmlFor="c-t">Teléfono<span className="cl-label__req">*</span></label><input className="cl-input" id="c-t" required placeholder="+56 9 ..." /></div>
                </div>
                <div className="cl-field" style={{ marginTop: 'var(--space-4)' }}><label className="cl-label" htmlFor="c-s">Servicio de interés</label>
                  <select className="cl-select" id="c-s">
                    <option>Fonoaudiología</option>
                    <option>Terapia Ocupacional</option>
                    <option>Psicología</option>
                    <option>No estoy seguro/a</option>
                  </select>
                </div>
                <div className="cl-field" style={{ marginTop: 'var(--space-4)' }}><label className="cl-label" htmlFor="c-m">Mensaje</label><textarea className="cl-textarea" id="c-m" rows="4" placeholder="Cuéntanos brevemente cómo podemos ayudar"></textarea></div>
                <button className="cl-btn cl-btn--primary cl-btn--block cl-btn--lg" type="submit" style={{ marginTop: 'var(--space-5)' }}>Enviar mensaje</button>
                <p style={{ font: 'var(--body-sm)', color: 'var(--text-subtle)', textAlign: 'center', marginTop: 'var(--space-3)' }}>Te responderemos en horario hábil.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Faq, Contacto, FAQS });
