import { ContactFormPanel } from "@/components/contact/ContactFormPanel";
import { ContactHero } from "@/components/contact/ContactHero";
import { NationalGlobalPresence } from "@/components/sections/contact/NationalGlobalPresence";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Contact Us | The Guardians" },
  description:
    "Get in touch with The Guardians Real Estate Advisory — business, HR, and channel partner enquiries.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactFormPanel />
      <NationalGlobalPresence />
    </>
  );
}
