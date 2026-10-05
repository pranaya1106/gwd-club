import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';

export default function OrgMap() {
  return (
    <section id="org-map" className="relative py-32 px-6 lg:px-10 bg-gwd-black-soft overflow-hidden">
      <div className="absolute inset-0 gwd-grid-bg opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-green/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <SectionHeading
          label="Structure"
          title={
            <>
              The GWD <span className="text-gradient-red-green">ecosystem.</span>
            </>
          }
          description="GWD Global consists of two main branches: GWD Sports and GWD Club. GWD Club at VJIT is where students learn, build, connect, and lead."
        />

        {/* Ecosystem Visual */}
        <div className="mt-20 relative">
          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
            {/* Line from Global to Sports */}
            <motion.line
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.3 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              x1="50%"
              y1="25%"
              x2="30%"
              y2="65%"
              stroke="#ff2a2a"
              strokeWidth="2"
              strokeDasharray="8 8"
            />
            {/* Line from Global to Club */}
            <motion.line
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.3 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              x1="50%"
              y1="25%"
              x2="70%"
              y2="65%"
              stroke="#00ff88"
              strokeWidth="2"
              strokeDasharray="8 8"
            />
          </svg>

          {/* Grid Container */}
          <div className="relative" style={{ zIndex: 2 }}>
            {/* Top: GWD Global */}
            <div className="flex justify-center mb-32">
              <motion.div
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="group relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-br from-red/20 via-green/20 to-red/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative bg-gwd-black-card border-2 border-ink-700 hover:border-ink-600 transition-all duration-500 p-12 min-w-[320px]">
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-green" />
                  <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-red" />
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-red" />
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-green" />
                  
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-red animate-pulse" />
                    <span className="w-2 h-2 rounded-full bg-green animate-pulse" style={{ animationDelay: '0.5s' }} />
                  </div>
                  <h3 className="font-display font-bold text-4xl text-center text-white tracking-tight">
                    GWD GLOBAL
                  </h3>
                  <p className="text-center text-ink-400 text-sm mt-3 font-mono tracking-wide">
                    THE ROOT ECOSYSTEM
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Bottom: Two Branches */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
              {/* GWD Sports */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="group relative"
              >
                <div className="absolute -inset-4 bg-red/10 rounded-lg blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative bg-gwd-black-elevated border-2 border-red/30 hover:border-red/60 transition-all duration-500 p-10">
                  {/* Top accent line */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-red to-transparent" />
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 border-2 border-red rotate-45" />
                    <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-red">
                      Branch 01
                    </span>
                  </div>
                  
                  <h3 className="font-display font-bold text-3xl text-white mb-3 tracking-tight">
                    GWD SPORTS
                  </h3>
                  
                  <p className="text-ink-300 text-sm leading-relaxed">
                    The sports division of the GWD ecosystem, focused on athletic excellence and competitive sports programs.
                  </p>

                  {/* Bottom corner accent */}
                  <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-red/40" />
                </div>
              </motion.div>

              {/* GWD Club VJIT */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="group relative"
              >
                <div className="absolute -inset-4 bg-green/10 rounded-lg blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative bg-gwd-black-elevated border-2 border-green/30 hover:border-green/60 transition-all duration-500 p-10">
                  {/* Top accent line */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-green to-transparent" />
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 border-2 border-green rotate-45" />
                    <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-green">
                      Branch 02
                    </span>
                  </div>
                  
                  <h3 className="font-display font-bold text-3xl text-white mb-3 tracking-tight">
                    GWD CLUB
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-green text-sm">→</span>
                    <span className="font-mono text-xs text-ink-500 tracking-wider">VJIT</span>
                  </div>
                  
                  <p className="text-ink-300 text-sm leading-relaxed">
                    The student chapter at VJIT where members learn, build, connect, and lead through real-world projects and industry collaboration.
                  </p>

                  {/* Bottom corner accent */}
                  <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-green/40" />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Legend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-center justify-center gap-8 mt-16"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white" />
              <span className="font-mono text-xs text-ink-500 tracking-wider">GWD GLOBAL</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red" />
              <span className="font-mono text-xs text-ink-500 tracking-wider">GWD SPORTS</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green" />
              <span className="font-mono text-xs text-ink-500 tracking-wider">GWD CLUB (VJIT)</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
