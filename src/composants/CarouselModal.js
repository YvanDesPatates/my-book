import React, { useState, useRef } from 'react';
import '../ressources/css/carouselModal.css';

export default function CarouselModal({ images, isOpen, onClose }) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideDirection, setSlideDirection] = useState(null); // 'left' ou 'right'
    const [isSliding, setIsSliding] = useState(false);
    const touchStartX = useRef(null);
    const touchEndX = useRef(null);

    const handleNext = () => {
        if (isSliding) return;
        setSlideDirection('right');
        setIsSliding(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            setIsSliding(false);
        }, 300);
    };

    const handlePrev = () => {
        if (isSliding) return;
        setSlideDirection('left');
        setIsSliding(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
            setIsSliding(false);
        }, 300);
    };

    // Gestion du swipe
    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (touchStartX.current !== null && touchEndX.current !== null) {
            const delta = touchStartX.current - touchEndX.current;
            if (Math.abs(delta) > 50) {
                if (delta > 0) {
                    handleNext();
                } else {
                    handlePrev();
                }
            }
        }
        touchStartX.current = null;
        touchEndX.current = null;
    };

    if (!isOpen || !images.length) return null;

    return (
        <div className="carousel-modal-overlay" onClick={onClose}>
            <div className="carousel-container" onClick={(e) => e.stopPropagation()}>
                <div
                    className="image-container"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <button className="carousel-close-button" onClick={onClose}>
                        &times;
                    </button>
                    <div className="arrows">
                        <button className="carousel-arrow prev-arrow" onClick={handlePrev}>
                            &#8249;
                        </button>
                        <button className="carousel-arrow next-arrow" onClick={handleNext}>
                            &#8250;
                        </button>
                    </div>
                    <img
                        src={images[currentIndex]}
                        alt={`Slide ${currentIndex + 1}`}
                        className={
                            `carousel-image` +
                            (isSliding && slideDirection === 'right' ? ' slide-out-left' : '') +
                            (isSliding && slideDirection === 'left' ? ' slide-out-right' : '') +
                            (!isSliding && slideDirection === 'right' ? ' slide-in-right' : '') +
                            (!isSliding && slideDirection === 'left' ? ' slide-in-left' : '')
                        }
                        onAnimationEnd={() => setSlideDirection(null)}
                    />
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
