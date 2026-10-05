import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Network } from 'lucide-react';
import { collaborations, type Collaboration } from '@/data/collaborations';
import SectionHeading from '@/components/SectionHeading';

export default function Collaborations() {
  const [selected, setSelectedCollab] = useState<Collaboration | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="collaborations" className="relative py-32 px-6 lg:px-10 bg-black overflow-hidden">
      <div className="absolute inset-0 gwd-grid-bg opacity-15" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red/3 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto">
        <SectionHeading
          label="GWD Ecosystem"
          title={
            <>
              GWD connects students<br />
              <span className="text-gradient-red-green">to the real world.</span>
            </>
          }
          description="Organizations and collaborations that form the GWD ecosystem — connecting students with industry, opportunities, and real-world impact."
        />

        {/* Network visualization */}
        <div
          ref={containerRef}
          className="relative mt-20 h-[500px] md:h-[600px] bg-gwd-black-card/50 border border-ink-800 gwd-clip-corner overflow-hidden"
        >
          {/* SVG connections */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {collaborations.map((collab) => (
              <motion.line
                key={`line-${collab.id}`}
                x1="50%"
                y1="50%"
                x2={`${collab.x}%`}
                y2={`${collab.y}%`}
                stroke={collab.accent === 'red' ? '#ff2a2a' : '#00ff88'}
                strokeWidth="1"
                strokeOpacity="0.2"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.3 }}
              />
            ))}
          </svg>

          {/* Central GWD node */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: 'spring' }}
              className="relative"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gwd-black-card border-2 border-ink-600 flex flex-col items-center justify-center">
                <span className="font-display font-bold text-xl md:text-2xl text-white">GWD</span>
                <span className="font-mono text-[8px] md:text-[10px] tracking-[0.2em] text-ink-400 uppercase mt-1">
                  Ecosystem
                </span>
              </div>
              {/* Pulse ring */}
              <motion.div
                className="absolute inset-0 rounded-full border border-white/20"
                animate={{ scale: [1, 1.4], opacity: [0.5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border border-white/10"
                animate={{ scale: [1, 1.8], opacity: [0.3, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeOut', delay: 0.5 }}
              />
            </motion.div>
          </div>

          {/* Organization nodes */}
          {collaborations.map((collab, i) => (
            <motion.button
              key={collab.id}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.2, type: 'spring' }}
              onClick={() => setSelectedCollab(collab)}
              style={{ left: `${collab.x}%`, top: `${collab.y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-10 group"
            >
              <div
                className={`relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-gwd-black-card border transition-all duration-300 group-hover:scale-110 ${
                  collab.accent === 'red'
                    ? 'border-red/30 group-hover:border-red/60 group-hover:bg-red/5'
                    : 'border-green/30 group-hover:border-green/60 group-hover:bg-green/5'
                } flex items-center justify-center`}
              >
                <span
                  className={`font-display font-bold text-base md:text-lg ${
                    collab.accent === 'red' ? 'text-red' : 'text-green'
                  }`}
                >
                  {collab.name}
                </span>
                {/* Glow */}
                <div
                  className={`absolute inset-0 rounded-full blur-lg opacity-20 transition-opacity group-hover:opacity-40 ${
                    collab.accent === 'red' ? 'bg-red' : 'bg-green'
                  }`}
                />
              </div>
              <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 font-mono text-[9px] tracking-wide text-ink-500 uppercase whitespace-nowrap">
                {collab.name}
              </span>
            </motion.button>
          ))}

          {/* Add more nodes placeholder */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-4 left-4 flex items-center gap-2 text-ink-500"
          >
            <Network size={14} />
            <span className="font-mono text-[10px] tracking-wide uppercase">
              More collaborations to be added
            </span>
          </motion.div>
        </div>
      </div>

      {/* Detail modal */}
      <AnimatePresence>
        {selected && (
          <CollabModal collab={selected} onClose={() => setSelectedCollab(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

function CollabModal({ collab, onClose }: { collab: Collaboration; onClose: () => void }) {
  const accentColor = collab.accent === 'red' ? 'text-red' : 'text-green';
  const accentBorder = collab.accent === 'red' ? 'border-red/30' : 'border-green/30';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg bg-gwd-black-card border border-ink-700 gwd-clip-corner overflow-hidden"
      >
        <div className={`absolute top-0 left-0 right-0 h-32 ${collab.accent === 'red' ? 'bg-red/10' : 'bg-green/10'} blur-[60px] pointer-events-none`} />

        <div className="relative flex items-center justify-between p-4 border-b border-ink-800">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-ink-400">
            Collaboration / {collab.id}
          </span>
          <button onClick={onClose} className="p-1.5 hover:bg-ink-800 rounded transition-colors">
            <X size={18} className="text-ink-400" />
          </button>
        </div>

        <div className="relative p-8">
          <div className={`w-16 h-16 rounded-full border ${accentBorder} flex items-center justify-center mb-4`}>
            <span className={`font-display font-bold text-xl ${accentColor}`}>{collab.name}</span>
          </div>

          <h3 className="font-display font-bold text-2xl text-white mb-2">{collab.name}</h3>
          <span className={`font-mono text-[10px] tracking-[0.2em] uppercase ${accentColor}`}>
            GWD Collaboration Partner
          </span>

          {collab.description ? (
            <p className="mt-6 text-ink-300 leading-relaxed">{collab.description}</p>
          ) : (
            <div className="mt-6 p-4 border border-dashed border-ink-700">
              <span className="font-mono text-xs text-ink-500">
                Collaboration details coming soon.
              </span>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
