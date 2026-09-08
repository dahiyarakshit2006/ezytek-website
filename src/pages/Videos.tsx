import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';
import SectionLabel from '../components/SectionLabel';

const videos = [
  { id: 1, title: 'Automatic Brush Car Wash Plant', category: 'Product Demo', thumbnail: '' },
  { id: 2, title: 'Jet Wash System Installation', category: 'Installation', thumbnail: '' },
  { id: 3, title: 'High Pressure Washer Overview', category: 'Product Demo', thumbnail: '' },
  { id: 4, title: 'Complete Car Wash Setup Process', category: 'Setup Guide', thumbnail: '' },
  { id: 5, title: 'Touchless Automatic Wash in Action', category: 'Product Demo', thumbnail: '' },
  { id: 6, title: 'Customer Testimonial — Punjab', category: 'Testimonial', thumbnail: '' },
  { id: 7, title: 'Underbody Washer Demo', category: 'Product Demo', thumbnail: '' },
  { id: 8, title: 'EzyTek Factory Tour', category: 'Company', thumbnail: '' },
  { id: 9, title: 'Car Wash Business ROI Guide', category: 'Educational', thumbnail: '' },
];

export default function Videos() {
  const [selectedVideo, setSelectedVideo] = useState<typeof videos[0] | null>(null);

  useEffect(() => {
    document.title = 'Videos | EzyTek Clean';
  }, []);

  return (
    <main>
      <section className="min-h-[50vh] flex items-center bg-gradient-to-b from-black to-brand-accent/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-serif text-5xl md:text-7xl text-white">
            See EzyTek<br />
            in <em className="italic">action.</em>
          </h1>
          <p className="text-white/55 mt-6 max-w-xl mx-auto">
            Watch our advanced car wash systems perform and learn more about our engineering excellence.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 mt-8">
        <div 
          className="rounded-3xl overflow-hidden aspect-video relative cursor-pointer group bg-gradient-to-tr from-brand-accent/20 to-black border border-white/10"
          onClick={() => setSelectedVideo({ id: 0, title: 'Featured: EzyTek Automatic Car Wash System', category: 'Featured', thumbnail: '' })}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white/30 font-sans text-xl hidden md:block">Featured: EzyTek Automatic Car Wash System</span>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="liquid-glass rounded-full w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Play className="text-white w-8 h-8 ml-1" fill="white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6">
        <SectionLabel>ALL VIDEOS</SectionLabel>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {videos.map((video) => (
            <motion.div
              key={video.id}
              whileHover={{ y: -4 }}
              className="liquid-glass rounded-2xl overflow-hidden group cursor-pointer flex flex-col"
              onClick={() => setSelectedVideo(video)}
            >
              <div className="aspect-video relative bg-gradient-to-br from-white/5 to-black flex items-center justify-center border-b border-white/10">
                <span className="text-white/20 text-sm px-4 text-center">{video.title}</span>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="liquid-glass rounded-full w-12 h-12 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play className="text-white w-5 h-5 ml-0.5" fill="white" />
                  </div>
                </div>
              </div>
              <div className="p-5 flex-1">
                <h3 className="font-sans text-sm font-medium text-white/90">{video.title}</h3>
                <p className="text-xs text-white/40 mt-2 uppercase tracking-wider">{video.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <button 
              className="absolute top-6 right-6 w-12 h-12 liquid-glass rounded-full flex items-center justify-center text-white hover:bg-white/10 transition"
              onClick={() => setSelectedVideo(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="liquid-glass rounded-3xl aspect-video max-w-5xl w-full mx-4 flex items-center justify-center"
              onClick={e => e.stopPropagation()}
            >
              <span className="text-white/50 text-xl font-sans">Video Player Placeholder: {selectedVideo.title}</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
