import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';

export default function GwdInAction() {
  return (
    <section id="in-action" className="relative py-32 px-6 lg:px-10 bg-black overflow-hidden">
      <div className="absolute inset-0 gwd-grid-bg opacity-15" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto">
        <SectionHeading
          label="Industry Exposure"
          title={
            <>
              Stepping <span className="text-gradient-red-green">into the real world.</span>
            </>
          }
          description="GWD takes students beyond the classroom and into real-world industry exposure — industrial visits, company interactions, and hands-on learning from the organizations that drive the world forward."
        />

        {/* Industrial Visit Section */}
        <div className="mt-20">
          {/* Main large image with parallax effect */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] md:h-[600px] overflow-hidden border border-ink-800 group"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7 }}
              src="https://res.cloudinary.com/deuej3yvb/image/upload/v1791279022/_MG_8417.jpg"
              alt="Industrial Visit"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            
            {/* Content overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-2 h-2 rounded-full bg-green" />
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-green">
                  Flagship Industry Exposure
                </span>
              </div>
              <h3 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">
                Industrial Visit
              </h3>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red" />
                  <span className="text-ink-300">Date to be announced</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green" />
                  <span className="text-ink-300">Location to be announced</span>
                </div>
              </div>
              <p className="mt-6 text-ink-200 max-w-2xl leading-relaxed">
                GWD Club organizes industrial visits that give students direct exposure to real-world work environments, company culture, and industry operations. The actual visit details will be added here when available.
              </p>
              <button className="mt-6 px-6 py-3 bg-green/10 border border-green/40 text-green hover:bg-green/20 transition-all duration-300 font-mono text-xs tracking-wider uppercase">
                → Visit details & photographs to be added
              </button>
            </div>
          </motion.div>

          {/* Gallery grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[300px] overflow-hidden border border-ink-800 group"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7 }}
                src="https://res.cloudinary.com/deuej3yvb/image/upload/v1791279019/_MG_8531.jpg"
                alt="Industrial Visit - Team Learning"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative h-[300px] overflow-hidden border border-ink-800 group"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7 }}
                src="https://res.cloudinary.com/deuej3yvb/image/upload/v1791279019/_MG_8548.jpg"
                alt="Industrial Visit - Industry Interaction"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
            </motion.div>
          </div>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative h-[300px] overflow-hidden border border-ink-800 group"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7 }}
                src="/industry/visit-3.jpg"
                alt="Industrial Visit - Industry Interaction"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
