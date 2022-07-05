import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";

import {
  CubeCamera,
  Environment,
  Html,
  MeshReflectorMaterial,
  PerspectiveCamera,
  useGLTF,
  useAnimations,
  Text,
  ScrollControls,
  Scroll,
  Image as ImageImpl,
  useScroll,
} from "@react-three/drei";
import * as THREE from "three";

import { Physics, usePlane, useSphere } from "@react-three/cannon";
import { EffectComposer, SSAO, Bloom } from "@react-three/postprocessing";
import { LayerMaterial, Depth, Noise } from "lamina";

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} />
      <directionalLight
        castShadow
        intensity={1}
        position={[50, 50, 25]}
        shadow-mapSize={[256, 256]}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
    </>
  );
};




function Image(props) {
    const ref = useRef();
    const group = useRef();
    const data = useScroll();
    
  
    return (
      <group ref={group}>
        <ImageImpl ref={ref} {...props} />
      </group>
    );
  }

function Page({ m = 0.4, urls, ...props }) {
    const { width } = useThree((state) => state.viewport);
    const w = width < 10 ? 1.5 / 3 : 1 / 3;
    return (
      <group {...props}>
        <Image
          position={[1, -2, 1]}
          scale={[width * w - m * -65, 22, 1]}
          url="/teatro.png"
          alt="hello"
        />
      </group>
    );
  }








export default function Project() {
  return (
    <>
      <Canvas
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
        }}
        id="main-canvas"
        camera={{ position: [0, 0, 20], fov: 50, near: 17,  }}
      >
        <Page />
      </Canvas>
    </>
  );
}