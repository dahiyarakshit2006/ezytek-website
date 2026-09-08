import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { Product } from '../data/products';

export interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
  className?: string;
}

export default function ProductCard({ product, className = '' }: ProductCardProps) {
  return (
    <motion.div
      className={`liquid-glass rounded-2xl overflow-hidden flex flex-col ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-white/5 group">
        {product.image ? (
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-white/10 to-transparent">
            <span className="font-serif text-xl text-white/50 text-center px-4">{product.name}</span>
          </div>
        )}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 liquid-glass rounded-full text-xs font-sans text-white">
            {product.category}
          </span>
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-serif text-lg text-white mb-2">{product.name}</h3>
        <p className="text-secondary text-sm line-clamp-2 mb-6 flex-grow">{product.shortDescription}</p>
        
        <Link 
          to={`/products/${product.slug}`}
          className="flex items-center gap-2 text-white font-sans text-sm font-medium hover:text-brand-accent transition-colors"
        >
          View Details
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
}
