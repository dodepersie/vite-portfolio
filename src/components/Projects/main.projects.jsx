import ProjectSwiper from "./swiper.projects";

export const Projects = () => {
  return (
    <section id="projects">
      <div className="hero min-h-screen dark:bg-slate-900 dark:text-gray-50 p-auto md:p-4 transition-colors ease-in duration-50">
        <div className="hero-content py-10">
          <div className="md:grid grid-cols-6 gap-10 justify-between text-base tracking-tight mt-auto">
            <div
              className="col-span-3 flex flex-col justify-center items-center lg:items-start pb-4 gap-4"
              data-aos="fade-up"
            >
              <h3 className="font-semibold my-2 text-3xl md:text-5xl lg:text-7xl text-black dark:text-white">
                My Recent
              </h3>
              <h1 className="font-semibold text-5xl md:text-7xl lg:text-9xl text-blue-700 dark:text-slate-400">
                Projects
              </h1>
              <p className="text-center text-xl md:text-2xl lg:text-3xl my-5">
                Some projects that I've made~
              </p>
            </div>

            <div className="col-span-3" data-aos="fade-down">
              <ProjectSwiper />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
