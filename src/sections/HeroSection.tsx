import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import LiquidButton from '../components/LiquidButton';

interface HeroSectionProps {
  onQuoteClick: () => void;
}

const HeroSection = ({ onQuoteClick }: HeroSectionProps) => {
  return (
    <section className="min-h-screen relative overflow-hidden flex flex-col bg-black">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(74,144,164,0.06)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(74,144,164,0.04)_0%,transparent_50%)]" />
        <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />
      </div>

      <div className="relative z-10 flex flex-col flex-1 max-w-7xl mx-auto w-full px-6">
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 }
              }
            }}
            className="flex flex-col items-center"
          >
            <motion.h1 className="font-serif text-5xl md:text-7xl lg:text-8xl xl:text-[9rem] text-white leading-[0.95] tracking-tight">
              <motion.div variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}>Engineering</motion.div>
              <motion.div variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}>the future of</motion.div>
              <motion.div variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}><em className="italic">clean.</em></motion.div>
            </motion.h1>
            
            <motion.p 
              variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
              className="mt-8 max-w-xl mx-auto text-[rgba(255,255,255,0.55)] text-base md:text-lg font-sans leading-relaxed"
            >
              Advanced automatic car wash systems and professional cleaning solutions engineered for performance, efficiency and scale.
            </motion.p>

            <motion.div 
              variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
              className="mt-10 flex flex-wrap gap-4 justify-center"
            >
              <LiquidButton variant="solid" icon={<ArrowRight />} iconPosition="right" onClick={onQuoteClick}>
                Request a Quote
              </LiquidButton>
              <LiquidButton variant="glass" href="/products">
                Explore Products
              </LiquidButton>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15, delayChildren: 0.6 }
            }
          }}
          className="pb-12 md:pb-16 flex flex-wrap justify-center gap-6 md:gap-12"
        >
          {[
            { value: '2012', label: 'Founded' },
            { value: '16+', label: 'Product Categories' },
            { value: 'India', label: 'Nationwide Solutions' }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
              className="liquid-glass rounded-2xl px-6 py-4 text-center"
            >
              <div className="font-serif text-2xl md:text-3xl text-white">{stat.value}</div>
              <div className="text-xs font-sans text-[rgba(255,255,255,0.35)] uppercase tracking-wider mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
