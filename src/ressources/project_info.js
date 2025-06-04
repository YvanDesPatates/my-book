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
        key: "poorsausage",
        name: "Poor Sausage",
        imageName: "dachshund2.gif",
        short_desc: "Jeu vidéo 3D où un teckel doit collecter des saucisses tout en évitant des obstacles. <em class='underline'>Inspiré par Poor Bunny</em>",
        links: [
            {name: "Github repository", url: "https://github.com/YvanDesPatates/Poor_Sausage"},
            {name: "Jouer en ligne", url: "https://play.unity.com/en/games/81b809b4-a345-4818-85c2-2234df7be171/poorsausage"},
            {name: "Le jeu qui m'as inspiré", url: "https://poki.com/fr/g/poor-bunny"},
        ],
        tags: ["3D", "Unity", "C#"],
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