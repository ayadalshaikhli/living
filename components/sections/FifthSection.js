import React from "react";

function FifthSection() {
  return (
    <section
      style={{
        height: "100vh",
        width: "100%",
        zIndex: "2",
      
      }}
      className=" bg-pink-900 text-6xl"
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        Hello World
      </div>
    </section>
  );
}

export default FifthSection;
