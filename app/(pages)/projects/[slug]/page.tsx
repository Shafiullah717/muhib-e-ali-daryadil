// app/projects/[slug]/page.tsx
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ProjectDetail from '@/components/projects/ProjectDetail/ProjectDetail';
import { projects, organizationInfo } from '@/data/data';

// Function to generate static params for all project slugs
// This tells Next.js to pre-render these pages at build time.
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Function to generate dynamic metadata for each project page
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  // Await the params promise to get the actual slug
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };
  }

  return {
    title: `${project.title} - ${organizationInfo.name} Projects`,
    description: project.shortDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      url: `https://www.muhibealidaryadil.org/projects/${project.slug}`, // Replace with actual domain
      images: [
        {
          url: project.image.toString(), // Ensure this is a string path
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.shortDescription,
      images: [project.image.toString()],
    },
  };
}

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  // Await the params promise to get the actual slug
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound(); // Render Next.js's 404 page if project is not found
  }

  return (
    <div className="bg-[var(--color-off-white)] py-12">
      <div className="container mx-auto px-4">
        <ProjectDetail project={project} />
      </div>
    </div>
  );
}