// data/data.ts (Updated)

import { StaticImageData } from 'next/image';

export interface FounderInfo {
  name: string;
  bio: string;
  image: string | StaticImageData;
}

export interface OrganizationDetails {
  name: string;
  founder: FounderInfo;
  mission: string;
  vision?: string;
  instagram?: string;
}

export interface NavLink {
  name: string;
  href: string;
}

export interface Project {
  id: string;
  slug: string; // Added slug for dynamic routing
  title: string;
  shortDescription: string; // Shorter description for cards
  longDescription: string; // Detailed description for individual page
  image: string | StaticImageData; // Main image for card and detail
  galleryImages?: { src: string | StaticImageData; alt: string }[]; // Gallery for detail page
  category?: string;
  date?: string;
  location?: string;
  impactMetrics?: { label: string; value: string }[]; // Example: "Beneficiaries", "Funds Utilized"
}

export interface GalleryImage {
  id: string;
  src: string | StaticImageData;
  alt: string;
  link?: string;
}

export interface ContactMethod {
  title: string;
  description: string;
  icon: string;
  actionText: string;
  link: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  instagram?: string;
  facebook?: string;
  twitter?: string;
  youtube?: string; // Added for potential video reels
  googleMapsEmbedUrl?: string; // For embedding Google Map
  latitude?: number; // Optional for more precise map control
  longitude?: number; // Optional for more precise map control
  contactMethods?: ContactMethod[];
  directionsUrl?: string;
}

export interface CoreValue {
  icon: string;
  title: string;
  description: string;
}

export interface ImpactStat {
  number: string;
  label: string;
}

export interface BankAccount {
  id: string;
  bankName: string;
  accountTitle: string;
  accountNumber: string;
  iban: string;
  swiftCode?: string; // Optional
  branchName?: string; // Optional
  branchCode?: string; // Optional
  currency: string;
  logo?: string | StaticImageData; // Optional: if you have bank logos
}

export interface DonatePageContent {
  intro: string;
  outro: string;
  howDonationsHelp: string[]; // List of points
}

// --- Data ---

export const organizationInfo: OrganizationDetails = {
  name: "MUHIB-E-ALI-DARYADIL",
  founder: {
    name: "Syed Kazim Kazmi",
    bio: "Syed Kazim Kazmi is the visionary founder of MUHIB-E-ALI-DARYADIL, whose unwavering dedication and profound compassion have been the driving force behind the organization's humanitarian efforts. His commitment to serving the underprivileged and fostering community well-being has inspired countless volunteers and supporters.",
    image: "/assets/images/founder-syed-kazim-kazmi.jpg",
  },
  mission: "Our mission is to uplift and empower underprivileged communities through sustainable welfare initiatives, including food distribution, education support, and access to essential resources, fostering a society built on empathy and mutual support.",
  vision: "To create a world where every individual has access to basic necessities, education, and opportunities to thrive, regardless of their socio-economic background.",
  instagram: 'https://www.instagram.com/madd_org/',
};

export const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Gallery", href: "/gallery" },
  { name: "Donate", href: "/donat" },
  { name: "Contact", href: "/contact" },
];

