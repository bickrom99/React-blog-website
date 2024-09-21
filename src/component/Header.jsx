
import {useState} from 'react'
import { NavLink } from 'react-router-dom';
// react item
import { FaBars,FaXmark, FaDribbble, FaFacebook, FaTwitter } from "react-icons/fa6";

const Header = () => {

    // Nav items array
    const navItems = [
        { path: "/", link: "Home" },
        { path: "/about", link: "About" },
        { path: "/blogs", link: "Blogs" },
        { path: "/service", link: "Service" },
        { path: "/contact", link: "Contact" },
    ];
    // Nav responsive toggle
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header className="bg-[#000000b6] fixed top-0 left-0 right-0">
            <nav className="p-4 max-w-6xl mx-auto justify-between flex items-center">
                <a href="/" className="text-white text-xl font-bold">
                    bickrom<span className="text-red-500">99</span>
                </a>

                {/* Nav menu item here */}
                <ul className="md:flex gap-12 text-lg hidden">
                    {navItems.map(({ path, link }, index) => (
                        <li key={index} className="text-white">
                            <NavLink to={path} >
                                {link}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Social icon -> font-awesome icon6 */}
                <div className="text-white md:flex gap-4 items-center hidden">
                    <a href="/" className="hover:text-orange-500 text-lg"><FaFacebook/></a>
                    <a href="/" className="hover:text-orange-500 text-lg"><FaDribbble/></a>
                    <a href="/" className="hover:text-orange-500 text-lg"><FaTwitter/></a>
                {/* login button */}
                    <button className="bg-orange-500 px-6 py-2 rounded hover:bg-white hover:text-orange-500">Log In</button>
                    
                </div>
              
                {/* button for mobile * tab responsive */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white text-xl">
                        {
                            isMenuOpen ? <FaXmark/> : <FaBars /> 
                        } 
                    </button>
                </div>
            </nav>
             {/* Menu show only for mobile */}
             <div>
                <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${ isMenuOpen ? "fixed top-0 left-0 w-full transition-all duration-150 ease-out" : "hidden"}`}>
                    {navItems.map(({ path, link }, index) => (
                        <li key={index} className="text-black">
                            <NavLink to={path} >
                                {link}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                </div>
        </header>
    );
};

export default Header;
