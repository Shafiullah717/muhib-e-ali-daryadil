// components/about/FounderSection/FounderSection.tsx
import Image from 'next/image';
import { organizationInfo } from '@/data/data';

export default function FounderSection() {
  const { founder, name } = organizationInfo;

  return (
    <section className="bg-[var(--color-off-white)] rounded-lg shadow-credibility p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 fade-in">
      <div className="flex-shrink-0">
        <Image
          src={founder.image}
          alt={`Picture of ${founder.name}, Founder of ${name}`}
          width={400} // Adjust size as needed
          height={400} // Adjust size as needed
          className="rounded-full border-[var(--border-width-3)] border-[var(--color-deep-red)] shadow-founder object-cover w-64 h-64 md:w-80 md:h-80"
        />
      </div>
      <div className="text-center md:text-left flex-grow">
        <h2 className="text-4xl font-heading font-extrabold text-[var(--color-navy-blue)] mb-4 animate-fade-in-up">
          Meet Our Inspiring Founder
        </h2>
        <h3 className="text-3xl font-heading font-bold text-[var(--color-deep-red)] founder-highlight inline-block mb-4 animate-fade-in-up delay-100">
          {founder.name}
        </h3>
        <p className="text-lg text-[var(--color-dark-gray)] leading-relaxed animate-fade-in-up delay-200">
          {founder.bio}
        </p>
        <p className="text-md text-[var(--color-dark-gray)] mt-4 animate-fade-in-up delay-300">
          <span className="font-semibold">{name}</span> was established with his unwavering dedication to humanitarian service, making a tangible difference in countless lives.
        </p>
      </div>
    </section>
  );
}