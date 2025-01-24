import { useState, useEffect } from "react";
import { FaSun, FaCode, FaBriefcase, FaUserNinja } from "react-icons/fa6";
import { BsMoonStarsFill } from "react-icons/bs";
import { FaRegMessage, FaChevronUp } from "react-icons/fa6";
import { useDarkMode } from "../Utilities/usedark.utilities";
import { NavTooltip } from "../Utilities/tooltip.utilities";
import { Link } from "react-scroll";

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

      <nav
        className={`flex justify-center items-center p-2 transition-all duration-300 fixed rounded-full shadow-2xl z-[1001] cursor-pointer bg-white/80 hover:bg-white backdrop-blur-sm dark:bg-slate-600 top-auto left-1/2 bottom-4 -translate-x-1/2 translate-y-0 hover:scale-105`}
      >
        {/* Menu Items */}
        <ul className="transition-all menu menu-horizontal items-center md:justify-center gap-2">
          <li className="transition-all duration-300 text-sm dark:hover:bg-slate-700 hover:rounded-box">
            <label
              htmlFor="toggleDarkMode"
              className="swap swap-rotate flex justify-center items-center w-[44px] h-10 dark:text-gray-50 hover:rounded-box text-lg rounded-box"
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
          <div className="transition-all duration-300 w-[2px] h-4 bg-gray-300 dark:bg-slate-500"></div>
          {menuLink.map((item, index) => (
            <NavTooltip tooltipTitle={item.name} key={index}>
              <li className="transition-all duration-300 text-sm dark:hover:bg-slate-700 hover:rounded-box">
                <Link
                  to={item.link}
                  isDynamic={true}
                  spy={true}
                  smooth={true}
                  duration={100}
                  activeClass="active dark:bg-slate-500 text-gray-50 rounded-box"
                  className="dark:text-gray-50 rounded-box hover:rounded-box"
                >
                  <item.icon />
                </Link>
              </li>
            </NavTooltip>
          ))}

          {isVisible && (
            <>
              <div className="transition-all duration-300 w-[2px] h-4 bg-gray-300 dark:bg-slate-500"></div>
              <li className="transition-all duration-300 text-sm dark:hover:bg-slate-700 rounded-box hover:rounded-box">
                <button
                  onClick={scrollToTop}
                  className="dark:text-gray-50 rounded-box hover:rounded-box"
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
