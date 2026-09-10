"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { OPEN_CAREER_MODAL_EVENT } from "@/components/career/AutoCareerApplicationModal";
import { Container } from "@/components/common/Container";
import { cn } from "@/utils/cn";
import { useEffect, useState } from "react";

type Opportunity = {
	id: string;
	title: string;
	type: string;
	description: string;
	location: string;
	href: string;
};

const OPPORTUNITIES: Opportunity[] = [
	{
		id: "1",
		title: "Financial Analyst",
		type: "Remote",
		description:
			"Analyze financial data, prepare reports, and support strategic decision-making for real estate investments.",
		location: "Andheri East, Mumbai",
		href: "/contact",
	},
	{
		id: "2",
		title: "Financial Analyst",
		type: "Full-time",
		description:
			"Lead sales teams, drive revenue growth, and manage key client relationships across premium real estate projects.",
		location: "Bandra West, Mumbai",
		href: "/contact",
	},
	{
		id: "3",
		title: "Financial Analyst",
		type: "Full-time",
		description:
			"Conduct market research, valuation analysis, and due diligence for residential and commercial properties.",
		location: "Powai, Mumbai",
		href: "/contact",
	},
	{
		id: "4",
		title: "Financial Analyst",
		type: "Hybrid",
		description:
			"Develop and execute marketing campaigns for premium real estate brands across digital and offline channels.",
		location: "Worli, Mumbai",
		href: "/contact",
	},
	{
		id: "5",
		title: "Financial Analyst",
		type: "Full-time",
		description:
			"Build and manage channel partner networks, drive business development, and maximize project reach.",
		location: "Pune, Maharashtra",
		href: "/contact",
	},
	{
		id: "6",
		title: "Financial Analyst",
		type: "Full-time",
		description:
			"Partner with leadership to drive talent strategy, employee engagement, and organizational development.",
		location: "Andheri East, Mumbai",
		href: "/contact",
	},
	{
		id: "7",
		title: "Digital Marketing Lead",
		type: "Remote",
		description:
			"Own digital marketing strategy including SEO, SEM, social media, and performance marketing for real estate.",
		location: "BKC, Mumbai",
		href: "/contact",
	},
	{
		id: "8",
		title: "Operations Executive",
		type: "Full-time",
		description:
			"Streamline operations, manage vendor relationships, and ensure seamless project execution across sites.",
		location: "Thane, Maharashtra",
		href: "/contact",
	},
];

const CARD_GAP = 20;

/* -------------------------------------------------------------------------- */
/*                                Location Icon                               */
/* -------------------------------------------------------------------------- */

function LocationIcon() {
	return (
		<svg
			width="10"
			height="14"
			viewBox="0 0 10 14"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="h-[14px] w-[10px] shrink-0"
			aria-hidden
		>
			<path
				opacity="0.6"
				d="M5 0C3.67446 0.00184628 2.40371 0.555562 1.46641 1.53973C0.529107 2.52389 0.00175836 3.85818 0 5.24999C0 9.01905 4.65833 13.7397 4.85625 13.9387C4.89475 13.978 4.94632 14 5 14C5.05368 14 5.10525 13.978 5.14375 13.9387C5.34167 13.7397 10 9.01905 10 5.24999C9.99824 3.85818 9.47089 2.52389 8.53359 1.53973C7.59629 0.555562 6.32554 0.00184628 5 0ZM5 7.65624C4.54675 7.65624 4.10368 7.51512 3.72682 7.25072C3.34996 6.98631 3.05623 6.61051 2.88278 6.17083C2.70933 5.73114 2.66394 5.24732 2.75237 4.78056C2.84079 4.31379 3.05905 3.88504 3.37955 3.54852C3.70004 3.212 4.10838 2.98283 4.55292 2.88998C4.99746 2.79714 5.45824 2.84479 5.87698 3.02691C6.29573 3.20903 6.65364 3.51745 6.90545 3.91315C7.15726 4.30886 7.29167 4.77408 7.29167 5.24999C7.2913 5.88805 7.04974 6.49987 6.62005 6.95105C6.19036 7.40222 5.60768 7.65586 5 7.65624Z"
				fill="#161616"
			/>
		</svg>
	);
}

