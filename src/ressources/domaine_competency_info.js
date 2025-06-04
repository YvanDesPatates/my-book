const domaine_competency = [
    {
        key:"Game-Developer",
        description: "La création de jeux vidéo est un fil rouge depuis mes premiers pas dans le développement. Entre projets personnels, projets étudiants et game jams, j'ai pu explorer différents aspects du développement de jeux 2D, 3D et VR.",
        tags: ["Unity", "C#", "VR", "3D", "2D", "game design", "architecture logicielle"],
        projects_keys: ["ebullixir", "dogjammmer", "poorsausage"],
    },
    {
        key: "Web-Developer",
        description: "Développeur web avec plus de <strong>3 ans d'expériences</strong>, j'ai une maitrise poussée des environnements REST et des frameworks front-end modernes. Bien qu'ayant une large préférence pour le backend, je suis un développeur fullstack polyvalent</br> </br>J'ai également développé de nombreux projets personnels et étudiants durant mes <strong>5 années d'études</strong>, ce qui m'as permis de travailler sur des technologies variées et de me spécialiser dans la création d'applications web performantes et maintenables.",
        tags: ["API", "Java", "NodeJS", "Typescript", "React", "VueJS", "frameworks JS", "architecture logicielle"],
        projects_keys: ["personaljsframework", "opensilex", "whatsinpic", "dogjammmer", "poorsausage"],
    },
    {
        key: "Architecture-logiciel",
        description: "L'architecture logicielle est un domaine qui me passionne particulièrement. J'ai eu l'occasion de travailler sur des projets complexes, notamment durant mes <strong>3 années en tant que développeur</strong> pour <a style='color: #7F00FF' href='http://www.opensilex.org/'>OpenSILEX</a>, où la conception et la structuration du code étaient essentielles pour garantir la maintenabilité et l'évolutivité des applications. Appliquer les principes SOLID dans mes projets professionels, personnels et étudiant, entre autres grâce à l'utilisation design patterns, m'a permis de grandement m'améliorer en architecture logicielle.",
        projects_keys: ["personaljsframework", "opensilex"],
    },
    {
        key: "IA",
        description: "Mes 4èmes et 5èmes années d'études en <strong>spécialitées IA et Big Data</strong> m'ont permis d'explorer les domaines de l'intelligence artificielle. Entrainement de modèles, composition par couches, pipelines de données, et bien d'autres sujets ont été abordés durant ces deux années. J'ai également pu mettre en pratique ces connaissances dans le cadre de projets étudiants.",
        tags: ["NLP", "LLM", "Python", "machine learning"],
        projects_keys: ["dogjammmer", "whatsinpic", "poorsausage"],
    },
    {
        key: "Blender",
        projects_keys: [""]
    },

];

export function getDomaineCompetencylist(){
    return domaine_competency;
}

export function getDomaineCompetencyByKey(key){
    return domaine_competency.find(domaine => domaine.key === key);
}