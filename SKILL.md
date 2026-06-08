---
name: cognilab-design
description: Use this skill to generate well-branded interfaces and assets for CogniLab (Espacio Terapéutico — a Chilean integral therapy center: fonoaudiología, terapia ocupacional, psicología), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files
(`styles.css` and `tokens/` for the foundations, `components/` for React primitives,
`ui_kits/sitio/` for the full website recreation, `guidelines/` for specimen cards,
`assets/` for the logo and photos).

CogniLab's voice is **cálido, cercano, profesional y serio** — warm and reassuring for
families (often parents of children in therapy) without ever looking like a "kids' site".
Lead with turquoise, warm coral as accent, on ivory neutrals; soft serif (Newsreader)
display + humanist sans (Hanken Grotesk) body; lots of air; natural photography; Lucide
line icons. Copy in Chilean Spanish, "nosotros"/"tú", no emoji.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc.), copy assets out
and create static HTML files for the user to view — reference the design tokens via
`var(--…)` and the `cl-*` component classes from `components/components.css`. If working on
production code, copy assets and read the rules here to become an expert in designing with
this brand.

If the user invokes this skill without any other guidance, ask them what they want to build
or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_
production code, depending on the need.
