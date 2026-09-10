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
				>
					{PARTNER_STATS.map((stat, i) => (
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
						>
							{/* Tablet divider */}
							{i % 2 === 1 && (
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

							{/* Desktop divider */}
							{i > 0 && (
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

							{/* Number */}
							<div
								className={cn(
									"n-bold",
									"w-fit",
									"whitespace-nowrap",
									"tabular-nums",
									"text-left",
									"font-extrabold",
									"leading-none",
									"tracking-normal",
									"text-brand-footer",

									"text-[24px]",
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
								
									w-full
max-w-[135px]
text-left
text-[11px]
font-bold
leading-[14px]
tracking-normal
text-black

sm:max-w-[230px]
sm:text-[14px]
sm:leading-[18px]

lg:text-[16px]
lg:leading-[20px]
								"
							>
								{stat.label}
							</div>
						</div>
					))}
				</div>
			</ScrollReveal>
		</section>
	);
}
