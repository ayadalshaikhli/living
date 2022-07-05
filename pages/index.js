import Image from "next/image";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

import FirstSection from "../components/sections/FirstSection";
import Arch from "../components/three/Arch";
import SecoundSection from "../components/sections/SecoundSection";
import ForthSection from "../components/sections/ForthSection";
import FifthSection from "../components/sections/FifthSection";
import ThirdSection from "../components/sections/ThirdSection";
import IntroSection from "../components/sections/IntroSection";
import Introtwo from "../components/sections/Introtwo";

export default function IndexPage() {
  return (
    <>
      {/* <IntroSection /> */}
      <Introtwo />
      <Arch />
      <FirstSection />
      <SecoundSection />
      <ThirdSection />
      <ForthSection />
      <FifthSection />
    </>
  );
}
