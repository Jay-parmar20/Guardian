import { DeveloperServicesAlternatingLayout } from "@/components/developer/DeveloperServicesAlternatingLayout";
import { ServicesHero } from "@/components/services/ServicesHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: { absolute: "Services | The Guardians" },
	description:
		"Residential, commercial, retail, land, financial, and marketing consulting advisory — from strategy to sales execution.",
};

export default function ServicesPage() {
	return (
		<>
			<ServicesHero />
			<DeveloperServicesAlternatingLayout />
		</>
	);
}
