import * as React from "react";
import { cn } from "@/lib/utils";
import type { AuraElevation, AuraIntensity, AuraMaterial, AuraName } from "@/lib/aura";

export interface AURASurfaceProps extends React.HTMLAttributes<HTMLDivElement> {
  material?: AuraMaterial;
  elevation?: AuraElevation;
  aura?: AuraName;
  auraIntensity?: AuraIntensity;
  floating?: boolean;
}

export const AURASurface = React.forwardRef<HTMLDivElement, AURASurfaceProps>(
  (
    {
      className,
      material = "glass",
      elevation = "E2",
      aura = "primary",
      auraIntensity = 1,
      floating = false,
      style,
      children,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      className={cn("aura-surface", floating && "aura-surface--floating", className)}
      data-aura-material={material}
      data-aura-elevation={elevation}
      data-aura={aura}
      data-aura-intensity={auraIntensity}
      data-aura-floating={floating || undefined}
      style={style}
      {...props}
    >
      {children}
    </div>
  ),
);

AURASurface.displayName = "AURASurface";
