import Footer from "./footer";
import Header from "./header";
import Arch from "../three/Arch";

export default function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen">
      <style jsx global>
        {`
          .arabic {
            font-family: "Kufam", sans-serif;
          }
          body {
            backgroundcolor: "#CCCCCC";
          }
          section {
            height: 100vh;
            width: 100%;
            overflow-x: hidden;
          }
          #pinContainer {
            height: 50vh;
            width: 100vw;
            overflow-x: hidden;
          }
          .panel {
            height: 50vh;
            width: 100vw;
            position: absolute;
            text-align: center;
            overflow-x: hidden;
          }
          .bggray {
            background-color: #cccccc;
          }
          .bgorange {
            background-color: #cc3016;
          }
        `}
      </style>
      <Header />
      <main className="w-full h-full">{props.children}</main>
      {/* 
      <Footer /> */}
    </div>
  );
}
