import React from "react";

function SecoundSection() {
  return (
    <section
      style={{
        height: "100vh",
        width: "100%",
        position: "relative",
        zIndex: "2",
        backgroundColor: "#CCCCCC",
      }}
      className=" text-6xl"
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-10%, -50%)",
        }}
        className=" flex flex-col space-y-10"
      >
        <div className=" uppercase text-left">
          WE ARE A CREATIVE STUDIO THAT <br /> SPECIALIZES IN ELEVATING SPACES
          <br /> WHITLE CRAFTING EXPERIENCES <br />
          THROUGH DISRUPTIVE THINKING
        </div>
        <div className=" border-2 border-black text-center pb-2 w-96">
          MEET US
        </div>
      </div>
    </section>
  );
}

export default SecoundSection;
