import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, ChevronDown, Download, ArrowRight } from 'lucide-react';
import LiquidButton from './LiquidButton';
import { categories } from '../data/categories';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onQuoteClick: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onQuoteClick }) => {
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[90] bg-black/95 backdrop-blur-xl flex flex-col"
        >
          <div className="px-6 py-6 flex justify-between items-center">
            <span className="font-serif text-xl text-white">EzyTek Clean</span>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full liquid-glass flex items-center justify-center text-white focus:outline-none"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-center px-6 gap-1 overflow-y-auto">
            <Link to="/" onClick={onClose} className="text-3xl font-serif py-3 text-white hover:text-white/70 transition-colors">Home</Link>
            <Link to="/about" onClick={onClose} className="text-3xl font-serif py-3 text-white hover:text-white/70 transition-colors">About Us</Link>
            
            <div className="flex flex-col">
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                className="flex items-center justify-between text-3xl font-serif py-3 text-white hover:text-white/70 transition-colors w-full text-left focus:outline-none"
              >
                Products
                <motion.div
                  animate={{ rotate: productsOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={24} />
                </motion.div>
              </button>
              <AnimatePresence>
                {productsOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden flex flex-col"
                  >
                    {categories.map((category) => (
                      <Link
                        key={category.slug}
                        to={`/products?category=${category.slug}`}
                        onClick={onClose}
                        className="pl-4 py-2 text-lg font-sans text-white/55 hover:text-white transition-colors"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/car-wash-setup" onClick={onClose} className="text-3xl font-serif py-3 text-white hover:text-white/70 transition-colors">Car Washing Setup</Link>
            <Link to="/videos" onClick={onClose} className="text-3xl font-serif py-3 text-white hover:text-white/70 transition-colors">Videos</Link>
            <Link to="/contact" onClick={onClose} className="text-3xl font-serif py-3 text-white hover:text-white/70 transition-colors">Contact</Link>
          </div>

          <div className="px-6 pb-10 flex flex-col gap-4 mt-auto">
            <div className="w-full">
              <LiquidButton variant="glass" icon={<Download size={18} />} className="w-full justify-center">
                Download Catalogue
              </LiquidButton>
            </div>
            <div className="w-full" onClick={() => { onClose(); onQuoteClick(); }}>
              <LiquidButton variant="solid" icon={<ArrowRight size={18} />} className="w-full justify-center">
                Request a Quote
              </LiquidButton>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
