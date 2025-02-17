'use client';
import React, {useRef, useState, useEffect} from 'react'
import { useFrame, useLoader, Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import {TextureLoader} from 'three/src/loaders/TextureLoader';

export default function CubeBg() {
    return (
        <Canvas shadows camera={{ position: [8,8,15], fov: 25}} className="w-full h-full">
            <OrbitControls 
                enableZoom={false} 
                enablePan={false}
                minPolarAngle={Math.PI / 4}
                maxPolarAngle={Math.PI / 1.5}
            />
            <ambientLight intensity={0.8}/>
            <directionalLight 
                position={[10,10,10]}
                intensity={1.8}
                castShadow
            />
            <Cube />
        </Canvas>
    );
}

const Cube = () => {
    const mesh = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    useFrame((state, delta) => {
        if (!isHovered) {
            mesh.current.rotation.x += delta * 0.2;
            mesh.current.rotation.y += delta * 0.2;
        }
    });

    // Tech-related textures
    const reactTexture = useLoader(TextureLoader, "/react-2.svg");
    const nodeTexture = useLoader(TextureLoader, "/nodejs.png");
    const pythonTexture = useLoader(TextureLoader, "/python.png");
    const nextTexture = useLoader(TextureLoader, "/next-js.svg");
    const javascriptTexture = useLoader(TextureLoader, "/logo-javascript.svg");
    const tailwindTexture = useLoader(TextureLoader, "/tailwind-css-2.svg");

    return (
        <mesh 
            ref={mesh}
            scale={4}
            onPointerOver={() => setIsHovered(true)}
            onPointerOut={() => setIsHovered(false)}
        >
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial map={reactTexture} attach="material-0" />
            <meshStandardMaterial map={nodeTexture} attach="material-1" />
            <meshStandardMaterial map={pythonTexture} attach="material-2" />
            <meshStandardMaterial map={nextTexture} attach="material-3" />
            <meshStandardMaterial map={javascriptTexture} attach="material-4" />
            <meshStandardMaterial map={tailwindTexture} attach="material-5" />
        </mesh>
    );
}