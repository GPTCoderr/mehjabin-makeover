import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import beforeImage from '../../assets/before2.png';
import beforeImage1 from '../../assets/before1.png';
import beforeImage3 from '../../assets/before3.png';
import afterImage from '../../assets/after2.png';
import afterImage1 from '../../assets/after1.png';
import afterImage3 from '../../assets/after3.png';

const transformations = [
  {
    before: beforeImage,
    after: afterImage,
    title: 'Classic Bridal Transformation',
  },
  {
    before: beforeImage1,
    after: afterImage1,
    title: 'Modern Bridal Elegance',
  },
  {
    before: beforeImage3,
    after: afterImage3,
    title: 'Reception Glamour',
    afterImageClass: 'object-cover object-[center_15%]',
  },
];

function ImageSlider({ before, after, title, afterImageClass }: { before: string; after: string; title: string; afterImageClass?: string }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.touches[0].clientX, rect);
  };

  return (
    <div className="space-y-3 sm:space-y-4">
      <div
        className="relative w-full h-[350px] sm:h-[450px] lg:h-[500px] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl cursor-col-resize select-none"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
      >
        {/* After Image */}
        <img
          src={after}
          alt="After"
          className={`absolute inset-0 w-full h-full ${afterImageClass ?? 'object-cover'}`}
        />

        {/* Before Image with Clip */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={before}
            alt="Before"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Slider Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Slider Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[var(--gold-accent)] to-[var(--champagne-gold)] rounded-full shadow-2xl flex items-center justify-center border-2 sm:border-4 border-[var(--deep-wine)]">
            <div className="flex gap-0.5 sm:gap-1">
              <div className="w-0.5 h-4 sm:h-6 bg-[var(--deep-wine)] rounded-full" />
              <div className="w-0.5 h-4 sm:h-6 bg-[var(--deep-wine)] rounded-full" />
            </div>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-3 left-3 sm:top-6 sm:left-6 bg-black/50 backdrop-blur-sm text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm">
          Before
        </div>
        <div className="absolute top-3 right-3 sm:top-6 sm:right-6 bg-black/50 backdrop-blur-sm text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm">
          After
        </div>
      </div>

      <h3 style={{ fontFamily: 'var(--font-heading)' }} className="text-lg sm:text-xl lg:text-2xl text-[var(--deep-wine)] text-center">
        {title}
      </h3>
    </div>
  );
}

export default function BeforeAfterSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-gradient-to-b from-[var(--soft-cream)] to-[var(--pearl-white)] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[var(--dusty-rose)]/10 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4"
        >
          <p style={{ fontFamily: 'var(--font-body)' }} className="text-xs sm:text-sm tracking-widest uppercase text-[var(--gold-accent)]">
            Witness The Magic
          </p>

          <h2 style={{ fontFamily: 'var(--font-heading)' }} className="text-4xl sm:text-5xl lg:text-6xl text-[var(--deep-wine)]">
            Before / After
            <br />
            Transformations
          </h2>

          <p style={{ fontFamily: 'var(--font-accent)' }} className="text-lg sm:text-xl lg:text-2xl text-[var(--muted-mauve)]">
            Drag to reveal the transformation
          </p>
        </motion.div>

        {/* Sliders Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {transformations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <ImageSlider {...item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
