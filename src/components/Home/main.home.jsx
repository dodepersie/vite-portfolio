import { Typewriter } from "react-simple-typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleDown,
  faFileDownload,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import photo1 from "./../../assets/1.png";

export const Home = () => {
  return (
    <section id="home">
      <div className="hero min-h-screen p-auto md:p-4 bg-gradient-to-br from-blue-500 via-blue-400 to-blue-200 dark:from-slate-900 dark:via-slate-700 dark:to-slate-800 dark:text-gray-50 transition-colors ease-in duration-50">
        <div className="hero-content lg:flex-row py-16 px-5 gap-10">
          {/* Greeting */}
          <div
            className="flex flex-col justify-start items-start gap-5"
            data-aos="fade-up"
          >
            <h3 className="text-2xl xl:text-3xl font-bold leading-snug">
              Hello there, i'm
            </h3>
            <h1 className="text-4xl xl:text-7xl font-bold leading-snug text-indigo-700 dark:text-slate-400">
              Mahadi Saputra
            </h1>
            <h3 className="text-2xl xl:text-3xl font-normal">
              <span>A </span>
              <span className="text-indigo-700 dark:text-slate-400 font-semibold">
                <Typewriter
                  words={[
                    "Student",
                    "Learner",
                    "Code Enthusiast",
                    "Web Developer",
                  ]}
                  loop={999}
                  typeSpeed={100}
                  deleteSpeed={100}
                  delaySpeed={1000}
                  cursorBlinking
                  cursor
                  cursorStyle="_"
                />
              </span>
            </h3>
            <p className="prose text-[16px] md:text-[20px] leading-loose">
              Experienced full stack web developer who loves to created a UI
              friendly website and like to learn more about web development
              technologies!
            </p>

            <div className="flex justify-center items-center gap-1.5">
              <Link
                to="projects"
                isDynamic={true}
                spy={true}
                smooth={true}
                duration={100}
                className="btn bg-blue-500 hover:bg-blue-600 active:bg-blue-700 dark:bg-slate-500 dark:hover:bg-slate-600 dark:active:bg-slate-700 text-gray-50 border-0"
              >
                <FontAwesomeIcon
                  icon={faArrowCircleDown}
                  className="me-4 animate-bounce"
                />
                My projects
              </Link>

              <a
                href="https://linkedin.com/in/mahadisaputra"
                className="btn border-slate-900 bg-base-100 hover:bg-base-100/80 text-black"
                target="_blank"
              >
                <FontAwesomeIcon icon={faFileDownload} className="me-4" />
                Download CV
              </a>
            </div>
          </div>

          {/* Hero image */}
          <picture
            className="relative hidden overflow-hidden lg:block w-[600px] h-[400px] rounded-3xl shadow-xl"
            data-aos="fade-down"
          >
            <img
              src={photo1}
              className="w-full h-full duration-150 ease-in hover:scale-110"
            />
          </picture>
        </div>
      </div>
    </section>
  );
};
