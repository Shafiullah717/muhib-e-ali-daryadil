// components/donate/DonateHeroSection/DonateHeroSection.tsx
import Image from 'next/image';
import Link from 'next/link';
import { FaHeart, FaHandHoldingHeart, FaArrowDown } from 'react-icons/fa';

export default function DonateHeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/donate-hero-bg.jpg"
          alt="Children receiving food aid from volunteers"
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

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-12 w-12 h-12 rounded-full border-4 border-[var(--color-deep-red)/50] animate-float opacity-70">
        <FaHeart className="text-[var(--color-deep-red)] w-6 h-6 mx-auto mt-2.5 opacity-70" />
      </div>
      <div className="absolute bottom-1/4 right-20 w-16 h-16 rounded-full border-4 border-[var(--color-off-white)/30] animate-float-delay opacity-60">
        <FaHandHoldingHeart className="text-[var(--color-off-white)] w-8 h-8 mx-auto mt-3 opacity-60" />
      </div>
      <div className="absolute top-1/3 left-1/4 w-8 h-8 rounded-full bg-[var(--color-deep-red)/30] animate-pulse"></div>
      
      {/* Content */}
      <div className="relative z-10 text-[var(--color-off-white)] p-6 max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="mb-6 opacity-0 animate-fade-in-down">
          <span className="inline-flex items-center py-1 px-4 bg-[var(--color-deep-red)/30] rounded-full text-sm md:text-base font-semibold tracking-wider uppercase border border-[var(--color-deep-red)/50]">
            <FaHeart className="mr-2 text-[var(--color-accent-red)] animate-pulse" />
            Transform Lives Today
          </span>
        </div>
        
        {/* Main Heading with Staggered Words */}
        <h1 className="text-4xl md:text-6xl font-heading font-extrabold leading-tight mb-6 drop-shadow-lg">
          {"Your Generosity, Their Hope".split(' ').map((word, wordIndex) => (
            <div key={wordIndex} className="overflow-hidden inline-block mx-1">
              <span 
                className="inline-block opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${wordIndex * 0.1}s` }}
              >
                {word}
              </span>
            </div>
          ))}
        </h1>
        
        {/* Impact Statement */}
        <div className="relative mb-10 max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl font-sans mb-8 leading-relaxed drop-shadow-md opacity-0 animate-fade-in-up delay-500">
            Every <span className="text-[var(--color-accent-red)] font-bold">₹500</span> provides a family with essential supplies for a week. 
            Your donation creates <span className="underline decoration-[var(--color-deep-red)]">immediate impact</span>.
          </p>
          
          {/* Decorative Impact Meter */}
          <div className="w-full h-2 bg-[var(--color-off-white)/20] rounded-full overflow-hidden mt-8 opacity-0 animate-fade-in-up delay-700">
            <div 
              className="h-full bg-gradient-to-r from-[var(--color-deep-red)] to-[var(--color-accent-red)] rounded-full"
              style={{ width: '72%' }}
            ></div>
          </div>
          <div className="flex justify-between text-sm mt-2 opacity-0 animate-fade-in-up delay-800">
            <span>₹0</span>
            <span>₹1,00,000 monthly goal</span>
            <span>₹72,000</span>
          </div>
        </div>

        {/* Interactive Donation Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-fade-in-up delay-900">
          <Link
            href="#donation-details"
            className="group relative inline-flex items-center justify-center bg-gradient-to-r from-[var(--color-deep-red)] to-[var(--color-accent-red)] hover:from-[var(--color-accent-red)] hover:to-[var(--color-deep-red)] text-white font-bold py-4 px-10 rounded-full shadow-lg transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-105"
          >
            <span className="text-xl">Donate Now</span>
            <FaHeart className="ml-3 h-5 w-5 group-hover:scale-125 transition-transform" />
          </Link>
          
          <Link
            href="/gallery"
            className="group relative inline-flex items-center justify-center bg-transparent border-2 border-[var(--color-off-white)] hover:border-[var(--color-deep-red)] text-[var(--color-off-white)] hover:text-[var(--color-deep-red)] font-bold py-4 px-10 rounded-full transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-105"
          >
            <span>See Your Impact</span>
            <svg 
              className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Trust Indicators */}
      {/* <div className="absolute bottom-20 left-0 right-0 flex justify-center space-x-8 opacity-0 animate-fade-in-up delay-1000">
        <div className="text-center">
          <div className="text-3xl font-bold text-[var(--color-accent-red)]">12K+</div>
          <div className="text-sm mt-1">Lives Impacted</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-[var(--color-accent-red)]">98%</div>
          <div className="text-sm mt-1">Funds Utilized</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-[var(--color-accent-red)]">8</div>
          <div className="text-sm mt-1">Years Serving</div>
        </div>
      </div> */}

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in-up delay-1200">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2 font-medium">Payment Options Below</span>
          <div className="animate-bounce w-8 h-14 rounded-full border-2 border-[var(--color-off-white)] flex items-start justify-center">
            <FaArrowDown className="text-[var(--color-off-white)] mt-2" />
          </div>
        </div>
      </div>
    </section>
  );
}