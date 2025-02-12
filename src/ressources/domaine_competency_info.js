const domaine_competency = [
    {
        key:"Game Developer"
    },
    {
        key: "Web Developer"
    },
    {
        key: "IA"
    },

];

export function getDomaineCompetency(){
    return domaine_competency;
}

export function getDomaineCompetencyByKey(key){
    return domaine_competency.find(domaine => domaine.key === key);
}