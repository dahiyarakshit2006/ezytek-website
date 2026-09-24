import { motion } from 'framer-motion';
import SectionLabel from '../components/SectionLabel';
import LiquidButton from '../components/LiquidButton';

const FeaturedVideoSection = () => {
  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }} 
          whileInView={{ scale: 1, opacity: 1 }} 
          viewport={{ once: true, margin: '-100px' }} 
          transition={{ duration: 0.9 }}
          className="rounded-3xl overflow-hidden relative aspect-video"
        >
          {/* Brand Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/assets/videos/brand-video.mp4" type="video/mp4" />
          </video>
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
          
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
              <div className="liquid-glass rounded-2xl p-5 max-w-md">
                <SectionLabel label="OUR APPROACH" />
                <p className="text-sm text-white/80 mt-3 font-sans leading-relaxed">
                  We combine practical engineering with intelligent automation to create car wash systems that deliver consistency, efficiency and long-term performance.
                </p>
              </div>
              
              <LiquidButton href="/about" variant="glass">
                Discover EzyTek
              </LiquidButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedVideoSection;
