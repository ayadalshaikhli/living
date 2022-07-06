import React from "react";
import { gsap, Expo } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

function MarqueeSection() {
  //   ScrollTrigger.create({
  //     trigger: ".lol",
  //     start: "top bottom",
  //     end: "bottom top",

  //     onEnter: () => {
  //       gsap.to(".arabic-left", {
  //         duration: 1.5,

  //         ease: "power4",
  //       });
  //     },

  //     onLeaveBack: () => {
  //       gsap.to(".arabic-left", {
  //         duration: 1.5,
  //         x: "0",
  //         ease: "power4",
  //       });
  //     },
  //   });
  return (
    <div
      style={{
        height: "30vh",
        overflow: "hidden",
      }}
      className="text-5xl bggray text-gray-800  arabic "
    >
      <Controller>
        <Scene triggerHook="onStart" duration="1000">
          <Tween from={{ x: "200%" }} to={{ x: "-200%" }}>
            <div className="arabic-left w-full ">
              يقول الناس أنني أصمم أيقونات معمارية، لو صممت مبنى وأصبح أيقونة،
              فلا بأس بهذا.
            </div>
          </Tween>
        </Scene>
      </Controller>
      <Controller>
        <Scene triggerHook="onStart" duration="1000">
          <Tween from={{ x: "-100%" }} to={{ x: "200%" }}>
            <div className="arabic-left w-full mt-5">
              يقول الناس أنني أصمم أيقونات معمارية، لو صممت مبنى وأصبح أيقونة،
              فلا بأس بهذا.
            </div>
          </Tween>
        </Scene>
      </Controller>
      <div></div>
    </div>
  );
}

export default MarqueeSection;
