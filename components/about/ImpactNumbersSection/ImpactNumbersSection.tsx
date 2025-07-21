// components/about/ImpactNumbersSection/ImpactNumbersSection.tsx
import { impactStats } from '@/data/data';
import SectionHeading from '@/components/common/SectionHeading/SectionHeading';

// This could be a client component if you want animated counting numbers,
// but for static numbers, a Server Component is fine.
export default function ImpactNumbersSection() {
  return (
    <section className="bg-[var(--color-navy-blue)] text-[var(--color-off-white)] py-16 rounded-lg shadow-xl">
      <SectionHeading title="Our Impact So Far" subtitle="Making a Measurable Difference" />
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {impactStats.map((stat, index) => (
          <div
            key={index}
            className="text-center p-6 rounded-lg bg-[var(--color-navy-blue-900)] shadow-lg fade-in"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <h3 className="text-5xl font-heading font-extrabold text-[var(--color-deep-red)] mb-2">
              {stat.number}
            </h3>
            <p className="text-lg font-sans font-semibold">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}