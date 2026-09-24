import { motion } from 'framer-motion';
import SectionLabel from '../components/SectionLabel';

const PhilosophySection = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: '-100px' }} 
          transition={{ duration: 0.7 }}
          className="font-serif text-5xl md:text-7xl text-center text-white mb-16 md:mb-24"
        >
          Innovation <em className="italic">×</em> Engineering
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: '-100px' }} 
            transition={{ duration: 0.7 }}
            className="rounded-3xl overflow-hidden aspect-[4/5] relative group"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            >
              <source src="/assets/videos/machinery-detail.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/30" />
          </motion.div>

          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: '-100px' }}
            variants={{
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
              hidden: { opacity: 0 }
            }}
            className="flex flex-col"
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}>
              <SectionLabel label="ENGINEERED FOR PERFORMANCE" />
              <p className="mt-4 text-[rgba(255,255,255,0.55)] text-base md:text-lg leading-relaxed font-sans">
                Every EzyTek system is designed around efficiency, durability and operational simplicity. From water pressure to automation cycles, every component is engineered to deliver consistent results.
              </p>
            </motion.div>

            <motion.div 
              variants={{ hidden: { opacity: 0, scaleX: 0 }, visible: { opacity: 1, scaleX: 1, transition: { duration: 0.7 } } }}
              className="h-px bg-white/10 my-10 origin-left" 
            />

            <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}>
              <SectionLabel label="BUILT FOR BUSINESS" />
              <p className="mt-4 text-[rgba(255,255,255,0.55)] text-base md:text-lg leading-relaxed font-sans">
                Whether you are starting your first car wash or scaling a professional automotive facility, our solutions are designed to adapt to your space, workflow and business requirements.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
