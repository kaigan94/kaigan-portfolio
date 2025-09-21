import type { Registry } from "shadcn/schema";

export const examples: Registry["items"] = [
  {
    name: "theme-switcher-demo",
    type: "registry:example",
    registryDependencies: ["theme-switcher"],
    files: [
      {
        path: "examples/theme-switcher-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "work-experience-demo",
    type: "registry:example",
    registryDependencies: ["work-experience"],
    files: [
      {
        path: "examples/work-experience-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
