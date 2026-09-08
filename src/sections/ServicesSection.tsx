import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionLabel from '../components/SectionLabel';

const ServicesSection = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: '-100px' }} 
          transition={{ duration: 0.7 }}
          className="flex justify-between items-end mb-16"
        >
          <h2 className="font-serif text-4xl md:text-6xl text-white">What we do</h2>
          <SectionLabel label="OUR EXPERTISE" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: '-100px' }} 
            transition={{ duration: 0.7 }}
            className="liquid-glass rounded-3xl overflow-hidden group cursor-pointer"
          >
            <div className="aspect-video overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                <span className="text-[rgba(255,255,255,0.35)] font-sans uppercase tracking-[0.15em] text-sm">Automatic Car Wash Systems</span>
              </div>
            </div>
            <div className="p-6 md:p-8">
              <div className="text-xs font-sans tracking-[0.2em] uppercase text-[#4A90A4] mb-3">AUTOMATION</div>
              <h3 className="font-serif text-2xl md:text-3xl text-white">Automatic Car Wash Systems</h3>
              <p className="mt-3 text-[rgba(255,255,255,0.55)] text-sm leading-relaxed font-sans">
                From brush wash systems to touchless jet wash plants, we design automated solutions that improve speed, consistency and customer experience.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm font-sans text-white hover:text-white/70 transition-colors">
                <span>Explore Systems</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: '-100px' }} 
            transition={{ duration: 0.7, delay: 0.2 }}
            className="liquid-glass rounded-3xl overflow-hidden group cursor-pointer"
          >
            <div className="aspect-video overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900 to-zinc-800 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                <span className="text-[rgba(255,255,255,0.35)] font-sans uppercase tracking-[0.15em] text-sm">Professional Equipment</span>
              </div>
            </div>
            <div className="p-6 md:p-8">
              <div className="text-xs font-sans tracking-[0.2em] uppercase text-[#4A90A4] mb-3">EQUIPMENT</div>
              <h3 className="font-serif text-2xl md:text-3xl text-white">Professional Cleaning Equipment</h3>
              <p className="mt-3 text-[rgba(255,255,255,0.55)] text-sm leading-relaxed font-sans">
                High pressure washers, vacuum systems, scrubbers, garage equipment and specialised cleaning machinery built for demanding environments.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm font-sans text-white hover:text-white/70 transition-colors">
                <span>Explore Equipment</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
