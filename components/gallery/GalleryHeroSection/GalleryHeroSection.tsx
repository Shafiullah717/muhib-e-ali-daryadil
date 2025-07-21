// components/gallery/GalleryHeroSection/GalleryHeroSection.tsx
"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function GalleryHeroSection() {
  const [photoCount, setPhotoCount] = useState(0);
  
  // Animate photo counter on component mount
  useEffect(() => {
    const interval = setInterval(() => {
      setPhotoCount(prev => prev < 3500 ? prev + 50 : 3500);
    }, 20);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/gallery-hero-bg.jpg"
          alt="People interacting, moments of joy and impact"
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

      {/* Floating Camera Icons - Responsive Positioning */}
      <div className="absolute top-10 left-4 md:top-16 md:left-10 w-10 h-10 md:w-16 md:h-16 bg-[var(--color-deep-red)/30] rounded-full flex items-center justify-center animate-float opacity-80">
        <svg className="w-5 h-5 md:w-8 md:h-8 text-[var(--color-off-white)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>
      <div className="absolute bottom-16 right-4 md:bottom-20 md:right-16 w-10 h-10 md:w-14 md:h-14 bg-[var(--color-off-white)/20] rounded-full flex items-center justify-center animate-float-delay opacity-70">
        <svg className="w-4 h-4 md:w-6 md:h-6 text-[var(--color-off-white)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
      <div className="absolute top-1/4 left-1/5 md:top-1/3 md:left-1/4 w-10 h-10 md:w-12 md:h-12 bg-[var(--color-deep-red)/20] rounded-full flex items-center justify-center animate-float-alt opacity-60">
        <svg className="w-4 h-4 md:w-5 md:h-5 text-[var(--color-off-white)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-[var(--color-off-white)] px-4 py-8 md:p-6 max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="mb-4 md:mb-6 opacity-0 animate-fade-in-down">
          <span className="inline-block py-1 px-3 md:px-4 bg-[var(--color-deep-red)/30] rounded-full text-xs md:text-base font-semibold tracking-wider uppercase border border-[var(--color-deep-red)/50]">
            Visual Storytelling
          </span>
        </div>
        
        {/* Animated Heading - Responsive text size */}
        <h1 className="text-3xl md:text-6xl font-heading font-extrabold leading-tight mb-4 md:mb-6 drop-shadow-lg">
          {"Moments of Impact, Captured".split(' ').map((word, wordIndex) => (
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
        
        {/* Animated Photo Counter - Responsive sizing */}
        <div className="bg-[var(--color-navy-blue)/50] backdrop-blur-sm p-4 md:p-6 rounded-xl border border-[var(--color-off-white)/10] max-w-xs md:max-w-md mx-auto mb-6 md:mb-8 opacity-0 animate-fade-in-up delay-600">
          <div className="text-3xl md:text-5xl font-bold text-[var(--color-deep-red)] mb-1 md:mb-2">
            {photoCount.toLocaleString()}+
          </div>
          <div className="text-sm md:text-lg font-medium">Moments Captured</div>
        </div>
        
        {/* Mission Statement - Responsive text size */}
        <p className="text-base md:text-xl lg:text-2xl font-sans mb-6 md:mb-8 leading-relaxed drop-shadow-md opacity-0 animate-fade-in-up delay-400">
          Explore our visual journey and witness the real-world difference your support makes.
        </p>
        
        {/* Interactive Button - Responsive sizing */}
        <div className="opacity-0 animate-fade-in-up delay-800">
          <Link
            href="/donat"
            className="group relative inline-flex items-center justify-center bg-[var(--color-deep-red)] hover:bg-[var(--color-accent-red)] text-white font-bold py-2 px-6 md:py-3 md:px-8 rounded-full shadow-lg transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-105 text-sm md:text-base"
          >
            <span>Support Our Mission</span>
            <svg 
              className="ml-1 md:ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Decorative Scroll Indicator - Responsive positioning */}
      <div className="absolute bottom-10 z-20 md:bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in-up delay-1000">
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