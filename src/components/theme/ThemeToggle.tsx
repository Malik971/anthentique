"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const subscribe = () => () => {};

/** Vrai uniquement après hydratation, sans setState dans un effet. */
function useMounted() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();

  // Avant le montage client, le thème résolu est inconnu : on rend un bouton
  // neutre et inerte, de mêmes dimensions, pour éviter toute erreur d’hydratation.
  if (!mounted) {
    return (
      <span className="theme-toggle theme-toggle--placeholder" aria-hidden="true">
        <Sun aria-hidden="true" />
      </span>
    );
  }

  const isDark = resolvedTheme === "dark";
  const label = isDark ? "Activer le mode clair" : "Activer le mode sombre";

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={label}
      title={label}
      aria-pressed={isDark}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? <Moon aria-hidden="true" /> : <Sun aria-hidden="true" />}
      <span className="theme-toggle__label">{isDark ? "Sombre" : "Clair"}</span>
    </button>
  );
}
