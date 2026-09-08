import { motion } from 'framer-motion';
import type { SetupSolution } from '../data/setupSolutions';
import LiquidButton from './LiquidButton';

export interface SetupCardProps {
  setup: SetupSolution;
  index: number;
}

export default function SetupCard({ setup, index }: SetupCardProps) {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div 
      className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-start w-full`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex-1 flex flex-col items-start w-full">
        <span className="font-serif text-[120px] leading-none text-white/10 mb-4 tracking-tighter">
          {(index + 1).toString().padStart(2, '0')}
        </span>
        <h3 className="font-serif text-3xl md:text-5xl text-white mb-6 leading-tight">
          {setup.name}
        </h3>
        <p className="text-secondary text-lg mb-8 leading-relaxed max-w-xl">
          {setup.description}
        </p>
        <div className="grid grid-cols-2 gap-4 w-full mb-8 text-sm">
          <div>
            <span className="block text-white/40 uppercase tracking-widest text-xs mb-1">Ideal For</span>
            <span className="text-white">{setup.idealFor}</span>
          </div>
          <div>
            <span className="block text-white/40 uppercase tracking-widest text-xs mb-1">Space</span>
            <span className="text-white">{setup.spaceRequirement}</span>
          </div>
        </div>
        <LiquidButton variant="glass" href="/contact">
          Talk to an Expert
        </LiquidButton>
      </div>
      
      <div className="flex-1 w-full">
        <div className="relative rounded-2xl aspect-video bg-gradient-to-br from-brand-accent/20 to-black overflow-hidden border border-white/10 group">
          {setup.image ? (
            <motion.img 
              src={setup.image} 
              alt={setup.name}
              className="w-full h-full object-cover opacity-60 mix-blend-overlay group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-serif text-2xl text-white/30">{setup.name}</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
