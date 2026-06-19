import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import heroImage from '../../assets/Mehajbin_MO.2.png';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury Bridal Makeup"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Animated Background Particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[var(--gold-accent)]/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-left space-y-6 sm:space-y-8 max-w-4xl mx-auto"
        >
          {/* Brand Name */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="inline-flex items-center gap-2 text-[var(--gold-accent)]"
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="tracking-widest uppercase text-xs sm:text-sm">Luxury Bridal Artistry</span>
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              style={{ fontFamily: 'var(--font-heading)' }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white leading-tight"
            >
              Mehjabin
              <br />
              <span className="text-[var(--gold-accent)]">Makeover</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              style={{ fontFamily: 'var(--font-accent)' }}
              className="text-2xl sm:text-3xl lg:text-4xl text-white/90"
            >
              Enhancing Beauty, Elevating Confidence
            </motion.p>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            style={{ fontFamily: 'var(--font-body)' }}
            className="text-base sm:text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl mx-0 px-4 sm:px-0"
          >
            Creating timeless bridal transformations for weddings, engagements,
            receptions, and special occasions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-start items-start pt-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(212, 175, 55, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[var(--gold-accent)] to-[var(--champagne-gold)] text-[var(--deep-wine)] rounded-full shadow-lg transition-all duration-300 font-medium"
              style={{ fontFamily: 'var(--font-body)' }}
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book Consultation
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 border-2 border-white/80 text-white rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm font-medium"
              style={{ fontFamily: 'var(--font-body)' }}
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Portfolio
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[var(--gold-accent)] rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-[var(--gold-accent)] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
