import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTerminal,
  faCheck,
  faDollarSign,
  faContactCard,
  faMoon,
  faSun,
  faNavicon,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useDarkMode } from "../Utilities/usedark.utilities";
import { Link } from "react-scroll";

const menuLink = [
  { icon: faCheck, link: "experience", name: "About Me" },
  { icon: faDollarSign, link: "tech-stack", name: "Tech Stack" },
  { icon: faTerminal, link: "projects", name: "Projects" },
  { icon: faContactCard, link: "contact", name: "Contact" },
];

export const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleCollapsible = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <div className="block lg:hidden">
        <label className="btn btn-circle fixed bottom-4 left-2 shadow-xl z-[1003] bg-white text-black border-0 hover:bg-white dark:bg-slate-500 dark:text-gray-50">
          <input
            type="checkbox"
            className="hidden"
            onClick={handleCollapsible}
          />
          <FontAwesomeIcon
            icon={isCollapsed ? faNavicon : faTimes}
            className="text-lg"
          />
        </label>
      </div>

      <nav
        className={`fixed top-1/2 left-2 -translate-y-1/2 rounded-lg shadow-md mx-auto p-1 z-[1002] bg-white dark:bg-slate-600 ${
          isCollapsed ? "hidden lg:block" : "block"
        }`}
      >
        {/* Menu Items */}
        <div className="flex items-center">
          <ul className="menu space-y-1">
            <li className="translation-all duration-300 dark:hover:bg-slate-700">
              <label
                htmlFor="toggleDarkMode"
                className="cursor-pointer swap swap-rotate"
              >
                <input
                  id="toggleDarkMode"
                  type="checkbox"
                  checked={isDarkMode}
                  onChange={toggleDarkMode}
                  className="hidden"
                />
                {isDarkMode ? (
                  <FontAwesomeIcon className="text-gray-50 w-4" icon={faMoon} />
                ) : (
                  <FontAwesomeIcon className="w-4" icon={faSun} />
                )}
              </label>
            </li>
            {menuLink.map((item, index) => (
              <li
                key={index}
                className="translation-all duration-300 dark:hover:bg-slate-700"
              >
                <Link
                  to={item.link}
                  isDynamic={true}
                  spy={true}
                  smooth={true}
                  duration={100}
                  activeClass="active dark:bg-slate-500 text-gray-50 font-semibold"
                  className="font-normal dark:text-gray-50"
                >
                  <FontAwesomeIcon className="w-4" icon={item.icon} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};
