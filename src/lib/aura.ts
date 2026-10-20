export const auraNames = ["none", "primary", "energy", "success", "info", "warning", "error"] as const;
export const auraIntensities = [0, 1, 2, 3, 4, 5] as const;
export const auraElevations = ["E0", "E1", "E2", "E3", "E4", "E5", "E6"] as const;
export const auraMaterials = ["glass", "metal", "liquid", "holographic"] as const;

export type AuraName = (typeof auraNames)[number];
export type AuraIntensity = (typeof auraIntensities)[number];
export type AuraElevation = (typeof auraElevations)[number];
export type AuraMaterial = (typeof auraMaterials)[number];

export function resolveAuraColor(aura: AuraName) {
  return `var(--aura-aura-${aura})`;
}

export function resolveAuraAlpha(intensity: AuraIntensity) {
  return `var(--aura-aura-alpha-${intensity})`;
}
