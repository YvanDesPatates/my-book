import React, { useState } from 'react';
import '../ressources/css/carouselModal.css';

export default function CarouselModal({ images, isOpen, onClose }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    if (!isOpen) return null;

    return (
        <div className="carousel-modal-overlay" onClick={onClose}>
            <div className="carousel-container" onClick={(e) => e.stopPropagation()}>
                <div className="image-container">
                    <button className="carousel-close-button" onClick={onClose}>
                        &times;
                    </button>
                    <div className="click-zone left-zone" onClick={handlePrev}></div>
                    <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="carousel-image" />
                    <div className="click-zone right-zone" onClick={handleNext}></div>
                </div>
                <div className="carousel-points">
                    {images.map((_, index) => (
                        <span
                            key={index}
                            className={`carousel-point ${index === currentIndex ? 'active' : ''}`}
                        ></span>
                    ))}
                </div>
            </div>
        </div>
    );
}
