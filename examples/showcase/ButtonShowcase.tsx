import * as React from "react";
import { AuraProvider } from "@/foundation/aura-provider";
import { AURASurface } from "@/components/aura";
import { Button } from "@/components/ui/button";

const variants = ["default", "secondary", "outline", "ghost", "destructive", "gradient"] as const;
const auras = ["none", "primary", "energy", "success", "warning", "error"] as const;

export function ButtonShowcase() {
  const [theme, setTheme] = React.useState<"dark" | "light">("dark");
  const [material, setMaterial] = React.useState<"glass" | "metal">("glass");
  const [aura, setAura] = React.useState<(typeof auras)[number]>("primary");
  const [reducedMotion, setReducedMotion] = React.useState(false);
  const modes = [
    { label: "Dark Glass", theme: "dark", material: "glass" },
    { label: "Dark Metal", theme: "dark", material: "metal" },
    { label: "Light Metal", theme: "light", material: "metal" },
  ] as const;

  function setMode(nextTheme: "dark" | "light", nextMaterial: "glass" | "metal") {
    setTheme(nextTheme);
    setMaterial(nextMaterial);
  }

  return (
    <AuraProvider theme={theme} motion={reducedMotion ? "reduced" : "full"} performance="standard">
      <main className="aura-grid-canvas min-h-screen px-5 py-8 sm:px-8 lg:px-12 text-slate-100">
        <div className="mx-auto flex max-w-6xl flex-col gap-8">
          {/* AURA Signature Hero Headline & Badges */}
          <header className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="aura-badge">
                  <span className="aura-badge-text-gradient">AURA 2.0</span>
                </span>
                <span className="aura-badge">
                  <span className="aura-badge-text-subtle">Physical Digital Object</span>
                </span>
              </div>
              <h1 className="aura-headline text-4xl sm:text-5xl tracking-tight">
                <span className="aura-headline-solid block">Все нейросети</span>
                <span className="aura-headline-gradient block">в одном месте</span>
              </h1>
              <p className="text-sm text-slate-400 max-w-md">
                Интерфейс парит над координатным пространством, обладая физической массой, живым светом и тактильным откликом.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {modes.map((mode) => (
                <Button
                  key={mode.label}
                  variant={theme === mode.theme && material === mode.material ? "default" : "secondary"}
                  size="sm"
                  material={mode.material}
                  onClick={() => setMode(mode.theme, mode.material)}
                >
                  {mode.label}
                </Button>
              ))}
              <Button variant={reducedMotion ? "default" : "outline"} size="sm" onClick={() => setReducedMotion((value) => !value)}>
                Reduced motion
              </Button>
            </div>
          </header>

          {/* Flagship CTA Hero Button */}
          <div className="flex flex-wrap items-center gap-4 py-2">
            <Button variant="gradient" size="lg" className="px-8 py-3.5 text-base">
              ПОПРОБОВАТЬ БЕСПЛАТНО
            </Button>
            <span className="text-xs text-slate-400">
              ← Флагманская капсула с фирменным градиентом и световым переливом шрифта
            </span>
          </div>

          {/* Floating Levitating Card Surface */}
          <AURASurface floating className="grid gap-6 p-6 sm:p-8 rounded-3xl" elevation="E3" aura={aura} auraIntensity={2} material={material}>
            <div className="flex items-center justify-between border-b border-white/8 pb-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-xs font-mono text-slate-400">aura · floating · studio</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-emerald-400 font-medium">levitating</span>
              </div>
            </div>

            <section>
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-400">Кнопки: Варианты</h2>
              <div className="flex flex-wrap items-center gap-3">
                {variants.map((variant) => (
                  <Button key={variant} variant={variant} material={material} aura={aura}>
                    {variant === "gradient" ? "ПОПРОБОВАТЬ БЕСПЛАТНО" : variant}
                  </Button>
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-400">Физические состояния</h2>
              <div className="flex flex-wrap gap-3">
                <Button material={material} aura={aura}>Default</Button>
                <Button material={material} aura={aura} data-pressed="true">Pressed</Button>
                <Button material={material} aura={aura} data-focus="true">Focus</Button>
                <Button material={material} aura={aura} loading>Loading</Button>
                <Button material={material} aura={aura} processing>Processing</Button>
                <Button material={material} success>Success</Button>
                <Button material={material} error>Error</Button>
                <Button material={material} disabled>Disabled</Button>
              </div>
            </section>

            <section>
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-400">Mercury merge prototype</h2>
              <div className="aura-processing-stage flex flex-wrap gap-3">
                <Button material={material} aura="primary" processing size="lg">
                  Processing
                </Button>
              </div>
            </section>

            <section>
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-400">Семантическая Аура</h2>
              <div className="flex flex-wrap gap-3">
                {auras.map((item) => (
                  <Button
                    key={item}
                    variant={aura === item ? "default" : "outline"}
                    material={material}
                    aura={item}
                    auraIntensity={item === "none" ? 0 : 2}
                    onClick={() => setAura(item)}
                  >
                    {item}
                  </Button>
                ))}
              </div>
            </section>
          </AURASurface>
        </div>
      </main>
    </AuraProvider>
  );
}
