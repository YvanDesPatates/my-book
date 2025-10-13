import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Html, useProgress } from '@react-three/drei';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import * as THREE from 'three';
import modelFile from '../ressources/images/fbx_models/27_cat.fbx';
import { useBlenderAssets } from './BlenderAssets';

function Loader() {
    const { progress } = useProgress();
    return <Html center>{Math.round(progress)} %</Html>;
}

// Utility to dispose of a material and its textures - Cache optimization
function disposeMaterial(material) {
    if (!material) return;
    if (Array.isArray(material)) {
        material.forEach(mat => disposeMaterial(mat));
        return;
    }
    if (material.map) {
        try { material.map.dispose(); } catch (e) {}
    }
    if (material.lightMap) { try { material.lightMap.dispose(); } catch (e) {} }
    if (material.bumpMap) { try { material.bumpMap.dispose(); } catch (e) {} }
    if (material.normalMap) { try { material.normalMap.dispose(); } catch (e) {} }
    if (material.specularMap) { try { material.specularMap.dispose(); } catch (e) {} }
    if (material.envMap) { try { material.envMap.dispose(); } catch (e) {} }
    try { material.dispose(); } catch (e) {}
}

// Cache optimization
function disposeObject(obj) {
    if (!obj) return;
    obj.traverse((child) => {
        if (child.isMesh) {
            if (child.geometry) {
                try { child.geometry.dispose(); } catch (e) {}
            }
            if (child.material) {
                disposeMaterial(child.material);
            }
        }
    });
}

function Model({ url }) {
    const ref = useRef();
    const loaded = useLoader(FBXLoader, url);
    const [instance, setInstance] = useState(null);

    useEffect(() => {
        if (!loaded) return;
        // Clone the loaded object so we can dispose the clone without affecting the cache
        let cloned;
        try {
            cloned = SkeletonUtils.clone(loaded);
        } catch (e) {
            // Fallback to shallow clone if SkeletonUtils fails
            cloned = loaded.clone(true);
        }

        // compute bounding box and normalize scale/center on the clone
        try {
            const box = new THREE.Box3().setFromObject(cloned);
            const size = box.getSize(new THREE.Vector3());
            const maxDim = Math.max(size.x, size.y, size.z);
            const scale = maxDim > 0 ? 1.2 / maxDim : 1;
            cloned.scale.setScalar(scale);
            const box2 = new THREE.Box3().setFromObject(cloned);
            const center = box2.getCenter(new THREE.Vector3());
            cloned.position.x -= center.x;
            cloned.position.y -= center.y;
            cloned.position.z -= center.z;
        } catch (e) {
            console.warn('Model: bounding box/normalize failed', e);
        }

        setInstance(cloned);

        return () => {
            // dispose the clone and its resources to free memory
            if (cloned) {
                try {
                    disposeObject(cloned);
                } catch (e) {
                    console.warn('Model: disposeObject failed', e);
                }
            }
            setInstance(null);
        };
    }, [loaded, url]);

    return instance ? <primitive ref={ref} object={instance} /> : null;
}

export default function R3FModelViewer({ modelUrl = modelFile, height = 360 }) {
    const { models } = useBlenderAssets();
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (models && models.length > 0) {
            const match = models.findIndex(m => m.src === modelUrl || m.name === modelUrl);
            if (match >= 0) setIndex(match);
        }
    }, [models, modelUrl]);

    const current = models && models.length > 0 ? models[index] : null;

    const prev = () => setIndex(i => Math.max(0, i - 1));
    const next = () => setIndex(i => Math.min((models || []).length - 1, i + 1));

    return (
        <div className="r3f-model-viewer container mx-auto px-4" style={{ marginBottom: 20 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                <div>
                    {models.length > 0 ? (
                        <div style={{ fontSize: 14, color: '#666' }}>{models[index].name} ({index + 1}/{models.length})</div>
                    ) : (
                        <div style={{ fontSize: 14, color: '#666' }}>Aucun modèle 3D trouvé</div>
                    )}
                </div>
                <div>
                    <button onClick={prev} style={{ marginRight: 8 }} disabled={index <= 0}>Prev</button>
                    <button onClick={next} disabled={index >= models.length - 1}>Next</button>
                </div>
            </div>

            <Canvas style={{ width: '100%', height }} camera={{ position: [0, 1.2, 3], fov: 45 }}>
                <ambientLight intensity={0.6} />
                <directionalLight position={[5, 10, 7.5]} intensity={0.8} />
                <hemisphereLight skyColor={0xffffff} groundColor={0x444444} intensity={0.6} />
                <Suspense fallback={<Loader />}>
                    {current ? <Model url={current.src} /> : null}
                </Suspense>
                <OrbitControls enableZoom={true} enablePan={false} rotateSpeed={0.8} />
            </Canvas>
        </div>
    );
}
