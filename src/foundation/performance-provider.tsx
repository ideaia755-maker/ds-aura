import * as React from "react";
import type { AuraPerformanceMode } from "@/lib/motion";

interface PerformanceProviderProps {
  performance?: AuraPerformanceMode;
  children: React.ReactNode;
}

export function PerformanceProvider({ performance = "auto", children }: PerformanceProviderProps) {
  return (
    <div data-aura-performance={performance} style={{ display: "contents" }}>
      {children}
    </div>
  );
}
