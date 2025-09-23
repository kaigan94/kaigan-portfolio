"use client";

import { MoonStarIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useCallback } from "react";

import {
  injectThemeTransition,
  useThemeTransition,
} from "@/components/ui/theme-toggle-transition";
import { META_THEME_COLORS } from "@/config/site";
import { useMetaColor } from "@/hooks/use-meta-color";
import soundManager from "@/lib/sound-manager";

import { Button } from "./ui/button";

export function ToggleTheme() {
  const { resolvedTheme, setTheme } = useTheme();

  const { setMetaColor } = useMetaColor();

  const { startTransition } = useThemeTransition();

  const handleToggle = useCallback(() => {
    const currentTheme = resolvedTheme === "dark" ? "dark" : "light";
    const nextTheme = currentTheme === "dark" ? "light" : "dark";

    injectThemeTransition({
      theme: currentTheme,
      variant: "circle",
      start: "top-right",
    });

    soundManager.playClick();

    startTransition(() => {
      setTheme(nextTheme);
      setMetaColor(
        nextTheme === "dark" ? META_THEME_COLORS.dark : META_THEME_COLORS.light
      );
    });
  }, [resolvedTheme, setTheme, setMetaColor, startTransition]);

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleToggle}
      className="group relative inline-flex size-8 items-center justify-center overflow-hidden rounded-full border border-border/70 bg-background/80 text-foreground shadow-sm transition-colors duration-300 hover:border-primary/60 hover:bg-background focus-visible:ring-2 focus-visible:ring-primary/40"
    >
      <span className="pointer-events-none absolute inset-0 -z-20 rounded-full bg-background/70 backdrop-blur-sm" />
      <span className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(56,189,248,0.45),transparent_65%)] opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-80 group-focus-visible:opacity-80" />
      <span className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-[radial-gradient(circle_at_75%_70%,rgba(168,85,247,0.35),transparent_65%)] opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-70 group-focus-visible:opacity-70" />

      <span className="relative flex size-full items-center justify-center">
        <SunIcon className="size-4 transition-all duration-500 dark:scale-0 dark:-rotate-90" />
        <MoonStarIcon className="absolute size-4 scale-0 rotate-90 transition-all duration-500 dark:scale-100 dark:rotate-0" />
      </span>

      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
