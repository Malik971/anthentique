"use client";

import { useSyncExternalStore } from "react";

function subscribe(onStoreChange: () => void) {
  const timer = window.setInterval(onStoreChange, 60_000);
  return () => window.clearInterval(timer);
}

function getSnapshot() {
  return Math.floor(Date.now() / 60_000);
}

function getServerSnapshot() {
  return 0;
}

export function useCurrentMinute() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
