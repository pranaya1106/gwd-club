import { useEffect, useRef, type ReactNode } from 'react';

interface MagneticButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  strength?: number;
  href?: string;
}

export default function MagneticButton({
  children,
  onClick,
  variant = 'primary',
  className = '',
  strength = 0.3,
  href,
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) return;

    const handleMove = (e: Event) => {
      const me = e as MouseEvent;
      const rect = el.getBoundingClientRect();
      const x = me.clientX - rect.left - rect.width / 2;
      const y = me.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    };

    const handleLeave = () => {
      el.style.transform = 'translate(0, 0)';
    };

    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', handleLeave);
    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', handleLeave);
    };
  }, [strength]);

  const baseClasses = 'group relative inline-flex items-center justify-center gap-2 px-8 py-4 font-display font-medium text-sm tracking-wider uppercase transition-all duration-300 gwd-clip-tag overflow-hidden';

  const variantClasses = {
    primary: 'bg-red text-white hover:bg-red-400 gwd-glow-red',
    secondary: 'bg-transparent border border-ink-600 text-ink-100 hover:border-green hover:text-green',
    ghost: 'bg-transparent text-ink-300 hover:text-white',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a ref={ref as React.RefObject<HTMLAnchorElement>} href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button ref={ref as React.RefObject<HTMLButtonElement>} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
