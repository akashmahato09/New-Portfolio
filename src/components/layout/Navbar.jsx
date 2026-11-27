import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import logo from '../../assets/logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [targetSectionName, setTargetSectionName] = useState('');
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', path: 'home' },
    { name: 'About', path: 'about' },
    { name: 'Skills', path: 'skills' },
    { name: 'Projects', path: 'projects' },
    { name: 'Services', path: 'services' },
    { name: 'Contact', path: 'contact' },
  ];

  // Track active section automatically while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Offset for fixed navbar

      for (const link of navLinks) {
        const element = document.getElementById(link.path);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.path);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial position on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, link) => {
    e.preventDefault();
    setIsOpen(false);
    setActiveSection(link.path);

    if (isTransitioning) return;

    setTargetSectionName(link.name);
    setIsTransitioning(true);

    // 1. Jump to section after 200ms (once overlay fades in)
    setTimeout(() => {
      const element = document.getElementById(link.path);
      if (element) {
        const yOffset = -100;
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'instant' });
      }
    }, 200);

    // 2. Start fading out the overlay at 500ms
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <>
      {/* Full-Screen Branded Transition Overlay */}
      <div
        className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950/95 backdrop-blur-2xl transition-all duration-200 ease-in-out ${
          isTransitioning
            ? 'opacity-100 pointer-events-auto scale-100'
            : 'opacity-0 pointer-events-none scale-105'
        }`}
      >
        {/* Decorative Ambient Glow */}
        <div className="absolute w-80 h-80 bg-red-600/20 rounded-full blur-3xl animate-pulse" />

        {/* Animated Rings & Logo Container */}
        <div className="relative flex items-center justify-center">
          {/* Outer Rotating Dashed Ring */}
          <div className="w-56 h-56 rounded-full border-2 border-dashed border-red-500/40 animate-spin-slow" />

          {/* Inner Counter-Rotating Gradient Ring */}
          <div className="absolute w-48 h-48 rounded-full border-t-2 border-b-2 border-rose-500 animate-spin" />

          {/* Center Logo Badge */}
          <div
            className={`absolute w-40 h-16 rounded-2xl shadow-red-600/20 flex items-center justify-center p-2.5 transition-transform duration-150 ${
              isTransitioning ? 'scale-100 rotate-0' : 'scale-50 -rotate-5'
            }`}
          >
            <img
              src={logo}
              alt="Brand Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Section Name Indicator & Progress Bar */}
        <div className="mt-8 flex flex-col items-center gap-2 z-10">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-rose-400">
            Navigating to
          </span>
          <h2 className="text-2xl font-extrabold text-white tracking-wide">
            {targetSectionName}
          </h2>
          <div className="w-32 h-1 bg-slate-800 rounded-full overflow-hidden mt-1">
            <div
              className={`h-full bg-gradient-to-r from-red-600 to-rose-500 transition-all duration-300 ease-out ${
                isTransitioning ? 'w-full' : 'w-0'
              }`}
            />
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="fixed top-4 left-0 w-full z-50 px-4 sm:px-6">
        <nav className="max-w-6xl mx-auto rounded-2xl bg-white/85 backdrop-blur-xl border border-slate-200 shadow-lg shadow-black/5">
          <div className="h-16 px-5  pl-5 flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, { name: 'Home', path: 'home' })}
              className="flex items-center gap-2"
            >
              <img
                src={logo}
                alt="Logo"
                className="h-9 w-auto object-contain"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1 bg-slate-100 p-1 rounded-full">
              {navLinks.map((link) => {
                const isActive = activeSection === link.path;
                return (
                  <a
                    key={link.name}
                    href={`#${link.path}`}
                    onClick={(e) => handleNavClick(e, link)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold cursor-pointer transition-all duration-300 ${
                      isActive
                        ? 'bg-white text-red-600 shadow-sm'
                        : 'text-slate-600 hover:bg-white/60 hover:text-red-600'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            {/* Resume Button */}
            <div className="hidden lg:flex">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-red-600 to-rose-600 text-white text-sm font-semibold shadow-md hover:shadow-red-500/30 hover:scale-105 transition-all duration-300"
              >
                Resume
                <ArrowUpRight size={16} />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={25} /> : <Menu size={25} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ${
              isOpen
                ? 'max-h-[500px] opacity-100 border-t border-slate-100'
                : 'max-h-0 opacity-0'
            }`}
          >
            <div className="flex flex-col gap-2 p-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.path;
                return (
                  <a
                    key={link.name}
                    href={`#${link.path}`}
                    onClick={(e) => handleNavClick(e, link)}
                    className={`px-4 py-3 rounded-xl text-sm font-semibold cursor-pointer transition-all ${
                      isActive
                        ? 'bg-red-50 text-red-600'
                        : 'text-slate-700 hover:bg-red-50/60 hover:text-red-600'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 text-white font-semibold"
              >
                 Resume
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;