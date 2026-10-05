import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import { initiatives } from '@/data/initiatives';

export default function GwdNow() {
  // Only show initiatives that have actual content
  const activeInitiatives = initiatives.filter((i) => i.title !== null);

  return (
    <section id="gwd-now" className="relative py-32 px-6 lg:px-10 bg-gwd-black-soft overflow-hidden">
      <div className="absolute inset-0 gwd-grid-bg opacity-15" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-green/3 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: heading */}
          <div className="lg:col-span-5">
            <SectionHeading
              label="GWD // Now"
              title={
                <>
                  What's happening<br />
                  <span className="text-gradient-red-green">right now.</span>
                </>
              }
              description="A live view of current GWD activities, projects, and work in progress."
            />
          </div>

          {/* Right: content */}
          <div className="lg:col-span-7">
            {activeInitiatives.length > 0 ? (
              <div className="space-y-3">
                {activeInitiatives.map((init, i) => (
                  <motion.div
                    key={init.id}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="relative p-6 bg-gwd-black-card border border-ink-800 gwd-clip-corner group hover:border-ink-600 transition-colors duration-300"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <motion.span
                        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className={`w-2 h-2 rounded-full ${init.status === 'now' ? 'bg-green' : 'bg-red'}`}
                      />
                      <span className={`font-mono text-[10px] tracking-[0.2em] uppercase ${init.status === 'now' ? 'text-green' : 'text-red'}`}>
                        {init.status === 'now' ? 'NOW' : 'IN PROGRESS'}
                      </span>
                    </div>
                    <h3 className="font-display font-semibold text-lg text-white mb-2">{init.title}</h3>
                    {init.description && <p className="text-ink-400 text-sm leading-relaxed">{init.description}</p>}
                  </motion.div>
                ))}
              </div>
            ) : (
              /* Elegant minimal empty state — no repeated placeholder cards */
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative p-12 bg-gwd-black-card/50 border border-dashed border-ink-700 gwd-clip-corner"
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse-green" />
                    <span className="w-1.5 h-1.5 rounded-full bg-red animate-pulse-red" />
                  </div>
                  <span className="font-mono text-xs tracking-[0.2em] uppercase text-ink-400">
                    Current activities will appear here
                  </span>
                  <span className="font-mono text-[10px] tracking-wide text-ink-600">
                    GWD is always in motion — content updates coming soon
                  </span>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
