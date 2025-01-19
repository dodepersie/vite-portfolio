import p1 from "./../assets/projects/1.png"; // MoofliXXI
import p2 from "./../assets/projects/2.png"; // MLBB WR Counter
import p3 from "./../assets/projects/3.png"; // Laravel BLog
import p4 from "./../assets/projects/4.png"; // Pilpres 2024
import p5 from "./../assets/projects/5.png"; // TicTic

import helpLogo from "./../assets/edu/help.png";
import stikomLogo from "./../assets/edu/stikom.png";

export const education = [
  {
    logo: helpLogo,
    name: "HELP University",
    desc: "Bachelor of Information Technology Honours Degree",
    year: "September 2019 - April 2025",
    link: "https://university.help.edu.my/",
  },
  {
    logo: stikomLogo,
    name: "Institut Teknologi dan Bisnis STIKOM Bali",
    desc: "Sarjana Komputer - Information System",
    year: "September 2019 - June 2025",
    link: "https://stikom-bali.ac.id/",
  },
];

export const workingExp = [
  {
    logo: helpLogo,
    name: "HELP University",
    desc: "Bachelor of Information Technology Honours Degree",
    year: "September 2019 - present",
    link: "https://university.help.edu.my/",
  },
  {
    logo: stikomLogo,
    name: "Institut Teknologi dan Bisnis STIKOM Bali",
    desc: "Sarjana Komputer - Information System",
    year: "September 2019 - present",
    link: "https://stikom-bali.ac.id/",
  },
];

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
    name: "Tailwind",
    icon: "https://img.icons8.com/fluency/96/tailwind_css.png",
  },
  {
    name: "React",
    icon: "https://img.icons8.com/color/96/000000/react-native.png",
  },
  {
    name: "PHP",
    icon: "https://img.icons8.com/ios-filled/96/php-logo.png",
  },
  {
    name: "Vuejs",
    icon: "https://img.icons8.com/?size=256&id=BUnExfsRs3CW&format=png",
  },
];

export const projects = [
  {
    title: "TicTic",
    description:
      "For Final Year project. This is a website to manage ticketing for events.",
    image: p5,
    tags: ["Laravel", "Tailwind"],
    visit: "/",
  },
  {
    title: "MLBB WR Counter",
    description:
      "To estimate how many matches you need to get Hero Win Rate you want.",
    image: p2,
    tags: ["Bootstrap", "JS", "HTML", "CSS"],
    visit: "https://penghitung-wr-mlbb.vercel.app/",
  },
  {
    title: "MoofliXXI",
    description:
      "See popular movies, see playing movies on cinema and search for movies!",
    image: p1,
    tags: ["Next UI", "React"],
    visit: "https://mooflixxi.mahadisaputra.my.id/",
  },
  {
    title: "Laravel Blog",
    description:
      "My personal blog where I'll share my experiences and also a ✨ little ✨ thing that I know.",
    image: p3,
    tags: ["Laravel", "Tailwind"],
    visit: "https://mahadisaputra.my.id/",
  },
  {
    title: "Real Count Pilpres Nasional 2024",
    description:
      "Just a fun project to fetch Indonesia president election quick count data from kpu.go.id website",
    image: p4,
    tags: ["NextJS", "Tailwind"],
    visit: "https://pilpres2024.mahadisaputra.my.id/",
  },
];
