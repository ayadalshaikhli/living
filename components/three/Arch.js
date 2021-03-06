import { Canvas, useLoader, useFrame, useSpring } from "@react-three/fiber";
import React, { Suspense, useRef, useState, useEffect } from "react";
import {
  CubeCamera,
  Environment,
  Html,
  MeshReflectorMaterial,
  PerspectiveCamera,
  useGLTF,
  useAnimations,
} from "@react-three/drei";
import { Section } from "./section";
import * as THREE from "three";
import { proxy, useSnapshot } from "valtio";
import { gsap, Expo } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const color = new THREE.Color();
const tl = gsap.timeline({
  defaults: { ease: "power3.out" },
});

const Lights = () => {
  return (
    <>
      {/* Ambient Light illuminates lights for all objects */}
      <ambientLight intensity={0.1} />
      {/* Diretion light */}
      <directionalLight position={[10, 10, 5]} intensity={0.5} />
      <directionalLight position={[-100, 10, 5]} intensity={0.5} />

      <directionalLight
        castShadow
        position={[15, 10, 10]}
        intensity={0.2}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={10}
        shadow-camera-bottom={-20}
      />
      {/* Spotlight Large overhead light */}
      <spotLight intensity={0.5} position={[1000, 0, 0]} />
    </>
  );
};

