import { motion } from 'framer-motion';
import { Instagram, Linkedin, Github, Mail } from 'lucide-react';
import { navItems } from '@/data/site';
import Logo from '@/components/Logo';

const socialLinks = [
  { label: 'Instagram', href: '#', Icon: Instagram },
  { label: 'LinkedIn', href: '#', Icon: Linkedin },
  { label: 'GitHub', href: '#', Icon: Github },
  { label: 'Email', href: '#', Icon: Mail },
];

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gwd-black-soft border-t border-ink-800 overflow-hidden">
      <div className="absolute inset-0 gwd-grid-bg opacity-10" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Logo size="md" className="mb-4" />
            <p className="text-ink-400 text-sm leading-relaxed max-w-xs">
              A student-driven ecosystem at VJIT. Learn. Build. Connect. Lead. Get Work Done.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-ink-500 mb-4 block">
              Navigate
            </span>
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-ink-300 hover:text-white transition-colors text-sm font-mono tracking-wide"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-ink-500 mb-4 block">
              Connect
            </span>
            <div className="flex gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center border border-ink-700 hover:border-green/50 hover:bg-green/5 text-ink-400 hover:text-green transition-all duration-300 gwd-clip-tag"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-ink-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-mono text-[10px] text-ink-500 tracking-wide">
            © {new Date().getFullYear()} GWD Club, VJIT. All rights reserved.
          </span>
          <div className="flex items-center gap-2">
            <motion.span
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-green"
            />
            <span className="font-mono text-[10px] text-ink-500 tracking-wide uppercase">
              Ecosystem Active
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
