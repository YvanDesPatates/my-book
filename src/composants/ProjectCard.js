import React, { useEffect, useRef } from 'react';
import '../ressources/css/projectCard.css';
import CarouselModal from "./CarouselModal";

export default function ProjectCard({ project }) {
    const image = project.imageName ? require(`../ressources/images/projects/${project.imageName}`) : require(`../ressources/images/projects/default.gif`);
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

                    { /* Short description */}
                    <p className="italic text-gray-500 mb-6"
                        dangerouslySetInnerHTML={{ __html: project.short_desc }}
                    />

                    { /* Full description */}
                    <p className="text-gray-700 mb-6"
                        dangerouslySetInnerHTML={{ __html: project.desc }}
                    />

                    {/* Links section */}
                    <div className="flex flex-wrap">
                        { project.links && project.links.length > 0 ?
                            project.links.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="link"
                            >
                                {link.name}
                            </a>
                        ))
                        : null
                        }
                    </div>

                        {/* tags section */}
                    <div className="flex flex-wrap">
                        { project.tags && project.tags.length > 0 ?
                            project.tags.map((tag, index) => (
                            <span key={index} className="tag">
                                {tag}
                            </span>
                        ))
                        : null
                        }
                    </div>

                        {/* Carousel image*/}
                        { project.images && project.images.length > 0 ?
                            <CarouselModal
                                images={project.images.map(imageName => require(`../ressources/images/projects/${imageName}`))}
                            />
                            :
                            null
                        }
                </div>
            </div>
        </div>
    );
}
