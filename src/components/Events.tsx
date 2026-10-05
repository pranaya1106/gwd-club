import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, ArrowRight } from 'lucide-react';
import { events, type GwdEvent } from '@/data/events';
import SectionHeading from '@/components/SectionHeading';

export default function Events() {
  const [selected, setSelected] = useState<GwdEvent | null>(null);

  return (
    <section id="events" className="relative py-32 px-6 lg:px-10 bg-gwd-black-soft overflow-hidden">
      <div className="absolute inset-0 gwd-grid-bg opacity-20" />
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-red/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto">
        <SectionHeading
          label="Upcoming Events"
          title={
            <>
              What's next<br />
              <span className="text-gradient-red-green">on the GWD calendar.</span>
            </>
          }
          description="Workshops, sessions, industry visits, and community events. Stay in the loop with what GWD has coming up."
        />

        {/* Event cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-4">
          {events.map((event, i) => (
            <motion.button
              key={event.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onClick={() => setSelected(event)}
              className="group relative p-6 bg-gwd-black-card border border-ink-800 hover:border-ink-600 transition-all duration-300 gwd-clip-corner text-left overflow-hidden"
            >
              {/* Status indicator */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${
                    event.status === 'live' ? 'bg-red animate-pulse-red' :
                    event.status === 'upcoming' ? 'bg-green' : 'bg-ink-600'
                  }`} />
                  <span className={`font-mono text-[10px] tracking-[0.2em] uppercase ${
                    event.status === 'live' ? 'text-red' :
                    event.status === 'upcoming' ? 'text-green' : 'text-ink-500'
                  }`}>
                    {event.status === 'live' ? 'LIVE' : event.status === 'upcoming' ? 'UPCOMING' : 'COMPLETED'}
                  </span>
                </div>
                <span className="font-mono text-[10px] text-ink-600">
                  0{i + 1}
                </span>
              </div>

              {/* Date block */}
              <div className="mb-4">
                {event.date ? (
                  <div className="flex items-center gap-2 text-ink-300">
                    <Calendar size={14} className={i % 2 === 0 ? 'text-red' : 'text-green'} />
                    <span className="font-mono text-sm">{event.date}</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-ink-600">
                    <Calendar size={14} />
                    <span className="font-mono text-xs">Date to be announced</span>
                  </div>
                )}
              </div>

              {/* Title */}
              <h3 className="font-display font-semibold text-lg text-white mb-2 leading-tight">
                {event.title || 'Event to be announced'}
              </h3>

              {/* Description */}
              {event.description ? (
                <p className="text-ink-400 text-sm leading-relaxed line-clamp-2">
                  {event.description}
                </p>
              ) : (
                <p className="text-ink-600 text-sm font-mono">
                  Event details coming soon.
                </p>
              )}

              {/* Footer */}
              <div className="mt-6 pt-4 border-t border-ink-800 flex items-center justify-between">
                {event.registrationUrl ? (
                  <span className="flex items-center gap-1 text-green text-xs font-mono uppercase tracking-wide">
                    Register <ArrowRight size={12} />
                  </span>
                ) : (
                  <span className="font-mono text-[10px] text-ink-600 uppercase tracking-wide">
                    Registration coming soon
                  </span>
                )}
                <span className={`text-xs ${i % 2 === 0 ? 'text-red' : 'text-green'} opacity-0 group-hover:opacity-100 transition-opacity`}>
                  Expand →
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Event modal */}
      <AnimatePresence>
        {selected && (
          <EventModal event={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

function EventModal({ event, onClose }: { event: GwdEvent; onClose: () => void }) {
  const [countdown, setCountdown] = useState<{ days: number; hours: number; minutes: number } | null>(null);

  useEffect(() => {
    if (!event.date) return;
    const target = new Date(event.date);
    if (isNaN(target.getTime())) return;

    const update = () => {
      const diff = target.getTime() - Date.now();
      if (diff <= 0) {
        setCountdown(null);
        return;
      }
      setCountdown({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      });
    };

    update();
    const interval = setInterval(update, 60000);
    return () => clearInterval(interval);
  }, [event.date]);

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
            <span className={`w-2 h-2 rounded-full ${
              event.status === 'live' ? 'bg-red animate-pulse-red' :
              event.status === 'upcoming' ? 'bg-green' : 'bg-ink-600'
            }`} />
            <span className={`font-mono text-[10px] tracking-[0.3em] uppercase ${
              event.status === 'live' ? 'text-red' :
              event.status === 'upcoming' ? 'text-green' : 'text-ink-500'
            }`}>
              {event.status === 'live' ? 'LIVE NOW' : event.status === 'upcoming' ? 'UPCOMING' : 'COMPLETED'}
            </span>
          </div>
          <button onClick={onClose} className="p-1.5 hover:bg-ink-800 rounded transition-colors">
            <X size={18} className="text-ink-400" />
          </button>
        </div>

        <div className="p-8">
          {/* Date */}
          {event.date && (
            <div className="flex items-center gap-2 mb-4">
              <Calendar size={14} className="text-green" />
              <span className="font-mono text-sm text-ink-200">{event.date}</span>
            </div>
          )}

          <h3 className="font-display font-bold text-2xl text-white mb-4">
            {event.title || 'Event to be announced'}
          </h3>

          {event.description ? (
            <p className="text-ink-300 leading-relaxed mb-6">{event.description}</p>
          ) : (
            <div className="p-4 border border-dashed border-ink-700 mb-6">
              <span className="font-mono text-xs text-ink-500">
                Event details coming soon.
              </span>
            </div>
          )}

          {/* Countdown */}
          {countdown && (
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Clock size={14} className="text-red" />
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-400">
                  Countdown
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: 'Days', value: countdown.days },
                  { label: 'Hours', value: countdown.hours },
                  { label: 'Minutes', value: countdown.minutes },
                ].map((item) => (
                  <div key={item.label} className="p-3 bg-gwd-black-elevated border border-ink-800 text-center">
                    <div className="font-display font-bold text-2xl text-white">
                      {String(item.value).padStart(2, '0')}
                    </div>
                    <div className="font-mono text-[9px] tracking-wide text-ink-500 uppercase mt-1">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Registration */}
          {event.registrationUrl ? (
            <a
              href={event.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 bg-red text-white font-mono text-xs tracking-wide uppercase hover:bg-red-400 transition-colors gwd-clip-tag"
            >
              Register Now <ArrowRight size={14} />
            </a>
          ) : (
            <div className="flex items-center justify-center gap-2 w-full py-3 border border-dashed border-ink-700">
              <span className="font-mono text-xs text-ink-500 uppercase tracking-wide">
                Registration coming soon
              </span>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
