"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { VisitLeadCaptureModal } from "./VisitLeadCaptureModal";
import { hasSubmittedVisitForm } from "./visitLeadModalStorage";

const AUTO_OPEN_DELAY_MS = 5000;

/**
 * Landing-page lead capture: auto-opens after 5s unless the user has already
 * submitted the visit form (see `hasSubmittedVisitForm` in localStorage).
 */
export function HomeVisitLeadCaptureModal() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [isOpen, setIsOpen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setReady(false); // eslint-disable-line react-hooks/set-state-in-effect
      return;
    }
    setReady(true);  
    if (hasSubmittedVisitForm()) return;

    const timer = window.setTimeout(() => {
      if (!hasSubmittedVisitForm()) {
        setIsOpen(true);
      }
    }, AUTO_OPEN_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, [isHome]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  if (!isHome || !ready) {
    return null;
  }

  return (
    <VisitLeadCaptureModal isOpen={isOpen} onClose={handleClose} />
  );
}
