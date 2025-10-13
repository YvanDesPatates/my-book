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

    // group into blocks of 5
    const blocks = [];
    for (let i = 0; i < media.length; i += 5) {
        blocks.push(media.slice(i, i + 5));
    }

    return (
        <div className="blender-gallery container mx-auto px-4 pb-12 max-w-6xl">
            <R3FModelViewer />
            <div className="space-y-6">
                {blocks.map((block, bIdx) => {
                    const largeOnRight = bIdx % 2 === 1;
                    /* for rendering order: if large on left, put large first, then smalls; if large on right, render smalls first then large */
                    const itemsToRender = largeOnRight ? [...block.slice(1), block[0]] : [block[0], ...block.slice(1)];
                    return (
                        <div key={bIdx} className={`blender-block ${largeOnRight ? 'large-right' : 'large-left'}`}>
                            {itemsToRender.map((m, idxWithin) => {
                                // compute the original global index
                                const originalIdx = bIdx * 5 + (largeOnRight ? (idxWithin < block.length - 1 ? idxWithin + 1 : 0) : idxWithin);
                                const isLarge = (!largeOnRight && idxWithin === 0) || (largeOnRight && idxWithin === block.length - 1);
                                let itemClass = isLarge ? 'item-large' : 'item-small';

                                // If this is a small item, compute its position slot (1..4)
                                if (!isLarge) {
                                    // determine small index within the smalls array
                                    const smalls = largeOnRight ? itemsToRender.slice(0, itemsToRender.length - 1) : itemsToRender.slice(1);
                                    const smallIdx = smalls.indexOf(m); // 0..3
                                    const posClass = `pos-${smallIdx + 1}`;
                                    itemClass += ` ${posClass}`;
                                }

                                return (
                                    <button key={originalIdx} className={`gallery-item ${itemClass}`} onClick={() => openAt(originalIdx)}>
                                        {m.type === 'image' ? (
                                            <img src={m.src} alt={`blender-${originalIdx}`} className="gallery-thumb rounded-lg object-cover" />
                                        ) : (
                                            <video src={m.src} className="gallery-thumb rounded-lg object-cover" muted loop playsInline autoPlay />
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
