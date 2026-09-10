import { Container } from "@/components/common/Container";
import {
	AboutLeadershipSection,
	type LeadershipSlide,
} from "@/components/developer/DeveloperStatsSection";
import { AboutStatsRow } from "@/components/about/AboutStatsRow";
import { ABOUT_STATS_CONTENT } from "@/data/about-stats";
import Image from "next/image";
import { GlobalNetworks } from "@/components/sections/GlobalNetworks";
import { OutlineArrowButton } from "@/components/common/OutlineArrowButton";
import { aboutBrandsCtaWrap } from "@/components/about/aboutPageResponsiveClasses";
import {
	audienceMarketingOutlineCtaClass,
	audienceMarketingOutlineCtaIconClass,
} from "@/styles/audienceMarketingCenter";
import { cn } from "@/utils/cn";

const brandCards = [
	{
		title: "ground holding",
		subtitle: "Real Estate Advisory",
		url: "/images/Group 65.svg",
	},
	{
		title: "The Guardians",
		subtitle: "International",
		url: "/images/Group 70.svg",
	},
	{ title: "Cavalry", subtitle: "The Guardians", url: "/images/Group 66.svg" },
] as const;

const brandPromiseOrnament = "/images/ornament.jpeg";

const leadershipSlides = [
	{
		id: "leader-1",
		imageSrc: "/images/about/Ram-Naik.jpg",
		imageAlt: "Leadership portrait 1",
		title: "Building trust through people-focused real estate leadership.",
		body: "Real estate is ultimately about people. Understanding what they need, building what they trust and delivering what we promise. That belief is what drove us to build The Guardians, and it is what keeps us going every single day.",
		name: "Ram Naik",
		role: "Co-Founder and CEO",
		imagePositionClassName: "object-center",
	},
	{
		id: "leader-2",
		imageSrc: "/images/about/Kaushal-Agarwal.jpg",
		imageAlt: "Leadership portrait 2",
		title: "Leading with integrity, expertise, and client-first values.",
		body: "We built this firm on the right values from day one. Ethical practice, deep market knowledge and an unrelenting focus on what is best for our clients. That is not just how we work. That is who we are.",
		name: "Kaushal Agarwal",
		role: "Co-Founder and Chairman",
		imagePositionClassName: "object-center",
	},
	{
		id: "leader-3",
		imageSrc: "/images/about/Jayesh-Rathod.jpg",
		imageAlt: "Leadership portrait 3",
		title: "Turning market insights into strategic real estate success.",
		body: "Good strategy is what separates great outcomes from average ones. Every project we take on is backed by research, shaped by insight and executed with precision. That discipline is what makes The Guardians different.",
		name: "Jayesh Rathod",
		role: "Co-Founder and Director",
		imagePositionClassName: "object-center",
	},
	{
		id: "leader-4",
		imageSrc: "/images/about/Khetsi-Barot.jpg",
		imageAlt: "Leadership portrait 4",
		title:
			"Building lasting trust through relationships and consistent results.",
		body: "In this industry, trust is everything. We have built ours through consistency, strong relationships and results that speak for themselves. That is something no market cycle can take away from us.",
		name: "Khetsi Barot",
		role: "Co-Founder and Managing Director",
		imagePositionClassName: "object-center",
	},
] satisfies readonly LeadershipSlide[];

function BrandCard({
	title,
	subtitle,
	url,
}: {
	title: string;
	subtitle: string;
	url: string;
}) {
	return (
		<article className="flex min-h-[182px] w-full min-w-0 max-w-full items-center justify-center border border-[#ece7e7] bg-white px-6 py-8 text-center">
			<div className="flex w-full max-w-[200px] flex-col items-center gap-2">
				<Image
					src={encodeURI(url)}
					alt={`${title}, ${subtitle}`}
					width={180}
					height={100}
					className="h-auto w-full max-h-24 object-contain object-center"
					sizes="(max-width: 768px) 50vw, 200px"
					unoptimized
				/>
			</div>
		</article>
	);
}

