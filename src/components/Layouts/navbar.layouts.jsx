import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNavicon, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useDarkMode } from "../Utilities/usedark.utilities";
import { Link } from "react-scroll";

const menuLink = [
  { link: "projects", name: "Projects" },
  { link: "experience", name: "Experience" },
  { link: "tech-stack", name: "Tech Stack" },
  { link: "contact", name: "Contact" },
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
      : "transition-colors duration-50"
    : scrolled
    ? "bg-white text-black"
    : "text-gray-50 transition-colors duration-50";

  const navbarItems = isDarkMode
    ? scrolled
      ? "text-gray-50 hover:bg-slate-500 focus:bg-blue-600 active:bg-slate-500"
      : "text-gray-50 hover:bg-slate-500 focus:bg-blue-600 active:bg-slate-500"
    : "hover:bg-blue-700 focus:bg-blue-800 hover:text-gray-50";

  return (
    <nav
      className={`navbar fixed top-0 left-0 right-0 ${navbarBackground}`}
      style={{ zIndex: "1002" }}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className={`btn btn-ghost xl:hidden dark:text-gray-50 hover:bg-blue-500 hover:text-gray-50 active:text-gray-50 focus:text-gray-50 focus:bg-blue-600 active:bg-blue-700 dark:hover:bg-slate-500 dark:focus:bg-slate-600 dark:active:bg-slate-700 mx-1.5`}
            onClick={handleCollapsible}
          >
            <FontAwesomeIcon icon={faNavicon} />
          </label>

          <ul
            className={`menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 ${
              isCollapsed ? "hidden" : ""
            } font-normal bg-gray-50 text-black dark:bg-slate-700 dark:text-gray-50`}
          >
            {menuLink.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.link}
                  spy={true}
                  smooth={true}
                  duration={100}
                  offset={0}
                  href={item.link}
                  activeClass="bg-slate-100 dark:bg-slate-500 text-black font-semibold"
                  className="hover:bg-slate-100 focus:bg-slate-200 dark:hover:bg-slate-500 dark:focus:bg-slate-600 text-black dark:text-gray-50 hover:rounded-lg my-1"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://blog.mahadisaputra.my.id"
                target="_blank"
                rel="noreferrer"
                className="hover:bg-slate-100 focus:bg-slate-200 active:bg-slate-300 dark:hover:bg-slate-500 dark:focus:bg-slate-600 dark:active:bg-slate-700 text-black dark:text-gray-50 hover:rounded-lg my-1"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>

        <a
          href="/"
          className="inline-flex btn btn-ghost capitalize text-lg hover:bg-blue-700 hover:text-gray-50 focus:bg-blue-800 active:bg-blue-900 dark:hover:bg-slate-500 dark:focus:bg-slate-600 dark:active:bg-slate-700 dark:text-gray-50"
        >
          Mahadi Saputra
        </a>

        <div className="mt-1 mx-1">
          <label className="cursor-pointer">
            <input
              type="checkbox"
              checked={isDarkMode}
              onChange={toggleDarkMode}
              className="hidden"
            />
            <span className="text-lg">
              {isDarkMode ? (
                <FontAwesomeIcon className="text-gray-50" icon={faMoon} />
              ) : (
                <FontAwesomeIcon icon={faSun} />
              )}
            </span>
          </label>
        </div>
      </div>

      {/* Menu for LG Screen Size */}
      <div className="navbar-center hidden xl:flex">
        <ul className="menu menu-horizontal px-1">
          {menuLink.map((item, index) => (
            <li key={index}>
              <Link
                to={item.link}
                spy={true}
                smooth={true}
                duration={100}
                offset={0}
                activeClass="active dark:bg-slate-500 text-gray-50 font-semibold"
                className={`font-normal me-2 ${navbarItems}`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end hidden xl:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a
              href="http://blog.mahadisaputra.my.id/"
              target="_blank"
              rel="noreferrer"
              className="btn capitalize bg-blue-600 font-medium hover:bg-blue-700 active:bg-blue-700 dark:bg-slate-500 dark:hover:bg-slate-600 dark:active:bg-slate-700 text-gray-50 border-0"
            >
              Blog
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
