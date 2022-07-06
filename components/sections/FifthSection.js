import React from "react";
import Image from "next/image";
import img12 from "../../public/img12.jpg";
import img10 from "../../public/img10.jpg";

import cover from "../../public/zaha.jpg";
import { gsap, Expo } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
function FifthSection() {
  React.useEffect(() => {
    ScrollTrigger.create({
      trigger: ".img-scale",
      start: "top bottom",
      end: "bottom top",

      onEnter: () => {
        gsap.to(".smallimg", {
          duration: 1.5,
          scale: 1.2,
          ease: "power4",
        });
      },

      onLeaveBack: () => {
        gsap.to(".smallimg", {
          duration: 1.5,
          scale: 1,
          ease: "power4",
        });
      },
    });
    ScrollTrigger.create({
      trigger: ".img-scale2",
      start: "top bottom",
      end: "bottom top",

      onEnter: () => {
        gsap.to(".smallimg2", {
          duration: 1.5,
          scale: 1.2,
          ease: "power4",
        });
      },

      onLeaveBack: () => {
        gsap.to(".smallimg2", {
          duration: 1.5,
          scale: 1,
          ease: "power4",
        });
      },
    });

    ScrollTrigger.create({
      trigger: ".img-scale2",
      start: "top bottom",
      end: "bottom top ",

      onEnter: () => {
        gsap.to(".change-bg1", {
          duration: 1.5,

          y: "20%",
          ease: "power4",
        });
      },

      onLeaveBack: () => {
        gsap.to(".change-bg1", {
          duration: 1.5,
          y: "0%",

          ease: "power4",
        });
      },
    });
    ScrollTrigger.create({
      trigger: ".img-scale2",
      start: "top bottom",
      end: "bottom top ",

      onEnter: () => {
        gsap.to(".change-bg", {
          duration: 1.5,

          y: "-30%",
          ease: "power4",
        });
      },

      onLeaveBack: () => {
        gsap.to(".change-bg", {
          duration: 1.5,
          y: "0%",

          ease: "power4",
        });
      },
    });
  });
  return (
    <section
      style={{
        height: "100vh",
        width: "100%",
        zIndex: "2",
        position: "relative",
        overflow: "hidden",
      }}
      className=" bggray text-6xl"
    >
      <div
        style={{
          position: "absolute",
          top: "0%",
          left: "50%",
        }}
        className=" change-bg1 bggray"
      >
        <Image className="smallimg" src={img12} width={500} height={600} />
        <div className="img-scale text-sm w-96">
          The beauty of mixing two contrasting materials wood and concrete to
          achieve a modern interior look.
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "20%",
        }}
        className=" change-bg"
      >
        <Image className="smallimg2" src={img10} width={400} height={600} />
        <div className="img-scale2 text-sm w-96">
          We in Living Mosaic take care of the smallest details in the interior
          design and we make sure its implemented in the correct way because we
          believe the creative design isnt enough but it should constructed
          well to show its beauty and details and thats what we made sure to
          apply in Al-Qadis Villa.
        </div>
      </div>
    </section>
  );
}

export default FifthSection;
