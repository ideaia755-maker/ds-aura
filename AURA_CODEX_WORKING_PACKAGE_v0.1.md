# AURA Codex Working Package v0.1

## 0. Назначение пакета

Этот пакет предназначен непосредственно для реализации AURA в Codex.

Первый milestone:

> Создать минимальный, но настоящий AURA UI foundation и эталонный `Button`, на котором будут проверены Material, Elevation, Aura, Motion, States, Theme, Responsive и Accessibility.

Не реализовывать весь UI Kit на первом этапе.

---

# 1. Файл `AGENTS.md`

Создать в корне проекта:

```text
AGENTS.md
```

Содержимое:

```md
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
```

---

# 2. Структура проекта

Начальная структура:

```text
aura-ui/
│
├── AGENTS.md
├── package.json
├── tsconfig.json
├── components.json
├── tailwind.config.ts
│
├── src/
│   ├── components/
│   │   ├── aura/
│   │   │   ├── aura-surface.tsx
│   │   │   └── index.ts
│   │   │
│   │   └── ui/
│   │       └── button.tsx
│   │
│   ├── foundation/
│   │   ├── aura-provider.tsx
│   │   ├── theme-provider.tsx
│   │   └── performance-provider.tsx
│   │
│   ├── tokens/
│   │   ├── colors.css
│   │   ├── materials.css
│   │   ├── elevation.css
│   │   ├── motion.css
│   │   ├── spacing.css
│   │   └── index.css
│   │
│   ├── lib/
│   │   ├── utils.ts
│   │   ├── aura.ts
│   │   └── motion.ts
│   │
│   ├── styles/
│   │   └── globals.css
│   │
│   └── index.ts
│
├── docs/
│   └── components/
│       └── button.md
│
├── examples/
│   └── showcase/
│
└── tests/
    └── components/
        └── button.test.tsx
```

Это именно **стартовая** структура.

Не создавать заранее десятки пустых директорий.

Они появятся тогда, когда появится соответствующая функциональность.

---

# 3. Token Files

## `colors.css`

```css
:root {
  /* Brand */
  --aura-violet-700: #6d28d9;
  --aura-violet-600: #7c3aed;
  --aura-violet-500: #8b5cf6;
  --aura-violet-400: #a78bfa;

  --aura-purple-700: #7e22ce;
  --aura-purple-600: #9333ea;
  --aura-purple-500: #a855f7;
  --aura-purple-400: #c084fc;

  /* Energy */
  --aura-orange-deep: #c2410c;
  --aura-orange-base: #ff7a18;
  --aura-orange-bright: #ff9a3c;

  /* Semantic */
  --aura-success: #22c55e;
  --aura-info: #3b82f6;
  --aura-warning: #f59e0b;
  --aura-error: #ef4444;
  --aura-error-hot: #ff5a36;
  --aura-error-bright: #ff8a4c;
}

.dark {
  --aura-world: #030305;

  --aura-surface-1: #07070a;
  --aura-surface-2: #0b0b10;
  --aura-surface-3: #101017;
  --aura-surface-4: #15151e;
  --aura-surface-5: #1b1b25;

  --aura-text-primary: rgba(255, 255, 255, 0.94);
  --aura-text-secondary: rgba(255, 255, 255, 0.70);
  --aura-text-tertiary: rgba(255, 255, 255, 0.50);
  --aura-text-muted: rgba(255, 255, 255, 0.36);
}

.light {
  --aura-world: #f4f2ee;

  --aura-surface-1: #f7f6f3;
  --aura-surface-2: #efeee9;
  --aura-surface-3: #e8e6e1;
  --aura-surface-4: #deddd8;
  --aura-surface-5: #d5d3ce;

  --aura-text-primary: rgba(20, 20, 22, 0.94);
  --aura-text-secondary: rgba(20, 20, 22, 0.68);
  --aura-text-tertiary: rgba(20, 20, 22, 0.50);
  --aura-text-muted: rgba(20, 20, 22, 0.38);
}
```

