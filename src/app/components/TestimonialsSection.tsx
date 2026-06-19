import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    event: 'Wedding - December 2025',
    image: 'https://images.unsplash.com/photo-1610173826014-d131b02d69ca?w=200',
    quote: 'Mehjabin made me feel like absolute royalty on my wedding day. Her attention to detail and understanding of what I wanted was exceptional. I received countless compliments and felt confident throughout the entire celebration.',
    rating: 5,
  },
  {
    name: 'Ananya Patel',
    event: 'Reception - January 2026',
    image: 'https://images.unsplash.com/photo-1684868265714-fd2300637c23?w=200',
    quote: 'The most professional and talented makeup artist I have worked with. Mehjabin created a look that was both timeless and modern, perfectly complementing my reception outfit. Highly recommended for luxury bridal makeup.',
    rating: 5,
  },
  {
    name: 'Riya Malhotra',
    event: 'Engagement - November 2025',
    image: 'https://images.unsplash.com/photo-1684868682581-4cac3af5b8d4?w=200',
    quote: 'From the trial to the final day, every interaction was flawless. Mehjabin listened to my preferences and created a stunning look that lasted all night. My engagement photos turned out absolutely gorgeous!',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-gradient-to-br from-[var(--soft-cream)] via-[var(--champagne-gold)]/20 to-[var(--pearl-white)] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-[var(--warm-blush-pink)]/20 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4"
        >
          <p style={{ fontFamily: 'var(--font-body)' }} className="text-xs sm:text-sm tracking-widest uppercase text-[var(--gold-accent)]">
            Client Love
          </p>

          <h2 style={{ fontFamily: 'var(--font-heading)' }} className="text-4xl sm:text-5xl lg:text-6xl text-[var(--deep-wine)]">
            What Brides Say
          </h2>

          <p style={{ fontFamily: 'var(--font-accent)' }} className="text-xl sm:text-2xl text-[var(--muted-mauve)]">
            Real experiences, heartfelt words
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-[3rem] shadow-2xl p-6 sm:p-8 lg:p-16 relative">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 sm:top-8 sm:left-8 lg:top-12 lg:left-12 w-12 h-12 sm:w-16 sm:h-16 bg-[var(--gold-accent)]/10 rounded-full flex items-center justify-center">
              <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-[var(--gold-accent)]" />
            </div>

            <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 items-center">
              {/* Image */}
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center"
              >
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-br from-[var(--gold-accent)]/30 to-[var(--dusty-rose)]/30 rounded-full blur-xl" />
                  <img
                    src={current.image}
                    alt={current.name}
                    className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-56 lg:h-56 rounded-full object-cover border-4 border-white shadow-xl"
                  />
                </div>
              </motion.div>

              {/* Content */}
              <div className="lg:col-span-2 space-y-4 sm:space-y-6 text-center lg:text-left">
                <motion.div
                  key={`content-${currentIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {/* Stars */}
                  <div className="flex gap-1 justify-center lg:justify-start mb-3 sm:mb-4">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-[var(--gold-accent)] text-[var(--gold-accent)]" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p style={{ fontFamily: 'var(--font-body)' }} className="text-base sm:text-lg lg:text-xl xl:text-2xl text-[var(--foreground)]/80 leading-relaxed italic mb-4 sm:mb-6">
                    "{current.quote}"
                  </p>

                  {/* Name & Event */}
                  <div>
                    <h4 style={{ fontFamily: 'var(--font-heading)' }} className="text-xl sm:text-2xl text-[var(--deep-wine)] mb-1">
                      {current.name}
                    </h4>
                    <p style={{ fontFamily: 'var(--font-body)' }} className="text-sm sm:text-base text-[var(--foreground)]/60">
                      {current.event}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex gap-3 sm:gap-4 justify-center mt-6 sm:mt-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonial}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-[var(--gold-accent)] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[var(--deep-wine)] transition-colors"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'w-6 sm:w-8 bg-[var(--gold-accent)]'
                        : 'bg-[var(--gold-accent)]/30'
                    }`}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonial}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-[var(--gold-accent)] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[var(--deep-wine)] transition-colors"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
