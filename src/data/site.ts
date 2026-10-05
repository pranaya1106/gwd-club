export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: 'ABOUT', href: '#about' },
  { label: 'IN ACTION', href: '#in-action' },
  { label: 'STRUCTURE', href: '#org-map' },
  { label: 'PEOPLE', href: '#people' },
  { label: 'THE WORK', href: '#the-work' },
  { label: 'NOW', href: '#gwd-now' },
  { label: "WHAT'S NEXT", href: '#whats-next' },
];

export interface Pillar {
  word: string;
  description: string;
  accent: 'red' | 'green';
}

export const pillars: Pillar[] = [
  {
    word: 'LEARN',
    description: 'GWD Club is a platform where students continuously learn — picking up new skills, exploring emerging technologies, and growing through hands-on workshops and peer-driven knowledge sharing.',
    accent: 'red',
  },
  {
    word: 'BUILD',
    description: 'Members don\'t just theorize — they build. From creative work to technical projects, GWD turns ideas into tangible outputs through collaboration and execution.',
    accent: 'green',
  },
  {
    word: 'CONNECT',
    description: 'GWD bridges the gap between students and the real world — connecting members with industry, alumni, and organizations through industrial visits and collaborations.',
    accent: 'red',
  },
  {
    word: 'LEAD',
    description: 'Through ownership, initiative, and responsibility, GWD members develop leadership — guiding projects, teams, and the club\'s direction as a student-driven ecosystem.',
    accent: 'green',
  },
];

export const socialLinks = [
  { label: 'Instagram', href: '#', icon: 'instagram' as const },
  { label: 'LinkedIn', href: '#', icon: 'linkedin' as const },
  { label: 'GitHub', href: '#', icon: 'github' as const },
  { label: 'Email', href: '#', icon: 'mail' as const },
];
