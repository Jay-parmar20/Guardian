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
		description:
			"The Guardians Real Estate Advisory*& Kotak Realty Fund have come together to overcome the challenges of project bottlenecks, project delays, inefficient processes, lack of latest marketing tools and methods, and the absence of industry intelligence. We are India's first institutionally owned 'Real Estate Development Management and Advisory Company'. Ground Holding is committed to augmenting the clients' assets and investment value with pathbreaking business solutions by renowned industry doyens.",
	},
	{
		id: 2,
		name: "Guardians International",
		reverse: true,
		href: "https://theguardiansindia.com/international",
		logoBG: "/images/Group 70.svg",
		logo: "/images/tgrea3.svg",
		description:
			"With Guardians International, we are realising that dream by providing expert real estate advisory for developers and customers with a seamless, end-to-end experience from concept to occupancy. We are providing a 360-degree experience for NRI and HNWI with access to the best-in-class property investment opportunities across the breadth and length of India. We deliver an end-to-end service that guides them through every step of their international real estate investment journey.",
	},
	{
		id: 3,
		name: "Guardians Cavalry",
		reverse: false,
		href: "https://theguardianscavalry.in/",
		logoBG: "/images/Group 66.svg",
		logo: "/images/tgrea2.svg",
		description:
			"Your one-stop destination for seamless home-buying experience. With years of expertise and a deep understanding of the real estate market, we provide personalized guidance every step of the way. From luxurious properties to family-friendly homes, we ensure your vision becomes a reality. Trust us to make your dream home a lasting one.",
	},
];

function BrandTitle({ src }: { src: string }) {
	return (
		<Image
			src={src}
			alt="Brand logo"
			width={223}
			height={80}
			className="block h-auto w-[150px] object-contain object-left sm:w-[180px] lg:w-[223px]"
		/>
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

		// Keep URL clean without triggering the browser's default jump
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
		<nav aria-label="Our brands" className="w-full py-12 sm:py-25">
			<div className="grid w-full grid-cols-1 sm:grid-cols-3 lg:grid-cols-[repeat(3,430px)] lg:justify-center">
				{brands.map((brand) => (
					<a
						key={brand.id}
						href={`#brand-block-${brand.id}`}
						onClick={(event) => handleBrandClick(event, brand.id)}
						aria-label={`Go to ${brand.name}`}
						className={cn(
							"group flex w-full items-center justify-center",
							"h-[120px] sm:h-[150px]",
							"lg:h-[180px] lg:w-[430px]",
							"px-5 py-5",
							"bg-[radial-gradient(290.48%_141.42%_at_0%_0%,rgba(188,189,192,0.20)_0%,rgba(143,129,131,0.20)_100%)]",
							"transition-all duration-300",
							"hover:bg-none hover:bg-black",
						)}
					>
						<Image
							src={brand.logoBG}
							alt={brand.name}
							width={258}
							height={80}
							className="
								h-auto
								max-h-[80px]
								w-auto
								max-w-[80%]
								object-contain
								transition-all
								duration-300
								group-hover:brightness-0
								group-hover:invert
							"
						/>
					</a>
				))}
			</div>
		</nav>
	);
}

export function TGREABrands() {
	return (
		<section
			className="bg-white lg:mb-25"
			aria-labelledby="our-brands-heading "
		>
			<Container>
				<BrandNavigation />

				{/* Brand rows */}
				<StaggerContainer className=" space-y-9 sm:space-y-12 lg:space-y-25">
					{brands.map(({ id, reverse, href, logoBG, logo, description }) => (
						<div
							key={id}
							id={`brand-block-${id}`}
							className="relative scroll-mt-[120px]"
						>
							<SplitSection
								reverse={reverse}
								title={<BrandTitle src={logoBG} />}
								description={description}
								image={{
									src: logo,
									alt: "Construction site at sunset",
								}}
								contentClassName="flex items-center"
								titleClassName="mb-[19px] sm:mb-[29px] lg:mb-[66px]"
								descriptionClassName="max-w-[488px] text-[clamp(0.875rem,3vw,1rem)] leading-[1.5] sm:text-base"
								imageClassName="h-[420px] rounded-none max-md:h-auto max-md:min-h-[220px] max-md:aspect-[488/434]"
							/>
						</div>
					))}
				</StaggerContainer>
			</Container>
		</section>
	);
}
