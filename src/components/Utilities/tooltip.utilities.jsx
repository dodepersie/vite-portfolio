import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";

export const GlobalTooltip = ({ tooltipTitle, children }) => {
  return (
    <Tooltip
      title={tooltipTitle}
      interactive
      size="big"
      distance={3}
      followCursor={true}
      trigger="mouseenter"
    >
      {children}
    </Tooltip>
  );
};

export const NavTooltip = ({ tooltipTitle, children }) => {
  return (
    <Tooltip
      title={tooltipTitle}
      distance={20}
      animation="perspective"
      trigger="mouseenter"
    >
      {children}
    </Tooltip>
  );
};
