"use client";

import { useCallback } from "react";

export type AnimationVariant = "circle" | "circle-blur" | "gif" | "polygon";
export type StartPosition =
  | "center"
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

const POSITIONS: Record<StartPosition, string> = {
  center: "center",
  "top-left": "top left",
  "top-right": "top right",
  "bottom-left": "bottom left",
  "bottom-right": "bottom right",
};

function getClipOrigin(start: StartPosition) {
  const cx = start === "center" ? "50" : start.includes("left") ? "0" : "100";
  const cy = start === "center" ? "50" : start.includes("top") ? "0" : "100";

  return { cx, cy };
}

const TRANSITION_NAME = "theme-toggle";

export function injectThemeTransition(options: {
  theme: "light" | "dark";
  variant?: AnimationVariant;
  start?: StartPosition;
  url?: string;
}) {
  if (typeof document === "undefined") {
    return;
  }

  const { theme, variant = "circle", start = "center", url } = options;
  const { cx, cy } = getClipOrigin(start);

  let css = "";

  if (variant === "circle") {
    css = `
      @supports (view-transition-name: ${TRANSITION_NAME}) {
        ::view-transition-old(${TRANSITION_NAME}) {
          animation: none;
        }
        ::view-transition-new(${TRANSITION_NAME}) {
          animation: circle-expand 0.45s ease-out;
          transform-origin: ${POSITIONS[start]};
        }
        @keyframes circle-expand {
          from {
            clip-path: circle(0% at ${cx}% ${cy}%);
          }
          to {
            clip-path: circle(150% at ${cx}% ${cy}%);
          }
        }
      }
    `;
  } else if (variant === "circle-blur") {
    css = `
      @supports (view-transition-name: ${TRANSITION_NAME}) {
        ::view-transition-old(${TRANSITION_NAME}) {
          animation: none;
        }
        ::view-transition-new(${TRANSITION_NAME}) {
          animation: circle-blur-expand 0.55s ease-out;
          transform-origin: ${POSITIONS[start]};
          filter: blur(0px);
        }
        @keyframes circle-blur-expand {
          from {
            clip-path: circle(0% at ${cx}% ${cy}%);
            filter: blur(4px);
          }
          to {
            clip-path: circle(150% at ${cx}% ${cy}%);
            filter: blur(0px);
          }
        }
      }
    `;
  } else if (variant === "gif" && url) {
    css = `
      @supports (view-transition-name: ${TRANSITION_NAME}) {
        ::view-transition-old(${TRANSITION_NAME}) {
          animation: fade-out 0.4s ease-out;
        }
        ::view-transition-new(${TRANSITION_NAME}) {
          animation: gif-reveal 2.5s cubic-bezier(0.4, 0, 0.2, 1);
          mask-image: url('${url}');
          mask-size: 0%;
          mask-repeat: no-repeat;
          mask-position: center;
        }
        @keyframes fade-out {
          to {
            opacity: 0;
          }
        }
        @keyframes gif-reveal {
          0% {
            mask-size: 0%;
          }
          20% {
            mask-size: 35%;
          }
          60% {
            mask-size: 35%;
          }
          100% {
            mask-size: 300%;
          }
        }
      }
    `;
  } else if (variant === "polygon") {
    css = `
      @supports (view-transition-name: ${TRANSITION_NAME}) {
        ::view-transition-old(${TRANSITION_NAME}) {
          animation: none;
        }
        ::view-transition-new(${TRANSITION_NAME}) {
          animation: ${theme === "light" ? "wipe-in-dark" : "wipe-in-light"} 0.45s ease-out;
        }
        @keyframes wipe-in-dark {
          from {
            clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
          }
          to {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }
        }
        @keyframes wipe-in-light {
          from {
            clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
          }
          to {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }
        }
      }
    `;
  }

  if (!css) {
    return;
  }

  const root = document.documentElement;
  const previousName = root.style.getPropertyValue("view-transition-name");
  root.style.setProperty("view-transition-name", TRANSITION_NAME);

  const styleId = `theme-transition-${Date.now()}`;
  const style = document.createElement("style");
  style.id = styleId;
  style.textContent = css;

  document.head.appendChild(style);

  window.setTimeout(() => {
    const styleEl = document.getElementById(styleId);
    if (styleEl) {
      styleEl.remove();
    }

    if (previousName) {
      root.style.setProperty("view-transition-name", previousName);
    } else {
      root.style.removeProperty("view-transition-name");
    }
  }, 750);
}

type ViewTransitionDocument = Document & {
  startViewTransition?: (callback: () => void) => void;
};

export const useThemeTransition = () => {
  const startTransition = useCallback((updateFn: () => void) => {
    if (typeof document !== "undefined") {
      const doc = document as ViewTransitionDocument;
      if (typeof doc.startViewTransition === "function") {
        doc.startViewTransition(updateFn);
        return;
      }
    }

    updateFn();
  }, []);

  return { startTransition };
};
