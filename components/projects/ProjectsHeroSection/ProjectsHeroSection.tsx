// components/projects/ProjectsHeroSection/ProjectsHeroSection.tsx
"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function ProjectsHeroSection() {
  // State for project statistics animation
  const [stats, setStats] = useState({ projects: 0, volunteers: 0, communities: 0 });
  
  // Animate statistics on component mount
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => {
        const newProjects = prev.projects < 25 ? prev.projects + 1 : 25;
        const newVolunteers = prev.volunteers < 1200 ? prev.volunteers + 24 : 1200;
        const newCommunities = prev.communities < 18 ? prev.communities + 1 : 18;
        
        if (newProjects === 25 && newVolunteers === 1200 && newCommunities === 18) {
          clearInterval(interval);
        }
        
        return { 
          projects: newProjects, 
          volunteers: newVolunteers, 
          communities: newCommunities 
        };
      });
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/projects/projects-hero-bg.png"
          alt="Hands working together, community projects"
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

      {/* Floating Project Icons - Responsive Positioning */}
      <div className="absolute top-10 left-4 md:top-16 md:left-10 w-10 h-10 md:w-16 md:h-16 bg-[var(--color-deep-red)/30] rounded-full flex items-center justify-center animate-float opacity-80">
        <svg className="w-5 h-5 md:w-8 md:h-8 text-[var(--color-off-white)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      </div>
      <div className="absolute bottom-16 right-4 md:bottom-20 md:right-16 w-10 h-10 md:w-14 md:h-14 bg-[var(--color-off-white)/20] rounded-full flex items-center justify-center animate-float-delay opacity-70">
        <svg className="w-4 h-4 md:w-6 md:h-6 text-[var(--color-off-white)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
        </svg>
      </div>
      <div className="absolute top-1/4 left-1/5 md:top-1/3 md:left-1/4 w-10 h-10 md:w-12 md:h-12 bg-[var(--color-deep-red)/20] rounded-full flex items-center justify-center animate-float-alt opacity-60">
        <svg className="w-4 h-4 md:w-5 md:h-5 text-[var(--color-off-white)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-[var(--color-off-white)] px-4 py-8 md:p-6 max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="mb-4 md:mb-6 opacity-0 animate-fade-in-down">
          <span className="inline-block py-1 px-3 md:px-4 bg-[var(--color-deep-red)/30] rounded-full text-xs md:text-base font-semibold tracking-wider uppercase border border-[var(--color-deep-red)/50]">
            Making a Difference
          </span>
        </div>
        
        {/* Main Heading with Staggered Words - Responsive text size */}
        <h1 className="text-3xl md:text-6xl font-heading font-extrabold leading-tight mb-4 md:mb-6 drop-shadow-lg">
          {"Transforming Lives Through Projects".split(' ').map((word, wordIndex) => (
            <div key={wordIndex} className="overflow-hidden inline-block mr-2 md:mr-3">
              <span 
                className="inline-block opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${wordIndex * 0.15}s` }}
              >
                {word}
              </span>
            </div>
          ))}
        </h1>
        
        {/* Mission Statement - Responsive text size */}
        <p className="text-base md:text-xl lg:text-2xl font-sans mb-6 md:mb-10 leading-relaxed drop-shadow-md opacity-0 animate-fade-in-up delay-600">
          Discover the diverse initiatives and programs where your support creates lasting change in communities.
        </p>
        
        {/* Project Statistics - Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10 max-w-4xl mx-auto opacity-0 animate-fade-in-up delay-800">
          <div className="bg-[var(--color-navy-blue)/50] backdrop-blur-sm p-4 md:p-6 rounded-xl border border-[var(--color-off-white)/10]">
            <div className="text-3xl md:text-5xl font-bold text-[var(--color-deep-red)] mb-1 md:mb-2">
              +{stats.projects}
            </div>
            <div className="text-sm md:text-lg font-medium">Active Projects</div>
          </div>
          
          <div className="bg-[var(--color-navy-blue)/50] backdrop-blur-sm p-4 md:p-6 rounded-xl border border-[var(--color-off-white)/10]">
            <div className="text-3xl md:text-5xl font-bold text-[var(--color-deep-red)] mb-1 md:mb-2">
              {stats.volunteers.toLocaleString()}+
            </div>
            <div className="text-sm md:text-lg font-medium">Volunteers</div>
          </div>
          
          <div className="bg-[var(--color-navy-blue)/50] backdrop-blur-sm p-4 md:p-6 rounded-xl border border-[var(--color-off-white)/10]">
            <div className="text-3xl md:text-5xl font-bold text-[var(--color-deep-red)] mb-1 md:mb-2">
              {stats.communities}+
            </div>
            <div className="text-sm md:text-lg font-medium">Communities Served</div>
          </div>
        </div>

        {/* Interactive Buttons - Responsive sizing and spacing */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 opacity-0 animate-fade-in-up delay-1000">
          <Link
            href="/projects"
            className="group relative inline-flex items-center justify-center bg-[var(--color-deep-red)] hover:bg-[var(--color-accent-red)] text-white font-bold py-2 px-6 md:py-3 md:px-8 rounded-full shadow-lg transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-105 text-sm md:text-base"
          >
            <span>Explore Our Projects</span>
            <svg 
              className="ml-1 md:ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          
          <Link
            href="/donat"
            className="group relative inline-flex items-center justify-center bg-transparent border-2 border-[var(--color-off-white)] hover:border-[var(--color-deep-red)] text-[var(--color-off-white)] hover:text-[var(--color-deep-red)] font-bold py-2 px-6 md:py-3 md:px-8 rounded-full transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-105 text-sm md:text-base"
          >
            <span>Support a Project</span>
            <svg 
              className="ml-1 md:ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Decorative Scroll Indicator - Responsive positioning */}
      <div className="absolute z-20 bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in-up delay-1200">
        <div className="flex flex-col items-center">
          {/* <span className="text-xs md:text-sm mb-1 md:mb-2 font-medium">Scroll to Explore</span> */}
          <div className="animate-bounce w-6 h-10 md:w-8 md:h-14 rounded-full border-2 border-[var(--color-off-white)] flex items-start justify-center">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[var(--color-off-white)] rounded-full mt-1.5 md:mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}