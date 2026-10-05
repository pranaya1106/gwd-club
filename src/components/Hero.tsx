import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useRef } from 'react';
import ParticleNetwork from '@/components/ParticleNetwork';
import MagneticButton from '@/components/MagneticButton';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          style={{ filter: 'brightness(0.6)' }}
        >
          <source src="/9.2.MOV" type="video/quicktime" />
          <source src="/hero-background.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay to ensure content is readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 gwd-grid-bg opacity-20 z-0" />

      {/* Radial glows with parallax */}
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-red/5 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-green/5 rounded-full blur-[100px]" />
      </motion.div>

      {/* Content with parallax */}
      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto"
      >
        {/* Identity badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-red animate-pulse-red" />
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-ink-300">
            GWD Club
          </span>
          <span className="w-1 h-1 rounded-full bg-ink-600" />
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-ink-300">
            VJIT
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse-green" />
        </motion.div>

        {/* Official GWD Logo - Main Hero */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-8"
        >
          <motion.img
            src="/gwd-logo.png"
            alt="GWD - Get Work Done"
            className="w-[400px] h-auto md:w-[600px] lg:w-[800px]"
          />
          
          {/* Animated glow */}
          <motion.div
            className="absolute inset-0 blur-3xl opacity-30 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #ff2a2a 0%, #00ff88 50%, transparent 70%)' }}
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>

        {/* Supporting message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 3.1 }}
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
        </motion.div>

        {/* Single CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 3.3 }}
        >
          <MagneticButton variant="primary" onClick={scrollToAbout}>
            <span>Explore GWD</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-ink-500">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={16} className="text-ink-500" />
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
