import { motion } from 'framer-motion';
import SectionLabel from '../components/SectionLabel';

const AboutSection = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel label="ABOUT EZYTEK" />
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: '-100px' }} 
          transition={{ duration: 0.7 }}
          className="mt-6 font-serif text-5xl md:text-7xl text-white leading-[1.1]"
        >
          <div className="block">Building cleaner systems</div>
          <div className="block">for a world that</div>
          <div className="block"><em className="italic">never stops moving.</em></div>
        </motion.h2>

        <div className="mt-12 md:mt-16 grid md:grid-cols-2 gap-8 md:gap-16">
          <motion.p 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: '-100px' }} 
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[rgba(255,255,255,0.55)] text-base md:text-lg leading-relaxed font-sans"
          >
            EzyTek Clean has been building advanced car wash and professional cleaning systems since 2012. As a leading automatic car wash manufacturer in India, the company combines research, engineering and practical industry experience to create reliable systems for businesses of every scale.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: '-100px' }} 
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[rgba(255,255,255,0.55)] text-base md:text-lg leading-relaxed font-sans"
          >
            From high-pressure washers and vacuum systems to fully automated car wash plants, every product is designed with a focus on efficiency, durability and long-term performance.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
