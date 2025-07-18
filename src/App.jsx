import React from 'react';
import Header from './components/Header';
import Squares from './components/Squares';
import TextGenerateEffect from "./components/text-generate-effect";
import GradientText from './components/GradientText';
import { AnimatedGradientTextDemo } from './components/AnimatedGradientTextDemo';
import Lanyard from './components/Lanyard/Lanyard';
import Skills from './components/Skills';


function App() {
  return (
    <div className="relative min-h-screen bg-[#060010] overflow-hidden">
      {/* LAPISAN 1: BACKGROUND ANIMASI */}
      <div className="absolute inset-0 z-0">
        <Squares
          speed={0.3}
          squareSize={35}
          direction="diagonal"
          borderColor="rgba(255, 255, 255, 0.03)"
          hoverFillColor="rgba(31, 137, 187, 0.53)"
        />
      </div>

      {/* HEADER FIXED DI ATAS MAIN */}
      <Header />

      {/* MAIN DIBERI MARGIN-TOP */}
      <main className="relative z-0 px-8 max-w-7xl mx-auto" style={{ marginTop: '70px' }}>
        <div className="flex flex-col md:flex-row items-center gap-10" >
          {/* KIRI: TEXT */}
          <div className="flex-1 text-white space-y-6" style={{ marginTop: '100px' }}>
            <AnimatedGradientTextDemo />
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(to right, rgba(0, 255, 255, 1), rgba(0, 255, 255, 0.59))",
                  animation: "shadowFade 5s infinite ease-in-out",
                  filter: "drop-shadow(-1px 6px 3px rgba(0, 255, 255, 0.5))",
                }}>
                WELCOME TO MY
              </span>
              <span className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(to right, rgba(0, 255, 255, 1), rgba(0, 255, 255, 0.59))",
                  animation: "shadowFade 5s infinite ease-in-out",
                  filter: "drop-shadow(-1px 6px 3px rgba(0, 255, 255, 0.5))",
                }}>
                {" "}PORTFOLIO
              </span>
            </h1>

            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              className="custom-class"
            >
              FRONT END DEVELOPER & 3D DESIGNER
            </GradientText>

            <TextGenerateEffect words={'I craft responsive and visually engaging websites using React, Tailwind CSS, and modern web technologies.'} />
            
            {/* --- Komponen Skills Ditambahkan Di Sini --- */}
            <Skills />
            {/* ----------------------------------------- */}

            <div className="flex gap-4 mt-8"> {/* Margin atas disesuaikan untuk memberi ruang */}
              <a href="#projects" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                View Projects
              </a>
              <a href="#contact" className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-100 transition">
                Contact Me
              </a>
            </div>
          </div>

          {/* KANAN: LANYARD */}
          <div className="flex-1 flex justify-center h-[500px]">
            <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} fov={18} transparent={true} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
