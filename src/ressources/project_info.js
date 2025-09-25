const project_info = [
    {
        key: "ebullixir",
        name: "Ebullixir",
        imageName: "ebullixir-home_run.mp4",
        images: ["ebullixir-success_elixir.mp4", "ebullixir-spider_and_client.mp4", "ebullixir-cut_watermelon.mp4", "ebullixir-recipie_and_client.mp4", "ebullixir-failed_elixir.mp4", "ebullixir-showup.mp4", "ebullixir-home_run.mp4"],
        short_desc: "Jeu vidéo VR de création de potions. Coupez, mélangez et faites bouillir des ingrédients pour créer des potions uniques.",
        desc: "Développer ce jeu m'a véritablement donné le goût de la VR. Prendre en main le <strong>development kit VR</strong> de Unity a été un véritable plaisir, et j'ai adoré créer des interactions immersives pour le joueur.</br></br>" +
            "Bien qu'ayant peu de temps pour développer ce jeu (prêt temporaire d'un casque VR par l'école), j'ai tout de même pris le temps de <strong>concevoir une base flexible</strong> et durable pour le système de recettes, qui est le cœur du jeu. </br></br>"+
            "Quelques <strong>interfaces</strong>, quelques <strong>classes abstraites</strong>, un peu de réflexion sur l'<strong>architecture</strong> du code, et le tour est joué ! J'ai pu ainsi créer un système de recettes qui permet d'ajouter très facilement autant d'ingrédients, de potions et de recettes qu'on le veut.",
        links: [ {name: "Github repository", url: "https://github.com/YvanDesPatates/virtuality"} ],
        tags: ["Game", "VR", "Unity", "C#", "Architecture logicielle"],
    },
    {
        key: "dogjammmer",
        name: "Dog Jammer",
        imageName: "dogjammer.mp4",
        short_desc: "Jeu en multijoueur local où deux chiens s'affrontent en lançant un frisbee. <em class='underline'>Inspiré par WindJammers</em>",
        desc: "Ce projet m'as surtout servi de pretexte pour développer une achritecture flexible permettant de gérer plusieurs manettes en même temps.</br></br>" +
            "Plutôt que d’utiliser l’Input System de Unity, j’ai choisi de repartir de zéro afin d'apprendre un maximum grâce à ce projet. J’ai mis en place une solution personnalisée reposant sur des patrons de conception comme le <strong>Command Pattern</strong> et le <strong>Facade Pattern</strong>, en structurant le code autour d’<strong>interfaces</strong> claires et modulables. Maheureusement le jeu nécessite deux manettes pour être joué, ce qui limite son accessibilité.</br></br>" +
            "Évidemment, j'ai également pris beaucoup de plaisir à créer une mimique de WindJammers, un jeu aussi dure que fun !",
        links: [
            {name: "Github repository", url: "https://github.com/YvanDesPatates/DogJammer"},
            {name: "Jouer en ligne", url: "https://play.unity.com/en/games/1d0f1500-1532-4d24-8816-1a854943e687/dogjammer"},
            {name: "Le jeu qui m'as inspiré", url: "https://store.steampowered.com/app/1114290/Windjammers_2/"},
        ],
        tags: ["Game", "Unity", "C#", "controller management", "local multiplayer"],
    },
    {
        key: "poorsausage",
        name: "Poor Sausage",
        imageName: "poorsausage-menu.mp4",
        images: ["poorsausage-bullet.mp4", "poorsausage-demo.mp4", "poorsausage-ax.gif", "poorsausage-laser.mp4"],
        short_desc: "Jeu vidéo 3D où un teckel doit collecter des saucisses tout en évitant des obstacles. <em class='underline'>Inspiré par Poor Bunny</em>",
        desc: "Jeu vidéo <strong>développé de zéro, en solo en tant que projet personnel</strong>. J'ai voulu faire une version 3D du jeu Poor Bunny, en y intégrant en bonus ma passion pour les teckels !</br></br>" +
            "J'ai profité de ce projet pour me creuser un peu la tête sur le game design, car convertir un jeu 2D en 3D soulève beaucoup de questionnements. J'ai nottement eu à réfléchir sur le type d'obstacle qui serait assez lisible en 3D pour procurer de la difficulté sans être frustrant.</br></br>" +
            "Ce projet m'as également confronté à quelques <strong>difficultées techniques</strong> intéressantes :</br>"+
            "<ul>"+
            "<li>Un système qui met le jeu et tout ces composants à l'arrêt complet durant le game-over <em>( résolu grâce à un <strong>pattern observer</strong> classique, mais efficace )</em>.</li>" +
            "<li>La gestion des collisions à haute vitesse <em>( résolu en lisant la documentation de Unity)</em>.</li> </ul>",
        links: [
            {name: "Github repository", url: "https://github.com/YvanDesPatates/Poor_Sausage"},
            {name: "Jouer en ligne", url: "https://play.unity.com/en/games/827d881e-648b-484c-b0a7-a13724a3f0e5/poorsausage"},
            {name: "Le jeu qui m'as inspiré", url: "https://poki.com/fr/g/poor-bunny"},
        ],
        tags: ["3D", "Unity", "C#", "Architecture logicielle"],
    },
    {
        key: "submarine",
        name: "Submarine",
        imageName: "submarine-main.mp4",
        images: ["submarine-collecting_seaweed.mp4", "submarine-submarine_travel.mp4", "submarine-red_panda.mp4"],
        short_desc: "Jeu de survie en 2D pixel art réalisé en équipe à l'occasion d'une game jam.",
        desc: "Participer à une <strong>Game Jam</strong> m'as permis de découvrir le travail en équipe dans le développement de jeux vidéo.</br></br>" +
            "En moins de 48h on a réussi à créer un jeu de survie en 2D pixel art où le joueur doit survivre dans un sous-marin, en collectant des algues pour réalimenter le sous-marin en oxygène.</br></br>  " +
            "Assumant le rôle de Gameplay Developer, j'ai découvert les difficultés de la création d'un jeu en équipe, notamment la gestion des conflits, la répartition des tâches et la difficulté de maintenir une cohésion d'équipe entre des étudiants qui manquent de sommeil.",
        links: [
            {name: "Github repository", url: "https://github.com/YvanDesPatates/seaPanda"},
            {name: "Jouer en ligne", url: "https://play.unity.com/en/games/0d507dc4-0d6a-4f7a-b523-0ac7a9d7acfb/sea-panda"},
        ],
        tags: ["Game Jam", "équipe", "Unity", "survie", "2D"],

    },
    {
        key: "tutos",
        name: "Tutos en tout genre",
        imageName: "tuto1.mp4",
        images: ["tuto2.mp4", "tuto2.png", "tuto1.mp4", "tuto1.png"],
        short_desc: "Quoi de mieux pour apprendre que de suivre des tutoriels ?",
        desc: "J'ai suivi de nombreux tutoriels pour apprendre les bases de Unity et C# avant de me lancer sur mes projets de jeux personnels.</br></br>" +
            "J'ai parfois ajouté ma touche personnelle à ces projets, malheureusement j'ai perdu la plupart de ces projets... on ne répétera jamais assez l'importance du verisonning !</br></br>" +
            "J'ai tout de même gardé quelques projets, que je vous invite à découvrir ci-dessous. Ils sont tous réalisés en Unity et C# avec beaucoup d'amour et de passion.",
        links: [
            {name: "repository tuto 1", url: "https://github.com/YvanDesPatates/unity_course_prototype_1"},
            {name: "repository tuto 2", url: "https://github.com/YvanDesPatates/unity_course_prototype_2"},
            {name: "jouer au tuto 1", url: "https://play.unity.com/en/games/0bd6b791-308a-4bbc-b5db-bdfb947f74c0/tuto1-feedanimals"},
            {name: "jouer au tuto 2", url: "https://play.unity.com/en/games/eeb7493c-2bc2-4e19-8c59-ba50265cfb2f/tuto2-madrunner"},
        ],
        tags: ["tutoriels", "Unity", "C#", "3D"],
    },
    {
        key: "bataillenavale",
        name: "Bataille Navale",
        imageName: "BN-game.png",
        images: ["BN-ship_placement.mp4", "BN-wrong_ship_placement.mp4", "BN-shooting_ship.mp4", "BN-explanations.png", "BN-game.png"],
        short_desc: "<strong>Premier projet personnel</strong> : un jeu de bataille navale simpliste sur navigateur. Jeu en couch coop où il faut se passer l'ordinateur pour jouer (oui c'est étrange, c'est mon premier projet pou rappel).",
        desc: "Après moins de <strong>4 mois en formation de développeur</strong>, j'ai décidé de me lancer dans mon premier projet personnel.</br></br>"+
            " Alors que mes compétences se limitent à HTML, CSS et des bases en Java et Javascript, je me suis lancé le défi de réaliser un jeu vidéo. Partant des quelques projets de sites webs et d'algos Java développés en cours, j'ai créé un jeu de bataille navale simpliste, mais fonctionnel !",
        links: [
            {name: "Github repository", url: "https://github.com/YvanDesPatates/BatailleNavale"},
            {name: "Jouer en ligne", url: "https://yvandespatates.github.io/BatailleNavale/"},
        ],
        tags: ["Game", "Javascript", "HTML", "CSS", "Web", "premier projet"],
    },
    {
        key: "whatsinpic",
        name: "What's in Pic",
        imageName: "dachshund2.gif",
        short_desc: "Une simple application mobile capable de reconnaitre des objets du quotidien dans une image",
        links: [
            {name: "Github repository", url: "https://github.com/YvanDesPatates/IA_what_s_in_pic"},
        ],
        tags: ["AI", "Python", "HuggingFace", "NodeJS", "API"]
    },
    {
        key: "personaljsframework",
        name: "Framework JS maison",
        imageName: "personaljsframework.png",
        short_desc: "Les débuts d'un framework JS fait maison, permettant de créer des API Typescript plus simples et organisées.",
        desc: "Le but de ce framework était de mieux comprendre les différents frameworks que j'utilise, mais aussi de mettre en pratique les concepts d'architecture logicielle que j'ai appris.</br></br>" +
            "Ce projet a été très intéressant. J'y ai beaucoup appris sur la <strong>généricité</strong> et les <strong> classes paramétrées</strong>.</br></br> " +
            "Evidemment, il est loin d'un framework complet, crée par une équipe de développeurs plus qu'aguerris, et il manque cruellement de documentation. Mais j'ai tout de même pu implémenter ce mini-framework, avec succès, dans plusieurs projets étudiants. Ce projet est véritablement opérationnel pour des projets de petite envergure style prototype.",
        links: [{name: "Github repository", url: "https://github.com/YvanDesPatates/ts_api_template"}],
        tags: ["Framework", "Typescript", "Design Patterns", "Généricité", "Typescript"]
    },
    {
        key: "opensilex",
        name: "OpenSilex",
        imageName: "opensilex_logo.png",
        images: ["opensilex_connexion.png", "opensilex_accounts.png"],
        short_desc: "Application web de gestion de données de recherches à gros volumes. Projet Open Source porté par les valeurs de l'Open Science et du Web Sémantique.",
        desc: "J'ai eu la chance de travailler pour OpenSILEX durant près de <strong>4 ans en tant que développeur full-stack</strong>. J'y ai appris à développer des applications web complexes, à faire de la veille technologique et à travailler en équipe.</br></br>" +
            "OpenSILEX est une application web de gestion de données de recherches à gros volumes, développée en Java et VueJS. Elle est utilisée par des laboratoires de recherche en agronomie pour gérer leurs données et leurs projets.</br></br>" +
            "<p class='desc-subtitle'>Une expérience enrichissante</p>" +
            "Cette expérience a été très riche en apprentissages, aussi bien humains que techniques. Ce fut l'occasion d'intégrer un vrai worklfow SCRUM dans une équipe d'une dizaine de personnes, de travailler sur des problématiques de gestion de données complexes et d'apprendre à utiliser de nouvelles technologies.</br>Intégrer un projet de grande empleur ma permis de maitriser les sujets importants que sont la documentation et la dette technique.</br></br>" +
            "<p class='desc-subtitle'>Architecture logicielle</p>" +
            "J'ai eu l'occasion, durant nos réunions techniques, de prendre part à des décisions importantes concernant l'architecture logicielle de l'application. J'ai notamment fait part d'un problème dans l'architecture en couche empêchant la factorisation de code, et ai proposé une solution qui a été acceptée et mise en place. Ce fut extrêmement gratifiant de pouvoir contribuer à la maintenabilité du logiciel, et ainsi d'aider toute l'équipe dans son travail.",
        links: [
            {name: "Site officiel", url: "http://www.opensilex.org/"},
            {name: "Github repository", url: "https://github.com/OpenSILEX/opensilex"},
        ],
        tags: ["Java", "MongoDB", "SPARQL", "VueJS", "Architecture logicielle"]
    },
    {
        key: "patternrun",
        name: "Pattern Run",
        imageName: "patternrun-jetpack.png",
        images: ["patternrun-movement_strategy.png", "patternrun-beginning.mp4", "patternrun-double_jump.mp4", "patternrun-gameover.png"],
        short_desc: "Création d'un cours sur l'architecture logicielle en C# mêlant théorie et mise en pratique de patterns.",
        desc: "Mon ancienne école a souhaité que je crée un cours sur l'architecture logicielle. J'ai créé un TP d'une demi-journée servant d'introduction à l'architecture logicielle et aux designs patterns.</br></br>"+
            "Ce TP prends la forme d'un jeu vidéo où nous codons ensemble certaines fonctionnalités manquantes. Le choix de faire un jeu est motivé par ma passion, mais aussi car c'est un environnement vivant et complexe dans lequel les patterns sont très utiles, presque évidents. Cela permet également de rendre l'apprentissage beaucoup plus ludique.</br></br>",
        links: [
            {name: "Github repository", url: "https://github.com/YvanDesPatates/pattern_run"},
            {name: "Jouer en ligne", url: "https://play.unity.com/en/games/0784f5cf-534d-4d46-9c56-30ed911999a8/pattern-run"},
        ],
        tags: ["Architecture logicielle", "Design Patterns", "C#", "Unity"]
    },
    {
        key: "patterns_students_projects",
        name: "Projets étudiants | comprendre l'architecture logicielle",
        imageName: "patterns_students_projects.png",
        short_desc: "",
        desc: "Durant mes études, j'ai eu plusieurs projets étudiants, sous formes d'exercices, qui m'ont permis de comprendre l'importance d'une architecture logicielle solide et maintenable.</br></br>" +
            "Ces projets m'ont appris à utiliser des design patterns, à mettre en oeuvre une architecture en couches et à comprendre les principes d'architecture logicielle (SOLID, GRASP, KISS).</br></br>" +
            "C'est grâce à ces bases solides que j'ai pu continuer à développer mes compétences en architecture logicielle au quotidien, dans mes projets personnels et professionnels.",
        links: [
            {name: "projet patterns", url: "https://github.com/YvanDesPatates/coffre-chateau-patterns"},
            {name: "projet architecture en couche", url: "https://github.com/YvanDesPatates/projetStocks"},
            {name: "projet command pattern", url: "https://github.com/YvanDesPatates/patternCommand"},
        ],
    }


];

/**
 * @param keys
 * @returns related projects with the same order as "keys" array
 */
export function getManyProjectByKeys(keys) {
    return keys.map(key => project_info.find(project => project.key === key)).filter(project => project !== undefined);
}