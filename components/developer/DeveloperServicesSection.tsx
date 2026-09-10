// "use client";

// import { ScrollReveal } from "@/components/animations/ScrollReveal";
// import { StaggerContainer } from "@/components/animations/StaggerContainer";
// import { Container } from "@/components/common/Container";
// import { ArrowIconLink } from "@/components/ui/ArrowIconLink";
// import type { ServicesBandContent } from "@/data/audience-marketing";
// import { DEVELOPER_SERVICES } from "@/data/audience-marketing-shared";
// import { marketingClasses } from "@/styles/marketingClasses";
// import { cn } from "@/utils/cn";
// import Image from "next/image";
// import { useEffect, useRef, useState } from "react";
// import { OutlineArrowButton } from "@/components/common/OutlineArrowButton";
// import { useCountUp } from "@/hooks/useCountUp";
// import { useInView } from "framer-motion";
// import {
// 	audienceMarketingOutlineCtaClass,
// 	audienceMarketingOutlineCtaIconClass,
// } from "@/styles/audienceMarketingCenter";

// type AnimatedStat = {
// 	end: number;
// 	label: string;
// 	prefix?: string;
// 	suffix?: string;
// 	decimals?: number;
// };

// const STATS: AnimatedStat[] = [
// 	{
// 		end: 37850,
// 		label: "Cr. Worth of Inventory Sold",
// 	},
// 	{
// 		end: 2,
// 		suffix: " Million+",
// 		label: "Sq. Ft. Area Developed",
// 	},
// 	{
// 		end: 307,
// 		suffix: "+",
// 		label: "Projects Delivered",
// 	},
// 	{
// 		end: 29669,
// 		label: "Units Sold",
// 	},
// ];

// function AnimatedStatValue({
// 	stat,
// 	animate,
// 	index,
// }: {
// 	stat: AnimatedStat;
// 	animate: boolean;
// 	index: number;
// }) {
// 	const count = useCountUp(stat.end, animate, {
// 		duration: 1800,
// 		delay: index * 100,
// 	});

// 	let value: string;

// 	if (stat.decimals !== undefined) {
// 		value = count.toFixed(stat.decimals);
// 	} else if (stat.end >= 1000) {
// 		value = Math.round(count).toLocaleString("en-US");
// 	} else {
// 		value = Math.round(count).toString();
// 	}

// 	return (
// 		<>
// 			{stat.prefix ?? ""}
// 			{value}
// 			{stat.suffix ?? ""}
// 		</>
// 	);
// }

// export function DeveloperServicesSection({
// 	content,
// }: {
// 	content: ServicesBandContent;
// }) {
// 	const [currentIndex, setCurrentIndex] = useState(0);
// 	const [cardWidth, setCardWidth] = useState(0);
// 	const [gapPx, setGapPx] = useState(0);
// 	const trackRef = useRef<HTMLDivElement | null>(null);
// 	const statsRef = useRef<HTMLDivElement | null>(null);

// 	const statsInView = useInView(statsRef, {
// 		once: true,
// 		amount: 0.25,
// 	});

// 	const total = content.cards.length;
// 	const knowMoreHref = DEVELOPER_SERVICES;

// 	useEffect(() => {
// 		const measure = () => {
// 			const track = trackRef.current;
// 			const first = track?.firstElementChild as HTMLElement | null;
// 			if (!track || !first) return;
// 			const styles = window.getComputedStyle(track);
// 			const gap = Number.parseFloat(styles.columnGap || styles.gap || "0") || 0;
// 			setCardWidth(first.offsetWidth);
// 			setGapPx(gap);
// 		};

// 		measure();
// 		window.addEventListener("resize", measure);
// 		return () => window.removeEventListener("resize", measure);
// 	}, [total]);

// 	useEffect(() => {
// 		if (currentIndex >= total) {
// 			setCurrentIndex(Math.max(0, total - 1));
// 		}
// 	}, [currentIndex, total]);

