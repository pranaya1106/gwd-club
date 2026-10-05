import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, X } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

interface WorkItem {
  id: string;
  title: string;
  category: string;
  video: string;
  accent: 'red' | 'green';
}

const workItems: WorkItem[] = [
  {
    id: '1',
    title: 'Spiderman Registration Reel',
    category: 'Reels',
    video: '/work-spiderman-reel.mp4',
    accent: 'red',
  },
  {
    id: '2',
    title: 'Registration Campaign Reel',
    category: 'Reels',
    video: '/work-reels-registration.mp4',
    accent: 'green',
  },
  {
    id: '3',
    title: 'Reel Ideas Brainstorming',
    category: 'Media',
    video: '/work-explaining-ideas.mp4',
    accent: 'red',
  },
  {
    id: '4',
    title: 'Upcoming Event',
    category: 'Events',
    video: '/work-reel-ideas.jpg',
    accent: 'green',
  },
];

export default function WhatWeCreate() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section id="the-work" className="relative py-32 px-6 lg:px-10 bg-black overflow-hidden">
      <div className="absolute inset-0 gwd-grid-bg opacity-15" />
      <div className="absolute top-1/3 right-0 w-[800px] h-[600px] bg-red/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto">
        <SectionHeading
          label="What We Create"
          title={
            <>
              The <span className="text-gradient-red-green">work.</span>
            </>
          }
          description="Posters, reels, event creatives, social media content, promotional work — GWD members don't just participate. They create."
        />

        {/* Work Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
          {workItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative"
            >
              <div className={`relative aspect-video bg-gwd-black-card border overflow-hidden transition-all duration-500 ${
                item.accent === 'red' 
                  ? 'border-ink-800 hover:border-red/40' 
                  : 'border-ink-800 hover:border-green/40'
              }`}>
                {/* Video Always Playing or Image */}
                {item.video.endsWith('.mp4') ? (
                  <video
                    src={item.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img 
                    src={item.video} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500" />

                {/* Glow on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[40px] ${
                  item.accent === 'red' ? 'bg-red/10' : 'bg-green/10'
                }`} />

                {/* Play button overlay for fullscreen (only for videos) */}
                {item.video.endsWith('.mp4') && (
                  <button
                    onClick={() => setSelectedVideo(item.video)}
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center backdrop-blur-sm transition-all duration-300 ${
                      item.accent === 'red' 
                        ? 'border-red bg-red/20 hover:bg-red/30' 
                        : 'border-green bg-green/20 hover:bg-green/30'
                    }`}>
                      <Play size={24} className="text-white fill-white ml-1" />
                    </div>
                  </button>
                )}

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`w-2 h-2 rounded-full ${item.accent === 'red' ? 'bg-red' : 'bg-green'}`} />
                    <span className={`font-mono text-[10px] tracking-[0.2em] uppercase ${
                      item.accent === 'red' ? 'text-red' : 'text-green'
                    }`}>
                      {item.category}
                    </span>
                  </div>
                  
                  <h3 className="font-display font-bold text-xl text-white">
                    {item.title}
                  </h3>
                </div>

                {/* Corner accent */}
                <div className={`absolute top-0 right-0 w-12 h-12 border-t border-r transition-all duration-500 ${
                  item.accent === 'red' 
                    ? 'border-transparent group-hover:border-red/40' 
                    : 'border-transparent group-hover:border-green/40'
                }`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex items-center gap-3"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-ink-600" />
          <span className="font-mono text-[10px] tracking-wide text-ink-500 uppercase">
            Actual creative work to be added — this is the showcase structure
          </span>
        </motion.div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedVideo(null)}
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-6"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl"
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
            >
              <X size={20} className="text-white" />
            </button>

            <div className="relative aspect-video bg-black border border-white/20">
              <video
                src={selectedVideo}
                controls
                autoPlay
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
