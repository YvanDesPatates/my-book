
import logo from '../ressources/images/egg.png'
import {useHandleNavigate} from "./UtilFunctions";

export default function Footer() {
    const handleNavigate = useHandleNavigate();

    return (
        <footer class="py-6 px-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center flex-col-reverse md:flex-row">
                <div className="mb-4 md:mb-0">
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-10 simple-hover-animation"
                        onClick={() => handleNavigate('/')}
                        style={{ cursor: 'pointer' }}
                    />
                </div>
                <div className="flex space-x-6 mb-4 md:mb-0">
                    <a href="https://github.com/YvanDesPatates" class="text-gray-500 hover:text-sky-600 transition">
                        <i className="fab fa-github text-xl simple-hover-animation"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/yvan-roux-developer/"
                       className="text-gray-500 hover:text-sky-600 transition">
                        <i className="fab fa-linkedin text-xl simple-hover-animation"></i>
                    </a>
                    <a href="mailto:yvanroux99@gmail.com" className="text-gray-500 hover:text-sky-600 transition">
                        <i className="fas fa-envelope text-xl simple-hover-animation"></i>
                    </a>
                    <a href="tel:0662116016" className="text-gray-500 hover:text-sky-600 transition">
                        <i className="fas fa-phone-alt text-xl simple-hover-animation"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}