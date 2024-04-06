import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProjectSwiper from "./swiper.projects";

export const Projects = () => {
  return (
    <section id="projects">
      <div className="hero min-h-screen dark:bg-slate-900 dark:text-gray-50 p-auto md:p-4 transition-colors duration-50">
        <div className="hero-content px-5 py-10">
          <div
            className="lg:grid grid-cols-6 gap-10 justify-between text-base tracking-tight mt-auto"
            data-aos="fade-up"
          >
            <div className="col-span-3 flex flex-col justify-center items-center pb-4 gap-4">
              <h3 className="my-2 text-3xl lg:text-5xl text-black dark:text-white">
                My Recent
              </h3>
              <h1 className="font-semibold text-5xl lg:text-7xl text-blue-700 dark:text-blue-400">
                Projects
              </h1>
              <p className="text-[18px] lg:text-[20px] my-5">
                Some projects that I've made~
              </p>
            </div>

            <div className="col-span-3">
              <ProjectSwiper />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
