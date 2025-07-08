import '../ressources/css/home.css';
import centralImg from '../ressources/images/pixel_Y.png';
import SkillOrb from '../composants/SkillOrb';
import {useNavigate} from "react-router-dom";

const get_domaine_url = (domaineKey) => `/domaine_de_competence/${domaineKey}`;

export default function Home() {
    const navigate = useNavigate()

    return (
        <main className="flex-grow flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-4">
                    Game & App Developer
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-2 max-w-3xl mx-auto">
                    Je progresse au quotidien en imaginant et créant des jeux et apps que j'aime !
                </p>

                <p className="text-xs md:text-sm text-gray-600 max-w-3xl mx-auto">
                    ✨ Bienvenue sur mon portfolio ! ✨
                </p>
                <p className="text-xs md:text-sm text-gray-600 max-w-3xl mb-12">
                    ✨ Naviguez à travers mes projets en cliquant sur mes différents
                    univers ✨
                </p>

                {/* Avatar and skill orbs */}
                <div className="avatar-container mb-16">
                    <img src={centralImg} alt="avatar" className="avatar border-4 border-white"/>

                    <SkillOrb
                        iconClass="fas fa-gamepad"
                        gradientClass="bg-gradient-to-br from-blue-100 to-blue-200"
                        colorClass="text-blue-600"
                        link={get_domaine_url('Game-Developer')}
                        floatingClass="skill-orb-games"
                    />
                    <SkillOrb
                        iconClass="fas fa-mobile-alt"
                        gradientClass="bg-gradient-to-br from-purple-100 to-purple-200"
                        colorClass="text-purple-600"
                        link={get_domaine_url('Web-Developer')}
                        floatingClass="skill-orb-apps"
                    />
                    <SkillOrb
                        iconClass="fas fa-code-branch"
                        gradientClass="bg-gradient-to-br from-green-100 to-green-200"
                        colorClass="text-green-600"
                        link={get_domaine_url('Architecture-logiciel')}
                        floatingClass="skill-orb-architecture"
                    />
                    <SkillOrb
                        iconClass="fas fa-brain"
                        gradientClass="bg-gradient-to-br from-red-100 to-red-200"
                        colorClass="text-red-600"
                        link={get_domaine_url('IA')}
                        floatingClass="skill-orb-ia"
                    />
                    <SkillOrb
                        iconClass="fas fa-cube"
                        gradientClass="bg-gradient-to-br from-yellow-100 to-yellow-200"
                        colorClass="text-yellow-600"
                        link={get_domaine_url('Blender')}
                        floatingClass="skill-orb-blender"
                    />
                </div>

                {/* Skills buttons */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-3xl mx-auto">
                    <p
                        className="skill-tag bg-white/80 backdrop-blur-sm rounded-full py-2 px-4 text-sm font-medium text-gray-700 hover:bg-white transition flex items-center justify-center space-x-2"
                        onClick={() => navigate(get_domaine_url('Game-Developer'))}
                        style={{cursor: 'pointer'}}
                    >
                        <i className="fas fa-gamepad text-blue-500"></i>
                        <span>Jeu vidéo</span>
                    </p>
                    <p
                        className="skill-tag bg-white/80 backdrop-blur-sm rounded-full py-2 px-4 text-sm font-medium text-gray-700 hover:bg-white transition flex items-center justify-center space-x-2"
                        onClick={() => navigate(get_domaine_url('Web-Developer'))}
                        style={{cursor: 'pointer'}}
                    >
                        <i className="fas fa-mobile-alt text-purple-500"></i>
                        <span>Applications</span>
                    </p>
                    <p
                        className="skill-tag bg-white/80 backdrop-blur-sm rounded-full py-2 px-4 text-sm font-medium text-gray-700 hover:bg-white transition flex items-center justify-center space-x-2"
                        onClick={() => navigate(get_domaine_url('Architecture-logiciel'))}
                        style={{cursor: 'pointer'}}
                    >
                        <i className="fas fa-code-branch text-green-500"></i>
                        <span>Architecture</span>
                    </p>
                    <p
                        className="skill-tag bg-white/80 backdrop-blur-sm rounded-full py-2 px-4 text-sm font-medium text-gray-700 hover:bg-white transition flex items-center justify-center space-x-2"
                        onClick={() => navigate(get_domaine_url('IA'))}
                        style={{cursor: 'pointer'}}
                    >
                        <i className="fas fa-brain text-red-500"></i>
                        <span>IA</span>
                    </p>
                    <p
                        className="skill-tag bg-white/80 backdrop-blur-sm rounded-full py-2 px-4 text-sm font-medium text-gray-700 hover:bg-white transition flex items-center justify-center space-x-2"
                        onClick={() => navigate(get_domaine_url('Blender'))}
                        style={{cursor: 'pointer'}}
                    >
                        <i className="fas fa-cube text-yellow-500"></i>
                        <span>Blender</span>
                    </p>
                </div>
            </div>
        </main>
    );
}
