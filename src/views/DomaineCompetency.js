import React from 'react';
import { useParams } from 'react-router-dom';
import { getDomaineCompetencyByKey } from "../ressources/domaine_competency_info";
import ProjectCard from "../composants/ProjectCard";
import '../ressources/css/domaineCompetency.css';
import {getManyProjectByKeys} from "../ressources/project_info";

export default function DomaineCompetency() {
    const params = useParams();
    const domaineCompetency = getDomaineCompetencyByKey(params.domaineKey);
    const projects = getManyProjectByKeys(domaineCompetency.projects_keys);

    return (
        <div id="competency-container" className="min-h-screen">
            <div className="relative bg-white shadow-lg">
                <div className="py-2 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">
                        Mes Projets :
                    </h1>
                    <h1 className="text-3xl md:text-5xl font-bold mb-2 gradient-text2">
                        {domaineCompetency.key}
                    </h1>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-6xl">
                {projects.map((project, index) => (
                    <React.Fragment key={index}>
                        <ProjectCard
                            project={project}
                        />
                        {index < projects.length - 1 && <div className="divider my-20"></div>}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}
