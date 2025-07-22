import { Date } from '@/domain/Date';

export interface Event {
    name: string,
    start: Date,
    end: Date,
    location: string,
}

export const events: Event[] = [
  {
    name: 'Chaos Communication Congress',
    start: { year: 2025, month: 12, day: 27 },
    end: { year: 2025, month: 12, day: 30 },
    location: 'Hamburg, Germany',
  },
  {
    name: 'What Hackers Yearn',
    start: { year: 2025, month: 8, day: 8 },
    end: { year: 2025, month: 8, day: 12 },
    location: 'Geestmerambacht, Netherlands',
  },
  {
    name: 'FOSDEM',
    start: { year: 2025, month: 2, day: 1 },
    end: { year: 2025, month: 2, day: 2 },
    location: 'Brussels, Belgium',
  },
  {
    name: 'Chaos Communication Congress',
    start: { year: 2024, month: 12, day: 27 },
    end: { year: 2024, month: 12, day: 30 },
    location: 'Hamburg, Germany',
  },
  {
    name: 'Electromagnetic Field',
    start: { year: 2024, month: 6, day: 6 },
    end: { year: 2024, month: 6, day: 9 },
    location: 'Eastnor, United Kingdom',
  },
  {
    name: 'Revision',
    start: { year: 2024, month: 3, day: 29 },
    end: { year: 2024, month: 4, day: 1 },
    location: 'Saarbrücken, Germany',
  },
  {
    name: 'FOSDEM',
    start: { year: 2024, month: 2, day: 3 },
    end: { year: 2024, month: 2, day: 4 },
    location: 'Brussels, Belgium',
  },
  {
    name: 'Chaos Communication Congress',
    start: { year: 2023, month: 12, day: 27 },
    end: { year: 2023, month: 12, day: 30 },
    location: 'Hamburg, Germany',
  },
  {
    name: 'Chaos Communication Camp',
    start: { year: 2023, month: 8, day: 15 },
    end: { year: 2023, month: 8, day: 19 },
    location: 'Mildenberg, Germany',
  },
  {
    name: 'Revision',
    start: { year: 2023, month: 4, day: 7 },
    end: { year: 2023, month: 4, day: 10 },
    location: 'Saarbrücken, Germany',
  },
  {
    name: 'Goulash Programming Night',
    start: { year: 2023, month: 5, day: 19 },
    end: { year: 2023, month: 5, day: 21 },
    location: 'Karlsruhe, Germany',
  },
  {
    name: 'FOSDEM',
    start: { year: 2023, month: 2, day: 4 },
    end: { year: 2023, month: 2, day: 5 },
    location: 'Brussels, Belgium',
  },
  {
    name: 'Hacking In Parallel',
    start: { year: 2022, month: 9, day: 15 },
    end: { year: 2022, month: 9, day: 17 },
    location: 'Berlin, Germany',
  },
  {
    name: 'May Contain Hackers',
    start: { year: 2022, month: 7, day: 22 },
    end: { year: 2022, month: 7, day: 26 },
    location: 'Zeewolde, Netherlands',
  },
  {
    name: 'Electromagnetic Field',
    start: { year: 2022, month: 6, day: 2 },
    end: { year: 2022, month: 6, day: 5 },
    location: 'Eastnor, United Kingdom',
  },
  {
    name: 'Goulash Programming Night',
    start: { year: 2022, month: 5, day: 20 },
    end: { year: 2022, month: 5, day: 22 },
    location: 'Karlsruhe, Germany',
  },
  {
    name: 'FOSDEM',
    start: { year: 2022, month: 2, day: 5 },
    end: { year: 2022, month: 2, day: 6 },
    location: 'Brussels, Belgium',
  },
  {
    name: 'Bornhack',
    start: { year: 2021, month: 8, day: 19 },
    end: { year: 2021, month: 8, day: 26 },
    location: 'Funen, Denmark',
  },
  {
    name: 'FOSDEM',
    start: { year: 2020, month: 2, day: 1 },
    end: { year: 2020, month: 2, day: 2 },
    location: 'Brussels, Belgium',
  },
  {
    name: 'Chaos Communication Congress',
    start: { year: 2019, month: 12, day: 27 },
    end: { year: 2019, month: 12, day: 30 },
    location: 'Leipzig, Germany',
  },
  {
    name: 'Chaos Communication Camp',
    start: { year: 2019, month: 8, day: 21 },
    end: { year: 2019, month: 8, day: 25 },
    location: 'Mildenberg, Germany',
  },
  {
    name: 'Chaos Communication Congress',
    start: { year: 2018, month: 12, day: 27 },
    end: { year: 2018, month: 12, day: 30 },
    location: 'Leipzig, Germany',
  },
  {
    name: 'Chaos Communication Congress',
    start: { year: 2017, month: 12, day: 27 },
    end: { year: 2017, month: 12, day: 30 },
    location: 'Leipzig, Germany',
  },
  {
    name: 'Chaos Communication Congress',
    start: { year: 2016, month: 12, day: 27 },
    end: { year: 2016, month: 12, day: 30 },
    location: 'Hamburg, Germany',
  },
];
