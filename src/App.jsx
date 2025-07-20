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
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin, FaDownload, FaBriefcase } from 'react-icons/fa';

// Ganti dengan path ke gambar profil Anda di folder 'public' atau 'src/assets'
const profileImageUrl = '/path-to-your-image.jpg'; // <-- GANTI INI

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

      {/* MAIN CONTENT */}
      <main className="relative z-10 px-8 max-w-7xl mx-auto">
        {/* BAGIAN HERO */}
        <section id="home" className="flex flex-col md:flex-row items-center gap-10 pb-40">
          {/* KIRI: TEXT */}
          <div className="flex-1 text-white space-y-6 pt-40">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}>
              <AnimatedGradientTextDemo />
            </motion.div>
            <motion.h1 initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }} className="text-4xl md:text-4xl font-moderniz font-bold leading-tight select-none" style={{ color: "#00ffdc", textShadow: `2px 2px 0 #000754, 4px 4px 0 #4079ff, 0 4px 12px #40ffaa, 0 1px 0 #00ffdc` }}>
              WELCOME TO MY
              <span style={{ display: 'block', marginTop: '0.4em' }}>PORTFOLIO</span>
            </motion.h1>
            <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}>
              <GradientText colors={["#40f2ffff", "#4079ff", "#40fffcff", "#4079ff", "#40f9ffff"]} animationSpeed={3} className="custom-class font-cascadia font-bold" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.55, ease: "easeOut" }}>
              <TextGenerateEffect words={'I craft responsive and visually engaging websites using React, Tailwind CSS, and modern web technologies.'} />
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}>
              <Skills />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 1.0, ease: "easeOut" }} className="flex flex-row gap-4 mt-8">
              <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900/[0.8] text-white transition-all duration-300 hover:border-cyan-400 hover:bg-slate-800 hover:shadow-[0_0_24px_2px_#00ffdc]">
                <FaGithub className="h-6 w-6 text-slate-400 transition-all duration-300 group-hover:text-cyan-300" />
              </a>
              <a href="https://instagram.com/username" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile" className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900/[0.8] text-white transition-all duration-300 hover:border-cyan-400 hover:bg-slate-800 hover:shadow-[0_0_24px_2px_#00ffdc]">
                <FaInstagram className="h-6 w-6 text-slate-400 transition-all duration-300 group-hover:text-cyan-300" />
              </a>
              <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900/[0.8] text-white transition-all duration-300 hover:border-cyan-400 hover:bg-slate-800 hover:shadow-[0_0_24px_2px_#00ffdc]">
                <FaLinkedin className="h-6 w-6 text-slate-400 transition-all duration-300 group-hover:text-cyan-300" />
              </a>
            </motion.div>
          </div>
          {/* KANAN: LANYARD */}
          <div className="flex-1 flex justify-center h-[500px] w-full">
            <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} fov={18} transparent={true} />
          </div>
        </section>

        {/* BAGIAN ABOUT ME BARU (SESUAI GAMBAR DAN STYLE WEB) */}
        <section id="about" className="py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">About <span className="text-[#00ffdc]">Me</span></h2>
            <p className="text-lg text-cyan-200/70 mt-2">
              ✧ Transforming ideas into digital experiences ✧
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
            {/* KIRI: Teks & Tombol */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="md:w-1/2 text-white text-center md:text-left"
            >
              <p className="text-2xl text-gray-300">Hello, I'm</p>
              <h3 className="text-5xl md:text-6xl font-bold text-white my-2">Eki Zulfar Rachman</h3>
              <p className="text-white/80 leading-relaxed mt-4">
                Seorang Lulusan Teknik Jaringan Komputer dan Telekomunikasi yang memiliki ketertarikan besar dalam pengembangan Front-End. Saya berfokus pada menciptakan pengalaman digital yang menarik dan selalu berusaha memberikan solusi terbaik dalam setiap proyek yang saya kerjakan.
              </p>
              <div className="my-6 bg-slate-900/50 border-l-4 border-[#00ffdc] p-4 rounded-r-lg italic text-white/70">
                "Leveraging AI as a professional tool, not a replacement."
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
                <ButtonMovingBorder
                  as="a"
                  href="/cv.pdf"
                  download
                  duration={3000}
                  borderRadius="0.75rem"
                  className="bg-slate-900/[0.8] border border-slate-800 text-white font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0_0_24px_8px_#40ffaa]"
                >
                  <FaDownload />
                  Download CV
                </ButtonMovingBorder>
                <ButtonMovingBorder
                  as="a"
                  href="#projects"
                  duration={3000}
                  borderRadius="0.75rem"
                  className="bg-slate-900/[0.8] border border-slate-800 text-white font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0_0_24px_8px_#40ffaa]"
                >
                  <FaBriefcase />
                  View Projects
                </ButtonMovingBorder>
              </div>
            </motion.div>

            {/* KANAN: Gambar Profil */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
              className="md:w-1/3 flex justify-center"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <img
                  src={profileImageUrl}
                  alt="Foto profil Eki Zulfar Rachman"
                  className="rounded-full w-full h-full object-cover border-4 border-cyan-500/50"
                  onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/400x400/060010/FFFFFF?text=Eki'; }}
                />
                <div className="absolute inset-0 rounded-full ring-4 ring-cyan-400/70 ring-offset-4 ring-offset-[#060010] animate-pulse"></div>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;
