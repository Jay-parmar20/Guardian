"use client";

import { Container } from "@/components/common/Container";
import { IconSearch } from "@/components/common/icons";
import { cn } from "@/utils/cn";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navLeft = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Global Networks", href: "/global-network" },
];

const navRight = [
  { label: "Partners & Clients", href: "/partners" },
  { label: "Our Brands", href: "/our-brand" },
  { label: "Career", href: "/career" },
];

/**
 * Primary nav base: font-family + color as fallback; size/weight overridden by navStateClass.
 * Figma nav links: Nexa Regular/Bold, 16px, color #202225.
 */
const navLinkClass =
  "n-reg not-italic text-[#202225] fs-18 lh-100 transition-opacity hover:opacity-75";

const navLinkClassMobile =
  "n-reg not-italic text-[#202225] fs-18 lh-100 transition-opacity hover:opacity-75";

const searchInputClass = cn(
  "h-8 w-full bg-transparent n-reg text-sm leading-none text-white/95 placeholder:text-white/60 focus:outline-none tracking-[-0.01em]",
);

/** Top bar "Search" -- Figma Group 63: box height 11px -> 11/11 type (paste had no font block; color kept for bar contrast). */
const searchLabelClass =
  "n-bold not-italic fs-16 lh-25 leading-none text-white/95 capitalize";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function isActiveHref(
  pathname: string,
  searchParams: ReturnType<typeof useSearchParams>,
  href: string,
) {
  const [basePath, queryString] = href.split("?");
  if (!isActivePath(pathname, basePath)) return false;
  if (!queryString) return true;

  const targetParams = new URLSearchParams(queryString);

  return Array.from(targetParams.entries()).every(([key, value]) => {
    // On `/projects` with no explicit stage query, default selection is ongoing.
    if (
      basePath === "/projects" &&
      key === "stage" &&
      value === "ongoing" &&
      searchParams.get("stage") === null
    ) {
      return true;
    }
    return searchParams.get(key) === value;
  });
}

/**
 * Active: Nexa Bold (fw-700), same colour/size.
 * Inactive: Nexa Regular (fw-400).
 * Figma nav: 16px Nexa, #202225.
 */
function navStateClass(isActive: boolean) {
  return isActive
    ? "n-bold text-[#000000] fs-18 " //if shadow is needed, add [text-shadow:0_4px_6px_rgba(0,0,0,0.3)]
    : "n-book text-[#202225] fs-18";
}

const mobileMenuTransition = {
  duration: 0.28,
  ease: [0.22, 1, 0.36, 1] as const,
};

