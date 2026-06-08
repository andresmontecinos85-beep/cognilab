// CogniLab site — Servicios, Especialidades, Sobre CogniLab

const SERVICIOS = [
  { tone: 'primary', ic: 'speech', t: 'Fonoaudiología',
    d: 'Evaluación y tratamiento del habla, el lenguaje, la comunicación y la motricidad orofacial.' },
  { tone: 'accent', ic: 'puzzle', t: 'Terapia Ocupacional',
    d: 'Autonomía, juego, integración sensorial y habilidades para la vida diaria.' },
  { tone: 'amber', ic: 'heart-handshake', t: 'Psicología',
    d: 'Bienestar emocional y acompañamiento para niños, jóvenes y sus familias.' },
];

function Servicios() {
  return (
    <section className="section section--alt" id="servicios">
      <div className="wrap">
        <div className="cl-section-head cl-section-head--center center-head reveal">
          <span className="cl-eyebrow">Nuestros servicios</span>
          <h2 className="cl-section-head__title">Tres especialidades, un mismo equipo</h2>
          <p className="cl-section-head__lead">Trabajamos de forma integrada para mirar a cada persona de manera completa, no por partes.</p>
        </div>
        <div className="grid-3">
          {SERVICIOS.map((s, i) => (
            <div className={'cl-service reveal' + (s.tone !== 'primary' ? ' cl-service--' + s.tone : '')} key={i} style={{ transitionDelay: (i * 80) + 'ms' }}>
              <span className="cl-service__icon"><i data-lucide={s.ic}></i></span>
              <h3 className="cl-service__title">{s.t}</h3>
              <div className="cl-service__body">{s.d}</div>
              <div style={{ marginTop: 'auto' }}>
                <a className="cl-btn cl-btn--ghost" href="#contacto">Conversemos <i data-lucide="chevron-right" className="ico"></i></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const AREAS = [
  { ic: 'audio-lines', t: 'Trastornos del Habla', d: 'Evaluación y tratamiento de los sonidos del habla y la articulación.' },
  { ic: 'baby', t: 'Estimulación Temprana', d: 'Intervención desde los primeros meses de vida del niño.' },
  { ic: 'messages-square', t: 'Lenguaje y Comunicación', d: 'Desarrollo comprensivo y expresivo del lenguaje en niños.' },
  { ic: 'utensils', t: 'Motricidad Orofacial', d: 'Funciones clave de alimentación, deglución y respiración.' },
  { ic: 'shapes', t: 'TEA y Comunicación Aumentativa', d: 'Apoyo a niños con autismo mediante herramientas alternativas al habla.' },
  { ic: 'mic', t: 'Apraxia y Hablantes Tardíos', d: 'Acompañamos a destrabar el habla en niños sin sus primeras palabras.' },
];

function Especialidades() {
  return (
    <section className="section" id="especialidades">
      <div className="wrap">
        <div className="cl-section-head reveal" style={{ marginBottom: 'var(--space-7)' }}>
          <span className="cl-eyebrow">Áreas de especialización · Infanto-juvenil</span>
          <h2 className="cl-section-head__title">Desarrollo comunicativo, paso a paso</h2>
          <p className="cl-section-head__lead">Cada plan se diseña a la medida, con objetivos claros y acompañamiento a la familia en todo el proceso.</p>
        </div>
        <div className="grid-2">
          {AREAS.map((a, i) => (
            <div className="area reveal" key={i}>
              <span className="area__ic"><i data-lucide={a.ic}></i></span>
              <div>
                <h4>{a.t}</h4>
                <p>{a.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const VALORES = [
  { ic: 'microscope', t: 'Basado en evidencia', d: 'Decisiones clínicas respaldadas por la mejor evidencia disponible.' },
  { ic: 'puzzle', t: 'Mirada integral', d: 'Tres disciplinas que conversan entre sí en un mismo lugar.' },
  { ic: 'heart', t: 'Cercanía real', d: 'Tiempo, calma y trato humano en cada sesión.' },
  { ic: 'users', t: 'Junto a la familia', d: 'Te entregamos herramientas para continuar en casa.' },
];

function SobreCogniLab() {
  return (
    <section className="section section--deep" id="cognilab">
      <div className="wrap">
        <div className="grid-2" style={{ alignItems: 'start', gap: 'clamp(2rem,5vw,4.5rem)' }}>
          <div className="reveal">
            <span className="cl-eyebrow">Sobre CogniLab</span>
            <h2 className="cl-section-head__title" style={{ marginTop: 'var(--space-3)' }}>Un espacio pensado para las familias</h2>
            <p className="cl-section-head__lead" style={{ marginTop: 'var(--space-4)' }}>
              CogniLab nace para reunir, en un solo lugar, la terapia que tu familia necesita.
              Creemos en una atención profesional y rigurosa, sin perder nunca la calidez de entender lo que cada hogar vive.
            </p>
            <p style={{ font: 'var(--body)', color: 'var(--text-muted)', marginTop: 'var(--space-4)', maxWidth: '52ch' }}>
              Más que tratar un diagnóstico, acompañamos un camino: con metas claras, comunicación honesta y la tranquilidad de saber que no están solos.
            </p>
          </div>
          <div className="grid-2 reveal" style={{ gap: 'var(--space-4)' }}>
            {VALORES.map((v, i) => (
              <div className="cl-card" key={i} style={{ padding: 'var(--space-5)' }}>
                <span className="cl-service__icon" style={{ width: 46, height: 46, marginBottom: 'var(--space-3)' }}><i data-lucide={v.ic} style={{ width: 22, height: 22 }}></i></span>
                <h4 style={{ font: 'var(--fw-semibold) var(--text-lg) var(--font-display)', color: 'var(--ink-900)', marginBottom: 4 }}>{v.t}</h4>
                <p style={{ font: 'var(--body-sm)', color: 'var(--text-muted)' }}>{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Servicios, Especialidades, SobreCogniLab, SERVICIOS, AREAS, VALORES });
