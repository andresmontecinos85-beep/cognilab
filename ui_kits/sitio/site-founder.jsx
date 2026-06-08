// CogniLab site — Sobre Catalina (fundadora)

const CREDS = [
  { ic: 'stethoscope', t: '14 años de experiencia clínica', d: 'Trabajando con niños y sus familias.' },
  { ic: 'graduation-cap', t: 'Máster en TEA y Comunicación Aumentativa', d: 'Herramientas alternativas al habla.' },
  { ic: 'sparkles', t: 'Motricidad orofacial avanzada', d: 'Masticación, deglución y respiración.' },
];

function Catalina() {
  return (
    <section className="section section--alt" id="catalina">
      <div className="wrap">
        <div className="founder">
          <div className="founder__photo reveal">
            <img src="/cognilab/assets/photo-catalina.png" alt="Catalina Bobadilla Arias, fonoaudióloga y fundadora de CogniLab" />
          </div>
          <div className="reveal">
            <span className="cl-eyebrow">Sobre Catalina · Fundadora</span>
            <h2 className="cl-section-head__title" style={{ marginTop: 'var(--space-3)', marginBottom: 'var(--space-5)' }}>
              Catalina Bobadilla Arias
            </h2>
            <p className="founder__quote">
              “Mamá de dos y profesional con vocación: combino 14 años de experiencia clínica con la sensibilidad de entender, desde casa, lo que vive cada familia.”
            </p>
            <div className="founder__creds">
              {CREDS.map((c, i) => (
                <div className="cred" key={i}>
                  <span className="cred__ic"><i data-lucide={c.ic}></i></span>
                  <div><b>{c.t}</b><span>{c.d}</span></div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 'var(--space-7)' }}>
              <a className="cl-btn cl-btn--accent" href="#contacto">Quiero conversar con Catalina</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Catalina, CREDS });