/* -------------------------------------------------------------------------- */
/*                                 Apply Arrow                                */
/* -------------------------------------------------------------------------- */

function ApplyArrow() {
	return (
		<svg
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="h-[15px] w-[15px] shrink-0"
			aria-hidden
		>
			<path
				d="M1 15L15 1M5 1H15V11"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

/* -------------------------------------------------------------------------- */
/*                              Opportunity Card                              */
/* -------------------------------------------------------------------------- */

function OpportunityCard({ job }: { job: Opportunity }) {
	return (
		<article
			className={cn(
				"relative h-[305px] w-full overflow-hidden",
				"bg-[radial-gradient(290.48%_141.42%_at_0%_0%,rgba(188,189,192,0.20)_0%,rgba(143,129,131,0.20)_100%)]",
			)}
		>
			{/* Title */}
			<h3
				className={cn(
					"absolute left-5 right-5 top-[30px]",
					"truncate font-productSans text-[24px] font-bold leading-[24px]",
					"text-[#202225]",
				)}
			>
				{job.title}
			</h3>

			{/* Job type */}
			<p
				className={cn(
					"n-bold absolute left-5 right-5 top-[60px]",
					"text-[16px] leading-[20px] text-[#161616] opacity-50",
				)}
			>
				{job.type}
			</p>

			{/* Description */}
			<p
				className={cn(
					"n-reg absolute left-5 right-5 top-[99px]",
					"line-clamp-4 text-[16px] leading-[20px] text-[#161616]",
				)}
			>
				{job.description}
			</p>

			{/* Location */}
			<div className="absolute left-5 right-5 top-[203px] flex items-center gap-[5px]">
				<LocationIcon />

				<span className="n-bold truncate text-[16px] leading-[20px] text-[#161616] opacity-60">
					{job.location}
				</span>
			</div>

			{/* Apply button */}
			<button
				type="button"
				onClick={() => window.dispatchEvent(new Event(OPEN_CAREER_MODAL_EVENT))}
				className={cn(
					"absolute bottom-0 left-0",
					"flex h-[60px] w-full items-center justify-center",
					"gap-5 bg-[#161616] px-[30px]",
					"cursor-pointer text-white",
					"transition-colors duration-300",
					"hover:bg-[#8F8183]",
				)}
			>
				<span className="n-bold whitespace-nowrap text-[20px] leading-none tracking-[0.1em]">
					APPLY NOW
				</span>

				<ApplyArrow />
			</button>
		</article>
	);
}

/* -------------------------------------------------------------------------- */
/*                              Carousel Arrows                               */
/* -------------------------------------------------------------------------- */

function CarouselArrow({
	direction,
	onClick,
	disabled,
	label,
	className,
}: {
	direction: "left" | "right";
	onClick: () => void;
	disabled: boolean;
	label: string;
	className?: string;
}) {
	return (
		<button
			type="button"
			aria-label={label}
			onClick={onClick}
			disabled={disabled}
			className={cn(
				"flex h-[42px] w-[42px] shrink-0 items-center justify-center",
				"transition-opacity duration-300",
				disabled
					? "cursor-not-allowed opacity-25"
					: "cursor-pointer opacity-100 hover:opacity-65",
				className,
			)}
		>
			{direction === "left" ? (
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
			) : (
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
			)}
		</button>
	);
}

/* -------------------------------------------------------------------------- */
/*                            Current Opportunity                             */
/* -------------------------------------------------------------------------- */

export function CurrentOpportunity() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [itemsPerView, setItemsPerView] = useState(4);

	/* Responsive card count */
	useEffect(() => {
		const updateItemsPerView = () => {
			if (window.innerWidth >= 1280) {
				setItemsPerView(4);
			} else if (window.innerWidth >= 1024) {
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

	const maxIndex = Math.max(0, OPPORTUNITIES.length - itemsPerView);

	/* Keep index valid after viewport changes */
	useEffect(() => {
		setCurrentIndex((current) => Math.min(current, maxIndex));
	}, [maxIndex]);

	const goPrev = () => {
		setCurrentIndex((current) => Math.max(0, current - 1));
	};

	const goNext = () => {
		setCurrentIndex((current) => Math.min(maxIndex, current + 1));
	};

	const itemWidth = `calc(${100 / itemsPerView}% - ${
		(CARD_GAP * (itemsPerView - 1)) / itemsPerView
	}px)`;

	/*
	 * Each movement must include:
	 * card width + gap.
	 */
	const translatePercent = currentIndex * (100 / itemsPerView);

	const translateGap = currentIndex * (CARD_GAP / itemsPerView);

	const totalPages = maxIndex + 1;

	return (
		<section
			className="bg-white py-10 sm:py-14 lg:py-[100px]"
			aria-labelledby="current-opportunity-heading"
		>
			<Container className="overflow-visible">
				{/* Heading */}

				<ScrollReveal direction="up" distance={30}>
					<h2 className="qs-reg text-center uppercase tracking-[0.05em] text-[clamp(1.75rem,3.5vw,3.125rem)] leading-tight text-[#000000]">
						Current Opportunity
					</h2>
				</ScrollReveal>

				{/* Carousel area */}
				<div className="relative mx-auto mt-10 max-w-[1196px] lg:mt-[50px]">
					{/* Desktop LEFT arrow */}
					<CarouselArrow
						direction="left"
						label="Previous opportunities"
						onClick={goPrev}
						disabled={currentIndex === 0}
						className={cn(
							"absolute top-1/2 z-30 hidden -translate-y-1/2 lg:flex",
							"lg:left-[-50px] xl:left-[-60px]",
						)}
					/>

					{/* Desktop RIGHT arrow */}
					<CarouselArrow
						direction="right"
						label="Next opportunities"
						onClick={goNext}
						disabled={currentIndex >= maxIndex}
						className={cn(
							"absolute top-1/2 z-30 hidden -translate-y-1/2 lg:flex",
							"lg:right-[-50px] xl:right-[-60px]",
						)}
					/>

					{/* Visible carousel window */}
					<div className="w-full overflow-hidden">
						<div
							className="flex gap-5 transition-transform duration-500 ease-in-out"
							style={{
								transform: `translateX(calc(-${translatePercent}% - ${translateGap}px))`,
							}}
						>
							{OPPORTUNITIES.map((job) => (
								<div
									key={job.id}
									className="min-w-0 shrink-0"
									style={{
										width: itemWidth,
									}}
								>
									<OpportunityCard job={job} />
								</div>
							))}
						</div>
					</div>

					{/* Mobile / tablet arrows */}
					<div className="mt-6 flex w-full items-center justify-between lg:hidden">
						<CarouselArrow
							direction="left"
							label="Previous opportunities"
							onClick={goPrev}
							disabled={currentIndex === 0}
						/>

						<CarouselArrow
							direction="right"
							label="Next opportunities"
							onClick={goNext}
							disabled={currentIndex >= maxIndex}
						/>
					</div>
				</div>

				{/* Pagination dots */}
				{totalPages > 1 && (
					<div
						className="mt-6 flex items-center justify-center gap-2"
						role="tablist"
						aria-label="Opportunity pages"
					>
						{Array.from({ length: totalPages }, (_, index) => (
							<button
								key={index}
								type="button"
								role="tab"
								aria-selected={index === currentIndex}
								aria-label={`Opportunity page ${index + 1}`}
								onClick={() => setCurrentIndex(index)}
								className={cn(
									"h-[6px] rounded-full transition-all duration-300",
									index === currentIndex
										? "w-6 bg-[#202225]"
										: "w-[6px] bg-[#D4D4D4] hover:bg-[#AFAFAF]",
								)}
							/>
						))}
					</div>
				)}
			</Container>
		</section>
	);
}
