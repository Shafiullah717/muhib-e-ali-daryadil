// app/page.tsx
import HeroSection from '@/components/home/HeroSection/HeroSection';
import AboutPreviewSection from '@/components/home/AboutPreviewSection/AboutPreviewSection';
import ProjectsPreviewSection from '@/components/home/ProjectsPreviewSection/ProjectsPreviewSection';
// import TestimonialSection from '@/components/home/TestimonialSection/TestimonialSection'; // Will add later

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreviewSection />
      <ProjectsPreviewSection />
      {/* <TestimonialSection /> */}
    </>
  );
}