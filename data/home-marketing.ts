import type { MarketingPageContent, AwardSlide } from "./audience-marketing-types";
import {
  CONTACT,
  DEFAULT_READ_MORE,
  DEVELOPER_SERVICES,
  partnersBand,
} from "./audience-marketing-shared";

type AwardImageEntry = {
  file: string;
  title: string;
  subtitle: string;
  year: string;
};

const AWARD_IMAGE_FILES: AwardImageEntry[] = [
  { file: "IMG_6294 .png", title: "NAREDCO Maharashtra", subtitle: "HOMETHON Property Expo", year: "2022" },
  { file: "IMG_6295.png", title: "ET Real Estate Conclave Awards", subtitle: "360 Degree Marketing Campaign — Dosti Eastern Bay", year: "2021" },
  { file: "IMG_6297.png", title: "SBI Home Loans", subtitle: "Contribution to Home Loan Business", year: "2022" },
  { file: "IMG_6299.png", title: "Bank of Baroda", subtitle: "Contribution in Home Loan Business", year: "2022" },
  { file: "IMG_6300.png", title: "ICICI Bank", subtitle: "Partners in Prosperity — Mortgage Business", year: "" },
  { file: "IMG_6301.png", title: "HDFC Bank Home Loan", subtitle: "CREDAI-MCHI Property Expo", year: "2024" },
  { file: "IMG_6302.png", title: "Axis Bank", subtitle: "Certificate of Appreciation", year: "" },
  { file: "IMG_6305.png", title: "Real Estate & Business Excellence Awards", subtitle: "Excellence in Marketing and Distribution Strategy", year: "2023" },
  { file: "IMG_6306 .png", title: "SBI Home Loans", subtitle: "Award of Appreciation — Home Loan Business", year: "2023" },
  { file: "IMG_6307.png", title: "ET Real Estate Conclave Awards", subtitle: "Property Launch Campaign — Passcode Great Guarantee", year: "2021" },
  { file: "IMG_6308.png", title: "NAREDCO Maharashtra", subtitle: "HOMETHON Property Expo", year: "2023" },
  { file: "IMG_6309.png", title: "ICICI Bank Home Loans", subtitle: "Top 10 in Disbursements PAN-India", year: "2021" },
  { file: "IMG_6310 .png", title: "ICICI Bank Home Loans", subtitle: "Top 10 in Disbursements PAN-India", year: "2022" },
  { file: "IMG_6311.png", title: "Real Estate & Business Excellence Awards", subtitle: "Certificate of Excellence — Marketing and Distribution Strategy", year: "2023" },
  { file: "IMG_6312.png", title: "ICICI Bank Home Loans", subtitle: "Top 10 in Disbursements PAN-India", year: "2022" },
  { file: "IMG_6313.png", title: "SBI Home Loans", subtitle: "Award of Excellence", year: "" },
  { file: "IMG_6314.png", title: "GEAWA", subtitle: "GEAWA Premier League", year: "2023" },
  { file: "IMG_6315.png", title: "ICICI Bank Home Loans", subtitle: "Top 10 in Disbursements PAN-India", year: "2021" },
  { file: "IMG_6316.png", title: "ICICI Bank Home Loans", subtitle: "Top 10 in Disbursements PAN-India", year: "2022" },
  { file: "IMG_6317.png", title: "The Economic Times", subtitle: "Best Realty Brands", year: "2020-21" },
];

const awardImageSrc = (filename: string) =>
  `/images/awards/${encodeURIComponent(filename)}`;

const HOME_AWARD_SLIDES: AwardSlide[] = AWARD_IMAGE_FILES.map((entry, i) => ({
  id: String(i + 1),
  company: entry.title,
  achievement: entry.subtitle,
  year: entry.year,
  imageSrc: awardImageSrc(entry.file),
}));

