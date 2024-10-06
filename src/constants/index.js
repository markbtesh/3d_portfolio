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
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  ae,
  beermayim,
  bhpaint,
  legend,
  malle,
  purify,
  revaya,
  rkmb,
  shoptrakk,
  torn,
  shirt,
  smartContract,
  battleship,
  pokemon,
  micromanager,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
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

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
    img: "https://aecostudios.com/wp-content/portfolio-uploads/2023/09/a64f7fc2-23a1-4158-815e-603ef507b6a1.jpg"
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
    img: "https://aecostudios.com/wp-content/portfolio-uploads/2023/09/tasha-logo.png"
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
    img: "https://aecostudios.com/wp-content/portfolio-uploads/2023/09/05a461cb-40c4-4ba3-98ac-d90fc38b083d.jpg"
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
    img: "https://aecostudios.com/wp-content/portfolio-uploads/2023/11/yinyang.png"
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
      name: "Micro Manager CRM",
    description:
      "A user dashboard for organizing tasks and working on documents with co-workers in real-time",
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
        name: "Draggable",
        color: "blue-text-gradient",
      },
       {
        name: "real-time collaboration",
        color: "green-text-gradient",
      },
    ],
     image: micromanager,
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
        name: "Express",
        color: "pink-text-gradient",
      },
      {
        name: "Vercel",
        color: "green-text-gradient",
      },
       {
        name: "Node.js",
        color: "pink-text-gradient",
      },
    ],
     image: pokemon,
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
    image: battleship,
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
    image: malle,
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
    image: shirt,
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
    image: smartContract,
    link: "web3-smart-contract-app.vercel.app"
  },
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
    image: shoptrakk,
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
    image: legend,
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
    image: revaya,
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
    image: ae,
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
    image: purify,
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
    image: beermayim,
    link: "",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
