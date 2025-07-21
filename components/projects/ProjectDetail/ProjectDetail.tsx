// components/projects/ProjectDetail/ProjectDetail.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/data/data';
import SectionHeading from '@/components/common/SectionHeading/SectionHeading';

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <section className="bg-white rounded-lg shadow-credibility p-6 md:p-10 fade-in">
      <SectionHeading title={project.title} subtitle={project.category || "Our Initiative"} />

      <div className="relative w-full h-80 md:h-[500px] mb-8 rounded-lg overflow-hidden shadow-lg">
        <Image
          src={project.image}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          priority // Prioritize loading for the main project image
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        {project.location && (
          <div className="bg-[var(--color-light-gray)] p-4 rounded-lg text-center shadow-sm fade-in delay-100">
            <h4 className="text-lg font-heading font-semibold text-[var(--color-navy-blue)]">Location</h4>
            <p className="text-[var(--color-dark-gray)]">{project.location}</p>
          </div>
        )}
        {project.date && (
          <div className="bg-[var(--color-light-gray)] p-4 rounded-lg text-center shadow-sm fade-in delay-200">
            <h4 className="text-lg font-heading font-semibold text-[var(--color-navy-blue)]">Duration</h4>
            <p className="text-[var(--color-dark-gray)]">{project.date}</p>
          </div>
        )}
        {project.impactMetrics && project.impactMetrics.length > 0 && (
          <div className="bg-[var(--color-light-gray)] p-4 rounded-lg text-center shadow-sm fade-in delay-300">
            <h4 className="text-lg font-heading font-semibold text-[var(--color-navy-blue)]">Key Impact</h4>
            {project.impactMetrics.map((metric, i) => (
              <p key={i} className="text-[var(--color-dark-gray)]">{metric.label}: <span className="font-bold text-[var(--color-deep-red)]">{metric.value}</span></p>
            ))}
          </div>
        )}
      </div>

      <div className="text-lg text-[var(--color-dark-gray)] leading-relaxed mb-10 fade-in delay-400">
        <p>{project.longDescription}</p>
      </div>

      {project.galleryImages && project.galleryImages.length > 0 && (
        <div className="mt-10 fade-in delay-500">
          <h3 className="text-3xl font-heading font-bold text-[var(--color-navy-blue)] mb-6 text-center">
            Project Gallery
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {project.galleryImages.map((img, index) => (
              <div key={index} className="relative w-full h-56 rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition duration-300 ease-in-out">
                <Image
                  src={img.src}
                  alt={img.alt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                  loading="lazy" // Lazy load gallery images
                />
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="text-center mt-12 fade-in delay-600">
        <Link
          href="/projects"
          className="inline-block bg-[var(--color-navy-blue)] hover:bg-[var(--color-deep-red)] text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          &larr; Back to All Projects
        </Link>
      </div>
    </section>
  );
}