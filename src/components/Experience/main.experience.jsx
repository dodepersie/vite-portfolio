import { Link } from "react-router-dom";
import { education, workingExp } from "../../constants/main.constants";

export const Experience = () => {
  return (
    <section id="experience">
      <div className="hero min-h-screen dark:bg-slate-900 dark:text-gray-50 p-auto md:p-4 transition-colors duration-50">
        <div className="hero-content flex-col py-20 px-5">
          <h1 className="text-3xl lg:text-5xl">About Me</h1>
          <div className="flex flex-col items-center mb-10">
            <div className="w-20 h-1 bg-blue-700 dark:bg-slate-400 mb-10"></div>

            <p className="text-[16px] lg:text-[18px] text-center leading-loose">
              I'm a curious person and currently working on my Final Project to
              complete my university
            </p>
          </div>

          <div className="lg:grid grid-cols-2 justify-between gap-20 space-y-10 lg:space-y-0">
            <div className="col-span-1 space-y-10">
              <div className="flex flex-col space-y-4 mb-10">
                <h1 className="text-lg lg:text-2xl font-semibold">Education</h1>
                <div className="w-20 h-1 bg-blue-700 dark:bg-slate-400"></div>
              </div>

              {education.map((education, index) => {
                return (
                  <div className="flex items-center" key={index}>
                    <div className="w-20 h-20 rounded-lg bg-white overflow-hidden">
                      <img
                        src={education.logo}
                        alt={education.name}
                        className="object-cover rounded-lg shadow-sm w-full h-full"
                      />
                    </div>

                    <div className="flex flex-col items-start justify-start ms-4 w-3/4">
                      <Link
                        to={education.link}
                        target="_blank"
                        className="text-blue-600 dark:text-blue-300 font-semibold"
                      >
                        {education.name}
                      </Link>
                      <p className="font-semibold">{education.desc} </p>
                      <p className="text-[15px]">{education.year}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="col-span-1 space-y-10">
              <div className="flex flex-col space-y-4 mb-10">
                <h1 className="text-lg lg:text-2xl font-semibold">
                  Working Experiences
                </h1>
                <div className="w-20 h-1 bg-blue-700 dark:bg-slate-400"></div>
              </div>

              {workingExp.map((workingExp, index) => {
                return (
                  <div className="flex items-center" key={index}>
                    <div className="w-20 h-20 rounded-lg bg-white overflow-hidden">
                      <img
                        src={workingExp.logo}
                        alt={workingExp.name}
                        className="object-cover rounded-lg shadow-sm w-full h-full"
                      />
                    </div>

                    <div className="flex flex-col items-start justify-start ms-4 w-3/4">
                      <Link
                        to={workingExp.link}
                        target="_blank"
                        className="text-blue-600 dark:text-blue-300 font-semibold"
                      >
                        {workingExp.name}
                      </Link>
                      <p className="font-semibold">{workingExp.desc} </p>
                      <p className="text-[15px]">{workingExp.year}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
