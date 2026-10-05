export interface Experience {
  id: string;
  company: string | null;
  date: string | null;
  location: string | null;
  description: string | null;
  photos: string[];
  placeholder: boolean;
}

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    company: null,
    date: null,
    location: null,
    description: null,
    photos: [],
    placeholder: true,
  },
  {
    id: 'exp-2',
    company: null,
    date: null,
    location: null,
    description: null,
    photos: [],
    placeholder: true,
  },
  {
    id: 'exp-3',
    company: null,
    date: null,
    location: null,
    description: null,
    photos: [],
    placeholder: true,
  },
];
