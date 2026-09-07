import { CareerHero } from "@/components/career/CareerHero";
import { LifeAtGuardians } from "@/components/career/LifeAtGuardians";
import { ReasonsToJoin } from "@/components/career/ReasonsToJoin";
import { CurrentOpportunity } from "@/components/sections/career/CurrentOpportunity";
import { AutoCareerApplicationModal } from "@/components/career/AutoCareerApplicationModal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Career | The Guardians" },
  description:
    "Work with us — join India's fastest-growing real estate advisory firm and build a meaningful career.",
};

export default function CareerPage() {
  return (
    <>
      <section className="lg:h-[650px]">
        <CareerHero />
      </section>
      <LifeAtGuardians />
      <ReasonsToJoin />
      <CurrentOpportunity />
      <AutoCareerApplicationModal />
    </>
  );
}
