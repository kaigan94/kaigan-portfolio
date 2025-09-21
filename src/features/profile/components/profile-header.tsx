import { SimpleTooltip } from "@/components/ui/tooltip";
import { USER } from "@/features/profile/data/user";
import { cn } from "@/lib/utils";
import { FlipSentences } from "@/registry/flip-sentences";

import { PronounceMyName } from "./pronounce-my-name";
import { VerifiedIcon } from "./verified-icon";

export function ProfileHeader() {
  return (
    <div className="screen-line-after flex border-x border-edge">
      <div className="shrink-0 border-r border-edge">
        <div className="mx-[2px] my-[3px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="size-32 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none sm:size-40"
            alt={`${USER.displayName}'s avatar`}
            src={USER.avatar}
            fetchPriority="high"
          />
        </div>

        <SimpleTooltip content="I'm from Sweden">
          {/* Sweden flag (inline SVG) */}
          <svg
            className="absolute top-0 -left-px h-8 sm:h-9"
            viewBox="0 0 30 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
          >
            {/* Blue background */}
            <rect width="22" height="14" fill="#006AA7" />
            {/* Yellow cross */}
            <rect x="0" y="5" width="22" height="4" fill="#FECC00" />
            <rect x="5" y="0" width="4" height="14" fill="#FECC00" />
          </svg>
        </SimpleTooltip>
      </div>

      <div className="flex flex-1 flex-col">
        <div
          className={cn(
            "flex grow items-end pb-1 pl-4",
            "bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] [--pattern-foreground:var(--color-edge)]/56"
          )}
        >
          <div className="line-clamp-1 font-mono text-xs text-zinc-300 select-none max-sm:hidden dark:text-zinc-800">
            {"text-3xl "}
            <span className="inline dark:hidden">text-zinc-950</span>
            <span className="hidden dark:inline">text-zinc-50</span>
            {" font-medium"}
          </div>
        </div>

        <div className="border-t border-edge">
          <h1 className="flex flex-col items-start justify-center gap-y-2 px-4 py-3 text-2xl leading-none font-semibold tracking-tight sm:flex-row sm:flex-wrap sm:items-center sm:justify-start sm:gap-x-2 sm:gap-y-0 sm:py-2 sm:pr-0 sm:text-3xl sm:leading-tight">
            <span className="leading-none sm:leading-tight">
              {USER.displayName}
            </span>
            <div className="flex items-center gap-x-2">
              <SimpleTooltip content="Verified">
                <VerifiedIcon className="size-[0.7em] shrink-0 text-info select-none" />
              </SimpleTooltip>
              {USER.namePronunciationUrl && (
                <PronounceMyName
                  className="shrink-0"
                  namePronunciationUrl={USER.namePronunciationUrl}
                />
              )}
            </div>
          </h1>

          <div className="flex h-10 items-center border-t border-edge py-1 pl-4 sm:h-auto sm:py-2">
            <FlipSentences sentences={USER.flipSentences} />
          </div>
        </div>
      </div>
    </div>
  );
}