export const HOME_MARKETING_PAGE = {
  hero: {
    isBuyer: false,
    backgroundImageSrc: "/images/Developer/developer_hero.png",
    backgroundVideoSrc: "/images/Home/home.mp4",
    hideHeroContent: true,
    body: "At The Guardians Real Estate Advisory, we bring pricing intelligence, launch strategy, and on-ground sales execution together to maximise your project's performance from day one.",
    enquireHref: CONTACT,
    enquireLabel: "Let's Connect",
    ariaHeadingId: "home-hero-heading",
  },
  stickyScroll: true,
  heroHeightPx: 600,
  heroMobileHeightPx: 400,
  services: {
    sectionTitle: "OUR SERVICES",
    description:
      "From the first site visit to the final sale, we work with developers through every stage of the journey. Our advisory spans land assessment and feasibility, regulatory and approval support, project structuring and financial planning, sales strategy and marketing, right through to inventory monetisation – ensuring no value is left on the table at any stage of development.",
    knowMoreHref: DEVELOPER_SERVICES,
    knowMoreLabel: "KNOW MORE",
    cards: [
      {
        id: "residential",
        title: "RESIDENTIAL SERVICES",
        src: "/images/OurServices/Residential Services.jpg",
        description: "End-to-end advisory covering market analysis, micro-market dynamics, unit mix planning, pricing strategy, channel partner mapping and sales lifecycle management for residential developments.",
      },
      {
        id: "commercial",
        title: "COMMERCIAL SERVICES",
        src: "/images/OurServices/Business Solutions.jpg",
        description: "Consulting solutions for commercial, retail and mixed-use assets including absorption strategy, investor targeting, tenant profiling, product positioning and long-term revenue planning.",
      },
      {
        id: "retail",
        title: "RETAIL SERVICES",
        src: "/images/OurServices/Developer Solutions.jpg",
        description: "Specialised support for developers including launch planning, sales infrastructure setup, project branding coordination, documentation support, inventory planning, channel partner engagement and performance tracking across sales cycles.",
      },
    ],
  },
  ourWork: {
    sectionTitle: "OUR WORK",
    ...DEFAULT_READ_MORE,
    readMoreHref: "/projects?stage=completed",
    readMoreLabel: "READ MORE",
    imageClassName: "relative flex h-[280px] items-center justify-center bg-[#f5f5f5] p-6 sm:p-8 sm:h-[300px] md:p-10 lg:h-[360px] overflow-hidden",
    gridClassName: "lg:grid-cols-[4fr_5fr]",
    slides: [
      {
        id: "1",
        label: "CASE STUDY",
        title: "BOMBAY REALTY: LAUNCHED WITH MAKE YOUR MOVE CAMPAIGN",
        body: "Repositioned ICC as Mumbai SOBO's (South Of Harbour) Luxury Landmark",
        imageSrc: "/images/ourwork.svg",
        stats: [
          { value: "₹1,290 Cr+", label: "REVENUE" },
          { value: "187+", label: "UNITS SOLD" },
          { value: "2460+", label: "VIEWS" },
          { value: "5800+", label: "TOTAL LEADS" },
        ],
      },
      {
        id: "2",
        label: "CASE STUDY",
        title: "Strategic positioning for mixed-use corridors.",
        body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        imageSrc: "/images/work1.jpeg",
        stats: [
          { value: "₹800 Cr+", label: "REVENUE" },
          { value: "150+", label: "UNITS SOLD" },
          { value: "1800+", label: "VIEWS" },
          { value: "4200+", label: "TOTAL LEADS" },
        ],
      },
      {
        id: "3",
        label: "CASE STUDY",
        title: "Institutional sales velocity and channel design.",
        body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        imageSrc: "/images/work2.jpeg",
        stats: [
          { value: "₹650 Cr+", label: "REVENUE" },
          { value: "120+", label: "UNITS SOLD" },
          { value: "1500+", label: "VIEWS" },
          { value: "3500+", label: "TOTAL LEADS" },
        ],
      },
    ],
  },
  partners: partnersBand("PARTNERS AND CLIENTS", " "),
  awards: {
    starIconSrc: "/images/Developer/award/star.svg",
    headingLine1: "Awards &",
    headingLine2: "Recognitions",
    slides: HOME_AWARD_SLIDES,
  },
  banner: {
    headline: "Guardians is where top developers, buyers, NRI investors and partners find the right opportunities across India's most promising markets.",
    imageSrc: "/images/explore-bg.png",
    ctaLabel: "Explore Our Work",
    ctaHref: "/projects",
  },
} satisfies MarketingPageContent;
