import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { MessageCircle, Calendar, MapPin, Heart } from 'lucide-react';

export default function BookingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState({
    name: '',
    eventDate: '',
    eventType: '',
    location: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Hi Mehjabin, my name is ${formData.name}. My ${formData.eventType} is on ${formData.eventDate} in ${formData.location}. I would like to know more about your bridal makeup services.`;

    const whatsappUrl = `https://wa.me/919892925718?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="booking" ref={ref} className="py-24 lg:py-32 bg-gradient-to-br from-[var(--soft-cream)] via-[var(--champagne-gold)]/30 to-[var(--warm-blush-pink)]/20 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-[var(--gold-accent)]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-[var(--dusty-rose)]/10 to-transparent rounded-full blur-3xl" />

      {/* Floating Floral Elements */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[var(--gold-accent)]/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12 space-y-4 sm:space-y-6"
          >
            <div className="flex justify-center">
              <motion.div
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[var(--gold-accent)] to-[var(--champagne-gold)] rounded-full flex items-center justify-center shadow-2xl"
              >
                <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </motion.div>
            </div>

            <h2 style={{ fontFamily: 'var(--font-heading)' }} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[var(--deep-wine)] px-4">
              Let's Create Your Dream
              <br />
              <span className="text-[var(--gold-accent)]">Bridal Look</span>
            </h2>

            <p style={{ fontFamily: 'var(--font-body)' }} className="text-base sm:text-lg lg:text-xl text-[var(--foreground)]/70 max-w-2xl mx-auto px-4">
              Share your details and connect with us on WhatsApp to begin your
              luxury bridal beauty journey
            </p>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-[3rem] shadow-2xl p-6 sm:p-8 lg:p-12 space-y-5 sm:space-y-6 border border-[var(--gold-accent)]/20">
              {/* Name */}
              <div>
                <label htmlFor="name" style={{ fontFamily: 'var(--font-body)' }} className="block text-[var(--deep-wine)] mb-2 sm:mb-3 text-base sm:text-lg">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-[var(--soft-cream)] border-2 border-[var(--gold-accent)]/20 rounded-xl sm:rounded-2xl focus:border-[var(--gold-accent)] focus:outline-none transition-colors text-base sm:text-lg"
                  style={{ fontFamily: 'var(--font-body)' }}
                />
              </div>

              {/* Event Date */}
              <div>
                <label htmlFor="eventDate" style={{ fontFamily: 'var(--font-body)' }} className="flex items-center gap-2 text-[var(--deep-wine)] mb-2 sm:mb-3 text-base sm:text-lg">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--gold-accent)]" />
                  Event Date
                </label>
                <input
                  type="date"
                  id="eventDate"
                  name="eventDate"
                  required
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="w-full box-border max-w-full px-4 sm:px-6 py-3 sm:py-4 bg-[var(--soft-cream)] border-2 border-[var(--gold-accent)]/20 rounded-xl sm:rounded-2xl focus:border-[var(--gold-accent)] focus:outline-none transition-colors text-base sm:text-lg appearance-none"
                  style={{ fontFamily: 'var(--font-body)' }}
                />
              </div>

              {/* Event Type */}
              <div>
                <label htmlFor="eventType" style={{ fontFamily: 'var(--font-body)' }} className="block text-[var(--deep-wine)] mb-2 sm:mb-3 text-base sm:text-lg">
                  Event Type
                </label>
                <select
                  id="eventType"
                  name="eventType"
                  required
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-[var(--soft-cream)] border-2 border-[var(--gold-accent)]/20 rounded-xl sm:rounded-2xl focus:border-[var(--gold-accent)] focus:outline-none transition-colors text-base sm:text-lg appearance-none cursor-pointer"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  <option value="">Select event type</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Engagement">Engagement</option>
                  <option value="Reception">Reception</option>
                  <option value="Sangeet">Sangeet</option>
                  <option value="Mehendi">Mehendi</option>
                  <option value="Other">Other Special Event</option>
                </select>
              </div>

              {/* Location */}
              <div>
                <label htmlFor="location" style={{ fontFamily: 'var(--font-body)' }} className="flex items-center gap-2 text-[var(--deep-wine)] mb-2 sm:mb-3 text-base sm:text-lg">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--gold-accent)]" />
                  Wedding Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g., Mumbai, Andheri"
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-[var(--soft-cream)] border-2 border-[var(--gold-accent)]/20 rounded-xl sm:rounded-2xl focus:border-[var(--gold-accent)] focus:outline-none transition-colors text-base sm:text-lg"
                  style={{ fontFamily: 'var(--font-body)' }}
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(212, 175, 55, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-[var(--deep-wine)] to-[var(--deep-wine)]/90 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 text-base sm:text-lg font-medium"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                Continue on WhatsApp
              </motion.button>

              {/* Privacy Note */}
              <p style={{ fontFamily: 'var(--font-body)' }} className="text-center text-xs sm:text-sm text-[var(--foreground)]/60 mt-3 sm:mt-4 px-2">
                By submitting, you'll be redirected to WhatsApp to continue the conversation
              </p>
            </form>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-center mt-12 space-y-4"
          >
            <p style={{ fontFamily: 'var(--font-body)' }} className="text-[var(--foreground)]/70">
              Serving brides across Mumbai and surrounding areas
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-[var(--foreground)]/60">
              <span>✨ Premium Products</span>
              <span>•</span>
              <span>💄 HD Makeup</span>
              <span>•</span>
              <span>👑 Luxury Experience</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
