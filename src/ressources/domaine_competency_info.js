const domaine_competency = [
    {
        key:"Game-Developer"
    },
    {
        key: "Web-Developer"
    },
    {
        key: "IA"
    },
    {
        key: "Architecture-logiciel"
    },
    {
        key: "Blender"
    },

];

export function getDomaineCompetencylist(){
    return domaine_competency;
}

export function getDomaineCompetencyByKey(key){
    return domaine_competency.find(domaine => domaine.key === key);
}