import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { techStack } from "../../constants/main.constants";
import { TechStackAnimated } from "../../assets/lottie/techStackAnimation/techStackAnimation";

export const TechStack = () => {
  return (
    <section id="tech-stack">
      <div className="hero min-h-screen bg-gradient-to-br from-blue-500 via-blue-400 to-blue-200 dark:from-slate-900 dark:via-slate-700 dark:to-slate-800 dark:text-gray-50 p-auto md:p-4 transition-colors ease-in duration-50">
        <div className="hero-content flex-col gap-5 py-16 px-7">
          <div
            className="flex flex-col justify-center items-center text-gray-50 mb-10"
            data-aos="fade-up"
          >
            <h1 className="mb-7 text-4xl lg:text-5xl font-semibold">
              <FontAwesomeIcon icon={faCode} className="me-2" /> tech_stack
            </h1>

            <div className="w-20 h-1 bg-blue-700 dark:bg-slate-400"></div>
          </div>
          <div className="md:grid grid-cols-2 items-center gap-10">
            <div className="col-span-1 text-base-100">
              <div className="flex flex-wrap items-center">
                <div className="grid grid-cols-6 lg:grid-cols-12 justify-center items-center gap-4">
                  {techStack
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((item, index) => (
                      <div
                        data-aos="fade-up"
                        className="card bg-gray-100 hover:bg-gray-50 transition-shadow hover:shadow-lg col-span-3 items-center"
                        key={index}
                      >
                        <picture className="overflow-hidden p-3">
                          <img
                            src={item.icon}
                            alt={item.name}
                            className="w-14 object-cover rounded-sm transition-all hover:scale-110"
                          />
                        </picture>
                        <h2 className="card-body py-2 text-base-content text-md text-center font-medium">
                          {item.name}
                        </h2>
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div className="col-span-1 hidden md:block" data-aos="zoom-in">
              <TechStackAnimated />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
