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
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/videos/hero-carwash.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/40" />
      </div>

      <div className="relative z-10 flex flex-col flex-1 max-w-7xl mx-auto w-full px-6 pt-28 md:pt-32">
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
              <motion.div variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}>the future</motion.div>
              <motion.div variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}>of <em className="italic">clean.</em></motion.div>
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
          className="pb-12 md:pb-16 flex items-center justify-center gap-8 md:gap-16"
        >
          {[
            { value: '2012', label: 'Founded' },
            { value: '16+', label: 'Product Categories' },
            { value: 'India', label: 'Nationwide Solutions' }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
              className="text-center flex items-center gap-8 md:gap-16"
            >
              {i > 0 && <div className="w-px h-8 bg-white/10 -ml-8 md:-ml-16" />}
              <div>
                <div className="font-serif text-xl md:text-2xl text-white/90">{stat.value}</div>
                <div className="text-[10px] font-sans text-white/30 uppercase tracking-[0.15em] mt-1">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
