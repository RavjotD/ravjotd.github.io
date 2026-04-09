"use client";
import React, { Suspense, useRef, useMemo } from "react";
import { motion } from "framer-motion";
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
        color="#38bdf8"
        transparent
        opacity={0.25}
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
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className="relative min-h-screen w-full flex items-center bg-charcoal">
      {/* Radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[700px] rounded-full bg-accent/[0.04] blur-[150px]" />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal-light/50 to-charcoal" />

      {/* Particle field */}
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
        className="relative w-full max-w-[1400px] mx-auto px-6 md:px-12 py-32"
      >
        <motion.p
          variants={item}
          className="font-mono text-xs tracking-[0.3em] uppercase text-accent mb-8"
        >
          Infrastructure & Systems Engineer
        </motion.p>

        <motion.h1
          variants={item}
          className="font-serif text-display-xl text-cream leading-[0.9] mb-8"
        >
          Ravjot
          <br />
          <span className="text-text-muted">Duhra</span>
        </motion.h1>

        <motion.div variants={item} className="max-w-xl mt-12">
          <p className="font-sans text-lg md:text-xl text-text-secondary leading-relaxed">
            Engineering the systems that keep businesses running — from cloud
            infrastructure and API integrations to the full-stack applications
            that tie it all together.
          </p>
        </motion.div>

        <motion.div
          variants={item}
          className="flex items-center justify-between mt-20 pt-8 border-t border-rule"
        >
          <div className="flex gap-4">
            <Link
              href="https://github.com/RavjotD"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs tracking-wider text-text-muted hover:text-accent hover:border-accent border border-rule px-4 py-2 transition-all duration-300 uppercase"
            >
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/ravjot-duhra/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs tracking-wider text-text-muted hover:text-accent hover:border-accent border border-rule px-4 py-2 transition-all duration-300 uppercase"
            >
              LinkedIn
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-text-muted">
              Scroll
            </span>
            <motion.div
              className="w-[1px] h-8 bg-text-muted"
              animate={{ scaleY: [0, 1, 0], originY: 0 }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
