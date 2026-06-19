import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Sparkles, Eye, Scissors, Flower2, PartyPopper, Palette, Shirt } from 'lucide-react';
import bridalMakeupImage from '../../assets/Mehajbin_MO5png.png';
import receptionGlamImage from '../../assets/Mehajbin_MO4.png';
import hdMakeupImage from '../../assets/Mehajbin_MO3.png';
import engagementMakeupImage from '../../assets/mehajabin_1.png';
import hairStylingImage from '../../assets/Mehajbin_MO.1.png';
import partyMakeupImage from '../../assets/mehjabin4.png';

const services = [
  {
    icon: Sparkles,
    title: 'Bridal Makeup',
    description: 'Complete luxury bridal transformation with HD makeup, lasting all day and night',
    image: bridalMakeupImage,
    imageClass: 'object-cover object-[center_20%]',
  },
  {
    icon: Eye,
    title: 'HD Makeup',
    description: 'High-definition makeup perfect for photography and videography',
    image: hdMakeupImage,
    imageClass: 'object-cover object-[center_20%]',
  },
  {
    icon: Flower2,
    title: 'Engagement Makeup',
    description: 'Elegant and sophisticated looks for your special engagement ceremony',
    image: engagementMakeupImage,
    imageClass: 'object-cover object-[center_20%]',
  },
  {
    icon: PartyPopper,
    title: 'Reception Glam',
    description: 'Modern glamorous makeup for evening receptions and parties',
    image: receptionGlamImage,
    imageClass: 'object-cover object-[center_20%]',
  },
  {
    icon: Palette,
    title: 'Party Makeup',
    description: 'Stunning makeup for festive occasions and special celebrations',
    image: 'https://images.unsplash.com/photo-1684868265715-03e19a3e0e00?w=500',
  },
  {
    icon: Scissors,
    title: 'Hair Styling',
    description: 'Professional bridal hairstyling to complement your makeup look',
    image: hairStylingImage,
  },
  {
    icon: Shirt,
    title: 'Saree Draping',
    description: 'Expert saree draping in various traditional and modern styles',
    image: 'https://images.unsplash.com/photo-1588842867976-fd084ca2c87b?w=500',
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-[var(--pearl-white)] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[var(--champagne-gold)]/10 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4"
        >
          <p style={{ fontFamily: 'var(--font-body)' }} className="text-xs sm:text-sm tracking-widest uppercase text-[var(--gold-accent)]">
            Premium Services
          </p>

          <h2 style={{ fontFamily: 'var(--font-heading)' }} className="text-4xl sm:text-5xl lg:text-6xl text-[var(--deep-wine)]">
            Signature Bridal Services
          </h2>

          <p style={{ fontFamily: 'var(--font-accent)' }} className="text-xl sm:text-2xl lg:text-3xl text-[var(--muted-mauve)]">
            Curated experiences for your special day
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="bg-white rounded-xl sm:rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-[var(--gold-accent)]/10">
                {/* Image */}
                <div className="relative h-48 sm:h-64 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={service.image}
                    alt={service.title}
                    className={`w-full h-full ${service.imageClass ?? 'object-cover'}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  {/* Icon */}
                  <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-12 h-12 sm:w-14 sm:h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                    <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[var(--gold-accent)]" />
                  </div>

                  {/* Gold Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--gold-accent)] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 space-y-2 sm:space-y-3">
                  <h3 style={{ fontFamily: 'var(--font-heading)' }} className="text-xl sm:text-2xl text-[var(--deep-wine)]">
                    {service.title}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-body)' }} className="text-sm sm:text-base text-[var(--foreground)]/70 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
