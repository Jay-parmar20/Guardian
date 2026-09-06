import { LOCAL_IMAGES, localImageByIndex } from "@/lib/local-images";
import { getAudienceHero } from "@/utils/marketing-hero";
import type {
  AwardSlide,
  DeveloperStat,
  LandmarkProject,
  MarketingPageContent,
} from "./audience-marketing-types";
import {
  CONTACT,
  DEFAULT_KNOW_MORE,
  DEFAULT_READ_MORE,
  DEFAULT_VIEW_MORE,
  DEVELOPER_SERVICES,
  PROJECTS_ONGOING,
  partnersBand,
} from "./audience-marketing-shared";

export const PLACEHOLDER_SERVICE_DESC =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

export const DEV_LANDMARK_ONGOING: LandmarkProject[] = [
  {
    id: "1",
    brand: "MARATHON",
    projectLine: "MARATHON GROUP'S",
    projectName: "MONTE SOUTH",
    location: "Byculla, Mumbai, Maharashtra ",
    bhkRange: "2, 2.5, 3 & 3.5 BHK Residences",
    imageSrc: "/images/image 44.svg",
  },
  {
    id: "2",
    brand: "MARATHON",
    projectLine: "MARATHON GROUP'S",
    projectName: "MONTE SOUTH",
    location: "Byculla, Mumbai, Maharashtra ",
    bhkRange: "2, 2.5, 3 & 3.5 BHK Residences",
    imageSrc: "/images/image 44.svg",
  },
  {
    id: "3",
    brand: "MARATHON",
    projectLine: "MARATHON GROUP'S",
    projectName: "MONTE SOUTH",
    location: "Byculla, Mumbai, Maharashtra ",
    bhkRange: "2, 2.5, 3 & 3.5 BHK Residences",
    imageSrc: "/images/image 44.svg",
  },
  {
    id: "4",
    brand: "MARATHON",
    projectLine: "MARATHON GROUP'S",
    projectName: "MONTE SOUTH",
    location: "Byculla, Mumbai, Maharashtra ",
    bhkRange: "2, 2.5, 3 & 3.5 BHK Residences",
    imageSrc: "/images/image 44.svg",
  },
];

export const DEV_LANDMARK_ONGOING_BUYER_MARKETING: LandmarkProject[] = [
  {
    id: "1",
    brand: "MARATHON",
    projectLine: "MARATHON GROUP'S",
    projectName: "MONTE SOUTH",
    location: "Byculla, Mumbai, Maharashtra ",
    bhkRange: "2, 2.5, 3 & 3.5 BHK Residences",
    imageSrc: "/images/image 67.svg",
  },
  {
    id: "2",
    brand: "MARATHON",
    projectLine: "MARATHON GROUP'S",
    projectName: "MONTE SOUTH",
    location: "Byculla, Mumbai, Maharashtra ",
    bhkRange: "2, 2.5, 3 & 3.5 BHK Residences",
    imageSrc: "/images/image 67.svg",
  },
  {
    id: "3",
    brand: "MARATHON",
    projectLine: "MARATHON GROUP'S",
    projectName: "MONTE SOUTH",
    location: "Byculla, Mumbai, Maharashtra ",
    bhkRange: "2, 2.5, 3 & 3.5 BHK Residences",
    imageSrc: "/images/image 67.svg",
  },
  {
    id: "4",
    brand: "MARATHON",
    projectLine: "MARATHON GROUP'S",
    projectName: "MONTE SOUTH",
    location: "Byculla, Mumbai, Maharashtra ",
    bhkRange: "2, 2.5, 3 & 3.5 BHK Residences",
    imageSrc: "/images/image 67.svg",
  },
  // {
  //   id: "5",
  //   brand: "MARATHON",
  //   projectLine: "MARATHON GROUP'S",
  //   projectName: "MONTE SOUTH",
  //   location: "Byculla, Mumbai, Maharashtra ",
  //   bhkRange: "2, 2.5, 3 & 3.5 BHK Residences",
  //   imageSrc: "/images/image 67.svg",
  // },
];

