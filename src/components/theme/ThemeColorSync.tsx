"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";
import { brandPalette } from "@/content/brand";

const THEME_COLORS = {
  light: brandPalette.sky300,
  dark: brandPalette.night,
} as const;

/**
 * Aligne la couleur de la barre du navigateur sur le thème réellement appliqué.
 * Les balises `theme-color` par préférence système restent en place et servent de
 * valeur initiale ; ce composant ne prend la main qu’après le montage client,
 * afin qu’un choix manuel soit également reflété.
 */
export function ThemeColorSync() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (resolvedTheme !== "light" && resolvedTheme !== "dark") return;

    const color = THEME_COLORS[resolvedTheme];
    let meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]:not([media])');

    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "theme-color";
      document.head.appendChild(meta);
    }

    meta.content = color;
  }, [resolvedTheme]);

  return null;
}
