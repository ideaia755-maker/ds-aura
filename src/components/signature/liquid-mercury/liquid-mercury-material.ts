import type { MercuryBlob, MercuryBounds } from "./liquid-mercury-physics";
import type { LiquidMercuryLook } from "./liquid-mercury-engine";

function clamp(value: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

function drawChromeDroplet(context: CanvasRenderingContext2D, blob: MercuryBlob, time: number) {
  const r = blob.radius;
  const x = blob.x;
  const y = blob.y;
  const squash = 0.74 + clamp(r / 42, 0, 0.18);
  const wobble = Math.sin(time * 9 + blob.wobble) * r * 0.035;

  context.save();
  context.translate(x, y + wobble);

  context.globalAlpha = 0.4;
  context.fillStyle = "rgba(0,0,0,0.86)";
  context.filter = "blur(2.2px)";
  context.beginPath();
  context.ellipse(0, r * 0.62, r * 0.9, r * 0.22, 0, 0, Math.PI * 2);
  context.fill();
  context.filter = "none";

  context.globalAlpha = 0.24;
  const reflection = context.createLinearGradient(0, r * 0.48, 0, r * 1.32);
  reflection.addColorStop(0, "rgba(255,255,255,0.46)");
  reflection.addColorStop(0.42, "rgba(35,40,45,0.34)");
  reflection.addColorStop(1, "rgba(0,0,0,0)");
  context.fillStyle = reflection;
  context.beginPath();
  context.ellipse(0, r * 0.98, r * 0.78, r * 0.36, 0, 0, Math.PI * 2);
  context.fill();

  context.globalAlpha = 1;
  const body = context.createRadialGradient(-r * 0.28, -r * 0.42, r * 0.08, 0, 0, r * 1.18);
  body.addColorStop(0, "rgba(255,255,255,1)");
  body.addColorStop(0.09, "rgba(232,244,246,0.98)");
  body.addColorStop(0.18, "rgba(117,130,139,0.96)");
  body.addColorStop(0.34, "rgba(8,10,14,0.99)");
  body.addColorStop(0.52, "rgba(0,0,0,1)");
  body.addColorStop(0.7, "rgba(145,158,166,0.96)");
  body.addColorStop(0.88, "rgba(246,250,248,0.98)");
  body.addColorStop(1, "rgba(16,18,22,1)");
  context.fillStyle = body;
  context.shadowColor = "rgba(0,0,0,0.68)";
  context.shadowBlur = r * 0.28;
  context.beginPath();
  context.ellipse(0, 0, r, r * squash, 0, 0, Math.PI * 2);
  context.fill();

  context.shadowBlur = 0;
  context.globalAlpha = 0.96;
  context.strokeStyle = "rgba(255,255,255,0.55)";
  context.lineWidth = Math.max(0.7, r * 0.045);
  context.beginPath();
  context.ellipse(0, -r * 0.02, r * 0.98, r * squash * 0.98, 0, Math.PI * 1.03, Math.PI * 1.96);
  context.stroke();

  const band = context.createLinearGradient(-r * 0.78, -r * 0.24, r * 0.78, r * 0.14);
  band.addColorStop(0, "rgba(255,255,255,0)");
  band.addColorStop(0.18, "rgba(255,255,255,0.9)");
  band.addColorStop(0.34, "rgba(255,255,255,0.18)");
  band.addColorStop(0.56, "rgba(0,0,0,0.74)");
  band.addColorStop(0.78, "rgba(255,255,255,0.86)");
  band.addColorStop(1, "rgba(255,255,255,0)");
  context.globalAlpha = 0.72;
  context.fillStyle = band;
  context.beginPath();
  context.ellipse(-r * 0.04, -r * 0.18, r * 0.82, r * 0.18, -0.08, 0, Math.PI * 2);
  context.fill();

  context.globalAlpha = 0.96;
  context.fillStyle = "rgba(255,255,255,0.95)";
  context.beginPath();
  context.ellipse(-r * 0.36, -r * 0.48, r * 0.24, r * 0.11, -0.42, 0, Math.PI * 2);
  context.fill();

  context.globalAlpha = 0.5;
  context.fillStyle = "rgba(255,255,255,0.78)";
  context.beginPath();
  context.ellipse(r * 0.42, -r * 0.3, r * 0.16, r * 0.08, 0.28, 0, Math.PI * 2);
  context.fill();

  context.restore();
}

function drawIceDroplet(context: CanvasRenderingContext2D, blob: MercuryBlob, time: number) {
  const r = blob.radius;
  const x = blob.x;
  const y = blob.y;
  const squash = 0.76 + clamp(r / 46, 0, 0.16);
  const wobble = Math.sin(time * 8 + blob.wobble) * r * 0.03;

  context.save();
  context.translate(x, y + wobble);

  context.globalAlpha = 0.2;
  context.fillStyle = "rgba(0,164,190,0.34)";
  context.filter = "blur(3px)";
  context.beginPath();
  context.ellipse(0, r * 0.78, r * 0.94, r * 0.24, 0, 0, Math.PI * 2);
  context.fill();
  context.filter = "none";

  context.globalAlpha = 0.94;
  const body = context.createRadialGradient(-r * 0.34, -r * 0.44, r * 0.08, 0, 0, r * 1.18);
  body.addColorStop(0, "rgba(255,255,255,0.98)");
  body.addColorStop(0.11, "rgba(220,255,255,0.92)");
  body.addColorStop(0.24, "rgba(91,231,248,0.72)");
  body.addColorStop(0.44, "rgba(0,177,214,0.60)");
  body.addColorStop(0.66, "rgba(0,103,134,0.50)");
  body.addColorStop(0.82, "rgba(173,255,255,0.72)");
  body.addColorStop(1, "rgba(255,255,255,0.86)");
  context.fillStyle = body;
  context.shadowColor = "rgba(33,217,245,0.28)";
  context.shadowBlur = r * 0.18;
  context.beginPath();
  context.ellipse(0, 0, r, r * squash, 0, 0, Math.PI * 2);
  context.fill();

  context.shadowBlur = 0;
  context.globalAlpha = 0.78;
  context.strokeStyle = "rgba(221,255,255,0.82)";
  context.lineWidth = Math.max(0.7, r * 0.05);
  context.beginPath();
  context.ellipse(0, 0, r * 0.96, r * squash * 0.96, 0, 0, Math.PI * 2);
  context.stroke();

  context.globalAlpha = 0.82;
  context.fillStyle = "rgba(255,255,255,0.9)";
  context.beginPath();
  context.ellipse(-r * 0.32, -r * 0.46, r * 0.28, r * 0.12, -0.38, 0, Math.PI * 2);
  context.fill();

  context.globalAlpha = 0.34;
  context.fillStyle = "rgba(255,255,255,0.72)";
  context.beginPath();
  context.ellipse(r * 0.18, r * 0.12, r * 0.5, r * 0.18, -0.2, 0, Math.PI * 2);
  context.fill();

  context.restore();
}

export class MercuryMetaballMaterial {
  render(
    context: CanvasRenderingContext2D,
    bounds: MercuryBounds,
    blobs: MercuryBlob[],
    time: number,
    quality: "cinematic" | "standard" | "lite" | "reduced",
    look: LiquidMercuryLook = "chrome",
  ) {
    const maxDroplets = quality === "lite" ? 7 : blobs.length;
    const visible = [...blobs]
      .filter((blob) => blob.radius > 1)
      .sort((a, b) => a.radius - b.radius)
      .slice(-maxDroplets);

    context.save();
    context.globalCompositeOperation = "source-over";
    context.imageSmoothingEnabled = true;
    for (const blob of visible) {
      if (look === "ice") {
        drawIceDroplet(context, blob, time);
      } else {
        drawChromeDroplet(context, blob, time);
      }
    }
    context.restore();
  }
}
