export interface RoadmapItem {
  id: string;
  category: 'EVENTS' | 'INDUSTRY' | 'PROJECTS' | 'EXPERIENCES';
  title: string | null;
  description: string | null;
}

export const roadmapItems: RoadmapItem[] = [
  { id: 'rm-1', category: 'EVENTS', title: null, description: null },
  { id: 'rm-2', category: 'INDUSTRY', title: null, description: null },
  { id: 'rm-3', category: 'PROJECTS', title: null, description: null },
  { id: 'rm-4', category: 'EXPERIENCES', title: null, description: null },
];
