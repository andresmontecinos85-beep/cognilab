FAQ accordion with smooth height animation and single-open behavior by default.

```jsx
<Accordion
  items={[
    { q: '¿Atienden a domicilio?', a: 'Sí, llegamos a la comodidad de tu hogar en la Región Metropolitana.' },
    { q: '¿Desde qué edad evalúan?', a: 'Realizamos estimulación temprana desde los primeros meses de vida.' },
  ]}
  defaultOpen={[0]}
/>
```

Pass `allowMultiple` to let several panels stay open.
