import React, { useState, useEffect, useRef } from 'react';

// Reusable Scroll Reveal Component using useEffect & IntersectionObserver
function RevealOnScroll({ children, direction = 'left', delay = 0, className = '' }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Triggers once and stays visible
        }
      },
      { threshold: 0.15 } // Triggers when 15% of the component enters the viewport
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const initialTransform =
    direction === 'left'
      ? '-translate-x-12'
      : direction === 'right'
      ? 'translate-x-12'
      : 'translate-y-8';

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${initialTransform}`
      } ${className}`}
    >
      {children}
    </div>
  );
}

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Full-Stack Web App',
    budget: '$1k – $3k',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const serviceOptions = [
    'Full-Stack Web App',
    'UI/UX Design',
    'Frontend Modernization',
    'Collaboration / Hiring',
  ];

  const budgetOptions = ['< $1k', '$1k – $3k', '$3k – $5k', '$5k+'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hello@alexcarter.dev');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-red-600 selection:text-white">
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
        <div className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-[36rem] h-72 bg-red-500/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Page Header - Slides in from Left */}
          <RevealOnScroll direction="left" className="max-w-2xl mb-12">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-red-50 text-red-600 border border-red-100 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
              Get In Touch
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 leading-[1.1]">
              Let&apos;s build something{' '}
              <span className="bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">
                remarkable together.
              </span>
            </h1>
            <p className="mt-3 text-slate-600 text-base sm:text-lg">
              Have a project idea, freelance inquiry, or just want to say hello? Fill out the form and I&apos;ll get back to you within 24 hours.
            </p>
          </RevealOnScroll>

          {/* Split Contact Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Dark Info Card (5 cols) - Slides in from Left */}
            <RevealOnScroll
              direction="left"
              delay={150}
              className="lg:col-span-5 rounded-3xl bg-slate-950 text-white p-7 sm:p-10 shadow-2xl border border-slate-800 relative overflow-hidden flex flex-col justify-between"
            >
              <div className="pointer-events-none absolute -bottom-16 -right-16 w-56 h-56 bg-red-600/20 rounded-full blur-3xl" />

              <div className="relative z-10 space-y-8">
                <div>
                  <h2 className="text-2xl font-extrabold">Contact Information</h2>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                    Prefer direct email or social channels? Reach out using any of the details below.
                  </p>
                </div>

                {/* Direct Contact Details */}
                <div className="space-y-4">
                  {/* Email with One-Click Copy */}
                  <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-red-600/20 border border-red-500/30 text-red-400 flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="truncate">
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                          Email
                        </p>
                        <p className="text-sm font-bold text-white truncate">
                          mahatoakash5618@gmail.com
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="shrink-0 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white/10 hover:bg-red-600 text-white transition cursor-pointer"
                    >
                      {copied ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  {/* Mobile */}
                  <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-red-600/20 border border-red-500/30 text-red-400 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                        Mobile No
                      </p>
                      <p className="text-sm font-bold text-white"> 7061311604</p>
                    </div>
                  </div>

                  {/* Response Time */}
                  <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-red-600/20 border border-red-500/30 text-red-400 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                        Response Time
                      </p>
                      <p className="text-sm font-bold text-white">Within 24 Hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links Row */}
              <div className="relative z-10 pt-8 mt-8 border-t border-slate-800">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                  Connect Online
                </p>
                <div className="flex items-center gap-3">
                  {[
                    {
                      name: 'GitHub',
                      href: '#',
                      path: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
                    },
                    {
                      name: 'X / Twitter',
                      href: '#',
                      path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
                    },
                    {
                      name: 'LinkedIn',
                      href: '#',
                      path: 'M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z',
                    },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      aria-label={social.name}
                      className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-red-500/50 transition"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d={social.path} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </RevealOnScroll>

            {/* Right Interactive Contact Form Card (7 cols) - Slides in from Right */}
            <RevealOnScroll
              direction="right"
              delay={300}
              className="lg:col-span-7 rounded-3xl bg-white/95 backdrop-blur-md p-7 sm:p-10 border border-slate-200/80 shadow-xl shadow-slate-900/5"
            >
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
                    Message Sent!
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base max-w-md leading-relaxed">
                    Thanks for reaching out, <span className="font-bold text-slate-900">{formData.name}</span>. I&apos;ve received your inquiry regarding{' '}
                    <span className="font-semibold text-red-600">{formData.service}</span> and will reply to{' '}
                    <span className="font-semibold text-slate-900">{formData.email}</span> shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        service: 'Full-Stack Web App',
                        budget: '$1k – $3k',
                        message: '',
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full text-sm font-semibold text-slate-900 bg-slate-100 hover:bg-slate-200 transition cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Service Selector Pills */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
                      What can I help you with?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {serviceOptions.map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, service: option }))}
                          className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border transition-all cursor-pointer ${
                            formData.service === option
                              ? 'bg-slate-950 text-white border-slate-950 shadow-sm'
                              : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Email Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-950 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-red-500 transition"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email@.com"
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-950 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-red-500 transition"
                      />
                    </div>
                  </div>

                  {/* Project Details Textarea */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me a bit about your goals, timeline, and key features..."
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-950 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-red-500 transition resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 shadow-lg shadow-red-600/20 active:scale-95 transition-all duration-200 cursor-pointer"
                  >
                    <span>Send Message</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </form>
              )}
            </RevealOnScroll>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Contact;