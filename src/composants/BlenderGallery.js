import React, {useState, useEffect} from 'react';
import '../ressources/css/blenderGallery.css';
import {CarouselModalManager} from '../App';

export default function BlenderGallery() {
    const [media, setMedia] = useState([]);

    useEffect(() => {
        // Try to use webpack's require.context to dynamically import all files in the blender folder
        try {
            const req = require.context('../ressources/images/blender', false, /.*\.(png|jpe?g|gif|mp4|mkv|webm)$/i);
            // sort keys alphabetically for deterministic order
            const keys = req.keys().sort();
            const loadedAll = keys.map(key => {
                const src = req(key);
                const match = key.match(/\.([0-9a-z]+)$/i);
                const ext = match ? match[1].toLowerCase() : '';
                const type = (ext === 'mp4' || ext === 'mkv' || ext === 'webm') ? 'video' : 'image';
                return {src, type, name: key.replace('./', '')};
            });

            // set first 4 immediately for instant loading
            const firstBatch = loadedAll.slice(0, 4);
            setMedia(firstBatch);

            // load remaining in background (use requestIdleCallback when available)
            const loadRemaining = () => {
                const rest = loadedAll.slice(4);
                if (rest.length) setMedia(prev => [...prev, ...rest]);
            };

            let idleId = null;
            if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
                idleId = window.requestIdleCallback(loadRemaining, {timeout: 2000});
            } else {
                // fallback to small timeout
                idleId = setTimeout(loadRemaining, 300);
            }

            // cleanup handler will cancel later
            return () => {
                if (typeof window !== 'undefined' && 'cancelIdleCallback' in window && idleId) {
                    window.cancelIdleCallback(idleId);
                } else if (idleId) {
                    clearTimeout(idleId);
                }
            };
        } catch (e) {
            // Fallback: if require.context is not available, log and keep media empty
            console.error('require.context not available or failed to load blender assets', e);
            setMedia([]);
        }
    }, []);

    if (!media || media.length === 0) {
        return (
            <div className="blender-gallery-empty container mx-auto px-4 py-12 max-w-6xl text-center">
                <p className="text-gray-500">Aucune image disponible pour le moment. Revenez bientôt !</p>
            </div>
        );
    }

    const openAt = (index) => {
        // When opening, build an array of src strings for CarouselModalManager
        const imagesForCarousel = media.map(m => m.src);
        CarouselModalManager.open(imagesForCarousel, index);
    };

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
        </div>
    );
}
