// Import images with dynamic imports for better code splitting
const logo = new URL("./mb-logo.svg", import.meta.url).href;
const backend = new URL("./backend.png", import.meta.url).href;
const creator = new URL("./creator.png", import.meta.url).href;
const mobile = new URL("./mobile.png", import.meta.url).href;
const web = new URL("./web.png", import.meta.url).href;
const github = new URL("./github.png", import.meta.url).href;
const menu = new URL("./menu.svg", import.meta.url).href;
const close = new URL("./close.svg", import.meta.url).href;

// Tech icons
const css = new URL("./tech/css.png", import.meta.url).href;
const docker = new URL("./tech/wordpress.png", import.meta.url).href;
const figma = new URL("./company/shopify.png", import.meta.url).href;
const git = new URL("./tech/git.png", import.meta.url).href;
const html = new URL("./tech/html.png", import.meta.url).href;
const javascript = new URL("./tech/javascript.png", import.meta.url).href;
const mongodb = new URL("./tech/mongodb.png", import.meta.url).href;
const nodejs = new URL("./tech/nodejs.png", import.meta.url).href;
const reactjs = new URL("./tech/reactjs.png", import.meta.url).href;
const redux = new URL("./tech/squarespace.png", import.meta.url).href;
const tailwind = new URL("./tech/tailwind.png", import.meta.url).href;
const typescript = new URL("./tech/blender.png", import.meta.url).href;
const threejs = new URL("./tech/threejs.svg", import.meta.url).href;

// Company logos
const meta = new URL("./company/meta.png", import.meta.url).href;
const shopify = new URL("./company/shopify.png", import.meta.url).href;
const starbucks = new URL("./company/starbucks.png", import.meta.url).href;
const tesla = new URL("./company/tesla.png", import.meta.url).href;

// Preload critical images
const preloadImages = () => {
  const criticalImages = [logo, menu, close];
  criticalImages.forEach(src => {
    const img = new Image();
    img.src = src;
  });
};

// Call preload on module load
preloadImages();

export {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  docker,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  typescript,
  threejs,
  meta,
  shopify,
  starbucks,
  tesla,
};
