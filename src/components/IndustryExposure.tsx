import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import SectionHeading from '@/components/SectionHeading';

export default function IndustryExposure() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['20%', '-20%']);

  return (
    <section id="industry" ref={ref} className="relative py-32 px-6 lg:px-10 bg-gwd-black-soft overflow-hidden">
      <div className="absolute inset-0 gwd-grid-bg opacity-15" />

      <div className="relative z-10 max-w-[1400px] mx-auto">
        <SectionHeading
          label="GWD × Industry"
          title={
            <>
              Beyond the classroom.<br />
              <span className="text-gradient-red-green">Into the real world.</span>
            </>
          }
          description="GWD takes students beyond the classroom and into real-world industry exposure — industrial visits, company interactions, and hands-on learning from the organizations that drive the world forward."
        />

        {/* Flagship experience — single cinematic feature */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Large image area */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[4/3] md:aspect-[16/10] bg-gwd-black-card border border-ink-800 overflow-hidden">
              {/* Main industrial visit photo */}
              <motion.div style={{ y: imageY }} className="absolute inset-0">
                <img 
                  src="/industry/visit-1.jpg" 
                  alt="GWD Industrial Visit" 
                  className="w-full h-full object-cover" 
                />
              </motion.div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-red/30" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-green/30" />

              {/* Scan line */}
              <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
                <div className="h-full w-full bg-gradient-to-r from-transparent via-red/40 to-transparent animate-scan-line" />
              </div>
            </div>

            {/* Image gallery - 2 more photos */}
            <div className="grid grid-cols-2 gap-3 mt-3">
              <div className="relative aspect-video bg-gwd-black-card border border-ink-800 overflow-hidden">
                <img 
                  src="/industry/visit-2.jpg" 
                  alt="GWD Industrial Visit" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="relative aspect-video bg-gwd-black-card border border-ink-800 overflow-hidden">
                <img 
                  src="/industry/visit-3.jpg" 
                  alt="GWD Industrial Visit" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                />
              </div>
            </div>
          </div>

          {/* Text area */}
          <motion.div style={{ y: textY }} className="lg:col-span-5">
            {/* Event title slot */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-red animate-pulse-red" />
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-ink-400">
                Flagship Industry Exposure
              </span>
            </div>

            <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
              {/* Replace with real visit title when provided */}
              Industrial Visit
            </h3>

            {/* Date & location slots */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center gap-2 text-ink-400">
                <Calendar size={14} className="text-red" />
                <span className="font-mono text-sm">Date to be announced</span>
              </div>
              <div className="flex items-center gap-2 text-ink-400">
                <MapPin size={14} className="text-green" />
                <span className="font-mono text-sm">Location to be announced</span>
              </div>
            </div>

            {/* Description slot */}
            <p className="text-ink-300 leading-relaxed mb-8">
              GWD Club organizes industrial visits that give students direct exposure to real-world
              work environments, company culture, and industry operations. The actual visit details
              will be added here when available.
            </p>

            {/* Editable fields indicator */}
            <div className="p-4 border border-dashed border-ink-700 flex items-center gap-3">
              <ArrowRight size={14} className="text-ink-500" />
              <span className="font-mono text-[10px] tracking-wide text-ink-500 uppercase">
                Visit details & photographs to be added
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
