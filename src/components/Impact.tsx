import { motion } from 'framer-motion';

const journeySteps = [
  { word: 'PEOPLE', description: 'Students who take ownership and drive the ecosystem forward.', accent: 'red' as const },
  { word: 'EXPERIENCES', description: 'Industry exposure, visits, and real-world learning.', accent: 'green' as const },
  { word: 'PROJECTS', description: 'Ideas turned into tangible outputs through collaboration.', accent: 'red' as const },
  { word: 'INDUSTRY', description: 'Connections to organizations and real-world opportunities.', accent: 'green' as const },
  { word: 'IMPACT', description: 'The result of getting work done — growth, skills, and outcomes.', accent: 'red' as const },
];

export default function Impact() {
  return (
    <section className="relative py-32 px-6 lg:px-10 bg-black overflow-hidden">
      <div className="absolute inset-0 gwd-grid-bg opacity-15" />

      {/* Horizontal flow line */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-red/30 via-ink-700 to-green/30" />

      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-red" />
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-red">
              GWD Impact
            </span>
            <span className="w-8 h-px bg-red" />
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl text-white tracking-tight">
            The GWD journey is<br />
            <span className="text-gradient-red-green">a chain reaction.</span>
          </h2>
        </motion.div>

        {/* Journey steps */}
        <div className="flex flex-col gap-0">
          {journeySteps.map((step, i) => (
            <motion.div
              key={step.word}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative flex items-center gap-6 py-8 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse text-right'}`}
            >
              {/* Step number */}
              <div className="flex-shrink-0 relative">
                <div
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-full border-2 flex items-center justify-center ${
                    step.accent === 'red' ? 'border-red/30 bg-red/5' : 'border-green/30 bg-green/5'
                  }`}
                >
                  <span className={`font-display font-bold text-2xl md:text-3xl ${step.accent === 'red' ? 'text-red' : 'text-green'}`}>
                    0{i + 1}
                  </span>
                </div>
                {/* Glow */}
                <div className={`absolute inset-0 rounded-full blur-lg opacity-20 ${step.accent === 'red' ? 'bg-red' : 'bg-green'}`} />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className={`font-display font-bold text-3xl md:text-5xl tracking-tight mb-2 ${step.accent === 'red' ? 'text-red' : 'text-green'}`}>
                  {step.word}
                </h3>
                <p className="text-ink-300 text-base md:text-lg max-w-md leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow to next */}
              {i < journeySteps.length - 1 && (
                <div className={`hidden md:block absolute ${i % 2 === 0 ? 'right-0' : 'left-0'} top-full -translate-y-1/2`}>
                  <span className="text-ink-600 text-2xl">↓</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Final statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gwd-black-card border border-ink-800 gwd-clip-corner">
            <span className="w-2 h-2 rounded-full bg-red animate-pulse-red" />
            <span className="font-display font-bold text-2xl md:text-4xl text-white tracking-tight">
              GET WORK DONE.
            </span>
            <span className="w-2 h-2 rounded-full bg-green animate-pulse-green" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
