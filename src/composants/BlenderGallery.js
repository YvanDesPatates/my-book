import React, {useState, useEffect} from 'react';
import '../ressources/css/blenderGallery.css';
import {CarouselModalManager} from '../App';
import R3FModelViewer from './R3FModelViewer';
import BlenderAssetsImporter, { useBlenderAssets } from './BlenderAssets';

export default function BlenderGallery() {
    return (
        <BlenderAssetsImporter>
            <BlenderGalleryInner />
        </BlenderAssetsImporter>
    );
}

function BlenderGalleryInner() {
    const { media } = useBlenderAssets();

    if (!media || media.length === 0) {
        return (
            <div className="blender-gallery-empty container mx-auto px-4 max-w-6xl text-center">
                <R3FModelViewer />
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
        <div className="blender-gallery container mx-auto px-4 pb-12 max-w-6xl">
            <R3FModelViewer />
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
