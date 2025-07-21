// components/gallery/GalleryGrid/GalleryGrid.tsx
import Image from 'next/image';
import Link from 'next/link';
import { GalleryImage } from '@/data/data';

interface GalleryGridProps {
  images: GalleryImage[];
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-8">
      {images.map((image, index) => (
        <div
          key={image.id}
          className="relative w-full h-48 sm:h-56 md:h-64 rounded-lg overflow-hidden shadow-credibility group transform hover:scale-105 transition duration-300 ease-in-out fade-in"
          style={{ animationDelay: `${index * 0.08}s` }} // Subtle staggered animation
        >
          <Image
            src={image.src}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
            className="rounded-lg transition-transform duration-300 group-hover:scale-110" // Zoom effect on hover
            loading="lazy" // Lazy load all gallery images
          />
          {image.link && (
            <Link
              href={image.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-label={`View full post on Instagram for ${image.alt}`}
            >
              {/* Instagram Icon Placeholder */}
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07c3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.148 3.252-1.691 4.771-4.919 4.919-.058.028-1.026.04-.378.04s-1.01-.012-.412-.04c-3.251-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.646-.07-4.85s.012-3.584.07-4.85c.148-3.252 1.691-4.771 4.919-4.919zm0 2.102c-3.267 0-3.619.013-4.885.07c-2.88.132-3.957 1.259-4.088 4.088-.057 1.266-.07 1.618-.07 4.885s.013 3.619.07 4.885c.132 2.88 1.259 3.957 4.088 4.088 1.266.057 1.618.07 4.885.07s3.619-.013 4.885-.07c2.88-.132 3.957-1.259 4.088-4.088.057-1.266.07-1.618.07-4.885s-.013-3.619-.07-4.885c-.132-2.88-1.259-3.957-4.088-4.088-1.266-.057-1.618-.07-4.885-.07zm0 3.518a4.437 4.437 0 1 0 0 8.874 4.437 4.437 0 0 0 0-8.874zm0 2.102a2.335 2.335 0 1 1 0 4.67 2.335 2.335 0 0 1 0-4.67zm7.424-5.322a1.006 1.006 0 1 0 0 2.012 1.006 1.006 0 0 0 0-2.012z"/>
              </svg>
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}