// 	const [itemsPerView, setItemsPerView] = useState(3);

// 	useEffect(() => {
// 		const updateItemsPerView = () => {
// 			if (window.innerWidth >= 1024) {
// 				setItemsPerView(3);
// 			} else if (window.innerWidth >= 640) {
// 				setItemsPerView(2);
// 			} else {
// 				setItemsPerView(1);
// 			}
// 		};

// 		updateItemsPerView();

// 		window.addEventListener("resize", updateItemsPerView);

// 		return () => {
// 			window.removeEventListener("resize", updateItemsPerView);
// 		};
// 	}, []);

// 	const maxIndex = Math.max(0, total - itemsPerView);

// 	useEffect(() => {
// 		if (currentIndex > maxIndex) {
// 			setCurrentIndex(maxIndex);
// 		}
// 	}, [currentIndex, maxIndex]);

// 	const goPrev = () => {
// 		setCurrentIndex((idx) => Math.max(0, idx - 1));
// 	};

// 	const goNext = () => {
// 		setCurrentIndex((idx) => Math.min(maxIndex, idx + 1));
// 	};

// 	const stepPx = cardWidth + gapPx;

// 	return (
// 		<section
// 			aria-labelledby="dev-services-heading"
// 			className="flex w-full min-w-0 flex-col"
// 		>
// 			<Container className="w-full min-w-0 py-0">
// 				{/* Stats row */}
// 				<ScrollReveal direction="up" distance={24}>
// 					<div
// 						ref={statsRef}
// 						className="
// 			grid
// 			w-full
// 			grid-cols-1
// 			gap-y-7

// 			sm:grid-cols-2
// 			sm:gap-x-10
// 			sm:gap-y-10

// 			lg:grid-cols-[max-content_max-content_max-content_max-content]
// 			lg:justify-center
// 			lg:gap-x-[120px]
// 			lg:gap-y-0
// 		"
// 					>
// 						{STATS.map((stat, i) => (
// 							<div
// 								key={stat.label}
// 								className="
// 					relative
// 					mx-auto
// 					flex
// 					min-w-0
// 					flex-col
// 					items-start
// 					text-left
// 					lg:mx-0
// 				"
// 							>
// 								{/* Tablet divider */}
// 								{i % 2 === 1 && (
// 									<span
// 										aria-hidden="true"
// 										className="
// 							absolute
// 							left-[-20px]
// 							top-1/2
// 							hidden
// 							h-0
// 							w-[40px]
// 							-origin-center
// 							-translate-x-1/2
// 							-translate-y-1/2
// 							rotate-90
// 							border-t-[0.5px]
// 							border-black
// 							opacity-50
// 							sm:max-lg:block
// 						"
// 									/>
// 								)}

// 								{/* Desktop divider */}
// 								{i > 0 && (
// 									<span
// 										aria-hidden="true"
// 										className="
// 							absolute
// 							left-[-60px]
// 							top-1/2
// 							hidden
// 							h-0
// 							w-[40px]
// 							-origin-center
// 							-translate-x-1/2
// 							-translate-y-1/2
// 							rotate-90
// 							border-t-[0.5px]
// 							border-black
// 							opacity-50
// 							lg:block
// 						"
// 									/>
// 								)}

// 								{/* Value */}
// 								<div
// 									className="
// 						n-bold
// 						w-fit
// 						whitespace-nowrap
// 						tabular-nums
// 						leading-none
// 						tracking-normal
// 						text-brand-footer
// 						text-[28px]
// 						sm:text-[36px]
// 						md:text-[44px]
// 						lg:text-[56px]
// 					"
// 								>
// 									<AnimatedStatValue
// 										stat={stat}
// 										animate={statsInView}
// 										index={i}
// 									/>
// 								</div>

