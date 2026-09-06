"use client";

import { Container } from "@/components/common/Container";
import { SERVICE_PANELS } from "@/data/services";
import type { ServicePanel } from "@/components/services/ServicesGrid";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

type Props = {
  panels?: ServicePanel[];
  ariaLabel?: string;
};

export function DeveloperServicesAlternatingLayout({
  panels,
  ariaLabel = "Developer services",
}: Props) {
  const services = panels ?? SERVICE_PANELS;

  return (
    <section className="bg-white" aria-label={ariaLabel}>
      <Container className="pt-0 pb-6 sm:pb-10 lg:pb-14 xl:pb-20">
        <div className="flex flex-col gap-8 lg:gap-10 xl:gap-12">
          {services.map((service, index) => {
            const isImageLeft = index % 2 === 0;
            const [introItem, ...accordionItems] = service.items;

            return (
              <DeveloperServiceRow
                key={service.title}
                service={service}
                introItem={introItem}
                accordionItems={accordionItems}
                isImageLeft={isImageLeft}
                index={index}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function DeveloperServiceRow({
  service,
  introItem,
  accordionItems,
  isImageLeft,
  index,
}: {
  service: typeof SERVICE_PANELS[0];
  introItem: { title: string; description?: string };
  accordionItems: { title: string; description?: string }[];
  isImageLeft: boolean;
  index: number;
}) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <article className="flex flex-col gap-0 lg:grid lg:grid-cols-[45%_1fr]">
      <div
        className={`relative min-w-0 w-full overflow-hidden aspect-[3/2] lg:aspect-auto ${
          isImageLeft ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <div className="absolute inset-0 p-5 sm:p-6 lg:p-8 xl:p-10">
          <div className="relative h-full w-full">
            <Image
              src={service.imageSrc}
              alt={service.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority={index < 2}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#202225] via-[#202225]/60 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center px-6">
              <h3 className="text-center font-extrabold uppercase tracking-[0.1em] text-white text-[20px] leading-[24px] max-w-[320px]">
                {service.title}
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`relative min-w-0 w-full flex flex-col flex-shrink-0 ${
          isImageLeft ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <div className="flex flex-1 flex-col p-5 sm:p-6 lg:p-8 xl:p-10">
            <h4 className="qs-reg uppercase tracking-[0.05em] text-[#202225] text-[clamp(1.125rem,2.5vw,1.5rem)] leading-tight mb-3">
              {introItem.title}
            </h4>

            <div className="flex flex-1 flex-col">
              <motion.div
                initial={false}
                animate={
                  openIndex === 0
                    ? { height: "auto", opacity: 1 }
                    : { height: 0, opacity: 0 }
                }
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <p className="n-book text-base leading-[1.6] text-[#444] pb-4 sm:text-lg sm:leading-[1.7] lg:text-[17px] lg:leading-[26px]">
                  {introItem.description}
                </p>
              </motion.div>

              {accordionItems.map((item, i) => (
                <div key={item.title}>
                  <div className="border-t border-[#E5E5E5]" />
                  <button
                    type="button"
                    onClick={() => setOpenIndex(openIndex === i + 1 ? -1 : i + 1)}
                    className="flex w-full cursor-pointer items-start justify-between gap-3 py-4 text-left transition-opacity hover:opacity-80 sm:items-center sm:gap-4"
                  >
                    <span className="n-reg min-w-0 flex-1 text-base leading-snug text-[#202225] sm:text-lg lg:text-[18px]">
                      {item.title}
                    </span>
                    <span className="shrink-0 n-reg text-xl text-[#202225]">
                      {openIndex === i + 1 ? "−" : "+"}
                    </span>
                  </button>
                  {item.description ? (
                    <motion.div
                      initial={false}
                      animate={
                        openIndex === i + 1
                          ? { height: "auto", opacity: 1 }
                          : { height: 0, opacity: 0 }
                      }
                      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-4 n-book text-base leading-[1.6] text-[#555] sm:text-lg sm:leading-[1.7] lg:text-[16px] lg:leading-[24px]">
                        {item.description}
                      </p>
                    </motion.div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
    </article>
  );
}