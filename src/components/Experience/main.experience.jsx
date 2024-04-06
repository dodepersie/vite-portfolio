import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { ExperienceAnimated } from "./../../assets/lottie/experienceAnimation/experienceAnimation";

export const Experience = () => {
  return (
    <section id="experience">
      <div className="hero min-h-screen bg-gradient-to-br from-blue-300 to-blue-200 dark:from-slate-900 dark:via-slate-700 dark:to-slate-800 dark:text-gray-50 p-auto md:p-4 transition-colors duration-50">
        <div className="hero-content flex-col-reverse md:flex-row p-5">
          <div
            className="hidden md:block w-2/5 md:w-3/5 lg:w-1/3"
            data-aos="zoom-in"
          >
            <ExperienceAnimated />
          </div>

          <div
            className="text-base w-full md:w-4/5 lg:w-2/3"
            data-aos="fade-right"
          >
            <h1 className="text-3xl font-semibold">
              <FontAwesomeIcon icon={faCheck} /> Experience
            </h1>

            <div className="flex flex-col md:flex-row justify-start items-start pt-4 gap-5">
              <div>
                <p className="leading-loose pb-5">
                  I started to create my first blog using{" "}
                  <strong>Blogspot</strong> in 2011, then I started learning{" "}
                  <strong>Wordpress</strong> in 2012 and also learning{" "}
                  <strong>cPanel</strong> and <strong>mySQL</strong>. In 2013 I
                  learned <strong>PHP</strong> and also the{" "}
                  <strong>Twitter API</strong> and I created a website to{" "}
                  <strong>exchange Twitter followers</strong> and also provided
                  the Admin Panel. I build the Admin Panel using{" "}
                  <strong>Bootstrap</strong> and <strong>PHP</strong>.
                </p>

                <p className="leading-loose">
                  Before that, In 2012 i have won <strong>First place</strong>{" "}
                  in a{" "}
                  <strong>Primary School Level Computer Competition</strong> at{" "}
                  <strong>Kabupaten Tabanan</strong>. And one more in 2015, i
                  have got <strong>Second place</strong> in a{" "}
                  <strong>
                    Junior High School Computer Logic-Office (Log-Off)
                    Competition
                  </strong>{" "}
                  at <strong>Kabupaten Tabanan</strong> held by{" "}
                  <strong>SMA N 1 Tabanan</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