function Green() {
  const { nodes, materials } = useGLTF("/bu3312ationnn.glb");
  const cup = useRef();
  const moon = useRef();
  const mark = useRef();
  const cam = useRef();

  // useFrame((state, delta) => {
  //   let t = -state.clock.getElapsedTime() * 0.128;
  //   roughness.offset.set(0, t % 1);
  //   normal.offset.set(0, t % 1);
  // });
  // const [hovered, set] = useState();

  // for demonstrating first eye is same as second eye
  // Output: false, true=
  // useEffect(() => {
  //   if (hovered)
  //     moon.current.getObjectByName(hovered).material.color.set("white");
  //   document.body.style.cursor = hovered ? "pointer" : "auto";
  // }, [hovered]);
  // useFrame((state) => {
  //   moon.current.children[0].children.forEach((child, index) => {
  //     child.material.color.lerp(
  //       color
  //         .set(hovered === child.name ? "gold" : "white")
  //         .convertSRGBToLinear(),
  //       hovered ? 0.1 : 0.05
  //     );
  //   });
  // });

  useEffect((state) => {
    // cup.current.rotation.y = 6.2;
    // cup.current.rotation.x = 5.63;
    // cup.current.rotation.y = 4.1;

    // gsap.from(cam.current.position, 4, {
    //   z: -23,
    //   y: -4,
    //   delay: 3,
    //   ease: Expo.easeOut,
    // });
    // gsap.from(cup.current.position, 60, {
    //   y: 1.412,
    //   ease: "none",
    // });
    // gsap.from(moon.current.rotation, 60, {
    //   y: -7.412,
    //   repeat: -1,
    //   ease: "none",
    // });
    // gsap.from(cam.current.position, 1, {
    //   z: -20.412,
    //   ease: Expo.easeInOut,
    // });
    // gsap.from(cup.current.rotation, 3, {
    //   y: 1,
    //   delay: 1,
    // });
    // gsap.from(cup.current.position, 3, {
    //   y: 5,
    // });
    // gsap.from(cam.current.position, 3, {
    //   y: 2.5,
    //   delay: 3,
    // });

    // tl.from(
    //   moon.current.rotation,
    //   3,
    //   {
    //     x: 3.1,

    //     ease: "none",
    //   },
    //   "-=2"
    // );
    // gsap.from(
    //   moon.current.rotation,
    //   50,
    //   {
    //     y: -7.76573,
    //     ease: "none",
    //     repeat: -1,
    //   },
    //   -3
    // );
    // tl.to(
    //   mark.current.rotation,
    //   1,
    //   {
    //     z: 6.9,
    //     ease: "none",
    //   },
    //   "-=1"
    // );
    // ScrollTrigger.create({
    //   trigger: ".product-list",
    //   start: "top 50%",
    //   end: "bottom 0%",

    //   onEnter: () => {
    //     gsap.to(".body", {
    //       duration: 1.0,
    //       backgroundColor: "#fff",
    //     });
    //   },

    //   onLeaveBack: () => {
    //     gsap.to(".body", {
    //       duration: 1.0,
    //       backgroundColor: "#000",
    //     });
    //   },
    // });

    ScrollTrigger.create({
      trigger: ".wrap",

      scrub: 5,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        // cup.current.rotation.x = -2 * Math.PI * self.progress;
        // cup.current.rotation.y = -1 * Math.PI * self.progress;
        // cam.current.position.x = -1 * Math.PI * self.progress;
        // cup.current.rotation.y = -2 * self.progress;
        cam.current.position.z = 120 * self.progress;
        cam.current.rotation.y = 10.22 * self.progress;

        // cam.current.position.y = -100.22 * self.progress;
        // cam.current.position.z = 25 * self.progress;

        // cup.current.rotation.z = -2 * Math.PI * self.progress;
        // cup.current.position.y = -17 * self.progress;
        // cup.current.position.y = -2 * self.progress;
      },
    });
  });
  // const [roughness, normal] = useLoader(TextureLoader, [
  //   "textures/terrain-roughness.jpg",
  //   "textures/silver.jpg",
  // ]);

  // useEffect(() => {
  //   [normal, roughness].forEach((t) => {
  //     t.wrapS = RepeatWrapping;
  //     t.wrapT = RepeatWrapping;
  //     t.repeat.set(5, 5);
  //     t.offset.set(0, 0);
  //   });

  //   normal.encoding = LinearEncoding;
  // }, [normal, roughness]);

  // useFrame((state, delta) => {
  //   let t = -state.clock.getElapsedTime() * 0.128;
  //   roughness.offset.set(0, t % 1);
  //   normal.offset.set(0, t % 1);
  // });
  ScrollTrigger.clearScrollMemory();
  return (
    <>
      <group
        ref={moon}
        rotation={[0, 0, 0]}
        scale={2}
        position={[0, 0, 0]}
        dispose={null}
      >
        {/* <primitive object={firstGltf.scene} position={[0, 185, 0]} /> */}
        <group
          position={[0, 0, 0]}
          ref={cup}
          // onPointerOver={(e) => (e.stopPropagation(), set(e.object.name))}
          // onPointerOut={(e) => (e.stopPropagation(), set(null))}
        >
          <group position={[-0.68, 3.63, 0.4]} rotation={[-0.03, 0.01, 0]}>
            <group position={[0, -1.19, 0]} rotation={[0, Math.PI / 9, 0]}>
              <mesh
                geometry={nodes.Circle002.geometry}
                material={materials.Metal}
              />
              <mesh
                geometry={nodes.Circle003.geometry}
                material={materials.cord}
              />
              <mesh
                geometry={nodes.paper001.geometry}
                material={materials.paper}
              />
              <mesh
                geometry={nodes.Sphere001.geometry}
                material={nodes.Sphere001.material}
              />
            </group>
          </group>
          <group position={[-0.45, 3.63, -0.41]} rotation={[0.03, 0, 0.01]}>
            <group position={[0.01, -1.8, -0.01]} rotation={[0.01, -0.34, 0]}>
              <mesh
                geometry={nodes.Circle.geometry}
                material={materials.Metal}
              />
              <mesh
                geometry={nodes.paper.geometry}
                material={materials.paper}
              />
              <mesh
                geometry={nodes.Sphere.geometry}
                material={nodes.Sphere.material}
              />
            </group>
            <mesh
              geometry={nodes.Circle001.geometry}
              material={materials.cord}
              position={[0.01, -1.8, -0.01]}
              rotation={[0.01, -0.17, 0]}
            />
          </group>
          <group position={[0.17, 3.63, 0.15]} rotation={[-0.01, 0, 0]}>
            <group
              position={[0, -1.5, -0.01]}
              rotation={[0.01, -0.34, 0]}
              scale={0.6}
            >
              <mesh
                geometry={nodes.Circle004.geometry}
                material={materials.Metal}
              />
              <mesh
                geometry={nodes.paper002.geometry}
                material={materials.ruh}
              />
              <mesh
                geometry={nodes.Sphere002.geometry}
                material={nodes.Sphere002.material}
              />
            </group>
            <mesh
              geometry={nodes.Circle005.geometry}
              material={materials.cord}
              position={[0, -1.5, -0.01]}
              rotation={[0.01, 0.01, 0]}
            />
          </group>
          <group position={[-0.51, 0.41, -0.1]} rotation={[0, 0.66, 0]}>
            <group position={[0, 0, 0.1]}></group>
            <group position={[0, 0.22, 0.05]}>
              <mesh
                geometry={nodes.Cube002_1.geometry}
                material={materials.fabric}
              />
              <mesh
                geometry={nodes.Cube002_2.geometry}
                material={materials.fabricseam}
              />
              <mesh
                geometry={nodes.Cube009.geometry}
                material={materials.logo}
              />
            </group>
            <mesh
              geometry={nodes.Cube002.geometry}
              material={materials.Metal}
              position={[0, 0, 0.1]}
            />
            <mesh
              geometry={nodes.Cube003.geometry}
              material={materials.Metal}
              position={[0, 0, 0.1]}
            />
            <mesh
              geometry={nodes.Cube005.geometry}
              material={materials.blk}
              position={[0, 0, 0.1]}
            />
            <mesh
              geometry={nodes.Cube011.geometry}
              material={materials.Metal}
              position={[0, 0, 0.1]}
            />
          </group>
          <mesh geometry={nodes.Plane.geometry} material={materials.floor} />
          <mesh geometry={nodes.Plane001.geometry} material={materials.wall} />
          <mesh geometry={nodes.Plane002.geometry} material={materials.wall} />

          <mesh
            geometry={nodes.Circle006.geometry}
            material={nodes.Circle006.material}
            position={[0.08, 0, -0.44]}
          />
          <mesh
            geometry={nodes.Circle007.geometry}
            material={materials.Metal}
            position={[0.08, 0, -0.44]}
          />
          <mesh
            geometry={nodes.Circle008.geometry}
            material={materials.wall}
            position={[0.14, 0.45, -0.49]}
          />
          <mesh geometry={nodes.Circle009.geometry} material={materials.ruh} />
          <mesh
            geometry={nodes.Circle010.geometry}
            material={materials.Metal}
            position={[0.17, 2.13, 0.15]}
          />
          <mesh
            geometry={nodes.Circle011.geometry}
            material={materials.Metal}
            position={[-0.45, 1.83, -0.41]}
          />
          <mesh
            geometry={nodes.Circle012.geometry}
            material={materials.Metal}
            position={[-0.68, 2.44, 0.4]}
          />
        </group>
      </group>

      <group
        ref={cam}
        name="Camera"
        position={[0, -3, -3]}
        rotation={[0, 0, 0]}
      >
        <PerspectiveCamera makeDefault fov={25} position={[0, 5, 0]}>
          <directionalLight
            position={[300, 130, 15]}
            shadow-camera-right={8}
            shadow-camera-top={8}
            shadow-camera-left={-8}
            shadow-camera-bottom={-8}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            intensity={0.5}
            shadow-bias={-0.0001}
          />
        </PerspectiveCamera>
      </group>
    </>
  );
}

