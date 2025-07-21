// components/contact/ContactHeroSection/ContactHeroSection.tsx
import Image from 'next/image';
import Link from 'next/link';
import { FiMail, FiPhone, FiMessageSquare, FiMapPin } from 'react-icons/fi';
import { contactInfo } from '@/data/data';

export default function ContactHeroSection() {
  return (
    <section className="relative min-h-[90vh] md:h-screen w-full flex items-center justify-center text-center overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/contact-hero-bg.jpg"
          alt="Volunteers connecting and helping community"
          layout="fill"
          objectFit="cover"
          quality={90}
          className="filter brightness-75"
          priority
        />
        {/* Multi-layer Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy-blue)] to-transparent opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-navy-blue)] opacity-40"></div>
      </div>

      {/* Floating Decorative Elements - Reduced on mobile */}
      <div className="hidden sm:block absolute top-16 left-12 w-14 h-14 rounded-full border-4 border-[var(--color-deep-red)/40] animate-float opacity-70"></div>
      <div className="hidden sm:block absolute bottom-24 right-20 w-10 h-10 rounded-full border-4 border-[var(--color-off-white)/30] animate-float-delay opacity-60"></div>
      <div className="hidden sm:block absolute top-1/4 right-28 w-8 h-8 rounded-full bg-[var(--color-deep-red)/30] animate-pulse"></div>
      <div className="hidden sm:block absolute bottom-1/3 left-24 w-6 h-6 rounded-full bg-[var(--color-off-white)/20] animate-ping"></div>
      
      {/* Animated Connection Lines - Mobile optimized */}
      <div className="absolute top-1/3 left-[10%] sm:left-1/4 w-0.5 h-16 sm:h-24 bg-[var(--color-deep-red)/50] animate-grow-height origin-top"></div>
      <div className="absolute top-1/2 right-[15%] sm:right-1/3 w-16 sm:w-24 h-0.5 bg-[var(--color-off-white)/30] animate-grow-width origin-left"></div>

      {/* Content */}
      <div className="relative z-10 text-[var(--color-off-white)] px-4 py-20 sm:p-6 max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="mb-4 sm:mb-6 opacity-0 animate-fade-in-down">
          <span className="inline-flex items-center py-1 px-3 sm:py-1.5 sm:px-5 bg-[var(--color-deep-red)/30] rounded-full text-sm sm:text-base font-semibold tracking-wider uppercase border border-[var(--color-deep-red)/50]">
            <FiMessageSquare className="mr-1 sm:mr-2 text-[var(--color-deep-red)]" />
            Let&apos;s Connect
          </span>
        </div>
        
        {/* Responsive Animated Heading */}
        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold leading-snug sm:leading-tight mb-4 sm:mb-6 drop-shadow-lg">
          {"Get In Touch With Us".split(' ').map((word, wordIndex) => (
            <div key={wordIndex} className="overflow-hidden inline-block mr-1 sm:mr-2 last:mr-0">
              <span 
                className="inline-block opacity-0 animate-fade-in-up whitespace-nowrap"
                style={{ animationDelay: `${wordIndex * 0.1}s` }}
              >
                {word}
              </span>
            </div>
          ))}
        </h1>
        
        {/* Mission Statement */}
        <div className="relative mb-6 sm:mb-10 max-w-3xl mx-auto">
          <p className="text-base sm:text-lg md:text-xl font-sans mb-6 sm:mb-8 leading-relaxed drop-shadow-md opacity-0 animate-fade-in-up delay-500 px-2 sm:px-0">
            We&apos;d love to hear from you. Whether you have a question, feedback, or want to get involved, our team is ready to connect.
          </p>
        </div>

        {/* Responsive Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 mb-6 sm:mb-10 max-w-5xl mx-auto opacity-0 animate-fade-in-up delay-700 px-2 sm:px-0">
          <div className="bg-[var(--color-navy-blue)/40] backdrop-blur-sm p-4 sm:p-5 rounded-xl border border-[var(--color-off-white)/10] transition-all hover:border-[var(--color-deep-red)/50] hover:scale-[1.02]">
            <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-[var(--color-deep-red)/20] mb-3 sm:mb-4">
              <FiPhone className="text-xl sm:text-2xl text-[var(--color-deep-red)]" />
            </div>
            <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2">Call Us</h3>
            <p className="text-sm sm:text-base font-light">{contactInfo.phone}</p>
            <p className="text-xs sm:text-sm mt-1 sm:mt-2 font-light opacity-80">Mon-Fri, 9AM-5PM</p>
          </div>
          
          <div className="bg-[var(--color-navy-blue)/40] backdrop-blur-sm p-4 sm:p-5 rounded-xl border border-[var(--color-off-white)/10] transition-all hover:border-[var(--color-deep-red)/50] hover:scale-[1.02]">
            <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-[var(--color-deep-red)/20] mb-3 sm:mb-4">
              <FiMail className="text-xl sm:text-2xl text-[var(--color-deep-red)]" />
            </div>
            <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2">Email Us</h3>
            <p className="text-sm sm:text-base font-light break-all">{contactInfo.email}</p>
            <p className="text-xs sm:text-sm mt-1 sm:mt-2 font-light opacity-80">Response within 24 hours</p>
          </div>
          
          <div className="bg-[var(--color-navy-blue)/40] backdrop-blur-sm p-4 sm:p-5 rounded-xl border border-[var(--color-off-white)/10] transition-all hover:border-[var(--color-deep-red)/50] hover:scale-[1.02] col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-[var(--color-deep-red)/20] mb-3 sm:mb-4">
              <FiMapPin className="text-xl sm:text-2xl text-[var(--color-deep-red)]" />
            </div>
            <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2">Visit Us</h3>
            <p className="text-sm sm:text-base font-light">{contactInfo.address.split(',')[0]}</p>
            <p className="text-xs sm:text-sm mt-1 sm:mt-2 font-light opacity-80">{contactInfo.address.split(',').slice(1).join(',').trim()}</p>
          </div>
        </div>

        {/* Responsive Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 opacity-0 animate-fade-in-up delay-900">
          <Link
            href="#contact-form"
            className="group relative inline-flex items-center justify-center bg-[var(--color-deep-red)] hover:bg-[var(--color-accent-red)] text-white font-bold py-2.5 sm:py-3 px-6 sm:px-8 rounded-full shadow-lg transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-105 text-sm sm:text-base"
          >
            <span>Send Message</span>
            <svg 
              className="ml-1 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
          
          <Link
            href="/volunteer"
            className="group relative inline-flex items-center justify-center bg-transparent border-2 border-[var(--color-off-white)] hover:border-[var(--color-deep-red)] text-[var(--color-off-white)] hover:text-[var(--color-deep-red)] font-bold py-2.5 sm:py-3 px-6 sm:px-8 rounded-full transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-105 text-sm sm:text-base"
          >
            <span>Join as Volunteer</span>
            <svg 
              className="ml-1 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Decorative Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in-up delay-1100">
        <div className="flex flex-col items-center">
          <div className="animate-bounce w-6 h-10 sm:w-8 sm:h-14 rounded-full border-2 border-[var(--color-off-white)] flex items-start justify-center">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[var(--color-off-white)] rounded-full mt-1.5 sm:mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}