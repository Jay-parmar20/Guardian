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
		<section
			className="bg-white py-14 sm:py-20 lg:py-25"
			aria-label="International Sales"
		>
			<Container>
				<div className="mx-auto text-center mb-10 sm:mb-16 md:mb-25">
					<ScrollReveal direction="up" distance={40} duration={0.6}>
						<h2 className="qs-reg mb-4 text-center text-[30px] leading-[36px] uppercase tracking-[0.05em] text-[#000000] sm:text-[clamp(1.75rem,3.5vw,3.125rem)] sm:leading-tight">
							INTERNATIONAL SALES
						</h2>
					</ScrollReveal>

					<ScrollReveal direction="up" distance={40} delay={0.1} duration={0.6}>
						<p className="n-bold mx-auto mb-6 max-w-[330px] text-center text-[14px] uppercase leading-[20px] tracking-[0.1em] text-[#161616] sm:mb-12 sm:max-w-none sm:text-[20px] sm:leading-[24px]">
							A TAILORED GO-TO-MARKET APPROACH FOR EVERY MARKET WE OPERATE IN.
						</p>
					</ScrollReveal>

					<ScrollReveal direction="up" distance={40} delay={0.2} duration={0.6}>
						<p className="n-book mx-auto max-w-[330px] text-center text-[14px] leading-[22px] tracking-[0%] text-[#3C393A] sm:max-w-[760px] sm:text-[16px] sm:leading-[24px]">
							Every market has its own buyer psychology, regulatory landscape
							and deal structure. We build a dedicated go-to-market plan for
							each one, backed by local partners on the ground and a sales
							process built for cross-border trust.
						</p>
					</ScrollReveal>
				</div>

				<ScrollReveal direction="up" distance={40} delay={0.3} duration={0.6}>
					<div
						ref={statsRef}
						className="
		grid
		w-full
		grid-cols-[max-content_max-content]
		justify-center
		gap-x-[48px]
		gap-y-8

		sm:grid-cols-2
		sm:gap-x-10
		sm:gap-y-10

		lg:grid-cols-[max-content_max-content_max-content_max-content]
		lg:justify-center
		lg:gap-x-[120px]
		lg:gap-y-0
	"
						role="list"
						aria-label="Key metrics"
					>
						{STATS.map((stat, index) => (
							<div
								key={stat.label}
								className="
		relative
		flex
		min-w-0
		flex-col
		items-start
		text-left

		sm:mx-auto
		lg:mx-0
	"
								role="listitem"
							>
								{index % 2 === 1 && (
									<span
										aria-hidden="true"
										className="
			absolute
			left-[-20px]
			top-1/2
			hidden
			h-0
			w-[40px]
			-translate-x-1/2
			-translate-y-1/2
			rotate-90
			border-t-[0.5px]
			border-black
			opacity-50

			sm:max-lg:block
		"
									/>
								)}

								{index > 0 && (
									<span
										aria-hidden="true"
										className="
			absolute
			left-[-60px]
			top-1/2
			hidden
			h-0
			w-[40px]
			-translate-x-1/2
			-translate-y-1/2
			rotate-90
			border-t-[0.5px]
			border-black
			opacity-50

			lg:block
		"
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
											text-[24px]
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
		max-w-[135px]
		text-left
		text-[11px]
		font-bold
		leading-[14px]
		tracking-normal
		text-[#202225]

		sm:max-w-[230px]
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
