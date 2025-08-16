import { Event } from '@/data/events';
import { Date, hasDatePassed } from '@/domain/Date';

export class Flight {
  constructor(private event: Event) {
  }

  direction(): string {
    return this.event.location;
  }

  number(): string {
    return `${this.event.name.toUpperCase().replaceAll(' ', '')}${this.event.start.year}`;
  }

  pad(): string {
    return String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
  }

  departureDate(): Date {
    return this.event.start;
  }

  arrivalDate(): Date {
    return this.event.end;
  }

  offStation(): boolean {
    return hasDatePassed(this.event.start) <= 0 && hasDatePassed(this.event.end) >= 0;
  }

  statusDepartureScheduled(): boolean {
    return hasDatePassed(this.event.start) > 0;
  }

  statusDeparting(): boolean {
    return hasDatePassed(this.event.start) === 0;
  }

  statusDeparted(): boolean {
    return hasDatePassed(this.event.start) < 0;
  }

  statusArrivalScheduled(): boolean {
    return hasDatePassed(this.event.end) > 0;
  }

  statusArriving(): boolean {
    return hasDatePassed(this.event.end) === 0;
  }

  statusArrived(): boolean {
    return hasDatePassed(this.event.end) < 0;
  }
}
