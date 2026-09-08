import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppWidget() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="liquid-glass px-4 py-2 rounded-full text-sm text-white whitespace-nowrap mb-2 mr-2"
          >
            Chat with our team
          </motion.div>
        )}
      </AnimatePresence>
      <motion.a
        href="https://wa.me/919821491403"
        target="_blank"
        rel="noopener noreferrer"
        className="liquid-glass rounded-full w-14 h-14 flex items-center justify-center animate-pulse-slow relative"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <MessageCircle className="w-7 h-7 text-[#25D366]" fill="#25D366" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-black"></span>
      </motion.a>
    </div>
  );
}
