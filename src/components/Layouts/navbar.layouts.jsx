import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faList } from "@fortawesome/free-solid-svg-icons"

const menuLink = [
    {'link': '#projects', 'name': 'Projects'},
    {'link': '#tech-stack', 'name': 'Tech Stack'},
];

export const Navbar = () => {
    return (
        <div data-theme="cmyk">
            <div className="navbar bg-base-100 fixed top-0 left-0 right-0 z-10 shadow-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <FontAwesomeIcon icon={faList} />
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuLink.map(( item, index ) => (
                            <li key={index}><a href={item.link}>{item.name}</a></li>
                        ))}
                        </ul>
                    </div>

                    <a className="btn btn-ghost normal-case text-xl">Mahadi Saputra <sup>3</sup></a>
                </div>

                {/* Menu for LG Screen Size */}
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuLink.map(( item, index ) => (
                            <li key={index}><a href={item.link} className="font-semibold">{item.name}</a></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
};