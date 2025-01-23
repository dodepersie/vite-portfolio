import { techStack } from "../../constants/main.constants";
import Marquee from "react-fast-marquee";
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";

export const MyTechStack = () => {
  return (
    <>
      <Marquee pauseOnHover speed={70} className="overflow-hidden">
        {techStack
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((item, index) => (
            <div className="me-20" key={index}>
              <div className="hero">
                <Tooltip
                  title={item.name}
                  interactive
                  animation="fade"
                  size="big"
                  distance={3}
                  followCursor={true}
                  trigger="mouseenter"
                >
                  <picture className="p-3">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-20 object-cover rounded-sm transition-all hover:scale-110"
                    />
                  </picture>
                </Tooltip>
              </div>
            </div>
          ))}
      </Marquee>
    </>
  );
};
