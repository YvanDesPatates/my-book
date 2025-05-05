import React from 'react';
import {useParams} from 'react-router-dom';
import {getDomaineCompetencyByKey} from "../ressources/domaine_competency_info";

export default function DomaineCompetency() {
    const params = useParams()

    const domaineCompetency = getDomaineCompetencyByKey(params.domaineKey)

    return (
        <div>
        </div>
    )
}