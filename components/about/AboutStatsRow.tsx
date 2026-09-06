"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";
import { cn } from "@/utils/cn";
import { useInView } from "framer-motion";
import { useRef } from "react";
import type { DeveloperStat, StatsSectionContent } from "@/data/audience-marketing-types";

function formatCountUpValue(count: number, config: { end: number; prefix?: string; suffix?: string; unit?: string; decimals?: number }): string {
  const { end, prefix = "", suffix = "", unit = "", decimals } = config;
  const capped = Math.min(count, end);
  let numeric: string;

  if (decimals !== undefined) {
    numeric = capped.toFixed(decimals);
  } else if (end >= 1000) {
    numeric = Math.round(capped).toLocaleString("en-US");
  } else {
    numeric = String(Math.round(capped));
  }

  return `${prefix}${numeric}${suffix}${unit}`;
}

function StatItem({
  stat,
  isInView,
  index,
}: {
  stat: DeveloperStat;
  isInView: boolean;
  index: number;
}) {
  const countUp = stat.countUp;
  const animate = Boolean(countUp) && isInView;
  const count = useCountUp(countUp?.end ?? 0, animate, {
    duration: 1800,
    delay: index * 100,
  });
  const displayValue =
    countUp && animate
      ? formatCountUpValue(count, countUp)
      : stat.value;

  return (
    <div className="text-center">
      <p className={cn("n-bold tabular-nums text-center text-brand-footer leading-none tracking-[-0.03em] text-[clamp(1.35rem,5.5vw,2rem)] text-balance whitespace-normal sm:text-4xl md:text-[clamp(2.25rem,4vw,2.85rem)] md:tracking-[-0.04em]", stat.customClass)}>
        {displayValue}
      </p>
      <p className="mt-1 n-bold font-bold text-[16px] lh-20 text-center normal-case tracking-normal leading-snug text-pretty text-brand-footer">
        {stat.label}
      </p>
    </div>
  );
}

export function AboutStatsRow({ content }: { content: StatsSectionContent }) {
  const ref = useRef<HTMLDivElement>(null);
  const metrics = content.metrics;
  const hasAnimatedStats = metrics.some((metric) => metric.countUp);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 0px -12% 0px",
    amount: 0.2,
  });

  return (
    <div ref={ref} className="flex flex-col items-center justify-center gap-4 py-8 sm:flex-row sm:flex-nowrap sm:gap-10 md:gap-14 lg:gap-16 lg:py-10">
      {metrics.map((stat, idx) => (
        <ScrollReveal key={stat.label} direction="up" distance={24} delay={idx * 0.05}>
          <div className={cn(
            "flex items-center gap-6 sm:gap-10 md:gap-14 lg:gap-16",
            idx > 0 && "md:before:absolute md:before:left-0 md:before:top-1/2 md:before:z-10 md:before:h-5.5 md:before:w-px md:before:-translate-y-1/2 md:before:bg-[#ccc] md:before:content-['']"
          )}>
            {idx > 0 && (
              <div className="hidden sm:block h-10 w-px bg-[#ccc]" />
            )}
            <StatItem
              stat={stat}
              isInView={hasAnimatedStats ? isInView : false}
              index={idx}
            />
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
