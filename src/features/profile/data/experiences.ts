import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "work-1",
    companyName: "Teknikhögskolan, Lund",
    companyLogo: "/icons/th-logga.svg",
    positions: [
      {
        id: "pos-1",
        title: "Fullstack Development Student",
        employmentPeriod: {
          start: "2024",
          end: "",
        },
        employmentType: "Full-time studies",
        icon: "code",
        description: "Two-year Higher Vocational Education (YH) program.",
        skills: [],
        isExpanded: false,
      },
    ],
    isCurrentEmployer: true,
  },

  // Education
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "edu-1",
        title: "Fullstack Developer (JavaScript focus)",
        employmentPeriod: {
          start: "2024",
          end: "2026",
        },
        employmentType: "Education",
        icon: "education",
        description:
          "Two-year full-time Higher Vocational Education (YH) at Teknikhögskolan, Lund. Emphasis on JavaScript, Node.js, Java, Spring Boot/Security, databases, testing, and version control. Includes practical projects and a six-month internship (LIA) preparing for a tech role.",

        skills: [
          "JavaScript",
          "HTML",
          "CSS",
          "Node.js",
          "Java",
          "Spring Boot",
          "Spring Security",
          "SQL",
          "Git",
          "Postman",
        ],
        isExpanded: true,
      },
      {
        id: "edu-2",
        title: "Painter and Decorator — Municipal Adult Education (Komvux)",
        employmentPeriod: {
          start: "2022",
          end: "2023",
        },
        employmentType: "Education",
        icon: "education",
        description:
          "One-year adult education at Vipan, Lund (Komvux). Training in surface preparation, interior/exterior painting techniques, materials, and safety procedures through practical workshop assignments.",
        skills: [
          "Painting",
          "Surface Preparation",
          "Color Theory",
          "Safety Protocols",
          "Teamwork",
          "Time Management",
          "Attention to Detail",
        ],
        isExpanded: false,
      },
      {
        id: "edu-3",
        title: "Furniture Carpentry — Municipal Adult Education (Komvux)",
        employmentPeriod: {
          start: "2020",
          end: "2021",
        },
        employmentType: "Education",
        icon: "education",
        description:
          "One-year adult education in Malmö (Komvux). Practical woodworking, joinery, and basic furniture design; project-based builds from plan to finished piece.",
        skills: ["Woodworking", "Furniture Design", "Tool Use"],
        isExpanded: false,
      },
      {
        id: "edu-4",
        title: "Graphic Design",
        employmentPeriod: {
          start: "2010",
          end: "2013",
        },
        employmentType: "High School Education",
        icon: "education",
        description:
          "Three-year program at Mediegymnasiet, Malmö. Visual communication and digital media, including Photoshop, Illustrator, and InDesign; fundamentals of typography, layout, and basic front-end (HTML).",
        skills: [
          "Graphic Design",
          "Adobe Photoshop",
          "Adobe Illustrator",
          "Adobe InDesign",
          "Typography",
          "Layout Design",
          "Creativity",
          "HTML",
        ],
        isExpanded: false,
      },
    ],
  },
];