---

# 4. `materials.css`

```css
:root {
  --aura-glass-opacity: 0.72;

  --aura-glass-blur: 16px;
  --aura-glass-blur-large: 24px;

  --aura-edge-subtle: rgba(255, 255, 255, 0.06);
  --aura-edge-default: rgba(255, 255, 255, 0.10);
  --aura-edge-highlight: rgba(255, 255, 255, 0.16);

  --aura-reflection-opacity: 0.08;
}
```

Для Light Mode эти значения могут переопределяться отдельно.

---

# 5. `elevation.css`

```css
:root {
  --aura-shadow-e0: none;

  --aura-shadow-e1:
    0 1px 2px rgba(0, 0, 0, 0.08);

  --aura-shadow-e2:
    0 8px 24px rgba(0, 0, 0, 0.16),
    0 2px 6px rgba(0, 0, 0, 0.10);

  --aura-shadow-e3:
    0 16px 40px rgba(0, 0, 0, 0.20),
    0 4px 10px rgba(0, 0, 0, 0.12);

  --aura-shadow-e4:
    0 24px 60px rgba(0, 0, 0, 0.24),
    0 8px 18px rgba(0, 0, 0, 0.14);

  --aura-shadow-e5:
    0 32px 80px rgba(0, 0, 0, 0.30),
    0 12px 24px rgba(0, 0, 0, 0.16);

  --aura-shadow-e6:
    0 48px 120px rgba(0, 0, 0, 0.36);
}
```

Это стартовые значения.

Они должны корректироваться после визуального тестирования.

---

# 6. `motion.css`

```css
:root {
  --aura-duration-instant: 80ms;
  --aura-duration-micro: 140ms;
  --aura-duration-fast: 220ms;
  --aura-duration-normal: 360ms;
  --aura-duration-slow: 560ms;
  --aura-duration-event: 900ms;
  --aura-duration-cinema: 1400ms;

  --aura-ease-standard:
    cubic-bezier(0.22, 1, 0.36, 1);

  --aura-ease-physical:
    cubic-bezier(0.16, 1, 0.3, 1);

  --aura-ease-soft:
    cubic-bezier(0.25, 0.8, 0.25, 1);
}
```

Важно:

эти easing curves — стартовый implementation layer.

В дальнейшем Motion Engine должен постепенно переходить от обычных CSS transitions к физическим motion profiles там, где это оправдано.

---

# 7. `spacing.css`

```css
:root {
  --aura-space-1: 4px;
  --aura-space-2: 8px;
  --aura-space-3: 12px;
  --aura-space-4: 16px;
  --aura-space-5: 20px;
  --aura-space-6: 24px;
  --aura-space-8: 32px;
  --aura-space-10: 40px;
  --aura-space-12: 48px;
  --aura-space-16: 64px;
  --aura-space-20: 80px;
  --aura-space-24: 96px;
}
```

---

# 8. Global Radius

В `globals.css`:

```css
:root {
  --aura-radius-xs: 6px;
  --aura-radius-sm: 8px;
  --aura-radius-md: 12px;
  --aura-radius-lg: 16px;
  --aura-radius-xl: 20px;
  --aura-radius-2xl: 28px;
  --aura-radius-3xl: 36px;
}
```

Основной AURA диапазон:

**12–28px.**

---

# 9. `index.css`

Все token files должны собираться через единый вход:

```css
@import "./colors.css";
@import "./materials.css";
@import "./elevation.css";
@import "./motion.css";
@import "./spacing.css";
```

---

# 10. `AuraProvider`

Минимальный API:

```tsx
<AuraProvider
  theme="system"
  performance="auto"
  motion="full"
>
  {children}
</AuraProvider>
```

Поддержать:

```text
theme:
  dark
  light
  system

performance:
  auto
  cinematic
  standard
  lite

motion:
  full
  reduced
```

На первом этапе не создавать сложный runtime performance detector.

