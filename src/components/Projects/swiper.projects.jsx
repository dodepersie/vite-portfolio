import { Splide, SplideSlide } from "@splidejs/react-splide";
import { projects } from "../../constants/main.constants";

const ProjectSwiper = () => {
  return (
    <Splide
      options={{
        arrows: false,
        focus: 0,
        rewind: true,
        width: 900,
        autoHeight: true,
        wheel: true,
        perPage: 1,
        breakpoints: {
          640: {
            direction: "ttb",
            focus: "center",
            height: "30rem",
            autoWidth: true,
            gap: "1rem",
            perPage: 1,
            type: "loop",
          },
          1024: {
            height: "35rem",
            width: 760,
          },
        },
      }}
      aria-label="My Projects"
    >
      {projects.map(({ title, description, image, tags, visit }, i) => (
        <SplideSlide key={i}>
          <div className="card bg-base-100 dark:bg-slate-900 border border-gray-200">
            <figure>
              <img src={image} alt={title} />
            </figure>
            <div className="card-body">
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
