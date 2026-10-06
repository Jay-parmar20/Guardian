// "use client";

// import { Container } from "@/components/common/Container";
// import { ScrollReveal } from "@/components/animations/ScrollReveal";
// import { CarouselControls } from "@/components/ui/CarouselControls";
// import { useCycleIndex } from "@/hooks/useCycleIndex";
// import { useViewportIsMobile } from "@/hooks/useViewportIsMobile";
// import { marketingClasses } from "@/styles/marketingClasses";
// import { cn } from "@/utils/cn";
// import Image from "next/image";
// import { memo, useEffect, useLayoutEffect, useMemo, useRef } from "react";

// const VISIBLE_COUNT = 4;
// /** Match `sm:` breakpoint — mobile shows one testimonial per carousel step. */
// const MOBILE_CAROUSEL_BREAKPOINT_PX = 640;

// const partnerLogo = (group: number) =>
// 	`/images/partners/logos/Group ${group}.png`;

// export type PartnersTestimonial = {
// 	id: string;
// 	brandLogoSrc: string;
// 	brandLogoAlt: string;
// 	quote: string;
// 	name: string;
// 	role: string;
// 	location: string;

// 	// Optional video testimonial
// 	videoSrc?: string;
// 	videoPosterSrc?: string;
// };

// const TESTIMONIALS: PartnersTestimonial[] = [
// 	{
// 		id: "1",
// 		brandLogoSrc: "/images/partners/gbd-logo.png",
// 		brandLogoAlt: "GBD Realty",
// 		quote:
// 			"Our journey is defined by the trust and confidence of our esteemed clients. Bajrang Singh, Managing Director of GBD Realty, shares his thoughts on our collaboration and the impact we’ve created together. Stay tuned as we bring you more success stories!",
// 		name: "Bajrang Singh",
// 		role: "Managing Director, GBD Realty",
// 		location: "Mumbai",
// 	},
// 	{
// 		id: "2",
// 		brandLogoSrc: "/images/partners/haware-logo.png",
// 		brandLogoAlt: "Haware Properties",
// 		quote:
// 			"We take pride in delivering excellence, and nothing speaks louder than the words of our valued clients. Amit Haware, CEO & MD of Haware Properties, shares his experience working with us, highlighting our commitment to trust, quality, and innovation. Stay tuned for more insights!",
// 		name: "Priya Shah",
// 		role: "CEO & MD, Haware Properties",
// 		location: "Mumbai",
// 	},
// 	{
// 		id: "3",
// 		brandLogoSrc: "/images/partners/promesa-logo.svg",
// 		brandLogoAlt: "Promesa Realty",
// 		quote:
// 			"Mamik Jain & Pritesh Jain, Directors of Promesa Realty, share their insights on the evolving real estate landscape. Stay tuned as we bring you their vision, expertise, and success story!",
// 		name: "Rahul Verma",
// 		role: "Directors of Promesa Realty",
// 		location: "Mumbai",
// 	},
// 	{
// 		id: "4",
// 		brandLogoSrc: "/images/partners/adani-logo.png",
// 		brandLogoAlt: "Adani Realty",
// 		quote: "",
// 		name: "Abhishek Naagar",
// 		role: "Project Manager, Adani Realty",
// 		location: "BKC, Mumbai",

// 		videoSrc: "/videos/partners/adani-testimonial.mp4",
// 		videoPosterSrc: "/images/partners/adani-testimonial-poster.png",
// 	},
// ];

// export const TestimonialCard = memo(function TestimonialCard({
// 	item,
// }: {
// 	item: PartnersTestimonial;
// }) {
// 	const isVideo = Boolean(item.videoSrc);

