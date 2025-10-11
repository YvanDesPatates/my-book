import React, {useState, useEffect} from 'react';
import '../ressources/css/blenderGallery.css';

export default function BlenderGallery() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [media, setMedia] = useState([]);

    useEffect(() => {
        // Try to use webpack's require.context to dynamically import all files in the blender folder
        try {
            const req = require.context('../ressources/images/blender', false, /.*\.(png|jpe?g|gif|mp4|mkv|webm)$/i);
            // sort keys alphabetically for deterministic order
            const keys = req.keys().sort();
            const loaded = keys.map(key => {
                const src = req(key);
                const match = key.match(/\.([0-9a-z]+)$/i);
                const ext = match ? match[1].toLowerCase() : '';
                const type = (ext === 'mp4' || ext === 'mkv' || ext === 'webm') ? 'video' : 'image';
                return {src, type, name: key.replace('./', '')};
            });
            setMedia(loaded);
        } catch (e) {
            // Fallback: if require.context is not available, log and keep media empty
            console.error('require.context not available or failed to load blender assets', e);
            setMedia([]);
        }
    }, []);

    useEffect(() => {
        function onKey(e) {
            if (!isOpen) return;
            if (e.key === 'Escape') setIsOpen(false);
            if (e.key === 'ArrowRight') setCurrentIndex(i => Math.min(i + 1, media.length - 1));
            if (e.key === 'ArrowLeft') setCurrentIndex(i => Math.max(i - 1, 0));
        }
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [isOpen, media.length]);

    if (!media || media.length === 0) {
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
    const next = () => setCurrentIndex(i => (i >= media.length - 1 ? i : i + 1));

    return (
        <div className="blender-gallery container mx-auto px-4 py-12 max-w-6xl">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {media.map((m, idx) => (
                    <button key={idx} className="gallery-item" onClick={() => openAt(idx)}>
                        {m.type === 'image' ? (
                            <img src={m.src} alt={`blender-${idx}`} className="gallery-thumb rounded-lg object-cover" />
                        ) : (
                            <video src={m.src} className="gallery-thumb rounded-lg object-cover" muted loop playsInline autoPlay />
                        )}
                    </button>
                ))}
            </div>

            {isOpen && (
                <div className="blender-lightbox" onClick={() => setIsOpen(false)}>
                    <div className="blender-lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <button className="lightbox-close" onClick={() => setIsOpen(false)}>×</button>
                        <button className="lightbox-nav left" onClick={prev} disabled={currentIndex === 0}>{'<'}</button>
                        {media[currentIndex].type === 'image' ? (
                            <img src={media[currentIndex].src} alt={`blender-large-${currentIndex}`} className="lightbox-image" />
                        ) : (
                            <video src={media[currentIndex].src} className="lightbox-image" controls autoPlay />
                        )}
                        <button className="lightbox-nav right" onClick={next} disabled={currentIndex === media.length - 1}>{'>'}</button>
                        <div className="lightbox-caption">{currentIndex + 1} / {media.length}</div>
                    </div>
                </div>
            )}
        </div>
    );
}
