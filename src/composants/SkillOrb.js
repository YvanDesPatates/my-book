import '../ressources/css/skillOrb.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SkillOrb({ iconClass, gradientClass, colorClass, link, floatingClass }) {
    const navigate = useNavigate();

    return (
        <div
            className={`skill-orb ${floatingClass || ''} ${gradientClass} ${colorClass} rounded-full flex items-center justify-center`}
            onClick={() => navigate(link)}
            style={{ cursor: link ? 'pointer' : 'default' }}
        >
            <i className={`${iconClass} text-2xl`}></i>
        </div>
    );
}
