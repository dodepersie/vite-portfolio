import { faTerminal } from "@fortawesome/free-solid-svg-icons";
import { projects } from "../../constants/main.constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Projects = () => {
  return (
    <>
      <section id="projects">
        <div className="hero min-h-screen bg-gray-50 dark:bg-slate-800 dark:text-gray-50 p-auto md:p-4 transition-colors duration-50">
          <div className="hero-content flex-col lg:flex-row">
            <div className="text-base tracking-tight mt-16 lg:mt-auto">
              <div data-aos="fade-up">
                <div className="flex items-center text-3xl pb-4">
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
              </div>

              <div className="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {projects
                  .sort((a, b) => a.title.localeCompare(b.title))
                  .map(({ title, description, image, tags, visit }, index) => (
                    <div
                      className="card shadow-xl image-full"
                      data-aos="fade-up"
                      key={index}
                    >
                      <figure>
                        <img src={image} alt={title} />
                      </figure>

                      <div className="card-body">
                        <h2 className="card-title">
                          <div
                            className="tooltip tooltip-right tooltip-primary"
                            data-tip="Click to visit"
                          >
                            <a href={visit} target="_blank" rel="noreferrer">
                              {title}
                            </a>
                          </div>
                        </h2>
                        <p className="text-gray-50">{description}</p>

                        <div className="card-actions justify-end">
                          {tags.map((tag, i) => (
                            <div
                              className="badge badge-primary badge-lg text-base-100 p-3 border-0 dark:bg-slate-600"
                              key={i}
                            >
                              {tag}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
