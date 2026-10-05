interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

const sizeMap = {
  sm: { box: 'w-16 h-16', text: 'text-base', sub: 'text-[8px]' },
  md: { box: 'w-20 h-20', text: 'text-lg', sub: 'text-[9px]' },
  lg: { box: 'w-28 h-28', text: 'text-2xl', sub: 'text-[10px]' },
  xl: { box: 'w-40 h-40', text: 'text-5xl', sub: 'text-xs' },
};

export default function Logo({ size = 'md', showText = true, className = '' }: LogoProps) {
  const s = sizeMap[size];

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Official GWD Logo - No text */}
      <div className={`relative ${s.box} flex-shrink-0`}>
        <img 
          src="/gwd-logo.png" 
          alt="GWD" 
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}
