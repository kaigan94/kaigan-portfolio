import dynamic from "next/dynamic";
import Image from "next/image";

import { KaiganMark } from "@/components/kaigan-mark";

import { Panel, PanelHeader, PanelTitle } from "./panel";

const BrandContextMenu = dynamic(() =>
  import("@/components/brand-context-menu").then((mod) => mod.BrandContextMenu)
);

export function Brand() {
  return (
    <Panel>
      <PanelHeader>
        <PanelTitle>Brand</PanelTitle>
      </PanelHeader>

      <BrandContextMenu>
        <div className="grid grid-cols-[2rem_1fr]">
          <div className="flex h-28 items-center justify-center border-r border-dashed border-edge bg-background">
            <span className="rotate-270 text-sm text-muted-foreground select-none">
              Logotype
            </span>
          </div>

          <div className="screen-line-after flex items-center justify-center pr-8 after:z-1">
            <KaiganMark className="h-8 w-auto sm:h-12" />
          </div>

          <div className="flex h-28 items-center justify-center border-t border-r border-dashed border-edge bg-background">
            <span className="rotate-270 text-sm text-muted-foreground select-none">
              Wordmark
            </span>
          </div>

          <div className="screen-line-after flex items-center justify-center border-t pr-8 after:z-1">
            <Image
              src="/icons/favicons/favicon-full.svg"
              alt="Kaigan wordmark"
              width={108}
              height={32}
              className="h-8 w-auto sm:h-12"
              priority
            />
          </div>
        </div>
      </BrandContextMenu>
    </Panel>
  );
}
