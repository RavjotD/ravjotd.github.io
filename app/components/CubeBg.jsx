'use client';
import React, {useRef,useState, useEffect} from 'react'
import { useFrame,useLoader,Canvas,} from "@react-three/fiber";
import {motion} from 'framer-motion';
import {TextureLoader} from 'three/src/loaders/TextureLoader';
import { OrbitControls, Html } from "@react-three/drei";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";



// Cube component to display on home page, using canavas and three.js features.

export default function CubeBg (){

    return(       

                                    <Canvas shadows camera={{ position: [5,5,10], fov: 25}}>

                            <OrbitControls enableZoom={false} enablePan={false} /> 
                            <ambientLight intensity={0.5}/>
                            <directionalLight position={[10,10,10]}
                            intensity={1.5}
                            castShadow
                            shadow-mapSize-width={1024} 
                            shadow-mapSize-height={1024} 
                            shadow-camera-near={0.5} 
                            shadow-camera-far={50} 
                            shadow-camera-left={-10} 
                            shadow-camera-right={10} 
                            shadow-camera-top={10}
                            shadow-camera-bottom={-10}
                            
                            />
                           
                            <Cube />
                          
                            </Canvas> 
            
);


}


const Cube = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      const [hoveredFace, setHoveredFace] = useState(null);
    
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

    // Rotation features of cube.
    useFrame( (state, delta) => {

        mesh.current.rotation.x += delta * 0.25;
        mesh.current.rotation.y += delta * 0.25;
        mesh.current.rotation.z += delta * 0.25;
    
    });
    
// Images for each side of cube display
    const texture_1 = useLoader (TextureLoader, "././traveller.webp")
    const texture_2 = useLoader (TextureLoader, "././2.jpeg")
    const texture_3 = useLoader (TextureLoader, "././3.jpeg")
    const texture_4 = useLoader (TextureLoader, "././sports.avif")
    const texture_5 = useLoader (TextureLoader, "././5.jpeg")
    const texture_6 = useLoader (TextureLoader, "././6.jpeg")


    const boxSize = window.innerWidth < 2560 ? 3: 3.2 ;

    const handlePointerOver = (faceIndex) => {
      setHoveredFace(faceIndex);
    }

    const handlePointerOut = () => {
      setHoveredFace(null);
    }
// In progress to display hovering effects on cube faces
    const hoverContent = {
      0: {text: 'Profile', link: '/home'},
      1: {text: 'Contact', link: '/contact'},
      2: {text: 'Profile', link: '/home'},
      3: {text: 'Profile', link: '/home'},
      4: {text: 'Profile', link: '/home'},
      5: {text: 'Profile', link: '/home'},

    };

    const getFaceColor = (index) => {
      if (hoveredFace == index)
        switch (index){
          case 0: return'red';
          case 1: return'red';
          case 2: return'red';
          case 3: return'red';
          case 4: return'red';
          case 5: return'red';
        }
    }

         return (

                
                <mesh ref={mesh} >

                        <boxGeometry args={[boxSize, boxSize, boxSize]} />

                            <meshStandardMaterial 
                            map={hoveredFace == 0 ? null: texture_1}
                            color={getFaceColor(0)}
                            attach="material-0"
                            onPointerOver={() => handlePointerOver(0)}
                            onPointerOut = {handlePointerOut}  />
                            <meshStandardMaterial 
                            map={hoveredFace == 1 ? null: texture_2}
                            color={getFaceColor(1)}
                             attach="material-1"
                             onPointerOver={() => handlePointerOver(0)}
                             onPointerOut = {handlePointerOut}  />
                            <meshStandardMaterial 
                            map={hoveredFace == 2 ? null: texture_3} 
                            color={getFaceColor(2)}
                            attach="material-2"
                            onPointerOver={() => handlePointerOver(0)}
                            onPointerOut = {handlePointerOut}/>
                            <meshStandardMaterial 
                            map={hoveredFace == 3 ? null:texture_4}
                            color={getFaceColor(3)} 
                            attach="material-3"
                            onPointerOver={() => handlePointerOver(0)}
                            onPointerOut = {handlePointerOut}/>
                            <meshStandardMaterial 
                            map={hoveredFace == 4 ? null:texture_5}
                            color={getFaceColor(4)} 
                            attach="material-4"
                            onPointerOver={() => handlePointerOver(0)}
                            onPointerOut = {handlePointerOut}/>
                            <meshStandardMaterial 
                            map={hoveredFace == 5 ? null:texture_6} 
                            color={getFaceColor(5)}
                            attach="material-5"
                            onPointerOver={() => handlePointerOver(0)}
                            onPointerOut = {handlePointerOut}/>

                </mesh>

          
        );
};


