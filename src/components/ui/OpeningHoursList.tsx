"use client";

import { business, dayLabels } from "@/content/business";
import { compactTime, getLocalDayInfo } from "@/lib/opening-hours";
import { useCurrentMinute } from "@/lib/use-current-minute";

export function OpeningHoursList() {
  const currentMinute = useCurrentMinute();
  const localDay = currentMinute === 0 ? null : getLocalDayInfo(business.timezone);

  return (
    <dl>
      {Object.entries(business.openingHours).map(([day, slot]) => {
        const isToday = localDay?.day === day;
        return (
          <div className={isToday ? "is-today" : undefined} key={day} aria-current={isToday ? "date" : undefined}>
            <dt>
              {dayLabels[day as keyof typeof dayLabels]}
              {isToday ? <span>Aujourd’hui</span> : null}
            </dt>
            <dd>
              <span>{slot.closed ? "Fermé" : `${compactTime(slot.open)} – ${compactTime(slot.close)}`}</span>
              {slot.needsClientConfirmation ? <small className="hours-confirmation">À confirmer</small> : null}
            </dd>
          </div>
        );
      })}
    </dl>
  );
}
