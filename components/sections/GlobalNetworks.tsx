"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Container } from "@/components/common/Container";
import { OutlineArrowButton } from "@/components/common/OutlineArrowButton";
import {
	audienceMarketingOutlineCtaClass,
	audienceMarketingOutlineCtaIconClass,
} from "@/styles/audienceMarketingCenter";
import { cn } from "@/utils/cn";
import { useState } from "react";

interface GlobalNetworksSide {
	imageSrc?: string;
	imageAlt: string;
	heading: string;
	description?: string;
}

interface GlobalNetworksProps {
	frontSide?: GlobalNetworksSide;
	backSide?: GlobalNetworksSide;
	className?: string;
	heading?: string;
	showHeadingAbove?: boolean;
	showKnowMore?: boolean;
}

const defaultFront: GlobalNetworksSide = {
	imageSrc: "/images/about/INDIANS.png",
	imageAlt: "For Indians in Dubai",
	heading: "FOR INDIANS IN DUBAI",
};

const defaultBack: GlobalNetworksSide = {
	imageAlt: "For Indians in Dubai",
	heading: "FOR INDIANS IN DUBAI",
	description:
		"We open the door to real estate opportunities beyond India, helping Indian investors explore global markets with the right insight and access at every step.",
};

const defaultFront2: GlobalNetworksSide = {
	imageSrc: "/images/about/NRIS.png",
	imageAlt: "For NRIs in India",
	heading: "FOR NRIS IN INDIA",
};

const defaultBack2: GlobalNetworksSide = {
	imageAlt: "For NRIs in India",
	heading: "FOR NRIS IN INDIA",
	description:
		"We connect NRIs to real estate opportunities back home in India, with the same rigour and guidance throughout the transaction.",
};

