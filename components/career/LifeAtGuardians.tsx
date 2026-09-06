import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Container } from "@/components/common/Container";
import { LOCAL_IMAGES } from "@/lib/local-images";
import { cn } from "@/utils/cn";
import Image from "next/image";

export function LifeAtGuardians() {
  return (
    <section
      className="bg-white "
      aria-labelledby="life-heading"
    >
      <Container className="pt-12 px-4 sm:pt-16 sm:px-6 lg:pt-25 lg:px-8 pb-4 md:pb-10">
        <ScrollReveal direction="up" distance={30}>
          <h2
            id="life-heading"
            className={cn(
              "uppercase text-brand-text-primary qs-reg ls-10 text-center",
              "text-[clamp(2.156rem,4.8vw,2.5rem)] leading-[1.12] tracking-[0.04em]",
              "sm:text-[clamp(2.25rem,5.2vw,3.1rem)] sm:leading-[1.1] sm:tracking-[0.05em]",
              "lg:text-[clamp(2.75rem,3.5vw,4.375rem)] lg:leading-[1.05] lg:tracking-[0.05em]",
            )}
          >
            Life at Guardians
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.08} distance={30}>
          <p className="n-book text-[20px] leading-[24px] tracking-[0%] text-[#161616] mt-6 sm:mt-8 lg:mt-10 text-center max-w-[1196px] mx-auto">
            The Guardians is not only dedicated to work but also provide a healthy work-life balance which is evident through the various fun activities conducted by us. It helps our employees bond better, refreshes them &amp; gives them the zeal to come back to work more enthusiastically.
          </p>
        </ScrollReveal>
      </Container>

      {/* ── Full-width-ish large image ── */}
      <Container className="">
        <ScrollReveal direction="up" delay={0.1} distance={28}>
          <div
            className="relative w-full overflow-hidden bg-[#BCBDC0]"
            style={{ height: "clamp(200px, 32vw, 400px)" }}
          >
            <Image
              src={LOCAL_IMAGES.workWithUs}
              alt="Life at The Guardians — team at work"
              fill
              className=""
              sizes="(max-width: 1280px) 100vw, 1196px"
            />
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
