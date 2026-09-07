"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";
import { cn } from "@/utils/cn";
import { useInView } from "framer-motion";
import { useRef } from "react";

type PartnerStat = {
	end: number;
	label: string;
	prefix?: string;
	suffix?: string;
};

const PARTNER_STATS: PartnerStat[] = [
	{
		end: 37850,
		label: "Cr. Worth of Inventory Sold",
	},
	{
		end: 2,
		suffix: " Million+",
		label: "Sq. Ft. Area Developed",
	},
	{
		end: 307,
		suffix: "+",
		label: "Projects Delivered",
	},
	{
		end: 29669,
		label: "Units Sold",
	},
];

function AnimatedStatValue({
	stat,
	animate,
	index,
}: {
	stat: PartnerStat;
	animate: boolean;
	index: number;
}) {
	const count = useCountUp(stat.end, animate, {
		duration: 1800,
		delay: index * 100,
	});

	const value =
		stat.end >= 1000
			? Math.round(count).toLocaleString("en-US")
			: Math.round(count).toString();

	return (
		<>
			{stat.prefix ?? ""}
			{value}
			{stat.suffix ?? ""}
		</>
	);
}

export function PartnersStats() {
	const statsRef = useRef<HTMLDivElement>(null);

	const statsInView = useInView(statsRef, {
		once: true,
		amount: 0.25,
	});

	return (
		<section>
			<ScrollReveal direction="up" distance={24}>
				<div
					ref={statsRef}
					className="
						flex
						flex-col
						items-center
						justify-center
						gap-4

						sm:flex-row
						sm:flex-nowrap
						sm:gap-10

						md:gap-14
						lg:gap-16
					"
				>
					{PARTNER_STATS.map((stat, i) => (
						<div
							key={stat.label}
							className="
								flex
								items-center
								gap-6

								sm:gap-10
								md:gap-14
								lg:gap-16
							"
						>
							{/* Divider */}
							{i > 0 && (
								<div
									aria-hidden="true"
									className="
										hidden
										h-10
										w-px
										shrink-0
										bg-[#ccc]
										sm:block
									"
								/>
							)}

							<div className="text-center">
								{/* Animated Value */}
								<div
									className={cn(
										"n-bold tabular-nums text-brand-footer",
										"whitespace-nowrap leading-none tracking-normal",
										"text-[28px]",
										"sm:text-[36px]",
										"md:text-[44px]",
										"lg:text-[56px]",
									)}
								>
									<AnimatedStatValue
										stat={stat}
										animate={statsInView}
										index={i}
									/>
								</div>

								{/* Label */}
								<div
									className="
										n-bold
										text-left
										text-[12px]
										font-bold
										leading-[16px]
										tracking-normal
										text-black

										sm:text-[14px]
										sm:leading-[18px]

										lg:text-[16px]
										lg:leading-[20px]
									"
								>
									{stat.label}
								</div>
							</div>
						</div>
					))}
				</div>
			</ScrollReveal>
		</section>
	);
}
