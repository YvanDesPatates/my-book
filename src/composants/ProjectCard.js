import React, {useEffect, useRef} from 'react';
import '../ressources/css/projectCard.css';
import {CarouselModalManager} from '../App';

export default function ProjectCard({project}) {
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
            {threshold: 0.1}
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

    const openCarouselModal = () => {
        if (project.images && project.images.length > 0) {
            CarouselModalManager.open(project.images.map(imageName => require(`../ressources/images/projects/${imageName}`)));
        }
    };

    return (
        <div ref={cardRef} className="project-card mb-16">
            <div className="md:flex">
                {/* Title and image section */}
                <div className="md:w-2/5 p-6 flex justify-center items-center">
                    <div className="group">
                        {image.toLowerCase().endsWith('.mp4') ? (
                            <video
                                src={image}
                                className="rounded-xl object-cover w-full h-auto shadow-xl transform group-hover:rotate-1 transition duration-500"
                                autoPlay
                                loop
                                muted
                                onClick={openCarouselModal} // Open carousel modal on click
                            />
                        ) : (
                            <img
                                src={image}
                                alt={project.name}
                                className="rounded-xl object-cover w-full h-auto shadow-xl transform group-hover:rotate-1 transition duration-500"
                                onClick={openCarouselModal} // Open carousel modal on click
                            />
                        )
                        }

                    </div>
                </div>
                <div className="md:w-3/5 p-8">
                    <h2 className="text-3xl font-bold text-gray-800 font-display mb-4">{project.name}</h2>

                    {/* Short description */}
                    <p className="italic text-gray-500 mb-6"
                       dangerouslySetInnerHTML={{__html: project.short_desc}}
                    />

                    {/* Full description */}
                    <p className="text-gray-700 mb-6"
                       dangerouslySetInnerHTML={{__html: project.desc}}
                    />

                    {/* Links section */}
                    <div className="flex flex-wrap">
                        {project.links && project.links.length > 0 ?
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

                    {/* Tags section */}
                    <div className="flex flex-wrap">
                        {project.tags && project.tags.length > 0 ?
                            project.tags.map((tag, index) => (
                                <span key={index} className="tag">
                                    {tag}
                                </span>
                            ))
                            : null
                        }
                    </div>

                    {/* Carousel modal */}
                    {project.images && project.images.length > 0 ? (
                        <button
                            className="open-carousel-modal-button link"
                            onClick={openCarouselModal}
                        >
                            Voir toutes les images
                        </button>
                    ) : null}

                </div>
            </div>
        </div>
    );
}
