// components/about/ValuesSection/ValuesSection.tsx
import { coreValues } from '@/data/data';
import SectionHeading from '@/components/common/SectionHeading/SectionHeading';

export default function ValuesSection() {
  return (
    <section className="py-16 bg-[var(--color-off-white)] rounded-lg shadow-inner">
      <SectionHeading title="Our Core Values" subtitle="Guiding Principles of Our Work" />
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {coreValues.map((value, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-6 text-center shadow-credibility transform hover:scale-105 transition duration-300 ease-in-out fade-in"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="text-5xl mb-4 text-[var(--color-deep-red)]">{value.icon}</div>
            <h3 className="text-xl font-heading font-bold text-[var(--color-navy-blue)] mb-3">{value.title}</h3>
            <p className="text-[var(--color-dark-gray)] text-sm leading-relaxed">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}