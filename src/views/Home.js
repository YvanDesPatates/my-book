import {useState, useEffect} from 'react'

import '../ressources/css/home.css'
import {useNavigate} from 'react-router-dom';

import centralImg from '../ressources/images/pixel_Y.png'

export default function Home() {
    const navigate = useNavigate()


    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <main className="flex-grow flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-4">
                    Game Developer & App Developer
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
                    Je progresse au quotidien en imaginant et créant des jeux et apps que j'aime !
                </p>

                {/* avatar and skills orbs arround */}
                <div className="avatar-container mb-16" >
                    <img src={centralImg} alt="avatar"
                         className="avatar border-4 border-white"/>

                    <div className="skill-orb-games">
                        <a href="#jeux"
                           className="skill-orb bg-gradient-to-br from-blue-100 to-blue-200 w-full h-full rounded-full flex items-center justify-center text-blue-600">
                            <i className="fas fa-gamepad text-2xl"></i>
                        </a>
                    </div>

                    <div className="skill-orb-apps">
                        <a href="#apps"
                           className="skill-orb bg-gradient-to-br from-purple-100 to-purple-200 w-full h-full rounded-full flex items-center justify-center text-purple-600">
                            <i className="fas fa-mobile-alt text-2xl"></i>
                        </a>
                    </div>

                    <div className="skill-orb-architecture">
                        <a href="#architecture"
                           className="skill-orb bg-gradient-to-br from-green-100 to-green-200 w-full h-full rounded-full flex items-center justify-center text-green-600">
                            <i className="fas fa-code-branch text-2xl"></i>
                        </a>
                    </div>

                    <div className="skill-orb-ia">
                        <a href="#ia"
                           className="skill-orb bg-gradient-to-br from-red-100 to-red-200 w-full h-full rounded-full flex items-center justify-center text-red-600">
                            <i className="fas fa-brain text-2xl"></i>
                        </a>
                    </div>

                    <div className="skill-orb-blender">
                        <a href="#blender"
                           className="skill-orb bg-gradient-to-br from-yellow-100 to-yellow-200 w-full h-full rounded-full flex items-center justify-center text-yellow-600">
                            <i className="fas fa-cube text-2xl"></i>
                        </a>
                    </div>
                </div>

                {/* skills buttons (alternative for clicking on skill orbs */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-3xl mx-auto">
                    <a href="#jeux"
                       className="skill-tag bg-white/80 backdrop-blur-sm rounded-full py-2 px-4 text-sm font-medium text-gray-700 hover:bg-white transition flex items-center justify-center space-x-2">
                        <i className="fas fa-gamepad text-blue-500"></i>
                        <span>Jeu vidéo</span>
                    </a>
                    <a href="#apps"
                       className="skill-tag bg-white/80 backdrop-blur-sm rounded-full py-2 px-4 text-sm font-medium text-gray-700 hover:bg-white transition flex items-center justify-center space-x-2">
                        <i className="fas fa-mobile-alt text-purple-500"></i>
                        <span>Applications</span>
                    </a>
                    <a href="#architecture"
                       className="skill-tag bg-white/80 backdrop-blur-sm rounded-full py-2 px-4 text-sm font-medium text-gray-700 hover:bg-white transition flex items-center justify-center space-x-2">
                        <i className="fas fa-code-branch text-green-500"></i>
                        <span>Architecture</span>
                    </a>
                    <a href="#ia"
                       className="skill-tag bg-white/80 backdrop-blur-sm rounded-full py-2 px-4 text-sm font-medium text-gray-700 hover:bg-white transition flex items-center justify-center space-x-2">
                        <i className="fas fa-brain text-red-500"></i>
                        <span>IA</span>
                    </a>
                    <a href="#blender"
                       className="skill-tag bg-white/80 backdrop-blur-sm rounded-full py-2 px-4 text-sm font-medium text-gray-700 hover:bg-white transition flex items-center justify-center space-x-2">
                        <i className="fas fa-cube text-yellow-500"></i>
                        <span>Blender</span>
                    </a>
                </div>
            </div>
        </main>
    )
}