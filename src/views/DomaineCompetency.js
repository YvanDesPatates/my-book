import React from 'react';
import {useParams} from 'react-router-dom';
import {getDomaineCompetencyByKey} from "../ressources/domaine_competency_info";
import '../ressources/css/domaineCompetency.css';

export default function DomaineCompetency() {
    const params = useParams();

    const domaineCompetency = getDomaineCompetencyByKey(params.domaineKey);

    return (
        <div id="competency-container" className="min-h-screen">
            <div className="relative bg-white shadow-lg">
                <div className="py-2 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">
                        Mes Projets :
                    </h1>
                    <h1 className="text-3xl md:text-5xl font-bold mb-2 gradient-text2">
                        { domaineCompetency.key }
                    </h1>
                </div>
            </div>

            <div> CARD </div>

            <div className="divider my-20"></div>

            <div> CARD </div>
        </div>
    );
}
