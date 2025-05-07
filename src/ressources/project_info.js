const project_info = [
    {
        key:"dogjammmer",
        name: "Dog Jammer",
        imageName: "dachshund.gif",
        short_desc: "A game where you play as a dog and you have to catch the ball",
        tags: ["Game", "Unity", "C#"],
    },
    {
        key: "Whatsinpic",
        name: "What's in Pic",
        imageName: "dachshund2.gif",
        short_desc: "A game where you have to guess the picture",
        tags: ["Game", "Unity", "C#"],
    },
    {
        key: "personaljsframework",
        name: "Personal JS Framework",
        imageName: "dachshund.gif",
        short_desc: "A personal JS framework to create web applications",
        tags: ["Web", "JS", "Framework"],
    },
    {
        key: "poorsausage",
        name: "Poor Sausage",
        imageName: "dachshund2.gif",
        short_desc: "A game where you play as a sausage and you have to escape from the pan",
        tags: ["Game", "Unity", "C#"],
    },
    {
        key: "opensilex",
        name: "OpenSilex",
        imageName: "dachshund.gif",
        short_desc: "A web application to manage the OpenSilex project",
        tags: ["Web", "JS", "Framework"],
    },

];

export function getProjectList(){
    return project_info;
}

export function getProjectByKey(key){
    return project_info.find(project => project.key === key);
}

export function getManyProjectByKeys(keys){
    return project_info.filter(project => keys.includes(project.key));
}