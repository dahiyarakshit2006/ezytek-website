import { motion } from 'framer-motion';
import { Droplets, Warehouse, Wrench, Factory, Sparkles, Layers, Star } from 'lucide-react';

const industries = [
  { name: 'Car Wash Businesses', icon: Droplets },
  { name: 'Automotive Dealerships', icon: Warehouse },
  { name: 'Service Centers', icon: Wrench },
  { name: 'Industrial Facilities', icon: Factory },
  { name: 'Commercial Cleaning', icon: Sparkles },
  { name: 'Fleet Operations', icon: Layers },
  { name: 'Premium Car Detailing Studios', icon: Star }
];

const IndustriesSection = () => {
  return (
    <section className="section-padding bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          className="font-serif text-display-lg mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          Built for every<br />
          <em className="italic">cleaning operation.</em>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.name}
                className="liquid-glass rounded-2xl p-6 text-center group cursor-pointer hover:bg-white/[0.03] transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
              >
                <Icon className="w-8 h-8 text-white/30 group-hover:text-white/60 transition mx-auto mb-4" />
                <h3 className="font-sans text-sm font-medium">{ind.name}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
