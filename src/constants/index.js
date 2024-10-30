import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "fullstack work",
    title: "Fullstack",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Fullstack Developer",
    icon: mobile,
  },
  {
    title: "Responsive Applications",
    icon: backend,
  },
  {
    title: "SEO Optimized",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  
];

const FullstackProjects = [
  {
      name: "Micro Manager CRM",
    description:
      "A user dashboard for organizing tasks and working on documents with co-workers in real-time (Desktop Only)",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "socket.io",
        color: "green-text-gradient",
      },
      {
        name: "Next.js",
        color: "pink-text-gradient",
      },
      {
        name: "Render",
        color: "green-text-gradient",
      },
       {
        name: "Node.js",
        color: "pink-text-gradient",
      },
       {
        name: "Tailwindcss",
        color: "blue-text-gradient",
      },
       {
        name: "real-time collaboration",
        color: "green-text-gradient",
      },
    ],
     image: 'https://d1rz0mlg9ltl84.cloudfront.net/videos/micromanager.mp4',
    link: "react-user-dashboard.onrender.com"
  },
   {
      name: "Pokemon Battle Clone",
    description:
      "A fun Pokemon battle simulator.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "socket.io",
        color: "green-text-gradient",
      },
      {
        name: "Vercel",
        color: "pink-text-gradient",
      },
       {
        name: "Node.js",
        color: "blue-text-gradient",
      },
    ],
     image: 'https://d1rz0mlg9ltl84.cloudfront.net/videos/pokemon.mp4',
    link: "pokemon-battle-eight.vercel.app"
  },
  {
      name: "Epic Battleship!",
    description:
      "An exciting take on Battleship with cool items! Battle against the computer or with your friend online.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "socket.io",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
      {
        name: "Online Multiplayer",
        color: "blue-text-gradient",
      },
      {
        name: "Render",
        color: "green-text-gradient",
      },
       {
        name: "Node.js",
        color: "pink-text-gradient",
      },
    ],
    image: 'https://d1rz0mlg9ltl84.cloudfront.net/videos/battleship.mp4',
    link: "battleship.markbtesh.com"
  },
  {
      name: "pAInter-AI (DALL-e clone)",
    description:
      "Create wonderful images by typing in a prompt for AI to generate.",
    tags: [
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Vercel",
        color: "green-text-gradient",
      },
      {
        name: "OpenAI",
        color: "pink-text-gradient",
      },
    ],
    image: 'https://d1rz0mlg9ltl84.cloudfront.net/videos/malledemo.mp4',
    link: "malle.markbtesh.com"
  },
  {
  name: "T-shirt Designer",
    description:
      "Design a T-shirt/hoodie with custom designs & patterns. Ask AI to make a design to put on the shirt & then download the full mock-up.",
    tags: [
      {
        name: "ThreeJS",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Vercel",
        color: "green-text-gradient",
      },
      {
        name: "OpenAI",
        color: "pink-text-gradient",
      },
    ],
    image: 'https://d1rz0mlg9ltl84.cloudfront.net/videos/shirtcreator.mp4',
    link: "shirt-designer-threejs.vercel.app"
  },
  {
  name: "Crypto Exchange",
    description:
      "Send crypto through the blockchain and see transactions in real-time... kinda like Venmo",
    tags: [
      {
        name: "Web3",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Vercel",
        color: "green-text-gradient",
      },
      {
        name: "Solidity",
        color: "pink-text-gradient",
      },
    ],
    image: 'https://d1rz0mlg9ltl84.cloudfront.net/videos/smart-contract.mp4',
    link: "web3-smart-contract-app.vercel.app"
  },
   
  ];

const projects = [
    {
    name: "Shoptrakk.com",
    description:
     "",
    tags: [
      {
        name: "Wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "Woocommerce",
        color: "green-text-gradient",
      },
      {
        name: "HTML/CSS",
        color: "pink-text-gradient",
      },
    ],
    image: 'https://d1rz0mlg9ltl84.cloudfront.net/videos/shoptrakk.mp4',
    link: "",
  },
  {
    name: "Legendbranding.com",
    description:
      "",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "elementor",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: 'https://d1rz0mlg9ltl84.cloudfront.net/videos/legend.mp4',
    link: "",
  },
  
  
  {
    name: "Revayareserve.com",
    description:
      "",
    tags: [
      {
        name: "shopify",
        color: "blue-text-gradient",
      },
      {
        name: "liquid",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: 'https://d1rz0mlg9ltl84.cloudfront.net/videos/revaya.mp4',
    link: "",
  },
  {
    name: "Autumnestate.co",
    description:
      "",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "woocommerce",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: 'https://d1rz0mlg9ltl84.cloudfront.net/videos/ae.mp4',
    link: "",
  },
  {
    name: "Purify-nyc.com",
    description:
      "",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "woocommerce",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: 'https://d1rz0mlg9ltl84.cloudfront.net/videos/purify.mp4',
    link: "",
  },
  {
    name: "Beermayimseminary.com",
    description:
      "",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "Elementor",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: "https://d1rz0mlg9ltl84.cloudfront.net/videos/beermayim.mp4",
    link: "",
  },
  
];

export { services, technologies,  projects, FullstackProjects };
