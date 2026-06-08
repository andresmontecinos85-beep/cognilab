// CogniLab site — Hero + Modalidades strip

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="wrap hero__grid">
        <div className="reveal is-in">
          <span className="cl-eyebrow">Espacio Terapéutico · Basado en evidencia</span>
          <h1 className="hero__title" style={{ marginTop: 'var(--space-4)' }}>
            Acompañamos el <em>desarrollo</em> de quienes más amas
          </h1>
          <p className="hero__lead">
            Fonoaudiología, terapia ocupacional y psicología que trabajan de forma integrada.
            Una mirada cálida, cercana y profesional para cada familia.
          </p>
          <div className="hero__actions">
            <a className="cl-btn cl-btn--primary cl-btn--lg" href="#contacto">
              Agenda tu hora <i data-lucide="arrow-right" className="ico"></i>
            </a>
            <a className="cl-btn cl-btn--secondary cl-btn--lg" href="#servicios">Conocer servicios</a>
          </div>
          <div className="hero__trust">
            <div className="cl-stat"><span className="cl-stat__num">14<em>+</em></span><span className="cl-stat__label">Años de experiencia clínica</span></div>
            <div className="cl-stat"><span className="cl-stat__num">3</span><span className="cl-stat__label">Disciplinas integradas</span></div>
            <div className="cl-stat"><span className="cl-stat__num">3</span><span className="cl-stat__label">Modalidades de atención</span></div>
          </div>
        </div>
        <div className="hero__media reveal is-in">
          <div className="hero__blob"></div>
          <div className="hero__photo">
            <img src="/cognilab/assets/photo-consulta.png" alt="Espacio de terapia de CogniLab" />
          </div>
          <img className="hero__mark" src="/cognilab/assets/cognilab-mark.png" alt="" aria-hidden="true" />
          <div className="hero__badge">
            <img className="mk" src="/cognilab/assets/cognilab-mark.png" alt="" aria-hidden="true" />
            <div>
              <div style={{ font: 'var(--fw-semibold) var(--text-sm) var(--font-body)', color: 'var(--ink-900)' }}>Atención cercana</div>
              <div style={{ font: 'var(--body-sm)', color: 'var(--text-muted)' }}>En consulta · a domicilio</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const MODALIDADES = [
  { ic: 'building-2', t: 'En consulta', d: 'Av. Consistorial 5791, Of. 55, Peñalolén.' },
  { ic: 'house', t: 'A domicilio', d: 'Terapia en la comodidad y seguridad de tu hogar.' },
  { ic: 'school', t: 'Jardines y colegios', d: 'Programas de detección preventiva in situ.' },
];

function Modalidades() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="modals">
          {MODALIDADES.map((m, i) => (
            <div className="modal reveal" key={i}>
              <span className="modal__ic"><i data-lucide={m.ic}></i></span>
              <div>
                <h4>{m.t}</h4>
                <p>{m.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero, Modalidades, MODALIDADES });
