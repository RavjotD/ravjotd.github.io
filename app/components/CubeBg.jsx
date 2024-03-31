'use client';
import React, {useRef,useState, useEffect} from 'react'
import { useFrame,useLoader,Canvas,} from "@react-three/fiber";
import {motion} from 'framer-motion';
import {TextureLoader} from 'three/src/loaders/TextureLoader';
import { OrbitControls } from "@react-three/drei";
import { TypeAnimation } from "react-type-animation";






export default function CubeBg (){

    return(       

                                    <Canvas >

                            <OrbitControls enableZoom={false} enablePan={false} /> 
                            <ambientLight intensity={6}/>
                            <directionalLight position={[1,1,1]} />
                            <Cube />
                            </Canvas> 
            
);




}


const Cube = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    
      useEffect(() => {
        const handleResize = () => {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    const mesh = useRef(null);

    useFrame( (state, delta) => {

        mesh.current.rotation.x += delta * 0.25;
        mesh.current.rotation.y += delta * 0.25;
        mesh.current.rotation.z += delta * 0.25;
    
    });
    

    const texture_1 = useLoader (TextureLoader, "././traveller.webp")
    const texture_2 = useLoader (TextureLoader, "././2.jpeg")
    const texture_3 = useLoader (TextureLoader, "././3.jpeg")
    const texture_4 = useLoader (TextureLoader, "././sports.avif")
    const texture_5 = useLoader (TextureLoader, "././5.jpeg")
    const texture_6 = useLoader (TextureLoader, "././6.jpeg")


    const boxSize = window.innerWidth < 1024 ? 3:3;
        return (

                <mesh ref={mesh}>

                        <boxGeometry args={[boxSize, boxSize, boxSize]} />

                            <meshStandardMaterial map={texture_1} attach="material-0"/>
                            <meshStandardMaterial map={texture_2} attach="material-1"/>
                            <meshStandardMaterial map={texture_3} attach="material-2"/>
                            <meshStandardMaterial map={texture_4} attach="material-3"/>
                            <meshStandardMaterial map={texture_5} attach="material-4"/>
                            <meshStandardMaterial map={texture_6} attach="material-5"/>

                </mesh>
        );
};