// 	return (
// 		<article
// 			data-testimonial-card
// 			className={cn(
// 				"group flex h-full w-full min-w-0 max-w-full flex-col overflow-hidden border border-black/10 will-change-transform",
// 				"transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(22,20,19,0.18)]",
// 				"bg-[radial-gradient(circle_at_center,#BCBDC0_1px,transparent_1px),linear-gradient(110deg,rgba(188,189,192,0.2)_0%,rgba(143,129,131,0.2)_100%)]",
// 				"bg-size-[14px_14px,100%_100%] [background-repeat:repeat,no-repeat]",
// 			)}
// 		>
// 			{isVideo ? (
// 				/* VIDEO TESTIMONIAL */
// 				<div className="relative flex min-h-0 flex-1 p-[15px]">
// 					<div className="relative w-full overflow-hidden bg-white">
// 						<video
// 							src={item.videoSrc}
// 							poster={item.videoPosterSrc}
// 							controls
// 							playsInline
// 							preload="metadata"
// 							className="
// 								h-full
// 								min-h-[260px]
// 								w-full
// 								object-cover
// 								sm:min-h-[300px]
// 								lg:min-h-[314px]
// 							"
// 						/>

// 						{/* Logo pill over video */}
// 						<div
// 							className="
// 								pointer-events-none
// 								absolute
// 								left-5
// 								top-5
// 								z-10
// 								flex
// 								h-[44px]
// 								min-w-[130px]
// 								items-center
// 								justify-center
// 								rounded-full
// 								bg-white
// 								px-5
// 								sm:h-[50px]
// 								sm:min-w-[150px]
// 							"
// 						>
// 							<Image
// 								src={item.brandLogoSrc}
// 								alt={item.brandLogoAlt}
// 								width={100}
// 								height={50}
// 								className="max-h-[42px] w-auto max-w-[90px] object-contain"
// 							/>
// 						</div>
// 					</div>
// 				</div>
// 			) : (
// 				/* EXISTING TEXT TESTIMONIAL — unchanged */
// 				<div className="flex min-h-0 flex-1 flex-col p-5 sm:p-8 lg:p-10">
// 					<div className="flex w-fit max-w-full min-w-[9.5rem] items-center justify-center rounded-full bg-white px-5 py-2 shadow-sm transition-transform duration-300 group-hover:scale-[1.02]">
// 						<Image
// 							src={item.brandLogoSrc}
// 							alt={item.brandLogoAlt}
// 							width={200}
// 							height={48}
// 							className="h-9 w-auto max-w-[10rem] object-contain object-left sm:h-10"
// 						/>
// 					</div>

// 					<span className="mt-6 block text-brand-text-primary sm:mt-8">
// 						<Image
// 							src="/images/invertedComma.svg"
// 							alt=""
// 							width={27}
// 							height={27}
// 							className="object-cover"
// 						/>
// 					</span>

// 					<p className="mt-4 flex-1 n-bold text-[14px] leading-[22px] text-brand-text-primary sm:mt-5 sm:text-[clamp(0.9375rem,2.5vw,1.125rem)] sm:leading-6">
// 						{item.quote}
// 					</p>
// 				</div>
// 			)}

// 			{/* Footer — same for text + video */}
// 			<div className="mt-auto shrink-0 border-t border-black/10 bg-[#161616] px-5 py-4 sm:px-8 sm:py-5 lg:px-10">
// 				<p className="n-bold text-sm text-[#BCBDC0]">{item.name}</p>

// 				<p className="mt-0.5 n-reg text-sm text-[#BCBDC0]">{item.role}</p>

// 				{item.location && (
// 					<p className="mt-0.5 n-reg text-xs text-[#BCBDC0]/70">
// 						{item.location}
// 					</p>
// 				)}
// 			</div>
// 		</article>
// 	);
// });

// function visibleForPage(
// 	items: PartnersTestimonial[],
// 	page: number,
// ): PartnersTestimonial[] {
// 	const n = items.length;
// 	const visibleCount = Math.min(VISIBLE_COUNT, n);
// 	return Array.from({ length: visibleCount }, (_, offset) => {
// 		const i = (page * visibleCount + offset) % n;
// 		return items[i]!;
// 	});
// }

// export function PartnersTestimonials() {
// 	const items = TESTIMONIALS;
// 	const n = items.length;
// 	const visibleCount = Math.min(VISIBLE_COUNT, n);
// 	const isMobileCarousel = useViewportIsMobile(
// 		true,
// 		MOBILE_CAROUSEL_BREAKPOINT_PX,
// 	);
// 	const desktopPageCount = Math.max(1, Math.ceil(n / visibleCount));
// 	const pageCount = isMobileCarousel ? n : desktopPageCount;
// 	const { index: page, advance, setIndex } = useCycleIndex(pageCount, 0);

