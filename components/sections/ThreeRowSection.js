import React from "react";
import Image from "next/image";
import img1 from "../../public/img1.jpg";
import img2 from "../../public/img2.jpg";
import { gsap, Expo } from "gsap/dist/gsap";

function ThreeRowSection() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        zIndex: "3",
        position: "relative",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          position: "absolute",
        }}
        className=" grid grid-rows-3 absolute top-0 text-gray-900 "
      >
        <div
          className=" border-2 border-black overflow-hidden relative"
          onMouseEnter={() => {
            gsap.to(".text-arch", {
              duration: 1.5,
              stagger: 0.2,
              y: "-100%",
              ease: "power4",
            });
            gsap.to(".arch-text", {
              duration: 1.5,
              stagger: 0.2,
              y: "-100%",
              ease: "power4",
            });
          }}
          onMouseLeave={() => {
            gsap.to(".arch-text", {
              duration: 1.5,
              y: "0",
              ease: "power4",
            });
            gsap.to(".text-arch", {
              duration: 1.5,
              stagger: 0.2,
              y: "0",
              ease: "power4",
            });
          }}
        >
          <div className="flex flex-row  z-10 absolute top-0 w-full arch-text">
            <div
              style={{
                fontSize: "14rem",
              }}
              className="grid grid-cols-3 w-full h-full "
            >
              <div className="text-arch text-right bggray">ARC</div>
              <div className="text-arch bggray">HITEC</div>
              <div className="text-arch bggray">TURE</div>
            </div>
          </div>
          <div className="grid grid-cols-3 w-full h-full  absolute top-0">
            <div className=" text-center mt-32">OUR SERVICES</div>
            <div className="">
              <Image src={img2} layout="fixed" objectFit="fill" />
            </div>
            <div className="">
              <Image src={img1} layout="fixed" objectFit="fill" />
            </div>
          </div>
        </div>
        <div
          className=" border-2 border-black overflow-hidden relative"
          onMouseEnter={() => {
            gsap.to(".text-exec", {
              duration: 1.5,
              stagger: 0.2,
              y: "-100%",
              ease: "power4",
            });
            gsap.to(".exec-text", {
              duration: 1.5,
              stagger: 0.2,
              y: "-100%",
              ease: "power4",
            });
          }}
          onMouseLeave={() => {
            gsap.to(".exec-text", {
              duration: 1.5,
              y: "0",
              ease: "power4",
            });
            gsap.to(".text-exec", {
              duration: 1.5,
              stagger: 0.2,
              y: "0",
              ease: "power4",
            });
          }}
        >
          <div className="flex flex-row  z-10 absolute top-0 w-full exec-text">
            <div
              style={{
                fontSize: "14rem",
              }}
              className="grid grid-cols-3 w-full h-full "
            >
              <div className="text-exec text-right bggray">EXE</div>
              <div className="text-exec bggray z-20">CUTIO</div>
              <div className="text-exec bggray">N</div>
            </div>
          </div>
          <div className="grid grid-cols-3 w-full h-full  absolute top-0">
            <div className="">
              <Image src={img2} layout="fixed" objectFit="fill" />
            </div>
            <div className=" text-center mt-32"> OUR SERVICES</div>
            <div className="">
              <Image src={img1} layout="fixed" objectFit="fill" />
            </div>
          </div>
        </div>
        <div
          className=" border-2 border-black overflow-hidden relative"
          onMouseEnter={() => {
            gsap.to(".text-inter", {
              duration: 1.5,
              stagger: 0.2,
              y: "-100%",
              ease: "power4",
            });
            gsap.to(".inter-text", {
              duration: 1.5,
              stagger: 0.2,
              y: "-100%",
              ease: "power4",
            });
          }}
          onMouseLeave={() => {
            gsap.to(".inter-text", {
              duration: 1.5,
              y: "0",
              ease: "power4",
            });
            gsap.to(".text-inter", {
              duration: 1.5,
              stagger: 0.2,
              y: "0",
              ease: "power4",
            });
          }}
        >
          <div className="flex flex-row  z-10 absolute top-0 w-full inter-text">
            <div
              style={{
                fontSize: "14rem",
              }}
              className="grid grid-cols-3 w-full h-full "
            >
              <div className="text-inter text-right bggray">INTE</div>
              <div className="text-inter  bggray z-20">RIOR </div>
              <div className="text-inter bggray z-10">DESIGN</div>
            </div>
          </div>
          <div className="grid grid-cols-3 w-full h-full  absolute top-0">
            <div className="">
              <Image src={img2} layout="fixed" objectFit="fill" />
            </div>
            <div className="">
              <Image src={img1} layout="fixed" objectFit="fill" />
            </div>
            <div className=" text-center mt-32">SERVICES</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThreeRowSection;
