import { motion } from 'framer-motion';

const stats = [
  { value: '2012', label: 'Established' },
  { value: '16+', label: 'Equipment Categories' },
  { value: '100%', label: 'Focused on Automation & Cleaning' },
  { value: 'India', label: 'Serving Businesses Nationwide' }
];

const StatsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-black border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
            >
              <div className="font-serif text-display-md md:text-display-lg">{stat.value}</div>
              <div className="text-xs font-sans text-muted uppercase tracking-wider mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
