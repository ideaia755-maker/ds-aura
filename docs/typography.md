# AURA Typography

## Font Roles

AURA keeps interface text on `--aura-font-ui` for clarity and accessibility.

`--aura-font-display` is reserved for short title marks, product names, cinematic labels, and space-tech identity moments. It must not replace body text or dense controls.

## Display Font

`--aura-font-display` uses Orbitron, self-hosted as `AURA Orbitron`.

Orbitron was selected because its geometric, extended, sci-fi construction is close to the ARK-7 / Enterprise-like reference mood without copying a franchise-specific typeface.

Use:

```css
.aura-title-mark {
  font-family: var(--aura-font-display);
}
```

License: SIL Open Font License, included at `public/fonts/orbitron-OFL.markdown`.
