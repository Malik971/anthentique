"use client";

import { business, dayLabels } from "@/content/business";
import { compactTime, getLocalDayInfo, getRestaurantStatus } from "@/lib/opening-hours";
import { useCurrentMinute } from "@/lib/use-current-minute";

export function TodayHoursLink() {
  const currentMinute = useCurrentMinute();
  const status = currentMinute === 0
    ? null
    : getRestaurantStatus(business.openingHours, business.timezone, new Date(), business.openingExceptions);
  const localDay = currentMinute === 0 ? null : getLocalDayInfo(business.timezone);
  const slot = status?.slot ?? null;

  return (
    <a className={status ? (status.isOpen ? "is-open" : "is-closed") : "is-pending"} href="#infos-pratiques">
      <span className="quick-info__status-dot" aria-hidden="true" />
      <span>
        <strong>{status?.label ?? "Horaires du jour"}</strong>
        <small>
          {status && localDay
            ? `${dayLabels[localDay.day]} · ${compactTime(status.slot.open)}–${compactTime(status.slot.close)}`
            : slot
              ? `${compactTime(slot.open)}–${compactTime(slot.close)}`
              : "Consulter les horaires"}
        </small>
      </span>
    </a>
  );
}
