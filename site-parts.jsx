// CogniLab site — shared helpers, Header, MobileMenu, Footer
const { useState, useEffect, useRef } = React;

// Lucide icon wrapper
function Ico({ n, cls }) { return <i data-lucide={n} className={cls || 'ico'}></i>; }

// WhatsApp glyph (brand icon, not in Lucide)
function WA({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-1.595zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
    </svg>
  );
}

const WHATSAPP_URL = "https://wa.me/56997896798";
const NAV = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#especialidades', label: 'Especialidades' },
  { href: '#cognilab', label: 'Sobre CogniLab' },
  { href: '#catalina', label: 'Catalina' },
  { href: '#contacto', label: 'Contacto' },
];

function Brand({ onClick }) {
  return (
    <a className="brand" href="#inicio" onClick={onClick}>
      <img src="./assets/cognilab-mark.png" alt="CogniLab" />
      <span className="brand__wm">cogni<b>lab</b></span>
    </a>
  );
}

function Header() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => { if (window.lucide) window.lucide.createIcons(); }, [open]);
  const close = () => setOpen(false);
  return (
    <header className={'hdr' + (stuck ? ' is-stuck' : '')}>
      <div className="wrap hdr__inner">
        <Brand />
        <nav className="nav">
          {NAV.map(i => <a key={i.href} href={i.href}>{i.label}</a>)}
        </nav>
        <div className="hdr__cta">
          <a className="cl-btn cl-btn--whatsapp cl-btn--sm" href={WHATSAPP_URL} target="_blank" rel="noopener">
            <WA size={18} /> Agenda por WhatsApp
          </a>
          <button className="hdr__burger" aria-label="Menú" aria-expanded={open} onClick={() => setOpen(o => !o)}>
            <Ico n={open ? 'x' : 'menu'} />
          </button>
        </div>
      </div>
      <div className={'mnav' + (open ? ' is-open' : '')}>
        {NAV.map(i => <a key={i.href} href={i.href} onClick={close}>{i.label}</a>)}
        <a className="cl-btn cl-btn--whatsapp" href={WHATSAPP_URL} target="_blank" rel="noopener" onClick={close}>
          <WA size={18} /> Agenda por WhatsApp
        </a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="ftr__top">
          <div>
            <div className="ftr__wm">cogni<b>lab</b></div>
            <p>Espacio terapéutico para el desarrollo comunicativo, basado en evidencia y centrado en cada familia.</p>
          </div>
          <div>
            <h5>Servicios</h5>
            <ul>
              <li><a href="#servicios">Fonoaudiología</a></li>
              <li><a href="#servicios">Terapia Ocupacional</a></li>
              <li><a href="#servicios">Psicología</a></li>
              <li><a href="#especialidades">Especialidades</a></li>
            </ul>
          </div>
          <div>
            <h5>Contacto</h5>
            <ul>
              <li><a href={WHATSAPP_URL} target="_blank" rel="noopener">+56 9 9789 6798</a></li>
              <li><a href="mailto:facatalina.bobadilla@gmail.com">facatalina.bobadilla@gmail.com</a></li>
              <li><span>Av. Consistorial 5791, Of. 55</span></li>
              <li><span>Peñalolén, Santiago</span></li>
            </ul>
          </div>
        </div>
        <div className="ftr__bottom">
          <span>© {new Date().getFullYear()} CogniLab · Espacio Terapéutico</span>
          <div className="socials">
            <a className="social" href="#" aria-label="Instagram"><Ico n="instagram" /></a>
            <a className="social" href="#" aria-label="Facebook"><Ico n="facebook" /></a>
            <a className="social" href={WHATSAPP_URL} target="_blank" rel="noopener" aria-label="WhatsApp"><WA size={21} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Ico, WA, WHATSAPP_URL, NAV, Brand, Header, Footer });
