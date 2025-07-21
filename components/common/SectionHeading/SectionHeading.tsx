// components/common/SectionHeading/SectionHeading.tsx
interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center mb-12 fade-in">
      {subtitle && (
        <p className="text-[var(--color-deep-red)] text-lg font-semibold mb-2 animate-fade-in-up">
          {subtitle}
        </p>
      )}
      <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-[var(--color-navy-blue)] leading-tight animate-fade-in-up delay-100">
        {title}
      </h2>
      <div className="pattern-divider mt-6"></div> {/* Your custom divider */}
    </div>
  );
}