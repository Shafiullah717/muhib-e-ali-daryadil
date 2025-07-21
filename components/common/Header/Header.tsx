// components/common/Header/Header.tsx
'use client'; // <-- IMPORTANT: Add this line to make it a Client Component

import { useState } from 'react'; // Import useState for mobile menu state
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'; // Import usePathname for active link highlighting
import { navLinks, organizationInfo } from '@/data/data';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu
  const pathname = usePathname(); // Get current path for active link

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    // Changed sticky to fixed for better consistent navigation experience
    // Adjust pt-[76px] in app/layout.tsx if your header height is different.
    <header className="bg-[var(--color-navy-blue)] text-white shadow-lg fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 fade-in" onClick={() => setIsOpen(false)}>
          <Image
            src="/assets/logo.png"
            alt={`${organizationInfo.name} Logo`}
            width={50} // Adjust size as needed
            height={50} // Adjust size as needed
            className="rounded-full border-2 border-[var(--color-deep-red)]"
          />
          <span className="text-2xl font-bold font-heading text-[var(--color-off-white)]">
            {organizationInfo.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8"> {/* Changed to div for easier button placement */}
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              // Active link styling based on current pathname
              className={`text-[var(--color-off-white)] hover:text-[var(--color-deep-red)] text-lg font-sans transition duration-300 ease-in-out relative group
                ${pathname === link.href ? 'text-[var(--color-deep-red)] font-semibold' : ''}
              `}
            >
              {link.name}
              {/* Underline effect on hover (and active) */}
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-deep-red)] transition-all duration-300
                ${pathname === link.href ? 'w-full' : 'group-hover:w-full'}
              `}></span>
            </Link>
          ))}
          {/* Donate button */}
          <Link
            href="/donat"
            className="bg-[var(--color-deep-red)] hover:bg-[var(--color-accent-red)] text-white font-bold py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105 ml-4"
          >
            Donate Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-deep-red)] rounded-md p-2">
            {/* Toggle between hamburger and close icon */}
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden bg-[var(--color-navy-blue)] overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col items-center space-y-4 px-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-white text-lg font-semibold hover:text-[var(--color-deep-red)] transition-colors duration-300 w-full text-center py-2 rounded-md
                ${pathname === link.href ? 'bg-[var(--color-deep-red)]' : 'hover:bg-[var(--color-navy-blue-800)]'}
              `}
              onClick={toggleMenu} // Close menu on link click
            >
              {link.name}
            </Link>
          ))}
          {/* Donate button for mobile */}
          <Link
            href="/donat"
            className="bg-[var(--color-deep-red)] hover:bg-[var(--color-accent-red)] text-white font-bold py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105 mt-4"
            onClick={toggleMenu}
          >
            Donate Now
          </Link>
        </div>
      </div>
    </header>
  );
}