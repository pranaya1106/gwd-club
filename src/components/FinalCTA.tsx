import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ParticleNetwork from '@/components/ParticleNetwork';
import MagneticButton from '@/components/MagneticButton';
import Logo from '@/components/Logo';

export default function FinalCTA() {
  const scrollToTop = () => {
    document.querySelector('#hero')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black py-32 px-6">
      <div className="absolute inset-0">
        <ParticleNetwork density={50} />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-red/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-green/5 rounded-full blur-[120px]" />
      </div>

      <div className="absolute inset-0 gwd-grid-bg opacity-30" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Official GWD Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 relative"
        >
          <img 
            src="/gwd-logo.png" 
            alt="GWD" 
            className="w-32 h-auto md:w-40"
          />
          
          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 blur-2xl opacity-30"
            style={{ background: 'radial-gradient(circle, #ff2a2a 0%, #00ff88 50%, transparent 70%)' }}
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-red animate-pulse-red" />
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-ink-300">
            GWD Club · VJIT
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse-green" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-bold text-giant text-white leading-[0.85] tracking-tighter mb-8"
        >
          READY TO<br />
          <span className="text-gradient-red-green">GET WORK</span>
          <br />
          DONE<span className="text-red">?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-12"
        >
          {['LEARN', 'BUILD', 'CONNECT', 'LEAD'].map((word, i) => (
            <span key={word} className="flex items-center gap-2 md:gap-4">
              <span
                className={`font-display font-medium text-sm md:text-lg tracking-[0.15em] ${
                  i % 2 === 0 ? 'text-red' : 'text-green'
                }`}
              >
                {word}
              </span>
              {i < 3 && <span className="text-ink-600 text-xs">●</span>}
            </span>
          ))}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <MagneticButton variant="primary" onClick={scrollToTop}>
            <span>Back to Top</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
