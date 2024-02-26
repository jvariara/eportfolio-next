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
};

export const navLinks = [
  { name: "About", href: "/" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const PROJECTS = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
    name: "Threads Clone",
    github_url: "https://github.com/jvariara/threads-clone",
    live_url: "https://threads-clone-one-tan.vercel.app/",
    description:
      "A clone based off of the popular social media application Threads. Users can join and post a thread, and create/join a community of interest",
    tech: ["nextjs", "tailwind_css", "mongodb", "typescript"],
    images: [
      "/images/Threads/ThreadsHome.png",
      "/images/Threads/ThreadsCreate.png",
      "/images/Threads/ThreadsActivity.png",
      "/images/Threads/ThreadsSearch.png",
      "/images/Threads/ThreadsCommunities.png",
      "/images/Threads/ThreadsPost.png",
      "/images/Threads/ThreadsCommunityPage.png",
      "/images/Threads/ThreadsProfile.png",
    ],
  },
  {
    id: 4,
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
