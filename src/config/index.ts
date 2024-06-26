export const TECH_STACK = {
  reactjs: "React.js",
  nextjs: "Next.js",
  javascript: "JavaScript",
  html: "HTML",
  css: "CSS",
  typescript: "TypeScript",
  figma: "Figma",
  trello: "Trello",
  mysql: "MySQL",
  php: "PHP",
  prisma: "Prisma",
  mongodb: "MongoDB",
  tailwind_css: "Tailwind CSS",
  github: "GitHub",
  postgresql: "PostgreSQL",
  trpc: "tRPC",
  openai: "OpenAI",
};

export const technologies = [
  {
    id: 1,
    language: "React",
    picture: "/languages/react.png",
  },
  {
    id: 2,
    language: "Next.js",
    picture: "/languages/Next.js.png",
  },
  {
    id: 3,
    language: "JavaScript",
    picture: "/languages/javascript.png",
  },
  {
    id: 4,
    language: "HTML5",
    picture: "/languages/html5.png",
  },
  {
    id: 5,
    language: "CSS3",
    picture: "/languages/css3.png",
  },
  {
    id: 6,
    language: "Python",
    picture: "/languages/python.png",
  },
  {
    id: 7,
    language: "Java",
    picture: "/languages/java.png",
  },
  {
    id: 8,
    language: "C",
    picture: "/languages/c.png",
  },
];

export const navLinks = [
  { name: "About", href: "/" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const PROJECTS = [
  {
    id: 4,
    name: "Snippy",
    description:
      "A code snippet application where users can upload and share their frequently used code snippets",
    tech: [
      "nextjs",
      "typescript",
      "tailwind_css",
      "postgresql",
      "prisma",
      "trpc",
    ],
    images: [
      "/images/Snippy/Landing.png",
      "/images/Snippy/Dashboard.png",
      "/images/Snippy/Create.png",
      "/images/Snippy/Detail.png",
      "/images/Snippy/Feed.png",
    ],
    live_url: "https://snippy-orpin.vercel.app/",
    github_url: "https://github.com/jvariara/snippy",
  },
  {
    id: 6,
    name: "Transcribot",
    description:
      "Transcribot is a modern SaaS platform which integrates OpenAI to allow users to chat with audio files easily and effectively.",
    tech: [
      "nextjs",
      "openai",
      "typescript",
      "tailwind_css",
      "postgresql",
      "prisma",
      "trpc",
    ],
    images: [
      "/images/Transcribot/Landing.png",
      "/images/Transcribot/pricing.jpg",
      "/images/Transcribot/dashboard.png",
      "/images/Transcribot/upload.png",
      "/images/Transcribot/chat.png",
      "/images/Transcribot/subscription.png",
    ],
    live_url: "https://transcribot.vercel.app/",
    github_url: "https://github.com/jvariara/transcribot",
  },
  {
    id: 1,
    name: "UB Evaluation Tool",
    description:
      "Refactored and modernized UB CSE's current evaluation tool web application with usability in mind. Used for professors to create surveys/rubrics for students to evaluate their teammates for group assignments/project.",
    tech: ["reactjs", "html", "css", "figma", "trello", "mysql", "php"],
    images: [
      "/images/ETool/EToolHome.png",
      "/images/ETool/EToolHistory.png",
      "/images/ETool/EToolLibrary.png",
      "/images/ETool/EToolAddCourse.png",
      "/images/ETool/EToolAddSurvey.png",
      "/images/ETool/EToolViewResults.png",
    ],
  },
  {
    id: 2,
    name: "CircleUB",
    description:
      "A social media web application where students can find clubs throughout the university to join.",
    tech: ["reactjs", "html", "css", "figma", "trello"],
    images: [
      "/images/CircleUB/Landing.png",
      "/images/CircleUB/Login.png",
      "/images/CircleUB/UserHomepage.png",
      "/images/CircleUB/Profile.png",
      "/images/CircleUB/OtherProfile.png",
      "/images/CircleUB/CommentPage.png",
      "/images/CircleUB/DM.png",
    ],
  },
  {
    id: 3,
    name: "DigitalHippo",
    github_url: "https://github.com/jvariara/digitalhippo",
    description:
      "A Digital media E-Commerce website for users to sell their art!",
    tech: ["nextjs", "tailwind_css", "mongodb", "typescript"],
    images: [
      "/images/DigitalHippo/DHLanding.png",
      "/images/DigitalHippo/DHLogin.png",
      "/images/DigitalHippo/DHCart.png",
      "/images/DigitalHippo/DHProduct.png",
      "/images/DigitalHippo/DHCheckout.png",
    ],
  },
  {
    id: 5,
    name: "NFT Marketplace",
    live_url: "https://justin-internship.vercel.app/",
    description:
      "Transformed a completely static HTML, CSS, JavaScript and React single page application into an interactive user interface through the use of animations, transitions and carousels",
    tech: ["reactjs", "html", "css", "javascript", "github"],
    images: [
      "/images/NFTMarket/NFTLanding.png",
      "/images/NFTMarket/NFTExplore.png",
      "/images/NFTMarket/NFTCollections.png",
      "/images/NFTMarket/NFTItem.png",
      "/images/NFTMarket/NFTAuthor.png",
      "/images/NFTMarket/NFTLoading.png",
    ],
  },
];
