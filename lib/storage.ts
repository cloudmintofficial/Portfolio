/** Session/local storage helpers — safe for SSR */

const VISITED_KEY = 'cm_visited';

/** Returns true if the user has visited before this browser session */
export function hasVisited(): boolean {
  if (typeof window === 'undefined') return false;
  return !!sessionStorage.getItem(VISITED_KEY);
}

/** Mark the current session as visited (skip preloader on next navigation) */
export function markVisited(): void {
  if (typeof window === 'undefined') return;
  sessionStorage.setItem(VISITED_KEY, '1');
}

/** Clear visited flag (useful for testing) */
export function clearVisited(): void {
  if (typeof window === 'undefined') return;
  sessionStorage.removeItem(VISITED_KEY);
}
