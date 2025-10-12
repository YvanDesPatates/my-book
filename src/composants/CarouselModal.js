import React, {useState, useRef, useEffect} from 'react';
import '../ressources/css/carouselModal.css';

export default function CarouselModal({ images, isOpen, onClose, startIndex = 0 }) {

    const [currentIndex, setCurrentIndex] = useState(startIndex);
    const [slideDirection, setSlideDirection] = useState(null); // 'left' ou 'right'
    const [isSliding, setIsSliding] = useState(false);
    const touchStartX = useRef(null);
    const touchEndX = useRef(null);
    const preloadedRef = useRef({});

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

    // Preload previous and next media for smoother navigation
    useEffect(() => {
        if (!images || !images.length) return;

        const preloadAt = (index) => {
            if (preloadedRef.current[index]) return;
            const src = images[index];
            if (!src) return;
            const lower = String(src).toLowerCase();
            try {
                if (lower.endsWith('.mp4') || lower.endsWith('.m4v') || lower.endsWith('.mkv') || lower.endsWith('.webm')) {
                    const v = document.createElement('video');
                    v.preload = 'auto';
                    v.muted = true;
                    v.playsInline = true;
                    v.src = src;
                    // try to load metadata/autoplay buffer
                    if (typeof v.load === 'function') v.load();
                    preloadedRef.current[index] = v;
                } else {
                    const img = new Image();
                    img.src = src;
                    preloadedRef.current[index] = img;
                }
            } catch (e) {
                // ignore preload errors
                // console.warn('preload failed', e);
            }
        };

        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        const nextIndex = (currentIndex + 1) % images.length;
        preloadAt(prevIndex);
        preloadAt(nextIndex);

        // no per-effect cleanup; full cleanup occurs on unmount
        return; 
    }, [currentIndex, images]);

    // cleanup preloaded elements on unmount
    useEffect(() => {
        return () => {
            try {
                Object.keys(preloadedRef.current).forEach((k) => {
                    const el = preloadedRef.current[k];
                    if (!el) return;
                    try {
                        if (el.tagName === 'IMG') {
                            el.src = '';
                        } else if (el.tagName === 'VIDEO') {
                            el.pause && el.pause();
                            el.src = '';
                        }
                    } catch (e) {}
                });
            } catch (e) {}
            preloadedRef.current = {};
        };
    }, []);

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

    // Show numeric counter instead of dots when many images
    const [showNumeric, setShowNumeric] = useState(false);

    useEffect(() => {
        function updateMode() {
            const w = typeof window !== 'undefined' ? window.innerWidth : 1024;
            // mobile threshold (phone): width <= 768
            const isMobile = w <= 768;
            if ((isMobile && images.length > 10) || (!isMobile && images.length > 20)) {
                setShowNumeric(true);
            } else {
                setShowNumeric(false);
            }
        }
        updateMode();
        window.addEventListener('resize', updateMode);
        return () => window.removeEventListener('resize', updateMode);
    }, [images.length]);

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
                        <button className="carousel-arrow prev-arrow" onClick={handlePrev} aria-label="Image précédente">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M15 18L9 12L15 6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M15 18L9 12L15 6" stroke="#000000" strokeWidth="0.6" strokeOpacity="0.25" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                        <button className="carousel-arrow next-arrow" onClick={handleNext} aria-label="Image suivante">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M9 6L15 12L9 18" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M9 6L15 12L9 18" stroke="#000000" strokeWidth="0.6" strokeOpacity="0.25" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
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
                    {showNumeric ? (
                        <div className="carousel-counter">{currentIndex + 1} / {images.length}</div>
                    ) : (
                        images.map((_, index) => (
                            <span
                                key={index}
                                className={`carousel-point ${index === currentIndex ? 'active' : ''}`}
                                onClick={() => handlePointClick(index)}
                                style={{ cursor: 'pointer' }}
                            ></span>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
