import type { ExperienceItemType } from "@/registry/work-experience";
import { WorkExperience } from "@/registry/work-experience";

const WORK_EXPERIENCE: ExperienceItemType[] = [
  {
    id: "teknikhogskolan",
    companyName: "Teknikhögskolan",
    companyLogo: "/images/logos/teknikhogskolan.svg",
    positions: [
      {
        id: "fullstack-student",
        title: "Fullstack Developer Student",
        employmentPeriod: "08.2024 — present",
        employmentType: "Education",
        icon: "code",
        description: `- Prototyping production-ready React/Next.js apps with TypeScript, shadcn/ui, and Tailwind v4.
- Building Java & Spring Boot APIs backed by PostgreSQL, including containerised local environments with Docker Compose.
- Leading project sprints where I facilitate planning, peer code reviews, and documentation to keep the team shipping on time.`,
        skills: [
          "React",
          "Next.js",
          "TypeScript",
          "Java",
          "Spring Boot",
          "MySQL",
          "Docker",
          "GitHub Actions",
          "Agile",
        ],
        isExpanded: true,
      },
      {
        id: "ux-mentor",
        title: "UI/UX Mentor",
        employmentPeriod: "01.2024 — 06.2024",
        employmentType: "Part-time",
        icon: "design",
        description: `- Coached classmates on accessibility-first design and responsive layout systems in Figma.
- Ran moderated usability tests for our campus scheduling tool, translating insights into design system updates.
- Maintained shared component libraries to keep interactions, spacing, and motion consistent across student projects.`,
        skills: [
          "UX Research",
          "Design Systems",
          "Figma",
          "Accessibility",
          "Prototyping",
        ],
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "kaigan-studio",
    companyName: "Kaigan Studio",
    companyLogo: "/images/logos/kaigan.svg",
    positions: [
      {
        id: "freelance-front",
        title: "Freelance Frontend Developer",
        employmentPeriod: "09.2022 — present",
        employmentType: "Freelance",
        icon: "design",
        description: `- Design and ship bespoke marketing sites and dashboards for local creatives using React, Tailwind CSS, and Sanity CMS.
- Integrate third-party APIs (Spotify, Supabase, Google Analytics) to automate content workflows and reporting.
- Deploy client projects to Vercel with automated Lighthouse checks and basic observability through Sentry.`,
        skills: [
          "React",
          "Tailwind CSS",
          "Sanity",
          "Supabase",
          "Vercel",
          "Brand Design",
          "Client Management",
        ],
      },
    ],
  },
];

export default function WorkExperienceDemo() {
  return (
    <WorkExperience
      className="w-full rounded-lg border"
      experiences={WORK_EXPERIENCE}
    />
  );
}
