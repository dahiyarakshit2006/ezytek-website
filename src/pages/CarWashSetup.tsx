import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { setupSolutions } from '../data/setupSolutions';
import LiquidButton from '../components/LiquidButton';

export default function CarWashSetup() {
  useEffect(() => {
    document.title = 'Car Wash Setup Solutions | EzyTek Clean';
  }, []);

  return (
    <main>
      <section className="min-h-[60vh] flex items-center bg-gradient-to-b from-black to-brand-accent/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-serif text-5xl md:text-7xl text-white">
            From empty space<br />
            to working <em className="italic">business.</em>
          </h1>
          <p className="text-white/55 mt-6 max-w-xl mx-auto">
            EzyTek helps businesses create complete, efficient car wash setups tailored to their space, budget and goals.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6">
        {setupSolutions.map((setup: any, index: number) => (
          <motion.div
            key={setup.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center mb-24 md:mb-32 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
          >
            <div className="md:w-1/2">
              <span className="font-serif text-8xl text-white/[0.05] leading-none block">0{index + 1}</span>
              <h2 className="font-serif text-4xl text-white mt-4">{setup.name}</h2>
              <p className="text-white/55 mt-4 leading-relaxed">{setup.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-white/35">Ideal For</h4>
                  <p className="text-sm text-white/80 mt-1">{setup.idealFor}</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-white/35">Space</h4>
                  <p className="text-sm text-white/80 mt-1">{setup.spaceRequirement}</p>
                </div>
                <div className="col-span-2">
                  <h4 className="text-xs uppercase tracking-wider text-white/35">Business Type</h4>
                  <p className="text-sm text-white/80 mt-1">{setup.businessType}</p>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-xs uppercase tracking-wider text-white/35 mb-3">Key Equipment</h4>
                <div className="flex flex-wrap gap-2">
                  {setup.equipment.map((item: string, i: number) => (
                    <span key={i} className="liquid-glass rounded-full px-4 py-1.5 text-xs text-white/80">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <LiquidButton variant="glass">Get Setup Consultation</LiquidButton>
              </div>
            </div>

            <div className="md:w-1/2 w-full">
              <div className="rounded-3xl aspect-video bg-gradient-to-tr from-brand-accent/20 to-black border border-white/10 flex items-center justify-center">
                <span className="text-white/30 font-sans">{setup.name} Placeholder</span>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      <section className="py-24 text-center px-6 border-t border-white/5">
        <h2 className="font-serif text-4xl md:text-5xl text-white">Not sure which setup is right?</h2>
        <p className="text-white/55 mt-4 max-w-xl mx-auto">Contact our specialists to assess your space and requirements for a tailored recommendation.</p>
        <div className="mt-8 inline-block">
          <LiquidButton variant="solid">Talk to an Expert</LiquidButton>
        </div>
      </section>
    </main>
  );
}
