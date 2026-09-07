"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Container } from "@/components/common/Container";
import type { OurWorkBandContent } from "@/data/audience-marketing";
import { useCycleIndex } from "@/hooks/useCycleIndex";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const slideTransition = { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const };

export function DeveloperOurWorkSection({
	content,
}: {
	content: OurWorkBandContent;
}) {
	const slides = content.slides;
	const total = slides.length;
	const { index, advance } = useCycleIndex(total, 0);
	const slide = slides[index]!;

	return (
		<section
			className="w-full bg-white py-10 md:py-14 lg:py-25"
			aria-labelledby="dev-our-work-heading"
		>
			<Container className="min-w-0">
				<ScrollReveal direction="up" distance={30}>
					<h2
						id="dev-our-work-heading"
						className="qs-reg text-center text-[clamp(2rem,4.2vw,3.25rem)] uppercase leading-[1.05] tracking-[0.02em] text-brand-text-primary"
					>
						{content.sectionTitle}
					</h2>
				</ScrollReveal>

				<div className="relative mt-10 md:mt-12">
					{/* Desktop: arrows outside panel */}
					{/* Desktop: arrows outside panel */}
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

					{/* Case study panel */}
					<AnimatePresence mode="wait" initial={false}>
						<motion.div
							key={slide.id}
							initial={{ opacity: 0, y: 12 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -8 }}
							transition={slideTransition}
							className={cn(
								"grid bg-[#f5f5f5] lg:grid-cols-[3fr_2fr]",
								content.gridClassName,
							)}
						>
							{/* Left: Image */}
							<div
								className={cn(
									"relative flex h-[350px] items-center justify-center bg-[#f5f5f5] p-6 sm:p-8 sm:h-[420px] md:p-10 lg:h-[520px]",
									content.imageClassName,
								)}
							>
								<Image
									src={slide.imageSrc}
									alt=""
									width={800}
									height={600}
									className="h-auto w-full object-contain"
									sizes="(max-width: 1024px) 100vw, 60vw"
								/>
							</div>

							{/* Right: Content */}
							<div className="flex flex-col justify-center p-6 sm:p-8 md:p-10 lg:p-12">
								{slide.label && (
									<span className="n-bold text-[11px] uppercase tracking-[0.15em] text-[#c0392b]">
										{slide.label}
									</span>
								)}
								<h3 className="mt-3 n-bold text-[clamp(1.125rem,2.2vw,1.75rem)] uppercase leading-[1.2] tracking-[0.01em] text-[#161616]">
									{slide.title}
								</h3>

								{slide.stats && slide.stats.length > 0 && (
									<div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-5 sm:gap-x-12 sm:gap-y-6">
										{slide.stats.map((stat) => (
											<div key={stat.label}>
												<div className="n-bold text-[clamp(1.25rem,2vw,1.625rem)] leading-none text-[#161616]">
													{stat.value}
												</div>
												<div className="mt-1 n-book text-[11px] uppercase tracking-wide text-[#666]">
													{stat.label}
												</div>
											</div>
										))}
									</div>
								)}

								<p className="mt-6 max-w-lg n-book text-[13px] leading-[1.7] text-[#555] sm:text-[14px]">
									{slide.body}
								</p>
							</div>
						</motion.div>
					</AnimatePresence>

					{/* Mobile arrows */}
					{/* Mobile / tablet arrows */}
					<div className="mt-5 flex items-center justify-center gap-5 lg:hidden">
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

					{/* Pagination dots */}
					<div className="mt-5 flex items-center justify-center gap-2">
						{slides.map((s, i) => (
							<span
								key={s.id}
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