Сделать архитектуру расширяемой.

---

# 11. AURASurface

Минимальный API:

```tsx
<AURASurface
  material="glass"
  elevation="E2"
  aura="primary"
  auraIntensity={1}
>
  ...
</AURASurface>
```

Props:

```ts
material:
  "glass"
  | "metal"
  | "liquid"
  | "holographic"

elevation:
  "E0"
  | "E1"
  | "E2"
  | "E3"
  | "E4"
  | "E5"
  | "E6"

aura:
  "none"
  | "primary"
  | "energy"
  | "success"
  | "info"
  | "warning"
  | "error"

auraIntensity:
  0 | 1 | 2 | 3 | 4 | 5
```

На первом этапе реально реализовать только:

```text
glass
+
E0–E5
+
primary
+
semantic aura
```

Остальные материалы подготовить архитектурно, но не делать фиктивную сложную реализацию.

---

# 12. AURA Button — эталонный компонент

Файл:

```text
src/components/ui/button.tsx
```

Button должен оставаться совместимым с привычным shadcn-подходом.

Базовое использование:

```tsx
<Button>
  Continue
</Button>
```

Размер:

```tsx
<Button size="sm">
```

Variant:

```tsx
<Button variant="default">
<Button variant="secondary">
<Button variant="outline">
<Button variant="ghost">
<Button variant="destructive">
```

---

# 13. AURA Button — дополнительные props

Добавить только необходимые AURA props:

```ts
material?: "glass" | "metal";

aura?: "none" | "primary" | "energy" | "success" | "warning" | "error";

auraIntensity?: 0 | 1 | 2 | 3 | 4 | 5;

loading?: boolean;

processing?: boolean;

success?: boolean;

error?: boolean;
```

Не добавлять пока:

```text
liquid
cinematic
webgl
shader
particle
```

Это Signature Layer.

---

# 14. Button Material

Default:

```text
glass
```

Основная кнопка должна выглядеть как физический стеклянный объект.

Не использовать сильную прозрачность.

Не использовать сильный glow.

---

# 15. Button Geometry

Основной radius:

```text
--aura-radius-md
```

Размер должен ощущаться умеренно округлым.

Не использовать чрезмерно pill-shaped форму для обычной кнопки.

---

# 16. Button Elevation

Default:

```text
E2
```

Hover:

```text
E3
```

Pressed:

```text
E1
```

Disabled:

```text
E1
```

Таким образом нажатие физически уменьшает воспринимаемую высоту объекта.

---

# 17. Button Hover

Hover должен выполнять несколько небольших изменений одновременно:

```text
surface highlight
+
edge reflection
+
subtle aura
+
small elevation increase
+
material response
```

Не делать:

```text
scale(1.05)
```

по умолчанию.

Допустима очень небольшая деформация, если она визуально оправдана.

---

# 18. Directional Highlight

В будущем Button должен поддерживать направление света относительно положения указателя.

Но в первой реализации можно использовать контролируемый CSS highlight.

Архитектура должна позволять позже передать:

```text
pointerX
pointerY
```

в CSS variables.

Например:

```css
--aura-pointer-x
--aura-pointer-y
```

Это позволит позже сделать настоящее движущееся отражение.

---

# 19. Button Press

При `:active`:

```text
elevation ↓
surface compression
highlight ↓
```

Можно использовать небольшое изменение:

```text
transform: translateY(1px);
```

Но не делать резкого масштабирования.

---

# 20. Button Focus

Focus должен быть хорошо видим.

Использовать:

```text
focus-visible
+
semantic violet indication
+
optional aura
```

Нельзя делать:

```text
outline: none
```

без полноценной замены.

---

# 21. Button Disabled

Disabled:

* reduced contrast;
* reduced aura;
* reduced reflection;
* no hover physics;
* no pointer interaction.

Но кнопка должна оставаться визуально читаемой.

---

# 22. Button Loading

При:

