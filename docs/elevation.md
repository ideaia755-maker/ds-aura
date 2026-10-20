# AURA Elevation

Elevation describes physical depth, not only a shadow.

The AURA elevation profile is:

```ts
Elevation = shadow + contact shadow + depth offset + depth scale + edge response
```

Levels:

- `E0`: world, no raised object
- `E1`: surface
- `E2`: object
- `E3`: elevated object
- `E4`: floating
- `E5`: modal
- `E6`: cinematic

Use:

```tsx
<AURASurface elevation="E3">...</AURASurface>
```

Programmatic resolver:

```ts
import { resolveElevationProfile } from "@/lib/elevation";

const profile = resolveElevationProfile("E3");
```

Rules:

- Do not hardcode component shadows when an elevation token fits.
- Use contact shadow for relationship to the surface.
- Use depth offset and scale sparingly; they should support physical depth, not create layout motion.
- Pressed controls should move toward lower elevation.
