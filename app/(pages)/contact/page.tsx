import type { Metadata } from 'next';
import SectionHeading from '@/components/common/SectionHeading/SectionHeading';
import ContactHeroSection from '@/components/contact/ContactHeroSection/ContactHeroSection';
import ContactMethodCard from '@/components/contact/ContactMethodCard/ContactMethodCard';
import TrustBadgesSection from '@/components/contact/TrustBadgesSection/TrustBadgesSection';
import { contactInfo, organizationInfo } from '@/data/data';

export const metadata: Metadata = {
  title: `Contact Us - ${organizationInfo.name}`,
  description: `Get in touch with ${organizationInfo.name} for donations, volunteering, or inquiries. Find our contact details and send us a message.`,
  openGraph: {
    title: `Contact ${organizationInfo.name}`,
    description: `Reach out to us for support or information.`,
    url: 'https://www.muhibealidaryadil.org/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="bg-[var(--color-off-white)]">
      <ContactHeroSection />

      <div className="container mx-auto px-4 py-12 space-y-12">
        <SectionHeading
          title="We'd Love to Hear From You"
          subtitle="Connect with MUHIB-E-ALI-DARYADIL"
        />

        {/* Contact Methods Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-heading font-bold text-[var(--color-navy-blue)] mb-6 text-center">
            How to Reach Us
          </h2>
          <p className="text-lg text-[var(--color-dark-gray)] text-center max-w-2xl mx-auto mb-8">
            We offer multiple ways to contact us based on your needs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.contactMethods?.map((method, index) => (
              <ContactMethodCard key={index} method={method} />
            ))}
          </div>
        </div>

        {/* Google Map Section */}
        {contactInfo.googleMapsEmbedUrl && (
          <section className="mt-16 fade-in delay-400">
            <SectionHeading
              title="Find Our Location"
              subtitle="Visit Us or See Our Base of Operations"
            />
            <div className="mt-8 w-full h-96 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src={contactInfo.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MUHIB-E-ALI-DARYADIL Location on Google Maps"
              ></iframe>
            </div>
            <div className="mt-6 flex flex-wrap gap-4">
              <a 
                href={contactInfo.directionsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[var(--color-navy-blue)] text-white rounded-lg font-medium hover:bg-[var(--color-deep-navy)] transition-colors inline-flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                </svg>
                Get Directions
              </a>
              {/* <button 
                onClick={() => navigator.clipboard.writeText(contactInfo.address)}
                className="px-6 py-3 bg-white text-[var(--color-navy-blue)] border border-[var(--color-navy-blue)] rounded-lg font-medium hover:bg-[var(--color-off-white)] transition-colors inline-flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"></path>
                  <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"></path>
                </svg>
                Copy Address
              </button> */}
            </div>
          </section>
        )}

        {/* Trust Badges Section */}
        <TrustBadgesSection />
      </div>
    </div>
  );
}