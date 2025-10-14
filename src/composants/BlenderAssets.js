import React, { createContext, useContext, useEffect, useState } from 'react';

const BlenderAssetsContext = createContext({ media: [], models: [] });

export function BlenderAssetsImporter({ children }) {
    const [media, setMedia] = useState([]);
    const [models, setModels] = useState([]);

    useEffect(() => {
        // Load blender images/videos
        try {
            const req = require.context('../ressources/images/blender', false, /.*\.(png|jpe?g|gif|mp4|mkv|webm)$/i);
            const keys = req.keys().sort();
            // try to load optional thumbnails from blender_miniature folder
            let thumbMap = {};
            try {
                // accept image and small video thumbnails (mp4/m4v/webm)
                const tReq = require.context('../ressources/images/blender_miniature', false, /.*\.(png|jpe?g|gif|mp4|m4v|webm)$/i);
                tReq.keys().forEach(k => {
                    const n = k.replace('./', '');
                    const src = tReq(k);
                    // index by basename without extension so .mkv -> .mp4 thumbnails still match
                    const base = n.replace(/\.[^/.]+$/, '');
                    const match = n.match(/\.([0-9a-z]+)$/i);
                    const ext = match ? match[1].toLowerCase() : '';
                    const type = (ext === 'mp4' || ext === 'm4v' || ext === 'webm') ? 'video' : 'image';
                    thumbMap[base] = { src, name: n, ext, type };
                });
            } catch (thumbErr) {
                // no thumbnails available - fine, we'll fallback to full-size images
                thumbMap = {};
            }

            const loaded = keys.map(key => {
                const src = req(key);
                const name = key.replace('./', '');
                const match = name.match(/\.([0-9a-z]+)$/i);
                const ext = match ? match[1].toLowerCase() : '';
                const type = (ext === 'mp4' || ext === 'mkv' || ext === 'webm') ? 'video' : 'image';
                const base = name.replace(/\.[^/.]+$/, '');
                const thumbEntry = thumbMap[base];
                const thumbnail = thumbEntry ? thumbEntry.src : src;
                const thumbnailType = thumbEntry ? thumbEntry.type : (type === 'image' ? 'image' : 'video');
                return { src, name, ext, type, thumbnail, thumbnailType };
            });
            setMedia(loaded);
        } catch (e) {
            console.warn('BlenderAssets: failed to load blender images', e);
            setMedia([]);
        }

        // Load FBX models
        try {
            const req2 = require.context('../ressources/images/fbx_models', false, /.*\.(fbx)$/i);
            const keys2 = req2.keys().sort();
            const loaded2 = keys2.map(key => {
                const src = req2(key);
                const name = key.replace('./', '');
                return { src, name, ext: 'fbx', type: 'model' };
            });
            setModels(loaded2);
        } catch (e) {
            console.warn('BlenderAssets: failed to load fbx models', e);
            setModels([]);
        }
    }, []);

    return (
        <BlenderAssetsContext.Provider value={{ media, models }}>
            {children}
        </BlenderAssetsContext.Provider>
    );
}

export function useBlenderAssets() {
    return useContext(BlenderAssetsContext);
}

export default BlenderAssetsImporter;
