import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Replace with your actual portrait image path
import ownerPhoto from '../assets/akash.png';

function Hero() {
  const roles = ['Full-Stack Python Developer', 'UI/UX Design', 'Data Analysis'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Trigger entrance animation when component opens
  useEffect(() => {
    const timer = requestAnimationFrame(() => {
      setIsVisible(true);
    });
    return () => cancelAnimationFrame(timer);
  }, []);

  // Role switcher interval
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section className="relative top-20 -mt-20 mb-20 pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-slate-50 border-b border-slate-200/80">
      {/* Subtle Architectural Graph Grid - Slides down from top */}
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 overflow-hidden leading-none transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}
      >
        <svg
          className="relative block w-full h-56 sm:h-72"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="rgba(225, 29, 72, 0.07)"
            d="M0,192L80,181.3C160,171,320,149,480,160C640,171,800,213,960,213.3C1120,213,1280,171,1360,149.3L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          />
          <path
            fill="rgba(15, 23, 42, 0.04)"
            d="M0,128L120,144C240,160,480,192,720,186.7C960,181,1200,139,1320,117.3L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
          />
        </svg>
      </div>

      {/* Soft Radial Gradient Glow */}
      <div
        className={`pointer-events-none absolute -top-24 right-0 w-[34rem] h-[34rem] bg-gradient-to-bl from-red-500/15 via-rose-500/5 to-transparent rounded-full blur-3xl transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Staggered Slide-in from Left (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">

            {/* 1. Bold Asymmetric Headline */}
            <div
              className={`space-y-2 transition-all duration-700 ease-out delay-100 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
              }`}
            >
              <p className="text-sm sm:text-base font-semibold tracking-widest uppercase text-red-600">
                Hello, I&apos;m AKASH MAHATO
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-[4.25rem] font-black tracking-tight text-slate-950 leading-[1.05]">
                Designing{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">
                    digital
                  </span>
                  <span className="absolute bottom-1.5 left-0 w-full h-3 bg-red-100 -z-0 rounded-sm" />
                </span>{' '}
                products with soul &amp; precision.
              </h1>
            </div>

            {/* 2. Dynamic Role Switcher Line */}
            <div
              className={`flex items-center gap-3 text-base sm:text-lg font-medium text-slate-600 transition-all duration-700 ease-out delay-200 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
              }`}
            >
              <span className="w-8 h-[2px] bg-slate-900" />
              <span>Focused on</span>
              <span
                key={roleIndex}
                className="font-bold text-slate-900 transition-all duration-300"
              >
                {roles[roleIndex]}
              </span>
            </div>

            {/* 3. Concise Bio */}
            <p
              className={`text-slate-600 text-base sm:text-lg max-w-xl leading-relaxed transition-all duration-700 ease-out delay-300 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
              }`}
            >
              I blend clean engineering with expressive visual design to turn complex ideas into effortless, memorable web experiences.
            </p>

            {/* 4. Clean Action Row */}
            <div
              className={`pt-2 flex flex-wrap items-center gap-4 transition-all duration-700 ease-out delay-[400ms] ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
              }`}
            >
<a
  href="#contact"
  className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-slate-950 hover:bg-red-600 shadow-lg shadow-slate-950/15 hover:shadow-red-600/25 active:scale-95 transition-all duration-200"
>
  <span>Let's Collaborate</span>

  <svg
    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
</a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-slate-800 bg-white hover:bg-blue-500  border border-slate-200/90 transition-all duration-200"
              >
                Explore Work
              </a>
            </div>

            {/* 5. Minimal Signature / Social Proof Strip */}
            <div
              className={`pt-6 flex items-center gap-8 border-t border-slate-200/70 max-w-md transition-all duration-700 ease-out delay-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
              }`}
            >
              <div>
                <p className="text-xl font-extrabold text-slate-950">4+ Yrs</p>
                <p className="text-xs text-slate-500 font-medium">Experience</p>
              </div>
              <div className="h-8 w-[1px] bg-slate-200" />
              <div>
                <p className="text-xl font-extrabold text-slate-950">30+</p>
                <p className="text-xs text-slate-500 font-medium">Shipped Projects</p>
              </div>
              <div className="h-8 w-[1px] bg-slate-200" />
              <div>
                <p className="text-xl font-extrabold text-slate-950">100%</p>
                <p className="text-xs text-slate-500 font-medium">Client Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Right Column: Slide-in from Right (5 cols) */}
          <div
            className={`lg:col-span-5 flex justify-center lg:justify-end transition-all duration-1000 ease-out delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Offset Architectural Backdrop Frame */}
              <div className="absolute -inset-3 rounded-[2.25rem] border-2 border-dashed border-red-500/30 rotate-3 transition-transform duration-500 hover:rotate-0" />
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-red-600 to-rose-500 -rotate-2 opacity-90" />

              {/* Main Portrait Card */}
              <div className="relative rounded-[2rem] overflow-hidden bg-slate-900 border-4 border-white shadow-2xl aspect-[4/5]">
                <img
                  src={ownerPhoto}
                  alt="Portfolio Owner"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                />

                {/* Subtle Bottom Gradient Overlay */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />

                {/* Floating Glass Badge Inside Bottom of Photo - Slides up slightly after photo enters */}
                <div
                  className={`absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-white/85 backdrop-blur-md border border-white/60 shadow-lg flex items-center justify-between transition-all duration-700 ease-out delay-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                >
                  <div>
                    <p className="text-xs font-bold text-slate-950">Akash Mahato</p>
                    <p className="text-[11px] font-medium text-slate-600">Founder &amp; Lead Developer</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-red-600 text-white">
                    2026
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;