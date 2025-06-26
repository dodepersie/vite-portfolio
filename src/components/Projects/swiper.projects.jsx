import { Splide, SplideSlide } from "@splidejs/react-splide";
import { projects } from "../../constants/main.constants";

const ProjectSwiper = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Splide
        options={{
          arrows: false,
          focus: "center",
          rewind: true,
          width: "100%",
          autoHeight: true,
          wheel: true,
          type: "loop",
          gap: "2rem",
          breakpoints: {
            360: {
              fixedWidth: 320,
            },
            393: {
              fixedWidth: 350,
            },
            412: {
              fixedWidth: 370,
            },
            414: {
              fixedWidth: 380,
            },
            640: {
              perPage: 1,
              fixedWidth: 390,
              height: 485,
            },
            768: {
              fixedWidth: 410,
            },
            1024: {
              fixedWidth: 450,
              height: 495,
            },
            1920: {
              fixedWidth: 500,
              perPage: 2,
            },
          },
        }}
        aria-label="My Projects"
      >
        {projects
          .sort((a, b) => a.title.localeCompare(b.title))
          .map(({ title, description, image, tags, visit, github }, i) => (
            <SplideSlide key={i}>
              <div className="transition-colors ease-in duration-50 card bg-base-200 dark:bg-slate-700 border border-gray-200 dark:border-0 shadow hover:bg-base-200/40 dark:hover:bg-slate-700/50 h-full">
                <picture className="w-full h-auto bg-white rounded-2xl mx-auto mb-3 overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    className="object-cover rounded-sm w-full transition-all hover:scale-110"
                  />
                </picture>
                <div className="card-body pb-4 flex flex-col">
                  <h2 className="card-title">{title}</h2>
                  <p className="flex-grow text-[18px] lg:text-[20px] leading-loose line-clamp-3">
                    {description}
                  </p>
                  <div className="mt-5 flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center">
                    <div className="flex items-center gap-2">
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
                    <div className="card-actions justify-start gap-2 lg:justify-end">
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
    </div>
  );
};

export default ProjectSwiper;
