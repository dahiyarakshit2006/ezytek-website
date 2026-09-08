import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { flagshipProducts } from '../data/products';
import SectionLabel from '../components/SectionLabel';

const AutomaticSystemsSection = () => {
  return (
    <section className="section-padding bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel label="FLAGSHIP SOLUTIONS" />
        <motion.h2 
          className="font-serif text-display-lg mt-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          Designed for every<br />
          way a car <em className="italic">moves.</em>
        </motion.h2>

        <div 
          className="mt-16 flex gap-6 overflow-x-auto lg:grid lg:grid-cols-3 pb-4 lg:pb-0 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {flagshipProducts.map((product, index) => (
            <motion.div
              key={product.id || index}
              className="min-w-[300px] lg:min-w-0 snap-center liquid-glass rounded-2xl overflow-hidden group cursor-pointer flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <div className="aspect-[4/3] overflow-hidden relative bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center">
                <span className="text-muted font-sans text-sm">{product.name}</span>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-serif text-lg">{product.name}</h3>
                <p className="text-secondary text-sm mt-2 line-clamp-2">{product.description}</p>
                <div className="mt-4 flex justify-between items-center pt-4 border-t border-white/5 mt-auto">
                  <span className="text-xs text-muted uppercase tracking-wider">Quick View</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutomaticSystemsSection;
