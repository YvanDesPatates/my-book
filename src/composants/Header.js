import {useState} from 'react';
import {useHandleNavigate} from "./UtilFunctions";
import logo from "../ressources/images/dachsundLogo.png";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleNavigate = useHandleNavigate();

    return (
        <div className='header-div-container flex flex-col'>
            <nav className="py-6 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto flex justify-between items-center relative">
                        <img
                            src={logo}
                            alt="Logo"
                            className="logo simple-hover-animation"
                            onClick={() => handleNavigate('/')}
                            style={{cursor: 'pointer'}}
                        />
                    <div className=" flex-1 flex justify-center md:justify-start absolute left-0 right-0 md:static pointer-events-none" style={{zIndex: 1}}>
                        <a
                            className="text-2xl font-bold text-sky-700 simple-hover-animation pointer-events-auto"
                            onClick={() => handleNavigate('/')}
                            style={{cursor: 'pointer'}}
                        >Yvan Roux</a>
                    </div>
                    {/* Informations de contact et menu */}
                    <div className="hidden md:flex space-x-8">
                        <a href="tel:0662116016"
                           className="flex items-center space-x-2 text-gray-600 font-medium hover:text-sky-700 transition simple-hover-animation">
                            <i className="fas fa-phone-alt"></i>
                            <span>06 62 11 60 16</span>
                        </a>
                        <a href="mailto:yvanroux99@gmail.com"
                           className="flex items-center space-x-2 text-gray-600 hover:text-sky-700 transition simple-hover-animation">
                            <i className="fas fa-envelope"></i>
                            <span>yvanroux99@gmail.com</span>
                        </a>
                    </div>
                    <button className="md:hidden text-sky-700" onClick={() => setMenuOpen(!menuOpen)}>
                        <i className="fas fa-bars text-2xl"></i>
                        {menuOpen && (
                            <div className="absolute top-12 right-0 bg-white shadow-lg rounded-lg p-4 space-y-4 z-50">
                                <a href="tel:0662116016"
                                   className="flex items-center space-x-2 text-gray-600 font-medium hover:text-sky-700 transition">
                                    <i className="fas fa-phone-alt"></i>
                                    <span>06 62 11 60 16</span>
                                </a>
                                <a href="mailto:yvanroux99@gmail.com"
                                   className="flex items-center space-x-2 text-gray-600 hover:text-sky-700 transition">
                                    <i className="fas fa-envelope"></i>
                                    <span>yvanroux99@gmail.com</span>
                                </a>
                            </div>
                        )}
                    </button>
                </div>
            </nav>
        </div>
    );
}
