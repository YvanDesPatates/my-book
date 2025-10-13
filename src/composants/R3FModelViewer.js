import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Html, useProgress } from '@react-three/drei';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import * as THREE from 'three';
import modelFile from '../ressources/images/fbx_models/27_cat.fbx';

function Loader() {
    const { progress } = useProgress();
    return <Html center>{Math.round(progress)} %</Html>;
}

function Model({ url }) {
    const ref = useRef();
    const obj = useLoader(FBXLoader, url);

    useEffect(() => {
        if (!obj) return;
        // compute bounding box and normalize scale/center
        const box = new THREE.Box3().setFromObject(obj);
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = maxDim > 0 ? 1.2 / maxDim : 1;
        obj.scale.setScalar(scale);
        // recenter
        const box2 = new THREE.Box3().setFromObject(obj);
        const center = box2.getCenter(new THREE.Vector3());
        obj.position.x -= center.x;
        obj.position.y -= center.y;
        obj.position.z -= center.z;
    }, [obj]);

    return <primitive ref={ref} object={obj} />;
}

export default function R3FModelViewer({ modelUrl = modelFile, height = 360 }) {
    return (
        <div className="r3f-model-viewer container mx-auto px-4" style={{ marginBottom: 20 }}>
            <Canvas style={{ width: '100%', height }} camera={{ position: [0, 1.2, 3], fov: 45 }}>
                <ambientLight intensity={0.6} />
                <directionalLight position={[5, 10, 7.5]} intensity={0.8} />
                <hemisphereLight skyColor={0xffffff} groundColor={0x444444} intensity={0.6} />
                <Suspense fallback={<Loader />}>
                    <Model url={modelUrl} />
                </Suspense>
                <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.8} />
            </Canvas>
        </div>
    );
}
