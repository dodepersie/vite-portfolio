import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserNinja } from "@fortawesome/free-solid-svg-icons"

export const Navbar = () => {
    return (
        <div data-theme="cmyk">
            <div className="fixed top-0 left-0 right-0 z-10 bg-base-200 max-w-screen shadow-lg">
                <div className="container mx-auto">
                    <a className="btn btn-ghost normal-case text-xl my-3 mx-3"><FontAwesomeIcon icon={faUserNinja} className="mr-3" />Mahadi Saputra <sup>v3</sup></a>
                </div>
            </div>
        </div>
    )
};