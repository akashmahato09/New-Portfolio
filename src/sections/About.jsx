import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// Replace with your actual portrait image path
import ownerPhoto from "../assets/akash3.jpeg";

/**
 * Reusable Scroll-Reveal Wrapper using IntersectionObserver + useEffect
 * Directions supported: 'left' | 'right' | 'up'
 */
function RevealOnScroll({
  children,
  direction = "up",
  delay = 0,
  className = "",
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Unobserve after revealing so it stays visible
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15, // Triggers when 15% of the element is in view
        rootMargin: "0px 0px -40px 0px",
      },
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const getInitialTransform = () => {
    switch (direction) {
      case "left":
        return "-translate-x-12 opacity-0";
      case "right":
        return "translate-x-12 opacity-0";
      case "up":
      default:
        return "translate-y-10 opacity-0";
    }
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out will-change-transform ${
        isVisible
          ? "translate-x-0 translate-y-0 opacity-100"
          : getInitialTransform()
      } ${className}`}
    >
      {children}
    </div>
  );
}

function About() {
  const [showMore, setShowMore] = useState(false);

  const highlights = [
    { label: "Location", value: "India" },
    { label: "Experience", value: "4+ Years" },
    { label: "Focus", value: "React & Modern Web" },
    { label: "Availability", value: "Open to Work" },
  ];

  const journey = [
    {
      year: "2024 — Present",
      role: "Independent Full-Stack Developer",
      detail:
        "Designing and shipping responsive web applications, interactive UIs, and scalable front-end architectures.",
    },
    {
      year: "2022 — 2024",
      role: "Frontend Engineer",
      detail:
        "Built reusable component libraries in React and Tailwind CSS, improving page load speed and accessibility.",
    },
    {
      year: "2021 — 2022",
      role: "UI/UX & Web Designer",
      detail:
        "Translated wireframes into clean, mobile-first digital products with a strong emphasis on typography and motion.",
    },
  ];

  const techStack = [
    "React.js",
    "JavaScript (ES6+)",
    "Tailwind CSS",
    "Node.js",
    "REST APIs",
    "Git & GitHub",
    "UI/UX Prototyping",
    "Responsive Design",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-red-600 selection:text-white overflow-x-hidden">
      <main className="flex-grow relative -mt-20 pt-28 pb-20 overflow-hidden">
        {/* Subtle Architectural Grid Background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Ambient Glow */}
        <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[36rem] h-72 bg-red-500/10 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Page Header - Slides in from Left */}
          <RevealOnScroll direction="left" delay={100}>
            <div className="max-w-2xl mb-12">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-red-50 text-red-600 border border-red-100 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                About Me
              </span>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 leading-[1.1]">
                Turning complex ideas into{" "}
                <span className="bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">
                  clean digital craft.
                </span>
              </h1>
            </div>
          </RevealOnScroll>

          {/* Main About Me Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xl shadow-slate-900/5">
            {/* Left Portrait Column (5 cols) - Slides in from Left */}
            <div className="lg:col-span-5">
              <RevealOnScroll direction="left" delay={200}>
                <div className="relative rounded-2xl overflow-hidden bg-slate-900 aspect-[4/5] border border-slate-200 shadow-lg group">
                  <img
                    src={ownerPhoto}
                    alt="About Me Portrait"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/75 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                    <div>
                      <p className="text-sm font-bold">Akash Mahato</p>
                      <p className="text-xs text-slate-300">
                        Developer &amp; Designer
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white/15 backdrop-blur-md border border-white/20">
                      Portfolio
                    </span>
                  </div>
                </div>
              </RevealOnScroll>
            </div>

            {/* Right Bio & Interactive "More" Section (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              {/* Bio Text - Slides in from Right */}
              <RevealOnScroll direction="right" delay={250}>
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
                    Who I Am
                  </h2>
                  <p className="text-slate-600 text-base leading-relaxed">
                    Hi, I'm <b>Akash Mahato</b>, a passionate and dedicated Full
                    Stack Developer with a Bachelor's degree in Computer Science
                    and Engineering.
                  </p>
                  <p className="text-slate-600 text-base leading-relaxed">
                    I enjoy building modern, responsive, and user-friendly web
                    applications that solve real-world problems. My technical
                    interests include frontend development with React.js,
                    JavaScript, HTML5, and Tailwind CSS, along with backend
                    development using Python, Django, REST APIs, and PostgreSQL.
                  </p>
                  <p className="text-slate-600 text-base leading-relaxed">
                    I love exploring new technologies, learning morden
                    development practices, and transforming creative ideas into
                    functional digital experiences. I focus on writing clean,
                    maintainable code and continuously improving my
                    problem-solving and development skills.
                  </p>
                  <p className="text-slate-600 text-base leading-relaxed">
                    As an enthusiastic developer at the beginning of my
                    professional journey, I'm looking forward to contributing to
                    innovative projects, collaborating with talented teams, and
                    growing as a software developer.
                  </p>
                  <p className="text-slate-600 text-base leading-relaxed">
                    <b>
                      My goal is to build meaningful digital solutions through
                      technology, creativity, and continuous learning.
                    </b>
                  </p>
                </div>
              </RevealOnScroll>

              {/* Quick Info Grid - Staggered Slide from Right */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {highlights.map((item, index) => (
                  <RevealOnScroll
                    key={item.label}
                    direction="right"
                    delay={300 + index * 100}
                  >
                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 h-full hover:border-red-200 transition-colors">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                        {item.label}
                      </p>
                      <p className="text-sm font-bold text-slate-900 mt-0.5">
                        {item.value}
                      </p>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>

              {/* Action Buttons - Slides in from Right */}
              <RevealOnScroll direction="right" delay={550}>
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setShowMore((prev) => !prev)}
                    aria-expanded={showMore}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 shadow-md shadow-red-600/20 active:scale-95 transition-all duration-200 cursor-pointer"
                  >
                    <span>{showMore ? "Show Less" : "More About Me"}</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${
                        showMore ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200/80 transition-all duration-200"
                  >
                    Get in Touch
                  </a>
                </div>
              </RevealOnScroll>

              {/* Expandable "More" Content Drawer */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  showMore
                    ? "max-h-[900px] opacity-100 pt-4"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pt-6 border-t border-slate-200/80 space-y-6">
                  {/* Experience / Journey - Cards slide in alternately from Left & Right */}
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">
                      Experience &amp; Journey
                    </h3>
                    <div className="space-y-3">
                      {journey.map((step, index) => (
                        <div
                          key={step.year}
                          style={{ transitionDelay: `${index * 100}ms` }}
                          className={`p-4 rounded-2xl bg-slate-50 border border-slate-200/70 transition-all duration-500 ${
                            showMore
                              ? "translate-x-0 opacity-100"
                              : index % 2 === 0
                                ? "-translate-x-8 opacity-0"
                                : "translate-x-8 opacity-0"
                          }`}
                        >
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <h4 className="text-sm font-bold text-slate-900">
                              {step.role}
                            </h4>
                            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-red-50 text-red-600">
                              {step.year}
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                            {step.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills & Tools - Pills slide in from Right */}
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">
                      Core Skills &amp; Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {techStack.map((skill, index) => (
                        <span
                          key={skill}
                          style={{ transitionDelay: `${index * 60}ms` }}
                          className={`px-3.5 py-1.5 rounded-full text-xs font-semibold bg-slate-900 text-white transition-all duration-500 ${
                            showMore
                              ? "translate-x-0 opacity-100"
                              : "translate-x-6 opacity-0"
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* End Expandable Drawer */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default About;
