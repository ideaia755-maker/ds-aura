# AURA Button

## Purpose

Button is the first reference component for AURA. It proves the foundation for material, elevation, semantic aura, physical states, motion, theme behavior, responsive behavior and accessibility.

Button uses the AURA elevation rules indirectly: rest behaves as an object, hover raises perceived depth, and press moves toward lower elevation through contact shadow and compression.

## Installation

Import the global styles once, then use the component from the package entry or the local source path.

```tsx
import "@/styles/globals.css";
import { Button } from "@/components/ui/button";
```

## API

```tsx
<Button variant="default" size="default" material="glass" aura="primary">
  Continue
</Button>
```

Variants: `default`, `secondary`, `outline`, `ghost`, `destructive`.

Sizes: `sm`, `default`, `lg`, `icon`.

States: `loading`, `processing`, `success`, `error`, `disabled`.

Materials: `glass`, `metal`.

Aura: `none`, `primary`, `energy`, `success`, `warning`, `error` with `auraIntensity` from `0` to `5`.

## Motion

Hover increases perceived elevation, exposes a directional highlight and raises aura slightly. Press reduces elevation and compresses the object with a small vertical movement. Reduced motion removes moving scans and large transitions while preserving state, contrast and static light.

## Accessibility

The component uses a native button by default, preserves focus-visible outlines, sets `aria-busy` for loading and processing, disables duplicate action while loading or processing, and never relies on aura alone for success or error states.

## Responsive behavior

Mobile keeps a touch-friendly target and reduces hover-dependent feedback. Press feedback remains available because hover is not required to understand the state.

## Performance

The core implementation uses CSS variables, pseudo-elements and SVG icons. `processing` adds the AURA Signature liquid-mercury canvas layer through a separate module, with reduced-motion behavior and no DOM particle field.

## Examples

```tsx
<Button loading>Saving</Button>
<Button processing aura="energy">Processing</Button>
<Button success>Saved</Button>
<Button error>Retry</Button>
```

## Do

- Use semantic state props for success, error, loading and processing.
- Keep aura intensity modest for persistent buttons.
- Use `material="metal"` only when the surface needs a denser object feel.
- Use `processing` when the object itself should visibly behave as active material.

## Don't

- Replace `processing` with a spinner when AURA material behavior is required.
- Communicate state with glow alone.
- Replace focus-visible with no accessible focus indicator.