export function Navbar() {
  const shouldReduceMotion = Boolean(useReducedMotion());
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchActive, setSearchActive] = useState(false);
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const queryKey = searchParams.toString();
  useBodyScrollLock(open);

  useEffect(() => {
    if (!open) return;
    setOpen(false);
    // Close only when navigation state changes (path/query), not when `open` toggles.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, queryKey]);

  return (
    <>
      {/*
        Search bar sits in normal document flow (not sticky) so it scrolls away;
        the main bar below is sticky and pins to the top while scrolling.
        z-[200] above the sticky header (z-50) and in-nav dropdowns so the bar stays on top if layers overlap.
      */}
      <div className="relative z-[200] w-full bg-[#8F8183] text-white/95">
        <Container className="flex h-9 items-center justify-end sm:h-[48px]">
          <form
            role="search"
            className={cn(
              "flex items-center justify-end overflow-hidden transition-[width] duration-300 ease-out",
              searchActive || searchValue
                ? "w-full max-w-[20rem]"
                : "w-[5.75rem] max-w-[5.75rem]",
            )}
            aria-label="Site search"
            onSubmit={(e) => e.preventDefault()}
          >
            <button
              type="button"
              className="inline-flex shrink-0 cursor-text items-center gap-1.5 transition-opacity hover:opacity-80"
              onClick={() => {
                setSearchActive(true);
                searchInputRef.current?.focus();
              }}
              aria-label="Activate search"
            >
              <IconSearch className="h-5 w-5 opacity-90" />
              <span
                className={cn(
                  searchLabelClass,
                  "transition-all duration-200",
                  searchActive || searchValue
                    ? "max-w-0 opacity-0"
                    : "max-w-[4rem] opacity-100",
                )}
                aria-hidden={searchActive || Boolean(searchValue)}
              >
                Search
              </span>
            </button>
            <div
              className={cn(
                "ml-2 flex min-w-0 items-center border-b border-white/65 pb-0.5 transition-all duration-1000",
                searchActive || searchValue ? "w-full opacity-100" : "w-0 opacity-0",
              )}
            >
              <label htmlFor="nav-search" className="sr-only">
                Search site
              </label>
              <input
                ref={searchInputRef}
                id="nav-search"
                name="q"
                type="search"
                placeholder="Search"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onFocus={() => setSearchActive(true)}
                onBlur={() => {
                  if (!searchValue.trim()) {
                    setSearchActive(false);
                  }
                }}
                className={searchInputClass}
              />
            </div>
          </form>
        </Container>
      </div>

      {/* Figma: fill #BCBDC0 @ 30%, background blur 18px */}
      <header
        className={cn(
          "z-50 w-full border-b border-white/25 bg-[#BCBDC0]",
          "bg-[#BCBDC0]/30 backdrop-blur-[18px] [-webkit-backdrop-filter:blur(9px)]",
          "xl:sticky xl:top-0",
        )}
      >
        <div className="relative border-t border-t-white/30 border-b border-b-white/10">
          <Container className="relative">
            {/* Mobile: centered logo, menu control on the right */}
            <div className="relative flex min-h-[3.5rem] items-center justify-between py-2 sm:min-h-[4.5rem] xl:hidden">
              <span className="w-8 shrink-0" aria-hidden />
              <Link
                href="/"
                className="shrink-0"
                aria-label="The Guardians home"
              >
                <Image
                  src="/images/Home/Logo.png"
                  alt="The Guardians Real Estate Advisory"
                  width={220}
                  height={52}
                  className="h-9 w-auto max-w-[min(60vw,180px)] object-cover sm:h-12 sm:max-w-[min(72vw,220px)]"
                  sizes="220px"
                  priority
                />
              </Link>
              <button
                type="button"
                className="relative inline-flex h-8 w-8 shrink-0 items-center justify-center rounded border border-black/10 sm:h-10 sm:w-10"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? "Close menu" : "Open menu"}
              >
                <span
                  className={cn(
                    "absolute block h-0.5 w-5 bg-[#1A1A1A] transition-all duration-200 ease-out",
                    open ? "rotate-45" : "-translate-y-2",
                  )}
                />
                <span
                  className={cn(
                    "absolute block h-0.5 w-5 bg-[#1A1A1A] transition-all duration-200 ease-out",
                    open ? "scale-x-0 opacity-0" : "opacity-100",
                  )}
                />
                <span
                  className={cn(
                    "absolute block h-0.5 w-5 bg-[#1A1A1A] transition-all duration-200 ease-out",
                    open ? "-rotate-45" : "translate-y-2",
                  )}
                />
              </button>
            </div>

            {/* Desktop: left nav | centered logo | right nav */}
            <div className="hidden h-[89px] items-stretch py-2.5 lg:py-3 xl:flex">
<nav
                className="flex min-w-0 flex-1 items-center justify-end gap-4 pr-5 lg:gap-8 lg:pr-7"
                aria-label="Primary left"
              >
                {navLeft.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      navLinkClass,
                      navStateClass(isActivePath(pathname, item.href)),
                      "shrink-0",
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <Link
                href="/"
                className="flex shrink-0 items-center justify-center self-center px-2 lg:px-5"
                aria-label="The Guardians home"
              >
                <Image
                  src="/images/Home/Logo.png"
                  alt="The Guardians Real Estate Advisory"
                  width={252}
                  height={58}
                  className="h-10 w-auto object-cover lg:h-14"
                  sizes="(min-width: 1280px) 252px, 0px"
                />
              </Link>

              <nav
                className="flex min-w-0 flex-1 items-center justify-start gap-4 pl-5 lg:gap-8 lg:pl-7"
                aria-label="Primary right"
              >
                {navRight.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      navLinkClass,
                      navStateClass(isActivePath(pathname, item.href)),
                      "shrink-0",
                      item.label === "TGREA" && "uppercase",
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </Container>

          <AnimatePresence initial={false}>
            {open ? (
              <motion.div
                id="mobile-menu"
                key="mobile-menu-panel"
                initial={
                  shouldReduceMotion ? false : { opacity: 0, y: -10, clipPath: "inset(0 0 100% 0)" }
                }
                animate={
                  shouldReduceMotion
                    ? { opacity: 1, y: 0 }
                    : { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }
                }
                exit={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, y: -8, clipPath: "inset(0 0 100% 0)" }
                }
                transition={mobileMenuTransition}
                className="absolute inset-x-0 top-full z-[60] overflow-hidden border-b border-black/[0.06] bg-[#FAFAFA] shadow-[0_12px_32px_rgba(0,0,0,0.12)] xl:hidden"
              >
                <Container className="flex max-h-[calc(100dvh-var(--site-header-height))] flex-col overflow-y-auto py-4 sm:py-5">
                  <motion.div
                    className="flex flex-col gap-2"
                    initial={shouldReduceMotion ? false : "closed"}
                    animate="open"
                    variants={{
                      open: {
                        transition: { staggerChildren: 0.045, delayChildren: 0.06 },
                      },
                      closed: {
                        transition: { staggerChildren: 0.02, staggerDirection: -1 },
                      },
                    }}
                  >
                    {navLeft.map((item) => (
                      <motion.div
                        key={item.label}
                        className="flex flex-col"
                        variants={
                          shouldReduceMotion
                            ? undefined
                            : {
                                closed: { opacity: 0, y: -6 },
                                open: { opacity: 1, y: 0 },
                              }
                        }
                      >
                        <Link
                          href={item.href}
                          className={cn(
                            navLinkClassMobile,
                            navStateClass(
                              isActiveHref(pathname, searchParams, item.href),
                            ),
                            "inline-flex min-h-[40px] items-center gap-1.5 py-0.5 sm:min-h-[44px] sm:py-1",
                          )}
                          onClick={() => setOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                  <motion.div
                    className="flex flex-col gap-2 border-t border-black/[0.06] pt-2"
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...mobileMenuTransition, delay: shouldReduceMotion ? 0 : 0.12 }}
                  >
                    {navRight.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className={cn(
                          navLinkClassMobile,
                          navStateClass(isActivePath(pathname, item.href)),
                          item.label === "TGREA" && "uppercase",
                          "inline-flex min-h-[40px] items-center py-0.5 sm:min-h-[44px] sm:py-1",
                        )}
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                </Container>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </header>
    </>
  );
}
