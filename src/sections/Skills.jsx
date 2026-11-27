import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');
  const containerRef = useRef(null);

  const categories = ['All', 'Frontend', 'Backend', 'UI/UX & Tools'];

  const skillsData = [
    {
      name: 'React.js',
      category: 'Frontend',
      level: 92,
      experience: '4+ yrs',
      description: 'Component architecture, custom hooks, state management, and performance optimization.',
      tag: 'Core',
    },
    {
      name: 'JavaScript (ES6+)',
      category: 'Frontend',
      level: 90,
      experience: '4+ yrs',
      description: 'Asynchronous programming, modular patterns, DOM manipulation, and modern syntax.',
      tag: 'Core',
    },
    {
      name: 'Tailwind CSS',
      category: 'Frontend',
      level: 95,
      experience: '3+ yrs',
      description: 'Responsive utility-first design systems, custom animations, and glassmorphic UIs.',
      tag: 'Favorite',
    },
    {
      name: 'HTML5 & CSS3',
      category: 'Frontend',
      level: 96,
      experience: '4+ yrs',
      description: 'Semantic markup, CSS Grid, Flexbox, and accessible cross-browser layouts.',
      tag: 'Core',
    },
    {
      name: 'Django & Django Rest Framework',
      category: 'Backend',
      level: 82,
      experience: '3 yrs',
      description: 'RESTful API design, authentication middleware, and server-side business logic.',
      tag: 'Backend',
    },

    {
      name: 'Figma & UI Prototyping',
      category: 'UI/UX & Tools',
      level: 88,
      experience: '3+ yrs',
      description: 'Wireframing, interactive prototypes, typography scales, and design handoff.',
      tag: 'Design',
    },
    {
      name: 'Git & GitHub',
      category: 'UI/UX & Tools',
      level: 90,
      experience: '4+ yrs',
      description: 'Branching workflows, pull request reviews, CI/CD pipelines, and version control.',
      tag: 'Workflow',
    },

  ];

  const filteredSkills =
    activeCategory === 'All'
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  const softSkills = [
    'Responsive Mobile-First Thinking',
    'Clean & Maintainable Code',
    'API Integration',
    'Cross-Browser Compatibility',
    'Problem Solving',
    'Agile Collaboration',
  ];

  // Scroll-reveal effect using IntersectionObserver
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll('.scroll-reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Slide element into its final position
            entry.target.classList.remove(
              'opacity-0',
              '-translate-x-16',
              'translate-x-16'
            );
            entry.target.classList.add('opacity-100', 'translate-x-0');

            // Animate any inner proficiency bar once card is visible
            const bar = entry.target.querySelector('.progress-bar');
            if (bar && bar.dataset.level) {
              bar.style.width = `${bar.dataset.level}%`;
            }

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [activeCategory]); // Re-runs when category filter renders new cards

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-red-600 selection:text-white overflow-x-hidden"
    >
      <main className="flex-grow relative -mt-20 pt-28 pb-20 overflow-hidden">
        {/* Subtle Architectural Graph Grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        {/* Ambient Glow */}
        <div className="pointer-events-none absolute top-12 right-1/4 w-[32rem] h-72 bg-red-500/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header & Filter Bar */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            {/* Slides in from LEFT */}
            <div className="scroll-reveal opacity-0 -translate-x-16 transition-all duration-700 ease-out max-w-2xl">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-red-50 text-red-600 border border-red-100 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                Technical Arsenal
              </span>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 leading-[1.1]">
                Skills &amp;{' '}
                <span className="bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">
                  Technologies
                </span>
              </h1>
              <p className="mt-3 text-slate-600 text-base sm:text-lg">
                The languages, frameworks, and tools I use to design, build, and ship modern web products.
              </p>
            </div>

            {/* Interactive Category Filter Pills — Slides in from RIGHT */}
            <div className="scroll-reveal opacity-0 translate-x-16 transition-all duration-700 ease-out inline-flex flex-wrap gap-1.5 p-1.5 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-sm self-start lg:self-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    activeCategory === category
                      ? 'bg-slate-950 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill, index) => {
              // Alternate left (-translate-x-16) and right (translate-x-16) slide-in
              const slideDirection =
                index % 2 === 0 ? '-translate-x-16' : 'translate-x-16';

              return (
                <div
                  key={skill.name}
                  style={{ transitionDelay: `${(index % 3) * 100}ms` }}
                  className={`scroll-reveal opacity-0 ${slideDirection} group p-6 rounded-3xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-red-200 hover:-translate-y-1 transition-all duration-700 ease-out flex flex-col justify-between`}
                >
                  <div>
                    {/* Top Row: Skill Name + Badge */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                          {skill.category}
                        </span>
                        <h2 className="text-xl font-extrabold text-slate-950 group-hover:text-red-600 transition-colors">
                          {skill.name}
                        </h2>
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-red-50 text-red-600 border border-red-100">
                        {skill.tag}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {skill.description}
                    </p>
                  </div>

                  {/* Proficiency Bar & Experience */}
                  <div className="pt-4 border-t border-slate-100">
                    <div className="flex items-center justify-between text-xs font-semibold mb-2">
                      <span className="text-slate-500">
                        Proficiency ({skill.experience})
                      </span>
                      <span className="text-slate-950">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                      <div
                        data-level={skill.level}
                        className="progress-bar h-full rounded-full bg-gradient-to-r from-red-600 to-rose-500 transition-all duration-1000 ease-out"
                        style={{ width: '0%' }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Section: Workflow Strengths + CTA */}
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Additional Competencies Card (7 cols) — Slides in from LEFT */}
            <div className="scroll-reveal opacity-0 -translate-x-16 transition-all duration-700 ease-out lg:col-span-7 p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-950">
                  Core Engineering Practices
                </h3>
                <p className="text-sm text-slate-600 mt-1.5">
                  Beyond specific frameworks, these principles guide how I build every project.
                </p>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {softSkills.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-50 text-slate-800 border border-slate-200/80"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Dark CTA Card (5 cols) — Slides in from RIGHT */}
            <div className="scroll-reveal opacity-0 translate-x-16 transition-all duration-700 ease-out lg:col-span-5 p-7 sm:p-8 rounded-3xl bg-slate-950 text-white shadow-lg relative overflow-hidden flex flex-col justify-between">
              <div className="pointer-events-none absolute -right-12 -bottom-12 w-48 h-48 bg-red-600/20 rounded-full blur-2xl" />
              <div className="relative z-10">
                <span className="text-xs font-semibold uppercase tracking-wider text-red-400">
                  Ready to Build
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold mt-1.5">
                  Have a project in mind?
                </h3>
                <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                  Let&apos;s put this stack to work and turn your idea into a fast, polished web experience.
                </p>
              </div>
              <div className="relative z-10 pt-6">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 shadow-md shadow-red-600/20 active:scale-95 transition-all duration-200"
                >
                  <span>Start a Conversation</span>
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Skills;