export type AuraMotionMode = "full" | "reduced";
export type AuraPerformanceMode = "auto" | "cinematic" | "standard" | "lite";

export function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
