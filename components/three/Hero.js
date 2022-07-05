import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useControls } from 'leva'
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
  useTexture
} from "@react-three/drei";
import * as THREE from "three";
import { gsap, Expo } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { Physics, usePlane, useSphere } from "@react-three/cannon";
import { EffectComposer, SSAO, Bloom } from "@react-three/postprocessing";
import { LayerMaterial, Depth, Noise,  Fresnel } from "lamina";

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




const Model = ({ ...props }) => {
  const group = useRef()
  const ref = useRef()
  const { nodes, materials } = useGLTF('/cube.glb')
  const boxOne = useRef();
  const boxTwo = useRef();
  const boxThree = useRef();

  
  // const { gradient } = useControls({ gradient: { value: 0.7, min: 0, max: 1 } })
  useFrame((state) => (boxOne.current.rotation.y = Math.sin(state.clock.getElapsedTime() / 2) * Math.PI,
  boxTwo.current.rotation.y = Math.sin(state.clock.getElapsedTime() / 4) * Math.PI)
  )

  useEffect(() => {
    ScrollTrigger.create({
      trigger: ".wrap",

      scrub: 5,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
     
        
        // group.current.position.x = 5 * Math.PI * self.progress;
        // cup.current.rotation.z = -2 * Math.PI * self.progress;
        // cup.current.position.y = -17 * self.progress;
        // cup.current.position.y = -2 * self.progress;
      },
    });
  }, [])

  // useFrame(() => {
    
  //   boxOne.current.rotation.y += 0.03;
  //   boxTwo.current.rotation.y += 0.05;
  //   boxThree.current.rotation.y += 0.02;
  // });
  return (
    <group position={[3,-1,0]}  ref={group} {...props} dispose={null}   rotation-x={Math.PI * 0.15} rotation-y={Math.PI * 0}>
      <mesh ref={boxOne} geometry={nodes.Cube.geometry} material={nodes.Cube.material} position={[0, 0.37, 0]} > 
      <LayerMaterial roughness={0} metalness={0} ref={ref} toneMapped={true}>
        <Depth colorA="#ff0080" colorB="black" alpha={1} mode="normal" near={0.5 * 0.7} far={0.5} origin={[0, 0, 0]} />
        <Depth colorA="blue" colorB="#f7b955" alpha={1} mode="add" near={2 * 0.7} far={2} origin={[0, 1, 1]} />
        <Depth colorA="green" colorB="#f7b955" alpha={1} mode="add" near={3 * 0.7} far={3} origin={[0, 1, -1]} />
        <Depth colorA="white" colorB="red" alpha={1} mode="overlay" near={1.5 * 0.7} far={1.5} origin={[1, -1, -1]} />
        <Fresnel mode="add" color="white" intensity={0.5} power={1.5} bias={0.05} />
      </LayerMaterial>
      </mesh>
      <mesh ref={boxTwo} geometry={nodes.Cube002.geometry} material={nodes.Cube002.material} position={[0, -0.48, 0]} >  <LayerMaterial roughness={0} metalness={0} ref={ref} toneMapped={true}>
        <Depth colorA="#ff0080" colorB="black" alpha={1} mode="normal" near={0.5 * 0.7} far={0.5} origin={[0, 0, 0]} />
        <Depth colorA="blue" colorB="#f7b955" alpha={1} mode="add" near={2 * 0.7} far={2} origin={[0, 1, 1]} />
        <Depth colorA="green" colorB="#f7b955" alpha={1} mode="add" near={3 * 0.7} far={3} origin={[0, 1, -1]} />
        <Depth colorA="white" colorB="red" alpha={1} mode="overlay" near={1.5 * 0.7} far={1.5} origin={[1, -1, -1]} />
        <Fresnel mode="add" color="white" intensity={0.5} power={1.5} bias={0.05} />
      </LayerMaterial></mesh>
      <mesh ref={boxThree} geometry={nodes.Cube003.geometry} material={nodes.Cube003.material} position={[0, -1.34, 0]} >  <LayerMaterial roughness={0} metalness={0} ref={ref} toneMapped={true}>
        <Depth colorA="#ff0080" colorB="black" alpha={1} mode="normal" near={0.5 * 0.7} far={0.5} origin={[0, 0, 0]} />
        <Depth colorA="blue" colorB="#f7b955" alpha={1} mode="add" near={2 * 0.7} far={2} origin={[0, 1, 1]} />
        <Depth colorA="green" colorB="#f7b955" alpha={1} mode="add" near={3 * 0.7} far={3} origin={[0, 1, -1]} />
        <Depth colorA="white" colorB="red" alpha={1} mode="overlay" near={1.5 * 0.7} far={1.5} origin={[1, -1, -1]} />
        <Fresnel mode="add" color="white" intensity={0.5} power={1.5} bias={0.05} />
      </LayerMaterial></mesh>
    </group>
  )
}

useGLTF.preload('/cube.glb')








export default function Hero() {
  return (
    <>
      <Canvas
        style={{
          width: "100vw",
          height: "100vh",
          position: "fixed",
          overflow: "hidden",
          
        }}
        id="main-canvas"
        shadows
        gl={{ stencil: false, antialias: false }}
        camera={{ position: [0, 0, 20], fov: 20, near: 17, far: 20 }}
      >
        <Lights />
        <Model/>

      </Canvas>
    </>
  );
}