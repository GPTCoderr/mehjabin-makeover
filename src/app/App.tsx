import { motion, useScroll, useTransform } from 'motion/react';
import logoImage from '../assets/logo.png';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import BeforeAfterSection from './components/BeforeAfterSection';
import PortfolioSection from './components/PortfolioSection';
import ExperienceSection from './components/ExperienceSection';
import TestimonialsSection from './components/TestimonialsSection';
import InstagramSection from './components/InstagramSection';
import BookingSection from './components/BookingSection';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import AcademySection from "./components/AcademySection";

export default function App() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.25],
    ['transparent', 'rgba(114,47,55,0.95)']
  );

  const logoFilter = useTransform(
    scrollYProgress,
    [0, 0.25],
    ['none', 'invert(100%) saturate(0%) brightness(1.2)']
  );

  return (
    <div className="min-h-screen bg-[var(--pearl-white)] overflow-x-hidden">
      {/* Sticky Top Logo */}
      <motion.div
        className="fixed left-0 right-0 top-4 z-50 flex justify-center pointer-events-none"
        style={{ pointerEvents: 'none' }}
      >
        <motion.div
          className="rounded-full p-2 sm:p-3 flex items-center justify-center shadow-xl"
          style={{
            background: bgColor,
            transition: 'background 200ms ease',
            pointerEvents: 'auto',
          }}
        >
          <motion.img
            src={logoImage}
            alt="Mehjabin Makeover"
            className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
            style={{ filter: logoFilter, transition: 'filter 200ms ease' }}
            draggable={false}
          />
        </motion.div>
      </motion.div>
      {/* Luxury Background Elements */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-0"
        style={{ opacity }}
      >
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#F7E7CE]/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#F4D6D6]/20 to-transparent rounded-full blur-3xl" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <BeforeAfterSection />
        <PortfolioSection />
        <AcademySection />
        <ExperienceSection />
        <TestimonialsSection />
        <InstagramSection />
        <BookingSection />
        <Footer />
      </div>

      {/* Floating WhatsApp Button */}
      <WhatsAppFloat />
    </div>
  );
}
