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
            const loaded = keys.map(key => {
                const src = req(key);
                const name = key.replace('./', '');
                const match = name.match(/\.([0-9a-z]+)$/i);
                const ext = match ? match[1].toLowerCase() : '';
                const type = (ext === 'mp4' || ext === 'mkv' || ext === 'webm') ? 'video' : 'image';
                return { src, name, ext, type };
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
