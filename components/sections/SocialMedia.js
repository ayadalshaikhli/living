import React from "react";
import {
  IconName,
  FaFacebookF,
  FaPaperclip,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
function SocialMedia() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "0",
        left: "100px",
        zIndex: "4",
      }}
      className="ml-10"
    >
      <div className="flex justify-around w-full text-gray-800">
        <div className="text-xl ">
          <div className="social flex flex-col gap-5 p-10">
            <a href="#contact">
              <i className="fab fas fa-phone-alt"></i>
            </a>
            <a href="https://www.facebook.com/ayad.m.alshaikhli/">
              <FaFacebookF className="fab" />
            </a>
            <a href="https://www.instagram.com/ayadalshaikly/">
              <FaInstagram className="fab" />
            </a>

            <a href="https://www.linkedin.com/in/ayad-alshaikhli-815599208/">
              <FaLinkedin className="fab" />
            </a>
            <a download href="data/ayadalshaikhli.pdf">
              <FaPaperclip className="fab" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;
