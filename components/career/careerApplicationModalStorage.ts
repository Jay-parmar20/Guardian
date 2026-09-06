const CAREER_MODAL_KEY = "hasClosedCareerApplicationModal";

export function markCareerModalClosed(): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(CAREER_MODAL_KEY, "true");
  } catch {
    // private mode / quota
  }
}
