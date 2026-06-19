import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { MessageCircle, Palette, Sparkles, Crown, Check } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Consultation',
    description: 'We begin with an in-depth consultation to understand your vision, preferences, and wedding details.',
  },
  {
    number: '02',
    icon: Palette,
    title: 'Look Planning',
    description: 'Together, we create a personalized makeup plan that complements your features, outfit, and wedding theme.',
  },
  {
    number: '03',
    icon: Sparkles,
    title: 'Trial Session',
    description: 'A complete trial session to perfect your look, with adjustments until you feel absolutely confident.',
  },
  {
    number: '04',
    icon: Crown,
    title: 'Wedding Day Glam',
    description: 'On your special day, we arrive on time to create your dream bridal look with premium products.',
  },
  {
    number: '05',
    icon: Check,
    title: 'Final Touches',
    description: 'Touch-ups and styling adjustments throughout the day to ensure you look flawless from start to finish.',
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-gradient-to-b from-[var(--soft-cream)] to-[var(--pearl-white)] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-gradient-to-r from-[var(--warm-blush-pink)]/10 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20 space-y-3 sm:space-y-4"
        >
          <p style={{ fontFamily: 'var(--font-body)' }} className="text-xs sm:text-sm tracking-widest uppercase text-[var(--gold-accent)]">
            The Process
          </p>

          <h2 style={{ fontFamily: 'var(--font-heading)' }} className="text-4xl sm:text-5xl lg:text-6xl text-[var(--deep-wine)]">
            Your Bridal Beauty Journey
          </h2>

          <p style={{ fontFamily: 'var(--font-accent)' }} className="text-xl sm:text-2xl text-[var(--muted-mauve)]">
            A seamless experience from consultation to your big day
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="relative"
            >
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-20 sm:top-24 w-0.5 h-16 sm:h-24 bg-gradient-to-b from-[var(--gold-accent)] to-[var(--gold-accent)]/20 -translate-x-1/2 hidden lg:block" />
              )}

              <div className={`flex flex-col lg:flex-row items-center gap-6 sm:gap-8 mb-12 sm:mb-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Content */}
                <div className="flex-1 text-center lg:text-right" style={{ textAlign: index % 2 === 1 ? 'left' : 'right' }}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
                    className="space-y-2 sm:space-y-3"
                  >
                    <div className="inline-block">
                      <span style={{ fontFamily: 'var(--font-heading)' }} className="text-4xl sm:text-5xl lg:text-6xl text-[var(--gold-accent)]/20">
                        {step.number}
                      </span>
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-heading)' }} className="text-2xl sm:text-3xl text-[var(--deep-wine)]">
                      {step.title}
                    </h3>
                    <p style={{ fontFamily: 'var(--font-body)' }} className="text-sm sm:text-base text-[var(--foreground)]/70 leading-relaxed max-w-md mx-auto lg:mx-0">
                      {step.description}
                    </p>
                  </motion.div>
                </div>

                {/* Icon Circle */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: index * 0.2 + 0.2, duration: 0.5, type: 'spring' }}
                  className="relative z-10"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[var(--gold-accent)] to-[var(--champagne-gold)] rounded-full flex items-center justify-center shadow-2xl">
                    <step.icon className="w-8 h-8 sm:w-10 sm:h-10 text-[var(--deep-wine)]" />
                  </div>
                </motion.div>

                {/* Spacer for alignment */}
                <div className="flex-1 hidden lg:block" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
