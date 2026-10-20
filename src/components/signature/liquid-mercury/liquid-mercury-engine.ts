import { MercuryMetaballMaterial } from "./liquid-mercury-material";
import { resolveMercuryBlobs, resolveMercuryPhase, type MercuryBounds } from "./liquid-mercury-physics";

export type LiquidMercuryQuality = "cinematic" | "standard" | "lite" | "reduced";
export type LiquidMercuryLook = "chrome" | "ice";

export class LiquidMercuryEngine {
  private bounds: MercuryBounds = { width: 1, height: 1 };
  private startedAt = 0;
  private material = new MercuryMetaballMaterial();

  constructor(private readonly quality: LiquidMercuryQuality) {}

  resize(bounds: MercuryBounds) {
    this.bounds = {
      width: Math.max(1, bounds.width),
      height: Math.max(1, bounds.height),
    };
  }

  render(context: CanvasRenderingContext2D, now: number, reducedMotion = false, look: LiquidMercuryLook = "chrome") {
    if (!this.startedAt) {
      this.startedAt = now;
    }

    context.clearRect(0, 0, this.bounds.width, this.bounds.height);

    const duration = this.quality === "cinematic" ? 10400 : 11800;
    const cycle = reducedMotion || this.quality === "reduced" ? 0.82 : (now - this.startedAt) / duration;
    const baseBlobs = resolveMercuryBlobs(cycle, this.bounds);
    const phase = resolveMercuryPhase(cycle);
    const blobs = this.withButtonFillMass(baseBlobs, cycle, phase);

    this.drawMassShadow(context, blobs, phase);
    if (phase === "fill" || phase === "settle") {
      this.clipToButtonVolume(context);
      this.material.render(context, this.bounds, blobs, cycle, reducedMotion ? "reduced" : this.quality, look);
      context.restore();
    } else {
      this.material.render(context, this.bounds, blobs, cycle, reducedMotion ? "reduced" : this.quality, look);
    }
    this.drawButtonFillHint(context, cycle, phase, look);
  }

  private drawMassShadow(context: CanvasRenderingContext2D, blobs: ReturnType<typeof resolveMercuryBlobs>, phase: string) {
    context.save();
    context.globalAlpha = phase === "fill" || phase === "settle" ? 0.28 : 0.18;
    context.filter = "blur(7px)";
    context.fillStyle = "rgba(0,0,0,0.74)";
    for (const blob of blobs) {
      context.beginPath();
      context.ellipse(blob.x, blob.y + blob.radius * 0.42, blob.radius * 1.08, blob.radius * 0.34, 0, 0, Math.PI * 2);
      context.fill();
    }
    context.restore();
  }

  private drawButtonFillHint(context: CanvasRenderingContext2D, cycle: number, phase: string, look: LiquidMercuryLook) {
    if (phase !== "fill" && phase !== "settle") return;

    const progress = phase === "settle" ? 0.78 : 0.48 + Math.min(0.3, Math.max(0, (cycle % 1 - 0.72) / 0.16) * 0.3);
    const width = this.bounds.width / 1.84;
    const height = this.bounds.height / 2.16;
    const x = (this.bounds.width - width) / 2;
    const y = (this.bounds.height - height) / 2;
    const liquidTop = y + height * (0.76 - progress * 0.58);
    const wave = Math.sin(cycle * Math.PI * 10) * height * 0.025;

    context.save();
    context.beginPath();
    context.roundRect(x, y, width, height, Math.min(18, height * 0.42));
    context.clip();

    context.globalAlpha = 0.92;
    const mercury = context.createLinearGradient(x, liquidTop, x + width, y + height);
    if (look === "ice") {
      mercury.addColorStop(0, "rgba(255,255,255,0.96)");
      mercury.addColorStop(0.1, "rgba(205,255,255,0.9)");
      mercury.addColorStop(0.26, "rgba(74,224,246,0.72)");
      mercury.addColorStop(0.46, "rgba(0,143,184,0.66)");
      mercury.addColorStop(0.66, "rgba(0,90,124,0.56)");
      mercury.addColorStop(0.82, "rgba(175,255,255,0.78)");
      mercury.addColorStop(1, "rgba(248,255,255,0.9)");
    } else {
      mercury.addColorStop(0, "rgba(255,255,255,0.96)");
      mercury.addColorStop(0.08, "rgba(198,216,224,0.92)");
      mercury.addColorStop(0.22, "rgba(28,34,42,0.96)");
      mercury.addColorStop(0.42, "rgba(0,0,0,1)");
      mercury.addColorStop(0.64, "rgba(124,139,148,0.95)");
      mercury.addColorStop(0.78, "rgba(244,248,247,0.98)");
      mercury.addColorStop(1, "rgba(3,4,7,1)");
    }
    context.fillStyle = mercury;
    context.beginPath();
    context.moveTo(x, liquidTop + wave);
    context.bezierCurveTo(
      x + width * 0.24,
      liquidTop - height * 0.08,
      x + width * 0.72,
      liquidTop + height * 0.08,
      x + width,
      liquidTop - wave,
    );
    context.lineTo(x + width, y + height);
    context.lineTo(x, y + height);
    context.closePath();
    context.fill();

    context.globalAlpha = 0.82;
    context.strokeStyle = "rgba(255,255,255,0.88)";
    context.lineWidth = Math.max(1, height * 0.035);
    context.beginPath();
    context.moveTo(x + width * 0.04, liquidTop + wave);
    context.bezierCurveTo(
      x + width * 0.28,
      liquidTop - height * 0.08,
      x + width * 0.7,
      liquidTop + height * 0.075,
      x + width * 0.96,
      liquidTop - wave,
    );
    context.stroke();

    context.globalAlpha = 0.72;
    const glass = context.createLinearGradient(x, y, x + width, y + height);
    glass.addColorStop(0, "rgba(255,255,255,0.34)");
    glass.addColorStop(0.18, "rgba(255,255,255,0.03)");
    glass.addColorStop(0.78, "rgba(255,255,255,0.08)");
    glass.addColorStop(1, "rgba(255,255,255,0.24)");
    context.fillStyle = glass;
    context.fillRect(x, y, width, height);

    context.globalAlpha = 0.64;
    context.fillStyle = "rgba(255,255,255,0.66)";
    context.beginPath();
    context.ellipse(
      x + width * (0.42 + Math.sin(cycle * 8) * 0.035),
      y + height * 0.25,
      width * 0.34,
      height * 0.13,
      -0.12,
      0,
      Math.PI * 2,
    );
    context.fill();
    context.restore();
  }