```tsx
<Button loading>
```

не менять размер кнопки.

Содержимое:

```text
label
→ loading indicator
```

или:

```text
icon
+
label
```

в зависимости от реализации.

Кнопка должна блокировать повторный запуск действия.

---

# 23. Button Processing

`processing` отличается от простого loading.

Loading:

> операция выполняется.

Processing:

> объект находится в активной фазе процесса.

В будущем processing может получить более живую material animation.

В первой версии достаточно:

```text
subtle internal light movement
+
semantic state
```

---

# 24. Button Success

После успешного действия:

```text
normal
→ success
→ completed
```

Success должен использовать:

```text
green semantic state
+
clear icon/state
+
subtle aura
```

Не запускать пока particle convergence.

Это будет Signature Layer.

---

# 25. Button Error

Error:

```text
red semantic state
+
hot material highlight
+
error icon/state
```

Визуальная идея:

**red-hot metal**

Но без чрезмерного красного glow.

---

# 26. Button Responsive

Desktop:

полный material response.

Tablet:

немного сниженная animation complexity.

Mobile:

* touch-friendly target;
* уменьшенная complexity;
* press feedback важнее hover;
* hover-dependent behavior не должен быть обязательным.

---

# 27. Reduced Motion

При reduced motion:

```text
no large transform
no liquid
no cinematic motion
no particle animation
```

Оставить:

```text
color/state
+
contrast
+
static highlight
+
minimal transition
```

---

# 28. Button State Matrix

Button должен быть протестирован минимум в:

```text
default
hover
focus
pressed
disabled
loading
processing
success
error
```

Для каждого:

```text
Dark
Light
```

И:

```text
Desktop
Mobile
Reduced Motion
```

---

# 29. Button Showcase

Создать страницу:

```text
examples/showcase/ButtonShowcase.tsx
```

На странице:

### Theme

```text
Dark
Light
```

### Variants

```text
Default
Secondary
Outline
Ghost
Destructive
```

### States

```text
Default
Hover
Pressed
Focus
Loading
Processing
Success
Error
Disabled
```

### Materials

```text
Glass
Metal
```

### Aura

```text
None
Primary
Energy
Success
Warning
Error
```

---

# 30. Showcase должен быть инструментом разработки

Это не маркетинговая страница.

Она должна позволять разработчику быстро увидеть:

> что произойдёт с компонентом при изменении каждого параметра.

Позже Showcase превращается в полноценную:

**AURA Laboratory**

---

# 31. Tests

Минимальный набор:

```text
renders correctly
supports variants
supports sizes
supports disabled
supports loading
supports processing
supports success
supports error
supports keyboard focus
does not trigger click while disabled
does not trigger click while loading
```

---

# 32. Visual Tests

Для Button создать эталонные screenshots:

```text
button-dark.png
button-light.png
button-hover.png
button-pressed.png
button-focus.png
button-loading.png
button-success.png
button-error.png
```

Позже snapshots будут расширены на весь UI Kit.

---

# 33. Documentation

Создать:

```text
docs/components/button.md
```

Содержимое:

```text
Purpose
Installation
API
Variants
Sizes
States
Materials
Aura
Motion
Accessibility
Responsive behavior
Performance
Examples
Do
Don't
```

---

# 34. Commit Plan

Работу разбить на маленькие коммиты.

## Commit 01

```text
chore: initialize aura ui foundation
```

Создать:

* базовую структуру;
* TypeScript;
* Tailwind;
* shadcn foundation;
* lint;
* test infrastructure.

Никаких визуальных экспериментов.

---

## Commit 02

```text
feat: add aura design tokens
```

Добавить:

* colors;
* surfaces;
* typography base;
* spacing;
* radius;
* elevation;
* motion;
* semantic colors.

---

## Commit 03

```text
feat: add aura theme system
```

Добавить:

* dark;
* light;
* system;
* AuraProvider.

---

## Commit 04

```text
feat: add aura surface and elevation system
```

