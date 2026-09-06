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

const defaultImageSrc = "/images/Home/h1.jpeg";

const defaultHeading = "WHY DEVELOPERS CHOOSE GUARDIANS";

const defaultDescription = (
  <>
    <strong>The Guardians</strong> mark the coming together of the best of minds
    from the Indian real estate industry, a set of professionals who have played
    diverse roles across their careers. Their collective experience spans{" "}
    <strong>over 12 decades</strong> and extends to a pan India portfolio of the
    best of both regional and national real estate brands. The team has till date
    sold <strong>over 17.3 Million of sq.ft.</strong> of projects in both
    residential and commercial real estate categories.
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
      className={cn("relative mx-auto w-full max-w-[1180px] overflow-hidden", className)}
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
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Subtle gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
      </div>

      {/* Content */}
      <Container className="relative z-10 max-w-[1300px]">
        <div className="flex min-h-[300px] items-center py-16 sm:min-h-[380px] sm:py-20 lg:min-h-[440px] lg:py-24">
          <div className="mx-auto w-full max-w-[901px] text-center">
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
