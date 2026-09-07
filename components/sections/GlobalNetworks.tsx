"use client";

import { Container } from "@/components/common/Container";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { OutlineArrowButton } from "@/components/common/OutlineArrowButton";
import {
	audienceMarketingOutlineCtaClass,
	audienceMarketingOutlineCtaIconClass,
} from "@/styles/audienceMarketingCenter";
import { cn } from "@/utils/cn";
import { useState } from "react";

interface GlobalNetworksSide {
	imageSrc: string;
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
	imageSrc: "/images/about/GN-1.png",
	imageAlt: "NRIs in India",
	heading: "NRIs IN INDIA",
};

const defaultBack: GlobalNetworksSide = {
	imageSrc: "/images/about/GN-2.png",
	imageAlt: "Indians in Dubai",
	heading: "FOR INDIANS IN DUBAI",
	description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};

const defaultFront2: GlobalNetworksSide = {
	imageSrc: "/images/about/GN-1.png",
	imageAlt: "NRIs in India",
	heading: "NRIs IN INDIA",
};

const defaultBack2: GlobalNetworksSide = {
	imageSrc: "/images/about/GN-2.png",
	imageAlt: "Global Network 2 Back",
	heading: "WORLDWIDE REACH",
	description: "Connecting markets across the globe.",
};

function FlipCard({
	front,
	back,
}: {
	front: GlobalNetworksSide;
	back: GlobalNetworksSide;
}) {
	const [isFlipped, setIsFlipped] = useState(false);

	return (
		<div
			className="group relative w-full min-w-0 cursor-pointer"
			style={{ perspective: "1200px" }}
		>
			<div
				className={cn(
					"relative aspect-[578/400] w-full transition-transform duration-700 ease-in-out",
					isFlipped
						? "[transform:rotateY(180deg)]"
						: "[transform:rotateY(0deg)]",
				)}
				style={{
					transformStyle: "preserve-3d",
				}}
				onMouseEnter={() => setIsFlipped(true)}
				onMouseLeave={() => setIsFlipped(false)}
				onClick={() => setIsFlipped((prev) => !prev)}
			>
				{/* Front */}
				<div
					className="absolute inset-0 overflow-hidden"
					style={{ backfaceVisibility: "hidden" }}
				>
					{front.imageSrc ? (
						<img
							src={front.imageSrc}
							alt={front.imageAlt}
							className="h-full w-full object-cover"
						/>
					) : (
						<div className="h-full w-full bg-neutral-300" />
					)}
				</div>

				{/* Back */}
				<div
					className="absolute inset-0 overflow-hidden"
					style={{
						backfaceVisibility: "hidden",
						transform: "rotateY(180deg)",
					}}
				>
					{back.imageSrc ? (
						<img
							src={back.imageSrc}
							alt={back.imageAlt}
							className="h-full w-full object-cover"
						/>
					) : (
						<div className="h-full w-full bg-neutral-200" />
					)}
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
	const front = { ...defaultFront, ...frontSide };
	const back = { ...defaultBack, ...backSide };
	const front2 = { ...defaultFront2 };
	const back2 = { ...defaultBack2 };

	return (
		<section className={cn("py-0", className)} aria-label="Global Networks">
			<Container>
				{showHeadingAbove && (
					<ScrollReveal direction="up" distance={40} duration={0.6}>
						<h2 className=" mb-12.5 qs-reg text-center text-[clamp(1.75rem,3.5vw,3.125rem)] uppercase leading-tight tracking-[0.05em] text-brand-text-primary">
							{heading}
						</h2>
					</ScrollReveal>
				)}

				<ScrollReveal direction="up" distance={40} delay={0.15} duration={0.6}>
					<div className="flex lg:gap-8">
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
