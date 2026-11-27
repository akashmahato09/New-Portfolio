import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProject, setActiveProject] = useState(null);
  const pageRef = useRef(null);

  const categories = ['All', 'Full-Stack', 'Frontend', 'UI/UX'];

  const projects = [
    {
      id: 1,
      title: 'PulseFlow Analytics Dashboard',
      category: 'Full-Stack',
      featured: true,
      year: '2026',
      summary:
        'Real-time SaaS analytics workspace with custom chart visualizations, role-based access, and sub-second API filtering.',
      highlights: [
        'Built modular data widgets with React and Tailwind CSS',
        'Integrated REST APIs with optimistic UI updates',
        'Dark/light adaptive cards with mobile drawer navigation',
      ],
      stack: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      liveUrl: '#',
      repoUrl: '#',
    },
    {
      id: 2,
      title: 'CartCraft Modern Storefront',
      category: 'Frontend',
      featured: false,
      year: '2026',
      summary:
        'High-converting e-commerce storefront featuring instant search, slide-over cart state, and smooth product filtering.',
      highlights: [
        'Zero-reload category and price range filtering',
        'Persistent cart drawer with quantity controls',
        '98+ Lighthouse performance and accessibility score',
      ],
      stack: ['React', 'JavaScript', 'Tailwind CSS', 'Stripe UI'],
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      liveUrl: '#',
      repoUrl: '#',
    },
    {
      id: 3,
      title: 'TaskGrid Team Workspace',
      category: 'Full-Stack',
      featured: false,
      year: '2025',
      summary:
        'Collaborative Kanban and sprint planning board engineered for distributed engineering teams.',
      highlights: [
        'Drag-and-drop task columns with status badges',
        'Real-time activity feed and priority filtering',
        'JWT authentication and protected workspace routes',
      ],
      stack: ['React', 'Express', 'PostgreSQL', 'Tailwind CSS'],
      image:
        'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
      liveUrl: '#',
      repoUrl: '#',
    },
    {
      id: 4,
      title: 'Aura Glass Design System',
      category: 'UI/UX',
      featured: false,
      year: '2025',
      summary:
        'A cohesive UI component kit built around frosted glass surfaces, crisp typography scales, and accessible color tokens.',
      highlights: [
        '30+ reusable React & Tailwind primitives',
        'Documented spacing, elevation, and motion guidelines',
        'Figma tokens synced directly with Tailwind config',
      ],
      stack: ['Figma', 'Tailwind CSS', 'React', 'Storybook'],
      image:
        'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=80',
      liveUrl: '#',
      repoUrl: '#',
    },
    {
      id: 5,
      title: 'DevPulse API Monitor',
      category: 'Frontend',
      featured: false,
      year: '2025',
      summary:
        'Lightweight uptime and latency status monitor with automated incident timelines and webhook alert previews.',
      highlights: [
        'Live 90-day uptime bar visualization',
        'Instant endpoint status filtering and search',
        'Responsive layout tailored for desktop and mobile',
      ],
      stack: ['React', 'REST API', 'Tailwind CSS', 'Vite'],
      image:
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
      liveUrl: '#',
      repoUrl: '#',
    },
    {
      id: 6,
      title: 'NomadStay Booking Experience',
      category: 'UI/UX',
      featured: false,
      year: '2024',
      summary:
        'Editorial travel and boutique stay discovery interface combining split-screen map browsing with fast date selection.',
      highlights: [
        'Interactive split-view property cards',
        'Mobile-first bottom sheet filters',
        'Micro-interactions for saved wishlists',
      ],
      stack: ['UI/UX', 'React', 'Tailwind CSS', 'Mapbox'],
      image:
        'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=80',
      liveUrl: '#',
      repoUrl: '#',
    },
  ];

  const featuredProject = projects.find((p) => p.featured);
  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  // Slide-in from sides on scroll using useEffect + IntersectionObserver
  useEffect(() => {
    const root = pageRef.current;
    if (!root) return;

    const elements = root.querySelectorAll('[data-scroll-side]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            el.classList.remove(
              'opacity-0',
              '-translate-x-12',
              'translate-x-12'
            );
            el.classList.add('opacity-100', 'translate-x-0');
            observer.unobserve(el);
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
  }, [selectedCategory]);

  // Close modal on Escape key press
  useEffect(() => {
    if (!activeProject) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeProject]);

  return (
    <div
      ref={pageRef}
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
        <div className="pointer-events-none absolute top-10 left-1/3 w-[34rem] h-72 bg-red-500/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Page Header & Category Filter */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            {/* Slides in from LEFT */}
            <div
              data-scroll-side="left"
              className="max-w-2xl opacity-0 -translate-x-12 transition-all duration-700 ease-out"
            >
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-red-50 text-red-600 border border-red-100 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                Selected Work
              </span>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 leading-[1.1]">
                Featured{' '}
                <span className="bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">
                  Projects
                </span>
              </h1>
              <p className="mt-3 text-slate-600 text-base sm:text-lg">
                A curated collection of web applications, interfaces, and full-stack builds crafted with precision.
              </p>
            </div>

            {/* Category Filter Pills — Slides in from RIGHT */}
            <div
              data-scroll-side="right"
              className="inline-flex flex-wrap gap-1.5 p-1.5 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-sm self-start lg:self-auto opacity-0 translate-x-12 transition-all duration-700 ease-out"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    selectedCategory === category
                      ? 'bg-slate-950 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Spotlight Featured Banner — Slides in from LEFT */}
          {selectedCategory === 'All' && featuredProject && (
            <div
              data-scroll-side="left"
              className="mb-12 rounded-3xl bg-slate-950 text-white border border-slate-800 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 opacity-0 -translate-x-12 transition-all duration-700 ease-out"
            >
              <div className="lg:col-span-6 relative min-h-[260px] sm:min-h-[340px] overflow-hidden">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-600 text-white shadow-md">
                    Featured Build • {featuredProject.year}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-6 p-7 sm:p-10 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-red-400">
                    {featuredProject.category}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold mt-1.5">
                    {featuredProject.title}
                  </h2>
                  <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                    {featuredProject.summary}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {featuredProject.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-slate-200 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-7 mt-7 border-t border-slate-800 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveProject(featuredProject)}
                    className="px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 shadow-md shadow-red-600/20 active:scale-95 transition-all cursor-pointer"
                  >
                    Case Study
                  </button>
                  <a
                    href={featuredProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-full text-sm font-semibold text-slate-200 bg-white/10 hover:bg-white/15 transition"
                  >
                    Live Preview &rarr;
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Projects Responsive Grid — Alternates LEFT and RIGHT on scroll */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredProjects.map((project, index) => {
              const fromLeft = index % 2 === 0;
              return (
                <article
                  key={`${selectedCategory}-${project.id}`}
                  data-scroll-side={fromLeft ? 'left' : 'right'}
                  style={{ transitionDelay: `${(index % 3) * 120}ms` }}
                  className={`group rounded-3xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-red-200 hover:-translate-y-1 transition-all duration-700 ease-out overflow-hidden flex flex-col justify-between opacity-0 ${
                    fromLeft ? '-translate-x-12' : 'translate-x-12'
                  }`}
                >
                  <div>
                    {/* Project Thumbnail */}
                    <div className="relative h-52 overflow-hidden bg-slate-900">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                      <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                        <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/90 backdrop-blur-md text-slate-900 shadow-sm">
                          {project.category}
                        </span>
                        <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-slate-950/75 text-white backdrop-blur-md">
                          {project.year}
                        </span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6">
                      <h3 className="text-xl font-extrabold text-slate-950 group-hover:text-red-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-600 leading-relaxed line-clamp-3">
                        {project.summary}
                      </p>

                      {/* Tech Pills */}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-slate-100 text-slate-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="px-6 py-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveProject(project)}
                      className="text-xs font-bold text-slate-900 hover:text-red-600 transition cursor-pointer"
                    >
                      View Details +
                    </button>

                    <div className="flex items-center gap-3">
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} Source Code`}
                        className="text-xs font-semibold text-slate-500 hover:text-slate-900 transition"
                      >
                        Code
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full text-xs font-semibold text-white bg-slate-950 hover:bg-red-600 transition-colors"
                      >
                        <span>Live</span>
                        <span aria-hidden="true">&nearr;</span>
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Bottom Collaboration Banner — Slides in from RIGHT */}
          <div
            data-scroll-side="right"
            className="mt-16 rounded-3xl bg-white border border-slate-200/80 p-8 sm:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 opacity-0 translate-x-12 transition-all duration-700 ease-out"
          >
            <div>
              <h2 className="text-2xl font-extrabold text-slate-950">
                Want to build something similar?
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-1">
                I&apos;m open to freelance projects, product collaborations, and full-time opportunities.
              </p>
            </div>
            <a
              href="#contact"
              className="shrink-0 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 shadow-md shadow-red-600/20 active:scale-95 transition-all"
            >
              Start a Project
            </a>
          </div>
        </div>
      </main>

      {/* Interactive Project Details Modal */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="relative w-full max-w-2xl rounded-3xl bg-white border border-slate-200 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-56 sm:h-64 bg-slate-900">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-950/80 text-white hover:bg-red-600 flex items-center justify-center transition cursor-pointer"
              >
                &#x2715;
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-5">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600">
                  <span>{activeProject.category}</span>
                  <span>•</span>
                  <span>{activeProject.year}</span>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-950 mt-1">
                  {activeProject.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {activeProject.summary}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                  Key Highlights
                </h4>
                <ul className="space-y-2">
                  {activeProject.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-slate-700"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {activeProject.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-end gap-3">
                <a
                  href={activeProject.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-full text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 transition"
                >
                  Source Code
                </a>
                <a
                  href={activeProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 shadow-md shadow-red-600/20 transition"
                >
                  Open Live Demo &nearr;
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;