// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Squares from './components/Squares';
import TextGenerateEffect from "./components/text-generate-effect";
import GradientText from './components/GradientText';
import { AnimatedGradientTextDemo } from './components/AnimatedGradientTextDemo';
import Lanyard from './components/Lanyard/Lanyard';
import Skills from './components/Skills';
import { ButtonMovingBorder } from './components/MovingBorderButton';

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
      <main className="relative z-0 px-8 max-w-7xl mx-auto" style={{ marginTop: '40px' }}>
        <div className="flex flex-col md:flex-row items-center gap-10" >
          {/* KIRI: TEXT */}
          <div className="flex-1 text-white space-y-6" style={{ marginTop: '100px' }}>
            <AnimatedGradientTextDemo />
            <h1 className="text-4xl md:text-4xl font-moderniz font-bold leading-tight select-none"
              style={{
                color: "#00ffdc",
                textShadow: `
                  2px 2px 0 #000754,
                  4px 4px 0 #4079ff,
                  0 4px 12px #40ffaa,
                  0 1px 0 #00ffdc
                `
              }}>
              WELCOME TO MY
              <span style={{ display: 'block', marginTop: '0.4em' }}>PORTFOLIO</span>
            </h1>

            <GradientText
              colors={["#40f2ffff", "#4079ff", "#40fffcff", "#4079ff", "#40f9ffff"]}
              animationSpeed={3}
              className="custom-class font-cascadia font-bold"
            />

            <TextGenerateEffect words={'I craft responsive and visually engaging websites using React, Tailwind CSS, and modern web technologies.'} />
            
            <Skills />

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <ButtonMovingBorder
                as="a"
                href="#projects"
                duration={3000}
                borderRadius="0.75rem"
                className="bg-slate-900/[0.8] border border-slate-800 text-white font-semibold transition-all duration-300 hover:shadow-[0_0_24px_8px_#40ffaa]"
              >
                View Projects
              </ButtonMovingBorder>
              <ButtonMovingBorder
                as="a"
                href="#contact"
                duration={3000}
                borderRadius="0.75rem"
                className="bg-slate-900/[0.8] border border-slate-800 text-white font-semibold transition-all duration-300 hover:shadow-[0_0_24px_8px_#40ffaa]"
              >
                Contact Me
              </ButtonMovingBorder>
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
