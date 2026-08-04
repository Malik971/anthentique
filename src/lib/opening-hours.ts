import type { DayKey, OpeningException, OpeningHours, OpeningSlot } from "@/lib/types";

const dayOrder: DayKey[] = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

const weekdayMap: Record<string, DayKey> = {
  Mon: "monday",
  Tue: "tuesday",
  Wed: "wednesday",
  Thu: "thursday",
  Fri: "friday",
  Sat: "saturday",
  Sun: "sunday",
};

const frenchDayLabels: Record<DayKey, string> = {
  monday: "lundi",
  tuesday: "mardi",
  wednesday: "mercredi",
  thursday: "jeudi",
  friday: "vendredi",
  saturday: "samedi",
  sunday: "dimanche",
};

function toMinutes(time: string) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

export function formatTime(time: string) {
  const [hours, minutes] = time.split(":").map(Number);
  return minutes === 0 ? `${hours} h` : `${hours} h ${String(minutes).padStart(2, "0")}`;
}

export const compactTime = formatTime;

interface ZonedDateParts {
  day: DayKey;
  dateKey: string;
  hour: number;
  minute: number;
}

function getZonedDateParts(timezone: string, now: Date): ZonedDateParts {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    weekday: "short",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(now);
  const part = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((item) => item.type === type)?.value ?? "";

  return {
    day: weekdayMap[part("weekday")] ?? "monday",
    dateKey: `${part("year")}-${part("month")}-${part("day")}`,
    hour: Number(part("hour")),
    minute: Number(part("minute")),
  };
}

function addDaysToDateKey(dateKey: string, days: number) {
  const [year, month, day] = dateKey.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day + days));
  return date.toISOString().slice(0, 10);
}

function dayAtOffset(day: DayKey, offset: number) {
  return dayOrder[(dayOrder.indexOf(day) + offset) % dayOrder.length];
}

function getSlotForDate(
  openingHours: OpeningHours,
  day: DayKey,
  dateKey: string,
  exceptions: OpeningException[],
): OpeningSlot {
  const exception = exceptions.find((item) => item.date === dateKey);
  if (!exception) return openingHours[day];
  if (exception.closed) return { open: "00:00", close: "00:00", closed: true };
  if (exception.open && exception.close) return { open: exception.open, close: exception.close };
  return openingHours[day];
}

export function getLocalDayInfo(timezone: string, now = new Date()) {
  const zoned = getZonedDateParts(timezone, now);
  const parts = new Intl.DateTimeFormat("fr-FR", {
    timeZone: timezone,
    day: "2-digit",
    month: "long",
  }).formatToParts(now);

  return {
    day: zoned.day,
    dateKey: zoned.dateKey,
    dateLabel: `${parts.find((item) => item.type === "day")?.value ?? ""} ${
      parts.find((item) => item.type === "month")?.value ?? ""
    }`.trim(),
  };
}

export interface NextOpening {
  day: DayKey;
  date: string;
  open: string;
  offsetDays: number;
}

export function getNextOpening(
  openingHours: OpeningHours,
  timezone: string,
  now = new Date(),
  exceptions: OpeningException[] = [],
): NextOpening | null {
  const zoned = getZonedDateParts(timezone, now);
  const currentMinutes = zoned.hour * 60 + zoned.minute;

  for (let offset = 0; offset <= 14; offset += 1) {
    const day = dayAtOffset(zoned.day, offset);
    const date = addDaysToDateKey(zoned.dateKey, offset);
    const slot = getSlotForDate(openingHours, day, date, exceptions);
    if (slot.closed) continue;
    if (offset === 0 && currentMinutes >= toMinutes(slot.open)) continue;
    return { day, date, open: slot.open, offsetDays: offset };
  }

  return null;
}

export interface RestaurantStatus {
  isOpen: boolean;
  label: string;
  detail: string;
  day: DayKey;
  slot: OpeningSlot;
  nextOpening: NextOpening | null;
}

export function getRestaurantStatus(
  openingHours: OpeningHours,
  timezone: string,
  now = new Date(),
  exceptions: OpeningException[] = [],
): RestaurantStatus {
  const zoned = getZonedDateParts(timezone, now);
  const slot = getSlotForDate(openingHours, zoned.day, zoned.dateKey, exceptions);
  const currentMinutes = zoned.hour * 60 + zoned.minute;
  const openMinutes = toMinutes(slot.open);
  const closeMinutes = toMinutes(slot.close);

  if (!slot.closed && currentMinutes >= openMinutes && currentMinutes < closeMinutes) {
    return {
      isOpen: true,
      label: "Ouvert maintenant",
      detail: `Ferme à ${formatTime(slot.close)}`,
      day: zoned.day,
      slot,
      nextOpening: null,
    };
  }

  const nextOpening = getNextOpening(openingHours, timezone, now, exceptions);
  let detail = "Nous contacter pour connaître les horaires";
  if (nextOpening) {
    const when =
      nextOpening.offsetDays === 0
        ? "aujourd’hui"
        : nextOpening.offsetDays === 1
          ? "demain"
          : `le ${frenchDayLabels[nextOpening.day]}`;
    detail = `Ouvre ${when} à ${formatTime(nextOpening.open)}`;
  }

  return {
    isOpen: false,
    label: "Fermé actuellement",
    detail,
    day: zoned.day,
    slot,
    nextOpening,
  };
}
