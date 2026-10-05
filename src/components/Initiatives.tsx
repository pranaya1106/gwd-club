import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, X, Users } from 'lucide-react';
import { initiatives, statusConfig, type Initiative } from '@/data/initiatives';
import SectionHeading from '@/components/SectionHeading';

export default function Initiatives() {
  const [selected, setSelected] = useState<Initiative | null>(null);
  const statuses: Initiative['status'][] = ['now', 'in-progress', 'upcoming', 'completed'];

  return (
    <section id="initiatives" className="relative py-32 px-6 lg:px-10 bg-gwd-black-soft overflow-hidden">
      <div className="absolute inset-0 gwd-grid-bg opacity-20" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-green/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto">
        <SectionHeading
          label="Currently in Motion"
          title={
            <>
              What's happening<br />
              <span className="text-white">at </span>
              <span className="text-gradient-red-green">GWD</span>
              <span className="text-white"> right now.</span>
            </>
          }
          description="A live view of the club's current initiatives, activities, and work — from active projects to upcoming plans."
        />

        {/* Status filter bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 mb-8 flex flex-wrap items-center gap-3 p-3 bg-gwd-black-card border border-ink-800 gwd-clip-corner"
        >
          <div className="flex items-center gap-2 px-2">
            <Activity size={14} className="text-green" />
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-400">
              Command Center
            </span>
          </div>
          <div className="h-4 w-px bg-ink-700" />
          <div className="flex flex-wrap gap-2">
            {statuses.map((status) => {
              const config = statusConfig[status];
              const count = initiatives.filter((i) => i.status === status).length;
              return (
                <div
                  key={status}
                  className="flex items-center gap-2 px-3 py-1.5 bg-gwd-black-elevated border border-ink-800"
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${config.dotClass}`} />
                  <span className={`font-mono text-[10px] tracking-wide uppercase ${config.color}`}>
                    {config.label}
                  </span>
                  <span className="font-mono text-[10px] text-ink-600">{count}</span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Initiative grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {initiatives.map((init, i) => {
            const config = statusConfig[init.status];
            return (
              <motion.button
                key={init.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                onClick={() => setSelected(init)}
                className="group relative p-6 bg-gwd-black-card border border-ink-800 hover:border-ink-600 transition-all duration-300 gwd-clip-corner text-left overflow-hidden"
              >
                {/* Animated border glow */}
                {(init.status === 'now' || init.status === 'in-progress') && (
                  <div className={`absolute top-0 left-0 h-px w-full ${init.status === 'now' ? 'bg-green/40' : 'bg-red/40'}`}>
                    <div className={`h-full ${init.status === 'now' ? 'bg-green' : 'bg-red'} animate-scan-line`} style={{ width: '30%' }} />
                  </div>
                )}

                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${config.dotClass}`} />
                    <span className={`font-mono text-[10px] tracking-[0.2em] uppercase ${config.color}`}>
                      {config.label}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-ink-600">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="font-display font-semibold text-lg text-white mb-2">
                  {init.title || 'Initiative to be announced'}
                </h3>

                {init.description ? (
                  <p className="text-ink-400 text-sm leading-relaxed line-clamp-2">
                    {init.description}
                  </p>
                ) : (
                  <p className="text-ink-600 text-sm font-mono">
                    Details coming soon.
                  </p>
                )}

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {init.contributors.length > 0 ? (
                      <span className="flex items-center gap-1 text-ink-500 text-xs">
                        <Users size={12} />
                        {init.contributors.length} contributors
                      </span>
                    ) : (
                      <span className="font-mono text-[10px] text-ink-600">
                        Contributors to be added
                      </span>
                    )}
                  </div>
                  <span className={`text-xs ${config.color} opacity-0 group-hover:opacity-100 transition-opacity`}>
                    View →
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Detail modal */}
      <AnimatePresence>
        {selected && (
          <InitiativeModal initiative={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

function InitiativeModal({ initiative, onClose }: { initiative: Initiative; onClose: () => void }) {
  const config = statusConfig[initiative.status];

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
        <div className="flex items-center justify-between p-4 border-b border-ink-800">
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${config.dotClass}`} />
            <span className={`font-mono text-[10px] tracking-[0.3em] uppercase ${config.color}`}>
              {config.label}
            </span>
          </div>
          <button onClick={onClose} className="p-1.5 hover:bg-ink-800 rounded transition-colors">
            <X size={18} className="text-ink-400" />
          </button>
        </div>

        <div className="p-8">
          <h3 className="font-display font-bold text-2xl text-white mb-4">
            {initiative.title || 'Initiative to be announced'}
          </h3>

          {initiative.description ? (
            <p className="text-ink-300 leading-relaxed">{initiative.description}</p>
          ) : (
            <div className="p-4 border border-dashed border-ink-700">
              <span className="font-mono text-xs text-ink-500">
                Initiative details coming soon.
              </span>
            </div>
          )}

          {initiative.contributors.length > 0 && (
            <div className="mt-6 pt-6 border-t border-ink-800">
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-400 mb-3 block">
                Contributors
              </span>
              <div className="flex flex-wrap gap-2">
                {initiative.contributors.map((c, i) => (
                  <span key={i} className="px-3 py-1.5 bg-gwd-black-elevated border border-ink-800 text-ink-200 text-sm">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
