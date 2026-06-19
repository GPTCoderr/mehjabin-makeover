import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Award, Heart, Star } from 'lucide-react';
import mehajbinImage from '../../assets/mehajabin.png';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-gradient-to-b from-[var(--soft-cream)] to-[var(--pearl-white)] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-[var(--warm-blush-pink)]/10 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative rounded-xl sm:rounded-[2rem] overflow-hidden shadow-2xl w-full max-w-sm lg:max-w-md bg-[var(--pearl-white)]">
              <img
                src={mehajbinImage}
                alt="Mehjabin - Artist"
                className="w-full h-auto object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Decorative Quote */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl max-w-[240px] sm:max-w-xs"
            >
              <p style={{ fontFamily: 'var(--font-accent)' }} className="text-xl sm:text-2xl text-[var(--gold-accent)]">
                "Every bride deserves to feel like royalty"
              </p>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-3 sm:space-y-4 text-center lg:text-left">
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3, duration: 0.8 }}
                style={{ fontFamily: 'var(--font-body)' }}
                className="text-xs sm:text-sm tracking-widest uppercase text-[var(--gold-accent)]"
              >
                Meet The Artist
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.8 }}
                style={{ fontFamily: 'var(--font-heading)' }}
                className="text-4xl sm:text-5xl lg:text-6xl text-[var(--deep-wine)]"
              >
                The Artist Behind
                <br />
                The Beauty
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.8 }}
                style={{ fontFamily: 'var(--font-accent)' }}
                className="text-xl sm:text-2xl lg:text-3xl text-[var(--muted-mauve)]"
              >
                Every Bride Has A Story. Every Look Should Too.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              style={{ fontFamily: 'var(--font-body)' }}
              className="space-y-4 sm:space-y-6 text-base sm:text-lg text-[var(--foreground)]/70 leading-relaxed"
            >
              <p>
                With over a decade of experience in luxury bridal makeup artistry,
                Mehjabin has transformed countless brides across Mumbai and beyond.
                Her approach combines international beauty techniques with an
                understanding of Indian bridal elegance.
              </p>

              <p>
                Each bridal journey is unique, and Mehjabin believes in creating
                personalized looks that enhance natural beauty while celebrating
                individual style. From traditional ceremonies to modern receptions,
                she crafts timeless transformations that last.
              </p>

              <p>
                Trained in HD makeup techniques and certified in international
                beauty standards, Mehjabin brings editorial sophistication to
                every wedding day.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8"
            >
              {[
                { icon: Award, value: '10+', label: 'Years Experience' },
                { icon: Heart, value: '500+', label: 'Happy Brides' },
                { icon: Star, value: '5.0', label: 'Rating' },
              ].map((stat, index) => (
                <div key={index} className="text-center space-y-1 sm:space-y-2">
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[var(--gold-accent)] mx-auto" />
                  <p style={{ fontFamily: 'var(--font-heading)' }} className="text-2xl sm:text-3xl text-[var(--deep-wine)]">
                    {stat.value}
                  </p>
                  <p style={{ fontFamily: 'var(--font-body)' }} className="text-xs sm:text-sm text-[var(--foreground)]/60">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
