// components/common/Footer/Footer.tsx
import Link from 'next/link';
import Image from 'next/image'; // Import Image component
import { navLinks, contactInfo, organizationInfo } from '@/data/data'; // Import organizationInfo
import SocialLinks from '@/components/common/SocialLinks/SocialLinks';

// No need for props anymore, data is directly imported
export default function Footer() {
  const currentYear = new Date().getFullYear(); // Dynamic year

  return (
    <footer className="bg-[var(--color-navy-blue)] text-[var(--color-off-white)] py-12 px-4"> {/* Increased padding slightly */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left"> {/* Increased gap */}
        {/* About Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Link href="/" className="mb-4">
            <Image
              src="/assets/logo.png" // Ensure your logo is here
              alt={`${organizationInfo.name} Logo`}
              width={80} // Larger logo in footer
              height={80}
              className="rounded-full border-4 border-[var(--color-deep-red)] mb-2"
            />
          </Link>
          <h3 className="text-2xl font-heading font-bold text-[var(--color-deep-red)] mb-2">
            {organizationInfo.name}
          </h3>
          <p className="text-sm leading-relaxed text-[var(--color-off-white)]">
            {/* Truncate mission for footer, or display full if short */}
            {organizationInfo.mission.length > 150
              ? organizationInfo.mission.substring(0, 150) + "..."
              : organizationInfo.mission}
          </p>
          <Link href="/about" className="text-[var(--color-off-white)] hover:text-[var(--color-deep-red)] text-sm mt-3 transition-colors duration-300">
            Read More About Us →
          </Link>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-xl font-heading font-bold text-[var(--color-deep-red)] mb-4">Quick Links</h3>
          <ul className="space-y-3"> {/* Increased space-y */}
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  // Slightly larger text
                  className="text-base hover:text-[var(--color-deep-red)] transition duration-300 ease-in-out"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-xl font-heading font-bold text-[var(--color-deep-red)] mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm text-[var(--color-off-white)]">
            <li className="flex items-center md:justify-start justify-center space-x-3">
              <svg className="w-5 h-5 text-[var(--color-deep-red)] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zm0 12H4V8.373l8 6.222 8-6.222V18z"/></svg>
              <span>Email: <a href={`mailto:${contactInfo.email}`} className="hover:underline">{contactInfo.email}</a></span>
            </li>
            <li className="flex items-center md:justify-start justify-center space-x-3">
              <svg className="w-5 h-5 text-[var(--color-deep-red)] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 2h-2v2h-2v2H9V4H7V2H5v2H3v2H1v2h2v2h2v2H7v2H9v2h2v2h2v-2h2v-2h2v-2h2v-2h2v-2h-2v-2h-2V4h-2V2zm-4 14h-2v-2h2v2zm0-4h-2v-2h2v2zM15 8h-2V6h2v2zm0-4h-2V2h2v2zM9 8H7V6h2v2zm0 4H7v-2h2v2zm0 4H7v-2h2v2z"/></svg>
              <span>Phone: <a href={`tel:${contactInfo.phone}`} className="hover:underline">{contactInfo.phone}</a></span>
            </li>
            <li className="flex items-start md:justify-start justify-center space-x-3"> {/* Added mt-2 */}
              <svg className="w-5 h-5 text-[var(--color-deep-red)] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              <span>Address: {contactInfo.address}</span>
            </li>
          </ul>
          <div className="mt-6 w-full md:w-auto">
            {/* Social Links component, passing iconClass for footer styling */}
            <SocialLinks iconClass="text-white hover:text-[var(--color-deep-red)]" />
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--color-navy-blue-800)] mt-10 pt-6 text-center text-sm text-[var(--color-light-gray)]">
        &copy; {currentYear} {organizationInfo.name}. All rights reserved.
      </div>
    </footer>
  );
}