// Base-aware URL helpers for project-page deploys (e.g. /personal-website/).

const baseRaw = import.meta.env.BASE_URL || '/';
// Normalize: ensure no trailing slash for concatenation, ensure leading slash.
const base = baseRaw.endsWith('/') ? baseRaw.slice(0, -1) : baseRaw;

/**
 * Convert an internal route like '/sobre' or '/blog/foo' into a base-aware href
 * such as '/personal-website/sobre' or '/personal-website/blog/foo'.
 * External URLs (http://, mailto:, etc.) and relative paths are returned unchanged.
 */
export function link(path: string): string {
  if (!path.startsWith('/')) return path;
  const joined = `${base}${path}`;
  return joined || '/';
}

/**
 * Strip the base prefix from a pathname (e.g., from Astro.url.pathname),
 * returning a path normalized to the site root for routing logic.
 */
export function stripBase(pathname: string): string {
  if (!base) return pathname;
  if (pathname === base) return '/';
  if (pathname.startsWith(`${base}/`)) {
    return pathname.slice(base.length);
  }
  return pathname;
}
