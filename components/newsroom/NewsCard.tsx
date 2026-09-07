"use client";

import { OutlineArrowButton } from "@/components/common/OutlineArrowButton";
import { MarketingImgWithFallback } from "@/components/common/MarketingImgWithFallback";
import {
	audienceMarketingOutlineCtaIconClass,
	publicationCardOutlineCtaClassLgStart,
} from "@/styles/audienceMarketingCenter";
import { LOCAL_IMAGES } from "@/lib/local-images";
import { cn } from "@/utils/cn";
import Link from "next/link";
import Image from "next/image";
export type NewsArticle = {
	id: string;
	date: string;
	title: string;
	excerpt: string;
	imageSrc: string;
	imageAlt: string;
	href: string;
};

export function NewsCard({ article }: { article: NewsArticle }) {
	return (
		<article className="flex h-full flex-col">
			{/* Date */}
			<p className="n-book text-sm leading-[1.5] text-[#161616] sm:text-base">
				{article.date}
			</p>

			{/* Title */}
			<h3 className="mt-2 line-clamp-3 n-bold fs-20 lh-24 text-[#161616] sm:mt-3 sm:text-lg lg:text-xl">
				{article.title}
			</h3>

			{/* Image */}
			<div className="relative mt-3 w-full overflow-hidden bg-neutral-200 sm:mt-5">
				<div className="aspect-[250/175]">
					<MarketingImgWithFallback
						src={article.imageSrc}
						fallbackSrc={LOCAL_IMAGES.blogDetail}
						alt={article.imageAlt}
						fill
						className="object-cover object-center transition-transform duration-500 hover:scale-105"
					/>
				</div>
			</div>

			{/* Excerpt */}
			<p className="mt-3 line-clamp-4 n-book text-sm leading-[1.5] text-[#161616] sm:mt-4 sm:text-base">
				{article.excerpt}
			</p>

			{/* Read More button */}
			{/* <OutlineArrowButton
				href={article.href}
				iconAlt="Read More"
				className={cn(publicationCardOutlineCtaClassLgStart, "mt-6")}
				iconClassName={audienceMarketingOutlineCtaIconClass}
			>
				Read More
			</OutlineArrowButton> */}

			<Link
				href={article.href}
				type="button"
				className={cn(
					"mt-5 inline-flex items-center justify-center gap-2",
					"h-[44px] w-full max-w-[220px] px-6",
					"border border-[#161616] bg-transparent",
					"n-bold text-[12px] uppercase tracking-[0.08em] text-[#161616]",
					"transition-colors duration-200",
					"sm:h-[48px] sm:text-[13px]",
					"cursor-pointer",
				)}
			>
				<span>READ MORE</span>
				<Image
					src="/images/arrow.svg"
					alt=""
					width={12}
					height={12}
					className="shrink-0"
				/>
			</Link>
		</article>
	);
}
