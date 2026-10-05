import { motion } from 'framer-motion';
import { roadmapItems } from '@/data/roadmap';
import SectionHeading from '@/components/SectionHeading';

const categoryConfig = {
  EVENTS: { accent: 'red' as const, color: 'text-red' },
  INDUSTRY: { accent: 'green' as const, color: 'text-green' },
  PROJECTS: { accent: 'red' as const, color: 'text-red' },
  EXPERIENCES: { accent: 'green' as const, color: 'text-green' },
};

export default function WhatsNext() {
  const hasContent = roadmapItems.some((item) => item.title !== null);

  return (
    <section id="whats-next" className="relative py-32 px-6 lg:px-10 bg-black overflow-hidden">
      <div className="absolute inset-0 gwd-grid-bg opacity-15" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-red/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto">
        <SectionHeading
          label="What's Next"
          title={
            <>
              The future<br />
              <span className="text-gradient-red-green">direction of GWD.</span>
            </>
          }
          description="Where GWD is headed — upcoming events, industry connections, projects, and experiences in the pipeline."
        />

        {/* Horizontal roadmap */}
        <div className="mt-20 relative">
          {/* Horizontal path line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-red/30 via-ink-700 to-green/30 hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
            {roadmapItems.map((item, i) => {
              const config = categoryConfig[item.category];
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="relative"
                >
                  {/* Node dot on the path */}
                  <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <motion.span
                      animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                      className={`w-3 h-3 rounded-full ${config.accent === 'red' ? 'bg-red' : 'bg-green'}`}
                    />
                  </div>

                  {/* Content card */}
                  <div className={`relative p-6 bg-gwd-black-card border transition-colors duration-300 ${
                    i % 2 === 0 ? 'md:mt-20' : 'md:mb-20'
                  } ${config.accent === 'red' ? 'border-red/20' : 'border-green/20'} hover:border-ink-600`}>
                    {/* Category */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`w-1.5 h-1.5 rounded-full ${config.accent === 'red' ? 'bg-red' : 'bg-green'}`} />
                      <span className={`font-mono text-[10px] tracking-[0.2em] uppercase ${config.color}`}>
                        {item.category}
                      </span>
                    </div>

                    {/* Title or minimal state */}
                    {item.title ? (
                      <h3 className="font-display font-semibold text-base text-white mb-2">{item.title}</h3>
                    ) : (
                      <h3 className="font-display font-medium text-base text-ink-500 mb-2">
                        To be announced
                      </h3>
                    )}

                    {item.description ? (
                      <p className="text-ink-400 text-sm leading-relaxed">{item.description}</p>
                    ) : (
                      <p className="text-ink-600 text-xs font-mono">
                        Details coming soon
                      </p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Minimal note when no content */}
        {!hasContent && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex items-center justify-center gap-3"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green" />
            <span className="font-mono text-[10px] tracking-wide text-ink-500 uppercase">
              Upcoming GWD plans will be mapped here
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-red" />
          </motion.div>
        )}
      </div>
    </section>
  );
}
