"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { CareerApplicationModal } from "./CareerApplicationModal";
import { markCareerModalClosed } from "./careerApplicationModalStorage";

export const OPEN_CAREER_MODAL_EVENT = "open-career-modal";

/**
 * Career application modal — opens only when triggered by the "Apply Now" button.
 */
export function AutoCareerApplicationModal() {
  const pathname = usePathname();
  const isCareerPage = pathname === "/career";

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isCareerPage) return;

    const handleOpen = () => {
      setIsOpen(true);
    };

    window.addEventListener(OPEN_CAREER_MODAL_EVENT, handleOpen);
    return () => window.removeEventListener(OPEN_CAREER_MODAL_EVENT, handleOpen);
  }, [isCareerPage]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    markCareerModalClosed();
  }, []);

  if (!isCareerPage) {
    return null;
  }

  return (
    <CareerApplicationModal isOpen={isOpen} onClose={handleClose} />
  );
}