function FlipCard({
	front,
	back,
}: {
	front: GlobalNetworksSide;
	back: GlobalNetworksSide;
}) {
	const [isFlipped, setIsFlipped] = useState(false);

	const handleClick = () => {
		// Mobile/tablet touch devices: tap to flip
		if (window.matchMedia("(hover: none)").matches) {
			setIsFlipped((prev) => !prev);
		}
	};

	return (
		<div
			className="relative w-full min-w-0 cursor-pointer"
			style={{
				perspective: "1400px",
				WebkitPerspective: "1400px",
			}}
			onMouseEnter={() => setIsFlipped(true)}
			onMouseLeave={() => setIsFlipped(false)}
			onClick={handleClick}
		>
			<div
				className="
					relative
					aspect-[578/400]
					w-full
				"
				style={{
					transformStyle: "preserve-3d",
					WebkitTransformStyle: "preserve-3d",
					transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
					transformOrigin: "center center",
					transition: "transform 650ms cubic-bezier(0.22, 1, 0.36, 1)",
					willChange: "transform",
				}}
			>
				{/* =========================
				    FRONT / NORMAL
				========================= */}
				<div
					className="
						absolute
						inset-0
						overflow-hidden
					"
					style={{
						backfaceVisibility: "hidden",
						WebkitBackfaceVisibility: "hidden",
						transform: "translateZ(0.1px)",
					}}
				>
					{/* Image */}
					{front.imageSrc ? (
						<img
							src={front.imageSrc}
							alt={front.imageAlt}
							draggable={false}
							className="
								h-full
								w-full
								select-none
								object-cover
								object-center
							"
						/>
					) : (
						<div className="h-full w-full bg-[#D1D1D1]" />
					)}

					{/* Figma black overlay 30% */}
					<div
						className="
							pointer-events-none
							absolute
							inset-0
							bg-black/30
						"
					/>

					{/* Center title */}
					<div
						className="
							pointer-events-none
							absolute
							inset-0
							flex
							items-center
							justify-center
							px-5
						"
					>
						<h3
							className="
								n-bold
								text-center
								text-[16px]
								font-extrabold
								leading-[20px]
								tracking-[0.1em]
								text-white
								uppercase

								sm:text-[18px]
								sm:leading-[22px]

								lg:text-[20px]
								lg:leading-[24px]
							"
						>
							{front.heading}
						</h3>
					</div>
				</div>

				{/* =========================
				    BACK / HOVER — FIGMA
				========================= */}
				<div
					className="
						absolute
						inset-0
						overflow-hidden
						bg-[#F2F2F2]
					"
					style={{
						backfaceVisibility: "hidden",
						WebkitBackfaceVisibility: "hidden",
						transform: "rotateY(180deg) translateZ(0.1px)",
					}}
				>
					{/* Figma faint image — same orientation, NOT reversed */}
					{front.imageSrc ? (
						<img
							src={front.imageSrc}
							alt=""
							aria-hidden="true"
							draggable={false}
							className="
								pointer-events-none
								absolute
								left-[-6.23%]
								top-0
								h-[108.25%]
								w-[112.46%]
								max-w-none
								select-none
								object-cover
								opacity-10
							"
						/>
					) : null}

					{/* Figma overlay = opacity 0 */}
					<div
						className="
							pointer-events-none
							absolute
							inset-0
							bg-black
							opacity-0
						"
					/>

					{/* Title */}
					<h3
						className="
							n-bold
							absolute
							left-1/2
							top-[12.5%]
							w-[46.71%]
							-translate-x-1/2
							text-center
							text-[16px]
							font-extrabold
							leading-[20px]
							tracking-[0.1em]
							text-[#161616]
							uppercase

							sm:text-[18px]
							sm:leading-[22px]

							lg:text-[20px]
							lg:leading-[24px]
						"
					>
						{back.heading}
					</h3>

					{/* Description */}
					{back.description ? (
						<p
							className="
								n-reg
								absolute
								left-1/2
								top-[54.25%]
								w-[82.7%]
								-translate-x-1/2
								text-center
								text-[13px]
								font-normal
								leading-[20px]
								text-[#161616]

								sm:text-[14px]
								sm:leading-[22px]

								lg:text-[16px]
								lg:leading-[24px]
							"
						>
							{back.description}
						</p>
					) : null}
				</div>
			</div>
		</div>
	);
}

export function GlobalNetworks({
	frontSide,
	backSide,
	className,
	heading = "GLOBAL NETWORKS",
	showHeadingAbove = true,
	showKnowMore = true,
}: GlobalNetworksProps) {
	const front = {
		...defaultFront,
		...frontSide,
	};

	const back = {
		...defaultBack,
		...backSide,
	};

	const front2 = {
		...defaultFront2,
	};

	const back2 = {
		...defaultBack2,
	};

	return (
		<section className={cn("py-0", className)} aria-label="Global Networks">
			<Container>
				{showHeadingAbove && (
					<ScrollReveal direction="up" distance={40} duration={0.6}>
						<h2
							className="
								qs-reg
								mb-12.5
								text-center
								text-[clamp(1.75rem,3.5vw,3.125rem)]
								leading-tight
								tracking-[0.05em]
								text-brand-text-primary
								uppercase
							"
						>
							{heading}
						</h2>
					</ScrollReveal>
				)}

				<ScrollReveal direction="up" distance={40} delay={0.15} duration={0.6}>
					<div
						className="
							flex
							flex-col
							gap-5

							sm:gap-6

							lg:flex-row
							lg:gap-8
						"
					>
						<FlipCard front={front} back={back} />

						<FlipCard front={front2} back={back2} />
					</div>
				</ScrollReveal>

				{showKnowMore && (
					<ScrollReveal direction="up" distance={24} delay={0.3} duration={0.6}>
						<div className="mt-12.5 mb-4 flex justify-center sm:mb-0">
							<OutlineArrowButton
								href="/our-brand"
								className={cn(
									audienceMarketingOutlineCtaClass,
									"max-lg:!w-fit max-lg:!max-w-full",
								)}
								iconClassName={audienceMarketingOutlineCtaIconClass}
							>
								Know More
							</OutlineArrowButton>
						</div>
					</ScrollReveal>
				)}
			</Container>
		</section>
	);
}
