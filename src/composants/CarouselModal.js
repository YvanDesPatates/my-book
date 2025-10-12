import React, {useState, useRef, useEffect} from 'react';
import '../ressources/css/carouselModal.css';

export default function CarouselModal({ images, isOpen, onClose, startIndex = 0 }) {

    const [currentIndex, setCurrentIndex] = useState(startIndex);
    const [slideDirection, setSlideDirection] = useState(null); // 'left' ou 'right'
    const [isSliding, setIsSliding] = useState(false);
    const touchStartX = useRef(null);
    const touchEndX = useRef(null);

    // (keyboard handling moved below so it can call handleNext/handlePrev)

    useEffect(() => {
        setCurrentIndex(startIndex !== undefined ? startIndex : 0);
    }, [isOpen]);

    const handleNext = React.useCallback(() => {
        if (isSliding) return;
        setSlideDirection('right');
        setIsSliding(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            setIsSliding(false);
        }, 300);
    }, [isSliding, images.length]);

    const handlePrev = React.useCallback(() => {
        if (isSliding) return;
        setSlideDirection('left');
        setIsSliding(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
            setIsSliding(false);
        }, 300);
    }, [isSliding, images.length]);

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

    // Keyboard navigation: left/right to change slides, Escape to close
    useEffect(() => {
        if (!isOpen) return;
        const onKey = (e) => {
            if (e.key === 'Escape') {
                onClose();
            } else if (e.key === 'ArrowRight') {
                handleNext();
            } else if (e.key === 'ArrowLeft') {
                handlePrev();
            }
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [isOpen, handleNext, handlePrev, onClose]);

    // Aller à une image précise via les points
    const handlePointClick = (index) => {
        if (isSliding || index === currentIndex) return;
        setSlideDirection(index > currentIndex ? 'right' : 'left');
        setIsSliding(true);
        setTimeout(() => {
            setCurrentIndex(index);
            setIsSliding(false);
        }, 300);
    };

    if (!isOpen || !images.length) return null;

    const currentSrc = images[currentIndex];
    const lower = currentSrc ? currentSrc.toLowerCase() : '';
    const isCurrentVideo = lower.endsWith('.mp4') || lower.endsWith('.m4v') || lower.endsWith('.mkv') || lower.endsWith('.webm');

    return (
        <div className="carousel-modal-overlay" onClick={onClose}>
            <div className="carousel-container" onClick={(e) => e.stopPropagation()}>
                <div
                    className="image-container"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <button className="carousel-close-button" onClick={onClose} aria-label="Fermer la galerie">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M18 6L6 18" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M6 6L18 18" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M18 6L6 18" stroke="#000000" strokeWidth="0.6" strokeOpacity="0.25" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M6 6L18 18" stroke="#000000" strokeWidth="0.6" strokeOpacity="0.25" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    <div className="arrows">
                        <button className="carousel-arrow prev-arrow" onClick={handlePrev}>
                            &#8249;
                        </button>
                        <button className="carousel-arrow next-arrow" onClick={handleNext}>
                            &#8250;
                        </button>
                    </div>
                        {isCurrentVideo ? (
                            <video
                                src={currentSrc}
                                autoPlay
                                loop
                                className={
                                    `carousel-image` +
                                    (isSliding && slideDirection === 'right' ? ' slide-out-left' : '') +
                                    (isSliding && slideDirection === 'left' ? ' slide-out-right' : '') +
                                    (!isSliding && slideDirection === 'right' ? ' slide-in-right' : '') +
                                    (!isSliding && slideDirection === 'left' ? ' slide-in-left' : '')
                                }
                                onAnimationEnd={() => setSlideDirection(null)}
                                controls
                            />
                        ) : (
                            <img
                                src={currentSrc}
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
                        )}
                </div>
                <div className="carousel-points">
                    {images.map((_, index) => (
                        <span
                            key={index}
                            className={`carousel-point ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => handlePointClick(index)}
                            style={{ cursor: 'pointer' }}
                        ></span>
                    ))}
                </div>
            </div>
        </div>
    );
}