  private clipToButtonVolume(context: CanvasRenderingContext2D) {
    const width = this.bounds.width / 1.84;
    const height = this.bounds.height / 2.16;
    const x = (this.bounds.width - width) / 2;
    const y = (this.bounds.height - height) / 2;

    context.save();
    context.beginPath();
    context.roundRect(x - 2, y - 1, width + 4, height + 2, Math.min(18, height * 0.42));
    context.clip();
  }

  private withButtonFillMass(blobs: ReturnType<typeof resolveMercuryBlobs>, cycle: number, phase: string) {
    if (phase !== "fill" && phase !== "settle") return blobs;

    const t = cycle % 1;
    const fillStrength = phase === "settle" ? 1 : Math.min(1, Math.max(0, (t - 0.72) / 0.16));
    const buttonWidth = this.bounds.width / 1.84;
    const buttonHeight = this.bounds.height / 2.16;
    const centerX = this.bounds.width / 2;
    const centerY = this.bounds.height / 2;
    const radiusY = buttonHeight * (0.38 + fillStrength * 0.17);
    const radiusX = buttonWidth * (0.19 + fillStrength * 0.05);
    const wobble = Math.sin(cycle * Math.PI * 8) * buttonHeight * 0.018;

    const fillBlobs = [
      { id: 99, x: centerX - buttonWidth * 0.43, y: centerY + wobble * 0.4, radius: radiusX * 0.86, mass: 1, wobble: 7 },
      { id: 100, x: centerX - buttonWidth * 0.32, y: centerY + wobble, radius: radiusX * 1.08, mass: 1, wobble: 0 },
      { id: 101, x: centerX - buttonWidth * 0.16, y: centerY - wobble * 0.6, radius: radiusX * 1.16, mass: 1, wobble: 1 },
      { id: 102, x: centerX, y: centerY + wobble * 0.4, radius: radiusX * 1.12, mass: 1, wobble: 2 },
      { id: 103, x: centerX + buttonWidth * 0.16, y: centerY - wobble * 0.8, radius: radiusX * 1.16, mass: 1, wobble: 3 },
      { id: 104, x: centerX + buttonWidth * 0.32, y: centerY + wobble * 0.7, radius: radiusX * 1.08, mass: 1, wobble: 4 },
      { id: 107, x: centerX + buttonWidth * 0.43, y: centerY - wobble * 0.3, radius: radiusX * 0.86, mass: 1, wobble: 8 },
      { id: 105, x: centerX - buttonWidth * 0.05, y: centerY - buttonHeight * 0.2, radius: radiusY * 0.86, mass: 1, wobble: 5 },
      { id: 106, x: centerX + buttonWidth * 0.06, y: centerY + buttonHeight * 0.2, radius: radiusY * 0.86, mass: 1, wobble: 6 },
    ];

    return [...blobs, ...fillBlobs.map((blob) => ({ ...blob, radius: blob.radius * fillStrength }))];
  }
}
