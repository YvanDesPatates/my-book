const domaine_competency = [
    {
        key:"Game-Developer",
        projects_keys: ["dogjammmer", "whatsinpic", "poorsausage"],
    },
    {
        key: "Web-Developer",
        projects_keys: ["personaljsframework", "opensilex", "whatsinpic", "dogjammmer", "poorsausage"],
    },
    {
        key: "IA",
        projects_keys: ["dogjammmer", "whatsinpic", "poorsausage"],
    },
    {
        key: "Architecture-logiciel",
        projects_keys: ["personaljsframework", "opensilex"],
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