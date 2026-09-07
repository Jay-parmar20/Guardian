"use client";

import { Container } from "@/components/common/Container";
import { RoundIconButton } from "@/components/ui/RoundIconButton";
import { OPEN_CAREER_MODAL_EVENT } from "@/components/career/AutoCareerApplicationModal";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type Opportunity = {
  id: string;
  title: string;
  type: string;
  description: string;
  location: string;
  href: string;
};

const OPPORTUNITIES: Opportunity[] = [
  {
    id: "1",
    title: "Financial Analyst",
    type: "Remote",
    description:
      "Analyze financial data, prepare reports, and support strategic decision-making for real estate investments.",
    location: "Andheri East, Mumbai",
    href: "/contact",
  },
  {
    id: "2",
    title: "Senior Sales Manager",
    type: "Full-time",
    description:
      "Lead sales teams, drive revenue growth, and manage key client relationships across premium real estate projects.",
    location: "Bandra West, Mumbai",
    href: "/contact",
  },
  {
    id: "3",
    title: "Real Estate Analyst",
    type: "Full-time",
    description:
      "Conduct market research, valuation analysis, and due diligence for residential and commercial properties.",
    location: "Powai, Mumbai",
    href: "/contact",
  },
  {
    id: "4",
    title: "Marketing Strategist",
    type: "Hybrid",
    description:
      "Develop and execute marketing campaigns for premium real estate brands across digital and offline channels.",
    location: "Worli, Mumbai",
    href: "/contact",
  },
  {
    id: "5",
    title: "Channel Partner Manager",
    type: "Full-time",
    description:
      "Build and manage channel partner networks, drive business development, and maximize project reach.",
    location: "Pune, Maharashtra",
    href: "/contact",
  },
  {
    id: "6",
    title: "HR Business Partner",
    type: "Full-time",
    description:
      "Partner with leadership to drive talent strategy, employee engagement, and organizational development.",
    location: "Andheri East, Mumbai",
    href: "/contact",
  },
  {
    id: "7",
    title: "Digital Marketing Lead",
    type: "Remote",
    description:
      "Own digital marketing strategy including SEO, SEM, social media, and performance marketing for real estate.",
    location: "BKC, Mumbai",
    href: "/contact",
  },
  {
    id: "8",
    title: "Operations Executive",
    type: "Full-time",
    description:
      "Streamline operations, manage vendor relationships, and ensure seamless project execution across sites.",
    location: "Thane, Maharashtra",
    href: "/contact",
  },
];

const CAROUSEL_PREV = "/images/leftcarousel.svg";
const CAROUSEL_NEXT = "/images/rightcarousel.svg";

function IconMapPin({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21s6-5.336 6-11.25a6 6 0 1 0-12 0C6 15.664 12 21 12 21Z"
      />
      <circle cx="12" cy="9.75" r="2.25" />
    </svg>
  );
}

function OpportunityCard({ job }: { job: Opportunity }) {
  return (
    <article className="flex h-full flex-col bg-[#F5F5F5] p-4">
      <h3 className="n-bold text-base text-[#202225]">
        {job.title}
      </h3>
      <span className="mt-1 n-reg text-xs text-brand-text-secondary">
        {job.type}
      </span>
      <p className="mt-2 flex-1 n-reg text-sm leading-relaxed text-[#555]">
        {job.description}
      </p>
      <div className="mt-3 flex items-center gap-1.5">
        <IconMapPin className="h-4 w-4 shrink-0 text-brand-text-secondary" />
        <span className="n-reg text-xs text-brand-text-secondary">
          {job.location}
        </span>
      </div>
      <button
        type="button"
        onClick={() => window.dispatchEvent(new Event(OPEN_CAREER_MODAL_EVENT))}
        className="mt-4 flex w-full items-center justify-center gap-2 border border-[#202225] bg-[#202225] py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-transparent hover:text-[#202225]"
      >
        Apply Now
        <svg
          viewBox="0 0 14 15"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-3.5 w-3.5"
          aria-hidden
        >
          <path d="M0.443481 1H13.0065V13.563" />
          <line x1="13.2702" y1="1.2701" x2="0.707171" y2="13.8331" />
        </svg>
      </button>
    </article>
  );
}

