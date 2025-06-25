import { Splide, SplideSlide } from "@splidejs/react-splide";
import { projects } from "../../constants/main.constants";

const ProjectSwiper = () => {
  return (
    <Splide
      options={{
        arrows: false,
        focus: "center",
        rewind: true,
        width: "100%",
        height: 580,
        wheel: true,
        type: "loop",
        gap: "2rem",
        breakpoints: {
          640: {
            perPage: 1,
            width: 300,
            height: 485,
          },
          1022: {
            width: 500,
            height: 495,
          },
        },
      }}
      aria-label="My Projects"
    >
      {projects
        .sort((a, b) => a.title.localeCompare(b.title))
        .map(({ title, description, image, tags, visit, github }, i) => (
          <SplideSlide key={i}>
            <div className="transition-colors ease-in duration-50 card bg-base-200 dark:bg-slate-700 border border-gray-200 dark:border-0 shadow hover:bg-base-200/40 dark:hover:bg-slate-700/50">
              <picture className="w-full h-auto bg-white rounded-2xl mx-auto mb-3 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="object-cover rounded-sm w-full transition-all hover:scale-110"
                />
              </picture>
              <div className="card-body pb-4">
                <h2 className="card-title">{title}</h2>
                <p className="text-[18px] lg:text-[20px] leading-loose">
                  {description}
                </p>
                <div className="mt-5 inline-flex justify-between">
                  <div className="flex flex-col lg:flex-row gap-2">
                    {visit && visit !== "/" && (
                      <a
                        href={visit}
                        role="button"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-xs btn-primary dark:bg-slate-900 border-0"
                      >
                        Visit
                      </a>
                    )}
                    {github && github !== "/" && (
                      <a
                        href={github}
                        role="button"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-xs btn-primary dark:bg-slate-900 border-0"
                      >
                        Github
                      </a>
                    )}
                  </div>
                  <div className="card-actions justify-end">
                    {tags.map((tag, i) => (
                      <div className="badge badge-md badge-outline" key={i}>
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>
        ))}
    </Splide>
  );
};

export default ProjectSwiper;
