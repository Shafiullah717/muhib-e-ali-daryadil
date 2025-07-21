// components/home/AboutPreviewSection/AboutPreviewSection.tsx
import Link from 'next/link';
import Image from 'next/image';
import { organizationInfo } from '@/data/data';
import SectionHeading from '@/components/common/SectionHeading/SectionHeading'; // Will create this

export default function AboutPreviewSection() {
  return (
    <section className="py-16 bg-[var(--color-off-white)]">
      <div className="container mx-auto px-4">
        <SectionHeading title="Who We Are" subtitle="Dedicated to Making a Difference" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
          <div className="fade-in">
            <Image
              src={organizationInfo.founder.image} // Founder's image
              alt={organizationInfo.founder.name}
              width={500}
              height={500}
              className="rounded-lg shadow-founder mx-auto md:ml-0"
            />
          </div>
          <div className="text-center md:text-left fade-in delay-200">
            <h3 className="text-3xl font-heading font-bold text-[var(--color-navy-blue)] mb-4">
              About <span className="text-[var(--color-deep-red)]">{organizationInfo.name}</span>
            </h3>
            <p className="text-lg text-[var(--color-dark-gray)] leading-relaxed mb-6">
              {organizationInfo.mission}
            </p>
            <p className="text-md text-[var(--color-dark-gray)] leading-relaxed mb-6">
              Founded by the compassionate and visionary <span className="founder-highlight text-[var(--color-deep-red)] font-semibold">{organizationInfo.founder.name}</span>, our organization is built on principles of service and empathy.
            </p>
            <Link
              href="/about"
              className="inline-block bg-[var(--color-navy-blue)] hover:bg-[var(--color-deep-red)] text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}