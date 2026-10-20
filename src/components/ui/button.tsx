import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { Check, X } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { AuraIntensity } from "@/lib/aura";
import { LiquidMercuryProcessing } from "@/components/signature/liquid-mercury";

const buttonVariants = cva("aura-button", {
  variants: {
    variant: {
      default: "aura-button--default",
      secondary: "aura-button--secondary",
      outline: "aura-button--outline",
      ghost: "aura-button--ghost",
      destructive: "aura-button--destructive",
    },
    size: {
      sm: "aura-button--sm",
      default: "aura-button--md",
      lg: "aura-button--lg",
      icon: "aura-button--icon",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  material?: "glass" | "metal";
  aura?: "none" | "primary" | "energy" | "success" | "warning" | "error";
  auraIntensity?: AuraIntensity;
  loading?: boolean;
  processing?: boolean;
  success?: boolean;
  error?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      material = "glass",
      aura = "primary",
      auraIntensity = 1,
      loading = false,
      processing = false,
      success = false,
      error = false,
      disabled,
      children,
      onClick,
      "aria-label": ariaLabel,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    const busy = loading || processing;
    const stateAura = error ? "error" : success ? "success" : aura;
    const buttonDisabled = disabled || loading || processing;

    function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
      if (buttonDisabled) {
        event.preventDefault();
        return;
      }
      onClick?.(event);
    }

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        data-aura-material={material}
        data-aura={stateAura}
        data-aura-intensity={error || success || processing ? Math.max(auraIntensity, 2) : auraIntensity}
        data-loading={loading || undefined}
        data-processing={processing || undefined}
        data-success={success || undefined}
        data-error={error || undefined}
        disabled={buttonDisabled}
        aria-busy={busy || undefined}
        aria-label={ariaLabel}
        ref={ref}
        onClick={handleClick}
        {...props}
      >
        <span className="aura-button__shine" aria-hidden="true" />
        {loading ? (
          <>
            <span className="aura-button__loading-faucet" aria-hidden="true">
              <svg className="aura-button__loading-faucet-art" viewBox="0 0 96 72" focusable="false">
                <path className="aura-faucet__pipe" d="M8 34 h26" />
                <rect className="aura-faucet__cap" x="2" y="22" width="18" height="28" rx="7" />
                <rect className="aura-faucet__collar" x="27" y="24" width="11" height="26" rx="5" />
                <path className="aura-faucet__body" d="M42 25 h18 c15 0 25 10 25 25 v7 c0 5-4 8-10 8 h-4 c-5 0-8-3-8-8 v-7 c0-4-3-7-7-7 H42 Z" />
                <rect className="aura-faucet__stem" x="48" y="8" width="12" height="21" rx="5" />
                <path className="aura-faucet__handle" d="M32 12 h44" />
                <path className="aura-faucet__spout-shadow" d="M58 36 h3 c9 0 15 6 15 15 v10" />
              </svg>
              <span className="aura-button__water-stream" />
            </span>
            <span className="aura-button__loading-liquid" aria-hidden="true" />
          </>
        ) : null}
        {processing ? <LiquidMercuryProcessing active /> : null}
        <span className="aura-button__content">
          {success ? <Check className="aura-button__icon" aria-hidden="true" /> : null}
          {error ? <X className="aura-button__icon" aria-hidden="true" /> : null}
          <span>{children}</span>
        </span>
      </Comp>
    );
  },
);

Button.displayName = "Button";
