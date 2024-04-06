import { Splide, SplideSlide } from "@splidejs/react-splide";
import { projects } from "../../constants/main.constants";

const ProjectSwiper = () => {
  return (
    <Splide
      options={{
        arrows: false,
        focus: "center",
        rewind: true,
        width: 900,
        height: 550,
        wheel: true,
        gap: "1rem",
        breakpoints: {
          640: {
            direction: "ttb",
            focus: "center",
            autoWidth: true,
            type: "loop",
          },
          1024: {
            direction: "ttb",
            focus: "center",
            type: "loop",
          },
        },
      }}
      aria-label="My Projects"
    >
      {projects.map(({ title, description, image, tags, visit }, i) => (
        <SplideSlide key={i}>
          <div className="card bg-base-100 dark:bg-slate-700 border border-gray-200 dark:border-0 shadow hover:bg-gray-100 dark:hover:bg-slate-700/50">
            <div className="w-full h-auto bg-white rounded-2xl mx-auto mb-3 overflow-hidden">
              <img
                src={image}
                alt={title}
                className="object-cover rounded-sm w-full transform-none"
              />
            </div>
            <div className="card-body">
              <h2 className="card-title">{title}</h2>
              <p>{description}</p>
              <div className="mt-5 inline-flex justify-between">
                <a
                  href={visit}
                  role="button"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-xs btn-primary dark:bg-slate-700 border-0"
                >
                  Visit
                </a>
                <div className="card-actions justify-end">
                  {tags.map((tag, i) => (
                    <div className="badge badge-outline" key={i}>
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