export function CurrentOpportunity() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [itemsPerView, setItemsPerView] = useState(4);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const syncExact = () => {
      if (window.innerWidth >= 1024) setItemsPerView(4);
      else if (window.innerWidth >= 640) setItemsPerView(2);
      else setItemsPerView(1);
    };
    syncExact();
    mq.addEventListener("change", syncExact);
    window.addEventListener("resize", syncExact);
    return () => {
      mq.removeEventListener("change", syncExact);
      window.removeEventListener("resize", syncExact);
    };
  }, []);

  const maxIndex = Math.max(0, OPPORTUNITIES.length - itemsPerView);

  const goPrev = useCallback(() => {
    setCurrentIndex((i) => Math.max(0, i - 1));
  }, []);

  const goNext = useCallback(() => {
    setCurrentIndex((i) => Math.min(maxIndex, i + 1));
  }, [maxIndex]);

  const totalPages = maxIndex + 1;

  return (
    <section
      className="py-8 sm:py-10 lg:py-12"
      aria-labelledby="current-opportunity-heading"
    >
      <Container>
        {/* Heading row: centered heading + arrows on right */}
        <div className="relative flex items-center justify-center">

          <h2
            id="current-opportunity-heading"
            className="qs-reg text-center text-[clamp(1.5rem,3vw,2rem)] uppercase leading-tight tracking-[0.04em] text-[#202225]"
          >
            Current Opportunity
          </h2>

          {/* Navigation arrows — desktop only, positioned right */}
          <div className="absolute right-0 hidden items-center gap-2 lg:flex">
            <RoundIconButton
              label="Previous opportunities"
              onClick={goPrev}
              disabled={currentIndex === 0}
              className="border border-black/15"
            >
              <Image
                src={CAROUSEL_PREV}
                alt=""
                width={40}
                height={40}
                className="object-cover"
              />
            </RoundIconButton>
            <RoundIconButton
              label="Next opportunities"
              onClick={goNext}
              disabled={currentIndex >= maxIndex}
              className="border border-black/15"
            >
              <Image
                src={CAROUSEL_NEXT}
                alt=""
                width={40}
                height={40}
                className="object-cover"
              />
            </RoundIconButton>
          </div>
        </div>

        {/* Carousel */}
        <div className="mt-4 overflow-hidden lg:mt-6">
          <div
            ref={trackRef}
            className="flex gap-2 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {OPPORTUNITIES.map((job) => (
              <div
                key={job.id}
                className="min-w-0 shrink-0"
                style={{ width: `calc(${100 / itemsPerView}% - ${(itemsPerView - 1) * 8 / itemsPerView}px)` }}
              >
                <OpportunityCard job={job} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile arrows + pagination dots */}
        <div className="mt-8 flex flex-col items-center gap-5 sm:mt-10">
          {/* Mobile arrows */}
          <div className="flex items-center gap-2 lg:hidden">
            <RoundIconButton
              label="Previous opportunities"
              onClick={goPrev}
              disabled={currentIndex === 0}
              className="border border-black/15"
            >
              <Image
                src={CAROUSEL_PREV}
                alt=""
                width={40}
                height={40}
                className="object-cover"
              />
            </RoundIconButton>
            <RoundIconButton
              label="Next opportunities"
              onClick={goNext}
              disabled={currentIndex >= maxIndex}
              className="border border-black/15"
            >
              <Image
                src={CAROUSEL_NEXT}
                alt=""
                width={40}
                height={40}
                className="object-cover"
              />
            </RoundIconButton>
          </div>

          {/* Pagination dots */}
          <div className="flex gap-2" role="tablist" aria-label="Opportunity pages">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === currentIndex}
                aria-label={`Page ${i + 1}`}
                onClick={() => setCurrentIndex(i)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  i === currentIndex
                    ? "w-6 bg-[#202225]"
                    : "w-2 bg-[#D4D4D4] hover:bg-[#aaa]",
                )}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
