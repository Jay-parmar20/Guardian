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
		src: LOCAL_IMAGES.carousel1,
		alt: "Life at The Guardians",
	},
	{
		id: 2,
		src: LOCAL_IMAGES.carousel2,
		alt: "Life at The Guardians",
	},
	{
		id: 3,
		src: LOCAL_IMAGES.carousel3,
		alt: "Life at The Guardians",
	},
	{
		id: 4,
		src: LOCAL_IMAGES.carousel4,
		alt: "Life at The Guardians",
	},
	{
		id: 5,
		src: LOCAL_IMAGES.carousel5,
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
			<div className="relative h-[320px] w-full overflow-hidden bg-[#BCBDC0] sm:h-[500px] lg:h-[650px]">
				{/* Image */}
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
							className="object-contain object-center"
							sizes="100vw"
							priority={index === 0}
						/>
					</motion.div>
				</AnimatePresence>

				{/* Previous button */}
				<button
					type="button"
					aria-label="Previous slide"
					onClick={() => advance(-1)}
					className="absolute left-4 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 shadow-md hover:bg-white sm:left-8"
				>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
						<path
							d="M15 6L9 12L15 18"
							stroke="black"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</button>

				{/* Next button */}
				<button
					type="button"
					aria-label="Next slide"
					onClick={() => advance(1)}
					className="absolute right-4 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 shadow-md hover:bg-white sm:right-8"
				>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
						<path
							d="M9 6L15 12L9 18"
							stroke="black"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</button>

				{/* Pagination dots */}
				<div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black/30 px-3 py-2">
					{careerSlides.map((item, i) => (
						<button
							key={item.id}
							type="button"
							aria-label={`Go to slide ${i + 1}`}
							onClick={() => {
								if (i > index) {
									for (let x = index; x < i; x++) {
										advance(1);
									}
								} else if (i < index) {
									for (let x = index; x > i; x--) {
										advance(-1);
									}
								}
							}}
							className={cn(
								"h-2 rounded-full transition-all",
								i === index ? "w-6 bg-white" : "w-2 bg-white/60",
							)}
						/>
					))}
				</div>
			</div>
		</ScrollReveal>
	);
}

export function LifeAtGuardians() {
	return (
		<section
			className="bg-white py-14 sm:py-20 lg:py-25"
			aria-labelledby="life-heading"
		>
			<Container>
				<ScrollReveal direction="up" distance={30}>
					<h2 className="qs-reg text-center text-[30px] uppercase leading-[36px] tracking-[0.05em] text-[#000000] sm:text-[clamp(1.75rem,3.5vw,3.125rem)] sm:leading-tight">
						Life at Guardians
					</h2>
				</ScrollReveal>

				<ScrollReveal direction="up" delay={0.08} distance={30}>
					<p className="n-book mx-auto my-5 max-w-[330px] text-center text-[14px] leading-[22px] tracking-[0%] text-[#161616] sm:max-w-[760px] sm:text-[16px] sm:leading-[24px] lg:my-12.5 lg:max-w-none lg:text-[20px] lg:leading-[24px]">
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
