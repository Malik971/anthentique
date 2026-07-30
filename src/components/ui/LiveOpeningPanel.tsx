"use client";

import { CalendarDays, Clock3 } from "lucide-react";
import { business, dayLabels } from "@/content/business";
import { compactTime, getLocalDayInfo, getRestaurantStatus } from "@/lib/opening-hours";
import { useCurrentMinute } from "@/lib/use-current-minute";

export function LiveOpeningPanel() {
  const currentMinute = useCurrentMinute();
  const status = currentMinute === 0
    ? null
    : getRestaurantStatus(business.openingHours, business.timezone, new Date(), business.openingExceptions);
  const localDay = currentMinute === 0 ? null : getLocalDayInfo(business.timezone);
  const slot = status?.slot ?? null;

  return (
    <div className={`live-opening ${status ? (status.isOpen ? "is-open" : "is-closed") : "is-pending"}`} aria-live="polite">
      <div className="live-opening__date">
        <CalendarDays aria-hidden="true" />
        <span>
          <small>Horaires en Guadeloupe</small>
          <strong>
            {localDay && slot
              ? `Aujourd’hui, ${dayLabels[localDay.day].toLocaleLowerCase("fr-FR")} · ${compactTime(slot.open)}–${compactTime(slot.close)}`
              : "Horaires en cours"}
          </strong>
        </span>
      </div>
      <div className="live-opening__status">
        <span className="live-opening__dot" aria-hidden="true" />
        <span>
          <strong>{status?.label ?? "Vérification des horaires"}</strong>
          <small>{status?.detail ?? "Consultez les horaires du jour"}</small>
        </span>
      </div>
      <div className="live-opening__hours">
        <Clock3 aria-hidden="true" />
        <span>{slot && !slot.closed ? `${compactTime(slot.open)} – ${compactTime(slot.close)}` : "Fermé"}</span>
      </div>
    </div>
  );
}
