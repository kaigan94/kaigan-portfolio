import type { TechStack } from "../types/tech-stack";

export const TECH_STACK: TechStack[] = [
  // --- Languages ---
  {
    key: "html",
    title: "HTML5",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    categories: ["Language"],
  },
  {
    key: "css",
    title: "CSS3",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    categories: ["Language"],
  },
  {
    key: "js",
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    categories: ["Language"],
  },
  {
    key: "typescript",
    title: "TypeScript",
    href: "https://www.typescriptlang.org/",
    categories: ["Language"],
  },
  {
    key: "java",
    title: "Java",
    href: "https://www.java.com/",
    categories: ["Language"],
  },

  // --- Frameworks & Libraries ---
  {
    key: "react",
    title: "React",
    href: "https://react.dev/",
    categories: ["Library", "UI Library"],
  },
  {
    key: "nextjs2",
    title: "Next.js",
    href: "https://nextjs.org/",
    categories: ["Framework"],
    theme: true,
  },
  {
    key: "spring",
    title: "Spring",
    href: "https://spring.io/",
    categories: ["Framework"],
  },
  {
    key: "tailwindcss",
    title: "Tailwind CSS",
    href: "https://tailwindcss.com/",
    categories: ["Framework"],
  },
  {
    key: "shadcn-ui",
    title: "shadcn/ui",
    href: "https://ui.shadcn.com/",
    categories: ["Library", "Component Library"],
    theme: true,
  },
  {
    key: "radixui",
    title: "Radix UI",
    href: "https://www.radix-ui.com/",
    categories: ["Library", "Component Library"],
    theme: true,
  },
  {
    key: "motion",
    title: "Motion",
    href: "https://motion.dev/",
    categories: ["Library", "Animation"],
  },

  // --- Runtime & Backend ---
  {
    key: "nodejs",
    title: "Node.js",
    href: "https://nodejs.org/",
    categories: ["Runtime Environment"],
  },

  // --- Database ---
  {
    key: "my-sql",
    title: "MySQL",
    href: "https://www.mysql.com/",
    categories: ["Database"],
  },

  // --- Tools (API, Version Control, IDE) ---
  {
    key: "postman",
    title: "Postman",
    href: "https://www.postman.com/",
    categories: ["Tools", "API"],
  },
  {
    key: "git",
    title: "Git",
    href: "https://git-scm.com/",
    categories: ["Version Control"],
  },
  {
    key: "intellij",
    title: "IntelliJ IDEA",
    href: "https://www.jetbrains.com/idea/",
    categories: ["Tools", "IDE"],
  },
  {
    key: "vscode",
    title: "VS Code",
    href: "https://code.visualstudio.com/",
    categories: ["Tools", "IDE"],
  },

  // --- Design Tools ---
  {
    key: "photoshop",
    title: "Photoshop",
    href: "https://www.adobe.com/products/photoshop.html",
    categories: ["Tools", "Design"],
  },
  {
    key: "canva",
    title: "Canva",
    href: "https://www.canva.com/",
    categories: ["Tools", "Design"],
  },
  {
    key: "figma",
    title: "Figma",
    href: "https://www.figma.com/",
    categories: ["Tools", "Design"],
  },

  // --- AI Tools ---
  {
    key: "chat-gpt",
    title: "ChatGPT",
    href: "https://chatgpt.com/",
    categories: ["Tools", "AI"],
    theme: true,
  },
];
