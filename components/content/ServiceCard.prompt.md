Card for a service/specialty: tinted icon, title, description, optional footer link.

```jsx
<ServiceCard
  tone="primary"
  icon={<i data-lucide="speech" />}
  title="Fonoaudiología"
  footer={<a className="cl-btn cl-btn--ghost" href="#">Ver más</a>}
>
  Evaluación y tratamiento del habla, el lenguaje y la comunicación.
</ServiceCard>
```

Tones tint the icon tile: `primary` (teal) · `accent` (coral) · `amber`. Hovering lifts the card.
