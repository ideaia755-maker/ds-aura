import * as React from "react";
import { prefersReducedMotion, type AuraMotionMode, type AuraPerformanceMode } from "@/lib/motion";
import { PerformanceProvider } from "./performance-provider";
import { ThemeProvider, type AuraTheme } from "./theme-provider";

interface AuraProviderProps {
  theme?: AuraTheme;
  performance?: AuraPerformanceMode;
  motion?: AuraMotionMode;
  children: React.ReactNode;
}

export function AuraProvider({
  theme = "system",
  performance = "auto",
  motion = "full",
  children,
}: AuraProviderProps) {
  const resolvedMotion = motion === "reduced" || prefersReducedMotion() ? "reduced" : "full";

  React.useEffect(() => {
    document.documentElement.dataset.auraMotion = resolvedMotion;
    document.documentElement.classList.toggle("aura-reduced-motion", resolvedMotion === "reduced");
  }, [resolvedMotion]);

  return (
    <ThemeProvider theme={theme}>
      <PerformanceProvider performance={performance}>{children}</PerformanceProvider>
    </ThemeProvider>
  );
}