export const DEV_LANDMARK_COMPLETED: LandmarkProject[] = [
  {
    id: "1",
    brand: "MARATHON",
    projectLine: "Featured Project",
    projectName: "MONTE SOUTH",
    location: "Byculla, Mumbai, Maharashtra ",
    bhkRange: "2, 2.5, 3 & 3.5 BHK Residences",
    imageSrc: "/images/image 44.svg",
  },
  {
    id: "2",
    brand: "MARATHON",
    projectLine: "Featured Project",
    projectName: "MONTE SOUTH",
    location: "Byculla, Mumbai, Maharashtra ",
    bhkRange: "2, 2.5, 3 & 3.5 BHK Residences",
    imageSrc: "/images/image 44.svg",
  },
  {
    id: "3",
    brand: "MARATHON",
    projectLine: "Featured Project",
    projectName: "MONTE SOUTH",
    location: "Byculla, Mumbai, Maharashtra ",
    bhkRange: "2, 2.5, 3 & 3.5 BHK Residences",
    imageSrc: "/images/image 44.svg",
  },
  {
    id: "4",
    brand: "MARATHON",
    projectLine: "Featured Project",
    projectName: "MONTE SOUTH",
    location: "Byculla, Mumbai, Maharashtra ",
    bhkRange: "2, 2.5, 3 & 3.5 BHK Residences",
    imageSrc: "/images/image 44.svg",
  },
];
export const DEV_LANDMARK_COMPLETED_BUYER_MARKETING: LandmarkProject[] = DEV_LANDMARK_ONGOING.map(
  (p) => ({
    ...p,
    id: `${p.id}-done`,
    projectName: `${p.projectName} — delivered`,
  }),
);

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

const DEV_AWARD_SLIDES: AwardSlide[] = AWARD_IMAGE_FILES.map((entry, i) => ({
  id: String(i + 1),
  company: entry.title,
  achievement: entry.subtitle,
  year: entry.year,
  imageSrc: awardImageSrc(entry.file),
}));

export const DEVELOPER_MARKETING_PAGE = {
  hero: getAudienceHero("developer"),
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
    ]
  },
  ourWork: {
    sectionTitle: "OUR WORK",
    ...DEFAULT_READ_MORE,
    readMoreHref: "/projects?stage=completed",
    readMoreLabel: "READ MORE",
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
  landmark: {
    sectionTitle: "Our landmark projects",
    tabOngoingLabel: "Ongoing",
    tabCompletedLabel: "Completed",
    ongoing: DEV_LANDMARK_ONGOING,
    completed: DEV_LANDMARK_COMPLETED,
    ctaHref: PROJECTS_ONGOING,
    ctaLabel: "Explore More",
  },
  stats: {
    metrics: [
      { label: "Inventory Sold", value: "37,850 Cr+" },
      { label: "Industry Expertise", value: "10+ Years" },
      { label: "Delivered Nationwide", value: "307+ Projects" },
      { label: "Successfully Sold", value: "29,669 Units" },
    ] as const satisfies readonly DeveloperStat[],
  },
  
  partners: partnersBand(
    "PARTNERS AND CLIENTS",
    " ",
  ),
  testimonials: {
    sectionTitle: "What Our Clients Say",
    ...DEFAULT_VIEW_MORE,
    viewMoreLabel:"Explore More ",
    viewMoreHref: "/partners",
    items: [
      {
        id: "1",
        brandLabel: "GBD Realty",
        quote:
          "Our journey is defined by the trust and confidence of our esteemed clients. Bajrang Singh, Managing Director of GBD Realty, shares his thoughts on our collaboration and the impact we've created together. Stay tuned as we bring you more success stories!",
        name: "Bajrang Singh",
        role: "Managing Director, GBD Realty",
        location: "",
      },
      {
        id: "2",
        brandLabel: "Haware Properties",
        quote:
          "We take pride in delivering excellence, and nothing speaks louder than the words of our valued clients. Amit Haware, CEO & MD of Haware Properties, shares his experience working with us, highlighting our commitment to trust, quality, and innovation. Stay tuned for more insights!",
        name: "Priya Shah",
        role: "CEO & MD, Haware Properties",
        location: "",
      },
      {
        id: "3",
        brandLabel: "Promesa Realty",
        quote:
          "Mamik Jain & Pritesh Jain, Directors of Promesa Realty, share their insights on the evolving real estate landscape. Stay tuned as we bring you their vision, expertise, and success story!",
        name: "Rahul Verma",
        role: "Directors of Promesa Realty",
        location: "",
      },
    ],
  },
  awards: {
    starIconSrc: "/images/Developer/award/star.svg",
    headingLine1: "Awards &",
    headingLine2: "Recognitions",
    slides: DEV_AWARD_SLIDES,
  },
} satisfies MarketingPageContent;
