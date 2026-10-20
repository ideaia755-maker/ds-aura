import * as React from "react";
import { LiquidMercuryEngine, type LiquidMercuryLook, type LiquidMercuryQuality } from "./liquid-mercury-engine";

interface LiquidMercuryProcessingProps {
  active?: boolean;
}

function resolveQuality(element: HTMLElement | null): LiquidMercuryQuality {
  const mode = element?.closest("[data-aura-performance]")?.getAttribute("data-aura-performance");
  if (mode === "cinematic" || mode === "lite") return mode;
  if (mode === "reduced-motion") return "reduced";
  return "standard";
}

function resolveLook(element: HTMLElement | null): LiquidMercuryLook {
  const button = element?.closest("[data-aura-material]");
  const material = button?.getAttribute("data-aura-material");
  const isLight = document.documentElement.classList.contains("light");
  return isLight || material === "metal" ? "ice" : "chrome";
}

export function LiquidMercuryProcessing({ active = true }: LiquidMercuryProcessingProps) {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);

  React.useEffect(() => {
    const currentCanvas = canvasRef.current;
    if (!currentCanvas || !active || typeof ResizeObserver === "undefined") return;

    const currentContext = currentCanvas.getContext("2d", { alpha: true });
    if (!currentContext) return;

    const canvas = currentCanvas;
    const context = currentContext;
    const quality = resolveQuality(canvas);
    const engine = new LiquidMercuryEngine(quality);
    const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animationFrame = 0;

    function resize() {
      const rect = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, quality === "cinematic" ? 2 : 1.5);
      canvas.width = Math.max(1, Math.round(rect.width * ratio));
      canvas.height = Math.max(1, Math.round(rect.height * ratio));
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      engine.resize({ width: rect.width, height: rect.height });
    }

    function frame(now: number) {
      engine.render(context, now, reduceMotionQuery.matches, resolveLook(canvas));
      animationFrame = window.requestAnimationFrame(frame);
    }

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    resize();
    animationFrame = window.requestAnimationFrame(frame);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(animationFrame);
    };
  }, [active]);

  if (!active) return null;

  return <canvas className="aura-liquid-mercury" ref={canvasRef} aria-hidden="true" />;
}
