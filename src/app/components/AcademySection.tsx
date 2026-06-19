import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import {
  GraduationCap,
  Brush,
  Sparkles,
  Award,
} from 'lucide-react';

export default function AcademySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  });

  const courses = [
    {
      icon: Brush,
      title: 'Professional Makeup Course',
    },
    {
      icon: Sparkles,
      title: 'Bridal Makeup Course',
    },
    {
      icon: GraduationCap,
      title: 'Basic To Advanced Training',
    },
    {
      icon: Award,
      title: 'Professional Hairstyling',
    },
  ];

  return (
    <section
      id="academy"
      ref={ref}
      className="py-24 lg:py-32 bg-gradient-to-b from-[var(--pearl-white)] to-[var(--soft-cream)] relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--warm-blush-pink)]/10 blur-3xl rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12">

        <div className="max-w-5xl mx-auto text-center">

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            style={{ fontFamily: 'var(--font-body)' }}
            className="text-sm tracking-[4px] uppercase text-[var(--gold-accent)]"
          >
            Academy
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{ fontFamily: 'var(--font-heading)' }}
            className="text-4xl sm:text-5xl lg:text-6xl text-[var(--deep-wine)] mt-4"
          >
            Makeup &
            <br />
            Hairstyling Academy
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{ fontFamily: 'var(--font-accent)' }}
            className="text-xl sm:text-2xl text-[var(--muted-mauve)] mt-6"
          >
            Learn The Art Of Beauty From Industry Experts
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-3xl mx-auto mt-8 text-lg text-[var(--foreground)]/70 leading-relaxed"
          >
            We also provide Makeup & Hairstyling Classes for aspiring
            artists and beauty enthusiasts. Learn professional makeup,
            bridal transformations, advanced techniques and hairstyling
            through practical hands-on training, small batches and
            personal mentorship.
          </motion.p>
        </div>

        {/* Course Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.2 + index * 0.1,
                duration: 0.7,
              }}
              className="bg-white/80 backdrop-blur-sm border border-[var(--gold-accent)]/10 rounded-[2rem] p-8 text-center shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
            >
              <course.icon
                className="w-10 h-10 mx-auto text-[var(--gold-accent)]"
              />

              <h3
                style={{ fontFamily: 'var(--font-heading)' }}
                className="mt-5 text-xl text-[var(--deep-wine)]"
              >
                {course.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Additional Features */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="max-w-5xl mx-auto mt-20"
        >
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl">

            <h3
              style={{ fontFamily: 'var(--font-heading)' }}
              className="text-3xl text-center text-[var(--deep-wine)] mb-10"
            >
              What You'll Learn
            </h3>

            
            
<div className="grid md:grid-cols-2 gap-x-24 gap-y-8 max-w-3xl mx-auto text-left">

  <div className="space-y-8">
    {[
      'Basic To Advanced Makeup Training',
      'Party Makeup Looks',
      'Self Makeup Classes',
      'Hands-On Practical Training',
      'Personal Guidance & Support',
    ].map((item) => (
      <div
        key={item}
        className="flex items-center gap-3"
      >
        <span className="text-[var(--gold-accent)] text-xl">
          ✦
        </span>

        <span className="text-[var(--foreground)]/80">
          {item}
        </span>
      </div>
    ))}
  </div>

  <div className="space-y-8">
    {[
      'Bridal Makeup Course',
      'Hairstyling Training',
      'Certification Available',
      'Small Batch Training',
      'Personal Guidance & Support',
    ].map((item) => (
      <div
        key={item}
        className="flex items-center gap-3"
      >
        <span className="text-[var(--gold-accent)] text-xl">
          ✦
        </span>

        <span className="text-[var(--foreground)]/80">
          {item}
        </span>
      </div>
    ))}
  </div>

</div>

            <div className="text-center mt-12">

              <a
                href="https://wa.me/919892925718"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 rounded-full bg-[var(--deep-wine)] text-white hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Enroll Via WhatsApp
              </a>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}