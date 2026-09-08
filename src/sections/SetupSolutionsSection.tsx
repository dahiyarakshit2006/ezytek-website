import { motion } from 'framer-motion';
import { setupSolutions } from '../data/setupSolutions';
import LiquidButton from '../components/LiquidButton';

const SetupSolutionsSection = () => {
  return (
    <section className="section-padding bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          className="font-serif text-display-lg text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          Your business.<br />
          Our complete <em className="italic">setup.</em>
        </motion.h2>
        
        <motion.p 
          className="text-secondary text-center max-w-2xl mx-auto mt-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          From machinery selection to complete workflow planning, EzyTek helps businesses build efficient car washing operations.
        </motion.p>

        <div className="mt-20 flex flex-col gap-24 md:gap-32">
          {setupSolutions.map((setup, index) => (
            <motion.div 
              key={index}
              className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
            >
              <div className="md:w-1/2">
                <div className="font-serif text-8xl md:text-9xl text-white/[0.05] leading-none">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="font-serif text-display-sm mt-4">{setup.name}</h3>
                <p className="text-secondary mt-4 leading-relaxed">{setup.description}</p>
                <div className="mt-6">
                  <LiquidButton variant="glass">Talk to an Expert</LiquidButton>
                </div>
              </div>
              <div className="md:w-1/2 w-full">
                <div className="rounded-3xl aspect-video overflow-hidden bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center border border-white/10 relative">
                   <div className="absolute inset-0 bg-black/40"></div>
                   <span className="text-muted font-sans text-sm z-10">{setup.name}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SetupSolutionsSection;
