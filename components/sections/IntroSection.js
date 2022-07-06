import React from "react";
import { gsap, Expo } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function IntroSection() {
  React.useEffect(() => {
    gsap.to(".intro-top", 3, {
      y: "-100%",
      x: "-100%",
      delay: 3,
      display: "none",
      ease: Expo.easeOut,
      borderBottomRightRadius: "500px",
    });
    gsap.to(".intro-bottom", 3, {
      y: "100%",
      x: "100%",
      display: "none",
      borderTopLeftRadius: "500px",
      delay: 3,
      ease: Expo.easeOut,
    });

    gsap.to(".text-mosaicc", 1, {
      opacity: 1,
      stagger: 0.2,
    });
    gsap.to(".intro-container", 1, {
      display: "none",
      delay: 3,
    });
    gsap.to(".fulltext", 1, {
      display: "none",
      delay: 1,
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
      className="intro-container"
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
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        className="text-9xl text-white uppercase font-thin fulltext "
      >
        <span className="text-first">L</span>
        <span>I</span>
        <span>V</span>
        <span>I</span>
        <span>N</span>
        <span>G </span>

        <span className="text-sec">M</span>
        <span className="text-mosaicc opacity-0">o</span>
        <span className="text-mosaicc opacity-0">s</span>
        <span className="text-mosaicc opacity-0">a</span>
        <span className="text-mosaicc opacity-0">i</span>
        <span className="text-mosaicc opacity-0">c</span>
      </div>
    </div>
  );
}

export default IntroSection;
