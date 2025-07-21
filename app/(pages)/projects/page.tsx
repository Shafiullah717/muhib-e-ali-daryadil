// app/projects/page.tsx
import type { Metadata } from 'next';
import SectionHeading from '@/components/common/SectionHeading/SectionHeading';
import ProjectsHeroSection from '@/components/projects/ProjectsHeroSection/ProjectsHeroSection'; // <--- Import the new Hero Section
import ProjectCard from '@/components/projects/ProjectCard/ProjectCard';
import { projects, organizationInfo } from '@/data/data';

// Metadata for the Projects page
export const metadata: Metadata = {
  title: `Our Projects - ${organizationInfo.name}`,
  description: `Explore the humanitarian projects and initiatives undertaken by ${organizationInfo.name}, including food distribution, education support, and medical aid camps.`,
  openGraph: {
    title: `Projects by ${organizationInfo.name}`,
    description: `See the impact of our welfare work in various communities.`,
    url: 'https://www.muhibealidaryadil.org/projects', // Replace with actual domain
  },
};

export default function ProjectsPage() {
  return (
    <div className="bg-[var(--color-off-white)]"> {/* Removed 'py-12' from this outermost div */}
      <ProjectsHeroSection /> {/* <--- The ProjectsHeroSection is placed here */}

      {/* Main content container, now responsible for its own top padding */}
      <div className="container mx-auto px-4 py-12 space-y-12"> {/* Added py-12 for overall section spacing */}
        <SectionHeading
          title="Our Impactful Projects"
          subtitle="Transforming Lives Through Dedicated Initiatives"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}