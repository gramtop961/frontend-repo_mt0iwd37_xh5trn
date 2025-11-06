import React from 'react';
import { Code2, Cpu, Network, Brain } from 'lucide-react';

const tracks = [
  {
    icon: Code2,
    title: 'Data Structures & Algorithms',
    desc: 'Master patterns, complexity, and problems from arrays to graphs with step-by-step explanations.',
  },
  {
    icon: Network,
    title: 'System Design',
    desc: 'From scalability and consistency to real-world architectures used at FAANG-scale.',
  },
  {
    icon: Cpu,
    title: 'Low-level Design',
    desc: 'Build object-oriented designs, APIs, and clean abstractions tested in interviews.',
  },
  {
    icon: Brain,
    title: 'Interview Readiness',
    desc: 'Mock interviews, behavioral prep, and strategy to communicate like a pro.',
  },
];

export default function Tracks() {
  return (
    <section id="tracks" className="relative bg-white">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Choose your path</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">Structured, project-based learning that builds real problem-solving muscles.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tracks.map((t) => (
            <div key={t.title} className="rounded-xl border border-slate-200 p-6 hover:shadow-xl transition bg-white">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-fuchsia-500 to-cyan-400 text-white flex items-center justify-center mb-4">
                <t.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{t.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
