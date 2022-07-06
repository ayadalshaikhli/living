import React from "react";

function ContactSection() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        position: "relative",
        zIndex: "2",
        backgroundColor: "#CC3016",
      }}
    >
      <div className="grid grid-cols-4 pt-10 px-10  text-3xl font-normal items-center justify-center text-left">
        <div className="gap-10 flex flex-col text-3xl font-normal ">
          <div>OFFICE</div>
          <div>
            Jordan 12 street abdullah gosheh jamb al dwar 40B +962 79 6454 686
          </div>
        </div>
        <div className="gap-10 flex flex-col text-3xl font-normal ">
          <div>BUSINESS</div>
          <div>
            Careers <span>livingma@live.com</span>
          </div>
        </div>
        <div className="gap-10 flex flex-col text-3xl font-normal ">
          <div>OTHERS</div>
          <div>GOT A PROJECT IN MIND</div>
          <a className="" href="mailto:Live.LIVMO@gmail.com">
            <span>KEEP IN TOUCH</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
