import React, { useState } from 'react';
import bangzenLogo from '../assets/images/BGZENBGIJObulat.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavLink = ({ href, children }) => (
    <li>
      <a
        href={href}
        className="relative block text-white font-bauhaus text-base tracking-wider py-2 transition-transform duration-300 hover:scale-110 group"
      >
        {children}
        <span className="absolute bottom-1 left-0 block h-[2px] w-0 bg-[#00ffdc] transition-all duration-500 group-hover:w-full"></span>
      </a>
    </li>
  );

  return (
    <>
    <div className="animate-shadowFade drop-shadow-[0_6px_3px_rgba(0,255,255,0.4)]">
      <header className="bg-[#11142F] pt-3 pb-3 [clip-path:polygon(0_0,_100%_0,_100%_80%,_68%_80%,_64%_100%,_36%_100%,_32%_80%,_0_80%)]">
        <nav className="container mx-auto flex items-center justify-around flex-wrap pb-4">
          
          {/* ---- SISI KIRI ---- */}
          <div className="flex items-center">
            {/* Navigasi Kiri (Desktop) */}
            <ul className="hidden md:flex items-center list-none gap-x-20"> {/* PERUBAHAN DI SINI */}
              <NavLink href="/#">Home</NavLink>
              <NavLink href="/about">About</NavLink>
            </ul>
            {/* Logo (Mobile) */}
            <a href="/#" className="md:hidden flex items-center gap-3">
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
          <div className="flex items-center">
            {/* Navigasi Kanan (Desktop) */}
            <ul className="hidden md:flex items-center list-none gap-16"> {/* PERUBAHAN DI SINI */}
              <NavLink href="/project">Project</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </ul>
            {/* Tombol Hamburger (Mobile) */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-[#00ffdc] text-3xl">
              &#9776;
            </button>
          </div>

          {/* ---- Menu Dropdown (Mobile) ---- */}
          {isMenuOpen && (
            <ul className="w-full flex flex-col items-center basis-full md:hidden mt-4 list-none space-y-2"> {/* PERUBAHAN DI SINI */}
              <NavLink href="/#">Home</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/project">Project</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </ul>
          )}
        </nav>
      </header>
    </div>

    </>
  );
};

export default Header;