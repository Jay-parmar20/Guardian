import { Container } from "@/components/common/Container";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { cn } from "@/utils/cn";

interface WhyDevelopersChooseGuardiansProps {
	heading?: string;
	description?: React.ReactNode;
	imageSrc?: string;
	imageAlt?: string;
	className?: string;
}

const defaultImageSrc = "/images/Home/h1.png";

const defaultHeading = "WHY DEVELOPERS CHOOSE GUARDIANS";

const defaultDescription = (
	<>
		We don&apos;t just advise, we embed ourselves in your project&apos;s
		success. From <strong>pricing intelligence and launch strategy</strong> to
		on-ground sales execution and channel partner management, we bring every
		function a developer needs under <strong>one accountable team</strong>. No
		fragmented vendors, no guesswork, just a{" "}
		<strong>single partner measured on your outcomes.</strong>
	</>
);

export function WhyDevelopersChooseGuardians({
	heading = defaultHeading,
	description = defaultDescription,
	imageSrc = defaultImageSrc,
	imageAlt = "Why developers choose Guardians",
	className,
}: WhyDevelopersChooseGuardiansProps) {
	return (
		<section
			className={cn(
				"relative mx-auto w-full max-w-[1200px] overflow-hidden",
				className,
			)}
			aria-label="Why developers choose Guardians"
		>
			{/* Background image with dark overlay */}
			<div className="absolute inset-0">
				{imageSrc ? (
					<img
						src={imageSrc}
						alt={imageAlt}
						className="h-full w-full  object-cover"
					/>
				) : (
					<div className="h-full w-full bg-neutral-400" />
				)}
			</div>

			{/* Content */}
			<Container className="relative z-10 max-w-[1300px]">
				<div className="flex min-h-[300px] items-center py-16 sm:min-h-[380px] sm:py-20 lg:min-h-[440px] lg:py-24">
					<div className="mx-auto w-full text-center">
						<ScrollReveal direction="up" distance={30} duration={0.6}>
							<h2 className="qs-reg text-[clamp(1.625rem,3.2vw,3rem)] uppercase leading-tight tracking-[0.08em] text-white">
								{heading}
							</h2>
						</ScrollReveal>

						<ScrollReveal
							direction="up"
							distance={30}
							delay={0.15}
							duration={0.6}
						>
							<p className="n-reg mt-6 mx-auto max-w-[901px] text-[20px] leading-[28px] text-center text-white/85">
								{description}
							</p>
						</ScrollReveal>
					</div>
				</div>
			</Container>
		</section>
	);
}
