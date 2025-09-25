"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";

const ParticlesWaves = dynamic(() => import("./particles-waves"), {
  ssr: false,
});

export function Hero() {
  const isMobile = useMediaQuery("(max-width: 40rem)");

  const particlesProps = {
    amountX: isMobile ? 90 : 160,
    amountY: isMobile ? 28 : 45,
    separation: isMobile ? 70 : 100,
    amplitude: isMobile ? 24 : 40,
    speed: isMobile ? 0.02 : 0.025,
    dprLimit: 3,
    cameraFov: isMobile ? 95 : 85,
    cameraHeight: isMobile ? 250 : 310,
    sideMotion: isMobile ? 30 : 80,
    pointSize: isMobile ? 7 : 9,
  } as const;

  return (
    <section className="screen-line-before screen-line-after flex flex-col items-center gap-6 border-x border-edge bg-black/0.75 bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[12px_12px] bg-center px-4 py-10 text-center [--pattern-foreground:var(--color-zinc-950)]/5 before:-top-px after:-bottom-px sm:gap-8 sm:py-18 dark:bg-white/0.75 dark:[--pattern-foreground:var(--color-white)]/5">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <ParticlesWaves {...particlesProps} />
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
          className="h-9 w-auto invert filter dark:invert-0"
          priority
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut", delay: 0.15 }}
        className="flex flex-wrap items-center justify-center gap-5 py-0 sm:gap-6 sm:py-1"
      >
        <Button
          variant="outline"
          size="lg"
          className="min-w-[100px] rounded-full px-6"
          onClick={() =>
            document
              .getElementById("projects")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          View Projects
        </Button>

        <Button
          asChild
          size="lg"
          variant="outline"
          className="min-w-[100px] rounded-full px-6"
        >
          <Link href="/blog">Read Blog</Link>
        </Button>
      </motion.div>
    </section>
  );
}
