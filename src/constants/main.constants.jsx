import { faCode, faUsers, faHashtag  } from "@fortawesome/free-solid-svg-icons";

import p1 from './../assets/projects/1.png' // MoofliXXI
import p2 from './../assets/projects/2.png' // MLBB WR Counter
import p3 from './../assets/projects/3.png' // v1 Portfolio
import p4 from './../assets/projects/4.png' // v2 Portfolio

export const techStack = [
    {'logo': faHashtag, 'name': 'frame_work', dec: 'Bootstrap, Laravel, mySQL, Next JS, React JS, Tailwind, Vite+React'},
    {'logo': faUsers, 'name': 'team_work', dec: 'Can collaborate with friends and also using GitHub'},
    {'logo': faCode, 'name': 'web_dev', dec: 'CSS, HTML, PHP, Web Deployment & WordPress'},
];

export const projects = [
    {
      id: 1,
      title: 'MLBB WR Counter',
      description:"To find estimate of how many matches you need to get the Win Rate you want.",
      image: p2,
      tags: ['Bootstrap', 'JS', 'HTML', 'CSS'],
      source: 'https://github.com/dodepersie/penghitung-wr-mlbb',
      visit: 'http://penghitung-wr-mlbb.vercel.app/',
    },
    {
      id: 2,
      title: 'MoofliXXI',
      description: "See popular movies, see playing movies on cinema and search for movies! API provided by TMDB.",
      image: p1,
      tags: ['Next UI', 'React JS'],
      source: 'https://github.com/dodepersie/movie-api-by-tmdb',
      visit: 'http://movie-api-by-tmdb.vercel.app/',
    },
    {
      id: 3,
      title: 'v1 Portfolio',
      description: "Mahadi Saputra'\s first & complete portfolio website. This website is in Indonesian Language.",
      image: p3,
      tags: ['Bootstrap', 'CSS', 'React JS'],
      source: 'https://github.com/dodepersie/landing',
      visit: 'https://v1.mahadisaputra.my.id/',
    },
    {
      id: 4,
      title: 'v2 Portfolio',
      description: "Mahadi Saputra'\s second portfolio website created with Next JS!",
      image: p4,
      tags: ['Next JS', 'Style Components'],
      source: 'https://github.com/dodepersie/nextjs-portofolio',
      visit: 'https://v2.mahadisaputra.my.id/',
    },
];