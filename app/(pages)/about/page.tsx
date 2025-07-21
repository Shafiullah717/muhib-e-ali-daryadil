// app/about/page.tsx
import type { Metadata } from 'next';
import SectionHeading from '@/components/common/SectionHeading/SectionHeading';
import AboutHeroSection from '@/components/about/AboutHeroSection/AboutHeroSection'; // Import the new component
import FounderSection from '@/components/about/FounderSection/FounderSection';
import MissionVisionSection from '@/components/about/MissionVisionSection/MissionVisionSection';
import ValuesSection from '@/components/about/ValuesSection/ValuesSection';
import ImpactNumbersSection from '@/components/about/ImpactNumbersSection/ImpactNumbersSection';
import { organizationInfo } from '@/data/data';

// Metadata for the About page
export const metadata: Metadata = {
  title: `About Us - ${organizationInfo.name}`,
  description: `Learn about the mission, vision, and the inspiring founder ${organizationInfo.founder.name} of ${organizationInfo.name} - a humanitarian welfare organization in Pakistan.`,
  openGraph: {
    title: `About ${organizationInfo.name}`,
    description: `Discover the story behind ${organizationInfo.name} and our commitment to social welfare.`,
    url: 'https://www.muhibealidaryadil.org/about', // Replace with actual domain
  },
};

export default function AboutPage() {
  return (
    <div className="bg-[var(--color-off-white)]"> {/* Removed py-12 from here as hero section handles top spacing */}
      <AboutHeroSection /> {/* Add the new hero section here */}

      <div className="container mx-auto px-4 py-12 space-y-20"> {/* Added py-12 here for content spacing */}
        <SectionHeading
          title="Our Story & Commitment"
          subtitle="Learn More About MUHIB-E-ALI-DARYADIL"
        />
        <section id='founder-section'>
        <FounderSection />
        </section>
        <MissionVisionSection />
        <ValuesSection />
        <ImpactNumbersSection />
        {/* You can add a TeamSection here if you have specific team members to highlight */}
        {/* <TeamSection /> */}
      </div>
    </div>
  );
}