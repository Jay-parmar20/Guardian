"use client";

import { Container } from "@/components/common/Container";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface StatItem {
	end: number;
	prefix?: string;
	suffix?: string;
	decimals?: number;
	label: string;
}

const STATS: StatItem[] = [
	{
		end: 12400,
		suffix: "+",
		label: "Cr. Worth of Inventory Sold",
	},
	{
		end: 2.1,
		prefix: "$",
		suffix: "M",
		decimals: 1,
		label: "Avg. ticket size",
	},
	{
		end: 6,
		label: "Local partners",
	},
	{
		end: 480,
		prefix: "$",
		suffix: "M+",
		label: "Transacted",
	},
];

function AnimatedStatValue({
	stat,
	animate,
	index,
}: {
	stat: StatItem;
	animate: boolean;
	index: number;
}) {
	const count = useCountUp(stat.end, animate, {
		duration: 1800,
		delay: index * 100,
	});

	let numericValue: string;

	if (stat.decimals !== undefined) {
		numericValue = count.toFixed(stat.decimals);
	} else if (stat.end >= 1000) {
		numericValue = Math.round(count).toLocaleString("en-US");
	} else {
		numericValue = Math.round(count).toString();
	}

	return (
		<>
			{stat.prefix ?? ""}
			{numericValue}
			{stat.suffix ?? ""}
		</>
	);
}

export function InternationalSales() {
	const statsRef = useRef<HTMLDivElement>(null);

	const statsInView = useInView(statsRef, {
		once: true,
		amount: 0.25,
	});

	return (
		<section className="bg-white py-25" aria-label="International Sales">
			<Container>
				<div className="mx-auto text-center md:mb-25">
					<ScrollReveal direction="up" distance={40} duration={0.6}>
						<h2 className="qs-reg mb-4 uppercase tracking-[0.05em] text-[clamp(1.75rem,3.5vw,3.125rem)] leading-tight text-[#000000]">
							INTERNATIONAL SALES
						</h2>
					</ScrollReveal>

					<ScrollReveal direction="up" distance={40} delay={0.1} duration={0.6}>
						<p className="n-bold mb-12 text-center text-[20px] uppercase leading-[24px] tracking-[0.1em] text-[#161616]">
							A TAILORED GO-TO-MARKET APPROACH FOR EVERY MARKET WE OPERATE IN.
						</p>
					</ScrollReveal>

					<ScrollReveal direction="up" distance={40} delay={0.2} duration={0.6}>
						<p className="n-book mx-auto text-center text-[16px] leading-[24px] tracking-[0%] text-[#3C393A]">
							Our international sales division bridges borders, connecting
							premium Indian real estate with qualified global buyers. With a
							presence across key international markets, we deploy localised
							strategies — from market-specific positioning and regulatory
							navigation to cultural nuance in negotiations — ensuring every
							project reaches the right audience with maximum impact.
						</p>
					</ScrollReveal>
				</div>

				<ScrollReveal direction="up" distance={40} delay={0.3} duration={0.6}>
					<div
						ref={statsRef}
						className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:flex-nowrap sm:gap-10 md:gap-14 lg:gap-16"
						role="list"
						aria-label="Key metrics"
					>
						{STATS.map((stat, index) => (
							<div
								key={stat.label}
								className="flex min-w-0 items-center gap-6 sm:gap-10 md:gap-14 lg:gap-16"
								role="listitem"
							>
								{index > 0 && (
									<div
										className="hidden h-10 w-px shrink-0 bg-[#ccc] sm:block"
										aria-hidden="true"
									/>
								)}

								<div className="min-w-0 p-0 text-left">
									<div
										className="
											mb-2
											n-bold
											tabular-nums
											whitespace-nowrap
											text-left
											text-[28px]
											font-extrabold
											leading-none
											tracking-normal
											text-[#8F8183]
											sm:text-[36px]
											md:text-[44px]
											lg:text-[56px]
										"
									>
										<AnimatedStatValue
											stat={stat}
											animate={statsInView}
											index={index}
										/>
									</div>

									<p
										className="
											n-bold
											m-0
											text-left
											text-[12px]
											font-bold
											leading-[16px]
											tracking-normal
											text-[#202225]
											sm:text-[14px]
											sm:leading-[18px]
											lg:text-[16px]
											lg:leading-[20px]
										"
									>
										{stat.label}
									</p>
								</div>
							</div>
						))}
					</div>
				</ScrollReveal>
			</Container>
		</section>
	);
}
