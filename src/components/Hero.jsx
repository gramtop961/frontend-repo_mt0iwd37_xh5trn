import React from 'react';
import { Rocket, Star } from 'lucide-react';
import Logo from './Logo';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 text-white">
      <div className="absolute inset-0 opacity-40 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -left-24 h-72 w-72 bg-fuchsia-500 blur-3xl rounded-full" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 bg-cyan-400 blur-3xl rounded-full" />
      </div>
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col items-center text-center">
          <Logo className="mb-8" size={56} />
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl">
            Learn System Design and DSA to crack top companies
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-emerald-300">
              {' '}FAANG & beyond
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl">
            Hackora is your guided path to master the fundamentals, ace interviews, and build the confidence to land offers from elite tech teams.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <a href="#curriculum" className="inline-flex items-center gap-2 rounded-lg bg-white text-slate-900 px-6 py-3 font-semibold shadow-lg hover:shadow-xl transition">
              <Rocket className="h-5 w-5" /> Start Learning
            </a>
            <a href="#tracks" className="inline-flex items-center gap-2 rounded-lg bg-slate-800/60 backdrop-blur px-6 py-3 font-semibold hover:bg-slate-700/60 transition">
              <Star className="h-5 w-5 text-yellow-300" /> Explore Tracks
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
