import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
// Using a mock fallback in case categories file doesn't export what we expect yet
import { categories as mockCategories } from '../data/categories';

// Fallback data if categories isn't defined or empty
const defaultCategories = [
  { id: '1', name: 'Automatic Brush Wash', productCount: 4, featured: true, slug: 'automatic-brush-wash' },
  { id: '2', name: 'Touchless Wash', productCount: 3, featured: false, slug: 'touchless-wash' },
  { id: '3', name: 'High Pressure Washers', productCount: 12, featured: false, slug: 'high-pressure-washers' },
  { id: '4', name: 'Vacuum Cleaners', productCount: 8, featured: true, slug: 'vacuum-cleaners' },
  { id: '5', name: 'Steam Cleaners', productCount: 5, featured: false, slug: 'steam-cleaners' },
  { id: '6', name: 'Foam Tanks', productCount: 2, featured: false, slug: 'foam-tanks' }
];

const categoriesData = (mockCategories && mockCategories.length > 0) ? mockCategories : defaultCategories;

const ProductCategoriesSection = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: '-100px' }} 
          transition={{ duration: 0.7 }}
          className="font-serif text-5xl md:text-7xl text-white mb-16 md:mb-24 leading-[1.1]"
        >
          <div className="block">Explore our</div>
          <div className="block"><em className="italic">technology.</em></div>
        </motion.h2>

        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
            hidden: { opacity: 0 }
          }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
        >
          {categoriesData.map((category, index) => {
            const isFeatured = category.featured;
            const hue = (index * 45) % 360;
            
            return (
              <motion.div 
                key={category.slug || index}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
                className={`${isFeatured ? 'col-span-2 row-span-2' : 'col-span-1'} group`}
              >
                <Link to={`/products?category=${category.slug}`} className="block h-full">
                  <div 
                    className={`liquid-glass rounded-2xl overflow-hidden relative cursor-pointer h-full transition-colors duration-500 hover:bg-white/5 ${isFeatured ? 'aspect-square md:aspect-auto' : 'aspect-square md:aspect-square py-8 px-6'}`}
                    style={isFeatured ? { minHeight: '300px' } : {}}
                  >
                    <div 
                      className="absolute inset-0 opacity-[0.15] mix-blend-overlay transition-opacity duration-500 group-hover:opacity-30"
                      style={{
                        background: `linear-gradient(${135 + (index * 20)}deg, hsl(${hue}, 20%, 30%), transparent 70%)`
                      }}
                    />
                    
                    <div className={`relative z-10 flex flex-col justify-end h-full ${isFeatured ? 'p-6 md:p-8' : ''}`}>
                      <div className="flex justify-between items-end">
                        <div>
                          <h3 className={`font-serif text-white ${isFeatured ? 'text-2xl md:text-4xl' : 'text-lg md:text-xl'}`}>
                            {category.name}
                          </h3>
                          <div className="text-[rgba(255,255,255,0.35)] text-sm mt-1 transition-colors duration-500 group-hover:text-[rgba(255,255,255,0.7)]">
                            {(category as any).productCount || (category as any).count} products
                          </div>
                        </div>
                        <ArrowUpRight className="text-white w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductCategoriesSection;
