// components/about/AboutHeroSection/AboutHeroSection.tsx
import Image from 'next/image';
import Link from 'next/link';
import { organizationInfo } from '@/data/data';

export default function AboutHeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/about/about-hero-bg.png"
          alt="Community support background"
          layout="fill"
          objectFit="cover"
          quality={90}
          className="filter brightness-75"
          priority
        />
        {/* Multi-layer Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy-blue)] to-transparent opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-navy-blue)] opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-navy-blue)/30] to-transparent opacity-25"></div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-10 left-10 w-12 h-12 rounded-full border-4 border-[var(--color-deep-red)/50] animate-float opacity-70"></div>
      <div className="absolute bottom-20 right-16 w-16 h-16 rounded-full border-4 border-[var(--color-off-white)/30] animate-float-delay opacity-60"></div>
      <div className="absolute top-1/3 right-24 w-8 h-8 rounded-full bg-[var(--color-deep-red)/30] animate-pulse"></div>
      
      {/* Content */}
      <div className="relative z-10 text-[var(--color-off-white)] p-6 max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="mb-6 opacity-0 animate-fade-in-down">
          <span className="inline-block py-1 px-4 bg-[var(--color-deep-red)/30] rounded-full text-sm md:text-base font-semibold tracking-wider uppercase border border-[var(--color-deep-red)/50]">
            Our Story
          </span>
        </div>
        
        {/* Main Heading with Staggered Words */}
        <h1 className="text-4xl md:text-6xl font-heading font-extrabold leading-tight mb-6 drop-shadow-lg">
          {"Our Journey of Compassion".split(' ').map((word, wordIndex) => (
            <div key={wordIndex} className="overflow-hidden inline-block mr-3">
              <span 
                className="inline-block opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${wordIndex * 0.15}s` }}
              >
                {word}
              </span>
            </div>
          ))}
        </h1>
        
        {/* Mission Statement with Enhanced Typography */}
        <div className="relative mb-10 max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl font-sans mb-8 leading-relaxed drop-shadow-md opacity-0 animate-fade-in-up delay-600">
            {organizationInfo.mission}
          </p>
          
          {/* Decorative Quote Marks */}
          <div className="absolute -top-6 -left-6 text-[var(--color-deep-red)] text-7xl font-serif opacity-20">&ldquo;</div>
          <div className="absolute -bottom-10 -right-6 text-[var(--color-deep-red)] text-7xl font-serif opacity-20">&rdquo;</div>
        </div>

        {/* Timeline Visualization */}
        <div className="flex justify-center mb-10 opacity-0 animate-fade-in-up delay-800">
          <div className="relative flex items-center justify-between w-64">
            {[2010, 2015, 2020, 2025].map((year, index) => (
              <div key={year} className="relative z-10 flex flex-col items-center">
                <div className={`w-5 h-5 rounded-full border-2 border-[var(--color-off-white)] ${
                  index === 3 ? 'bg-[var(--color-deep-red)]' : 'bg-transparent'
                }`}></div>
                <span className="mt-2 text-sm font-medium">{year}</span>
              </div>
            ))}
            <div className="absolute top-2.5 left-0 w-full h-0.5 bg-[var(--color-off-white)/30]"></div>
          </div>
        </div>

        {/* Interactive Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-fade-in-up delay-1000">
          <Link
            href="/projects"
            className="group relative inline-flex items-center justify-center bg-[var(--color-deep-red)] hover:bg-[var(--color-accent-red)] text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-105"
          >
            <span>See Our Impact</span>
            <svg 
              className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
          
          <Link
            href="#founder-section"
            className="group relative inline-flex items-center justify-center bg-transparent border-2 border-[var(--color-off-white)] hover:border-[var(--color-deep-red)] text-[var(--color-off-white)] hover:text-[var(--color-deep-red)] font-bold py-3 px-8 rounded-full transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-105"
          >
            <span>Founder&apos;s Story</span>
            <svg 
              className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Decorative Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in-up delay-1200">
        <div className="flex flex-col items-center">
          {/* <span className="text-sm mb-2 font-medium">Scroll to continue</span> */}
          <div className="animate-bounce w-8 h-14 rounded-full border-2 border-[var(--color-off-white)] flex items-start justify-center">
            <div className="w-2 h-2 bg-[var(--color-off-white)] rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}