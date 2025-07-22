import { Date } from '@/domain/Date';
import { Event } from '@/data/events';

export interface Flight {
  date: Date,
  number: string,
  direction: string,
}

export function flightNumber(event: Event): string {
  return `${event.name.toUpperCase().replaceAll(' ', '')}${event.start.year}`;
}
