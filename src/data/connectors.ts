
export const CENTER = { x: 500, y: 300 };
function rand(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}
export function curvePath(x1: number, y1: number, x2: number, y2: number, seed: number) {
  const dx = x2 - x1, dy = y2 - y1;

  const jx1 = (rand(seed + 1) - 0.5) * 140;
  const jy1 = (rand(seed + 2) - 0.5) * 120;
  const jx2 = (rand(seed + 3) - 0.5) * 140;
  const jy2 = (rand(seed + 4) - 0.5) * 120;

  const c1x = x1 + dx * 0.30 + jx1;
  const c1y = y1 + dy * 0.25 + jy1;
  const c2x = x1 + dx * 0.70 + jx2;
  const c2y = y1 + dy * 0.75 + jy2;

  return `M ${x1} ${y1} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${x2} ${y2}`;
}

export const TARGETS = [
  { x: 200, y: 220, seed: 1 },
  { x: 210, y: 410, seed: 2 },
  { x: 800, y: 220, seed: 3 },
  { x: 790, y: 410, seed: 4 },
];
