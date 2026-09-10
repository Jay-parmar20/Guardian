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
		imageSrc: "/images/global-network/Australia.jpg",
		imageAlt: "Australia",
		countryName: "AUSTRALIA",
	},
	{
		imageSrc: "/images/global-network/Canada.jpg",
		imageAlt: "Canada",
		countryName: "CANADA",
	},
	{
		imageSrc: "/images/global-network/Qatar.jpg",
		imageAlt: "Qatar",
		countryName: "QATAR",
	},
	{
		imageSrc: "/images/global-network/Saudi%20Arabia.jpg",
		imageAlt: "Saudi Arabia",
		countryName: "SAUDI ARABIA",
	},
	{
		imageSrc: "/images/global-network/Singapore.jpg",
		imageAlt: "Singapore",
		countryName: "SINGAPORE",
	},
	{
		imageSrc: "/images/global-network/UAE.jpg",
		imageAlt: "United Arab Emirates",
		countryName: "UAE",
	},
	{
		imageSrc: "/images/global-network/UK.jpg",
		imageAlt: "United Kingdom",
		countryName: "UK",
	},
	{
		imageSrc: "/images/global-network/usa.jpg",
		imageAlt: "United States of America",
		countryName: "USA",
	},
];

function MarketCardItem({ market }: { market: MarketCard }) {
	return (
		<article
			className="
		relative
		h-[220px]
		w-[260px]
		shrink-0
		overflow-hidden
		bg-[#DBDBDB]

		sm:h-[280px]
		sm:w-[330px]

		lg:h-[326px]
		lg:w-[385px]
	"
			role="listitem"
		>
			<Image
				src={market.imageSrc}
				alt={market.imageAlt}
				fill
				draggable={false}
				className="select-none object-cover object-center"
				sizes="(max-width: 639px) 260px, (max-width: 1023px) 330px, 385px"
			/>

			{/* Black overlay — Figma 30% */}
			<div
				aria-hidden="true"
				className="
		pointer-events-none
		absolute
		inset-0
		z-10
		bg-[#000000]
		opacity-30
	"
			/>

			{/* Country name */}
			<div className="absolute inset-0 z-20 flex items-center justify-center px-8">
				<span
					className="
		n-bold
		w-full
		cursor-text
		select-text
		text-center
		
		font-extrabold
		uppercase
		text-[16px]
leading-[21px]

sm:text-[18px]
sm:leading-[22px]

lg:text-[20px]
lg:leading-[24px]
		tracking-[0.1em]
		text-white
	"
				>
					{market.countryName}
				</span>
			</div>
		</article>
	);
}

export function MarketsWeServe() {
	return (
		<section
			className="
		mt-12
		w-full
		overflow-hidden
		bg-white
		py-14

		sm:mt-0
		sm:py-20

		lg:py-25
	"
			aria-label="Markets We Serve"
		>
			{/* Heading stays aligned with website container */}
			<Container>
				<ScrollReveal direction="up" distance={40} duration={0.6}>
					<h2
						className="
		qs-reg
		text-center
		text-[30px]
		uppercase
		leading-[36px]
		tracking-[0.05em]
		text-[#202225]

		sm:text-[clamp(1.75rem,3.5vw,3.125rem)]
		sm:leading-tight
	"
					>
						MARKETS WE SERVE
					</h2>
				</ScrollReveal>
			</Container>

			{/* Full-width carousel */}
			<ScrollReveal direction="up" distance={40} delay={0.15} duration={0.6}>
				<div className="mt-8 w-full overflow-hidden lg:mt-12.5">
					<div
						className="markets-track flex w-max gap-6"
						role="list"
						aria-label="Markets we serve"
					>
						{/* First set */}
						<div className="flex shrink-0 gap-6">
							{MARKETS.map((market) => (
								<MarketCardItem
									key={`first-${market.countryName}`}
									market={market}
								/>
							))}
						</div>

						{/* Duplicate set for seamless loop */}
						<div className="flex shrink-0 gap-6" aria-hidden="true">
							{MARKETS.map((market) => (
								<MarketCardItem
									key={`second-${market.countryName}`}
									market={market}
								/>
							))}
						</div>
					</div>
				</div>
			</ScrollReveal>

			<style>{`
				@keyframes scroll-markets {
					from {
						transform: translate3d(0, 0, 0);
					}

					to {
						transform: translate3d(
							calc(-50% - 0.75rem),
							0,
							0
						);
					}
				}

				.markets-track {
					animation: scroll-markets 30s linear infinite;
					will-change: transform;
				}

				@media (prefers-reduced-motion: reduce) {
					.markets-track {
						animation: none;
					}
				}
			`}</style>
		</section>
	);
}
