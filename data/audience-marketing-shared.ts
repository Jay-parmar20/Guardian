import type {
	PartnerLogo,
	PartnersSectionContent,
} from "./audience-marketing-types";
import { partnerLogoFromGroup } from "./partners-logo-grid";

import { homePartnerLogoFromGroup } from "./partners-logo-grid";

export const CONTACT = "/contact" as const;
export const SERVICES = "/services" as const;
export const DEVELOPER_SERVICES = "/services" as const;

/** Project listing — pre-filtered by stage (see `app/(marketing)/projects/page.tsx`). */
export const PROJECTS_ONGOING = "/projects?stage=ongoing" as const;
export const PROJECTS_COMPLETED = "/projects?stage=completed" as const;

export const DEFAULT_HERO_CTA = {
	enquireHref: CONTACT,
	enquireLabel: "Enquire now",
} as const;

export const DEFAULT_READ_MORE = {
	readMoreHref: CONTACT,
	readMoreLabel: "Read more",
} as const;

export const DEFAULT_VIEW_MORE = {
	viewMoreHref: CONTACT,
	viewMoreLabel: "View more",
} as const;

export const DEFAULT_KNOW_MORE = {
	knowMoreHref: CONTACT,
	knowMoreLabel: "Explore More",
} as const;

/** Home marquee row 1 — Group 29.svg to Group 39.svg */
export const DEV_PARTNER_ROW1: readonly PartnerLogo[] = [
	homePartnerLogoFromGroup(29),
	homePartnerLogoFromGroup(30),
	homePartnerLogoFromGroup(31),
	homePartnerLogoFromGroup(32),
	homePartnerLogoFromGroup(33),
	homePartnerLogoFromGroup(34),
	homePartnerLogoFromGroup(35),
	homePartnerLogoFromGroup(36),
	homePartnerLogoFromGroup(37),
	homePartnerLogoFromGroup(38),
	homePartnerLogoFromGroup(39),
];

/** Home marquee row 2 — Group 40.svg to Group 50.svg */
export const DEV_PARTNER_ROW2: readonly PartnerLogo[] = [
	homePartnerLogoFromGroup(40),
	homePartnerLogoFromGroup(42),
	homePartnerLogoFromGroup(43),
	homePartnerLogoFromGroup(44),
	homePartnerLogoFromGroup(45),
	homePartnerLogoFromGroup(47),
	homePartnerLogoFromGroup(48),
	homePartnerLogoFromGroup(49),
	homePartnerLogoFromGroup(50),
];

export function partnersBand(
	headlineLine1: string,
	headlineLine2: string,
): PartnersSectionContent {
	return {
		headlineLine1,
		headlineLine2,
		row1: DEV_PARTNER_ROW1,
		row2: DEV_PARTNER_ROW2,
		closing: "…AND MANY MORE TO",
		ctaHref: "/partners",
		ctaLabel: "Explore More",
	};
}
