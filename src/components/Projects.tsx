import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Code2, Users, Link2, Target, ImageOff } from 'lucide-react';
import { projects, type Project } from '@/data/projects';
import SectionHeading from '@/components/SectionHeading';

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-32 px-6 lg:px-10 bg-black overflow-hidden">
      <div className="absolute inset-0 gwd-grid-bg opacity-15" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-green/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto">
        <SectionHeading
          label="Projects"
          title={
            <>
              Things GWD members<br />
              <span className="text-gradient-red-green">have built.</span>
            </>
          }
          description="From prototypes to real-world projects — GWD members turn ideas into tangible outputs. Explore the showcase."
        />

        {/* Project grid */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <motion.button
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onClick={() => setSelected(project)}
              className="group relative aspect-[4/3] bg-gwd-black-card border border-ink-800 hover:border-ink-600 transition-all duration-300 gwd-clip-corner overflow-hidden"
            >
              {/* Placeholder visual */}
              <div className="absolute inset-0 flex items-center justify-center">
                {project.images.length > 0 ? (
                  <img
                    src={project.images[0]}
                    alt={project.title || ''}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-3">
                    <ImageOff size={32} className="text-ink-700" />
                    <span className="font-mono text-[10px] tracking-wide text-ink-600 uppercase">
                      Project visual coming soon
                    </span>
                  </div>
                )}
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-red' : 'bg-green'}`} />
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-400">
                    Project 0{i + 1}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-xl text-white mb-1">
                  {project.title || 'Project to be announced'}
                </h3>
                {project.description ? (
                  <p className="text-ink-400 text-sm line-clamp-1">{project.description}</p>
                ) : (
                  <p className="text-ink-600 text-sm font-mono">Details coming soon.</p>
                )}

                {/* Tech tags */}
                {project.technologies.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech, ti) => (
                      <span key={ti} className="px-2 py-1 bg-white/5 border border-ink-700 text-ink-300 text-[10px] font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Hover indicator */}
                <div className="mt-3 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className={`font-mono text-[10px] tracking-wide uppercase ${i % 2 === 0 ? 'text-red' : 'text-green'}`}>
                    View Project
                  </span>
                  <span className={i % 2 === 0 ? 'text-red' : 'text-green'}>→</span>
                </div>
              </div>

              {/* Sheen effect */}
              <div className="absolute inset-0 gwd-card-sheen pointer-events-none" />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Project modal */}
      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-gwd-black-card border border-ink-700 gwd-clip-corner"
      >
        <div className="flex items-center justify-between p-4 border-b border-ink-800 sticky top-0 bg-gwd-black-card z-10">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-ink-400">
            Project Showcase
          </span>
          <button onClick={onClose} className="p-1.5 hover:bg-ink-800 rounded transition-colors">
            <X size={18} className="text-ink-400" />
          </button>
        </div>

        <div className="p-8">
          {/* Project image */}
          <div className="aspect-video bg-gwd-black-elevated border border-ink-800 mb-6 flex items-center justify-center">
            {project.images.length > 0 ? (
              <img src={project.images[0]} alt={project.title || ''} className="w-full h-full object-cover" />
            ) : (
              <div className="flex flex-col items-center gap-2">
                <ImageOff size={32} className="text-ink-700" />
                <span className="font-mono text-[10px] text-ink-600 uppercase">Visual coming soon</span>
              </div>
            )}
          </div>

          <h3 className="font-display font-bold text-2xl text-white mb-4">
            {project.title || 'Project to be announced'}
          </h3>

          {project.description ? (
            <p className="text-ink-300 leading-relaxed mb-6">{project.description}</p>
          ) : (
            <div className="p-4 border border-dashed border-ink-700 mb-6">
              <span className="font-mono text-xs text-ink-500">
                Project description coming soon.
              </span>
            </div>
          )}

          {/* Technologies */}
          {project.technologies.length > 0 ? (
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Code2 size={14} className="text-green" />
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-400">
                  Technologies
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="px-3 py-1.5 bg-gwd-black-elevated border border-ink-800 text-ink-200 text-sm font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ) : null}

          {/* Contributors */}
          {project.contributors.length > 0 ? (
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Users size={14} className="text-red" />
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-400">
                  Contributors
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.contributors.map((c, i) => (
                  <span key={i} className="px-3 py-1.5 bg-gwd-black-elevated border border-ink-800 text-ink-200 text-sm">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          ) : null}

          {/* Outcome */}
          {project.outcome ? (
            <div className="p-4 bg-gwd-black-elevated border border-ink-800 gwd-clip-corner mb-6">
              <div className="flex items-center gap-2 mb-2">
                <Target size={14} className="text-green" />
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-400">
                  Outcome
                </span>
              </div>
              <p className="text-ink-200 text-sm leading-relaxed">{project.outcome}</p>
            </div>
          ) : null}

          {/* Link */}
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-green hover:text-green-400 transition-colors"
            >
              <Link2 size={14} />
              <span className="font-mono text-xs uppercase tracking-wide">View Project</span>
            </a>
          ) : null}
        </div>
      </motion.div>
    </motion.div>
  );
}
