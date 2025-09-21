"use client";

import React, {
  startTransition,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type WordItem = { word: string };

type TypewriterProps = {
  words?: WordItem[];
  typingSpeed?: number; // ms per character when typing
  deletingSpeed?: number; // ms per character when deleting
  pauseDuration?: number; // ms pause at the end of a word and before the next
  cursorColor?: string;
  cursorWidth?: number; // px
  cursorHeight?: number; // % of fontSize
  font?: React.CSSProperties; // e.g. { fontSize: "32px", letterSpacing: "-0.01em" }
  textColor?: string;
  className?: string;
  style?: React.CSSProperties;
};

export default function TypewriterEffect({
  words = [{ word: "Hello" }, { word: "World" }, { word: "Framer" }],
  typingSpeed = 100,
  deletingSpeed = 60,
  pauseDuration = 1000,
  cursorColor = "#FFFFFF",
  cursorWidth = 2,
  cursorHeight = 100,
  font,
  textColor = "currentColor",
  className,
  style,
}: TypewriterProps) {
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const timeoutRef = useRef<number | null>(null);
  const blinkRef = useRef<number | null>(null);

  const currentWord = useMemo(() => {
    if (!words.length) return "";
    return words[wordIndex % words.length].word ?? "";
  }, [words, wordIndex]);

  // Typing / deleting loop
  useEffect(() => {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);

    if (!isDeleting && charIndex < currentWord.length) {
      // typing
      timeoutRef.current = window.setTimeout(() => {
        startTransition(() => {
          setDisplayed(currentWord.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        });
      }, typingSpeed);
    } else if (!isDeleting && charIndex === currentWord.length) {
      // pause at the end of the word
      timeoutRef.current = window.setTimeout(() => {
        startTransition(() => setIsDeleting(true));
      }, pauseDuration);
    } else if (isDeleting && charIndex > 0) {
      // deleting
      timeoutRef.current = window.setTimeout(() => {
        startTransition(() => {
          setDisplayed(currentWord.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
        });
      }, deletingSpeed);
    } else if (isDeleting && charIndex === 0) {
      // move to next word
      timeoutRef.current = window.setTimeout(() => {
        startTransition(() => {
          setIsDeleting(false);
          setWordIndex((i) => (i + 1) % words.length);
        });
      }, pauseDuration);
    }

    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [
    charIndex,
    isDeleting,
    currentWord,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    words.length,
  ]);

  // Blinking cursor
  useEffect(() => {
    if (blinkRef.current) window.clearInterval(blinkRef.current);
    blinkRef.current = window.setInterval(() => {
      startTransition(() => setShowCursor((v) => !v));
    }, 500);
    return () => {
      if (blinkRef.current) window.clearInterval(blinkRef.current);
    };
  }, []);

  // Numeric font size for cursor height calculation
  const numericFontSize = useMemo(() => {
    const fs =
      font?.fontSize ?? (style?.fontSize as string | number | undefined) ?? 32;
    if (typeof fs === "number") return fs;
    if (typeof fs === "string" && fs.endsWith("px")) {
      return parseFloat(fs);
    }
    return 32;
  }, [font?.fontSize, style?.fontSize]);

  return (
    <span
      className={className}
      style={{
        ...style,
        ...font,
        color: textColor,
        display: "inline-flex",
        alignItems: "center",
        minWidth: 1,
        minHeight: 1,
        width: "max-content",
        height: "max-content",
        whiteSpace: "pre",
      }}
      aria-live="polite"
    >
      {displayed}
      <span
        aria-hidden="true"
        style={{
          display: "inline-block",
          background: cursorColor,
          width: cursorWidth,
          height: numericFontSize * (cursorHeight / 100),
          marginLeft: 2,
          marginRight: 2,
          verticalAlign: "bottom",
          opacity: showCursor ? 1 : 0,
          transition: "opacity 0.1s",
          borderRadius: 2,
        }}
      />
    </span>
  );
}