// 	const visible = useMemo(() => visibleForPage(items, page), [items, page]);

// 	const mobileIndex = page;
// 	const gridRef = useRef<HTMLDivElement>(null);

// 	useEffect(() => {
// 		setIndex((current) => (current >= pageCount ? 0 : current));
// 	}, [pageCount, setIndex]);

// 	useLayoutEffect(() => {
// 		const grid = gridRef.current;
// 		if (!grid) return;

// 		const syncHeights = () => {
// 			if (!window.matchMedia("(min-width: 640px)").matches) {
// 				grid
// 					.querySelectorAll<HTMLElement>("[data-testimonial-card]")
// 					.forEach((card) => {
// 						card.style.minHeight = "";
// 					});
// 				return;
// 			}

// 			const cards = grid.querySelectorAll<HTMLElement>(
// 				"[data-testimonial-card]",
// 			);
// 			cards.forEach((card) => {
// 				card.style.minHeight = "";
// 			});

// 			let maxHeight = 0;
// 			cards.forEach((card) => {
// 				maxHeight = Math.max(maxHeight, card.offsetHeight);
// 			});

// 			if (maxHeight > 0) {
// 				cards.forEach((card) => {
// 					card.style.minHeight = `${maxHeight}px`;
// 				});
// 			}
// 		};

// 		syncHeights();

// 		const observer = new ResizeObserver(syncHeights);
// 		observer.observe(grid);
// 		grid.querySelectorAll("[data-testimonial-card]").forEach((card) => {
// 			observer.observe(card);
// 		});

// 		window.addEventListener("resize", syncHeights);
// 		return () => {
// 			observer.disconnect();
// 			window.removeEventListener("resize", syncHeights);
// 		};
// 	}, [page, visible]);

// 	return (
// 		<section
// 			className="bg-brand-background py-12 sm:pt-0 sm:pb-14 lg:pb-25"
// 			aria-labelledby="pc-testimonials-heading"
// 		>
// 			<Container>
// 				<ScrollReveal direction="up" duration={0.6} distance={40}>
// 					<div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
// 						<h2
// 							id="pc-testimonials-heading"
// 							className={cn(
// 								marketingClasses.headingDisplayMd,
// 								"max-w-[330px] text-[30px] leading-[36px] sm:max-w-full sm:text-[clamp(1.75rem,3vw,2.625rem)] sm:leading-tight",
// 							)}
// 						>
// 							What Our Clients Say
// 						</h2>
// 						<CarouselControls
// 							className="w-auto"
// 							currentIndex={page}
// 							total={pageCount}
// 							onPrev={() => advance(-1)}
// 							onNext={() => advance(1)}
// 							prevLabel="Previous testimonials"
// 							nextLabel="Next testimonials"
// 						/>
// 					</div>
// 				</ScrollReveal>

// 				{/* Desktop / tablet: 2×2 grid — equal-height cards (Figma) */}
// 				<div
// 					ref={gridRef}
// 					className="mt-8 hidden grid-cols-2 items-stretch gap-4 sm:mt-10 sm:grid sm:gap-5 lg:gap-6"
// 				>
// 					{visible.map((item, cardIndex) => (
// 						<ScrollReveal
// 							key={`${item.id}-page-${page}-${cardIndex}`}
// 							className="flex h-full w-full min-h-0"
// 							direction="up"
// 							delay={cardIndex * 0.06}
// 							distance={32}
// 						>
// 							<TestimonialCard item={item} />
// 						</ScrollReveal>
// 					))}
// 				</div>

// 				{/* Mobile: one card per step (1 / n) */}
// 				<div className="mt-8 sm:hidden">
// 					<ScrollReveal
// 						key={items[mobileIndex]!.id}
// 						direction="up"
// 						delay={0.1}
// 						distance={32}
// 					>
// 						<TestimonialCard item={items[mobileIndex]!} />
// 					</ScrollReveal>
// 				</div>
// 			</Container>
// 		</section>
// 	);
// }

"use client";

import { Container } from "@/components/common/Container";

import { ScrollReveal } from "@/components/animations/ScrollReveal";

import { CarouselControls } from "@/components/ui/CarouselControls";