// 								{/* Label */}
// 								<p
// 									className="
// 						n-bold
// 						mt-[6px]
// 						w-full
// 						max-w-[230px]
// 						text-left
// 						text-[12px]
// 						font-bold
// 						leading-[16px]
// 						tracking-normal
// 						text-black
// 						sm:text-[14px]
// 						sm:leading-[18px]
// 						lg:text-[16px]
// 						lg:leading-[20px]
// 					"
// 								>
// 									{stat.label}
// 								</p>
// 							</div>
// 						))}
// 					</div>
// 				</ScrollReveal>

// 				<div className="py-12 sm:py-16 md:py-20 lg:py-[100px]">
// 					<StaggerContainer
// 						className="flex flex-col items-center gap-6"
// 						staggerChildren={0.12}
// 					>
// 						<ScrollReveal direction="up" distance={36}>
// 							<h2
// 								id="dev-services-heading"
// 								className={cn(marketingClasses.headingDisplay, "text-center")}
// 							>
// 								{content.sectionTitle}
// 							</h2>
// 						</ScrollReveal>

// 						<ScrollReveal direction="up" delay={0.08} distance={28}>
// 							<p className="mx-auto max-w-[1196px] text-justify [text-align-last:center] n-reg text-[18px] leading-[22px] text-[#555]">
// 								{content.description}
// 							</p>
// 						</ScrollReveal>
// 					</StaggerContainer>

// 					<div className="relative mt-10 w-full md:mt-[52px]">
// 						{/* Desktop previous arrow */}
// 						<button
// 							type="button"
// 							aria-label="Previous service"
// 							onClick={goPrev}
// 							disabled={currentIndex === 0}
// 							className={cn(
// 								"absolute left-[-68px] top-1/2 z-20 hidden -translate-y-1/2 lg:flex",
// 								"h-12 w-12 items-center justify-center rounded-full",

// 								"disabled:cursor-not-allowed disabled:opacity-30",
// 							)}
// 						>
// 							<svg
// 								width="42"
// 								height="42"
// 								viewBox="0 0 42 42"
// 								fill="none"
// 								xmlns="http://www.w3.org/2000/svg"
// 							>
// 								<path
// 									opacity="0.5"
// 									d="M21 13L13 21L21 29M13 21H29M1 21C1 32.0457 9.9543 41 21 41C32.0457 41 41 32.0457 41 21C41 9.9543 32.0457 1 21 1C9.9543 1 1 9.9543 1 21Z"
// 									stroke="black"
// 									strokeWidth="2"
// 									strokeLinejoin="round"
// 								/>
// 							</svg>
// 						</button>

// 						{/* Desktop next arrow */}
// 						<button
// 							type="button"
// 							aria-label="Next service"
// 							onClick={goNext}
// 							disabled={currentIndex >= maxIndex}
// 							className={cn(
// 								"absolute right-[-68px] top-1/2 z-20 hidden -translate-y-1/2 lg:flex",
// 								"h-12 w-12 items-center justify-center rounded-full",
// 								"disabled:cursor-not-allowed disabled:opacity-30",
// 							)}
// 						>
// 							<svg
// 								width="42"
// 								height="42"
// 								viewBox="0 0 42 42"
// 								fill="none"
// 								xmlns="http://www.w3.org/2000/svg"
// 							>
// 								<path
// 									opacity="0.5"
// 									d="M21 13L29 21L21 29M29 21H13M41 21C41 32.0457 32.0457 41 21 41C9.9543 41 1 32.0457 1 21C1 9.9543 9.9543 1 21 1C32.0457 1 41 9.9543 41 21Z"
// 									stroke="black"
// 									strokeWidth="2"
// 									strokeLinejoin="round"
// 								/>
// 							</svg>
// 						</button>

