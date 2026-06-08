# CogniLab — Sistema de Diseño

Sistema de diseño para **CogniLab · Espacio Terapéutico**, un centro de terapias
integral en Peñalolén, Santiago de Chile. CogniLab reúne en un solo lugar tres
disciplinas — **fonoaudiología, terapia ocupacional y psicología** — con un enfoque
de **desarrollo comunicativo basado en evidencia**, cálido y centrado en la familia.

> **Audiencia.** Desde público adulto hasta padres y madres de niños en tratamiento.
> La mayoría de los clientes son familias de niños con dificultades del desarrollo.
> El tono debe ser **cálido, cercano, profesional y serio** — confianza y tranquilidad,
> **sin parecer "una página para niños"**.

**Fundadora.** Catalina Bobadilla Arias — Fonoaudióloga, Máster en TEA y Comunicación
Aumentativa, 14 años de experiencia clínica. *"Mamá de dos y profesional con vocación:
combino 14 años de experiencia clínica con la sensibilidad de entender, desde casa, lo
que vive cada familia."*

**Contacto.** WhatsApp +56 9 9789 6798 · facatalina.bobadilla@gmail.com ·
Av. Consistorial 5791, Of. 55, Peñalolén.

---

## Fuentes (materiales de origen)

Este sistema se construyó a partir del material de marca entregado por el cliente.
No asumas que el lector tiene acceso; se documentan por si lo tuviera.

- **Logo + flyer de referencia** (PDFs entregados por el cliente):
  `logo cata2.pdf` y `trinus2 copy.pdf`. De aquí se extrajeron: el **logotipo**
  (marca de cerebro geométrico + wordmark *cognilab*), la **paleta de color**, las
  **fotografías** (sala de terapia y retrato de la fundadora) y **todo el contenido**
  (servicios, áreas de especialización, modalidades de atención, biografía).
- **Repositorio GitHub** (proyecto en blanco al momento de crear el sistema):
  https://github.com/andresmontecinos85-beep/cognilab — explóralo para futuras
  iteraciones del producto o el código del sitio.
- Carpeta local `COGNILAB/REFERENCIA/` (montada por el cliente).

> ⚠️ **Tipografías sustituidas.** No se entregaron archivos de fuente. Se usan los
> equivalentes más cercanos de **Google Fonts** (ver Visual Foundations). Si tienes las
> licencias originales del wordmark, envíalas para reemplazarlas.

---

## Fundamentos de Contenido (Content Fundamentals)

**Idioma.** Español de Chile, neutro y claro. Sin tecnicismos innecesarios; cuando hay
término clínico (apraxia, motricidad orofacial), se acompaña de una explicación simple.

**Persona y trato.** Hablamos de **"nosotros"** (el equipo) y nos dirigimos al lector de
**"tú"** — cercano pero respetuoso. Ej: *"Acompañamos el desarrollo de quienes más amas"*,
*"Demos el primer paso, juntos"*.

**Tono.** Cálido, sereno, contenedor y profesional. Empático sin caer en lástima;
seguro sin sonar frío o corporativo. Transmite **tranquilidad y apoyo** ("no están solos").

**Casing.** Títulos en *sentence case* (mayúscula inicial). Eyebrows/kickers en
MAYÚSCULAS con tracking amplio (`Espacio Terapéutico · Basado en evidencia`). Nunca
títulos en bloque de mayúsculas largo.

**Mayúsculas de marca.** El wordmark es **cognilab** en minúsculas. En texto corrido,
"CogniLab" con C y L mayúsculas.

**Emoji.** No se usan. El color y la calidez vienen del logotipo y la fotografía.

**Frases ancla (usar como referencia de voz):**
- "Desarrollo comunicativo basado en evidencia."
- "Una mirada cálida, cercana y profesional para cada familia."
- "Más que tratar un diagnóstico, acompañamos un camino."
- "Tres especialidades, un mismo equipo."
- CTA principales: *"Agenda tu hora"*, *"Agenda por WhatsApp"*, *"Conversemos"*.

**Qué evitar:** infantilizar el lenguaje, promesas de "cura", jerga clínica sin
explicar, urgencia agresiva de ventas, y todo lo que reste seriedad o calidez.

---

## Fundamentos Visuales (Visual Foundations)

**Carácter general:** *cálido-editorial*. Mucho aire, tipografía serif suave para los
títulos, fotografía natural, color usado con intención. Profesional pero humano.

**Color.** Turquesa como color líder (calma, confianza clínica), **coral** como acento
cálido (humanidad, cercanía) y **ámbar** muy puntual. Todo sobre **neutros tibios**
(marfil / *cream*) en lugar de blancos fríos o grises azulados. El logotipo es la única
pieza deliberadamente multicolor.
- Primario: `--teal-500 #14A6BE` (texto seguro: `--teal-700/900`).
- Acento: `--coral-500 #E8503C`. Highlight: `--amber-500 #F2992A`.
- Fondo página: `--cream #FBF7F1`; secciones alternas en `--paper` blanco o `--cream-deep`.
- Ver `tokens/colors.css` para la escala completa y los alias semánticos.

