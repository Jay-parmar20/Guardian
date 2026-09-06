import { MarketingPageHero } from "@/components/marketing/MarketingPageHero";
import type { Metadata } from "next";
import { AboutPageContent } from "@/components/about/AboutPageContent";

export const metadata: Metadata = {
  title: { absolute: "About | The Guardians" },
  description:
    "Who we are, our brand promise, leadership, and partner brands.",
};

export default function AboutPage() {
  return (
    <div className="min-w-0 bg-white text-[#2a2626] md:mb-25">
      <section
        id="about"
        className="border-b border-[#d8d2d2] bg-[linear-gradient(180deg,#fbfbfb_0%,#f7f5f5_50%,#efeded_100%)] "
      >
        <MarketingPageHero heroId="about" heightPx={600} mobileHeightPx={400} useViewportHeightFlag viewportHeightBreakpointPx={1024} shiftUnderHeader={true} shiftTillSearch={false} shiftExtraContentTopPx={44} negativePadding={16} />
      </section>

      <AboutPageContent />
    </div>
  );
}
