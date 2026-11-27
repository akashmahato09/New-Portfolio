import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { Link as ScrollLink } from 'react-scroll';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="relative top-0 -mt-5 bg-slate-950 text-slate-300 overflow-hidden border-t border-slate-800/80">
      {/* Subtle Top Gradient Accent Line */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-80" />

      {/* Ambient Glow Effect */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[36rem] h-48 bg-red-600/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-14 pb-8 relative z-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Column (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-flex items-center gap-2 group">
              <img
                src={logo}
                alt="My App Logo"
                className="h-9 w-auto object-contain brightness-110 transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Crafting seamless digital experiences with modern design and reliable engineering. Built to scale with your ideas.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
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
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-red-500/50 hover:bg-slate-800/80 transition-all duration-200"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links (2 cols on lg) */}
<div className="lg:col-span-2 space-y-3">
  <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
    Navigation
  </h3>

  <ul className="space-y-2.5 text-sm">
    {[
      { name: 'Home', path: 'home', scroll: true },
      { name: 'About', path: 'about', scroll: true },
      { name: 'Contact', path: 'contact', scroll: true },
    ].map((item) => (
      <li key={item.name}>
        <ScrollLink
          to={item.path}
          smooth={true}
          duration={700}
          offset={-80}
          className="cursor-pointer text-slate-400 hover:text-red-400 transition-colors duration-200"
        >
          {item.name}
        </ScrollLink>
      </li>
    ))}
  </ul>
</div>

          {/* Resources / Legal Links (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">Legal</h3>
            <ul className="space-y-2.5 text-sm">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((label) => (
                <li key={label}>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-red-400 transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Card (4 cols on lg) */}
          <div className="lg:col-span-4">
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800/90 space-y-3">
              <h3 className="text-sm font-semibold text-white">Stay in the loop</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Get product updates, tips, and news delivered straight to your inbox.
              </p>

              {subscribed ? (
                <div className="py-2.5 px-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
                  Thanks for subscribing!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 pt-1">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-red-500 transition"
                  />
                  <button
                    type="submit"
                    className="shrink-0 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 shadow-md shadow-red-600/20 active:scale-95 transition-all duration-200"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} My App. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}