// 						{/* Cards */}
// 						<div className="overflow-hidden">
// 							<div
// 								ref={trackRef}
// 								className="flex gap-5"
// 								style={{
// 									transform: `translate3d(-${currentIndex * stepPx}px, 0, 0)`,
// 									transition:
// 										"transform 700ms cubic-bezier(0.22, 0.61, 0.36, 1)",
// 								}}
// 							>
// 								{content.cards.map((card) => (
// 									<article
// 										key={card.id}
// 										className="
// 			relative
// 			flex
// 			w-full
// 			min-w-0
// 			shrink-0
// 			flex-col
// 			p-5
// 			bg-[linear-gradient(110deg,rgba(188,189,192,0.20)_0%,rgba(143,129,131,0.20)_100%)]
// 			sm:w-[calc((100%-20px)/2)]
// 			lg:w-[calc((100%-40px)/3)]
// 		"
// 									>
// 										{/* Image */}
// 										<div
// 											className="
// 				relative
// 				h-[220px]
// 				w-full
// 				shrink-0
// 				overflow-hidden
// 				bg-[linear-gradient(110deg,#F1F1F2_0%,#E9E6E6_100%)]
// 				sm:h-[240px]
// 				lg:h-[275px]
// 			"
// 										>
// 											<Image
// 												src={card.src}
// 												alt={card.title}
// 												fill
// 												className="object-cover"
// 												sizes="
// 					(max-width: 639px) calc(100vw - 40px),
// 					(max-width: 1023px) calc(50vw - 30px),
// 					345px
// 				"
// 											/>
// 										</div>

// 										{/* Title */}
// 										<h3
// 											className="
// 				n-bold
// 				mt-5
// 				min-h-[48px]
// 				text-[20px]
// 				font-bold
// 				leading-[24px]
// 				tracking-normal
// 				text-[#161616]
// 				lg:text-[24px]
// 				lg:leading-[26px]
// 			"
// 										>
// 											{card.title}
// 										</h3>

// 										{/* Footer description */}
// 										<div
// 											className="
// 				mt-auto
// 				flex

// 				items-end
// 				pt-6
// 				pr-[65px]
// 				sm:pr-[70px]

// 				lg:pr-[85px]
// 			"
// 										>
// 											<p
// 												className="
// 					n-book
// 					line-clamp-2
// 					text-[14px]
// 					leading-[20px]
// 					tracking-normal
// 					text-black
// 					sm:text-[16px]
// 					sm:leading-[21px]
// 					lg:text-[18px]
// 					lg:leading-[22px]
// 				"
// 											>
// 												{card.description}
// 											</p>
// 										</div>

// 										{/* Arrow -> exact Services section */}
// 										<a
// 											href={`${knowMoreHref}#${card.id}`}
// 											aria-label={`View ${card.title}`}
// 											className="
// 				absolute
// 				right-0
// 				bottom-0
// 				flex
// 				h-[52px]
// 				w-[52px]
// 				items-center
// 				justify-center
// 				bg-[#161616]
// 				text-white
// 				transition-colors
// 				duration-300
// 				hover:bg-[#333]
// 				lg:h-[65px]
// 				lg:w-[65px]
// 			"
// 										>
// 											<svg
// 												width="16"
// 												height="17"
// 												viewBox="0 0 16 17"
// 												fill="none"
// 												xmlns="http://www.w3.org/2000/svg"
// 												aria-hidden="true"
// 											>
// 												<path
// 													d="M0.511719 1H15.0075V15.4958"
// 													stroke="white"
// 													strokeWidth="2"
// 												/>

// 												<line
// 													x1="15.2032"
// 													y1="1.20296"
// 													x2="0.707378"
// 													y2="15.6988"
// 													stroke="white"
// 													strokeWidth="2"
// 												/>
// 											</svg>
// 										</a>
// 									</article>
// 								))}
// 							</div>
// 						</div>

