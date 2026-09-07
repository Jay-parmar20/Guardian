"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import type {
	DeveloperStat,
	StatsSectionContent,
} from "@/data/audience-marketing-types";
import { useCountUp } from "@/hooks/useCountUp";
import { cn } from "@/utils/cn";
import { useInView } from "framer-motion";
import { useRef } from "react";

function formatCountUpValue(
	count: number,
	config: {
		end: number;
		prefix?: string;
		suffix?: string;
		unit?: string;
		decimals?: number;
	},
): string {
	const { end, prefix = "", suffix = "", unit = "", decimals } = config;

	const capped = Math.min(count, end);

	let numeric: string;

	if (decimals !== undefined) {
		numeric = capped.toFixed(decimals);
	} else if (end >= 1000) {
		numeric = Math.round(capped).toLocaleString("en-US");
	} else {
		numeric = String(Math.round(capped));
	}

	return `${prefix}${numeric}${suffix}${unit}`;
}

function StatItem({
	stat,
	isInView,
	index,
}: {
	stat: DeveloperStat;
	isInView: boolean;
	index: number;
}) {
	const countUp = stat.countUp;
	const animate = Boolean(countUp) && isInView;

	const count = useCountUp(countUp?.end ?? 0, animate, {
		duration: 1800,
		delay: index * 100,
	});

	const displayValue =
		countUp && animate ? formatCountUpValue(count, countUp) : stat.value;

	return (
		<div className="text-center">
			{/* Value */}
			<p
				className={cn(
					"n-bold tabular-nums whitespace-nowrap text-brand-footer",
					"font-extrabold leading-none tracking-normal",
					"text-[28px]",
					"sm:text-[36px]",
					"md:text-[48px]",
					stat.customClass,
				)}
			>
				{displayValue}
			</p>

			{/* Label */}
			<p
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
			</p>
		</div>
	);
}

export function AboutStatsRow({ content }: { content: StatsSectionContent }) {
	const ref = useRef<HTMLDivElement>(null);

	const metrics = content.metrics;

	const hasAnimatedStats = metrics.some((metric) => metric.countUp);

	const isInView = useInView(ref, {
		once: true,
		margin: "0px 0px -12% 0px",
		amount: 0.2,
	});

	return (
		<div
			ref={ref}
			className="
				flex
				flex-col
				items-center
				justify-center
				gap-6
			

				sm:flex-row
				sm:flex-nowrap
				sm:gap-10

				md:gap-14

				lg:gap-16
				
			"
		>
			{metrics.map((stat, idx) => (
				<ScrollReveal
					key={stat.label}
					direction="up"
					distance={24}
					delay={idx * 0.05}
				>
					<div
						className="
							flex
							items-center
							gap-6

							sm:gap-10
							md:gap-14
							lg:gap-16
						"
					>
						{/* Only ONE divider between stats */}
						{idx > 0 && (
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

						<StatItem
							stat={stat}
							isInView={hasAnimatedStats ? isInView : false}
							index={idx}
						/>
					</div>
				</ScrollReveal>
			))}
		</div>
	);
}
