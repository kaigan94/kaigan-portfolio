import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "new-portfolio",
    title: "Modern Portfolio",
    period: {
      start: "09.2025",
      end: "",
    },
    link: "https://example.com",
    skills: [
      "React",
      "TypeScript",
      "Motion",
      "Tailwind CSS",
      "Radix UI",
      "Next.js",
      "shadcn/ui",
      "Figma",
      "Canva",
    ],
    description: `A minimal portfolio, blog and component library.  
- Built while practicing TypeScript, Next.js, Radix UI, Tailwind CSS and Framer Motion  
- Helped me get comfortable with Next.js and creating clean layouts
- Clean and modern design
- Light and dark theme support
- vCard integration
- Spam protected email

Blog Features:
- MDX and markdown support
- RSS Feed for easy content distribution
- Syntax Highlighting for better readability`,
    logo: "/icons/favicons/favicon.svg",
    isExpanded: true,
  },
  {
    id: "rpg-portfolio",
    title: "RPG Inspired Portfolio",
    period: {
      start: "03.2025",
      end: "",
    },
    link: "https://nicholas-sjostrand.netlify.app/",
    skills: ["HTML", "CSS", "JavaScript", "React", "Piskel"],
    description: `- My first bigger project where I learned the basics of React  
- Inspired by old-school RPG games with custom and reworked pixel art from Piskel  
- A playful way for me to practice coding while also showing my projects`,
    logo: "icons/project-icons/rpg-portfolio.svg",
    // isExpanded: true,
  },
  {
    id: "noctra",
    title: "Noctra Counting App",
    period: {
      start: "09.2024",
      end: "",
    },
    link: "https://noctra.netlify.app/",
    skills: ["HTML", "CSS", "JavaScript"],
    description: `A small practice project where I learned core JavaScript and DOM handling
- Count up/down, then save snapshots to a history
- See total entries and “last updated”
- Remove single counts, or reset everything
- Mobile-friendly design with large buttons
- One-click export of the saved history to a .txt file
- Minimal dark theme with playful, fantasy-styled layout`,
    logo: "/icons/project-icons/noctra-app.svg",
  },
  {
    id: "cocktaildb",
    title: "Cocktail Explorer API",
    period: {
      start: "11.2024",
      end: "12.2024",
    },
    link: "https://kaigan-cocktail-app.netlify.app/",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "TheCocktailDB API",
      "Canva",
    ],
    description: `School project made to practice working with APIs using the free TheCocktailDB API.
    - Features search by name or ingredient, plus saving favorites  
    - Built with vanilla JavaScript and styled with Tailwind CSS
    - Custo logo made in Canva
    `,
    logo: "/icons/project-icons/cocktail-app.svg",
  },
  // Add more project entries by duplicating the object above
];
