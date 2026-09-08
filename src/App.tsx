import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import QuoteModal from './components/QuoteModal';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import CarWashSetup from './pages/CarWashSetup';
import Videos from './pages/Videos';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  const openQuoteModal = () => setQuoteModalOpen(true);
  const closeQuoteModal = () => setQuoteModalOpen(false);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <ScrollToTop />
      <Navbar onQuoteClick={openQuoteModal} />
      <Routes>
        <Route path="/" element={<Home onQuoteClick={openQuoteModal} />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:slug" element={<ProductDetail onQuoteClick={openQuoteModal} />} />
        <Route path="/car-wash-setup" element={<CarWashSetup />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <WhatsAppWidget />
      <QuoteModal isOpen={quoteModalOpen} onClose={closeQuoteModal} />
    </div>
  );
}
