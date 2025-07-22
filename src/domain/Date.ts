export interface Date {
  year: number,
  month: number,
  day: number,
}

export function hasDatePassed(v: Date): number {
  const today = new globalThis.Date();
  const targetDate = new globalThis.Date(v.year, v.month - 1, v.day);

  today.setHours(0, 0, 0, 0);
  targetDate.setHours(0, 0, 0, 0);

  if (targetDate < today) {
    return -1;
  }

  if (targetDate > today) {
    return 1;
  }

  return 0;
}
