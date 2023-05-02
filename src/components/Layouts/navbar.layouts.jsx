import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faNavicon } from "@fortawesome/free-solid-svg-icons"
import { useDarkMode } from "../Utilities/usedark.utilities"
import { useState } from "react"

const menuLink = [
    {'link': '#projects', 'name': 'Projects'},
    {'link': '#tech-stack', 'name': 'Tech Stack'},
    {'link': '#contact', name: 'Contact'},
];

export const Navbar = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    const [isCollapsed, setIsCollapsed] = useState(true);

  const handleCollapsible = () => {
    setIsCollapsed(!isCollapsed);
  };

    return (
        <div data-theme="cmyk">
            <div className="navbar bg-base-100 fixed top-0 left-0 right-0 z-10 shadow-lg dark:bg-slate-600 dark:text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden" onClick={handleCollapsible}>
                            <FontAwesomeIcon icon={faNavicon} />
                        </label>
                        <ul
                            className={`menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 dark:bg-slate-700 ${
                                isCollapsed ? "hidden" : ""} font-semibold`}
                            >
                        {menuLink.map(( item, index ) => (
                            <li key={index}><a href={item.link}>{item.name}</a></li>
                        ))}
                        </ul>
                    </div>

                    <a href="/" className="btn btn-ghost normal-case text-xl dark:hover:bg-slate-500 dark:focus:bg-slate-600 dark:active:bg-slate-700 dark:text-white">Mahadi Saputra <sup>3</sup></a>
                    
                    <div className="mt-1">
                        <input type="checkbox" className="toggle" checked={isDarkMode} onChange={toggleDarkMode} />
                    </div>
                </div>

                {/* Menu for LG Screen Size */}
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuLink.map(( item, index ) => (
                            <li key={index}><a href={item.link} className="font-semibold dark:hover:bg-slate-500 dark:focus:bg-slate-600 dark:active:bg-slate-700 dark:text-white">{item.name}</a></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
};