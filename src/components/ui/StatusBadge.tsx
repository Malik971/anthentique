"use client";

import { Clock3 } from "lucide-react";
import { business } from "@/content/business";
import { getRestaurantStatus } from "@/lib/opening-hours";
import { useCurrentMinute } from "@/lib/use-current-minute";

export function StatusBadge({ compact = false }: { compact?: boolean }) {
  const currentMinute = useCurrentMinute();
  const status = currentMinute === 0
    ? null
    : getRestaurantStatus(
        business.openingHours,
        business.timezone,
        new Date(),
        business.openingExceptions,
      );

  return (
    <span className={`status-badge ${status ? (status.isOpen ? "is-open" : "is-closed") : "is-pending"}`}>
      <Clock3 aria-hidden="true" size={compact ? 14 : 16} />
      <span>{status ? <>{status.label}{` · ${status.detail}`}</> : compact ? "Horaires du jour" : "Horaires en cours"}</span>
    </span>
  );
}
