import type { Metadata } from "next";
import { AudienceMarketingPage } from "@/components/marketing/AudienceMarketingPage";
import { HOME_MARKETING_PAGE } from "@/data/home-marketing";

export const metadata: Metadata = {
  title: { absolute: "The Guardians | Real Estate Advisory" },
};

export default function HomePage() {
  return <AudienceMarketingPage content={HOME_MARKETING_PAGE} />;
}