import { useCycleIndex } from "@/hooks/useCycleIndex";

import { useViewportIsMobile } from "@/hooks/useViewportIsMobile";

import { marketingClasses } from "@/styles/marketingClasses";

import { cn } from "@/utils/cn";

import Image from "next/image";

import {
	memo,
	useEffect,
	useLayoutEffect,
	useMemo,
	useRef,
	useState,
} from "react";

const VISIBLE_COUNT = 4;

/** Match `sm:` breakpoint — mobile shows one testimonial per carousel step. */

const MOBILE_CAROUSEL_BREAKPOINT_PX = 640;

export type PartnersTestimonial = {
	id: string;
	name: string;
	role: string;

	// Text testimonial fields
	quote?: string;
	brandLogoSrc?: string;
	brandLogoAlt?: string;

	// Video testimonial field
	videoUrl?: string;
};

function getYouTubeVideoId(url?: string): string | null {
	if (!url) return null;

	const match = url.match(
		/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([^?&/]+)/,
	);

	return match?.[1] ?? null;
}

const TESTIMONIALS: PartnersTestimonial[] = [
	// Text / logo testimonials
	{
		id: "text-1",
		brandLogoSrc: "/images/partners/gbd-logo.png",
		brandLogoAlt: "GBD Realty",
		quote:
			"Our journey is defined by the trust and confidence of our esteemed clients. Bajrang Singh, Managing Director of GBD Realty, shares his thoughts on our collaboration and the impact we’ve created together. Stay tuned as we bring you more success stories!",
		name: "Bajrang Singh",
		role: "Managing Director, GBD Realty",
	},
	{
		id: "text-2",
		brandLogoSrc: "/images/partners/haware-logo.png",
		brandLogoAlt: "Haware Properties",
		quote:
			"We take pride in delivering excellence, and nothing speaks louder than the words of our valued clients. Amit Haware, CEO & MD of Haware Properties, shares his experience working with us, highlighting our commitment to trust, quality, and innovation. Stay tuned for more insights!",
		name: "Priya Shah",
		role: "CEO & MD, Haware Properties",
	},
	{
		id: "text-3",
		brandLogoSrc: "/images/partners/promesa-logo.svg",
		brandLogoAlt: "Promesa Realty",
		quote:
			"Mamik Jain & Pritesh Jain, Directors of Promesa Realty, share their insights on the evolving real estate landscape. Stay tuned as we bring you their vision, expertise, and success story!",
		name: "Rahul Verma",
		role: "Directors of Promesa Realty",
	},

	// YouTube video testimonials
	{
		id: "video-1",
		name: "Bajrang Singh",
		role: "Managing Director, GBD Realty",
		videoUrl: "https://youtu.be/Xx2PRu_b45A?si=SHap5v0sFhrxFIx4",
	},
	{
		id: "video-2",
		name: "Amit Haware",
		role: "CEO & MD of Haware Properties",
		videoUrl: "https://youtu.be/QvBvI6M0CNo?si=WhsbcqkYGvxuSvWU",
	},
	{
		id: "video-3",
		name: "Shraddha Goradia",
		role: "Director - Dosti Realty",
		videoUrl: "https://youtu.be/TK9mGYMq2Lw?si=AaVe303n5NhN5ca9",
	},
	{
		id: "video-4",
		name: "Parag Shah",
		role: "Chairman - MICL",
		videoUrl: "https://youtu.be/aPoo-c6eIiY?si=VUEURoz2QHrEG_GF",
	},
	{
		id: "video-5",
		name: "Sanjay Jain",
		role: "MD - Siddha Group",
		videoUrl: "https://youtu.be/c5R9XJ1OuTE?si=k6BdfqhmbkyN1NKp",
	},
	{
		id: "video-6",
		name: "Architect Hafeez Contractor",
		role: "Renowned Architect & Padma Bhushan Awardee",
		videoUrl: "https://youtu.be/rCdUYvZX4Ec?si=SRJumien-Lov-3qh",
	},
	{
		id: "video-7",
		name: "Jay Goenka",
		role: "Director - Dynamix Group",
		videoUrl: "https://youtu.be/ma46tq3rKAE?si=JLVb8n7ecn1c4kzM",
	},
];

