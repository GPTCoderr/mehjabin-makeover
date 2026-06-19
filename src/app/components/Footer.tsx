import { motion } from 'motion/react';
import { Instagram, MessageCircle, Phone, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[var(--deep-wine)] to-[var(--deep-wine)]/90 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-white to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-white to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20 relative z-10">
        {/* Main Footer Content */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">
          {/* Brand */}
          <div className="space-y-4 sm:space-y-6 text-center sm:text-left">
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)' }} className="text-3xl sm:text-4xl text-[var(--gold-accent)] mb-2">
                Mehjabin Makeover
              </h3>
              <p style={{ fontFamily: 'var(--font-accent)' }} className="text-lg sm:text-xl text-white/80">
                Luxury Bridal Artistry
              </p>
            </div>
            <p style={{ fontFamily: 'var(--font-body)' }} className="text-sm sm:text-base text-white/70 leading-relaxed">
              Creating timeless bridal transformations with elegance, artistry, and care.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 style={{ fontFamily: 'var(--font-heading)' }} className="text-xl sm:text-2xl mb-4 sm:mb-6">
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base" style={{ fontFamily: 'var(--font-body)' }}>
              {['Services', 'Portfolio', 'About', 'Testimonials', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-white/70 hover:text-[var(--gold-accent)] transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[var(--gold-accent)] transition-all duration-300" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="text-center sm:text-left">
            <h4 style={{ fontFamily: 'var(--font-heading)' }} className="text-xl sm:text-2xl mb-4 sm:mb-6">
              Services
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base" style={{ fontFamily: 'var(--font-body)' }}>
              {['Bridal Makeup', 'HD Makeup', 'Engagement', 'Reception Glam', 'Hair Styling', 'Saree Draping'].map((service) => (
                <li key={service}>
                  <span className="text-white/70">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center sm:text-left">
            <h4 style={{ fontFamily: 'var(--font-heading)' }} className="text-xl sm:text-2xl mb-4 sm:mb-6">
              Get in Touch
            </h4>
            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base" style={{ fontFamily: 'var(--font-body)' }}>
              <li>
                <a
                  href="tel:+919892925718"
                  className="inline-flex items-center gap-3 text-white/70 hover:text-[var(--gold-accent)] transition-colors group"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-[var(--gold-accent)]/20 transition-colors">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span>+91 98929 25718</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919892925718"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-white/70 hover:text-[var(--gold-accent)] transition-colors group"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-[var(--gold-accent)]/20 transition-colors">
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/mehjabin_makeover/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-white/70 hover:text-[var(--gold-accent)] transition-colors group"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-[var(--gold-accent)]/20 transition-colors">
                    <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span>@mehjabin_makeover</span>
                </a>
              </li>
              <li className="inline-flex items-start gap-3 text-white/70">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span>Mumbai, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--gold-accent)]/30 to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p style={{ fontFamily: 'var(--font-body)' }} className="text-white/60 text-xs sm:text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Mehjabin Makeover. All rights reserved.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-2 text-white/60 text-xs sm:text-sm"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            <span>Crafted with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 fill-[var(--gold-accent)] text-[var(--gold-accent)]" />
            </motion.div>
            <span>for beautiful brides</span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
