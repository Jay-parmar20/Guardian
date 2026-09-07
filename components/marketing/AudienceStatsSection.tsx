"use client";

import {
	DeveloperStatsSection,
	type DeveloperStatsSectionProps,
} from "@/components/developer/DeveloperStatsSection";

export function AudienceStatsSection({
	centerOnMobile = true,
	...props
}: DeveloperStatsSectionProps) {
	return <DeveloperStatsSection {...props} centerOnMobile={centerOnMobile} />;
}
