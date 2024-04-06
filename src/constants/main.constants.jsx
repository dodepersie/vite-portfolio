import { faCode, faUsers, faHashtag } from "@fortawesome/free-solid-svg-icons";

import p1 from "./../assets/projects/1.png"; // MoofliXXI
import p2 from "./../assets/projects/2.png"; // MLBB WR Counter
import p3 from "./../assets/projects/3.png"; // v1 Portfolio
import p4 from "./../assets/projects/4.png"; // v2 Portfolio
import p5 from "./../assets/projects/5.png"; // Laravel BLog
import p6 from "./../assets/projects/6.png"; // v3 Portfolio
import p7 from "./../assets/projects/7.png"; // Undangan Online

// export const techStack = [
//   {
//     logo: faCode,
//     name: "frame_work",
//     dec: "Bootstrap, Laravel, Next.js, Next UI, React, Tailwind (daisyUI, Flowbite & etc), Vue & still learning more",
//   },
//   {
//     logo: faUsers,
//     name: "team_work",
//     dec: "Can collaborate with friends using GitHub",
//   },
//   {
//     logo: faHashtag,
//     name: "web_dev",
//     dec: "Cloudflare, cPanel, Database, Netlify, Vercel",
//   },
// ];

export const techStack = [
  {
    name: "Angular",
    icon: "https://img.icons8.com/color/96/000000/angularjs.png",
  },
  {
    name: "Bootstrap",
    icon: "https://img.icons8.com/color-glass/96/bootstrap.png",
  },
  {
    name: "CSS",
    icon: "https://img.icons8.com/color/96/000000/css3.png",
  },
  {
    name: "HTML",
    icon: "https://img.icons8.com/color/96/000000/html-5.png",
  },
  {
    name: "Laravel",
    icon: "https://img.icons8.com/ios-filled/96/000000/laravel.png",
  },
  {
    name: "mySQL",
    icon: "https://img.icons8.com/ios-filled/96/000000/mysql-logo.png",
  },
  {
    name: "Git",
    icon: "https://img.icons8.com/color/96/000000/git.png",
  },
  {
    name: "Javascript",
    icon: "https://img.icons8.com/color/96/000000/javascript.png",
  },
  {
    name: "Java",
    icon: "https://img.icons8.com/color/96/000000/java-coffee-cup-logo.png",
  },
  {
    name: "Node",
    icon: "https://img.icons8.com/color/96/000000/nodejs.png",
  },
  {
    name: "MongoDB",
    icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/90/external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo.png",
  },
  {
    name: "Tailwind CSS",
    icon: "https://img.icons8.com/fluency/96/tailwind_css.png",
  },
];

export const projects = [
  {
    id: 1,
    title: "MLBB WR Counter",
    description:
      "To find estimate of how many matches you need to get the Win Rate you want.",
    image: p2,
    tags: ["Bootstrap", "JS", "HTML", "CSS"],
    visit: "http://penghitung-wr-mlbb.vercel.app/",
  },
  {
    id: 2,
    title: "MoofliXXI",
    description:
      "See popular movies, see playing movies on cinema and search for movies!",
    image: p1,
    tags: ["Next UI", "React"],
    visit: "http://movie-api-by-tmdb.vercel.app/",
  },
  {
    id: 3,
    title: "v1 Portfolio",
    description:
      "Mahadi Saputra's first & complete portfolio website. This website is in Indonesian Language.",
    image: p3,
    tags: ["Bootstrap", "CSS", "React"],
    visit: "https://v1.mahadisaputra.my.id/",
  },
  {
    id: 4,
    title: "v2 Portfolio",
    description:
      "Mahadi Saputra's second portfolio website created with Next JS.",
    image: p4,
    tags: ["Next JS", "Style Components"],
    visit: "https://v2.mahadisaputra.my.id/",
  },
  {
    id: 5,
    title: "Laravel Blog",
    description:
      "This my blog where I'll share my experiences and also a ✨ little ✨ thing that I know.",
    image: p5,
    tags: ["Laravel", "Tailwind"],
    visit: "http://blog.mahadisaputra.my.id/",
  },
  {
    id: 6,
    title: "v3 Portfolio",
    description:
      "You are on this site now! Here is my v3 Portfolio & I still updating this site to make it more aesthetic.",
    image: p6,
    tags: ["React", "Tailwind"],
    visit: "/",
  },
  {
    id: 7,
    title: "Online Invitation",
    description:
      "Online invitation card for religion event. Build to fit small screen size using Laravel & Vue",
    image: p7,
    tags: ["Laravel", "Tailwind", "Vue"],
    visit: "https://210623.mahadisaputra.my.id/",
  },
];
