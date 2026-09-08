import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionLabel from '../components/SectionLabel';

export default function About() {
  useEffect(() => {
    document.title = 'About EzyTek Clean | Car Wash Technology Since 2012';
  }, []);

  return (
    <main>
      {/* Hero section */}
      <section className="min-h-[70vh] flex items-center relative overflow-hidden bg-gradient-to-b from-black to-brand-accent/10">
        <div className="max-w-4xl mx-auto px-6 text-center z-10 relative">
          <SectionLabel>ABOUT US</SectionLabel>
          <h1 className="font-serif text-5xl md:text-7xl text-white mt-4">
            Built on curiosity.<br />
            Driven by <em className="italic">engineering.</em>
          </h1>
          <p className="text-white/55 mt-6 max-w-xl mx-auto">
            We engineer advanced car wash solutions that transform the industry through innovation and reliability.
          </p>
        </div>
      </section>

      {/* Our Story section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl text-white">Our Story</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 space-y-4"
          >
            <p>Founded in 2012, EzyTek Clean started with a simple vision: to bring world-class car wash automation to India. Over the years, we have grown from a small engineering setup to a nationwide leader.</p>
            <p>Today, our systems are installed across the country, serving businesses with reliable, efficient, and innovative cleaning solutions that stand the test of time.</p>
          </motion.div>
        </div>
      </section>

      {/* Engineering section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="rounded-3xl aspect-[4/5] bg-gradient-to-br from-brand-accent/20 to-black border border-white/10 flex items-center justify-center">
            <span className="text-white/30 font-sans text-lg">Engineering Excellence</span>
          </div>
          <div>
            <SectionLabel>OUR ENGINEERING</SectionLabel>
            <h3 className="font-serif text-4xl text-white mt-4">Precision in every component</h3>
            <p className="text-white/55 mt-6">
              Our engineering approach is rooted in durability and performance. Every part of an EzyTek machine is designed to withstand harsh operating conditions while delivering an impeccable clean.
            </p>
          </div>
        </div>
      </section>

      {/* R&D section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <SectionLabel>RESEARCH & DEVELOPMENT</SectionLabel>
            <h3 className="font-serif text-4xl text-white mt-4">Innovation through continuous improvement</h3>
            <p className="text-white/55 mt-6">
              Our dedicated R&D team constantly explores new technologies, materials, and methods to make our systems faster, more efficient, and environmentally friendly.
            </p>
          </div>
          <div className="order-1 md:order-2 rounded-3xl aspect-[4/5] bg-gradient-to-bl from-brand-accent/20 to-black border border-white/10 flex items-center justify-center">
            <span className="text-white/30 font-sans text-lg">R&D Lab</span>
          </div>
        </div>
      </section>

      {/* Timeline section */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl text-center text-white mb-16">Our Journey</h2>
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-[5px] md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/50 bg-black text-brand-accent shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 relative">
                <div className="w-3 h-3 bg-brand-accent rounded-full"></div>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] liquid-glass rounded-2xl p-6">
                <h3 className="font-serif text-2xl text-white">2012 — Founded</h3>
                <p className="text-white/55 mt-2 text-sm">EzyTek Clean was established with a vision to transform the car wash industry in India.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/50 bg-black text-brand-accent shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 relative">
                <div className="w-3 h-3 bg-brand-accent rounded-full"></div>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] liquid-glass rounded-2xl p-6">
                <h3 className="font-serif text-2xl text-white">Growth — Expanded Portfolio</h3>
                <p className="text-white/55 mt-2 text-sm">Developed a comprehensive range of 16+ product categories spanning car wash systems, cleaning equipment, and automotive service solutions.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/50 bg-black text-brand-accent shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 relative">
                <div className="w-3 h-3 bg-brand-accent rounded-full"></div>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] liquid-glass rounded-2xl p-6">
                <h3 className="font-serif text-2xl text-white">Today — Industry Leader</h3>
                <p className="text-white/55 mt-2 text-sm">Recognized as a leading automatic car wash manufacturer in India, serving businesses nationwide.</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Vision section */}
      <section className="py-24 bg-black text-center px-6">
        <SectionLabel>OUR VISION</SectionLabel>
        <blockquote className="font-serif italic text-3xl md:text-5xl text-white max-w-4xl mx-auto mt-8 leading-snug">
          "To be the most trusted name in automotive cleaning technology, making advanced automation accessible to every business in India."
        </blockquote>
      </section>
    </main>
  );
}
