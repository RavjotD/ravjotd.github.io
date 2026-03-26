"use client";
import React, { Suspense, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const ParticleField = () => {
  const meshRef = useRef();
  const count = 600;

  const [positions, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
      sz[i] = Math.random() * 2 + 0.5;
    }
    return [pos, sz];
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    const posArray = meshRef.current.geometry.attributes.position.array;
    for (let i = 0; i < count; i++) {
      posArray[i * 3 + 1] += Math.sin(time * 0.3 + i * 0.1) * 0.001;
      posArray[i * 3] += Math.cos(time * 0.2 + i * 0.05) * 0.0008;
    }
    meshRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#7dd3fc"
        transparent
        opacity={0.3}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
};

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const nameReveal = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-charcoal via-zinc-950 to-charcoal">
      {/* Subtle radial glow behind name */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-accent/[0.03] blur-[120px]" />
      </div>

      {/* Three.js Particle Background */}
      <div className="absolute inset-0">
        <Suspense fallback={null}>
          <Canvas
            camera={{ position: [0, 0, 5], fov: 75 }}
            dpr={[1, 1.5]}
            style={{ background: "transparent" }}
          >
            <ParticleField />
          </Canvas>
        </Suspense>
      </div>

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
      >
        {/* Main name - massive serif */}
        <motion.h1
          variants={nameReveal}
          className="font-serif text-display-xl text-cream leading-none"
        >
          RAVJOT
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={item}
          className="font-sans text-sm md:text-base tracking-[0.3em] uppercase text-text-secondary mt-6"
        >
          Infrastructure & Systems Engineer
        </motion.p>

        {/* Typewriter */}
        <motion.div
          variants={item}
          className="font-sans text-lg md:text-xl text-text-muted mt-4 h-8 italic"
        >
          <TypeAnimation
            sequence={[
              "resolves complex technical issues",
              2000,
              "ships production-grade systems",
              2000,
              "builds reliable infrastructure",
              2000,
              "bridges teams and technology",
              2000,
            ]}
            repeat={Infinity}
            cursor={true}
            speed={40}
          />
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={item}
          className="flex gap-8 mt-12"
        >
          <Link
            href="https://github.com/RavjotD"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-text-muted hover:text-accent transition-colors duration-300 tracking-wider"
          >
            GH
          </Link>
          <Link
            href="https://www.linkedin.com/in/ravjot-duhra/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-text-muted hover:text-accent transition-colors duration-300 tracking-wider"
          >
            LI
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-text-muted">
          Scroll
        </span>
        <motion.div
          className="w-[1px] h-8 bg-text-muted"
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
};

export default Hero;
