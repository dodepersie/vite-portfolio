import { Typewriter } from "react-simple-typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

export const Home = () => {
  return (
    <>
      <div className="wave__wrapper">
        <div className="wave__terbalik wave1__terbalik"></div>
        <div className="wave__terbalik wave2__terbalik"></div>
        <div className="wave__terbalik wave3__terbalik"></div>
        <div className="wave__terbalik wave4__terbalik"></div>
      </div>

      <section id="hero">
        <div className="container-fluid text-gray-50 overflow-hidden">
          <div className="flex justify-between items-center min-h-screen text-black bg-gray-50 dark:bg-slate-800 dark:text-gray-50 transition-colors duration-50">
            <div className="flex justify-between items-end w-full flex-col lg:flex-row-reverse">
              {/* Hero image */}
              <div
                className="hidden lg:inline-block coverBg w-1/3 min-h-screen"
                data-aos="fade-left"
              ></div>

              {/* Greeting */}
              <div
                className="w-full lg:w-2/3 mx-auto px-3 lg:px-8 lg:py-8"
                data-aos="fade-right"
              >
                <div className="flex flex-col gap-5 xl:w-full">
                  <h1 className="text-3xl xl:text-5xl font-bold h-12 leading-snug">
                    I&apos;m Mahadi Saputra
                  </h1>

                  <h3 className="text-2xl xl:text-3xl font-normal">
                    <span>A </span>
                    <span className="text-blue-500 dark:text-slate-500 font-semibold">
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

                  <p className="text-lg leading-loose">
                    &quot;Unleash your potential, ignite your passion, and
                    embark on a transformative journey of self-discovery and
                    success!&quot;
                  </p>

                  <Link
                    to="projects"
                    className="btn bg-blue-500 hover:bg-blue-600 active:bg-blue-700 dark:bg-slate-500 dark:hover:bg-slate-600 dark:active:bg-slate-700 text-gray-50 border-0 lg:w-40"
                  >
                    <FontAwesomeIcon
                      icon={faArrowCircleDown}
                      className="mr-4"
                    />
                    My projects
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
