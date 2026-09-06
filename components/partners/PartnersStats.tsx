"use client";

import { AudienceStatsSection } from "@/components/marketing/AudienceStatsSection";
import type { StatsSectionContent } from "@/data/audience-marketing-types";

const STATS_CONTENT: StatsSectionContent = {
  metrics: [
    { label: "Cr. Worth of Inventory Sold", value: "37,850" },
    { label: "Sq. Ft. Area Developed", value: "2 Million+" },
    { label: "Projects Delivered", value: "307+" },
    { label: "Units Sold", value: "29,669" },
  ],
};

export function PartnersStats() {
  return (
    <section
      className="bg-brand-background pt-4 pb-12 sm:pt-5 sm:pb-25"
      aria-label="Key metrics"
    >
      <AudienceStatsSection content={STATS_CONTENT} />
    </section>
  );
}
