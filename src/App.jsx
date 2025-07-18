import React from 'react';
import Header from './components/Header';   // Impor komponen Header Anda
import Squares from './components/Squares'; // Impor komponen Squares
import TextGenerateEffect from "./components/text-generate-effect"; // Impor efek teks
import TypewriterEffect from "./components/TypewriterEffect"; // Impor efek typewriter
import GradientText from './components/GradientText';
import { AnimatedGradientTextDemo } from './components/AnimatedGradientTextDemo';


function App() {
  const words = [
    {
      text: "Front ",
      className: "text-blue-500 dark:text-blue-500"
    },
    {
      text: "End ",
      className: "text-blue-500 dark:text-blue-500"
    },
    {
      text: "Developer ",
    },
    {
      text: "&",
    },
    {
      text: "Designer",
    },
    {
      text: "Aceternity.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ]

  



  return (
    // Container utama untuk layering
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

      {/* LAPISAN 2: KONTEN UTAMA */}
      <div className="relative z-10">
        <Header />

        {/* MAIN CONTENT */}
        <main className="px-8 py-16 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10">

            {/* Kolom KIRI: Teks Perkenalan */}
            <div className="flex-1 text-white space-y-6">
              <AnimatedGradientTextDemo />
              <h1 className="text-4xl md:text-5xl font-bold">
                <span className="bg-clip-text text-transparent"
                    style={{
                    backgroundImage: "linear-gradient(to right, rgba(0, 255, 255, 1), rgba(0, 255, 255, 0.59))",
                    animation: "shadowFade 5s infinite ease-in-out",
                    filter: "drop-shadow(-1px 6px 3px rgba(0, 255, 255, 0.5))",
                    }}>
                  WELCOME TO MY </span>
                <span
                  className="bg-clip-text text-transparent"
                    style={{
                    backgroundImage: "linear-gradient(to right, rgba(0, 255, 255, 1), rgba(0, 255, 255, 0.59))",
                    animation: "shadowFade 5s infinite ease-in-out",
                    filter: "drop-shadow(-1px 6px 3px rgba(0, 255, 255, 0.5))",
                    }}
                    >
                      PORTFOLIO
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
              <div className="flex gap-4 mt-4">
                <a href="#projects" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  View Projects
                </a>
                <a href="#contact" className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-100 transition">
                  Contact Me
                </a>
              </div>
            </div>

            {/* Kolom KANAN: Hero Card */}
            <div className="flex-1 flex justify-center">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg w-[320px] text-white">
                <div className="w-24 h-24 mx-auto rounded-full bg-gray-400/30 mb-4" />
                <h3 className="text-xl font-semibold text-center">Zain A. Fahrezi</h3>
                <p className="text-sm text-center text-sky-300">Front-End Developer</p>
                <ul className="mt-4 text-sm text-gray-300 space-y-1">
                  <li>📍 Palembang, Indonesia</li>
                  <li>💼 React, Tailwind, JavaScript</li>
                  <li>🧰 GitHub, Figma</li>
                </ul>
              </div>
            </div>

          </div>
        </main>
      </div>

    </div>
  );
}

export default App;
