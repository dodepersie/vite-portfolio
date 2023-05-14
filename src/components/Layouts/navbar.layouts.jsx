import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faNavicon } from "@fortawesome/free-solid-svg-icons"
import { useDarkMode } from "../Utilities/usedark.utilities"
import { useState, useEffect } from "react"

const menuLink = [
    {'link': '#projects', 'name': 'Projects'},
    {'link': '#experience', 'name': 'Experience'},
    {'link': '#tech-stack', 'name': 'Tech Stack'},
    {'link': '#contact', name: 'Contact'},
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

    const navbarBackground = isDarkMode
    ? scrolled
      ? 'bg-slate-900 shadow-lg transition-colors duration-300'
      : 'bg-transparent transition-colors duration-300'
    : scrolled
    ? 'bg-white shadow-lg transition-colors duration-300'
    : 'bg-transparent transition-colors duration-300';  

    const navbarItems = isDarkMode 
    ? scrolled 
        ? 'text-gray-50' 
        : 'text-gray-50'
    : '';

    return (
        <nav
            className={`navbar fixed top-0 left-0 right-0 z-10 ${navbarBackground}`}
            id="navbar"
            >
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className={`btn btn-ghost lg:hidden dark:text-gray-50 hover:bg-blue-500 hover:text-gray-50 active:text-gray-50 focus:text-gray-50 focus:bg-blue-600 active:bg-blue-700 dark:hover:bg-slate-500 dark:focus:bg-slate-600 dark:active:bg-slate-700 mx-1.5`} onClick={handleCollapsible}>
                        <FontAwesomeIcon icon={faNavicon} />
                    </label>

                    <ul
                        className={`menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 ${
                            isCollapsed ? "hidden" : ""} font-normal bg-gray-50 text-black dark:bg-slate-700 dark:text-gray-50`}
                        >
                    {menuLink.map(( item, index ) => (
                        <li key={index} className="dark:hover:bg-slate-500 dark:focus:bg-slate-600 dark:active:bg-slate-700 rounded-xl"><a href={item.link}>{item.name}</a></li>
                    ))}
                    <li className="dark:hover:bg-slate-500 dark:focus:bg-slate-600 dark:active:bg-slate-700 rounded-xl"><a href="https://blog.mahadisaputra.my.id" target="_blank" rel="noreferrer">Blog</a></li>
                    </ul>
                </div>

                <a href="/" className="inline-flex btn btn-ghost capitalize text-lg hover:bg-blue-500 hover:text-gray-50 focus:bg-blue-600 active:bg-blue-700 dark:hover:bg-slate-500 dark:focus:bg-slate-600 dark:active:bg-slate-700 dark:text-gray-50">Mahadi Saputra</a>
                
                <div className="mt-2 mx-1.5">
                    <input type="checkbox" className="toggle" checked={isDarkMode} onChange={toggleDarkMode} />
                </div>
            </div>

            {/* Menu for LG Screen Size */}
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuLink.map(( item, index ) => (
                        <li key={index}><a href={item.link} className={`font-normal hover:bg-blue-500 focus:bg-blue-600 active:bg-blue-700 dark:hover:bg-slate-500 dark:focus:bg-slate-600 dark:active:bg-slate-700 hover:text-gray-50 focus:text-gray-50 active:text-gray-50 me-2 ${navbarItems}`}>{item.name}</a></li>
                    ))}
                    <a href="http://blog.mahadisaputra.my.id/" target="_blank" rel="noreferrer" className="btn capitalize bg-blue-500 hover:bg-blue-600 active:bg-blue-700 dark:bg-slate-500 dark:hover:bg-slate-600 dark:active:bg-slate-700 text-gray-50 border-0">Blog</a>
                </ul>
            </div>
        </nav>
    )
};