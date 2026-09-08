import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import LiquidButton from '../components/LiquidButton';

const CatalogueCTASection = () => {
  return (
    <section className="section-padding-sm bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="liquid-glass rounded-3xl p-10 md:p-16 text-center relative overflow-hidden border border-white/10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-50 pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="font-serif text-display-md">
              Everything EzyTek.<br />
              In one <em className="italic">catalogue.</em>
            </h2>
            <p className="mt-6 text-secondary max-w-xl mx-auto">
              Explore our complete range of automatic car wash systems, professional cleaning equipment and automotive service solutions.
            </p>
            <div className="mt-8 flex justify-center">
              <LiquidButton variant="solid" icon={<Download />} iconPosition="right">
                Download Catalogue
              </LiquidButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CatalogueCTASection;
