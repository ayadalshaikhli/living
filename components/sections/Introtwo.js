import React from "react";
import Image from "next/image";
import { gsap, Expo } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import cover from "../../public/zaha.jpg";
function Introtwo() {
  React.useEffect(() => {
    gsap.to(".section-up", 3, {
      y: "-100%",
      display: "none",
      delay: 5,
      ease: Expo.easeOut,
    });
    gsap.to(".white-down", 2, {
      y: "100%",
      delay: 3,
      display: "none",
      ease: Expo.easeOut,
    });
  }, []);
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: "100",
      }}
      className="section-up"
    >
      <div
        style={{
          zIndex: "101",
        }}
      >
        <Image src={cover} layout="fill" objectFit="fill" />
      </div>
      <div
        style={{
          zIndex: "102",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: "102",
          }}
          className=" text-9xl text-white flex flex-col gap-y-96  uppercase "
        >
          <div>Living Mosaic</div>
          <div>INNOVATION IN DESIGN</div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: "103",
        }}
        className="bg-white white-down"
      >
        White
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: "104",
          }}
          className="  text-9xl text-black flex flex-col gap-y-96  uppercase "
        >
          <div>Living Mosaic</div>
          <div>INNOVATION IN DESIGN</div>
        </div>
      </div>

      {/* <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: "103",
        }}
        className="bg-white white-down"
      >
        White
      </div> */}
      {/* <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: "103",
        }}
        className="bg-white white-down"
      >
        White
      </div> */}
      <div></div>
      <div></div>
    </div>
  );
}

export default Introtwo;
