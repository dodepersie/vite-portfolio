import { useState } from "react";
import {
  FaMoon,
  FaSun,
  FaUserNinja,
  FaCode,
  FaBriefcase,
} from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { useDarkMode } from "../Utilities/usedark.utilities";
import { Link } from "react-scroll";
import { NavTooltip } from "../Utilities/tooltip.utilities";

const menuLink = [
  { icon: FaUserNinja, link: "about-me", name: "About Me" },
  { icon: FaCode, link: "tech-stack", name: "Tech Stack" },
  { icon: FaBriefcase, link: "projects", name: "Projects" },
  { icon: FaRegMessage, link: "contact", name: "Contact" },
];

export const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleCollapsible = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
      <div className="block lg:hidden">
        <label className="btn btn-circle swap swap-rotate fixed bottom-4 left-2 shadow-xl z-[1003] bg-white text-black border-0 hover:bg-white dark:bg-slate-500 dark:text-gray-50 transition-colors ease-in duration-50">
          <input type="checkbox" onClick={handleCollapsible} />
          {isCollapsed ? (
            <CiMenuBurger className="swap-off text-lg" />
          ) : (
            <IoClose className="swap-on text-lg" />
          )}
        </label>
      </div>

      <nav
        className={`fixed top-1/2 left-3 -translate-y-1/2 rounded-2xl hover:rounded-2xl shadow-xl mx-auto p-1 z-[1001] cursor-pointer bg-white dark:bg-slate-600 ${
          isCollapsed ? "hidden lg:block" : "block"
        }`}
      >
        {/* Menu Items */}
        <div className="flex items-center">
          <ul className="menu justify-center items-center space-y-1">
            <li className="translation-all duration-300 text-sm dark:hover:bg-slate-700 hover:rounded-2xl">
              <label
                htmlFor="toggleDarkMode"
                className="swap swap-rotate flex justify-center items-center w-[44px] h-10 rounded-2xl dark:text-gray-50 hover:rounded-2xl text-lg"
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
                  <FaMoon size={44} className="swap-off" />
                )}
              </label>
            </li>

            <div className="w-full h-1 border-t dark:border-slate-800"></div>
            <div className="flex flex-col justify-center items-center gap-2">
              {menuLink.map((item, index) => (
                <NavTooltip tooltipTitle={item.name}>
                  <li
                    key={index}
                    className="translation-all duration-300 text-sm dark:hover:bg-slate-700 hover:rounded-2xl"
                  >
                    <Link
                      to={item.link}
                      isDynamic={true}
                      spy={true}
                      smooth={true}
                      duration={100}
                      activeClass="active dark:bg-slate-500 text-gray-50 rounded-2xl"
                      className="rounded-2xl dark:text-gray-50 hover:rounded-2xl"
                    >
                      <item.icon />
                    </Link>
                  </li>
                </NavTooltip>
              ))}
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};
