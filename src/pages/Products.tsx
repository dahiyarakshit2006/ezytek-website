import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { categories } from '../data/categories';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'all');

  useEffect(() => {
    document.title = 'Professional Car Wash & Cleaning Equipment | EzyTek Clean';
  }, []);

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setActiveCategory(category);
    } else {
      setActiveCategory('all');
    }
  }, [searchParams]);

  const handleCategoryChange = (slug: string) => {
    setActiveCategory(slug);
    if (slug === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: slug });
    }
  };

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.categorySlug === activeCategory);

  return (
    <main>
      <section className="min-h-[50vh] flex items-center bg-gradient-to-b from-black to-brand-accent/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-serif text-5xl md:text-7xl text-white">
            Technology built<br />
            for <em className="italic">cleaner operations.</em>
          </h1>
          <p className="text-white/55 mt-6 max-w-2xl mx-auto">
            Explore our comprehensive range of car wash systems and professional cleaning equipment designed for performance and reliability.
          </p>
        </div>
      </section>

      <div className="sticky top-24 z-30 py-4 bg-black/80 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
            <button
              onClick={() => handleCategoryChange('all')}
              className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-sans transition-colors ${
                activeCategory === 'all' ? 'bg-white text-black' : 'liquid-glass text-white/55 hover:text-white'
              }`}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat.slug}
                onClick={() => handleCategoryChange(cat.slug)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-sans transition-colors ${
                  activeCategory === cat.slug ? 'bg-white text-black' : 'liquid-glass text-white/55 hover:text-white'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProducts.map(product => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </main>
  );
}
