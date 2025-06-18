import React, {useState} from 'react';
import '../ressources/css/carouselModal.css';

export default function CarouselModal({images}) {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <>
            <button className="open-modal-button" onClick={openModal}>
                Open Carousel
            </button>
            {isOpen && (
                <div className="carousel-modal-overlay" onClick={closeModal}>
                    <div className="carousel-container" onClick={(e) => e.stopPropagation()}>
                        <div className="image-container">
                            <button className="carousel-close-button" onClick={closeModal}>
                                &times;
                            </button>
                            <button className="carousel-arrow prev-arrow" onClick={handlePrev}>
                                &#8249;
                            </button>
                            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`}
                                 className="carousel-image"/>
                            <button className="carousel-arrow next-arrow" onClick={handleNext}>
                                &#8250;
                            </button>
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
            )}
        </>
    );
}