// 						{/* Mobile / tablet carousel arrows */}
// 						{/* Mobile / tablet carousel arrows */}
// 						<div className="mt-6 flex items-center justify-center gap-5 lg:hidden">
// 							{/* Previous */}
// 							<button
// 								type="button"
// 								aria-label="Previous service"
// 								onClick={goPrev}
// 								disabled={currentIndex === 0}
// 								className="flex h-[42px] w-[42px] items-center justify-center disabled:cursor-not-allowed disabled:opacity-30"
// 							>
// 								<svg
// 									width="42"
// 									height="42"
// 									viewBox="0 0 42 42"
// 									fill="none"
// 									xmlns="http://www.w3.org/2000/svg"
// 								>
// 									<path
// 										opacity="0.5"
// 										d="M21 13L13 21L21 29M13 21H29M1 21C1 32.0457 9.9543 41 21 41C32.0457 41 41 32.0457 41 21C41 9.9543 32.0457 1 21 1C9.9543 1 1 9.9543 1 21Z"
// 										stroke="black"
// 										strokeWidth="2"
// 										strokeLinejoin="round"
// 									/>
// 								</svg>
// 							</button>

// 							{/* Next */}
// 							<button
// 								type="button"
// 								aria-label="Next service"
// 								onClick={goNext}
// 								disabled={currentIndex >= maxIndex}
// 								className="flex h-[42px] w-[42px] items-center justify-center disabled:cursor-not-allowed disabled:opacity-30"
// 							>
// 								<svg
// 									width="42"
// 									height="42"
// 									viewBox="0 0 42 42"
// 									fill="none"
// 									xmlns="http://www.w3.org/2000/svg"
// 								>
// 									<path
// 										opacity="0.5"
// 										d="M21 13L29 21L21 29M29 21H13M41 21C41 32.0457 32.0457 41 21 41C9.9543 41 1 32.0457 1 21C1 9.9543 9.9543 1 21 1C32.0457 1 41 9.9543 41 21Z"
// 										stroke="black"
// 										strokeWidth="2"
// 										strokeLinejoin="round"
// 									/>
// 								</svg>
// 							</button>
// 						</div>
// 					</div>

// 					{/* Know More */}
// 					<ScrollReveal direction="up" delay={0.2} distance={24}>
// 						<div className="mt-10 flex justify-center lg:mt-14">
// 							<OutlineArrowButton
// 								href={knowMoreHref}
// 								className={cn(
// 									audienceMarketingOutlineCtaClass,
// 									"max-lg:!w-fit max-lg:!max-w-full",
// 								)}
// 								iconClassName={audienceMarketingOutlineCtaIconClass}
// 							>
// 								{content.knowMoreLabel}
// 							</OutlineArrowButton>
// 						</div>
// 					</ScrollReveal>
// 				</div>
// 			</Container>
// 		</section>
// 	);
// }

"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { StaggerContainer } from "@/components/animations/StaggerContainer";
import { Container } from "@/components/common/Container";
import { OutlineArrowButton } from "@/components/common/OutlineArrowButton";
import type { ServicesBandContent } from "@/data/audience-marketing";
import { useCountUp } from "@/hooks/useCountUp";
import {
	audienceMarketingOutlineCtaClass,
	audienceMarketingOutlineCtaIconClass,
} from "@/styles/audienceMarketingCenter";
import { marketingClasses } from "@/styles/marketingClasses";
import { cn } from "@/utils/cn";
import { useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { useRouter } from "next/navigation";

type AnimatedStat = {
	end: number;
	label: string;
	prefix?: string;
	suffix?: string;
	decimals?: number;
};

const STATS: AnimatedStat[] = [
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
	stat: AnimatedStat;
	animate: boolean;
	index: number;
}) {
	const count = useCountUp(stat.end, animate, {
		duration: 1800,
		delay: index * 100,
	});

	let value: string;

	if (stat.decimals !== undefined) {
		value = count.toFixed(stat.decimals);
	} else if (stat.end >= 1000) {
		value = Math.round(count).toLocaleString("en-US");
	} else {
		value = Math.round(count).toString();
	}

	return (
		<>
			{stat.prefix ?? ""}
			{value}
			{stat.suffix ?? ""}
		</>
	);
}

