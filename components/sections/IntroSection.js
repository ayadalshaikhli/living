import React from "react";
import { gsap, Expo } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function IntroSection() {
  React.useEffect(() => {
    gsap.to(".intro-top", 3, {
      y: "-100%",
      x: "-100%",
      delay: 2,
      ease: Expo.easeOut,
      borderBottomRightRadius: "500px",
    });
    gsap.to(".intro-bottom", 3, {
      y: "100%",
      x: "100%",
      borderTopLeftRadius: "500px",
      delay: 2,
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
    >
      <div
        style={{
          height: "50vh",
          width: "100%",
          backgroundColor: "#9F9F9F",
        }}
        className="intro-top"
      ></div>
      <div
        style={{
          height: "50vh",
          width: "100%",
          backgroundColor: "#9F9F9F",
        }}
        className="intro-bottom"
      ></div>
    </div>
  );
}

export default IntroSection;
