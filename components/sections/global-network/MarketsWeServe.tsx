"use client";

import { Container } from "@/components/common/Container";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import Image from "next/image";

interface MarketCard {
  imageSrc: string;
  imageAlt: string;
  countryName: string;
}

const MARKETS: MarketCard[] = [
  {
    imageSrc: "/images/global-network/canada.png",
    imageAlt: "Canada",
    countryName: "CANADA",
  },
  {
    imageSrc: "/images/global-network/singapore.png",
    imageAlt: "Singapore",
    countryName: "SINGAPORE",
  },
  {
    imageSrc: "/images/global-network/austraila.png",
    imageAlt: "Australia",
    countryName: "AUSTRALIA",
  },
];

function MarketCardItem({ market }: { market: MarketCard }) {
  return (
    <article
      className="relative flex-shrink-0"
      style={{ width: "385px", height: "326px" }}
      aria-hidden="true"
    >
      <div className="relative h-full w-full overflow-hidden">
        <Image
          src={market.imageSrc}
          alt={market.imageAlt}
          fill
          className="object-cover object-center"
          sizes="385px"
        />
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <span className="font-extrabold text-[20px] leading-[24px] tracking-[0.1em] text-white uppercase text-center">
            {market.countryName}
          </span>
        </div>
      </div>
    </article>
  );
}

export function MarketsWeServe() {
  const doubled = [...MARKETS, ...MARKETS];

  return (
    <section className="bg-white mt-6 sm:mt-0 py- sm:py-20 lg:py-24 overflow-hidden" aria-label="Markets We Serve">
      <Container className="max-w-full px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" distance={40} duration={0.6}>
          <h2 className="qs-reg text-center text-[clamp(1.75rem,3.5vw,3.125rem)] uppercase leading-tight tracking-[0.05em] text-[#202225]">
            MARKETS WE SERVE
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="up" distance={40} delay={0.15} duration={0.6}>
          <div className="mt-10 lg:mt-14">
            <div
              className="flex gap-6"
              role="list"
              aria-label="Markets we serve"
              style={{
                animation: "scroll-markets 30s linear infinite",
                width: "max-content",
              }}
            >
              {doubled.map((market, i) => (
                <MarketCardItem key={`${market.countryName}-${i}`} market={market} />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </Container>

      <style>{`
        @keyframes scroll-markets {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
