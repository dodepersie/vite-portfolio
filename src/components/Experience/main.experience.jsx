import { Link } from "react-router-dom";
import { education, workingExp } from "../../constants/main.constants";

export const Experience = () => {
  return (
    <section id="about-me">
      <div className="hero min-h-screen dark:bg-slate-900 dark:text-gray-50 p-auto md:p-4 transition-colors ease-in duration-50">
        <div className="hero-content flex-col py-16 px-5">
          <div className="flex flex-col items-center gap-5" data-aos="zoom-in">
            <h1 className="text-4xl lg:text-5xl font-semibold">About Me</h1>
            <div className="flex flex-col items-center mb-10">
              <div className="w-20 h-1 bg-blue-700 dark:bg-slate-400 mb-10"></div>

              <div className="lg:w-[700px]">
                <p className="text-xl lg:text-2xl text-center leading-loose">
                  I'm a curious person. I can learn new things and I can be a
                  good listener. And I'm a person who is responsible for
                  anything that already give to me.
                </p>
              </div>
            </div>
          </div>

          <div className="md:grid grid-cols-2 justify-between gap-20 space-y-10 md:space-y-0">
            <div className="col-span-1 space-y-10" data-aos="fade-up">
              <div className="flex flex-col space-y-4 mb-10">
                <h1 className="text-2xl lg:text-3xl font-semibold">
                  Education
                </h1>
                <div className="w-20 h-1 bg-blue-700 dark:bg-slate-400"></div>
              </div>

              {education.map((education, index) => {
                return (
                  <div className="flex items-center text-lg" key={index}>
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
                        className="text-blue-600 dark:text-blue-300 font-semibold hover:underline"
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

            <div className="col-span-1 space-y-10" data-aos="fade-down">
              <div className="flex flex-col space-y-4 mb-10">
                <h1 className="text-2xl lg:text-3xl font-semibold">
                  Working Experiences
                </h1>
                <div className="w-20 h-1 bg-blue-700 dark:bg-slate-400"></div>
              </div>

              <p className="text-xl">
                I'm open for my first work experience 😊
              </p>

              {/*
              {workingExp.map((workingExp, index) => {
                return (
                  <div className="flex items-center text-lg" key={index}>
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
                        className="text-blue-600 dark:text-blue-300 font-semibold hover:underline"
                      >
                        {workingExp.name}
                      </Link>
                      <p className="font-semibold">{workingExp.desc} </p>
                      <p className="text-[15px]">{workingExp.year}</p>
                    </div>
                  </div>
                );
              })}
              */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
