import React from 'react';
import TrustBadge from '@/components/contact/TrustBadge/TrustBadge';
import { trustBadges } from '@/data/data';

const TrustBadgesSection: React.FC = () => {
  return (
    <section className="mt-16 py-8 bg-white rounded-xl shadow-sm border border-[var(--color-light-gray)]">
      <h3 className="text-center text-lg font-semibold text-[var(--color-navy-blue)] mb-8">
        Your Information is Secure With Us
      </h3>
      <div className="flex flex-wrap justify-center gap-8">
        {trustBadges.map((badge, index) => (
          <TrustBadge key={index} icon={badge.icon} text={badge.text} />
        ))}
      </div>
    </section>
  );
};

export default TrustBadgesSection;