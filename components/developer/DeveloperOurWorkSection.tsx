"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Container } from "@/components/common/Container";
import type { OurWorkBandContent } from "@/data/audience-marketing";
import { useCycleIndex } from "@/hooks/useCycleIndex";
import { LOCAL_IMAGES } from "@/lib/local-images";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const slideTransition = {
	duration: 0.35,
	ease: [0.22, 1, 0.36, 1] as const,
};

type CaseStudySlide = {
	id: number;
	imageSrc: string;
	alt: string;
};

const caseStudySlides: CaseStudySlide[] = [
	{
		id: 1,
		imageSrc: LOCAL_IMAGES.caseMaplewoods,
		alt: "Sai Proviso Galaxy Maplewoods case study",
	},
	{
		id: 2,
		imageSrc: LOCAL_IMAGES.caseMICL,
		alt: "MICL Aaradhya High Park case study",
	},
	{
		id: 3,
		imageSrc: LOCAL_IMAGES.caseMonteSouth,
		alt: "Monte South case study",
	},
	{
		id: 4,
		imageSrc: LOCAL_IMAGES.caseOneAvighna,
		alt: "One Avighna Park case study",
	},
	{
		id: 5,
		imageSrc: LOCAL_IMAGES.caseOneMarina,
		alt: "One Marina case study",
	},
	{
		id: 6,
		imageSrc: LOCAL_IMAGES.casePrestigeCity,
		alt: "Prestige City case study",
	},
	{
		id: 7,
		imageSrc: LOCAL_IMAGES.caseRivaliPark,
		alt: "CCI Rivali Park case study",
	},
	{
		id: 8,
		imageSrc: LOCAL_IMAGES.caseRunwal,
		alt: "Runwal 25 Hour Life case study",
	},
	{
		id: 9,
		imageSrc: LOCAL_IMAGES.caseSiliconValley,
		alt: "Kanakia Silicon Valley case study",
	},
	{
		id: 10,
		imageSrc: LOCAL_IMAGES.caseVasant,
		alt: "Vasant Oasis and Vasant Blossom case study",
	},
	{
		id: 11,
		imageSrc: LOCAL_IMAGES.caseAtlantis,
		alt: "Sai Proviso Atlantis case study",
	},
	{
		id: 12,
		imageSrc: LOCAL_IMAGES.caseDostiMumbai,
		alt: "Dosti 1 Mumbai case study",
	},
];

export function DeveloperOurWorkSection({
	content,
}: {
	content: OurWorkBandContent;
}) {
	const total = caseStudySlides.length;

	const { index, advance } = useCycleIndex(total, 0);

	const slide = caseStudySlides[index]!;

	return (
		<section
			className="w-full bg-white py-10 md:py-14 lg:py-25"
			aria-labelledby="dev-our-work-heading"
		>
			<Container className="min-w-0">
				{/* Heading */}
				<ScrollReveal direction="up" distance={30}>
					<h2
						id="dev-our-work-heading"
						className="qs-reg text-center text-[clamp(2rem,4.2vw,3.25rem)] uppercase leading-[1.05] tracking-[0.02em] text-brand-text-primary"
					>
						{content.sectionTitle}
					</h2>
				</ScrollReveal>

				<div className="relative mt-10 md:mt-12">
					{/* ========================= */}
					{/* DESKTOP PREVIOUS BUTTON */}
					{/* ========================= */}

					<button
						type="button"
						aria-label="Previous slide"
						onClick={() => advance(-1)}
						className={cn(
							"absolute left-[-68px] top-1/2 z-20 hidden -translate-y-1/2 lg:flex",
							"h-12 w-12 items-center justify-center",
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

					{/* ===================== */}
					{/* DESKTOP NEXT BUTTON */}
					{/* ===================== */}

					<button
						type="button"
						aria-label="Next slide"
						onClick={() => advance(1)}
						className={cn(
							"absolute right-[-68px] top-1/2 z-20 hidden -translate-y-1/2 lg:flex",
							"h-12 w-12 items-center justify-center",
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

					{/* ========================= */}
					{/* FULL CASE STUDY IMAGE */}
					{/* ========================= */}

					<div className="overflow-hidden">
						<AnimatePresence mode="wait" initial={false}>
							<motion.div
								key={slide.id}
								initial={{ opacity: 0, x: 30 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: -30 }}
								transition={slideTransition}
								className="relative w-full overflow-hidden"
							>
								<Image
									src={slide.imageSrc}
									alt={slide.alt}
									width={1920}
									height={1080}
									className="block h-auto w-full scale-[1.02]"
									sizes="(max-width: 768px) 100vw, 90vw"
									priority={index === 0}
								/>
							</motion.div>
						</AnimatePresence>
					</div>

					{/* ======================= */}
					{/* MOBILE / TABLET ARROWS */}
					{/* ======================= */}

					<div className="mt-5 flex items-center justify-center gap-5 lg:hidden">
						{/* Previous */}

						<button
							type="button"
							aria-label="Previous slide"
							onClick={() => advance(-1)}
							className="flex h-[42px] w-[42px] items-center justify-center"
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

						{/* Next */}

						<button
							type="button"
							aria-label="Next slide"
							onClick={() => advance(1)}
							className="flex h-[42px] w-[42px] items-center justify-center"
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

					{/* ================= */}
					{/* PAGINATION DOTS */}
					{/* ================= */}

					<div className="mt-5 flex flex-wrap items-center justify-center gap-2">
						{caseStudySlides.map((item, i) => (
							<span
								key={item.id}
								className={cn(
									"h-1.5 rounded-full transition-all duration-300",
									i === index ? "w-6 bg-[#161616]" : "w-1.5 bg-[#ccc]",
								)}
							/>
						))}
					</div>
				</div>
			</Container>
		</section>
	);
}
