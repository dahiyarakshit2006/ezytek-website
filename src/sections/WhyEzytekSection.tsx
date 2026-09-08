import { motion } from 'framer-motion';

const pillars = [
  {
    num: '01',
    title: 'R&D Driven',
    desc: 'We continuously improve our systems through research, testing and real-world operational insights.'
  },
  {
    num: '02',
    title: 'Economical Engineering',
    desc: 'Advanced technology designed to deliver long-term value without unnecessary operational complexity.'
  },
  {
    num: '03',
    title: 'Built for Indian Conditions',
    desc: 'Equipment engineered for demanding commercial environments and real-world operating conditions.'
  },
  {
    num: '04',
    title: 'End-to-End Support',
    desc: 'From choosing the right system to installation and after-sales service.'
  }
];

const WhyEzytekSection = () => {
  return (
    <section className="section-padding bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          className="font-serif text-display-lg text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          Why businesses choose <em className="italic">EzyTek.</em>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.num}
              className="liquid-glass rounded-3xl p-8 md:p-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
            >
              <div className="font-serif text-5xl text-white/10">{pillar.num}</div>
              <h3 className="font-serif text-2xl mt-4">{pillar.title}</h3>
              <p className="text-secondary text-sm md:text-base leading-relaxed mt-3">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyEzytekSection;
