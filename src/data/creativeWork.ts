export interface CreativeWork {
  id: string;
  title: string | null;
  category: 'DESIGN' | 'REELS' | 'EVENTS' | 'MEDIA';
  image: string | null;
  video: string | null;
  description: string | null;
}

export const creativeWorks: CreativeWork[] = [
  { 
    id: 'cw-1', 
    title: 'Spiderman Registration Reel', 
    category: 'REELS', 
    image: '/work-reel-ideas.jpg',
    video: '/work-spiderman-reel.mp4', 
    description: 'Creative reel for GWD Club registration campaign' 
  },
  { 
    id: 'cw-2', 
    title: 'Registration Campaign Reel', 
    category: 'REELS', 
    image: '/work-reel-ideas.jpg',
    video: '/work-reels-registration.mp4', 
    description: 'Registration promotional content' 
  },
  { 
    id: 'cw-3', 
    title: 'Reel Ideas Brainstorming', 
    category: 'MEDIA', 
    image: '/work-reel-ideas.jpg',
    video: '/work-explaining-ideas.mp4', 
    description: 'Behind the scenes: Explaining creative reel concepts' 
  },
  { 
    id: 'cw-4', 
    title: 'Creative Planning', 
    category: 'DESIGN', 
    image: '/work-reel-ideas.jpg',
    video: null, 
    description: 'Visual planning and ideation process' 
  },
];

export const creativeCategories = ['ALL', 'DESIGN', 'REELS', 'EVENTS', 'MEDIA'] as const;
