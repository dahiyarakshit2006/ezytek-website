import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import LiquidButton from '../components/LiquidButton';

interface FinalCTASectionProps {
  onQuoteClick: () => void;
}

const FinalCTASection = ({ onQuoteClick }: FinalCTASectionProps) => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden bg-black py-20">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/videos/final-cta.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />
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
