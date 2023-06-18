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
          <div className="flex justify-between items-center min-h-screen text-black bg-gray-50 dark:bg-slate-800 dark:text-gray-50 transition-colors duration-50">
            <div className="flex flex-col lg:flex-row items-center mx-auto px-3">
              {/* Greeting */}
              <div
                className="w-full mx-auto px-3"
                data-aos="fade-right"
              >
                <div className="flex flex-col justify-start items-start gap-5">
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
                    &quot;Bringing dreams to life through elegant and efficient
                    web development.&quot;
                  </p>

                  <Link
                    to="projects"
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
              <div
                className="hidden lg:block"
                data-aos="fade-left"
              >
                <img src={photo1} className="w-[450px] h-[350px] rounded-lg shadow-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