**Tipografía.**
- Display/títulos: **Newsreader** (serif literaria, suave; itálica para énfasis cálido).
- Cuerpo/UI: **Hanken Grotesk** (sans humanista, legible, no genérica).
- Marca/labels: **Quicksand** (sans redondeada que ecoa el wordmark *cognilab*).
- Cuerpo ligeramente grande (17px base) y `line-height` generoso (1.65) para lectura cómoda.

**Espaciado y layout.** Base 8pt, ritmo amplio (`--section-y` ≈ 4–8rem). Contenedor
máx. 1200px. Rejillas con `gap`; rara vez bordes duros entre columnas.

**Formas y radios.** Esquinas suaves y amables: tarjetas `--radius-lg (24px)`, botones
tipo *pill* (`--radius-pill`), fotos en `--radius-2xl (44px)`. Nada de ángulos rectos
agresivos.

**Sombras.** Cálidas, de bajo contraste y con un leve tinte turquesa
(`--shadow-card`, `--shadow-lg`, `--shadow-float`). Elevación sutil; las tarjetas
"flotan" apenas. Hover de tarjeta: se elevan ~4px con sombra mayor.

**Bordes.** Hairlines tibios (`--line #E8DFD1`), nunca grises fríos. 1–1.5px.

**Fondos.** Mayormente lisos (marfil / blanco). Sin gradientes llamativos ni patrones.
Único uso de "blob": un degradado radial turquesa muy suave detrás de la foto del hero.
Transparencia/blur solo en el header al hacer scroll (`backdrop-filter: blur`).

**Fotografía.** Personas reales, luz natural diurna, gestos cercanos. Tonos tibios, sin
filtros saturados. Encuadres con aire. Esquinas redondeadas. **Nunca** stock clínico frío.
*(Las fotos incluidas son referenciales; el cliente las reemplazará.)*

**Movimiento.** Discreto y elegante. *Reveal* al hacer scroll (fade + leve subida, 0.7s,
`--ease-out`). Hover: subir 1–4px y/o aclarar color. Press: `scale(0.985)`. Respeta
`prefers-reduced-motion`. Sin animaciones decorativas en bucle.

**Estados.** Hover de botón = color más profundo + leve elevación. Focus = anillo
turquesa (`--shadow-focus`). Disabled = opacidad 0.45.

---

## Iconografía

- **Sistema de íconos: [Lucide](https://lucide.dev)** (línea, trazo ~2px, redondeado),
  cargado por CDN (`unpkg.com/lucide`). Su estilo limpio y humano calza con el carácter
  cálido-editorial. Uso: `<i data-lucide="nombre"></i>` y `lucide.createIcons()`.
  - Servicios: `speech`, `puzzle`, `heart-handshake`.
  - Áreas: `audio-lines`, `baby`, `messages-square`, `utensils`, `shapes`, `mic`.
  - Modalidades: `building-2`, `house`, `school`. Contacto: `mail`, `map-pin`, `clock`.
- **WhatsApp** no existe en Lucide: se incluye el glifo de marca en
  `assets/icons/whatsapp.svg` (y como componente `WA` en el kit). Es un canal clave
  ("Agenda por WhatsApp").
- **Marca**: `assets/cognilab-mark.png` (cerebro geométrico, fondo transparente) para
  usos pequeños; logotipo completo en `assets/cognilab-logo-ref.png`.
- **Emoji / caracteres unicode como íconos:** no se usan.

> Si más adelante prefieres otro set (p. ej. Phosphor), mantén el trazo de línea
> redondeado para conservar la calidez.

---

## Índice / Manifiesto

**Raíz**
- `styles.css` — punto de entrada global (solo `@import`). Enlaza este archivo.
- `README.md` — esta guía. · `SKILL.md` — skill portable para agentes.

**`tokens/`** — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `base.css`.

**`assets/`** — `cognilab-mark.png`, `cognilab-logo-ref.png`, `cognilab-mark-ref.png`,
`photo-catalina.png`, `photo-consulta.png`, `icons/whatsapp.svg`.

**`components/`** — primitivos React (clases `cl-*` en `components/components.css`):
- `core/` — **Button**, **Tag**, **Badge**, **Card**
- `forms/` — **Field**, **Input**, **Textarea**, **Select**
- `content/` — **SectionHeading**, **ServiceCard**, **Stat**, **Avatar**, **Accordion**

**`ui_kits/sitio/`** — recreación del **sitio web** de CogniLab (one-page interactivo).

**`guidelines/`** — *cards* de especímenes (Tipografía, Color, Espaciado, Marca) que
poblan la pestaña *Design System*.

---

### Notas para construir con esta marca

Usa siempre los tokens (`var(--…)`) y los componentes/clases del sistema. Parte de los
*starting points* (Button, SectionHeading, ServiceCard, Sitio Web) y del UI kit. Para
mocks o prototipos desechables, copia los assets y genera HTML estático; para producción,
puedes consumir `styles.css` y el bundle de componentes.
