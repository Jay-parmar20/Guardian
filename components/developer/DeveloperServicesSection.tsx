"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { StaggerContainer } from "@/components/animations/StaggerContainer";
import { Container } from "@/components/common/Container";
import { ArrowIconLink } from "@/components/ui/ArrowIconLink";
import type { ServicesBandContent } from "@/data/audience-marketing";
import { DEVELOPER_SERVICES } from "@/data/audience-marketing-shared";
import { marketingClasses } from "@/styles/marketingClasses";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function DeveloperServicesSection({
  content,
}: {
  content: ServicesBandContent;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [gapPx, setGapPx] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const total = content.cards.length;
  const knowMoreHref = DEVELOPER_SERVICES;

  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      const first = track?.firstElementChild as HTMLElement | null;
      if (!track || !first) return;
      const styles = window.getComputedStyle(track);
      const gap = Number.parseFloat(styles.columnGap || styles.gap || "0") || 0;
      setCardWidth(first.offsetWidth);
      setGapPx(gap);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [total]);

  useEffect(() => {
    if (currentIndex >= total) {
      setCurrentIndex(Math.max(0, total - 1));
    }
  }, [currentIndex, total]);

  const goPrev = () => setCurrentIndex((idx) => Math.max(0, idx - 1));
  const goNext = () =>
    setCurrentIndex((idx) => Math.min(Math.max(0, total - 1), idx + 1));

  const stepPx = cardWidth + gapPx;

  return (
    <section
      aria-labelledby="dev-services-heading"
      className="flex w-full min-w-0 flex-col"
    >
      <Container className="w-full min-w-0 py-0">
        {/* Stats row */}
        <ScrollReveal direction="up" distance={24}>
          <div className="flex flex-col items-center justify-center gap-4 py-4 sm:flex-row sm:flex-nowrap sm:gap-10 md:gap-14 lg:gap-16 lg:py-6">
            {[
              { value: "37,850", label: "Cr. Worth of Inventory Sold" },
              { value: "2 Million+", label: "Sq. Ft. Area Developed" },
              { value: "307+", label: "Projects Delivered" },
              { value: "29,669", label: "Units Sold" },
            ].map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-6 sm:gap-10 md:gap-14 lg:gap-16">
                {i > 0 && (
                  <div className="hidden sm:block h-10 w-px bg-[#ccc]" />
                )}
                <div className="text-center">
                  <div className={cn("n-bold tabular-nums text-center text-brand-footer leading-none tracking-[-0.03em] text-[clamp(1.35rem,5.5vw,2rem)] sm:text-4xl md:text-[clamp(2.25rem,4vw,2.85rem)] md:tracking-[-0.04em]")}>
                    {stat.value}
                  </div>
                  <div className="mt-1 n-book text-[11px] leading-snug text-[#666] sm:text-[12px] lg:text-[13px]">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <StaggerContainer
          className="flex flex-col items-center gap-6 "
          staggerChildren={0.12}
        >
          <ScrollReveal direction="up" distance={36}>
            <h2
              id="dev-services-heading"
              className={cn(
                marketingClasses.headingDisplay,
                "text-center",
              )}
            >
              {content.sectionTitle}
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.08} distance={28}>
            <p className="mx-auto text-justify [text-align-last:center] n-reg text-[18px] leading-[22px] max-w-[1196px] text-[#555]">
              {content.description}
            </p>
          </ScrollReveal>
        </StaggerContainer>

        <div className="relative mt-10 w-full md:mt-14">
          {/* Desktop: arrows outside cards */}
          <button
            type="button"
            aria-label="Previous service"
            onClick={goPrev}
            disabled={currentIndex === 0}
            className={cn(
              "absolute left-0 top-1/2 z-20 hidden -translate-x-full -translate-y-1/2 lg:flex",
              "h-12 w-12 items-center justify-center rounded-full border border-[#ccc] bg-transparent",
              "text-[#555] transition-colors hover:border-[#999] hover:text-[#111]",
              "disabled:cursor-not-allowed disabled:opacity-30",
            )}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next service"
            onClick={goNext}
            disabled={currentIndex === total - 1}
            className={cn(
              "absolute right-0 top-1/2 z-20 hidden -translate-y-1/2 translate-x-full lg:flex",
              "h-12 w-12 items-center justify-center rounded-full border border-[#ccc] bg-transparent",
              "text-[#555] transition-colors hover:border-[#999] hover:text-[#111]",
              "disabled:cursor-not-allowed disabled:opacity-30",
            )}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Cards track */}
          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex gap-5"
              style={{
                transform: `translate3d(-${currentIndex * stepPx}px, 0, 0)`,
                transition: "transform 700ms cubic-bezier(0.22, 0.61, 0.36, 1)",
              }}
            >
              {content.cards.map((card) => (
                <article
                  key={card.id}
                  className="relative flex min-w-0 shrink-0 flex-col bg-[#f5f5f5] w-full sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2*1.25rem)/3)]"
                >
                  <div className="relative w-full overflow-hidden bg-neutral-200 h-[220px] sm:h-[260px] lg:h-[280px]">
                    <Image
                      src={card.src}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 90vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="n-bold fs-18 lh-24 uppercase tracking-wide text-[#161616]">
                      {card.title}
                    </h3>
                    <div className="mt-12 flex flex-1 items-end gap-3">
                      <p className="n-book fs-14 lh-20 text-[#444] line-clamp-2">
                        {card.description}
                      </p>
                      <ArrowIconLink
                        href={knowMoreHref}
                        aria-label={`${card.title} - ${content.knowMoreLabel}`}
                        className="!h-8 !w-8 shrink-0 lg:!h-9 lg:!w-9"
                      />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Mobile: arrows below cards */}
          <div className="mt-6 flex items-center justify-center gap-4 lg:hidden">
            <button
              type="button"
              aria-label="Previous service"
              onClick={goPrev}
              disabled={currentIndex === 0}
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full border border-[#ccc] bg-transparent",
                "text-[#555] transition-colors hover:border-[#999] hover:text-[#111]",
                "disabled:cursor-not-allowed disabled:opacity-30",
              )}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next service"
              onClick={goNext}
              disabled={currentIndex === total - 1}
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full border border-[#ccc] bg-transparent",
                "text-[#555] transition-colors hover:border-[#999] hover:text-[#111]",
                "disabled:cursor-not-allowed disabled:opacity-30",
              )}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <ScrollReveal direction="up" delay={0.2} distance={24}>
          <div className="mt-10 flex justify-center lg:mt-14">
            <a
              href={knowMoreHref}
              className={cn(
                "inline-flex items-center gap-2 rounded-full bg-[#161616] px-8 py-3.5",
                "n-bold fs-14 uppercase tracking-widest text-white",
                "transition-all hover:bg-[#333]",
              )}
            >
              {content.knowMoreLabel}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
