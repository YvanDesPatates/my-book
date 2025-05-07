import React from 'react';
import '../ressources/css/projectCard.css';

export default function ProjectCard({ project }) {
    const image = require(`../ressources/images/projects/${project.imageName}`);

    return (
        <div className="project-card mb-16">
            <div className="md:flex">
                <div className="md:w-2/5 p-6 flex justify-center items-center">
                    <div className="relative group">
                        <img
                            src={image}
                            alt={project.name}
                            className="rounded-xl object-cover w-full h-auto shadow-xl transform group-hover:rotate-1 transition duration-500"
                        />
                        <div className="absolute -inset-2 bg-neon opacity-20 rounded-xl blur-lg group-hover:opacity-30 transition duration-500"></div>
                    </div>
                </div>
                <div className="md:w-3/5 p-8">
                        <h2 className="text-3xl font-bold text-gray-800 font-display mb-4">{project.name}</h2>
                    <p className="text-lg text-gray-600 italic mb-6">{project.short_desc}</p>
                    <div className="flex flex-wrap gap-3">
                        {project.tags.map((tag, index) => (
                            <span key={index} className="tag px-4 py-1 bg-electric bg-opacity-10 text-electric">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
