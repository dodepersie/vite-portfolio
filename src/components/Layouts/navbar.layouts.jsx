import { useEffect, useState } from "react";
import { BsMoonStarsFill } from "react-icons/bs";
import {
  FaBriefcase,
  FaChevronUp,
  FaCode,
  FaRegMessage,
  FaSun,
  FaUserNinja,
} from "react-icons/fa6";
import { Link } from "react-scroll";
import { NavTooltip } from "../Utilities/tooltip.utilities";
import { useDarkMode } from "../Utilities/usedark.utilities";

const menuLink = [
  { icon: FaUserNinja, link: "about-me", name: "About Me" },
  { icon: FaCode, link: "tech-stack", name: "Tech Stack" },
  { icon: FaBriefcase, link: "projects", name: "Projects" },
  { icon: FaRegMessage, link: "contact", name: "Contact" },
];

export const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // const [isCollapsed, setIsCollapsed] = useState(true);

  // const handleCollapsible = () => {
  //   setIsCollapsed(!isCollapsed);
  // };

  return (
    <div>
      {/* <div className="block md:hidden">
        <label className="btn btn-circle swap swap-rotate fixed bottom-4 left-2 shadow-xl z-[1003] bg-white text-black border-0 hover:bg-white dark:bg-slate-500 dark:text-gray-50 transition-colors ease-in duration-50">
          <input type="checkbox" onClick={handleCollapsible} />
          {isCollapsed ? (
            <IoMenu className="swap-off text-lg" />
          ) : (
            <IoClose className="swap-on text-lg" />
          )}
        </label>
      </div> */}

      <nav className="flex justify-center items-center p-2 transition-all duration-300 fixed rounded-full shadow-2xl z-[1001] cursor-pointer bg-white/80 hover:bg-white backdrop-blur-sm dark:bg-slate-600/50 dark:hover:bg-slate-600 top-auto left-1/2 bottom-4 -translate-x-1/2 translate-y-0">
        {/* Menu Items */}
        <ul className="transition-all menu menu-horizontal items-center md:justify-center">
          <li className="transition-all duration-300 text-sm dark:hover:bg-slate-700 rounded-full hover:rounded-full hover:mx-2">
            <label
              htmlFor="toggleDarkMode"
              className="swap swap-rotate flex justify-center items-center w-[44px] h-10 dark:text-gray-50 rounded-full hover:rounded-full text-lg"
            >
              <input
                id="toggleDarkMode"
                type="checkbox"
                checked={isDarkMode}
                onChange={toggleDarkMode}
                className="hidden"
              />
              {isDarkMode ? (
                <FaSun size={44} className="swap-on" />
              ) : (
                <BsMoonStarsFill size={44} className="swap-off" />
              )}
            </label>
          </li>
          <div className="transition-all duration-300 w-[1px] h-4 bg-gray-300 dark:bg-slate-500 me-2"></div>
          {menuLink.map((item, index) => (
            <NavTooltip tooltipTitle={item.name} key={index}>
              <li className="transition-all duration-300 text-sm dark:hover:bg-slate-700 hover:rounded-full hover:mx-2">
                <Link
                  to={item.link}
                  isDynamic={true}
                  spy={true}
                  smooth={true}
                  duration={100}
                  activeClass="active dark:bg-slate-500 text-gray-50 rounded-full"
                  className="dark:text-gray-50 rounded-full hover:rounded-full"
                >
                  <item.icon />
                </Link>
              </li>
            </NavTooltip>
          ))}

          {isVisible && (
            <>
              <div className="transition-all duration-300 w-[1px] h-4 bg-gray-300 dark:bg-slate-500 mx-2"></div>
              <li className="transition-all duration-300 text-sm dark:hover:bg-slate-700 rounded-full hover:rounded-full hover:mx-2">
                <button
                  onClick={scrollToTop}
                  className="transition-all duration-300 dark:text-gray-50 rounded-full hover:rounded-full"
                >
                  <FaChevronUp />
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};
