const project_info = [
    {
        key: "ebullixir",
        name: "Ebullixir",
        imageName: "dachshund2.gif",
        short_desc: "Jeu vidéo VR de création de potions. Coupez, mélangez et faites bouillir des ingrédients pour créer des potions uniques.",
        links: [ {name: "Github repository", url: "https://github.com/YvanDesPatates/virtuality"} ],
        tags: ["Game", "VR", "Unity", "C#"],
    },
    {
        key: "dogjammmer",
        name: "Dog Jammer",
        imageName: "dachshund.gif",
        short_desc: "Jeu en multijoueur local où deux chiens s'affrontent en lançant un frisbee. <em class='underline'>Inspiré par WindJammers</em>",
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
        imageName: "dachshund2.gif",
        short_desc: "Jeu vidéo 3D où un teckel doit collecter des saucisses tout en évitant des obstacles. <em class='underline'>Inspiré par Poor Bunny</em>",
        desc: "Jeu vidéo <strong>développé de zéro, en solo en tant que projet personnel</strong>. J'ai voulu faire une version 3D du jeu Poor Bunny, en y intégrant en bonus ma passion pour les teckels !</br></br>" +
            "J'ai profité de ce projet pour me creuser un peu la tête sur le game design, car convertir un jeu 2D en 3D soulève beaucoup de questionnements. J'ai nottement eu à réfléchir sur le ltype d'obstacle qui serait assez lisible en 3D pour procurer de la difficulté sans être frustrant.</br></br>" +
            "Ce projet m'as également confronté à quelques difficultées techniques intéressantes :</br>"+
            "<ul>"+
            "<li>Un système qui met le jeu et tout ces composants à l'arrêt complet durant le game-over <em>( résolu grâce à un pattern observer classique, mais efficace )</em>.</li>" +
            "<li>La gestion des collisions à haute vitesse <em>( résolu en lisant la documentation de Unity)</em>.</li> </ul>",
        links: [
            {name: "Github repository", url: "https://github.com/YvanDesPatates/Poor_Sausage"},
            {name: "Jouer en ligne", url: "https://play.unity.com/en/games/827d881e-648b-484c-b0a7-a13724a3f0e5/poorsausage"},
            {name: "Le jeu qui m'as inspiré", url: "https://poki.com/fr/g/poor-bunny"},
        ],
        tags: ["3D", "Unity", "C#"],
    },
    {
        key: "submarine",
        name: "Submarine",
        imageName: "dachshund.gif",
        short_desc: "Jeu de survie en 2D pixel art réalisé en équipe à l'occasion d'une game jam.",
        desc: "Participer à une Game Jam m'as permis de découvrir le travail en équipe dans le développement de jeux vidéo.</br></br>" +
            "En moins de 48h on a réussi à créer un jeu de survie en 2D pixel art où le joueur doit survivre dans un sous-marin, en collectant des algues pour réalimenter le sous-marin en oxygène.</br></br>  " +
            "Assumant le rôle de Gameplay Developer, j'ai découvert les difficultés de la création d'un jeu en équipe, notamment la gestion des conflits, la répartition des tâches et la difficulté de maintenir une cohésion d'équipe entre des étudiants qui manquent de sommeil.",
        links: [
            {name: "Github repository", url: "https://github.com/YvanDesPatates/seaPanda"},
        ],
        tags: ["Game Jam", "équipe", "Unity", "survie", "2D"],

    },
    {
        key: "flappytoucan",
        name: "Flappy Toucan",
        imageName: "dachshund2.gif",
        short_desc: "Flappy Bird, mais avec un toucan !",
        desc: "C'est le seul projet qui provient d'un tutoriel que je mets ici. À l'instar de ce projet, j'ai suivi de nombreux tutoriels pour apprendre les bases de Unity et C# avant de me lancer sur mes projets de jeux personnels.</br></br>J'ai quand même ajouté ma touche personnelle à ce projet en créant moi même toutes les assets 2D et en ajoutant de nouveaux obstacles pour le moins originaux ! </br></br> ATTENTION : bien qu'étant l'un des premiers projets que j'ai réalisé, c'est de loin le plus addictif !",
        tags: ["tutoriel", "assets maison", "Unity", "C#", "2D"],
    },
    {
        key: "bataillenavale",
        name: "Bataille Navale",
        imageName: "dachshund.gif",
        short_desc: "Premier projet personnel : un jeu de bataille navale simpliste sur navigateur. Jeu en couch coop où il faut se passer l'ordinateur pour jouer (oui c'est étrange, c'est mon premier projet pou rappel).",
        desc: "Après moins de 4 mois en formation de développeur, j'ai décidé de me lancer dans mon premier projet personnel. Alors que mes compétences se limitent à HTML, CSS et des bases en Java et Javascript, je me suis lancé le défi de réaliser un jeu vidéo. Partant des quelques projets de sites webs et d'algos Java développés en cours, j'ai créé un jeu de bataille navale simpliste, mais fonctionnel !",
        links: [
            {name: "Jouer en ligne", url: "https://yvandespatates.github.io/BatailleNavale/"},
            {name: "Github repository", url: "https://github.com/YvanDesPatates/BatailleNavale"},
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
        imageName: "dachshund.gif",
        short_desc: "Les débuts d'un framework JS fait maison, permettant de créer des API Typescript plus simples et organisées.",
        links: [{name: "Github repository", url: "https://github.com/YvanDesPatates/ts_api_template"}],
        tags: ["Framework", "Typescript", "Design Patterns", "Généricité paramétrique", "Typescript"]
    },
    {
        key: "opensilex",
        name: "OpenSilex",
        imageName: "dachshund.gif",
        short_desc: "Application web de gestion de données de recherches à gros volumes. Projet Open Source porté par les valeurs de l'Open Science et du Web Sémantique.",
        links: [
            {name: "Site officiel", url: "http://www.opensilex.org/"},
            {name: "Github repository", url: "https://github.com/OpenSILEX/opensilex"},
        ],
        tags: ["Java", "Architecture logicielle", "3 ans d'expériences", "VueJS",]
    },

];

/**
 * @param keys
 * @returns related projects with the same order as "keys" array
 */
export function getManyProjectByKeys(keys) {
    return keys.map(key => project_info.find(project => project.key === key)).filter(project => project !== undefined);
}