const HTMLContent = () => {
  const text = useRef();

  useEffect(() => {
    ScrollTrigger.create({
      trigger: ".mark",
      start: "top",
      end: "bottom",

      onEnter: () => {
        gsap.to(".text", {
          duration: 0.2,
          x: 800,
        });
      },

      onLeaveBack: () => {
        gsap.to(".text", {
          duration: 0.2,
          x: 0,
        });
      },
    });
  }, [text]);

  return (
    <Section factor={1.5} offset={1}>
      <Green />
      <group ref={text} position={(10, 0, 0)} rotation={[0, 0, 0]}>
        <mesh position={(10, 0, 0)} rotation={[0, 0, 0]}>
          <Html fullscreen>
            <div
              style={{
                fontSize: "5.5rem",
              }}
              className="text-gray-800 text absolute right-0 top-0"
            >
              <p>
                WE ARE A <br /> BUSINESS <br /> ORIENTED <br /> ARCHITECTURE{" "}
                <br />
                STUDIO
              </p>
            </div>
          </Html>
        </mesh>
      </group>
    </Section>
  );
};

// function Picker() {
//   const snap = useSnapshot(state);
//   return (
//     <div>
//       <HexColorPicker
//         className="picker"
//         color={snap.items[snap.current]}
//         onChange={(color) => (state.items[snap.current] = color)}
//       />
//       <h1>{snap.current}</h1>
//     </div>
//   );
// }

function Dolly() {
  // This one makes the camera move in and out

  useFrame(({ clock, camera }) => {
    camera.position.z = 23 + Math.sin(clock.getElapsedTime()) * 1;
  });
  return null;
}

export default function Arch() {
  return (
    <>
      <Canvas
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
          zIndex: "-1",
          backgroundColor: "#CCCCCC",
        }}
        id="main-canvas"
        linear
        colorManagment
        shadows
        onPointerOver={(e) => console.log("over")}
        // camera={{ position: [0, 380, 30], fov: 25, far: 500 }}
      >
        <Lights />

        <Suspense fallback={null}>
          <HTMLContent />
        </Suspense>
        <Dolly />
      </Canvas>
    </>
  );
}

useGLTF.preload("/bu3312ationnn.glb");
