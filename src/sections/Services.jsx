import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// Reusable Scroll-Reveal Component using useEffect + IntersectionObserver
function ScrollSlide({
  children,
  direction = "left",
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
          observer.unobserve(entry.target); // Animate once when scrolled into view
        }
      },
      { threshold: 0.12 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const initialOffset =
    direction === "left" ? "-translate-x-16" : "translate-x-16";

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out transform ${
        isVisible ? "opacity-100 translate-x-0" : `opacity-0 ${initialOffset}`
      } ${className}`}
    >
      {children}
    </div>
  );
}

function Services() {
  const [openFaq, setOpenFaq] = useState(0);

  const services = [
    {
      title: "Full-Stack Web Development",
      tag: "Most Popular",
      featured: true,
      description:
        "End-to-end web applications built with React, Node.js, and modern databases—engineered for speed, security, and clean scalability.",
      deliverables: [
        "Custom React Frontend",
        "REST API & Database",
        "Auth & Deployment",
      ],
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    },
    {
      title: "UI/UX & Glassmorphic Design",
      tag: "Design",
      featured: false,
      description:
        "Editorial, conversion-focused interfaces with crisp typography, responsive grids, and intuitive micro-interactions.",
      deliverables: [
        "Wireframes & Prototypes",
        "Design Systems",
        "Mobile-First Layouts",
      ],
      icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
    },
    {
      title: "Frontend Modernization",
      tag: "Upgrade",
      featured: false,
      description:
        "Transform legacy or slow websites into snappy, modern React & Tailwind CSS applications without losing SEO value.",
      deliverables: [
        "Legacy Code Refactor",
        "Tailwind Migration",
        "Component Library",
      ],
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
    },
    {
      title: "E-Commerce & SaaS Dashboards",
      tag: "Product",
      featured: false,
      description:
        "Interactive analytics panels, checkout flows, and customer portals with real-time state and clean data visualization.",
      deliverables: [
        "Analytics & Charts",
        "Payment Integration",
        "Admin Controls",
      ],
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    },
    {
      title: "API Integration & Automation",
      tag: "Backend",
      featured: false,
      description:
        "Connect your product seamlessly with third-party payment gateways, CRMs, email services, and custom webhooks.",
      deliverables: [
        "Third-Party APIs",
        "Webhook Pipelines",
        "Error Monitoring",
      ],
      icon: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
    },
    {
      title: "Performance & SEO Audits",
      tag: "Optimization",
      featured: false,
      description:
        "Deep Core Web Vitals tuning, bundle size reduction, and semantic structure fixes to boost rankings and retention.",
      deliverables: ["95+ Lighthouse Score", "Code Splitting", "Technical SEO"],
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    },
  ];

  const workflow = [
    {
      step: "01",
      title: "Discovery",
      desc: "Align on goals, scope, target audience, and technical requirements.",
    },
    {
      step: "02",
      title: "Design",
      desc: "Craft clean wireframes, visual direction, and responsive layouts.",
    },
    {
      step: "03",
      title: "Build",
      desc: "Develop modular React components and reliable backend integrations.",
    },
    {
      step: "04",
      title: "Launch",
      desc: "Test across devices, optimize speed, and deploy smoothly to production.",
    },
  ];

  const faqs = [
    {
      q: "How long does a typical website or web app take?",
      a: "A focused portfolio or landing page typically takes 1–2 weeks, while a custom full-stack web application takes 3–6 weeks depending on integrations and features.",
    },
    {
      q: "Will my website look great on mobile phones and tablets?",
      a: "Yes. Every layout is engineered mobile-first with Tailwind CSS and tested across phones, tablets, laptops, and large desktop monitors.",
    },
    {
      q: "Do you provide source code and deployment assistance?",
      a: "Absolutely. You receive full ownership of the clean Git repository along with deployment setup on Vercel, Netlify, or your preferred cloud host.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-red-600 selection:text-white">
      <main className="flex-grow relative -mt-20 pt-28 pb-20 overflow-x-hidden">
        {/* Subtle Architectural Graph Grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Ambient Glow */}
        <div className="pointer-events-none absolute top-12 right-1/4 w-[34rem] h-72 bg-red-500/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header - Slides in from Left */}
          <ScrollSlide direction="left" className="max-w-2xl mb-14">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-red-50 text-red-600 border border-red-100 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
              What I Offer
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 leading-[1.1]">
              Services built for{" "}
              <span className="bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">
                modern digital growth.
              </span>
            </h1>
            <p className="mt-3 text-slate-600 text-base sm:text-lg">
              From expressive UI design to full-stack React applications, I help
              turn ambitious ideas into fast, reliable products.
            </p>
          </ScrollSlide>

          {/* 6-Card Services Grid - Alternates Left & Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {services.map((service, idx) => (
              <ScrollSlide
                key={service.title}
                direction={idx % 2 === 0 ? "left" : "right"}
                delay={(idx % 3) * 100}
                className="flex"
              >
                <div
                  className={`w-full p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                    service.featured
                      ? "bg-slate-950 text-white border-slate-800 shadow-xl"
                      : "bg-white/95 backdrop-blur-md text-slate-900 border-slate-200/80 shadow-sm hover:shadow-xl hover:border-red-200 hover:-translate-y-1"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <div
                        className={`w-11 h-11 rounded-2xl flex items-center justify-center ${
                          service.featured
                            ? "bg-red-600/20 border border-red-500/30 text-red-400"
                            : "bg-red-50 text-red-600"
                        }`}
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={service.icon}
                          />
                        </svg>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-[11px] font-bold ${
                          service.featured
                            ? "bg-red-600 text-white"
                            : "bg-slate-100 text-slate-700"
                        }`}
                      >
                        {service.tag}
                      </span>
                    </div>

                    <h2 className="text-xl font-extrabold">{service.title}</h2>
                    <p
                      className={`mt-2.5 text-sm leading-relaxed ${
                        service.featured ? "text-slate-300" : "text-slate-600"
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>

                  <div
                    className={`mt-6 pt-5 border-t space-y-2 ${
                      service.featured ? "border-slate-800" : "border-slate-100"
                    }`}
                  >
                    {service.deliverables.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-xs font-semibold"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                        <span
                          className={
                            service.featured
                              ? "text-slate-200"
                              : "text-slate-700"
                          }
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollSlide>
            ))}
          </div>

          {/* 4-Step Process Strip */}
          <ScrollSlide
            direction="right"
            className="mb-20 p-7 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-sm"
          >
            <div className="max-w-xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                How We Work
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mt-1">
                A simple, transparent workflow
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {workflow.map((item, idx) => (
                <ScrollSlide
                  key={item.step}
                  direction={idx % 2 === 0 ? "left" : "right"}
                  delay={idx * 100}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70"
                >
                  <span className="text-xs font-black px-2.5 py-1 rounded-full bg-slate-950 text-white">
                    {item.step}
                  </span>
                  <h3 className="text-lg font-bold text-slate-950 mt-3">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                    {item.desc}
                  </p>
                </ScrollSlide>
              ))}
            </div>
          </ScrollSlide>

          {/* Compact FAQ Accordion - Alternating Left & Right */}
          <div className="max-w-3xl mx-auto">
            <ScrollSlide direction="left">
              <h2 className="text-2xl font-extrabold text-slate-950 text-center mb-6">
                Frequently Asked Questions
              </h2>
            </ScrollSlide>
            <div className="space-y-3">
              {faqs.map((item, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <ScrollSlide
                    key={item.q}
                    direction={idx % 2 === 0 ? "left" : "right"}
                    delay={idx * 80}
                  >
                    <div className="rounded-2xl bg-white border border-slate-200/80 overflow-hidden">
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 cursor-pointer"
                      >
                        <span>{item.q}</span>
                        <span className="text-red-600 text-lg leading-none">
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-4 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                          {item.a}
                        </div>
                      )}
                    </div>
                  </ScrollSlide>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Services;
