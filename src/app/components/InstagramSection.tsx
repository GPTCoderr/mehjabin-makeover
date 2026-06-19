import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Instagram } from 'lucide-react';

export default function InstagramSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-[var(--pearl-white)] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4"
        >
          <p style={{ fontFamily: 'var(--font-body)' }} className="text-xs sm:text-sm tracking-widest uppercase text-[var(--gold-accent)]">
            Social Gallery
          </p>

          <h2 style={{ fontFamily: 'var(--font-heading)' }} className="text-4xl sm:text-5xl lg:text-6xl text-[var(--deep-wine)]">
            Follow The Journey
          </h2>

          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <Instagram className="w-6 h-6 sm:w-8 sm:h-8 text-[var(--gold-accent)]" />
            <p style={{ fontFamily: 'var(--font-accent)' }} className="text-2xl sm:text-3xl text-[var(--muted-mauve)]">
              @mehjabin_makeover
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-8 sm:mt-12"
        >
          <motion.a
            href="https://www.instagram.com/mehjabin_makeover/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[var(--gold-accent)] to-[var(--champagne-gold)] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base font-medium"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
            Follow on Instagram
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
