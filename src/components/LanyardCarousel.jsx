import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaPause, FaPlay } from 'react-icons/fa';
import LanyardVariant from './Lanyard/LanyardVariant';

const LanyardCarousel = ({ is3dEnabled = true }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [progress, setProgress] = useState(0);

  // Configuración de los diferentes lanyards
  const lanyardConfigs = [
    {
      id: 1,
      name: "",
      position: [0, 0, 15],
      gravity: [0, -40, 0],
      fov: 18,
      variant: 1,
      description: "Esteban"
    },
    {
      id: 2,
      name: "",
      position: [0, 0, 12],
      gravity: [0, -35, 0],
      fov: 20,
      variant: 2,
      description: "Maicol"
    },
    {
      id: 3,
      name: "",
      position: [0, 0, 18],
      gravity: [0, -45, 0],
      fov: 16,
      variant: 3,
      description: "Harold"
    },
    {
      id: 4,
      name: "",
      position: [0, 0, 14],
      gravity: [0, -42, 0],
      fov: 19,
      variant: 4,
      description: "Adrian"
    }
  ];

  // Auto-play functionality con barra de progreso
  useEffect(() => {
    if (!isAutoPlay) {
      setProgress(0);
      return;
    }
    
    const duration = 5000; // 5 segundos
    const interval = 50; // Actualizar cada 50ms
    const increment = (interval / duration) * 100;
    
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setCurrentIndex((prevIndex) => 
            prevIndex === lanyardConfigs.length - 1 ? 0 : prevIndex + 1
          );
          return 0;
        }
        return prev + increment;
      });
    }, interval);

    return () => clearInterval(progressInterval);
  }, [isAutoPlay, lanyardConfigs.length, currentIndex]);

  // Navegación por teclado
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        goToPrevious();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        goToNext();
      } else if (event.key === ' ') {
        event.preventDefault();
        toggleAutoPlay();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, isAutoPlay]);

  const goToPrevious = () => {
    setIsAutoPlay(false);
    setProgress(0);
    setCurrentIndex(currentIndex === 0 ? lanyardConfigs.length - 1 : currentIndex - 1);
    setTimeout(() => setIsAutoPlay(true), 15000); // Reanudar auto-play después de 15 segundos
  };

  const goToNext = () => {
    setIsAutoPlay(false);
    setProgress(0);
    setCurrentIndex(currentIndex === lanyardConfigs.length - 1 ? 0 : currentIndex + 1);
    setTimeout(() => setIsAutoPlay(true), 15000); // Reanudar auto-play después de 15 segundos
  };

  const goToSlide = (index) => {
    setIsAutoPlay(false);
    setProgress(0);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlay(true), 15000); // Reanudar auto-play después de 15 segundos
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
    if (!isAutoPlay) {
      setProgress(0);
    }
  };

  if (!is3dEnabled) return null;

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center">
      {/* Tooltip de controles de teclado */}
      <div className="absolute top-4 left-4 z-10">
        <div className="bg-slate-900/80 border border-slate-700 rounded-lg px-3 py-2 backdrop-blur-sm">
          <div className="text-xs text-slate-400 space-y-1">
            <div className="flex items-center space-x-1">
              <span className="text-cyan-400">←→</span>
              <span>Navegar</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-cyan-400">Space</span>
              <span>Pausar</span>
            </div>
          </div>
        </div>
      </div>
      {/* Lanyard actual */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full h-full"
        >
          <LanyardVariant
            position={lanyardConfigs[currentIndex].position}
            gravity={lanyardConfigs[currentIndex].gravity}
            fov={lanyardConfigs[currentIndex].fov}
            variant={lanyardConfigs[currentIndex].variant}
            transparent={true}
          />
        </motion.div>
      </AnimatePresence>

      {/* Controles de navegación */}
      <div className="absolute inset-0 flex items-center justify-between pointer-events-none z-10">
        {/* Botón anterior */}
        <button
          onClick={goToPrevious}
          className="pointer-events-auto ml-4 p-3 rounded-full bg-slate-900/80 border border-slate-700 text-slate-400 
                     hover:bg-slate-800 hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_12px_2px_#00ffdc80]
                     transition-all duration-300 backdrop-blur-sm"
          aria-label="Lanyard anterior"
        >
          <FaChevronLeft className="w-5 h-5" />
        </button>

        {/* Botón siguiente */}
        <button
          onClick={goToNext}
          className="pointer-events-auto mr-4 p-3 rounded-full bg-slate-900/80 border border-slate-700 text-slate-400 
                     hover:bg-slate-800 hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_12px_2px_#00ffdc80]
                     transition-all duration-300 backdrop-blur-sm"
          aria-label="Siguiente lanyard"
        >
          <FaChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Información del lanyard actual */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-slate-900/90 border border-slate-700 rounded-xl px-6 py-3 backdrop-blur-sm min-w-[280px]"
        >
          <div className="text-center">
            <p className="text-lg text-cyan-300 font-bold font-moderniz">
              {lanyardConfigs[currentIndex].name}
            </p>
            <p className="text-xs text-slate-400 mt-1">
              {lanyardConfigs[currentIndex].description}
            </p>
            <p className="text-xs text-slate-500 mt-1">
              {currentIndex + 1} de {lanyardConfigs.length}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Controles de auto-play */}
      <div className="absolute top-4 right-4 z-10 flex items-center space-x-2">
        {/* Botón de pausa/reproducción */}
        <button
          onClick={toggleAutoPlay}
          className="p-2 rounded-full bg-slate-900/80 border border-slate-700 text-slate-400 
                     hover:bg-slate-800 hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_12px_2px_#00ffdc80]
                     transition-all duration-300 backdrop-blur-sm"
          aria-label={isAutoPlay ? "Pausar carrusel" : "Reproducir carrusel"}
        >
          {isAutoPlay ? <FaPause className="w-3 h-3" /> : <FaPlay className="w-3 h-3" />}
        </button>

        {/* Indicador de estado  */}
        <div className="bg-slate-900/80 border border-slate-700 rounded-lg px-3 py-1 backdrop-blur-sm">
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full ${isAutoPlay ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`}></div>
            <span className="text-xs text-slate-400">{isAutoPlay ? 'Auto' : 'Manual'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanyardCarousel;
