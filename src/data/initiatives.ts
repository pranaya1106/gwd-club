export type InitiativeStatus = 'now' | 'in-progress' | 'upcoming' | 'completed';

export interface Initiative {
  id: string;
  title: string | null;
  description: string | null;
  status: InitiativeStatus;
  contributors: string[];
  placeholder: boolean;
}

export const initiatives: Initiative[] = [
  {
    id: 'init-1',
    title: null,
    description: null,
    status: 'now',
    contributors: [],
    placeholder: true,
  },
  {
    id: 'init-2',
    title: null,
    description: null,
    status: 'in-progress',
    contributors: [],
    placeholder: true,
  },
  {
    id: 'init-3',
    title: null,
    description: null,
    status: 'upcoming',
    contributors: [],
    placeholder: true,
  },
  {
    id: 'init-4',
    title: null,
    description: null,
    status: 'completed',
    contributors: [],
    placeholder: true,
  },
];

export const statusConfig: Record<InitiativeStatus, { label: string; color: string; dotClass: string }> = {
  now: { label: 'NOW', color: 'text-green', dotClass: 'bg-green animate-pulse-green' },
  'in-progress': { label: 'IN PROGRESS', color: 'text-red', dotClass: 'bg-red animate-pulse-red' },
  upcoming: { label: 'UPCOMING', color: 'text-ink-300', dotClass: 'bg-ink-400' },
  completed: { label: 'COMPLETED', color: 'text-ink-400', dotClass: 'bg-ink-600' },
};
