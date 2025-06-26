/* eslint-disable react/no-unescaped-entities */
import ProjectSwiper from "./swiper.projects";

export const Projects = () => {
  return (
    <section id="projects" className="overflow-hidden">
      <div className="flex items-center min-h-screen dark:bg-slate-900 dark:text-gray-50 px-4 md:px-8 transition-colors ease-in duration-50 py-10">
        <div className="w-full max-w-screen-xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            <div
              className="w-full md:w-5/12 text-center md:text-left"
              data-aos="fade-right"
            >
              <h3 className="font-semibold text-4xl md:text-5xl lg:text-7xl text-black dark:text-white">
                My Recent
              </h3>
              <h1 className="font-semibold text-6xl md:text-7xl lg:text-9xl text-blue-700 dark:text-slate-400 mt-2">
                Projects
              </h1>
              <p className="text-2xl md:text-3xl mt-8">
                Some projects that I've made~
              </p>
              <p className="text-lg md:text-xl mt-4">
                For more show case of my projects, kindly visit my{" "}
                <a
                  href="https://github.com/dodepersie"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 dark:text-blue-300 font-semibold hover:underline"
                >
                  Github
                </a>
                !😊
              </p>
            </div>

            <div className="w-full md:w-7/12" data-aos="fade-left">
              <ProjectSwiper />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
