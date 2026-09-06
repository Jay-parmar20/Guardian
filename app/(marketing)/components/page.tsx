import type { Metadata } from "next";
import { GlobalNetworks } from "@/components/sections/GlobalNetworks";
import { WhyDevelopersChooseGuardians } from "@/components/sections/WhyDevelopersChooseGuardians";
import { CurrentOpportunity } from "@/components/sections/career/CurrentOpportunity";
import { NationalGlobalPresence } from "@/components/sections/contact/NationalGlobalPresence";

export const metadata: Metadata = {
  title: { absolute: "Components | The Guardians" },
};

export default function ComponentsPage() {
  return (
    <>
      <GlobalNetworks />
      <WhyDevelopersChooseGuardians />
      <CurrentOpportunity />
      <NationalGlobalPresence />
    </>
  );
}
