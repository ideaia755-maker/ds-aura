export type MercuryTopologyPhase = "spiral" | "converge" | "fill" | "settle" | "release";

export interface MercuryBounds {
  width: number;
  height: number;
}

export interface MercuryBlob {
  id: number;
  x: number;
  y: number;
  radius: number;
  mass: number;
  wobble: number;
}

interface BlobSeed {
  id: number;
  orbit: number;
  lane: number;
  radius: number;
  depth: number;
  wobble: number;
}

const blobSeeds: BlobSeed[] = [
  { id: 0, orbit: 0.02, lane: -0.18, radius: 0.082, depth: 0.92, wobble: 0.2 },
  { id: 1, orbit: 0.14, lane: 0.24, radius: 0.058, depth: 0.54, wobble: 1.1 },
  { id: 2, orbit: 0.25, lane: -0.36, radius: 0.072, depth: 0.74, wobble: 2.0 },
  { id: 3, orbit: 0.37, lane: 0.12, radius: 0.048, depth: 0.42, wobble: 2.8 },
  { id: 4, orbit: 0.48, lane: 0.34, radius: 0.064, depth: 0.64, wobble: 3.4 },
  { id: 5, orbit: 0.58, lane: -0.22, radius: 0.05, depth: 0.5, wobble: 4.2 },
  { id: 6, orbit: 0.68, lane: 0.02, radius: 0.09, depth: 1, wobble: 5.0 },
  { id: 7, orbit: 0.78, lane: -0.42, radius: 0.044, depth: 0.38, wobble: 5.8 },
  { id: 8, orbit: 0.88, lane: 0.2, radius: 0.068, depth: 0.72, wobble: 6.3 },
  { id: 9, orbit: 0.95, lane: -0.04, radius: 0.052, depth: 0.46, wobble: 7.2 },
];

export function smoothstep(edge0: number, edge1: number, value: number) {
  const t = Math.min(1, Math.max(0, (value - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

export function resolveMercuryPhase(cycle: number): MercuryTopologyPhase {
  const t = cycle % 1;
  if (t < 0.48) return "spiral";
  if (t < 0.72) return "converge";
  if (t < 0.88) return "fill";
  if (t < 0.96) return "settle";
  return "release";
}

function mix(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function viscousEase(value: number) {
  const t = smoothstep(0, 1, value);
  return t * t * (3 - 2 * t);
}

export function resolveMercuryBlobs(cycle: number, bounds: MercuryBounds): MercuryBlob[] {
  const t = cycle % 1;
  const centerX = bounds.width / 2;
  const centerY = bounds.height / 2;
  const buttonWidth = bounds.width / 1.84;
  const buttonHeight = bounds.height / 2.16;
  const unit = Math.min(buttonWidth, buttonHeight * 2.4);
  const converge = viscousEase((t - 0.48) / 0.24);
  const fill = smoothstep(0.72, 0.88, t);
  const release = smoothstep(0.96, 1, t);
  const pull = t >= 0.96 ? 1 - release : Math.max(converge, fill);
  const spinBase = cycle * Math.PI * 2 * 1.18;

  return blobSeeds.map((seed) => {
    const spin = spinBase + seed.orbit * Math.PI * 2 + Math.sin(cycle * 2.6 + seed.wobble) * 0.12;
    const spiralRadius = 1 - pull * 0.72;
    const orbitScale = 0.67;
    const spiralX = Math.cos(spin) * buttonWidth * (0.66 + seed.depth * 0.2) * spiralRadius * orbitScale;
    const spiralY =
      Math.sin(spin * 1.32) * buttonHeight * (0.92 + seed.depth * 0.24) * spiralRadius * orbitScale +
      seed.lane * buttonHeight * 0.28 * (1 - pull) * orbitScale;
    const entryX = (seed.orbit - 0.5) * bounds.width * 0.26 * (1 - fill);
    const entryY = seed.lane * bounds.height * 0.12 * (1 - fill);
    const settledX = (seed.orbit - 0.5) * buttonWidth * 0.42;
    const settledY = Math.sin(seed.orbit * Math.PI * 2) * bounds.height * 0.09;
    const targetX = mix(entryX, settledX, fill);
    const targetY = mix(entryY, settledY, fill);
    const localX = mix(spiralX, targetX, pull);
    const localY = mix(spiralY, targetY, pull);
    const breathing = Math.sin(cycle * Math.PI * 4 + seed.wobble) * 0.035;
    const radius = seed.radius * unit * (1 + converge * 0.18 + fill * 0.34 + breathing);

    return {
      id: seed.id,
      x: centerX + localX,
      y: centerY + localY,
      radius,
      mass: seed.radius * seed.radius,
      wobble: seed.wobble,
    };
  });
}