export const TestimonialCard = memo(function TestimonialCard({
	item,
}: {
	item: PartnersTestimonial;
}) {
	const youtubeVideoId = getYouTubeVideoId(item.videoUrl);
	const isVideo = Boolean(youtubeVideoId);
	const [isPlaying, setIsPlaying] = useState(false);

	useEffect(() => {
		setIsPlaying(false);
	}, [item.id]);

	return (
		<article
			data-testimonial-card
			className={cn(
				"group flex h-full w-full min-w-0 max-w-full flex-col overflow-hidden border border-black/10 will-change-transform",
				"transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(22,20,19,0.18)]",
				"bg-[radial-gradient(circle_at_center,#BCBDC0_1px,transparent_1px),linear-gradient(110deg,rgba(188,189,192,0.2)_0%,rgba(143,129,131,0.2)_100%)]",
				"bg-size-[14px_14px,100%_100%] [background-repeat:repeat,no-repeat]",
			)}
		>
			{isVideo && youtubeVideoId ? (
				/* VIDEO TESTIMONIAL */
				<div className="relative flex min-h-0 flex-1 p-[15px]">
					<div className="relative min-h-[260px] w-full overflow-hidden bg-black sm:min-h-[300px] lg:min-h-[314px]">
						{isPlaying ? (
							<iframe
								src={`https://www.youtube-nocookie.com/embed/${youtubeVideoId}?autoplay=1&rel=0`}
								title={`${item.name} testimonial video`}
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowFullScreen
								className="absolute inset-0 h-full w-full border-0"
							/>
						) : (
							<button
								type="button"
								onClick={() => setIsPlaying(true)}
								aria-label={`Play testimonial video by ${item.name}`}
								className="absolute inset-0 grid h-full w-full cursor-pointer place-items-center overflow-hidden bg-black bg-cover bg-center p-0"
								style={{
									backgroundImage: `url(https://img.youtube.com/vi/${youtubeVideoId}/maxresdefault.jpg), url(https://img.youtube.com/vi/${youtubeVideoId}/hqdefault.jpg)`,
								}}
							>
								<span className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/30" />

								<span className="relative z-10 grid h-16 w-16 place-items-center rounded-full bg-white/95 shadow-[0_8px_30px_rgba(0,0,0,0.28)] transition-transform duration-300 group-hover:scale-110 sm:h-[72px] sm:w-[72px]">
									<svg
										viewBox="0 0 24 24"
										aria-hidden="true"
										className="ml-1 h-7 w-7 fill-[#161616] sm:h-8 sm:w-8"
									>
										<path d="M8 5v14l11-7z" />
									</svg>
								</span>
							</button>
						)}
					</div>
				</div>
			) : (
				/* TEXT TESTIMONIAL */
				<div className="flex min-h-0 flex-1 flex-col p-5 sm:p-8 lg:p-10">
					{item.brandLogoSrc && item.brandLogoAlt && (
						<div className="flex w-fit max-w-full min-w-[9.5rem] items-center justify-center rounded-full bg-white px-5 py-2 shadow-sm transition-transform duration-300 group-hover:scale-[1.02]">
							<Image
								src={item.brandLogoSrc}
								alt={item.brandLogoAlt}
								width={200}
								height={48}
								className="h-9 w-auto max-w-[10rem] object-contain object-left sm:h-10"
							/>
						</div>
					)}

					<span className="mt-6 block text-brand-text-primary sm:mt-8">
						<Image
							src="/images/invertedComma.svg"
							alt=""
							width={27}
							height={27}
							className="object-cover"
						/>
					</span>

					<p className="mt-4 flex-1 n-bold text-[14px] leading-[22px] text-brand-text-primary sm:mt-5 sm:text-[clamp(0.9375rem,2.5vw,1.125rem)] sm:leading-6">
						{item.quote}
					</p>
				</div>
			)}

			<div className="mt-auto shrink-0 border-t border-black/10 bg-[#161616] px-5 py-4 sm:px-8 sm:py-5 lg:px-10">
				<p className="n-bold text-sm text-[#BCBDC0]">{item.name}</p>
				<p className="mt-0.5 n-reg text-sm text-[#BCBDC0]">{item.role}</p>
			</div>
		</article>
	);
});

