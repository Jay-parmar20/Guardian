import type { DeveloperStat, StatsSectionContent } from "./audience-marketing-types";

/**
 * About page stats: horizontal row with vertical separators.
 * Order matches reference: Inventory | Sq.Ft. | Projects | Units.
 */
export const ABOUT_STATS_CONTENT = {
  metrics: [
    {
      label: "Cr. Worth of Inventory Sold",
      value: "37,850 Cr+",
      countUp: { end: 37850, suffix: " Cr+" },
    },
    {
      label: "Sq. Ft. Area Developed",
      value: "2 Million+",
      countUp: { end: 2, suffix: " Million+" },
    },
    {
      label: "Projects Delivered",
      value: "307+",
      countUp: { end: 307, suffix: "+" },
    },
    {
      label: "Units Sold",
      value: "29,669",
      countUp: { end: 29669 },
    },
  ] as const satisfies readonly DeveloperStat[],
} satisfies StatsSectionContent;
