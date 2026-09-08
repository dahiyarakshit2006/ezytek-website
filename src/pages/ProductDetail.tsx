import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Download, MessageCircle, CheckCircle } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import LiquidButton from '../components/LiquidButton';
import SectionLabel from '../components/SectionLabel';

interface ProductDetailProps {
  onQuoteClick: () => void;
}

export default function ProductDetail({ onQuoteClick }: ProductDetailProps) {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);

  useEffect(() => {
    if (product) {
      document.title = `${product.name} | EzyTek Clean`;
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center px-6">
        <div>
          <h1 className="font-serif text-4xl text-white mb-4">Product Not Found</h1>
          <Link to="/products" className="text-brand-accent hover:underline">Back to Products</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, 3);

  return (
    <main>
      <section className="py-24 max-w-7xl mx-auto px-6 mt-16">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <div className="rounded-3xl overflow-hidden aspect-square bg-gradient-to-br from-brand-accent/20 to-black border border-white/10 flex items-center justify-center">
              <span className="text-white/30 font-sans text-xl">{product.name}</span>
            </div>
            {product.gallery && product.gallery.length > 0 && (
              <div className="flex gap-4 mt-4 overflow-x-auto hide-scrollbar">
                {product.gallery.map((_: string, i: number) => (
                  <div key={i} className="w-20 h-20 rounded-xl bg-white/5 border border-white/10 shrink-0 flex items-center justify-center">
                    <span className="text-white/35 text-xs">Image {i+1}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div>
            <SectionLabel>{product.category}</SectionLabel>
            <h1 className="font-serif text-4xl md:text-5xl text-white mt-4 leading-tight">{product.name}</h1>
            <p className="text-white/55 mt-6 leading-relaxed text-lg">{product.description}</p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <div onClick={onQuoteClick}>
                <LiquidButton variant="solid" className="w-full sm:w-auto justify-center">Request Quote</LiquidButton>
              </div>
              <LiquidButton variant="glass" icon={<Download size={18} />} className="w-full sm:w-auto justify-center">
                Download Brochure
              </LiquidButton>
              <a href="https://wa.me/919821491403" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                <LiquidButton variant="outline" icon={<MessageCircle size={18} />} className="w-full justify-center">
                  WhatsApp Expert
                </LiquidButton>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-3xl text-white">Features</h2>
          <div className="grid md:grid-cols-2 gap-4 mt-8">
            {product.features?.map((feature: string, idx: number) => (
              <div key={idx} className="liquid-glass rounded-xl p-5 flex gap-4 items-start">
                <CheckCircle className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <span className="text-white/80">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-3xl text-white">Technical Specifications</h2>
          <div className="liquid-glass rounded-2xl p-10 mt-8 text-center flex flex-col items-center">
            <p className="text-white/55">Technical specifications available on request. Contact our team for detailed product documentation.</p>
            <div className="mt-6" onClick={onQuoteClick}>
              <LiquidButton variant="glass">Contact for Specifications</LiquidButton>
            </div>
          </div>
        </div>
      </section>

      {product.applications && product.applications.length > 0 && (
        <section className="py-16 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-serif text-3xl text-white">Applications</h2>
            <div className="flex flex-wrap gap-3 mt-8">
              {product.applications.map((app: string, idx: number) => (
                <div key={idx} className="liquid-glass rounded-full px-6 py-2.5 text-sm text-white/80">
                  {app}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {relatedProducts.length > 0 && (
        <section className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-serif text-3xl text-white">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {relatedProducts.map((p: any) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
