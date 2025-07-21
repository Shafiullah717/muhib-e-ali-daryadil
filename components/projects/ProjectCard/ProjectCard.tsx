// components/projects/ProjectCard/ProjectCard.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/data/data';

interface ProjectCardProps {
  project: Project;
  index: number; // For staggered animation
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <div
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
        <div className="flex justify-between items-center text-sm text-[var(--color-dark-gray)] mb-4">
          {project.category && (
            <span className="bg-[var(--color-light-gray)] text-[var(--color-navy-blue)] px-3 py-1 rounded-full font-medium">
              {project.category}
            </span>
          )}
          {project.date && (
            <span>{project.date}</span>
          )}
        </div>
        <Link
          href={`/projects/${project.slug}`} // Link to the dynamic project detail page
          className="inline-block bg-[var(--color-deep-red)] hover:bg-[var(--color-accent-red)] text-white font-bold py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out"
        >
          View Details &rarr;
        </Link>
      </div>
    </div>
  );
}