const project_info = [
    {
        key:"dogjammmer",
        name: "Dog Jammer",
        imageName: "dachshund.gif",
        short_desc: "A game where you play as a dog and you have to catch the ball",
        tags: ["Game", "Unity", "C#"],
    },
    {
        key: "whatsinpic",
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

/**
 * @param keys
 * @returns related projects with the same order as "keys" array
 */
export function getManyProjectByKeys(keys){
    return keys.map(key => project_info.find(project => project.key === key)).filter(project => project !== undefined);
}