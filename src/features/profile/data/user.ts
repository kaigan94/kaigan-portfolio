import type { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "Nicholas",
  lastName: "Sjöstrand",
  displayName: "Nicholas Sjöstrand",
  username: "Kaigan",
  gender: "male",
  pronouns: "he/him",
  bio: "Creating with code. Small details matter.",
  flipSentences: [
    "Coffee Monster",
    "Gamer",
    "Aspiring Coder",
    "Frontend Developer",
    "Backend Explorer",
  ],
  address: "Lund, Sweden",
  phoneNumber: "KzQ2NzMwMzQwNDM0", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "a2FpZ2FuLmNvZGVzQGdtYWlsLmNvbQ==", // base64 encoded
  website: "https://kaigan-portfolio.vercel.app/",
  jobTitle: "Frontend Developer",
  jobs: [
    {
      title: "Fullstack Student",
      company: "Teknikhögskolan",
      website: "https://teknikhogskolan.se/om-oss/studieorter/lund/",
    },
  ],
  about: `
Hej, Hi & Welcome 👋   
I’m Nicholas – an aspiring frontend developer & fullstack student, who has completely fallen in love with the art of programming.

When I’m not deep in code, you’ll probably find me gaming, headbanging, hanging out with my dog and partner, exploring fantasy worlds filled with dragons, swords and magic – or recharging with a cup of Java ☕️ (pun intended).

This December I start a six‑month LIA internship, the capstone of my studies. I’m on the hunt for a team that wants someone dedicated, detail-obsessed, and ready to give it all. If that sounds like your crew, let’s talk.
  `,
  avatar: "/images/kaigan.svg",
  ogImage: "/og.png",
  namePronunciationUrl: "/audio/nicholas.mp3",
  keywords: [
    "nicholas sjöstrand",
    "nicholas",
    "nico",
    "kaigan",
    "fullstack",
    "frontend",
    "developer",
    "portfolio",
    "personal",
    "student",
    "portfolio",
    "react",
    "lund",
    "sweden",
  ],
  dateCreated: "2025-09-11", // YYYY-MM-DD
};
