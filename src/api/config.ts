/** Laravel app origin (no `/api`) — joins relative `file_url` paths. */
const DEFAULT_API_ORIGIN =
  process.env.NODE_ENV === "development"
    ? "http://127.0.0.1:8000"
    : "http://srv1662424.hstgr.cloud";

export const PUBLIC_FILES_ORIGIN =
  process.env.NEXT_PUBLIC_API_ORIGIN ?? DEFAULT_API_ORIGIN;

/** Laravel API root — axios default, SSR, and Next `/gw-api` rewrite destination. */
export const API_BASE_URL = `${PUBLIC_FILES_ORIGIN}/api`;

/**
 * Same-origin prefix when the **page is HTTPS** but the API is **HTTP**.
 * Browsers block that combination (active mixed content); the app calls `/gw-api/…`
 * instead and Next rewrites to `API_BASE_URL` (see `next.config.ts`).
 */
export const BROWSER_HTTP_API_PROXY_PREFIX = "/gw-api";

/**
 * Axios `baseURL`: direct Hostinger URL everywhere except HTTPS pages in the browser
 * with an HTTP API (mixed-content case → `/gw-api`).
 */
export function resolveAxiosBaseUrl(): string {
  if (typeof window === "undefined") {
    return API_BASE_URL;
  }
  try {
    const api = new URL(API_BASE_URL);
    if (window.location.protocol === "https:" && api.protocol === "http:") {
      return BROWSER_HTTP_API_PROXY_PREFIX;
    }
  } catch {
    /* ignore */
  }
  return API_BASE_URL;
}

export const AXIOS_TIMEOUT_MS = 30_000;
