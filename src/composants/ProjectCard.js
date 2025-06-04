import React, { useEffect, useRef } from 'react';
import '../ressources/css/projectCard.css';

export default function ProjectCard({ project }) {
    const image = require(`../ressources/images/projects/${project.imageName}`);
    const cardRef = useRef(null);

    // Scroll apparition effect using Intersection Observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    } else {
                        entry.target.style.opacity = '0';
                        entry.target.style.transform = 'translateY(20px)';
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (cardRef.current) {
            cardRef.current.style.opacity = '0';
            cardRef.current.style.transform = 'translateY(20px)';
            cardRef.current.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) observer.unobserve(cardRef.current);
        };
    }, []);

    return (
        <div ref={cardRef} className="project-card mb-16">
            <div className="md:flex">
                {/* Title and image section */}
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
                    <p className="text-lg text-gray-600 mb-6"
                        dangerouslySetInnerHTML={{ __html: project.short_desc }}
                    />

                    {/* Links section */}
                    <div className="flex flex-wrap">
                        {project.links.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="link"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                        {/* tags section */}
                    <div className="flex flex-wrap">
                        {project.tags.map((tag, index) => (
                            <span key={index} className="tag">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
