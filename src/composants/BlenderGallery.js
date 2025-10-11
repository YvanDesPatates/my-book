import React, {useState, useEffect} from 'react';
import '../ressources/css/blenderGallery.css';

export default function BlenderGallery() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    // Hard-coded list of blender images (require at build-time)
    const images = [
        require('../ressources/images/blender/14_hole.png'),
        require('../ressources/images/blender/15_mirror.png'),
        require('../ressources/images/blender/15_mirror_anim.mkv'),
        require('../ressources/images/blender/16_moon.png'),
        require('../ressources/images/blender/17_grave.png'),
        require('../ressources/images/blender/18_corn.png'),
        require('../ressources/images/blender/19_goat.png'),
        require('../ressources/images/blender/20_candle.png'),
        require('../ressources/images/blender/21_cabin.png'),
        require('../ressources/images/blender/22_frog.png'),
        require('../ressources/images/blender/23_sword.png'),
        require('../ressources/images/blender/25_map.png'),
        require('../ressources/images/blender/26_gragouille.png'),
        require('../ressources/images/blender/27_cat.png'),
        require('../ressources/images/blender/28_mushroom.png'),
        require('../ressources/images/blender/29_death.png'),
        require('../ressources/images/blender/30_devil.png'),
        require('../ressources/images/blender/31_assemble.png'),
        require('../ressources/images/blender/snowman.png'),
    ];

    useEffect(() => {
        function onKey(e) {
            if (!isOpen) return;
            if (e.key === 'Escape') setIsOpen(false);
            if (e.key === 'ArrowRight') setCurrentIndex(i => Math.min(i + 1, images.length - 1));
            if (e.key === 'ArrowLeft') setCurrentIndex(i => Math.max(i - 1, 0));
        }
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [isOpen, images.length]);

    if (!images || images.length === 0) {
        return (
            <div className="blender-gallery-empty container mx-auto px-4 py-12 max-w-6xl text-center">
                <p className="text-gray-500">Aucune image disponible pour le moment. Revenez bientôt !</p>
            </div>
        );
    }

    const openAt = (index) => {
        setCurrentIndex(index);
        setIsOpen(true);
    };

    const prev = () => setCurrentIndex(i => (i <= 0 ? i : i - 1));
    const next = () => setCurrentIndex(i => (i >= images.length - 1 ? i : i + 1));

    return (
        <div className="blender-gallery container mx-auto px-4 py-12 max-w-6xl">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {images.map((img, idx) => (
                    <button key={idx} className="gallery-item" onClick={() => openAt(idx)}>
                        <img src={img} alt={`blender-${idx}`} className="gallery-thumb rounded-lg object-cover" />
                    </button>
                ))}
            </div>

            {isOpen && (
                <div className="blender-lightbox" onClick={() => setIsOpen(false)}>
                    <div className="blender-lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <button className="lightbox-close" onClick={() => setIsOpen(false)}>×</button>
                        <button className="lightbox-nav left" onClick={prev} disabled={currentIndex === 0}>{'<'}</button>
                        <img src={images[currentIndex]} alt={`blender-large-${currentIndex}`} className="lightbox-image" />
                        <button className="lightbox-nav right" onClick={next} disabled={currentIndex === images.length - 1}>{'>'}</button>
                        <div className="lightbox-caption">{currentIndex + 1} / {images.length}</div>
                    </div>
                </div>
            )}
        </div>
    );
}
