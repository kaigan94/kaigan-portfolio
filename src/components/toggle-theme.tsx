"use client";

import { MoonStarIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useCallback } from "react";

import soundManager from "@/lib/sound-manager";

import { Button } from "./ui/button";

export function ToggleTheme() {
  const { resolvedTheme, setTheme } = useTheme();

  const handleToggle = useCallback(() => {
    soundManager.playClick();
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => {
        if (!document.startViewTransition) {
          handleToggle();
          return;
        }

        document.startViewTransition(handleToggle);
      }}
    >
      <MoonStarIcon className="hidden [html.dark_&]:block" />
      <SunIcon className="hidden [html.light_&]:block" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
