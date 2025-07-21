// components/home/ProjectsPreviewSection/ProjectsPreviewSection.tsx
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/data';
import SectionHeading from '@/components/common/SectionHeading/SectionHeading'; // Will create this

export default function ProjectsPreviewSection() {
  const latestProjects = projects.slice(0, 3); // Show only the latest 3 projects

  return (
    <section className="py-16 bg-[var(--color-light-gray)]">
      <div className="container mx-auto px-4">
        <SectionHeading title="Our Impactful Projects" subtitle="See How We Make a Difference" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {latestProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-credibility overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out fade-in"
              style={{ animationDelay: `${index * 0.1}s` }} // Staggered animation
            >
              <div className="relative h-60 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-[var(--color-navy-blue)] mb-2">{project.title}</h3>
                <p className="text-[var(--color-dark-gray)] text-sm mb-4 line-clamp-3">{project.shortDescription}</p>
                <Link
                  href={`/projects#${project.id}`} // Link to specific project section on projects page
                  className="text-[var(--color-deep-red)] hover:underline font-semibold text-sm"
                >
                  Read More &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 fade-in delay-600">
          <Link
            href="/projects"
            className="inline-block bg-[var(--color-deep-red)] hover:bg-[var(--color-accent-red)] text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}