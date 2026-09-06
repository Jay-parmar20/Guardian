import { StaggerContainer } from "@/components/animations/StaggerContainer";
import { SplitSection } from "@/components/sections/our-brand/SplitSection";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { BrandNavRow } from "./BrandNavRow";

const brands = [
  { id: 1, reverse: false, href: "https://www.groundholding.com/", logoBG: "/images/holdingLogo.svg", logo: "/images/holdingImg.svg", description: "The Guardians Real Estate Advisory*& Kotak Realty Fund have come together to overcome the challenges of project bottlenecks, project delays, inefficient processes, lack of latest marketing tools and methods, and the absence of industry intelligence. We are India's first institutionally owned 'Real Estate Development Management and Advisory Company'. Ground Holding is committed to augmenting the clients' assets and investment value with pathbreaking business solutions by renowned industry doyens."},
  { id: 2, reverse: true, href: "https://theguardiansindia.com/international", logoBG: "/images/Group 70.svg", logo: "/images/tgrea3.svg", description: "With Guardians International, we are realising that dream by providing expert real estate advisory for developers and customers with a seamless, end-to-end experience from concept to occupancy. We are providing a 360-degree experience for NRI and HNWI with access to the best-in-class property investment opportunities across the breadth and length of India. We deliver an end-to-end service that guides them through every step of their international real estate investment journey."},
  { id: 3, reverse: false, href: "https://theguardianscavalry.in/", logoBG: "/images/Group 66.svg", logo: "/images/tgrea2.svg", description: "Your one-stop destination for seamless home-buying experience. With years of expertise and a deep understanding of the real estate market, we provide personalized guidance every step of the way. From luxurious properties to family-friendly homes, we ensure your vision becomes a reality. Trust us to make your dream home a lasting one."},
];

function BrandTitle({ src }: { src: string }) {
  return (
    <Image
      src={src}
      alt="Ground Holding Real Estate"
      width={223}
      height={80}
      className="block h-auto w-[150px] object-contain object-left sm:w-[180px] lg:w-[223px]"
    />
  );
}

export function TGREABrands() {
  return (
    <section className="bg-white" aria-labelledby="our-brands-heading">
      <BrandNavRow imageSrc="/images/brand-logos-strip.png" />
      {/* Brand rows */}
      <StaggerContainer className="space-y-9 sm:space-y-12 lg:space-y-16 mb-10 md:mb-15 lg:mb-20">
        {brands.map(({ id, reverse, href, logoBG, logo, description }) => (
          <div key={id} id={`brand-block-${id}`} className="relative scroll-mt-20">
            <SplitSection
              reverse={reverse}
              href={href}
              title={<BrandTitle src={logoBG} />}
              description={description}
              buttonText="Read more"
              image={{ src: logo, alt: "Construction site at sunset" }}
              className="px-4 py-5 sm:px-8 sm:py-7 lg:px-16 lg:py-10"
              contentClassName="flex items-center"
              titleClassName="mb-[19px] sm:mb-[29px] lg:mb-[66px]"
              descriptionClassName="max-w-[488px] text-[clamp(0.875rem,3vw,1rem)] leading-[1.5] sm:text-base"
              buttonClassName="mt-4 h-[50px] w-full max-w-xs items-center justify-center text-[clamp(0.8125rem,3vw,1.25rem)] leading-none sm:mt-10 sm:w-auto sm:max-w-none sm:px-12 sm:py-5"
              imageClassName="rounded-none h-[420px] max-md:h-auto max-md:aspect-[488/434] max-md:min-h-[220px]"
            />
          </div>
        ))}
      </StaggerContainer>
    </section>
  );
}
