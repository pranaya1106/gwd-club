export interface Collaboration {
  id: string;
  name: string;
  description: string | null;
  x: number;
  y: number;
  accent: 'red' | 'green';
  placeholder: boolean;
}

export const collaborations: Collaboration[] = [
  {
    id: 'hsl',
    name: 'HSL',
    description: null,
    x: 25,
    y: 30,
    accent: 'red',
    placeholder: true,
  },
  {
    id: 'deccan',
    name: 'Deccan',
    description: null,
    x: 75,
    y: 25,
    accent: 'green',
    placeholder: true,
  },
];
