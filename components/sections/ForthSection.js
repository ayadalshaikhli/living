import React, { useRef } from "react";
import { gsap, Expo } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
let tl = gsap.timeline({ defaults: { ease: "SlowMo.easeOut" } });
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import Marquee from "react-fast-marquee";
gsap.registerPlugin(ScrollTrigger);

function ForthSection() {
  const scrollHorizontal = useRef();
  React.useEffect(() => {});
  return (
    <section
      style={{
        height: "100vh",
        width: "100%",
        position: "relative",
        zIndex: "2",
        backgroundColor: "#CCCCCC",
      }}
      className="text-gray-800  text-9xl text-hitforth overflow-hidden"
    >
      <div
        style={{
          position: "absolute",
          top: "0",
        }}
        className="flex lol"
      >
        <div className="text-row">
          <Controller>
            <Scene triggerHook="onStart" duration="1000">
              <Tween from={{ x: "200%" }} to={{ x: "0%" }} stagger={"0.5"}>
                <div id="textforth">WE CREATE SPACES </div>
                <br />
                <div id="textforth">.......THAT </div>
                <br />
                <div id="textforth">................IMPOSSIBLE</div>
              </Tween>
            </Scene>
          </Controller>
        </div>
        <div ref={scrollHorizontal} className="horizontalScroll  ">
          <Controller>
            <Scene triggerHook="onCenter" duration="1000">
              <Tween from={{ y: "200%" }} to={{ y: "-200%" }} stagger={"0.5"}>
                <div className="mdd">Design</div>
                <div className="mdd">Design</div>
                <div className="mdd">Design</div>
                <div className="mdd">Design</div>
                <div className="mdd">Design</div>
              </Tween>
            </Scene>
          </Controller>
        </div>
      </div>
    </section>
  );
}

export default ForthSection;
