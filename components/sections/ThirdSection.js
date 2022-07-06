import React from "react";
import Image from "next/image";
import cover from "../../public/zaha.jpg";
import Marquee from "react-fast-marquee";
import MarqueeSection from "./MarqueeSection";
function SecoundSection() {
  return (
    <section
      style={{
        height: "70vh",
        width: "100%",
        zIndex: "2",
        backgroundColor: "#CCCCCC",
        overflow: "hidden",
      }}
      className="  text-6xl"
    >
      <div style={{}} className="grid grid-cols-2 ">
        <div>
          <div className="text-9xl  w-full">
            <MarqueeSection />
          </div>
          <div className="text-9xl mt-20 w-full">
            <MarqueeSection />
          </div>
        </div>
        <div>
          <Image src={cover} width={1500} height={1000} />
        </div>
      </div>
    </section>
  );
}

export default SecoundSection;