export const projects: Project[] = [
  {
    id: "1",
    slug: "food-distribution-drive", // Unique slug for this project
    title: "Food Distribution Drive",
    shortDescription: "Regularly providing essential food supplies to families in need across various localities.",
    longDescription: "Our ongoing Food Distribution Drive is a cornerstone of our humanitarian efforts. We organize monthly campaigns to deliver nutritious food packages to vulnerable families, ensuring they have access to basic sustenance. Each package is carefully curated to meet dietary needs, providing relief and hope to hundreds of individuals.",
    image: "/assets/images/projects/food-distribution-1.jpg",
    galleryImages: [
      { src: "/assets/images/projects/food-distribution-g1.jpg", alt: "Volunteers packing food" },
      { src: "/assets/images/projects/food-distribution-g2.jpg", alt: "Food distribution to families" },
      { src: "/assets/images/projects/food-distribution-g3.jpg", alt: "Community members receiving aid" },
    ],
    category: "Food Security",
    date: "Ongoing since 2020",
    location: "Various localities in Sindh, Pakistan",
    impactMetrics: [
      { label: "Meals Distributed", value: "5000+" },
      { label: "Families Reached", value: "500+" },
    ]
  },
  {
    id: "2",
    slug: "educational-support-program",
    title: "Educational Support Program",
    shortDescription: "Supporting children's education by providing scholarships, school supplies, and tuition assistance.",
    longDescription: "The Educational Support Program aims to break the cycle of poverty by investing in the future of underprivileged children. We provide scholarships, school uniforms, textbooks, and stationery to ensure that financial barriers do not hinder their access to quality education. Our goal is to empower the next generation with knowledge and skills.",
    image: "/assets/images/projects/education-support-1.jpg",
    galleryImages: [
      { src: "/assets/images/projects/education-support-g1.jpg", alt: "Children studying with new books" },
      { src: "/assets/images/projects/education-support-g2.jpg", alt: "Volunteer teaching session" },
      { src: "/assets/images/projects/education-support-g3.jpg", alt: "Distribution of school kits" },
    ],
    category: "Education",
    date: "Ongoing since 2021",
    location: "Rural areas of Mirpur Mathelo",
    impactMetrics: [
      { label: "Children Enrolled", value: "200+" },
      { label: "Schools Supported", value: "5" },
    ]
  },
  {
    id: "3",
    slug: "medical-aid-camps",
    title: "Medical Aid Camps",
    shortDescription: "Organizing free medical camps to provide health check-ups and basic medicines to remote communities.",
    longDescription: "Our Medical Aid Camps bring essential healthcare services directly to remote and underserved communities. We deploy teams of doctors and medical volunteers to conduct free check-ups, provide basic medication, and offer health awareness sessions. This initiative addresses critical health disparities and promotes well-being.",
    image: "/assets/images/projects/medical-aid-1.jpg", // Placeholder
    galleryImages: [
      { src: "/assets/images/projects/medical-aid-g1.jpg", alt: "Doctor examining patient" },
      { src: "/assets/images/projects/medical-aid-g2.jpg", alt: "Medical camp setup" },
      { src: "/assets/images/projects/medical-aid-g3.jpg", alt: "Patients waiting for consultation" },
    ],
    category: "Healthcare",
    date: "Quarterly",
    location: "Various villages and towns",
    impactMetrics: [
      { label: "Patients Treated", value: "1500+" },
      { label: "Camps Conducted", value: "10+" },
    ]
  },
  
  // Add more dummy projects with unique slugs and detailed content
];

export const galleryImages: GalleryImage[] = [
  {
    id: "g1",
    src: "/assets/images/gallery/instagram-post-1.jpg",
    alt: "Volunteers preparing meals for distribution.",
    link: "https://www.instagram.com/p/C--Wn_IIQcn/?img_index=4",
  },
  {
    id: "g2",
    src: "/assets/images/gallery/instagram-post-2.jpg",
    alt: "Children receiving school supplies.",
    link: "https://www.instagram.com/p/C--Wn_IIQcn/?img_index=2",
  },
  {
    id: "g3",
    src: "/assets/images/gallery/instagram-post-3.jpg",
    alt: "Community gathering for support.",
    link: "https://www.instagram.com/p/C--Wn_IIQcn/?img_index=1",
  },
  {
    id: "g4",
    src: "/assets/images/gallery/instagram-post-4.jpg",
    alt: "Educational workshop for youth.",
    link: "https://www.instagram.com/p/C--Wn_IIQcn/?img_index=2",
  },
   {
    id: "g5",
    src: "/assets/images/gallery/instagram-post-5.jpg",
    alt: "Volunteers preparing meals for distribution.",
    link: "https://www.instagram.com/p/C--Wn_IIQcn/?img_index=4",
  },
  {
    id: "g6",
    src: "/assets/images/gallery/instagram-post-6.jpg",
    alt: "Children receiving school supplies.",
    link: "https://www.instagram.com/p/C--Wn_IIQcn/?img_index=2",
  },
  {
    id: "g7",
    src: "/assets/images/gallery/instagram-post-7.jpg",
    alt: "Community gathering for support.",
    link: "https://www.instagram.com/p/C--Wn_IIQcn/?img_index=1",
  },
  {
    id: "g8",
    src: "/assets/images/gallery/instagram-post-8.jpg",
    alt: "Educational workshop for youth.",
    link: "https://www.instagram.com/p/C--Wn_IIQcn/?img_index=2",
  },
    {
    id: "g9",
    src: "/assets/images/gallery/instagram-post-9.jpg",
    alt: "Community gathering for support.",
    link: "https://www.instagram.com/p/C--Wn_IIQcn/?img_index=1",
  },
  {
    id: "g10",
    src: "/assets/images/gallery/instagram-post-10.jpg",
    alt: "Educational workshop for youth.",
    link: "https://www.instagram.com/p/C--Wn_IIQcn/?img_index=2",
  },
  // Add more dummy images for now
];

