// CogniLab site — App composition + scroll reveal + icon init
const { useEffect: useFx } = React;

function App() {
  useFx(() => {
    if (window.lucide) window.lucide.createIcons();
    // reveal on scroll
    const els = document.querySelectorAll('.reveal:not(.is-in)');
    if (!('IntersectionObserver' in window)) {
      els.forEach(e => e.classList.add('is-in'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    els.forEach(e => io.observe(e));
    return () => io.disconnect();
  }, []);

  return (
    <div className="site">
      <Header />
      <main>
        <Hero />
        <Modalidades />
        <Servicios />
        <Especialidades />
        <SobreCogniLab />
        <Catalina />
        <Faq />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
// safety re-runs for late icon mounts
requestAnimationFrame(() => window.lucide && window.lucide.createIcons());
setTimeout(() => window.lucide && window.lucide.createIcons(), 400);
