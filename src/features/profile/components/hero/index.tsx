"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

import TypewriterEffect from "./typewriter-effect";
const ParticlesWaves = dynamic(() => import("./particles-waves"), {
  ssr: false,
});

export function Hero() {
  return (
    <section className="screen-line-before screen-line-after flex flex-col items-center gap-3 border-x border-edge bg-black/0.75 bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center px-4 py-8 text-center [--pattern-foreground:var(--color-zinc-950)]/5 before:-top-px after:-bottom-px sm:py-12 dark:bg-white/0.75 dark:[--pattern-foreground:var(--color-white)]/5">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <ParticlesWaves
          amountX={160}
          amountY={45}
          separation={100}
          amplitude={45}
          speed={0.02}
          dprLimit={2}
          cameraFov={100}
          cameraHeight={310}
          sideMotion={80}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="relative inline-flex"
      >
        <Image
          src="/icons/favicons/favicon-full-transparent.svg"
          alt="Kaigan wordmark"
          width={108}
          height={32}
          className="h-8 w-auto invert filter dark:invert-0"
          priority
        />
      </motion.div>
      <TypewriterEffect
        className="text-lg leading-none text-muted-foreground"
        words={[
          { word: "Fullstack Student" },
          { word: "Frontend Developer" },
          { word: "Backend Explorer" },
          { word: "Open For Work :)" },
        ]}
        typingSpeed={110}
        deletingSpeed={40}
        pauseDuration={1200}
        cursorColor="currentColor"
        cursorWidth={1}
        cursorHeight={70}
      />
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
        className="max-w-prose text-muted-foreground"
      ></motion.p>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut", delay: 0.15 }}
        className="flex gap-4 pt-2"
      >
        <button
          onClick={() =>
            document
              .getElementById("projects")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="cursor-pointer rounded-xl border px-4 py-2 transition hover:bg-accent"
        >
          View Projects
        </button>
        <Link
          className="rounded-xl border px-4 py-2 transition hover:bg-accent"
          href="/blog"
        >
          Read Blog
        </Link>
      </motion.div>
    </section>
  );
}
