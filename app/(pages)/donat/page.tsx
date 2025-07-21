// app/donat/page.tsx
import type { Metadata } from 'next';
import SectionHeading from '@/components/common/SectionHeading/SectionHeading';
import DonateHeroSection from '@/components/donat/DonateHeroSection/DonateHeroSection'; // <--- Import the Hero Section
import BankDetailsCard from '@/components/donat/BankDetailsCard/BankDetailsCard'; // This will be a client component
import { bankAccounts, donatePageContent, organizationInfo } from '@/data/data';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `Donate - Support Our Cause | ${organizationInfo.name}`,
  description: `Support ${organizationInfo.name}'s humanitarian efforts by donating directly to our bank accounts. Your contribution helps provide food, education, and medical aid to those in need.`,
  openGraph: {
    title: `Donate to ${organizationInfo.name}`,
    description: `Make a difference today. Your donation empowers underprivileged communities.`,
    url: 'https://www.muhibealidaryadil.org/donat', // Replace with actual domain
  },
};

export default function DonatePage() {
  return (
    <div className="bg-[var(--color-off-white)]"> {/* Removed 'py-12' from this outermost div */}
      <DonateHeroSection /> {/* <--- The DonateHeroSection is placed here */}

      {/* Main content container, now responsible for its own top padding */}
      <div className="container mx-auto px-4 py-12 space-y-16"> {/* Added py-12 for overall section spacing */}
        <SectionHeading
          title="Support Our Cause"
          subtitle="Your Contribution Transforms Lives"
        />

        {/* Introduction Section */}
        <section className="bg-white rounded-lg shadow-credibility p-8 text-center md:text-left fade-in">
          <p className="text-lg md:text-xl text-[var(--color-dark-gray)] leading-relaxed mb-6">
            {donatePageContent.intro}
          </p>
          <div className="pattern-divider mx-auto md:mx-0 w-24 mb-6"></div>
          <h3 className="text-2xl font-heading font-bold text-[var(--color-navy-blue)] mb-4">
            How Your Donation Helps
          </h3>
          <ul className="text-left list-disc list-inside space-y-2 text-[var(--color-dark-gray)] text-lg">
            {donatePageContent.howDonationsHelp.map((point, index) => (
              <li key={index} className="flex items-start">
                <span className="text-[var(--color-deep-red)] mr-2">&#x2022;</span> {/* Custom bullet */}
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Bank Account Details Section - Added id for hero section link */}
        <section id="donation-details" className="fade-in delay-200">
          <h2 className="text-3xl font-heading font-bold text-[var(--color-navy-blue)] text-center mb-8">
            Bank Transfer Details
          </h2>
          <p className="text-center text-lg text-[var(--color-dark-gray)] mb-10">
            You can make a direct bank transfer using the details below. We appreciate your generosity.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bankAccounts.map((account, index) => (
              <BankDetailsCard key={account.id} account={account} index={index} />
            ))}
          </div>
        </section>

        {/* Call to Action / Other Ways to Help */}
        <section className="bg-[var(--color-light-gray)] rounded-lg shadow-inner p-8 text-center fade-in delay-400">
          <h2 className="text-3xl font-heading font-bold text-[var(--color-navy-blue)] mb-4">
            Have Questions or Want to Volunteer?
          </h2>
          <p className="text-lg text-[var(--color-dark-gray)] mb-6">
            If you wish to discuss your donation, learn about our projects in more detail, or explore volunteering opportunities, please don&apos;t hesitate to reach out.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-navy-blue)] hover:bg-[var(--color-deep-red)] text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Contact Us
          </Link>
        </section>

        {/* Outro Section */}
        <section className="text-center fade-in delay-500">
          <p className="text-xl font-semibold text-[var(--color-navy-blue)] leading-relaxed">
            {donatePageContent.outro}
          </p>
        </section>
      </div>
    </div>
  );
}