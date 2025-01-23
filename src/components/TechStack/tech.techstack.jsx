import { techStack } from "../../constants/main.constants";
import Marquee from "react-fast-marquee";
import { GlobalTooltip } from "../Utilities/tooltip.utilities";

export const MyTechStack = () => {
  return (
    <>
      <Marquee pauseOnHover speed={70} className="overflow-hidden py-20">
        {techStack
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((techStack, index) => (
            <div className="me-20" key={index}>
              <GlobalTooltip tooltipTitle={techStack.name}>
                <picture className="p-3">
                  <img
                    src={techStack.icon}
                    alt={techStack.name}
                    className="w-20 object-cover rounded-sm transition-all hover:scale-125"
                  />
                </picture>
              </GlobalTooltip>
            </div>
          ))}
      </Marquee>
    </>
  );
};
