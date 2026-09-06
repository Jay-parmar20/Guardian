"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";
import { useCallback, useEffect, useId, useRef } from "react";
import { useBodyScrollLock } from "@/components/marketing/visit-lead-modal/useBodyScrollLock";
import { useFocusTrap } from "@/components/marketing/visit-lead-modal/useFocusTrap";
import { CareerApplicationForm } from "./CareerApplicationForm";
import Image from "next/image";

const EASE_SMOOTH: [number, number, number, number] = [0.22, 1, 0.36, 1];

const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: EASE_SMOOTH },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.4, ease: EASE_SMOOTH },
  },
};

const panelVariants: Variants = {
  hidden: { opacity: 0, y: "72vh" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: EASE_SMOOTH },
  },
  exit: {
    opacity: 0,
    y: "28vh",
    transition: { duration: 0.48, ease: EASE_SMOOTH },
  },
};

export type CareerApplicationModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function CareerApplicationModal({
  isOpen,
  onClose,
}: CareerApplicationModalProps) {
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useBodyScrollLock(isOpen);
  useFocusTrap(panelRef, isOpen);

  const handleSuccess = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen || !panelRef.current) return;
    const timer = window.setTimeout(() => {
      const firstField = panelRef.current?.querySelector<HTMLElement>(
        'input[name="firstName"]',
      );
      (firstField ?? closeButtonRef.current)?.focus();
    }, 480);
    return () => window.clearTimeout(timer);
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <>
          {/* Overlay backdrop */}
          <motion.button
            key="career-overlay"
            type="button"
            aria-label="Close dialog backdrop"
            className="fixed inset-0 z-[100] cursor-default bg-[#161616]/50 backdrop-blur-sm"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
          />

          {/* Panel container */}
          <div
            key="career-stage"
            className="pointer-events-none fixed inset-0 z-[101] flex items-center justify-center px-4 py-8 sm:px-6"
            aria-hidden
          >
            <motion.div
              ref={panelRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="pointer-events-auto relative flex max-h-[min(90vh,700px)] w-full max-w-[800px] flex-col overflow-hidden rounded-2xl bg-white shadow-[0_32px_64px_-12px_rgba(22,22,22,0.22)] ring-1 ring-black/[0.06] md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                className="absolute right-4 top-5 z-10 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-black/[0.04] text-[#202225] transition-colors hover:bg-black/[0.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f07c61] md:right-4 md:top-4"
                aria-label="Close career application dialog"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M0.0175781 0L15.6565 15.6389"
                    stroke="currentColor"
                    strokeWidth="1.42224"
                    strokeLinecap="round"
                  />
                  <path
                    d="M15.6387 0L-0.000211952 15.6389"
                    stroke="currentColor"
                    strokeWidth="1.42224"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              {/* LEFT SIDE — Promo content with form-bg.png background */}
              <div className="relative flex w-full shrink-0 flex-col items-center justify-center px-6 py-8 md:w-[40%] md:px-6 md:py-10">
                {/* Background image */}
                <Image
                  src="/images/career/form-bg.png"
                  alt=""
                  fill
                  className="object-cover object-right blur-[2px]"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />

                <div className="relative z-10 text-center">
                  <h2
                    id={titleId}
                    className="qs-reg text-[clamp(1.3rem,3.5vw,1.875rem)] uppercase leading-[1.08] tracking-[0.05em] text-brand-text-primary"
                  >
                    Come Grow
                    <br />
                    With Us
                  </h2>
                  <p className="mt-3 n-book text-xs leading-relaxed text-[#161616] sm:text-sm">
                    The Guardians provide endless opportunities for professional
                    growth in promising times like these. A stimulating work
                    environment, rich and diverse exposure &amp; inspiring
                    leadership are a few reasons that make The Guardians a great
                    place to work.
                  </p>
                </div>
              </div>

              {/* RIGHT SIDE — Application form */}
              <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-5 sm:px-5 sm:py-6 scrollbar-none">
                <CareerApplicationForm onSuccess={handleSuccess} />
              </div>
            </motion.div>
          </div>
        </>
      ) : null}
    </AnimatePresence>
  );
}
