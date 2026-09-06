"use client";

import { Container } from "@/components/common/Container";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { cn } from "@/utils/cn";

interface StatItem {
  value: string;
  label: string;
}

const STATS: StatItem[] = [
  {
    value: "12,400+",
    label: "Cr. Worth of Inventory Sold",
  },
  {
    value: "$2.1M",
    label: "Avg. ticket size",
  },
  {
    value: "6",
    label: "Local partners",
  },
  {
    value: "$480M+",
    label: "Transacted",
  },
];

export function InternationalSales() {
  return (
    <section className="bg-white py-4 pb-2 sm:py-20 sm:pb-8 lg:py-24 lg:pb-10" aria-label="International Sales">
      <Container className="max-w-7xl">
        <div className="mx-auto max-w-[950px] text-center">
          <ScrollReveal direction="up" distance={40} duration={0.6}>
            <h2 className="qs-reg uppercase tracking-[0.05em] text-[clamp(1.75rem,3.5vw,3.125rem)] leading-tight text-[#202225]">
              INTERNATIONAL SALES
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={40} delay={0.1} duration={0.6}>
            <p className="mt-4 font-extrabold text-[20px] leading-[24px] tracking-[0.1em] uppercase text-center text-[#000000]">
              A TAILORED GO-TO-MARKET APPROACH FOR EVERY MARKET WE OPERATE IN.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={40} delay={0.2} duration={0.6}>
            <p
              className="mt-6 n-book text-[16px] leading-[24px] tracking-[0%] text-[#3C393A] text-center max-w-[1196px] mx-auto"
            >
              Our international sales division bridges borders, connecting premium Indian real estate with qualified global buyers. With a presence across key international markets, we deploy localised strategies — from market-specific positioning and regulatory navigation to cultural nuance in negotiations — ensuring every project reaches the right audience with maximum impact.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal direction="up" distance={40} delay={0.3} duration={0.6}>
          <div className="mt-16 lg:mt-20">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-0" role="list" aria-label="Key metrics">
              {STATS.map((stat, index) => (
                <div key={stat.label} className="flex items-center">
                  <div
                    className="flex flex-col items-center justify-center px-6 sm:px-10 py-6 text-center min-w-0"
                    role="listitem"
                  >
                    <div className="flex items-baseline gap-1">
                      <span className="n-bold text-[clamp(2.25rem,4vw,3.5rem)] leading-none tabular-nums text-[#8F8183]">
                        {stat.value}
                      </span>
                    </div>
                    <p className="mt-3 n-bold text-sm uppercase leading-snug tracking-wide text-[#202225] max-w-[200px]">
                      {stat.label}
                    </p>
                  </div>
                  {index < STATS.length - 1 && (
                    <span className="hidden sm:block h-8 w-px bg-[#D8D2D2] shrink-0" aria-hidden="true" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}