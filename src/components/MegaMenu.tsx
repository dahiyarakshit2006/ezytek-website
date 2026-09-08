import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import LiquidButton from './LiquidButton';
import { categories } from '../data/categories';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[90vw] max-w-5xl liquid-glass rounded-3xl p-8 z-50"
        >
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-4 flex flex-col items-start justify-center">
              <h2 className="font-serif text-4xl text-white leading-tight">Explore</h2>
              <h2 className="font-serif text-4xl text-white italic mb-4 leading-tight">Products</h2>
              <p className="text-white/55 text-sm mb-6">
                Discover our complete range of car wash systems and professional cleaning equipment.
              </p>
              <Link to="/products" onClick={onClose}>
                <LiquidButton variant="glass">View All Products</LiquidButton>
              </Link>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
                {categories.map((category) => (
                  <Link
                    key={category.slug}
                    to={`/products?category=${category.slug}`}
                    onClick={onClose}
                  >
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                      className="py-3 px-4 rounded-xl hover:bg-white/5 transition-colors group cursor-pointer"
                    >
                      <span className="text-sm font-sans text-white/80 group-hover:text-white transition-colors">
                        {category.name}
                      </span>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MegaMenu;
