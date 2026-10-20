import { auraElevations, type AuraElevation } from "./aura";

export interface AuraElevationProfile {
  elevation: AuraElevation;
  shadow: string;
  contactShadow: string;
  depthY: string;
  scale: string;
  edge: string;
}

export const auraElevationProfiles: Record<AuraElevation, AuraElevationProfile> = auraElevations.reduce(
  (profiles, elevation) => {
    const level = elevation.toLowerCase();
    profiles[elevation] = {
      elevation,
      shadow: `var(--aura-shadow-${level})`,
      contactShadow: `var(--aura-contact-shadow-${level})`,
      depthY: `var(--aura-depth-y-${level})`,
      scale: `var(--aura-depth-scale-${level})`,
      edge: `var(--aura-elevation-edge-${level})`,
    };
    return profiles;
  },
  {} as Record<AuraElevation, AuraElevationProfile>,
);

export function resolveElevationProfile(elevation: AuraElevation) {
  return auraElevationProfiles[elevation];
}
