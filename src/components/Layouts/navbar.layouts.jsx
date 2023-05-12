import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faNavicon } from "@fortawesome/free-solid-svg-icons"
import { useDarkMode } from "../Utilities/usedark.utilities"
import { useState, useEffect } from "react"

const menuLink = [
    {'link': '#projects', 'name': 'Projects'},
    {'link': '#experience', 'name': 'Experience & Skills'},
    {'link': '#tech-stack', 'name': 'Tech Stack'},
    {'link': '#contact', name: 'Contact'},
    {'link': 'https://blog.mahadisaputra.my.id', name: 'Blog'},
];

export const Navbar = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
    }, []);

    const handleCollapsible = () => {
    setIsCollapsed(!isCollapsed);
    };

    return (
        <nav
            className={`navbar fixed top-0 left-0 right-0 z-10 shadow-lg text-gray-50 ${
                scrolled ? 'scrolled' : ''
              }`}
            data-theme="cmyk"
            id="navbar"
            >
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className={`btn btn-ghost lg:hidden text-gray-50`} onClick={handleCollapsible}>
                        <FontAwesomeIcon icon={faNavicon} />
                    </label>

                    <ul
                        className={`menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 ${
                            isCollapsed ? "hidden" : ""} font-semibold bg-gray-50 text-black dark:bg-slate-700 dark:text-gray-50`}
                        >
                    {menuLink.map(( item, index ) => (
                        <li key={index}><a href={item.link}>{item.name}</a></li>
                    ))}
                    </ul>
                </div>

                <a href="/" className="inline-flex btn btn-ghost normal-case text-xl dark:hover:bg-slate-500 dark:focus:bg-slate-600 dark:active:bg-slate-700 dark:text-gray-50">Mahadi Saputra</a>
                
                <div className="mt-2 mx-2">
                    <input type="checkbox" className="toggle" checked={isDarkMode} onChange={toggleDarkMode} />
                </div>
            </div>

            {/* Menu for LG Screen Size */}
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuLink.map(( item, index ) => (
                        <li key={index}><a href={item.link} className="font-semibold dark:hover:bg-slate-500 dark:focus:bg-slate-600 dark:active:bg-slate-700 dark:text-gray-50">{item.name}</a></li>
                    ))}
                </ul>
            </div>
        </nav>
    )
};