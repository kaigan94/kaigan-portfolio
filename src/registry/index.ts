import type { Registry } from "shadcn/schema";

import { components } from "./registry-components";
import { examples } from "./registry-examples";
import { hook } from "./registry-hook";
import { lib } from "./registry-lib";

const registry: Registry = {
  name: "kaigan",
  homepage: "/components",
  items: [
    ...lib,
    ...hook,
    ...components,
    // Internal use only
    ...examples,
  ],
};

export { registry }; // named export
export default registry; // default export
