import React, { useRef, useEffect } from "react";
import { gsap, Expo } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
function SecoundSection() {
  let about = useRef(null);
  useEffect(() => {
    gsap.from(about, {
      scrollTrigger: {
        trigger: ".about",
        toggleActions: "restart resume resume  resume",
      },

      y: -100,
      delay: 0,
      duration: 1.2,
    });
  }, []);
  return (
    <section
      style={{
        height: "100vh",
        width: "100%",
        position: "relative",
        zIndex: "3",
        backgroundColor: "#CCCCCC",
      }}
      className=" text-6xl mark"
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "12%",
          transform: "translate(0, -50%)",
        }}
        className=" flex flex-col space-y-10 text-gray-800 "
      >
        <div className=" uppercase text-left about" ref={(el) => (about = el)}>
          WE ARE A CREATIVE STUDIO THAT <br /> SPECIALIZES IN ELEVATING SPACES
          <br /> WHITLE CRAFTING EXPERIENCES <br />
          THROUGH DISRUPTIVE THINKING
        </div>
        <div className=" border-2 border-gray-500   text-center pb-2 w-96">
          MEET US
        </div>
      </div>
    </section>
  );
}

export default SecoundSection;
