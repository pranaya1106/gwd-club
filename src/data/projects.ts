export interface Project {
  id: string;
  title: string | null;
  description: string | null;
  contributors: string[];
  technologies: string[];
  images: string[];
  link: string | null;
  outcome: string | null;
  placeholder: boolean;
}

export const projects: Project[] = [
  {
    id: 'proj-1',
    title: null,
    description: null,
    contributors: [],
    technologies: [],
    images: [],
    link: null,
    outcome: null,
    placeholder: true,
  },
  {
    id: 'proj-2',
    title: null,
    description: null,
    contributors: [],
    technologies: [],
    images: [],
    link: null,
    outcome: null,
    placeholder: true,
  },
  {
    id: 'proj-3',
    title: null,
    description: null,
    contributors: [],
    technologies: [],
    images: [],
    link: null,
    outcome: null,
    placeholder: true,
  },
  {
    id: 'proj-4',
    title: null,
    description: null,
    contributors: [],
    technologies: [],
    images: [],
    link: null,
    outcome: null,
    placeholder: true,
  },
];
