# UI Kit · Sitio Web CogniLab

Recreación de alta fidelidad del **sitio web público** de CogniLab — un centro de
terapias integral (fonoaudiología, terapia ocupacional y psicología) en Peñalolén, Santiago.

Es un sitio *one-page* con navegación por anclas, cálido y editorial, pensado para
adultos y, sobre todo, para padres y madres de niños en tratamiento. Transmite
confianza, cercanía y profesionalismo sin parecer "una página para niños".

## Cómo está armado

`index.html` carga React + Babel + Lucide, la hoja global del sistema
(`../../styles.css`) y `site.css` (layout propio del kit), y luego los módulos JSX
en orden. Cada módulo expone sus componentes en `window`.

| Archivo | Contenido |
|---|---|
| `site-parts.jsx`   | Helpers (`Ico`, `WA`), `Header` (sticky + menú móvil), `Footer` |
| `site-hero.jsx`    | `Hero` + tira de `Modalidades` (consulta · domicilio · jardines) |
| `site-body.jsx`    | `Servicios` (3 disciplinas), `Especialidades` (6 áreas), `SobreCogniLab` (valores) |
| `site-founder.jsx` | `Catalina` — sección de la fundadora con cita y credenciales |
| `site-contact.jsx` | `Faq` (acordeón) + `Contacto` (formulario + datos + redes) |
| `site-app.jsx`     | Composición `App`, reveal-on-scroll, init de íconos |
| `site.css`         | Estilos de página (header, hero, grids, footer) sobre los tokens del sistema |

## Cómo usa el sistema de diseño

- **Tokens y tipografía** vienen de `../../styles.css` (variables CSS globales).
- **Componentes**: el kit compone los primitivos del sistema por sus clases
  (`cl-btn`, `cl-service`, `cl-card`, `cl-accordion`, `cl-input`, etc.), de modo que
  el HTML es portable y se previsualiza sin depender del bundle compilado. Los mismos
  primitivos existen como componentes React en `components/` y comparten exactamente
  estas clases.
- **Assets**: logo/mark y fotos referenciales viven en `../../assets/`.

## Interactividad simulada

- Header que se vuelve sólido al hacer scroll + menú hamburguesa en móvil.
- Acordeón de preguntas frecuentes (una abierta a la vez).
- Formulario de contacto con estado de "enviado" (no envía datos reales).
- Botones de WhatsApp que abren `https://wa.me/56997896798`.

## Pendiente para el cliente

- Reemplazar las **fotos referenciales** (`photo-consulta`, `photo-catalina`) por
  fotografía profesional definitiva.
- Conectar el formulario a un backend / correo real.
- Enlazar las redes sociales reales (Instagram / Facebook).
