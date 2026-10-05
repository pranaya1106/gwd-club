export interface ActionCategory {
  id: string;
  label: string;
  description: string | null;
  accent: 'red' | 'green';
  image: string | null;
  hasContent: boolean;
}

export const actionCategories: ActionCategory[] = [
  {
    id: 'industry-exposure',
    label: 'INDUSTRY EXPOSURE',
    description: null,
    accent: 'red',
    image: null,
    hasContent: false,
  },
  {
    id: 'events',
    label: 'EVENTS',
    description: null,
    accent: 'green',
    image: null,
    hasContent: false,
  },
  {
    id: 'creative-work',
    label: 'CREATIVE WORK',
    description: null,
    accent: 'red',
    image: null,
    hasContent: false,
  },
  {
    id: 'media',
    label: 'MEDIA',
    description: null,
    accent: 'green',
    image: null,
    hasContent: false,
  },
  {
    id: 'community',
    label: 'COMMUNITY',
    description: null,
    accent: 'red',
    image: null,
    hasContent: false,
  },
  {
    id: 'execution',
    label: 'EXECUTION',
    description: null,
    accent: 'green',
    image: null,
    hasContent: false,
  },
];
