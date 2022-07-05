import React from "react";

function FirstSection() {
  return (
    <section
      style={{
        height: "110vh",
        width: "100%",
        position: "relative",
        backgroundColor: "#D0D0D0",
      }}
      className=" text-6xl mark"
    >
      <div
        style={{
          position: "relative",
          height: "20vh",
        }}
        className="mark mt-32"
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
