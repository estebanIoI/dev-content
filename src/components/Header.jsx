import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { FaShieldAlt } from 'react-icons/fa';
import bangzenLogo from '../assets/images/BGZENBGIJObulat.png';
import { useNavbar } from '../contexts/NavbarContext';
import { useAdmin } from '../contexts/AdminContext';
import AdminLogin from './AdminLogin';
import AdminMessages from './AdminMessages';
import AdminComments from './AdminComments';

const CLIP_PATH =
  'polygon(0 0, 100% 0, 100% 80%, 68% 80%, 64% 100%, 36% 100%, 32% 80%, 0 80%)';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [showAdminDashboard, setShowAdminDashboard] = useState(false);
  const [adminView, setAdminView] = useState('messages'); // 'messages' or 'comments'
  
  const { isNavbarVisible, hideNavbar, showNavbar } = useNavbar();
  const { isAuthenticated, logout } = useAdmin();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAdminAccess = () => {
    if (isAuthenticated) {
      setShowAdminDashboard(true);
      hideNavbar();
    } else {
      setShowAdminLogin(true);
      hideNavbar();
    }
  };

  const handleLoginSuccess = () => {
    setShowAdminLogin(false);
    setShowAdminDashboard(true);
    hideNavbar();
  };

  const handleAdminLogout = () => {
    logout();
    setShowAdminDashboard(false);
    showNavbar();
  };

  const handleCloseAdminDashboard = () => {
    setShowAdminDashboard(false);
    showNavbar();
  };

  const handleCloseAdminLogin = () => {
    setShowAdminLogin(false);
    showNavbar();
  };

  const NavLink = ({ href, children }) => (
    <li>
      <a
        href={href}
        className="relative block text-white font-[Rubik] font-bold text-base tracking-wider py-2 transition-transform duration-300 hover:scale-110 group"
      >
        {children}
        <span className="absolute bottom-1 left-0 block h-[2px] w-0 bg-[#00ffdc] transition-all duration-500 group-hover:w-full"></span>
      </a>
    </li>
  );

  return (
    <>
      <AnimatePresence>
        {isNavbarVisible && (
          <motion.div
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -60 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full z-50 pointer-events-none"
          >
        {/* Drop Shadow Gradient Animated */}
        {!isScrolled && (
          <div
            className="pointer-events-none absolute left-0 right-0 z-10"
            style={{
              top: '0',
              height: '90px',
              WebkitClipPath: CLIP_PATH,
              clipPath: CLIP_PATH,
              background: 'linear-gradient(90deg, #00fff0, #00ffdc, #4079ff, #40ffaa, #00fff0)',
              backgroundSize: '300% 100%',
              animation: 'gradientShadowMove 6s linear infinite',
              opacity: 1,
              filter: 'drop-shadow(0 16px 24px rgba(64,255,170,0.35))',
            }}
          ></div>
        )}

        {/* Navbar */}
        <header
          className={`pt-3 pb-3 relative z-20 pointer-events-auto transition-all duration-300
            ${isScrolled
              ? "glassmorphism-header"
              : "bg-[#11142F]"
            }`}
          style={{
            WebkitClipPath: CLIP_PATH,
            clipPath: CLIP_PATH,
            ...(isScrolled
              ? {
                  backgroundColor: "rgba(17, 20, 47, 0.71)",
                  backdropFilter: "blur(7px) saturate(180%)",
                  WebkitBackdropFilter: "blur(7px) saturate(180%)",
                  border: "1px solid rgba(255,255,255,0.125)",
                  borderRadius: "12px"
                }
              : {}
            )
          }}
        >
          <nav className="container mx-auto flex items-center justify-around flex-wrap pb-4">
            {/* ---- SISI KIRI ---- */}
            <div className="flex items-center">
              {/* Navigasi Kiri (Desktop) */}
              <ul className="hidden md:flex items-center list-none gap-x-20">
                <NavLink href="#home">Home</NavLink>
                <NavLink href="#about">About</NavLink>
              </ul>
              {/* Logo (Mobile) */}
              <a href="#home" className="md:hidden flex items-center gap-3">
                <img src={bangzenLogo} alt="Bangzen Logo" className="h-12 w-12" />
              </a>
            </div>

            {/* ---- TENGAH (KHUSUS DESKTOP) ---- */}
            <div className="hidden md:flex items-center gap-3">
              <img src={bangzenLogo} alt="Bangzen Logo" className="h-12 w-12" />
              <div className="hidden sm:block">
                <h1 className="font-moderniz text-base text-[#00ffdc]">Zain Ahmad Fahrezi</h1>
                <p className="font-moderniz text-[10px] text-[#000754]" style={{ textShadow: '0.5px 0.5px 0 #00ffdc, -0.5px -0.5px 0 #00ffdc, 0.5px -0.5px 0 #00ffdc, -0.5px 0.5px 0 #00ffdc' }}>
                  Let's see the awesome Experience
                </p>
              </div>
            </div>

            {/* ---- SISI KANAN ---- */}
            <div className="flex items-center gap-4">
              {/* Navigasi Kanan (Desktop) */}
              <ul className="hidden md:flex items-center list-none gap-16">
                <NavLink href="#projects">Project</NavLink>
                <NavLink href="#contact">Contact</NavLink>
              </ul>
              
              {/* Admin Access Button */}
              <button
                onClick={handleAdminAccess}
                className="hidden md:flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors duration-300 pointer-events-auto"
                title={isAuthenticated ? "Admin Dashboard" : "Admin Login"}
              >
                <FaShieldAlt className={`text-lg ${isAuthenticated ? 'text-green-400' : 'text-slate-400'}`} />
              </button>
              
              {/* Tombol Hamburger (Mobile) */}
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-[#00ffdc] text-3xl pointer-events-auto">
                &#9776;
              </button>
            </div>

            {/* ---- Menu Dropdown (Mobile) ---- */}
            {isMenuOpen && (
              <ul className="w-full flex flex-col items-center basis-full md:hidden mt-4 list-none space-y-2">
                <NavLink href="#home">Home</NavLink>
                <NavLink href="#about">About</NavLink>
                <NavLink href="#projects">Project</NavLink>
                <NavLink href="#contact">Contact</NavLink>
                <li>
                  <button
                    onClick={handleAdminAccess}
                    className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    <FaShieldAlt className={`text-lg ${isAuthenticated ? 'text-green-400' : 'text-slate-400'}`} />
                    <span>Admin</span>
                  </button>
                </li>
              </ul>
            )}
          </nav>
        </header>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Admin Login Modal */}
      <AdminLogin
        isOpen={showAdminLogin}
        onClose={handleCloseAdminLogin}
        onSuccess={handleLoginSuccess}
      />

      {/* Admin Dashboard - Toggle between Messages and Comments */}
      {adminView === 'messages' && (
        <AdminMessages
          isOpen={showAdminDashboard}
          onClose={handleCloseAdminDashboard}
        />
      )}
      
      {adminView === 'comments' && (
        <AdminComments
          isOpen={showAdminDashboard}
          onClose={handleCloseAdminDashboard}
        />
      )}

      {/* Dashboard Switcher - Floating Button */}
      {showAdminDashboard && (
        <div className="fixed bottom-6 right-6 z-[60] flex flex-col gap-2">
          <button
            onClick={() => setAdminView(adminView === 'messages' ? 'comments' : 'messages')}
            className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white px-4 py-2 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2"
          >
            {adminView === 'messages' ? '💬 Comments' : '📧 Messages'}
          </button>
        </div>
      )}

      {/* Animasi gradient keyframes */}
      <style>
        {`
          @keyframes gradientShadowMove {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }

          html {
            scroll-behavior: smooth;
          }
        `}
      </style>
    </>
  );
};

export default Header;
