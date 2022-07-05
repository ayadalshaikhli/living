import React from "react";
import Image from "next/image";
import cover from "../../public/zaha.jpg";
function SecoundSection() {
  return (
    <section
      style={{
        height: "100vh",
        width: "100%",
        zIndex: "2",
        backgroundColor: "#CCCCCC",
      }}
      className="  text-6xl"
    >
      <div style={{}} className="grid grid-cols-2">
        <div className="text-9xl "></div>
        <div>
          <Image src={cover} width={1500} height={1000} />
        </div>
      </div>
    </section>
  );
}

export default SecoundSection;
