import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function IntroLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[10000] bg-black flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* Grid */}
          <div className="absolute inset-0 gwd-grid-bg opacity-20" />

          <div className="relative flex flex-col items-center gap-8">
            {/* Official GWD Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <motion.img
                src="/gwd-logo.png"
                alt="GWD Logo"
                className="w-64 h-auto md:w-80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              />
              
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 blur-2xl opacity-20"
                style={{ background: 'radial-gradient(circle, #ff2a2a 0%, transparent 70%)' }}
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            {/* Loading bar */}
            <div className="w-64 h-px bg-ink-700 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-red to-green"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.8, ease: 'easeInOut' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
