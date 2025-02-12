import {useMediaQuery} from 'react-responsive'
import React from 'react';
import {useParams} from 'react-router-dom';
import DomaineCompetencyPhone from "../composants/DomaineCompetencyPhone";
import DomaineCompetencyPc from "../composants/DomaineCompetencyPc";
import {getDomaineCompetencyByKey} from "../ressources/domaine_competency_info";

export default function DomaineCompetency() {
    const params = useParams()

    const domaineCompetency = getDomaineCompetencyByKey(params.domaineKey)

    const isPhone = useMediaQuery({query: '(max-width: 1000px)'})
    return (
        <div>
            {isPhone ?
                <DomaineCompetencyPhone
                    domaineKey={domaineCompetency.key}
                />
                :
                <DomaineCompetencyPc
                    domaineKey={domaineCompetency.key}
                />
            }
        </div>
    )
}