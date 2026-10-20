import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { AURASurface } from "@/components/aura";
import { auraElevations } from "@/lib/aura";
import { resolveElevationProfile } from "@/lib/elevation";
import "@/styles/globals.css";

describe("AURA elevation", () => {
  it("exposes profiles for every elevation level", () => {
    for (const elevation of auraElevations) {
      const profile = resolveElevationProfile(elevation);
      expect(profile.elevation).toBe(elevation);
      expect(profile.shadow).toContain(`--aura-shadow-${elevation.toLowerCase()}`);
      expect(profile.contactShadow).toContain(`--aura-contact-shadow-${elevation.toLowerCase()}`);
      expect(profile.depthY).toContain(`--aura-depth-y-${elevation.toLowerCase()}`);
      expect(profile.scale).toContain(`--aura-depth-scale-${elevation.toLowerCase()}`);
    }
  });

  it("maps elevation to the surface data contract", () => {
    render(<AURASurface elevation="E5">Elevated</AURASurface>);
    expect(screen.getByText("Elevated")).toHaveAttribute("data-aura-elevation", "E5");
  });
});
