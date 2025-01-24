import { Typewriter } from "react-simple-typewriter";
import { FaRegFileLines, FaCircleChevronDown } from "react-icons/fa6";
import { Link } from "react-scroll";
import photo1 from "./../../assets/1.png";

export const Home = () => {
  return (
    <section id="home">
      <div className="hero min-h-screen p-auto md:p-4 bg-gradient-to-br from-blue-500 via-blue-400 to-blue-500 dark:from-slate-900 dark:via-slate-700 dark:to-slate-800 dark:text-gray-50 transition-colors ease-in duration-50">
        <div className="hero-content lg:flex-row py-16 px-5 gap-10 lg:gap-40">
          {/* Greeting */}
          <div
            className="flex flex-col justify-start items-start gap-5 md:w-1/2"
            data-aos="fade-up"
          >
            <h3 className="text-2xl lg:text-3xl font-bold leading-snug">
              Hello there, i'm
            </h3>
            <h1 className="text-5xl lg:text-7xl font-bold leading-snug text-white dark:text-slate-400">
              Mahadi Saputra
            </h1>
            <h3 className="text-3xl">
              <span>A </span>
              <span className="text-blue-800 dark:text-slate-400 font-semibold">
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
            <p className="prose text-[20px] md:text-[22px] leading-loose">
              Experienced full stack web developer who loves to created a UI
              friendly website and like to learn more about web development
              technologies!
            </p>

            <div className="flex justify-center items-center gap-3">
              <Link
                to="projects"
                isDynamic={true}
                spy={true}
                smooth={true}
                duration={100}
                className="btn bg-blue-700 hover:bg-blue-800 active:bg-blue-900 dark:bg-slate-500 dark:hover:bg-slate-600 dark:active:bg-slate-700 text-gray-50 border-0"
              >
                <FaCircleChevronDown className="me-4 animate-bounce" />
                My projects
              </Link>

              <a
                href="https://linkedin.com/in/mahadisaputra"
                className="btn bg-white hover:bg-white text-black border-0"
                target="_blank"
              >
                <FaRegFileLines className="me-2" />
                My CV
              </a>
            </div>
          </div>

          {/* Hero image */}
          <picture
            className="relative hidden overflow-hidden md:block md:w-1/2 lg:w-1/3 rounded-3xl shadow-xl"
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
