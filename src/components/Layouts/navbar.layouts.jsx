import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTerminal,
  faCheck,
  faDollarSign,
  faContactCard,
  faMoon,
  faSun,
  faNavicon,
} from "@fortawesome/free-solid-svg-icons";
import { useDarkMode } from "../Utilities/usedark.utilities";
import { Link } from "react-scroll";

const menuLink = [
  { icon: faTerminal, link: "projects", name: "Projects" },
  { icon: faCheck, link: "experience", name: "Experience" },
  { icon: faDollarSign, link: "tech-stack", name: "Tech Stack" },
  { icon: faContactCard, link: "contact", name: "Contact" },
];

export const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCollapsible = () => {
    setIsCollapsed(!isCollapsed);
  };

  const navbarBackground = isDarkMode
    ? scrolled
      ? "bg-slate-700"
      : "bg-slate-700 transition-colors duration-50"
    : scrolled
    ? "bg-white text-black"
    : "bg-white text-black transition-colors duration-50";

  return (
    <>
      <button
        tabIndex={0}
        className="fixed bottom-4 left-2 shadow-xl block lg:hidden w-10 h-10 rounded-lg bg-white text-black dark:text-gray-50 dark:bg-slate-500 dark:hover:bg-slate-600 dark:active:bg-slate-700 border-0 mx-1.5 z-[1003]"
        onClick={handleCollapsible}
      >
        <FontAwesomeIcon icon={faNavicon} />
      </button>

      <nav
        className={`fixed top-1/2 left-2 -translate-y-1/2 rounded-lg shadow-md mx-auto border border-gray-200 p-1 ${navbarBackground} ${
          isCollapsed ? "hidden lg:block" : "block"
        }`}
        style={{
          zIndex: "1002",
        }}
      >
        {/* Menu Items */}
        <div className="flex items-center">
          <ul className="menu space-y-1">
            <li>
              <label htmlFor="toggleDarkMode" className="cursor-pointer">
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
              <li key={index}>
                  <Link
                    to={item.link}
                    spy={true}
                    smooth={true}
                    duration={100}
                    offset={-30}
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
