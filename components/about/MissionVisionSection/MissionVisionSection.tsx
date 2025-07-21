// components/about/MissionVisionSection/MissionVisionSection.tsx
import { organizationInfo } from '@/data/data';

export default function MissionVisionSection() {
  const { mission, vision } = organizationInfo;

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="bg-[var(--color-navy-blue)] text-[var(--color-off-white)] p-8 rounded-lg shadow-lg fade-in">
        <h3 className="text-3xl font-heading font-bold text-[var(--color-deep-red)] mb-4">Our Mission</h3>
        <p className="text-lg leading-relaxed">
          {mission}
        </p>
      </div>
      <div className="bg-[var(--color-deep-red)] text-white p-8 rounded-lg shadow-lg fade-in delay-200">
        <h3 className="text-3xl font-heading font-bold text-[var(--color-navy-blue-100)] mb-4">Our Vision</h3>
        <p className="text-lg leading-relaxed">
          {vision || "To foster a world where compassion thrives, and every individual is empowered to live with dignity and hope."}
        </p>
      </div>
    </section>
  );
}