// components/home/HeroSection/HeroSection.tsx
import Image from 'next/image';
import Link from 'next/link';
import { organizationInfo } from '@/data/data';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/home/hero-bg.png"
          alt="Humanitarian work background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="filter brightness-75"
          priority
        />
        {/* Multi-layer Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy-blue)] to-transparent opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-navy-blue)] opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-navy-blue)/30] to-transparent opacity-25"></div>
      </div>

      {/* Content with Enhanced Animations */}
      <div className="relative z-10 text-[var(--color-off-white)] p-6 max-w-4xl mx-auto">
        {/* Organization Name with Staggered Letters */}
        <div className="overflow-hidden mb-4">
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold leading-tight drop-shadow-lg">
            {organizationInfo.name.split('').map((char, index) => (
              <span 
                key={index}
                className="inline-block opacity-0 animate-fade-in-down"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h1>
        </div>

        {/* Mission Statement */}
        <p className="text-xl md:text-2xl font-sans mb-8 leading-relaxed drop-shadow-md opacity-0 animate-fade-in-up delay-300 animate-duration-700">
          {organizationInfo.mission}
        </p>

        {/* Buttons with Smooth Transitions */}
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 opacity-0 animate-fade-in-up delay-500">
          <Link
            href="/projects"
            className="inline-block bg-[var(--color-deep-red)] hover:bg-[var(--color-accent-red)] text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-105 focus:ring-4 focus:ring-[var(--color-deep-red)/50]"
          >
            View Our Projects
          </Link>
          <Link
            href="/contact"
            className="inline-block bg-transparent border-2 border-[var(--color-off-white)] hover:border-[var(--color-deep-red)] text-[var(--color-off-white)] hover:text-[var(--color-deep-red)] font-bold py-3 px-8 rounded-full transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-105 focus:ring-4 focus:ring-[var(--color-off-white)/30]"
          >
            Support Us
          </Link>
        </div>

        {/* Founder Highlight with Smooth Typing Effect */}
        <div className="mt-12 text-lg md:text-xl font-medium opacity-0 animate-fade-in delay-700">
          <p className="relative inline-block">
            <span className="opacity-0 animate-typing overflow-hidden whitespace-nowrap border-r-2 border-r-[var(--color-off-white)] pr-1">
              Founded by{' '}
              <span className="founder-highlight text-[var(--color-deep-red)] font-semibold">
                {organizationInfo.founder.name}
              </span>
            </span>
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in-up delay-1000">
        <div className="animate-bounce w-8 h-14 rounded-full border-2 border-[var(--color-off-white)] flex items-start justify-center">
          <div className="w-2 h-2 bg-[var(--color-off-white)] rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}