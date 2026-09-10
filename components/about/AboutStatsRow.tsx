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
		<div
			className="
				flex
				w-full
				flex-col
				items-start
				text-left
			"
		>
			{/* Value */}
			<p
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
					"text-[28px]",
					"sm:text-[36px]",
					"md:text-[44px]",
					"lg:text-[56px]",
					stat.customClass,
				)}
			>
				{displayValue}
			</p>

			{/* Label */}
			<p
				className="
					n-bold
					
					w-full
					max-w-[230px]
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
			{metrics.map((stat, idx) => (
				<ScrollReveal
					key={stat.label}
					direction="up"
					distance={24}
					delay={idx * 0.05}
				>
					<div
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
						{idx % 2 === 1 && (
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
						{idx > 0 && (
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
