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
        height: 490,
        wheel: true,
        gap: "1rem",
        breakpoints: {
          640: {
            direction: "ttb",
            focus: "center",
            autoWidth: true,
            gap: "1rem",
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
          <div className="card bg-base-100 dark:bg-slate-900 border border-gray-200 dark:border-0 h-[450px] hover:shadow-md hover:bg-gray-100 dark:hover:bg-slate-700">
            <figure>
              <img src={image} alt={title} className="bg-cover" />
            </figure>
            <div className="card-body border-t border-blue-500 dark:border-slate-500">
              <h2 className="card-title">{title}</h2>
              <p>{description}</p>
              <div className="mt-5 inline-flex justify-between">
              <a href={visit} role="button" target="_blank" rel="noreferrer" className="btn btn-xs btn-primary dark:bg-slate-700 border-0">Visit</a>
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