function visibleForPage(
	items: PartnersTestimonial[],
	page: number,
): PartnersTestimonial[] {
	const start = page * VISIBLE_COUNT;
	return items.slice(start, start + VISIBLE_COUNT);
}

export function PartnersTestimonials() {
	const items = TESTIMONIALS;

	const n = items.length;

	const visibleCount = Math.min(VISIBLE_COUNT, n);

	const isMobileCarousel = useViewportIsMobile(
		true,

		MOBILE_CAROUSEL_BREAKPOINT_PX,
	);

	const desktopPageCount = Math.max(1, Math.ceil(n / visibleCount));

	const pageCount = isMobileCarousel ? n : desktopPageCount;

	const { index: page, advance, setIndex } = useCycleIndex(pageCount, 0);

	const visible = useMemo(() => visibleForPage(items, page), [items, page]);

	const mobileIndex = page;

	const gridRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		setIndex((current) => (current >= pageCount ? 0 : current));
	}, [pageCount, setIndex]);

	useLayoutEffect(() => {
		const grid = gridRef.current;

		if (!grid) return;

		const syncHeights = () => {
			if (!window.matchMedia("(min-width: 640px)").matches) {
				grid

					.querySelectorAll<HTMLElement>("[data-testimonial-card]")

					.forEach((card) => {
						card.style.minHeight = "";
					});

				return;
			}

			const cards = grid.querySelectorAll<HTMLElement>(
				"[data-testimonial-card]",
			);

			cards.forEach((card) => {
				card.style.minHeight = "";
			});

			let maxHeight = 0;

			cards.forEach((card) => {
				maxHeight = Math.max(maxHeight, card.offsetHeight);
			});

			if (maxHeight > 0) {
				cards.forEach((card) => {
					card.style.minHeight = `${maxHeight}px`;
				});
			}
		};

		syncHeights();

		const observer = new ResizeObserver(syncHeights);

		observer.observe(grid);

		grid.querySelectorAll("[data-testimonial-card]").forEach((card) => {
			observer.observe(card);
		});

		window.addEventListener("resize", syncHeights);

		return () => {
			observer.disconnect();

			window.removeEventListener("resize", syncHeights);
		};
	}, [page, visible]);

	return (
		<section
			className="bg-brand-background py-12 sm:pt-0 sm:pb-14 lg:pb-25"
			aria-labelledby="pc-testimonials-heading"
		>
			<Container>
				<ScrollReveal direction="up" duration={0.6} distance={40}>
					<div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
						<h2
							id="pc-testimonials-heading"
							className={cn(
								marketingClasses.headingDisplayMd,

								"max-w-[330px] text-[30px] leading-[36px] sm:max-w-full sm:text-[clamp(1.75rem,3vw,2.625rem)] sm:leading-tight",
							)}
						>
							What Our Clients Say
						</h2>

						<CarouselControls
							className="w-auto"
							currentIndex={page}
							total={pageCount}
							onPrev={() => advance(-1)}
							onNext={() => advance(1)}
							prevLabel="Previous testimonials"
							nextLabel="Next testimonials"
						/>
					</div>
				</ScrollReveal>

				{/* Desktop / tablet: 2×2 grid — equal-height cards (Figma) */}

				<div
					ref={gridRef}
					className="mt-8 hidden grid-cols-2 items-stretch gap-4 sm:mt-10 sm:grid sm:gap-5 lg:gap-6"
				>
					{visible.map((item, cardIndex) => (
						<ScrollReveal
							key={`${item.id}-page-${page}-${cardIndex}`}
							className="flex h-full w-full min-h-0"
							direction="up"
							delay={cardIndex * 0.06}
							distance={32}
						>
							<TestimonialCard item={item} />
						</ScrollReveal>
					))}
				</div>

				{/* Mobile: one card per step (1 / n) */}

				<div className="mt-8 sm:hidden">
					<ScrollReveal
						key={items[mobileIndex]!.id}
						direction="up"
						delay={0.1}
						distance={32}
					>
						<TestimonialCard item={items[mobileIndex]!} />
					</ScrollReveal>
				</div>
			</Container>
		</section>
	);
}
