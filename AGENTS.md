# AURA — Codex Development Rules

## 1. Project Identity

This project implements AURA UI.

AURA means:

Physical + Living Interface.

AURA is a reusable visual system for future React applications and websites.

The technical foundation is based on:

- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Radix primitives where appropriate
- CSS Variables
- SVG
- Canvas
- WebGL only for Signature Layer

Do not treat AURA as a simple theme.

AURA is a visual, material, interaction and motion system.

---

## 2. Primary Goal

Every AURA component must feel like a physical digital object.

The visual hierarchy is:

Material
→ Depth
→ Light
→ State
→ Physics
→ Motion
→ Clarity
→ WOW

Do not add visual effects without a functional reason.

---

## 3. Visual Identity

AURA has one unified identity across all applications.

Dark Mode:

Obsidian Glass.

Light Mode:

Milk Glass.

Primary identity:

Violet + Purple.

Orange:

Rare high-contrast energy accent.

AURA must NOT look like:

- generic SaaS
- generic AI dashboard
- cyberpunk
- gaming HUD
- neon UI
- excessive glassmorphism
- excessive glow
- excessive gradients
- excessive blur
- toy-like UI
- visual noise

---

## 4. Design Principles

### Material over decoration

Components must feel material rather than decorated.

### Light has meaning

Aura and highlights represent interaction, state or importance.

### Physical objects

Cards, buttons and panels must feel like objects with depth and mass.

### Living interface

Interaction may change light, material, depth and shape.

### WOW is contextual

Do not animate everything.

One dominant visual event at a time.

### Complexity behind simplicity

The implementation may be sophisticated.

The user experience must remain simple.

---

## 5. Technical Principles

Use TypeScript.

Prefer strict typing.

Prefer composition over monolithic components.

Keep components reusable.

Keep APIs close to shadcn/ui.

Do not break familiar shadcn patterns without a strong reason.

Do not create arbitrary visual values inside components when an AURA token exists.

Avoid hardcoded:

- colors
- shadows
- radii
- blur values
- animation durations
- aura values

Use AURA tokens.

---

## 6. Token Rule

The architecture is:

Primitive Token
→ Semantic Token
→ Component Token
→ Component

Never:

Component
→ random hardcoded CSS value

If a new visual value is genuinely required and no existing token fits, first determine whether the value belongs in the token system.

Do not silently introduce random values.

---

## 7. Materials

AURA supports:

- glass
- metal
- liquid
- holographic

Phase 1 primarily uses:

glass

Metal, liquid and holographic are progressively introduced.

Do not implement complex WebGL materials in Phase 1.

---

## 8. Elevation

AURA uses:

E0 World
E1 Surface
E2 Object
E3 Elevated Object
E4 Floating
E5 Modal
E6 Cinematic

Elevation represents physical depth.

Elevation is not just box-shadow.

---

## 9. Aura

Aura is semantic.

Supported semantic meanings:

- primary
- energy
- success
- info
- warning
- error

Intensity:

0–5

Aura must never be permanently excessive.

Aura alone must never communicate state.

---

## 10. Motion

AURA motion should feel physical.

Preferred concepts:

- mass
- inertia
- acceleration
- deceleration
- elasticity
- deformation
- settling

Do not use animation merely for decoration.

Respect:

prefers-reduced-motion

---

## 11. Performance

AURA supports:

- cinematic
- standard
- lite
- reduced-motion

Complex visual effects must have fallbacks.

Do not require WebGL for basic UI.

Core components must work without WebGL.

---

## 12. Accessibility

Accessibility is mandatory.

Support:

- keyboard navigation
- visible focus
- semantic HTML
- ARIA where required
- sufficient contrast
- touch targets
- reduced motion
- non-color state communication

Aura, glow or animation must never be the only state indicator.

---

## 13. Responsive Design

AURA is fully responsive.

Do not simply shrink desktop layouts.

Components may change:

- density
- spacing
- elevation
- animation complexity
- material complexity
- navigation model

Mobile keeps the AURA identity but prioritizes usability.

---

## 14. Button Rules

Button is the first reference component.

Default:

physical glass object.

Hover:

- directional highlight
- material response
- subtle aura
- subtle deformation

Pressed:

- compression
- reduced perceived elevation
- material deformation
- physical settling

Focus:

- clearly visible focus indication
- semantic aura may reinforce focus

Loading:

- preserve button dimensions
- prevent accidental duplicate interaction
- communicate processing

Success:

- clear semantic success state

Error:

- red-hot material language may be used
- must remain accessible

Do not implement liquid transformation in the first Button milestone.

Liquid Button is a later Signature component.

---

## 15. Do Not Overengineer

Do not create:

- unnecessary abstractions
- premature WebGL architecture
- unnecessary state managers
- giant component files
- giant CSS files
- undocumented magic numbers

Build the smallest architecture that can evolve into the complete AURA system.

---

## 16. Required First Milestone

Implement:

1. project foundation
2. token system
3. theme system
4. AURA Surface
5. elevation
6. aura
7. motion foundation
8. Button
9. Button states
10. showcase page
11. tests

Do not proceed to Signature Layer until the Core Button is visually convincing.

---

## 17. Visual Quality Rule

After implementation, inspect the component visually.

If it looks like ordinary shadcn with a purple glow:

the implementation is NOT complete.

The result must communicate:

material
+
depth
+
light
+
physical response

---

## 18. Change Discipline

Make small coherent commits.

Each commit must have one purpose.

Do not mix:

- architecture changes
- unrelated refactoring
- visual experiments
- dependency upgrades

in one commit.

---

## 19. Dependency Discipline

Do not add a dependency unless it provides a real capability required by AURA.

Before adding a library, determine whether the requirement can be implemented with:

- CSS
- SVG
- Canvas
- existing project dependencies

Avoid dependency inflation.

---

## 20. Definition of Done

A component is complete only when:

- TypeScript passes
- lint passes
- tests pass
- keyboard interaction works
- focus works
- reduced motion works
- Dark Mode works
- Light Mode works
- responsive behavior works
- visual states work
- no console errors
- no unnecessary hardcoded visual values
- component documentation exists

---

## 21. Final Principle

Do not make the interface look futuristic.

Make it feel alive.

Do not decorate the interface.

Give it a material.

Do not animate the interface.

Give it physics.

Do not add glow.

Give light a meaning.

Hide complexity behind simplicity.

## 22. Approved ShenData developer identity

For AI STUDIO ShenData applications, use the approved identity and original logos already included in `src/branding/` and `skills/razrabotchik/`. Studio and rights holder: **AI STUDIO ShenData**. Developer: **Константин Шендрик**.

Read `skills/razrabotchik/SKILL.md` and `docs/components/developer-identity.md` when adding branding or an About screen. Prefer the exported DeveloperIdentity, DeveloperBadge, DeveloperAbout and DeveloperFooter components. Do not ask the user to locate logos or developer information again when this package is available.

Keep original logo proportions and colors. The Shendrik mark is shared by the original developer/studio block; no separate studio symbol is approved. Product name, version, release year and license are supplied by each application. Do not carry over the production application's Mramorix Enterprise license, seats, activation fields or administrator details to other products. Do not invent contact details or legal particulars.