export function AboutPageContent() {
	return (
		<>
			<section>
				<Container className="min-w-0">
					<div className="py-14 sm:py-20 lg:py-25">
						<h2
							className="
								qs-reg
								text-center
								text-[30px]
								uppercase
								leading-[36px]
								tracking-[0.04em]
								text-[#2a2626]

								sm:text-[clamp(1.9rem,2.6vw,3rem)]
								sm:leading-tight
							"
						>
							Brand Promise
						</h2>

						<div className="bg-white py-4 sm:py-4 lg:py-5">
							<div className="relative mx-auto w-full sm:w-[95%]">
								<div className="absolute left-3 top-1/2 hidden -translate-y-1/2 lg:block">
									<Image
										src={brandPromiseOrnament}
										alt=""
										width={84}
										height={180}
										className="h-auto w-[80px] object-cover scale-x-[-1]"
									/>
								</div>

								<div className="mx-auto max-w-[330px] text-center sm:max-w-[720px] md:mx-30 lg:mx-40 lg:max-w-none">
									<p
										className="
											n-book
											mx-auto
											max-w-[901px]
											text-[15px]
											leading-[23px]
											text-[#3c393a]

											sm:text-[17px]
											sm:leading-[26px]

											lg:text-[20px]
											lg:leading-[28px]
										"
									>
										<span className="font-semibold text-[#242021]">
											The Guardians
										</span>{" "}
										bring together some of the sharpest minds in Indian real
										estate. Professionals who have spent careers across every
										corner of this industry, from product strategy and sales to
										land transactions and commercial advisory. Together, our
										experience spans
										<span className="font-semibold text-[#242021]">
											{" "}
											over 12 decades{" "}
										</span>
										covers a pan-India portfolio of regional and national real
										estate brands.
										<br />
									</p>
								</div>

								<div className="absolute right-3 top-1/2 hidden -translate-y-1/2 lg:block">
									<Image
										src={brandPromiseOrnament}
										alt=""
										width={84}
										height={180}
										className="h-auto w-[80px] object-cover"
									/>
								</div>
							</div>
						</div>
					</div>

					{/* ── Target section: heading + description + horizontal stats ── */}
					<div className="pb-14 text-center sm:pb-20 lg:pb-25">
						<h3
							className="
								n-bold
								mx-auto
								max-w-[330px]
								text-[26px]
								font-semibold
								leading-[32px]
								tracking-[-0.03em]
								text-[#161616]

								sm:max-w-[700px]
								sm:text-[34px]
								sm:leading-[40px]

								lg:max-w-[900px]
								lg:text-[clamp(1.72rem,2.1vw,2.6rem)]
								lg:leading-[1.08]
							"
						>
							Revolutionising real estate through innovation
						</h3>

						<p
							className="
								n-book
								mx-auto
								mt-5
								max-w-[330px]
								text-[14px]
								leading-[22px]
								text-[#161616]

								sm:mt-8
								sm:max-w-[720px]
								sm:text-base
								sm:leading-[24px]

								lg:mt-12
								lg:w-full
								lg:max-w-none
								lg:text-[20px]
								lg:leading-[1.5]
							"
						>
							Over the years, we have advised on projects, transactions, and
							developments that have shaped communities across the country.
							Behind every number is a client relationship, a strategic
							decision.
						</p>

						{/* Horizontal stats row with vertical separators */}
						<div className="mt-8 sm:mt-14 lg:mt-16">
							<AboutStatsRow content={ABOUT_STATS_CONTENT} />
						</div>
					</div>
				</Container>
			</section>

			<section className="pt-3 pb-2.5 sm:pt-4 sm:pb-3.5 lg:pt-6 lg:pb-6">
				<Container className="min-w-0 pb-14 sm:pb-20 lg:pb-25">
					<h2
						className="
							qs-reg
							mb-6
							text-center
							text-[30px]
							uppercase
							leading-[36px]
							tracking-[0.05em]
							text-[#000000]

							sm:mb-12.5
							sm:text-[clamp(1.75rem,5vw,3.125rem)]
							sm:leading-[1.08]
						"
					>
						Meet The Leadership
					</h2>

					<AboutLeadershipSection slides={leadershipSlides} />
				</Container>
			</section>

			<h2
				className="
					qs-reg
					mb-8
					text-center
					text-[30px]
					uppercase
					leading-[36px]
					tracking-[0.05em]
					text-[#000000]

					sm:mb-12.5
					sm:text-[50px]
					sm:leading-[70px]
				"
			>
				OUR BRANDS
			</h2>

			<section id="brands" className="bg-[#F2F2F2] py-10 sm:py-16 lg:py-12.5">
				<Container className="min-w-0">
					<div className="flex items-center justify-center gap-5 max-lg:w-full"></div>

					<div className="grid grid-cols-1 gap-[15px] sm:grid-cols-1 md:grid-cols-3">
						{brandCards.map((brand) => (
							<BrandCard
								key={brand.title}
								title={brand.title}
								subtitle={brand.subtitle}
								url={brand.url}
							/>
						))}
					</div>

					<div className={aboutBrandsCtaWrap}>
						<OutlineArrowButton
							href="/our-brand"
							className={cn(
								audienceMarketingOutlineCtaClass,
								"h-[44px] w-fit max-w-full px-6 py-0 text-[12px] leading-none",
								"sm:h-[55px] sm:px-[45px] sm:text-base",
								"max-lg:!w-fit max-lg:!max-w-full",
							)}
							iconClassName={cn(
								audienceMarketingOutlineCtaIconClass,
								"h-[10px] w-[10px] sm:h-[15px] sm:w-[15px]",
							)}
						>
							Know More
						</OutlineArrowButton>
					</div>
				</Container>
			</section>

			<GlobalNetworks className="pt-14 sm:pt-20 lg:pt-25" />
		</>
	);
}
