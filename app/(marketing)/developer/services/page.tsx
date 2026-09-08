import { DeveloperServicesAlternatingLayout } from "@/components/developer/DeveloperServicesAlternatingLayout";
import { ServicesHero } from "@/components/services/ServicesHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: { absolute: "Developer's Services | The Guardians" },
	description:
		"Residential, commercial, retail, land, financial, and marketing consulting advisory for developers — from strategy to sales execution.",
};

export default function DeveloperServicesPage() {
	return (
		<>
			<ServicesHero />
			<DeveloperServicesAlternatingLayout />
		</>
	);
}
