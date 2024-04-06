import { Typewriter } from "react-simple-typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import photo1 from "./../../assets/1.png";

export const Home = () => {
  return (
    <>
      <section id="hero">
        <div className="container-fluid text-gray-50 overflow-hidden">
          <div className="flex justify-between items-center min-h-screen text-black bg-gradient-to-br from-blue-300 to-white dark:from-slate-900 dark:via-slate-700 dark:to-slate-800 dark:text-gray-50 transition-colors duration-50">
            <div className="flex flex-col lg:flex-row items-center mx-auto px-3 max-w-7xl gap-10">
              {/* Greeting */}
              <div className="w-full mx-auto px-3" data-aos="fade-up">
                <div className="flex flex-col justify-start items-start gap-5">
                  <h3 className="text-xl xl:text-3xl font-bold leading-snug">
                    Hello there, i'm
                  </h3>

                  <h1 className="text-3xl xl:text-7xl font-bold leading-snug text-blue-700 dark:text-blue-400">
                    Mahadi Saputra
                  </h1>

                  <h3 className="text-2xl xl:text-3xl font-normal">
                    <span>A </span>
                    <span className="text-blue-500 dark:text-blue-400 font-semibold">
                      <Typewriter
                        words={[
                          "Student",
                          "Learner",
                          "Dreamer",
                          "Code Enthusiast",
                          "Web Developer",
                        ]}
                        loop={999}
                        typeSpeed={100}
                        deleteSpeed={100}
                        delaySpeed={1000}
                      />
                    </span>
                  </h3>

                  <p className="prose text-xl leading-loose">
                    Experienced full stack web developer who loves to created a
                    UI friendly website and like to learn more about web
                    development technologies!
                  </p>

                  <Link
                    to="projects"
                    isDynamic={true}
                    spy={true}
                    smooth={true}
                    duration={100}
                    className="btn bg-blue-500 hover:bg-blue-600 active:bg-blue-700 dark:bg-slate-500 dark:hover:bg-slate-600 dark:active:bg-slate-700 text-gray-50 border-0 w-full lg:w-40"
                  >
                    <FontAwesomeIcon
                      icon={faArrowCircleDown}
                      className="mr-4 animate-bounce"
                    />
                    My projects
                  </Link>
                </div>
              </div>

              {/* Hero image */}
              <div className="hidden lg:block" data-aos="fade-down">
                <img
                  src={photo1}
                  className="w-[450px] h-[350px] rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
