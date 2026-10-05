export interface GwdEvent {
  id: string;
  date: string | null;
  title: string | null;
  description: string | null;
  status: 'upcoming' | 'live' | 'completed';
  registrationUrl: string | null;
  placeholder: boolean;
}

export const events: GwdEvent[] = [
  {
    id: 'event-1',
    date: null,
    title: null,
    description: null,
    status: 'upcoming',
    registrationUrl: null,
    placeholder: true,
  },
  {
    id: 'event-2',
    date: null,
    title: null,
    description: null,
    status: 'upcoming',
    registrationUrl: null,
    placeholder: true,
  },
  {
    id: 'event-3',
    date: null,
    title: null,
    description: null,
    status: 'upcoming',
    registrationUrl: null,
    placeholder: true,
  },
];
