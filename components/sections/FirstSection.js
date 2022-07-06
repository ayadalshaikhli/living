import React from "react";

function FirstSection() {
  return (
    <section
      style={{
        height: "110vh",
        width: "100%",
        position: "relative",
        backgroundColor: "#D0D0D0",
        zIndex: "-2",
      }}
      className=" text-6xl "
    >
      <div
        style={{
          position: "relative",
          height: "20vh",
        }}
        className=" mt-32"
      >
        hello
      </div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        Hi how are you
      </div>
    </section>
  );
}

export default FirstSection;
