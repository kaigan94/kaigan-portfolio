import type { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "Nicholas",
  lastName: "Sjöstrand",
  displayName: "Nicholas Sjöstrand",
  username: "Kaigan",
  gender: "male",
  pronouns: "he/him",
  bio: "Creating with code. Small details matter.",
  flipSentences: ["Coffee Monster", "Gamer", "Coder By Day", "Wizard By Night"],
  address: "Lund, Sweden",
  phoneNumber: "KzQ2NzMwMzQwNDM0", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "a2FpZ2FuLmNvZGVzQGdtYWlsLmNvbQ==", // base64 encoded
  website: "my-domain.com", // Place after deployment
  jobTitle: "Frontend Developer",
  jobs: [
    {
      title: "Fullstack Student",
      company: "Teknikhögskolan",
      website: "https://teknikhogskolan.se/om-oss/studieorter/lund/",
    },
  ],
  about: `
Hello!  
I’m Nicholas, a fullstack student who gravitates toward frontend development.

To me, writing code feels a bit like magic – there’s a lot of logic behind it, but the real joy is in the creativity and problem-solving.

When I’m not deep in code, you’ll probably find me gaming, headbanging, hanging out with my dog and partner, exploring fantasy worlds filled with dragons, swords and magic – or recharging with a big cup of Java ☕️ (pun intended).

From December 8, 2025, I’ll begin a six-month LIA internship as the final part of my studies. I’m looking for a team where I can contribute real work, keep learning, and design projects that stand out. If you’re after a curious, committed intern, I’d love to chat.

Let’s connect!

  `,
  avatar: "/images/kaigan.svg",
  ogImage: "https://min-domän.com/images/welcome.webp", // Place after deployment
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
