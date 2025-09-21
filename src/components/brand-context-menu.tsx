"use client";

import { ContextMenu, ContextMenuTrigger } from "./ui/context-menu";

export function BrandContextMenu({ children }: { children: React.ReactNode }) {
  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>{children}</ContextMenuTrigger>
    </ContextMenu>
  );
}
