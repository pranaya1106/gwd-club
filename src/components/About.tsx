import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { pillars } from '@/data/site';
import SectionHeading from '@/components/SectionHeading';

export default function About() {
  const [activePillar, setActivePillar] = useState<number>(0);

  return (
    <section id="about" className="relative py-32 px-6 lg:px-10 bg-gwd-black-soft overflow-hidden">
      <div className="absolute inset-0 gwd-grid-bg opacity-20" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-red/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-green/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left: heading */}
          <div className="lg:col-span-5">
            <SectionHeading
              label="What is GWD?"
              title={
                <>
                  Not a club.<br />
                  <span className="text-gradient-red-green">An ecosystem.</span>
                </>
              }
              description="GWD Club at VJIT is a student-driven platform built around learning, building, connecting, leadership, industry exposure, creative work, events, and execution. It's where students don't just participate — they take ownership and get work done."
            />
          </div>

          {/* Right: interactive pillars */}
          <div className="lg:col-span-7">
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-ink-500 mb-4 block">
              The GWD Cycle
            </span>

            {/* Pillar words — horizontal on desktop */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
              {pillars.map((pillar, i) => {
                const isActive = activePillar === i;
                const accentColor = pillar.accent === 'red' ? 'text-red' : 'text-green';
                const accentBorder = pillar.accent === 'red' ? 'border-red/40' : 'border-green/40';
                const accentBg = pillar.accent === 'red' ? 'bg-red/5' : 'bg-green/5';

                return (
                  <motion.button
                    key={pillar.word}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    onClick={() => setActivePillar(i)}
                    onMouseEnter={() => setActivePillar(i)}
                    className={`group relative p-4 border transition-all duration-300 text-center ${
                      isActive
                        ? `${accentBorder} ${accentBg}`
                        : 'border-ink-800 hover:border-ink-600'
                    }`}
                  >
                    <span
                      className={`font-display font-bold text-xl md:text-2xl tracking-tight transition-colors duration-300 block ${
                        isActive ? accentColor : 'text-ink-500 group-hover:text-ink-200'
                      }`}
                    >
                      {pillar.word}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            {/* Active pillar description */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activePillar}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="relative p-6 md:p-8 bg-gwd-black-card border border-ink-800 gwd-clip-corner overflow-hidden"
              >
                {/* Scan line */}
                <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-r from-transparent via-current to-transparent animate-scan-line" />
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${
                      pillars[activePillar].accent === 'red' ? 'bg-red' : 'bg-green'
                    }`}
                  />
                  <span className="font-mono text-xs tracking-[0.3em] uppercase text-ink-400">
                    {pillars[activePillar].word}
                  </span>
                </div>

                <p className="text-ink-100 text-base md:text-lg leading-relaxed">
                  {pillars[activePillar].description}
                </p>

                {/* Progress dots */}
                <div className="mt-6 flex gap-1.5">
                  {pillars.map((_, i) => (
                    <span
                      key={i}
                      className={`h-1 flex-1 transition-colors duration-300 ${
                        i === activePillar
                          ? pillars[activePillar].accent === 'red' ? 'bg-red' : 'bg-green'
                          : i < activePillar
                            ? 'bg-ink-600'
                            : 'bg-ink-800'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
