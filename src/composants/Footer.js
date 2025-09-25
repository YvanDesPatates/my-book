import logo from '../ressources/images/dachsundLogo.png';
import {useHandleNavigate} from './UtilFunctions';
import SkillOrb from './SkillOrb';
import {useLocation} from 'react-router-dom';

export default function Footer() {
    const handleNavigate = useHandleNavigate();
    const location = useLocation();

    // true if the current page is the home page
    const isHomePage = location.pathname === '/';
    const smallScreen = window.innerWidth < 768;

    return (
        <footer className="fixed bottom-0 left-0 w-full z-50 bg-white bg-opacity-90 py-2">
            <div className="max-w-7xl mx-auto flex justify-between items-center flex-col-reverse md:flex-row">
                {/* Logo to homepage only on desktop*/}
                { smallScreen && !isHomePage ? null : (
                    <div className="mb-4 md:mb-0">
                        <img
                            src={logo}
                            alt="Logo"
                            className="logo simple-hover-animation"
                            onClick={() => handleNavigate('/')}
                            style={{cursor: 'pointer'}}
                        />
                    </div>
                )}

                {/* skill orbs and social media icons*/}
                <div
                    className={`flex items-center justify-between flex-col md:flex-row md:space-x-6${!isHomePage ? ' w-3/5' : ''}`}>
                    {!isHomePage && (
                        <div className="flex justify-center space-x-4 mb-4 md:mb-0">
                            <SkillOrb
                                iconClass="fas fa-gamepad"
                                gradientClass="bg-gradient-to-br from-blue-100 to-blue-200"
                                colorClass="text-blue-600"
                                link="/domaine_de_competence/Game-Developer"
                            />
                            <SkillOrb
                                iconClass="fas fa-code-branch"
                                gradientClass="bg-gradient-to-br from-green-100 to-green-200"
                                colorClass="text-green-600"
                                link="/domaine_de_competence/Architecture-logiciel"
                            />
                            <SkillOrb
                                iconClass="fas fa-mobile-alt"
                                gradientClass="bg-gradient-to-br from-purple-100 to-purple-200"
                                colorClass="text-purple-600"
                                link="/domaine_de_competence/Web-Developer"
                            />
                            <SkillOrb
                                iconClass="fas fa-brain"
                                gradientClass="bg-gradient-to-br from-red-100 to-red-200"
                                colorClass="text-red-600"
                                link="/domaine_de_competence/IA"
                            />
                            <SkillOrb
                                iconClass="fas fa-cube"
                                gradientClass="bg-gradient-to-br from-yellow-100 to-yellow-200"
                                colorClass="text-yellow-600"
                                link="/domaine_de_competence/Blender"
                            />
                        </div>
                    )}

                    <div className="flex space-x-6">
                        <a href="https://github.com/YvanDesPatates"
                           className="text-gray-500 hover:text-sky-600 transition">
                            <i className="fab fa-github text-xl simple-hover-animation"></i>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/yvan-roux-developer/"
                            className="text-gray-500 hover:text-sky-600 transition"
                        >
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
            </div>
        </footer>
    );
}