export function DeveloperServicesSection({
	content,
}: {
	content: ServicesBandContent;
}) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [cardWidth, setCardWidth] = useState(0);
	const [gapPx, setGapPx] = useState(0);
	const [itemsPerView, setItemsPerView] = useState(3);

	const trackRef = useRef<HTMLDivElement | null>(null);
	const statsRef = useRef<HTMLDivElement | null>(null);

	const statsInView = useInView(statsRef, {
		once: true,
		amount: 0.25,
	});

	const total = content.cards.length;

	// Exact Services page.
	const knowMoreHref = "/services";

	const router = useRouter();

	const goToService = (id: string) => {
		const cleanId = id.replace(/#/g, "");

		router.push(`/services#${cleanId}`, {
			scroll: false,
		});
	};

	/* =========================
	   CARD MEASUREMENT
	========================= */
	useEffect(() => {
		const measure = () => {
			const track = trackRef.current;
			const first = track?.firstElementChild as HTMLElement | null;

			if (!track || !first) return;

			const styles = window.getComputedStyle(track);
			const gap = Number.parseFloat(styles.columnGap || styles.gap || "0") || 0;

			setCardWidth(first.offsetWidth);
			setGapPx(gap);
		};

		measure();

		window.addEventListener("resize", measure);

		return () => {
			window.removeEventListener("resize", measure);
		};
	}, [total]);

	/* =========================
	   RESPONSIVE SLIDER COUNT
	========================= */
	useEffect(() => {
		const updateItemsPerView = () => {
			if (window.innerWidth >= 1024) {
				setItemsPerView(3);
			} else if (window.innerWidth >= 640) {
				setItemsPerView(2);
			} else {
				setItemsPerView(1);
			}
		};

		updateItemsPerView();

		window.addEventListener("resize", updateItemsPerView);

		return () => {
			window.removeEventListener("resize", updateItemsPerView);
		};
	}, []);

	const maxIndex = Math.max(0, total - itemsPerView);

	useEffect(() => {
		if (currentIndex > maxIndex) {
			setCurrentIndex(maxIndex);
		}
	}, [currentIndex, maxIndex]);

	const goPrev = () => {
		setCurrentIndex((idx) => Math.max(0, idx - 1));
	};

	const goNext = () => {
		setCurrentIndex((idx) => Math.min(maxIndex, idx + 1));
	};

	const stepPx = cardWidth + gapPx;

	return (
		<section
			aria-labelledby="dev-services-heading"
			className="flex w-full min-w-0 flex-col"
		>
			<Container className="w-full min-w-0 py-0">
				{/* =========================
				    STATS
				========================= */}
				<ScrollReveal direction="up" distance={24}>
					<div
						ref={statsRef}
						className="
							grid
							w-full
							grid-cols-2
							gap-x-4
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
						{STATS.map((stat, i) => (
							<div
								key={stat.label}
								className="
									relative
									mx-auto
									flex
									min-w-0
									flex-col
									items-start
									text-left
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
											-origin-center
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
											-origin-center
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

								{/* Value */}
								<div
									className="
										n-bold
										w-fit
										whitespace-nowrap
										tabular-nums
										leading-none
										tracking-normal
										text-brand-footer

										text-[24px]

										sm:text-[36px]
										md:text-[44px]
										lg:text-[56px]
									"
								>
									<AnimatedStatValue
										stat={stat}
										animate={statsInView}
										index={i}
									/>
								</div>

								{/* Label */}
								<p
									className="
										n-bold
										mt-[6px]
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
								</p>
							</div>
						))}
					</div>
				</ScrollReveal>

				{/* =========================
				    SERVICES
				========================= */}
				<div className="py-12 sm:py-16 md:py-20 lg:py-[100px]">
					<StaggerContainer
						className="flex flex-col items-center gap-6"
						staggerChildren={0.12}
					>
						<ScrollReveal direction="up" distance={36}>
							<h2
								id="dev-services-heading"
								className={cn(marketingClasses.headingDisplay, "text-center")}
							>
								{content.sectionTitle}
							</h2>
						</ScrollReveal>

						<ScrollReveal direction="up" delay={0.08} distance={28}>
							<p className="n-reg mx-auto max-w-[1196px] text-justify text-[18px] leading-[22px] text-[#555] [text-align-last:center]">
								{content.description}
							</p>
						</ScrollReveal>
					</StaggerContainer>

					<div className="relative mt-10 w-full md:mt-[52px]">
						{/* Desktop previous arrow */}
						<button
							type="button"
							aria-label="Previous service"
							onClick={goPrev}
							disabled={currentIndex === 0}
							className={cn(
								"absolute left-[-68px] top-1/2 z-20 hidden -translate-y-1/2 lg:flex",
								"h-12 w-12 items-center justify-center rounded-full",
								"disabled:cursor-not-allowed disabled:opacity-30",
							)}
						>
							<svg
								width="42"
								height="42"
								viewBox="0 0 42 42"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									opacity="0.5"
									d="M21 13L13 21L21 29M13 21H29M1 21C1 32.0457 9.9543 41 21 41C32.0457 41 41 32.0457 41 21C41 9.9543 32.0457 1 21 1C9.9543 1 1 9.9543 1 21Z"
									stroke="black"
									strokeWidth="2"
									strokeLinejoin="round"
								/>
							</svg>
						</button>

						{/* Desktop next arrow */}
						<button
							type="button"
							aria-label="Next service"
							onClick={goNext}
							disabled={currentIndex >= maxIndex}
							className={cn(
								"absolute right-[-68px] top-1/2 z-20 hidden -translate-y-1/2 lg:flex",
								"h-12 w-12 items-center justify-center rounded-full",
								"disabled:cursor-not-allowed disabled:opacity-30",
							)}
						>
							<svg
								width="42"
								height="42"
								viewBox="0 0 42 42"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									opacity="0.5"
									d="M21 13L29 21L21 29M29 21H13M41 21C41 32.0457 32.0457 41 21 41C9.9543 41 1 32.0457 1 21C1 9.9543 9.9543 1 21 1C32.0457 1 41 9.9543 41 21Z"
									stroke="black"
									strokeWidth="2"
									strokeLinejoin="round"
								/>
							</svg>
						</button>

						{/* =========================
						    CARDS
						========================= */}
						<div className="overflow-hidden">
							<div
								ref={trackRef}
								className="flex gap-5"
								style={{
									transform: `translate3d(-${currentIndex * stepPx}px, 0, 0)`,
									transition:
										"transform 700ms cubic-bezier(0.22, 0.61, 0.36, 1)",
								}}
							>
								{content.cards.map((card) => (
									<article
										key={card.id}
										className="
											relative
											flex
											w-full
											min-w-0
											shrink-0
											flex-col
											p-5
											bg-[linear-gradient(110deg,rgba(188,189,192,0.20)_0%,rgba(143,129,131,0.20)_100%)]

											sm:w-[calc((100%-20px)/2)]
											lg:w-[calc((100%-40px)/3)]
										"
									>
										{/* Image */}
										<div
											className="
												relative
												h-[220px]
												w-full
												shrink-0
												overflow-hidden
												bg-[linear-gradient(110deg,#F1F1F2_0%,#E9E6E6_100%)]

												sm:h-[240px]
												lg:h-[275px]
											"
										>
											<Image
												src={card.src}
												alt={card.title}
												fill
												className="object-cover"
												sizes="
													(max-width: 639px) calc(100vw - 40px),
													(max-width: 1023px) calc(50vw - 30px),
													345px
												"
											/>
										</div>

										{/* Title */}
										<h3
											className="
												n-bold
												mt-5
												min-h-[48px]
												text-[20px]
												font-bold
												leading-[24px]
												tracking-normal
												text-[#161616]

												lg:text-[24px]
												lg:leading-[26px]
											"
										>
											{card.title}
										</h3>

										{/* Description */}
										<div
											className="
												mt-auto
												flex
												items-end
												pt-6
												pr-[65px]

												sm:pr-[70px]
												lg:pr-[85px]
											"
										>
											<p
												className="
													n-book
													line-clamp-2
													text-[14px]
													leading-[20px]
													tracking-normal
													text-black

													sm:text-[16px]
													sm:leading-[21px]

													lg:text-[18px]
													lg:leading-[22px]
												"
											>
												{card.description}
											</p>
										</div>

										{/* Exact service link - no hard browser refresh */}
										<button
											type="button"
											onClick={() => goToService(card.id)}
											aria-label={`View ${card.title}`}
											className="
		absolute
		right-0
		bottom-0
		flex
		h-[52px]
		w-[52px]
		cursor-pointer
		items-center
		justify-center
		bg-[#161616]
		text-white
		transition-colors
		duration-300
		hover:bg-[#333]
		lg:h-[65px]
		lg:w-[65px]
	"
										>
											<svg
												width="16"
												height="17"
												viewBox="0 0 16 17"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
												aria-hidden="true"
											>
												<path
													d="M0.511719 1H15.0075V15.4958"
													stroke="white"
													strokeWidth="2"
												/>

												<line
													x1="15.2032"
													y1="1.20296"
													x2="0.707378"
													y2="15.6988"
													stroke="white"
													strokeWidth="2"
												/>
											</svg>
										</button>
									</article>
								))}
							</div>
						</div>

						{/* Mobile / tablet arrows */}
						<div className="mt-6 flex items-center justify-center gap-5 lg:hidden">
							<button
								type="button"
								aria-label="Previous service"
								onClick={goPrev}
								disabled={currentIndex === 0}
								className="flex h-[42px] w-[42px] items-center justify-center disabled:cursor-not-allowed disabled:opacity-30"
							>
								<svg
									width="42"
									height="42"
									viewBox="0 0 42 42"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										opacity="0.5"
										d="M21 13L13 21L21 29M13 21H29M1 21C1 32.0457 9.9543 41 21 41C32.0457 41 41 32.0457 41 21C41 9.9543 32.0457 1 21 1C9.9543 1 1 9.9543 1 21Z"
										stroke="black"
										strokeWidth="2"
										strokeLinejoin="round"
									/>
								</svg>
							</button>

							<button
								type="button"
								aria-label="Next service"
								onClick={goNext}
								disabled={currentIndex >= maxIndex}
								className="flex h-[42px] w-[42px] items-center justify-center disabled:cursor-not-allowed disabled:opacity-30"
							>
								<svg
									width="42"
									height="42"
									viewBox="0 0 42 42"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										opacity="0.5"
										d="M21 13L29 21L21 29M29 21H13M41 21C41 32.0457 32.0457 41 21 41C9.9543 41 1 32.0457 1 21C1 9.9543 9.9543 1 21 1C32.0457 1 41 9.9543 41 21Z"
										stroke="black"
										strokeWidth="2"
										strokeLinejoin="round"
									/>
								</svg>
							</button>
						</div>
					</div>

					{/* KNOW MORE */}
					<ScrollReveal direction="up" delay={0.2} distance={24}>
						<div className="mt-10 flex justify-center lg:mt-14">
							<OutlineArrowButton
								href={knowMoreHref}
								className={cn(
									audienceMarketingOutlineCtaClass,
									"max-lg:!w-fit max-lg:!max-w-full",
								)}
								iconClassName={audienceMarketingOutlineCtaIconClass}
							>
								{content.knowMoreLabel}
							</OutlineArrowButton>
						</div>
					</ScrollReveal>
				</div>
			</Container>
		</section>
	);
}
