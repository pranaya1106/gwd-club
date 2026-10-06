import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Briefcase, Users } from 'lucide-react';
import { people, categoryLabels, type Person, type PersonCategory } from '@/data/people';
import SectionHeading from '@/components/SectionHeading';

const categories: PersonCategory[] = ['founder', 'leadership', 'lead'];

export default function People() {
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
    el.addEventListener('mousemove', onMove);
    return () => el.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section id="people" className="relative py-32 px-6 lg:px-10 bg-gwd-black-soft overflow-hidden">
      <div className="absolute inset-0 gwd-grid-bg opacity-15" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-green/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto">
        <SectionHeading
          label="Who Runs It"
          title={
            <>
              The people who<br />
              <span className="text-gradient-red-green">make GWD happen.</span>
            </>
          }
          description="Founders, leadership, and club leads — each person is a node in the GWD ecosystem. Select anyone to open their profile."
        />

        {/* Interactive constellation */}
        <div ref={containerRef} className="relative mt-20 min-h-[500px]">
          {/* SVG connection lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
            {people.map((person, i) => {
              const otherPeople = people.filter((p) => p.category === person.category && p.id !== person.id);
              return otherPeople.map((other) => {
                const p1 = getNodePosition(i, people.length);
                const p2 = getNodePosition(people.indexOf(other), people.length);
                const isHighlighted = hoveredId === person.id || hoveredId === other.id;
                return (
                  <motion.line
                    key={`${person.id}-${other.id}`}
                    x1={`${p1.x}%`}
                    y1={`${p1.y}%`}
                    x2={`${p2.x}%`}
                    y2={`${p2.y}%`}
                    stroke={person.accent === 'red' ? '#ff2a2a' : '#00ff88'}
                    strokeWidth="0.5"
                    strokeOpacity={isHighlighted ? 0.3 : 0.08}
                    transition={{ duration: 0.3 }}
                  />
                );
              });
            })}
          </svg>

          {/* Category sections */}
          <div className="relative space-y-16" style={{ zIndex: 2 }}>
            {categories.map((category) => {
              const categoryPeople = people.filter((p) => p.category === category);
              if (categoryPeople.length === 0) return null;
              const isLead = category === 'lead';

              return (
                <div key={category}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-4 mb-8"
                  >
                    <span className="font-mono text-xs tracking-[0.3em] uppercase text-ink-500">
                      {categoryLabels[category]}
                    </span>
                    <div className="flex-1 h-px bg-gradient-to-r from-ink-800 to-transparent" />
                    <span className="font-mono text-xs text-ink-600">
                      {categoryPeople.length}
                    </span>
                  </motion.div>

                  <div className={`grid gap-3 ${isLead ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6' : 'grid-cols-2 md:grid-cols-3'}`}>
                    {categoryPeople.map((person, i) => (
                      <motion.button
                        key={person.id}
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: '-30px' }}
                        transition={{ duration: 0.5, delay: i * 0.06, type: 'spring' }}
                        onClick={() => setSelectedPerson(person)}
                        onMouseEnter={() => setHoveredId(person.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        className="group relative"
                        data-cursor="pointer"
                      >
                        {/* Depth effect on hover */}
                        <motion.div
                          animate={{
                            scale: hoveredId === person.id ? 1.05 : 1,
                            zIndex: hoveredId === person.id ? 10 : 1,
                          }}
                          className={`relative ${isLead ? 'min-h-[200px]' : 'min-h-[280px]'} bg-gwd-black-card border transition-colors duration-300 flex flex-col items-center justify-start p-4 ${
                            hoveredId === person.id
                              ? person.accent === 'red' ? 'border-red/40' : 'border-green/40'
                              : 'border-ink-800'
                          }`}
                        >
                          {/* Glow on hover */}
                          <div
                            className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[40px] ${
                              person.accent === 'red' ? 'bg-red/10' : 'bg-green/10'
                            }`}
                          />

                          {/* Avatar - Larger */}
                          <div className="relative mb-3 w-full">
                            {person.photoUrl ? (
                              <div className={`w-full aspect-square rounded-lg overflow-hidden border-2 ${person.accent === 'red' ? 'border-red/40' : 'border-green/40'}`}>
                                <img src={person.photoUrl} alt={person.name} className="w-full h-full object-cover" />
                              </div>
                            ) : (
                              <div
                                className={`w-full aspect-square rounded-lg flex items-center justify-center border-2 transition-all duration-300 ${
                                  person.accent === 'red'
                                    ? 'border-red/30 bg-red/5 group-hover:border-red/60'
                                    : 'border-green/30 bg-green/5 group-hover:border-green/60'
                                }`}
                              >
                                <span className={`font-display font-bold text-3xl ${person.accent === 'red' ? 'text-red' : 'text-green'}`}>
                                  {person.initials}
                                </span>
                              </div>
                            )}
                          </div>

                          {/* Name - Below image */}
                          <div className="text-center mt-2">
                            <h3 className="font-display font-semibold text-sm text-white leading-tight mb-1">
                              {person.name}
                            </h3>

                            {/* Role */}
                            <p className={`font-mono text-[9px] tracking-wide uppercase ${person.accent === 'red' ? 'text-red/70' : 'text-green/70'}`}>
                              {person.role}
                            </p>
                          </div>

                          {/* Hover arrow */}
                          <motion.div
                            animate={{ opacity: hoveredId === person.id ? 1 : 0, y: hoveredId === person.id ? 0 : 5 }}
                            className="mt-2"
                          >
                            <span className={`text-xs ${person.accent === 'red' ? 'text-red' : 'text-green'}`}>→</span>
                          </motion.div>
                        </motion.div>
                      </motion.button>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Teams Section - After all categories */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="font-mono text-xs tracking-[0.3em] uppercase text-ink-500">
                  Our Teams
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-ink-800 to-transparent" />
              </div>

              {/* Team Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: 'Event Management Team', lead: 'Bhavya Koduri', image: 'https://res.cloudinary.com/deuej3yvb/image/upload/v1791279017/WhatsApp_Image_2026-10-05_at_18.23.53.jpg', accent: 'red' },
                  { name: 'Marketing Team', lead: 'Anvita Reddy', image: 'https://res.cloudinary.com/deuej3yvb/image/upload/v1791279017/WhatsApp_Image_2026-10-05_at_18.23.53_2.jpg', accent: 'green' },
                  { name: 'Creative Team', lead: 'Nishta Gaur', image: 'https://res.cloudinary.com/deuej3yvb/image/upload/v1791279017/WhatsApp_Image_2026-10-05_at_18.23.54.jpg', accent: 'red' },
                  { name: 'PR Team', lead: 'Tuba Azeem', image: 'https://res.cloudinary.com/deuej3yvb/image/upload/v1791279017/WhatsApp_Image_2026-10-05_at_18.23.53_1.jpg', accent: 'green' },
                ].map((team, i) => (
                  <motion.div
                    key={team.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="group relative"
                  >
                    <div className={`relative aspect-[16/10] bg-gwd-black-card border overflow-hidden transition-all duration-500 ${
                      team.accent === 'red' 
                        ? 'border-ink-800 hover:border-red/40' 
                        : 'border-ink-800 hover:border-green/40'
                    }`}>
                      {/* Team Photo */}
                      <img 
                        src={team.image} 
                        alt={team.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                      
                      {/* Glow on hover */}
                      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[40px] ${
                        team.accent === 'red' ? 'bg-red/10' : 'bg-green/10'
                      }`} />

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`w-2 h-2 rounded-full ${team.accent === 'red' ? 'bg-red' : 'bg-green'}`} />
                          <span className={`font-mono text-[10px] tracking-[0.2em] uppercase ${
                            team.accent === 'red' ? 'text-red' : 'text-green'
                          }`}>
                            Team
                          </span>
                        </div>
                        
                        <h3 className="font-display font-bold text-xl text-white mb-1">
                          {team.name}
                        </h3>
                        
                        <p className="text-ink-400 text-sm">
                          Led by <span className="text-white font-medium">{team.lead}</span>
                        </p>
                      </div>

                      {/* Corner accents */}
                      <div className={`absolute top-0 right-0 w-12 h-12 border-t border-r transition-all duration-500 ${
                        team.accent === 'red' 
                          ? 'border-transparent group-hover:border-red/40' 
                          : 'border-transparent group-hover:border-green/40'
                      }`} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Profile modal */}
      <AnimatePresence>
        {selectedPerson && (
          <ProfileModal person={selectedPerson} onClose={() => setSelectedPerson(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

function getNodePosition(index: number, total: number): { x: number; y: number } {
  const cols = 6;
  const row = Math.floor(index / cols);
  const col = index % cols;
  return {
    x: 10 + (col * 80) / Math.max(cols - 1, 1),
    y: 15 + row * 35,
  };
}

function ProfileModal({ person, onClose }: { person: Person; onClose: () => void }) {
  const accentColor = person.accent === 'red' ? 'text-red' : 'text-green';
  const accentBorder = person.accent === 'red' ? 'border-red/30' : 'border-green/30';
  const accentBg = person.accent === 'red' ? 'bg-red/5' : 'bg-green/5';
  const accentGlow = person.accent === 'red' ? 'bg-red/10' : 'bg-green/10';
  const isLead = person.category === 'lead';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 lg:p-8"
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0, y: 20 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-gwd-black-card border border-ink-700 gwd-clip-corner overflow-hidden"
      >
        <div className={`absolute top-0 left-0 right-0 h-64 ${accentGlow} blur-[80px] pointer-events-none`} />

        <div className="relative flex items-center justify-between p-4 border-b border-ink-800">
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${person.accent === 'red' ? 'bg-red' : 'bg-green'}`} />
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-ink-400">
              GWD Profile / {person.id}
            </span>
          </div>
          <button onClick={onClose} className="p-1.5 hover:bg-ink-800 transition-colors rounded" aria-label="Close">
            <X size={18} className="text-ink-400" />
          </button>
        </div>

        <div className="relative p-8 lg:p-10">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Portrait */}
            <div className="flex-shrink-0">
              {person.photoUrl ? (
                <div className="w-32 h-32 rounded-lg overflow-hidden border border-ink-700">
                  <img src={person.photoUrl} alt={person.name} className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className={`w-32 h-32 rounded-lg flex items-center justify-center border ${accentBorder} ${accentBg}`}>
                  <span className={`font-display font-bold text-5xl ${accentColor}`}>{person.initials}</span>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="flex-1">
              <span className={`font-mono text-[10px] tracking-[0.2em] uppercase ${accentColor} block mb-2`}>
                {categoryLabels[person.category]}
              </span>
              <h3 className="font-display font-bold text-3xl text-white mb-2">{person.name}</h3>
              <div className="flex items-center gap-2 mb-6">
                <Briefcase size={14} className="text-ink-400" />
                <span className="text-ink-200 text-sm">{person.role}</span>
              </div>

              {/* Bio — only show if provided, otherwise elegant silence */}
              {person.bio && <p className="text-ink-300 leading-relaxed mb-6">{person.bio}</p>}

              {/* Lead-specific info */}
              {isLead && (
                <div className="space-y-4">
                  {/* Functional area */}
                  {person.functionalArea && (
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-500">
                        Functional Area
                      </span>
                      <span className={`text-sm ${accentColor}`}>{person.functionalArea}</span>
                    </div>
                  )}

                  {/* Team count slot — only shows if data exists */}
                  {person.teamCount !== null && (
                    <div className="flex items-center gap-2 p-4 bg-gwd-black-elevated border border-ink-800 gwd-clip-corner">
                      <Users size={16} className={accentColor} />
                      <span className="text-ink-200 text-sm">
                        Leading a team of <span className="text-white font-bold">{person.teamCount}</span>
                      </span>
                    </div>
                  )}

                  {/* Team members — only shows if data exists */}
                  {person.teamMembers.length > 0 && (
                    <div>
                      <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-500 mb-3 block">
                        Team Members
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {person.teamMembers.map((member, i) => (
                          <div key={i} className="flex items-center gap-2 px-3 py-2 bg-gwd-black-elevated border border-ink-800">
                            {member.photoUrl ? (
                              <img src={member.photoUrl} alt={member.name} className="w-6 h-6 rounded-full object-cover" />
                            ) : (
                              <div className="w-6 h-6 rounded-full bg-ink-700 flex items-center justify-center">
                                <span className="text-[8px] text-ink-300">{member.name.split(' ').map(n => n[0]).join('')}</span>
                              </div>
                            )}
                            <span className="text-ink-200 text-sm">{member.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-between px-8 py-4 border-t border-ink-800">
          <span className="font-mono text-[10px] text-ink-600">GWD CLUB / VJIT</span>
          <div className="flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-red" />
            <span className="w-1 h-1 rounded-full bg-green" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
