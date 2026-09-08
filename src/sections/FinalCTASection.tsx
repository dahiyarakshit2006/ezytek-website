import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import LiquidButton from '../components/LiquidButton';

interface FinalCTASectionProps {
  onQuoteClick: () => void;
}

const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onQuoteClick }) => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden bg-black py-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_rgba(74,144,164,0.05)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,_rgba(74,144,164,0.03)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')", backgroundRepeat: 'repeat' }} />
      </div>

      <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
        <motion.h2 
          className="font-serif text-display-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          Ready to build<br />
          what's <em className="italic">next?</em>
        </motion.h2>

        <motion.p 
          className="text-secondary text-lg mt-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          Talk to our team and discover the right solution for your business.
        </motion.p>

        <motion.div 
          className="mt-10 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <LiquidButton variant="solid" onClick={onQuoteClick}>
            Request a Quote
          </LiquidButton>
          <LiquidButton variant="glass" href="tel:+919821491403" icon={<Phone />}>
            Call Us
          </LiquidButton>
          <LiquidButton variant="glass" href="https://wa.me/919821491403" icon={<MessageCircle />}>
            WhatsApp Us
          </LiquidButton>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
