export function publicHref(path: string) {
  if (!path) return "";
  if (path.startsWith("http") || path.startsWith("mailto:")) return path;
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${base}${clean}`;
}
