import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import Masonry from 'react-responsive-masonry';
import mehjabin1 from '../../assets/mehjabin1.png';
import mehjabin2 from '../../assets/mehjabin2.png';
import mehjabin3 from '../../assets/mehjabin3.png';
import mehjabin4 from '../../assets/mehjabin4.png';
import mehajbinMo1 from '../../assets/Mehajbin_MO.1.png';
import mehjabin5 from '../../assets/mehjabin5.png';
import mehjabin6 from '../../assets/mehjabin6.png';
import after3 from '../../assets/after3.png';
import after2 from '../../assets/after2.png';
import mehajbinMo5 from '../../assets/Mehajbin_MO5png.png';

const portfolioImages = [
  {
    url: mehjabin1,
    category: 'Traditional Bridal',
  },
  {
    url: mehjabin2,
    category: 'Modern Bridal',
  },
  {
    url: mehjabin3,
    category: 'Engagement Look',
  },
  {
    url: mehjabin4,
    category: 'Reception Glam',
  },
  {
    url: mehajbinMo1,
    category: 'Traditional Bridal',
  },
  {
    url: mehjabin5,
    category: 'HD Makeup',
  },
  {
    url: mehjabin6,
    category: 'Bridal Closeup',
  },
  {
    url: after3,
    category: 'Hair Styling',
  },
  {
    url: after2,
    category: 'Party Makeup',
  },
  {
    url: mehajbinMo5,
    category: 'Eye Makeup',
  },
];

export default function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 640) {
        setColumns(1);
      } else if (window.innerWidth < 1024) {
        setColumns(2);
      } else {
        setColumns(3);
      }
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  return (
    <section id="portfolio" ref={ref} className="py-24 lg:py-32 bg-[var(--pearl-white)] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4"
        >
          <p style={{ fontFamily: 'var(--font-body)' }} className="text-xs sm:text-sm tracking-widest uppercase text-[var(--gold-accent)]">
            Our Work
          </p>

          <h2 style={{ fontFamily: 'var(--font-heading)' }} className="text-4xl sm:text-5xl lg:text-6xl text-[var(--deep-wine)]">
            Portfolio Showcase
          </h2>

          <p style={{ fontFamily: 'var(--font-accent)' }} className="text-xl sm:text-2xl text-[var(--muted-mauve)]">
            Timeless beauty, captured in every detail
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <Masonry columnsCount={columns} gutter="1rem">
          {portfolioImages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.05, duration: 0.6 }}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              whileHover={{ y: -5 }}
            >
              <div className="relative overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={item.url}
                  alt={item.category}
                  className="w-full h-auto object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <div className="p-4 sm:p-6 w-full">
                    <p style={{ fontFamily: 'var(--font-body)' }} className="text-white text-sm sm:text-base lg:text-lg">
                      {item.category}
                    </p>
                  </div>
                </div>

                {/* Gold Border */}
                <div className="absolute inset-0 border-2 border-[var(--gold-accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl" />
              </div>
            </motion.div>
          ))}
        </Masonry>
      </div>
    </section>
  );
}