export const contactInfo: ContactInfo = {
  email: "info@muhibealidaryadil.org",
  phone: "+92 3XX XXXXXXX",
  address: "House #123, Street #4, Mirpur Mathelo, Sindh, Pakistan",
  instagram: "https://www.instagram.com/madd_org/",
  facebook: "https://www.facebook.com/yourpage", // Example
  twitter: "https://twitter.com/yourhandle",   // Example
  youtube: "https://www.youtube.com/yourchannel", // Example
  contactMethods: [
    {
      title: "General Inquiries",
      description: "For questions about our programs and activities",
      icon: "mail",
      actionText: "Send Email",
      link: "mailto:info@muhibealidaryadil.org"
    },
    {
      title: "Urgent Support",
      description: "Immediate assistance needed",
      icon: "phone",
      actionText: "Call Now",
      link: "tel:+921234567890"
    },
    {
      title: "Visit Headquarters",
      description: "Schedule an in-person meeting",
      icon: "location",
      actionText: "Book Appointment",
      link: "/contact"
    },
    {
      title: "Instagram",
      description: "Visit our instagram",
      icon: "instagram",
      actionText: "visit",
      link: "https://www.instagram.com/madd_org/"
    },
    {
      title: "Facebook",
      description: "Visit our Facebook",
      icon: "facebook",
      actionText: "visit",
      link: "https://www.facebook.com/yourpage"
    },
    {
      title: "Twitter",
      description: "Visit our Twitter",
      icon: "twitter",
      actionText: "visit",
      link: "https://twitter.com/yourhandle"
    },
  ],
  // IMPORTANT: Replace with your actual Google Maps Embed URL
  // You can get this by going to Google Maps, searching for your location,
  // clicking "Share", then "Embed a map", and copying the iframe src.
  // Example: https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dXX.XXXX!3dYY.YYYY!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDM0JzQyLjEiTiA3MsKwNTUnMTIuNSJF!5e0!3m2!1sen!2sPK!4v1700000000000!5m2!1sen!2sPK
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3511.970110362391!2d69.58498847427242!3d27.36706037648356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39379650e64f2601%3A0x7d28c31e67e3a890!2sMirpur%20Mathelo%2C%20Ghotki%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2sPK!4v1719999999999!5m2!1sen!2sPK",
  // Optional for programmatically generating map links if not using iframe
  latitude: 27.3670603,
  longitude: 69.5849884,
};
export const trustBadges = [
  {
    icon: "encryption",
    text: "256-bit SSL Encryption"
  },
  {
    icon: "gdpr",
    text: "GDPR Compliant"
  },
  {
    icon: "nospam",
    text: "No Spam Guarantee"
  }
];

export const coreValues: CoreValue[] = [
  {
    icon: '🤝',
    title: 'Compassion',
    description: 'We act with empathy and kindness, understanding the needs of those we serve.',
  },
  {
    icon: '💡',
    title: 'Integrity',
    description: 'We operate with honesty, transparency, and accountability in all our endeavors.',
  },
  {
    icon: '🌱',
    title: 'Sustainability',
    description: 'We strive for long-term solutions that empower communities to thrive independently.',
  },
  {
    icon: '🤲',
    title: 'Service',
    description: 'Our core purpose is to serve humanity, putting the well-being of others first.',
  },
];

export const impactStats: ImpactStat[] = [
  { number: '5000+', label: 'Meals Distributed' },
  { number: '500+', label: 'Families Supported' },
  { number: '200+', label: 'Children Educated' },
  { number: '1000+', label: 'Volunteer Hours' },
];


export const bankAccounts: BankAccount[] = [
  {
    id: "bank1",
    bankName: "Meezan Bank Limited",
    accountTitle: "MUHIB-E-ALI-DARYADIL WELFARE ORGANIZATION",
    accountNumber: "0123456789", // REPLACE WITH ACTUAL ACCOUNT NUMBER
    iban: "PKXXMEZN0123456789XXXX", // REPLACE WITH ACTUAL IBAN
    swiftCode: "MEZNPKKA", // Optional, if applicable
    branchName: "Mirpur Mathelo Branch", // Optional
    branchCode: "0123", // Optional
    currency: "PKR",
    logo: "/assets/images/bank-logos/meezan-bank-logo.png", // Placeholder, add actual logo
  },
  // Add more bank accounts if you have them, e.g., for international donations
  // {
  //   id: "bank2",
  //   bankName: "Allied Bank Limited",
  //   accountTitle: "MUHIB-E-ALI-DARYADIL WELFARE ORGANIZATION",
  //   accountNumber: "9876543210",
  //   iban: "PKXXALIE9876543210XXXX",
  //   currency: "PKR",
  //   logo: "/assets/images/bank-logos/allied-bank-logo.png", // Placeholder
  // },
];

export const donatePageContent: DonatePageContent = {
  intro: "Your generous contribution empowers us to continue our vital work, transforming lives and building stronger, more resilient communities. Every donation, big or small, makes a tangible difference.",
  outro: "From the bottom of our hearts, thank you for considering supporting MUHIB-E-ALI-DARYADIL. Your compassion fuels our mission. May your generosity be a source of continuous blessing.",
  howDonationsHelp: [
    "Provide nutritious meals to underprivileged families.",
    "Fund educational supplies and scholarships for deserving children.",
    "Support medical aid camps and health initiatives in remote areas.",
    "Contribute to community development projects, fostering long-term sustainability.",
    "Enable emergency relief efforts during crises.",
  ],
};
