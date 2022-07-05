import Footer from "./footer";
import Header from "./header";
import Arch from "../three/Arch";

export default function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen">
      <style jsx global>
        {`
         section{
          position: relative;
            height: 100vh;
            width: 100vw;
         }
        `}
      </style>
      <Header />
      <main className="w-full h-full">
        {props.children}
      </main>
{/* 
      <Footer /> */}
    </div>
  );
}
