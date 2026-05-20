/** Merge conditional class names safely */
export function cn(...inputs: (string | undefined | null | false)[]): string {
  return inputs.filter(Boolean).join(' ');
}

/** Pad a number with a leading zero */
export function pad(n: number): string {
  return n.toString().padStart(2, '0');
}

/** Slugify a string for URL use */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/** Clamp a number between min and max */
export function clamp(val: number, min: number, max: number): number {
  return Math.min(Math.max(val, min), max);
}

/** Map a value from one range to another */
export function mapRange(
  val: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number {
  return ((val - inMin) / (inMax - inMin)) * (outMax - outMin) + outMin;
}
