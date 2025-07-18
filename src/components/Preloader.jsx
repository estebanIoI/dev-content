import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Instagram } from 'lucide-react';

const Preloader = ({ onFinished }) => {
  const [typedText, setTypedText] = useState('');
  const [showContent, setShowContent] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const fullText = "www.zainahmadfahrezi.com";

  useEffect(() => {
    const initialTimer = setTimeout(() => {
      setShowContent(true);
    }, 500);

    return () => clearTimeout(initialTimer);
  }, []);

  useEffect(() => {
    if (showContent) {
      const typingTimer = setTimeout(() => {
        if (typedText.length < fullText.length) {
          setTypedText(fullText.slice(0, typedText.length + 1));
        } else {
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(onFinished, 1000); // Wait for fade out animation
          }, 1500);
        }
      }, 120);

      return () => clearTimeout(typingTimer);
    }
  }, [typedText, showContent, fullText, onFinished]);

  return (
    <AnimatePresence>
      {!fadeOut && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1, ease: 'easeInOut' } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#060010] text-white"
        >
          {showContent && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
              className="text-center"
            >
              <motion.h1
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.2, ease: "easeOut" } }}
                className="text-4xl md:text-6xl font-moderniz font-bold mb-4"
              >
                Zain Ahmad Fahrezi
              </motion.h1>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.8, delay: 0.5 } }}
                className="font-cascadia text-lg md:text-xl text-gray-400 mb-8"
              >
                <span>{typedText}</span>
                <span className="animate-blink">|</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.8 } }}
                className="flex justify-center gap-6"
              >
                <a href="https://github.com/zainahmadf28" target="_blank" rel="noopener noreferrer" className="hover:text-[#00ffdc] transition-all duration-300 transform hover:scale-110">
                  <Github size={32} />
                </a>
                <a href="https://www.linkedin.com/in/zain-ahmad-fahrezi-7a8a912a7/" target="_blank" rel="noopener noreferrer" className="hover:text-[#00ffdc] transition-all duration-300 transform hover:scale-110">
                  <Linkedin size={32} />
                </a>
                <a href="https://www.instagram.com/zainahmadf" target="_blank" rel="noopener noreferrer" className="hover:text-[#00ffdc] transition-all duration-300 transform hover:scale-110">
                  <Instagram size={32} />
                </a>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;