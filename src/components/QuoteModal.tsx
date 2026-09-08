import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';
import LiquidButton from './LiquidButton';

export interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProduct?: string;
}

export default function QuoteModal({ isOpen, onClose, preselectedProduct = '' }: QuoteModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        onClose();
      }, 3000);
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="liquid-glass-strong rounded-3xl max-w-lg w-full relative z-10 p-8 border border-white/10 bg-black/40"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", bounce: 0.5 }}
                >
                  <CheckCircle className="w-16 h-16 text-green-400 mb-6" />
                </motion.div>
                <h3 className="font-serif text-3xl text-white mb-2">Thank you!</h3>
                <p className="text-secondary">We'll be in touch shortly.</p>
              </div>
            ) : (
              <>
                <h2 className="font-serif text-3xl text-white mb-2">Request a Quote</h2>
                <p className="text-secondary mb-8">Fill out the form below and our team will get back to you with pricing details.</p>
                
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="Name" required className="w-full bg-white/5 rounded-xl border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-brand-accent transition-colors" />
                    <input type="text" placeholder="Company" className="w-full bg-white/5 rounded-xl border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-brand-accent transition-colors" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <input type="tel" placeholder="Phone" required className="w-full bg-white/5 rounded-xl border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-brand-accent transition-colors" />
                    <input type="email" placeholder="Email" required className="w-full bg-white/5 rounded-xl border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-brand-accent transition-colors" />
                  </div>
                  <input type="text" placeholder="City" required className="w-full bg-white/5 rounded-xl border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-brand-accent transition-colors" />
                  
                  <select 
                    className="w-full bg-white/5 rounded-xl border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-brand-accent transition-colors appearance-none"
                    defaultValue={preselectedProduct || ""}
                  >
                    <option value="" disabled className="bg-neutral-900 text-white/50">Product/Service Interested In</option>
                    <option value="automatic-plant" className="bg-neutral-900">Automatic Car Wash Plant</option>
                    <option value="pressure-washer" className="bg-neutral-900">High Pressure Washer</option>
                    <option value="vacuum-cleaner" className="bg-neutral-900">Vacuum Cleaners</option>
                    <option value="garage-equipment" className="bg-neutral-900">Garage Equipment</option>
                    <option value="other" className="bg-neutral-900">Other</option>
                  </select>
                  
                  <textarea 
                    placeholder="Message" 
                    rows={3} 
                    className="w-full bg-white/5 rounded-xl border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-brand-accent transition-colors resize-none"
                  ></textarea>
                  
                  <LiquidButton type="submit" variant="solid" className="w-full mt-2">
                    Request a Quote
                  </LiquidButton>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
