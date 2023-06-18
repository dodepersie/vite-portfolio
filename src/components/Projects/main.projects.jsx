import { faTerminal } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProjectSwiper from "./swiper.projects";

export const Projects = () => {
  return (
    <>
      <section id="projects">
        <div className="hero min-h-screen bg-gray-50 dark:bg-slate-800 dark:text-gray-50 p-auto md:p-4 transition-colors duration-50">
          <div className="hero-content flex-wrap">
            <div className="text-base tracking-tight mt-auto" data-aos="fade-up">
                <div className="inline-flex flex-wrap justify-start items-center text-3xl pb-4">
                  <FontAwesomeIcon
                    icon={faTerminal}
                    className="inline-block mr-2.5 mt-1 text-2xl"
                  />
                  <h2 className="font-semibold my-2">Recent Projects</h2>
                </div>

                <p className="mb-5 font-normal text-md lg:text-lg leading-loose">
                  I&apos;ve done some projects by myself & I&apos;m a Front-End
                  addict and currently learning about Back-End (≧∇≦)ﾉ
                </p>

                <ProjectSwiper />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
