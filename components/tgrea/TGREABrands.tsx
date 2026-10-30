"use client";

import { StaggerContainer } from "@/components/animations/StaggerContainer";
import { SplitSection } from "@/components/sections/our-brand/SplitSection";
import Image from "next/image";
import { Container } from "@/components/common/Container";
import { cn } from "@/utils/cn";
const brands = [
	{
		id: 1,
		name: "Ground Holding",
		reverse: false,
		href: "https://www.groundholding.com/",
		logoBG: "/images/holdingLogo.svg",
		logo: "/images/holdingImg.svg",

		logoScale: "scale-100",
		titleScale: "scale-100",

		description:
			"The Guardians Real Estate Advisory*& Kotak Realty Fund have come together to overcome the challenges of project bottlenecks, project delays, inefficient processes, lack of latest marketing tools and methods, and the absence of industry intelligence. We are India's first institutionally owned 'Real Estate Development Management and Advisory Company'. Ground Holding is committed to augmenting the clients' assets and investment value with pathbreaking business solutions by renowned industry doyens.",
	},
	{
		id: 2,
		name: "Guardians International",
		reverse: true,
		href: "https://www.tgreaedge.com/",
		logoBG: "/images/Group 78.svg",
		logo: "/images/tgrea4.jpeg",

		logoScale: "scale-100",
		titleScale: "scale-100",

		description:
			"With Guardians International, we are realising that dream by providing expert real estate advisory for developers and customers with a seamless, end-to-end experience from concept to occupancy. We are providing a 360-degree experience for NRI and HNWI with access to the best-in-class property investment opportunities across the breadth and length of India. We deliver an end-to-end service that guides them through every step of their international real estate investment journey.",
	},
	{
		id: 3,
		name: "Guardians Land",
		reverse: false,
		href: "https://theguardianscavalry.in/",
		logoBG: "/images/guardians-logo-bg.png",
		logo: "/images/GuardiansLand-image.png",

		// Navigation card only
		logoScale: "scale-[1.35]",

		// Lower section — much smaller adjustment
		titleScale: "scale-[1.08]",

		description:
			"The Guardians Real Estate Advisory is extending its mandate expertise into one of real estate’s most promising emerging categories: Second Homes. Building on our leadership across residential and commercial real estate, the new vertical brings The Guardians’ core strengths of large-scale distribution, sales strategy and execution to plotted developments, villas, farmland and destination-led real estate. At its heart is a simple proposition: bring institutional-grade sales and marketing capabilities to a category that has traditionally remained fragmented.",
	},
];

function BrandTitle({
	src,
	scale = "scale-100",
}: {
	src: string;
	scale?: string;
}) {
	return (
		<div
			className="
				flex
				h-[58px]
				w-[240px]
				items-center
				justify-start

				sm:h-[64px]
				sm:w-[280px]

				lg:h-[68px]
				lg:w-[300px]
			"
		>
			<Image
				src={src}
				alt="Brand logo"
				width={640}
				height={150}
				className={cn(
					"block max-h-full max-w-full object-contain object-left",
					"origin-left",
					scale,
				)}
			/>
		</div>
	);
}

function BrandNavigation() {
	const handleBrandClick = (
		event: React.MouseEvent<HTMLAnchorElement>,
		id: number,
	) => {
		event.preventDefault();

		const targetId = `brand-block-${id}`;
		const target = document.getElementById(targetId);

		if (!target) return;

		window.history.replaceState(
			null,
			"",
			`${window.location.pathname}${window.location.search}#${targetId}`,
		);

		target.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	};

	return (
		<nav aria-label="Our brands" className="w-full py-10 sm:py-16 lg:py-25">
			<div className="hidden w-full sm:grid sm:grid-cols-3 sm:gap-0 lg:grid-cols-[repeat(3,430px)] lg:justify-center">
				{brands.map((brand) => (
					<a
						key={brand.id}
						href={`#brand-block-${brand.id}`}
						onClick={(event) => handleBrandClick(event, brand.id)}
						aria-label={`Go to ${brand.name}`}
						className={cn(
							"group flex w-full items-center justify-center",
							"h-[105px] sm:h-[150px]",
							"lg:h-[180px] lg:w-[430px]",
							"px-5 py-5",
							"overflow-hidden",
							"bg-[radial-gradient(290.48%_141.42%_at_0%_0%,rgba(188,189,192,0.20)_0%,rgba(143,129,131,0.20)_100%)]",
							"transition-all duration-300",
							"hover:bg-none hover:bg-black",
						)}
					>
						<div
							className="
								flex
								h-[70px]
								w-[220px]
								items-center
								justify-center

								lg:h-[80px]
								lg:w-[258px]
							"
						>
							<Image
								src={brand.logoBG}
								alt={brand.name}
								width={258}
								height={80}
								className={cn(
									"max-h-full max-w-full object-contain",
									"transition-all duration-300",
									"group-hover:brightness-0 group-hover:invert",
									brand.logoScale,
								)}
							/>
						</div>
					</a>
				))}
			</div>
		</nav>
	);
}

export function TGREABrands() {
	return (
		<section
			className="bg-white mb-14 lg:mb-25"
			aria-labelledby="our-brands-heading "
		>
			<Container>
				<BrandNavigation />

				{/* Brand rows */}
				<StaggerContainer className="space-y-10 sm:space-y-12 lg:space-y-25">
					{brands.map(
						({ id, reverse, href, logoBG, logo, titleScale, description }) => {
							const showButton = id !== 3;

							return (
								<div
									key={id}
									id={`brand-block-${id}`}
									className="relative scroll-mt-[120px]"
								>
									<SplitSection
										reverse={reverse}
										title={<BrandTitle src={logoBG} scale={titleScale} />}
										description={description}
										image={{
											src: logo,
											alt: "Construction site at sunset",
										}}
										buttonText={showButton ? "Know More" : undefined}
										href={showButton ? href : undefined}
										contentClassName="flex items-center"
										titleClassName="mb-5 sm:mb-[29px] lg:mb-[30px]"
										descriptionClassName="max-w-[488px] text-[14px] leading-[22px] sm:text-base sm:leading-[1.5]"
										imageClassName="h-[420px] rounded-none max-md:h-auto max-md:min-h-[220px] max-md:aspect-[488/434]"
									/>
								</div>
							);
						},
					)}
				</StaggerContainer>
			</Container>
		</section>
	);
}
