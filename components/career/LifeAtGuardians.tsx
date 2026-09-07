"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Container } from "@/components/common/Container";
import { useCycleIndex } from "@/hooks/useCycleIndex";
import { LOCAL_IMAGES } from "@/lib/local-images";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const careerSlides = [
	{
		id: 1,
		src: LOCAL_IMAGES.workWithUs,
		alt: "Life at The Guardians — team at work",
	},
	{
		id: 2,
		src: LOCAL_IMAGES.workWithUs,
		alt: "Life at The Guardians",
	},
	{
		id: 3,
		src: LOCAL_IMAGES.workWithUs,
		alt: "Life at The Guardians",
	},
];

const slideTransition = {
	duration: 0.35,
	ease: [0.22, 1, 0.36, 1] as const,
};

function CareerImageCarousel() {
	const total = careerSlides.length;
	const { index, advance } = useCycleIndex(total, 0);
	const slide = careerSlides[index]!;

	return (
		<ScrollReveal direction="up" delay={0.1} distance={28}>
			<div
				className="relative w-full overflow-hidden bg-[#BCBDC0]"
				style={{ height: "clamp(200px, 32vw, 400px)" }}
			>
				{/* Slides */}
				<AnimatePresence mode="wait" initial={false}>
					<motion.div
						key={slide.id}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={slideTransition}
						className="absolute inset-0"
					>
						<Image
							src={slide.src}
							alt={slide.alt}
							fill
							className="object-cover object-center"
							sizes="100vw"
							priority={index === 0}
						/>
					</motion.div>
				</AnimatePresence>

				{/* Previous arrow */}
				{total > 1 && (
					<button
						type="button"
						aria-label="Previous slide"
						onClick={() => advance(-1)}
						className={cn(
							"absolute left-4 top-1/2 z-20 -translate-y-1/2",
							"flex h-[42px] w-[42px] items-center justify-center",
							"sm:left-8",
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
				)}

				{/* Next arrow */}
				{total > 1 && (
					<button
						type="button"
						aria-label="Next slide"
						onClick={() => advance(1)}
						className={cn(
							"absolute right-4 top-1/2 z-20 -translate-y-1/2",
							"flex h-[42px] w-[42px] items-center justify-center",
							"sm:right-8",
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
				)}

				{/* Pagination dots — OVER the image */}
				{total > 1 && (
					<div
						className={cn(
							"absolute bottom-5 left-1/2 z-20 -translate-x-1/2",
							"flex items-center justify-center gap-[4px]",
							"rounded-full bg-black/30 px-[7px] py-[5px]",
						)}
					>
						{careerSlides.map((item, i) => (
							<button
								key={item.id}
								type="button"
								aria-label={`Go to slide ${i + 1}`}
								onClick={() => advance(i - index)}
								className="flex h-[6px] min-w-[6px] items-center justify-center"
							>
								<span
									className={cn(
										"block rounded-full transition-all duration-300",
										i === index
											? "h-[4px] w-[12px] bg-white"
											: "h-[4px] w-[4px] bg-white/60",
									)}
								/>
							</button>
						))}
					</div>
				)}
			</div>
		</ScrollReveal>
	);
}

export function LifeAtGuardians() {
	return (
		<section className="bg-white lg:py-25" aria-labelledby="life-heading">
			<Container>
				<ScrollReveal direction="up" distance={30}>
					<h2 className="qs-reg text-center uppercase tracking-[0.05em] text-[clamp(1.75rem,3.5vw,3.125rem)] leading-tight text-[#000000]">
						Life at Guardians
					</h2>
				</ScrollReveal>

				<ScrollReveal direction="up" delay={0.08} distance={30}>
					<p className="n-book mx-auto text-center text-[20px] leading-[24px] tracking-[0%] text-[#161616] lg:my-12.5">
						The Guardians is not only dedicated to work but also provide a
						healthy work-life balance which is evident through the various fun
						activities conducted by us. It helps our employees bond better,
						refreshes them &amp; gives them the zeal to come back to work more
						enthusiastically.
					</p>
				</ScrollReveal>
			</Container>

			{/* Carousel */}
			<CareerImageCarousel />
		</section>
	);
}
