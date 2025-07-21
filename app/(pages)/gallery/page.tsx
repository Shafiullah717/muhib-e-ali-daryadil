// app/gallery/page.tsx
import type { Metadata } from 'next';
import SectionHeading from '@/components/common/SectionHeading/SectionHeading';
import GalleryHeroSection from '@/components/gallery/GalleryHeroSection/GalleryHeroSection'; // <--- Import the Hero Section
import GalleryGrid from '@/components/gallery/GalleryGrid/GalleryGrid';
import { organizationInfo, galleryImages } from '@/data/data'; // Ensure galleryImages is imported
import Link from 'next/link';

// Metadata for the Gallery page
export const metadata: Metadata = {
  title: `Gallery - Our Humanitarian Work | ${organizationInfo.name}`,
  description: `View photos and videos showcasing the impactful humanitarian work of ${organizationInfo.name}, including food distribution, education support, and community development projects.`,
  openGraph: {
    title: `Photo Gallery - ${organizationInfo.name}`,
    description: `See our social impact through compelling visuals.`,
    url: 'https://www.muhibealidaryadil.org/gallery', // Replace with actual domain
    images: [
      {
        url: galleryImages[0]?.src.toString() || '/assets/images/logo.png', // Use first gallery image or logo
        width: 1200,
        height: 630,
        alt: `Gallery of ${organizationInfo.name}'s work`,
      },
    ],
  },
};

export default function GalleryPage() {
  return (
    <div className="bg-[var(--color-off-white)]"> {/* Removed py-12 from this outer div */}
      <GalleryHeroSection /> {/* <--- The GalleryHeroSection is placed here */}

      <div className="container mx-auto px-4 py-12 space-y-12"> {/* This div keeps the padding for content below the hero */}
        <SectionHeading
          title="Moments of Impact"
          subtitle="Our Work in Pictures & Videos (Reels)"
        />

        {galleryImages.length > 0 ? (
          <GalleryGrid images={galleryImages} />
        ) : (
          <p className="text-center text-xl text-[var(--color-dark-gray)] py-10">
            No gallery items available yet. Please check back soon!
          </p>
        )}
      </div>

      {/* Optional: Call to action for Instagram */}
      <div className="text-center mt-12 fade-in delay-600 pb-12"> {/* Added pb-12 for bottom spacing if needed */}
        <p className="text-lg text-[var(--color-navy-blue)] mb-4">
          For more recent updates and video reels, follow us on Instagram!
        </p>
        <Link
          href={organizationInfo.instagram || 'https://www.instagram.com/muhib_e_ali_daryadil/'} // Fallback to a generic link if not set
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[var(--color-deep-red)] hover:bg-[var(--color-accent-red)] text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Visit Our Instagram &rarr;
        </Link>
      </div>
    </div>
  );
}