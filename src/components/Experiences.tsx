import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, Building2, ChevronDown, ImageOff } from 'lucide-react';
import { experiences } from '@/data/experiences';
import SectionHeading from '@/components/SectionHeading';

const stages = ['GWD', 'INDUSTRY', 'EXPERIENCE', 'IMPACT'];

export default function Experiences() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="experiences" className="relative py-32 px-6 lg:px-10 bg-gwd-black-soft overflow-hidden">
      <div className="absolute inset-0 gwd-grid-bg opacity-20" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-green/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto">
        <SectionHeading
          label="GWD Experiences"
          title={
            <>
              Industry exposure,<br />
              <span className="text-gradient-red-green">in motion.</span>
            </>
          }
          description="GWD connects students to the real world through industrial visits, company interactions, and hands-on industry exposure. This is the journey from GWD to impact."
        />

        {/* Stage indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 mb-16 flex flex-wrap items-center gap-2 md:gap-4"
        >
          {stages.map((stage, i) => (
            <div key={stage} className="flex items-center gap-2 md:gap-4">
              <span
                className={`font-display font-bold text-sm md:text-base tracking-[0.15em] ${
                  i % 2 === 0 ? 'text-red' : 'text-green'
                }`}
              >
                {stage}
              </span>
              {i < stages.length - 1 && (
                <span className="text-ink-600 text-xs">→</span>
              )}
            </div>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-red/40 via-ink-700 to-green/40 md:-translate-x-px" />

          <div className="space-y-8">
            {experiences.map((exp, i) => {
              const isExpanded = expandedId === exp.id;
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`relative flex ${isLeft ? 'md:justify-start' : 'md:justify-end'}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-10">
                    <motion.span
                      animate={{ scale: isExpanded ? 1.4 : 1 }}
                      className={`block w-3 h-3 rounded-full border-2 border-black ${
                        i % 2 === 0 ? 'bg-red' : 'bg-green'
                      }`}
                    />
                    <span className={`absolute inset-0 rounded-full ${i % 2 === 0 ? 'bg-red' : 'bg-green'} opacity-20 blur-md`} />
                  </div>

                  {/* Card */}
                  <div className={`ml-12 md:ml-0 w-full md:w-[calc(50%-2rem)] ${isLeft ? '' : 'md:text-right'}`}>
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                      className="w-full text-left group p-6 bg-gwd-black-card border border-ink-800 hover:border-ink-600 transition-all duration-300 gwd-clip-corner"
                    >
                      {/* Placeholder content */}
                      {exp.placeholder && (
                        <div className="flex items-center gap-2 mb-3">
                          <span className={`w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-red' : 'bg-green'} opacity-50`} />
                          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-500">
                            Experience details coming soon
                          </span>
                        </div>
                      )}

                      <div className={`flex items-center gap-3 mb-2 ${isLeft ? '' : 'md:justify-end'}`}>
                        <Building2 size={16} className={i % 2 === 0 ? 'text-red' : 'text-green'} />
                        <h3 className="font-display font-semibold text-lg text-white">
                          {exp.company || 'To be announced'}
                        </h3>
                      </div>

                      <div className={`flex flex-wrap items-center gap-4 text-xs text-ink-400 ${isLeft ? '' : 'md:justify-end'}`}>
                        {exp.date && (
                          <span className="flex items-center gap-1">
                            <Calendar size={12} />
                            {exp.date}
                          </span>
                        )}
                        {exp.location && (
                          <span className="flex items-center gap-1">
                            <MapPin size={12} />
                            {exp.location}
                          </span>
                        )}
                        {!exp.date && !exp.location && (
                          <span className="font-mono text-[10px] text-ink-600">
                            Date & location to be added
                          </span>
                        )}
                      </div>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-4 pt-4 border-t border-ink-800">
                              {exp.description ? (
                                <p className="text-ink-300 leading-relaxed text-sm">{exp.description}</p>
                              ) : (
                                <p className="text-ink-500 text-sm font-mono">
                                  Description will be added when details are available.
                                </p>
                              )}

                              {exp.photos.length > 0 ? (
                                <div className="mt-4 grid grid-cols-2 gap-2">
                                  {exp.photos.map((photo, pi) => (
                                    <div key={pi} className="aspect-video bg-gwd-black-elevated border border-ink-800 overflow-hidden">
                                      <img src={photo} alt="" className="w-full h-full object-cover" />
                                    </div>
                                  ))}
                                </div>
                              ) : (
                                <div className="mt-4 grid grid-cols-2 gap-2">
                                  {[0, 1].map((pi) => (
                                    <div key={pi} className="aspect-video bg-gwd-black-elevated border border-dashed border-ink-700 flex items-center justify-center">
                                      <ImageOff size={20} className="text-ink-700" />
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div className={`mt-3 flex items-center gap-1 ${isLeft ? '' : 'md:justify-end'}`}>
                        <span className="font-mono text-[10px] tracking-wide text-ink-500 uppercase">
                          {isExpanded ? 'Collapse' : 'Expand'}
                        </span>
                        <ChevronDown
                          size={14}
                          className={`text-ink-500 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                        />
                      </div>
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
