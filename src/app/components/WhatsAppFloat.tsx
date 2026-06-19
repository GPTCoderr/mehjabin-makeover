import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    const message = "Hi Mehjabin, I would like to know more about your bridal makeup services.";
    const whatsappUrl = `https://wa.me/919892925718?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 z-50">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 20, y: 10 }}
            className="absolute bottom-16 sm:bottom-20 right-0 mb-2 hidden sm:block"
          >
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl p-3 sm:p-4 pr-10 sm:pr-12 max-w-[260px] sm:max-w-xs relative border border-[var(--gold-accent)]/20">
              <button
                onClick={() => setShowTooltip(false)}
                className="absolute top-2 right-2 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-[var(--foreground)]/40 hover:text-[var(--foreground)] transition-colors"
              >
                <X className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
              <div className="space-y-1.5 sm:space-y-2">
                <p style={{ fontFamily: 'var(--font-heading)' }} className="text-base sm:text-lg text-[var(--deep-wine)]">
                  Have questions?
                </p>
                <p style={{ fontFamily: 'var(--font-body)' }} className="text-xs sm:text-sm text-[var(--foreground)]/70">
                  Chat with us on WhatsApp for instant responses about bookings and services.
                </p>
              </div>
              {/* Arrow */}
              <div className="absolute bottom-0 right-6 sm:right-8 transform translate-y-1/2 rotate-45 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white border-r border-b border-[var(--gold-accent)]/20" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={handleClick}
        onHoverStart={() => setShowTooltip(true)}
        onHoverEnd={() => setShowTooltip(false)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        className="relative w-14 h-14 sm:w-16 sm:h-16 border-2 border-[#25D366] bg-transparent rounded-full shadow-xl shadow-[#25D366]/10 flex items-center justify-center hover:bg-[#25D366]/10 hover:text-[#075E32] transition-all duration-300 group"
      >
        {/* Pulsing Ring */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.05, 0.25] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-full border border-[#25D366] bg-transparent"
        />

        {/* Icon */}
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-[#25D366] relative z-10" />

        {/* Notification Dot */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="absolute top-0 right-0 w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full border-2 border-white"
        />
      </motion.button>
    </div>
  );
}
