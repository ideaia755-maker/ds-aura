import * as React from "react";
import { AuraProvider } from "@/foundation/aura-provider";
import { AURASurface } from "@/components/aura";
import { Button } from "@/components/ui/button";

const variants = ["default", "secondary", "outline", "ghost", "destructive"] as const;
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
      <main className="min-h-screen px-5 py-6 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6">
          <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-sm font-medium text-[color:var(--aura-text-secondary)]">AURA Laboratory</p>
              <h1 className="aura-title-mark m-0 text-3xl text-[color:var(--aura-text-primary)]">
                Button foundation
              </h1>
              <p className="aura-font-display mt-3 text-xs text-[color:var(--aura-text-secondary)]">ARK-7 / AURA DISPLAY</p>
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

          <AURASurface className="grid gap-5 p-5 sm:p-6" elevation="E3" aura={aura} auraIntensity={2} material={material}>
            <section>
              <h2 className="mb-3 text-sm font-semibold uppercase text-[color:var(--aura-text-secondary)]">Variants</h2>
              <div className="flex flex-wrap gap-3">
                {variants.map((variant) => (
                  <Button key={variant} variant={variant} material={material} aura={aura}>
                    {variant}
                  </Button>
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-3 text-sm font-semibold uppercase text-[color:var(--aura-text-secondary)]">States</h2>
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
              <h2 className="mb-3 text-sm font-semibold uppercase text-[color:var(--aura-text-secondary)]">Mercury merge prototype</h2>
              <div className="aura-processing-stage flex flex-wrap gap-3">
                <Button material={material} aura="primary" processing size="lg">
                  Processing
                </Button>
              </div>
            </section>

            <section>
              <h2 className="mb-3 text-sm font-semibold uppercase text-[color:var(--aura-text-secondary)]">Aura</h2>
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
