import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { techStack } from "../../constants/main.constants";
import { TechStackAnimated } from "../../assets/lottie/techStackAnimation/techStackAnimation";

export const TechStack = () => {
  return (
    <section id="tech-stack">
      <div className="hero min-h-screen bg-gradient-to-br from-blue-300 to-blue-200 dark:from-slate-900 dark:via-slate-700 dark:to-slate-800 dark:text-gray-50 p-auto md:p-4 transition-colors ease-in duration-50">
        <div className="hero-content flex-row w-full gap-10 py-16 px-7">
          <div className="text-base w-full md:w-3/5 p-auto md:p-4 lg:p-auto">
            <h1 className="mb-5 text-3xl font-semibold" data-aos="fade-up">
              <FontAwesomeIcon icon={faCode} className="me-2" /> tech_stack
            </h1>

            <p
              className="my-10 font-normal text-[18px] lg:text-[20px] leading-loose"
              data-aos="fade-up"
            >
              Here you can see what I&apos;ve learning. I am learning day by day
              φ(゜▽゜*)♪
            </p>

            <div className="flex flex-wrap items-center">
              <div className="grid grid-cols-6 lg:grid-cols-12 justify-center items-center gap-10">
                {techStack
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((item, index) => (
                    <div
                      data-aos="fade-up"
                      className="col-span-2 lg:col-span-2 justify-center items-center"
                      key={index}
                    >
                      <img src={item.icon} alt={item.name} />
                      <h2 className="text-md text-center mt-4">{item.name}</h2>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="hidden md:block md:w-2/5" data-aos="zoom-in">
            <TechStackAnimated />
          </div>
        </div>
      </div>
    </section>
  );
};
