"use client";

import { AwardsSection } from "@/components/developer/AwardsSection";
import { DeveloperServicesSection } from "@/components/developer/DeveloperServicesSection";
import { LandmarkProjectsSection } from "@/components/developer/LandmarkProjectsSection";
import { DeveloperOurWorkSection } from "@/components/developer/DeveloperOurWorkSection";
import { OurWorkSection } from "@/components/developer/OurWorkSection";
import { PartnersSection } from "@/components/developer/PartnersSection";
import { TestimonialsSection } from "@/components/developer/TestimonialsSection";
import { AudienceHero } from "@/components/marketing/AudienceHero";
import { AudienceServicesBand } from "@/components/marketing/AudienceServicesBand";
import { HomeStickyScrollCopy } from "@/components/marketing/HomeStickyScrollCopy";
import { AudienceStatsSection } from "@/components/marketing/AudienceStatsSection";
import { WhyDevelopersChooseGuardians } from "@/components/sections/WhyDevelopersChooseGuardians";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import type { MarketingPageContent } from "@/data/audience-marketing";
import { useViewportIsMobile } from "@/hooks/useViewportIsMobile";
import { cn } from "@/utils/cn";

const audienceBandProps = { centerOnMobile: true as const };
const VIEWPORT_HEIGHT_BREAKPOINT_PX = 1024;

export function AudienceMarketingPage({
  content,
}: {
  content: MarketingPageContent;
}) {
  const isMobile = useViewportIsMobile(true, VIEWPORT_HEIGHT_BREAKPOINT_PX);

  return (
    <div
      className={cn(
        "mx-auto flex w-full min-w-0 max-w-full flex-col overflow-x-clip gap-10 md:gap-16 lg:gap-20 xl:gap-25 2xl:gap-25 mb-10 md:mb-20 lg:mb-20 2xl:mb-20",
        "[&>*]:min-w-0",
        isMobile && "gap-4 mb-4",
      )}
    >
      <AudienceHero
        key={content.hero.ariaHeadingId}
        content={content.hero}
        heightPx={content.heroHeightPx ?? 650}
        mobileHeightPx={content.heroMobileHeightPx ?? 400}
        useViewportHeightFlag
        viewportHeightBreakpointPx={VIEWPORT_HEIGHT_BREAKPOINT_PX}
        shiftUnderHeader={true}
        shiftTillSearch={false}
        shiftExtraContentTopPx={100}
        mobileShiftExtraContentTopPx={50}
        negativePadding={50}
        mobileNegativePadding={50}
      />
      <div
        className={cn(
          "flex w-full min-w-0 flex-col gap-2 md:gap-3 lg:gap-4 xl:gap-5 2xl:gap-5 mt-[15px]",
          /* Stretch bands full width so carousels are not shrink-wrapped / clipped on mobile. */
          "max-lg:items-stretch",
          isMobile && "gap-1 mt-0",
        )}
      >
        {content.stickyScroll ? <HomeStickyScrollCopy /> : null}
        {content.services ? (
          content.stickyScroll ? (
            <DeveloperServicesSection content={content.services} />
          ) : (
            <AudienceServicesBand
              content={content.services}
              isBuyer={content.hero.isBuyer}
              {...audienceBandProps}
            />
          )
        ) : null}
        {content.stickyScroll ? (
          <WhyDevelopersChooseGuardians />
        ) : null}
        {content.ourWork ? (
          content.stickyScroll ? (
            <DeveloperOurWorkSection content={content.ourWork} />
          ) : (
            <OurWorkSection
              content={content.ourWork}
              isBuyer={content.hero.isBuyer}
              {...audienceBandProps}
            />
          )
        ) : null}
        {content.landmark && !content.stickyScroll ? (
          <LandmarkProjectsSection
            content={content.landmark}
            isBuyer={content.hero.isBuyer}
            {...audienceBandProps}
          />
        ) : null}
        {content.stats && !content.stickyScroll ? (
          <AudienceStatsSection
            content={content.stats}
            isBuyer={content.hero.isBuyer}
            {...audienceBandProps}
          />
        ) : null}
        {content.partners ? (
          <>
            <ScrollReveal direction="up" distance={32} className="w-full">
              <h2
                id="partners-heading"
                className="mt-2 mx-auto max-w-[1105px] text-center uppercase text-brand-text-primary qs-reg font-normal text-[32px] sm:text-[40px] md:text-[50px] lg:text-[52px] leading-[1.1] tracking-[0.05em] lg:whitespace-nowrap"
              >
                {content.partners.headlineLine1.trim()}
              </h2>
            </ScrollReveal>
            <PartnersSection
              content={content.partners}
              isBuyer={content.hero.isBuyer}
            />
          </>
        ) : null}
        {content.testimonials && !content.stickyScroll ? (
          <TestimonialsSection
            content={content.testimonials}
            isBuyer={content.hero.isBuyer}
            {...audienceBandProps}
          />
        ) : null}
        {content.awards ? (
          <AwardsSection content={content.awards} isBuyer={content.hero.isBuyer} />
        ) : null}
      </div>
    </div>
  );
}
