import React from 'react';
import Hero from './components/Hero';
import Tracks from './components/Tracks';
import Curriculum from './components/Curriculum';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-slate-200/60">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 to-indigo-600">hackora</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#tracks" className="text-slate-600 hover:text-slate-900">Tracks</a>
            <a href="#curriculum" className="text-slate-600 hover:text-slate-900">Curriculum</a>
            <a href="#cta" className="text-slate-600 hover:text-slate-900">Join</a>
            <a
              href="#cta"
              className="inline-flex items-center rounded-lg bg-slate-900 text-white px-4 py-2 font-semibold hover:bg-slate-800"
            >
              Get Started
            </a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Tracks />
        <Curriculum />
        <CTA />
      </main>

      <footer className="border-t border-slate-200">
        <div className="container mx-auto px-6 py-8 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between">
          <div>© {new Date().getFullYear()} hackora. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
            <a href="#" className="hover:text-slate-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