Добавить:

* AURASurface;
* materials abstraction;
* elevation;
* shadows;
* reflections.

На этом этапе уже должна появиться визуальная разница между обычным shadcn и AURA.

---

## Commit 05

```text
feat: add aura semantic light system
```

Добавить:

* Aura;
* aura intensity;
* semantic colors;
* primary/energy/success/warning/error.

---

## Commit 06

```text
feat: add aura motion foundation
```

Добавить:

* motion tokens;
* hover profile;
* press profile;
* settle profile;
* reduced-motion behavior.

Пока без WebGL.

---

## Commit 07

```text
feat: implement aura button
```

Создать полноценный Button.

Это главный визуальный milestone.

---

## Commit 08

```text
test: add aura button interaction tests
```

Добавить:

* state tests;
* keyboard;
* disabled;
* loading;
* accessibility.

---

## Commit 09

```text
docs: add aura button documentation
```

Добавить документацию Button.

---

## Commit 10

```text
feat: add aura laboratory button showcase
```

Создать интерактивный playground.

---

# 35. Checkpoint после Commit 10

Остановиться.

Не начинать Card, Input или Liquid.

Сначала проверить AURA Button визуально.

Критерии:

### Dark

Должно ощущаться:

**чёрное стекло + физический объект + violet light.**

### Light

Должно ощущаться:

**молочное стекло + физический объект + мягкое отражение.**

### Hover

Должно быть ощущение:

**«кнопка ожила».**

### Press

Должно быть ощущение:

**«я физически нажал объект».**

### Focus

Должно быть:

**явно видно и при этом эстетично.**

### Loading

Должно быть:

**спокойно и понятно.**

### Error

Должно ощущаться:

**горячий материал**, а не просто красный CSS.

---

# 36. Что считать провалом

Если результат выглядит как:

```text
обычная shadcn button
+
purple box-shadow
```

— AURA не реализована.

Если:

```text
glass
+
blur
+
glow
```

— AURA не реализована.

Если:

```text
gradient
+
neon
+
animation
```

— AURA не реализована.

Если интерфейс выглядит эффектно, но пользоваться им сложнее:

— AURA не реализована.

---

# 37. После успешного Button

Только после визуального утверждения Button перейти к:

```text
Card
→ Input
→ Badge
→ Alert
→ Dialog
→ Popover
→ Tabs
```

При этом Button останется эталоном поведения.

---

# 38. Долгосрочная архитектура

После Core Layer система должна расшириться:

```text
AURA Core
    ↓
AURA Controls
    ↓
AURA Navigation
    ↓
AURA Data
    ↓
AURA Content
    ↓
AURA Patterns
    ↓
AURA Signature
```

Signature Layer:

```text
Liquid
Cinematic
Holographic
Particle Convergence
Material Transformation
```

не должен проникать в Core без необходимости.

---

# 39. Главная задача первого milestone

Не создать много компонентов.

Создать **один компонент, который доказывает, что AURA работает**.

Этим компонентом является:

# AURA Button

Если Button выглядит убедительно в:

```text
Dark
Light
Hover
Press
Focus
Loading
Success
Error
Mobile
Reduced Motion
```

значит фундамент системы выбран правильно.

Если нет — исправлять фундамент сейчас, а не после создания пятидесяти компонентов.

---

# 40. Финальный порядок реализации

```text
FOUNDATION
    ↓
TOKENS
    ↓
THEME
    ↓
SURFACE
    ↓
ELEVATION
    ↓
AURA
    ↓
MOTION
    ↓
BUTTON
    ↓
TESTS
    ↓
SHOWCASE
    ↓
VISUAL REVIEW
    ↓
APPROVAL
    ↓
CARD
    ↓
INPUT
    ↓
CORE UI
    ↓
PATTERNS
    ↓
SIGNATURE
```

**Не перескакивать через Visual Review.**

AURA строится не количеством компонентов, а качеством первого физического взаимодействия.
