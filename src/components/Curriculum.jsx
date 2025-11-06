import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const modules = [
  {
    title: 'DSA Foundations',
    items: ['Big-O, recursion, patterns', 'Arrays, strings, hash maps', 'Stacks, queues, linked lists'],
  },
  {
    title: 'Advanced DSA',
    items: ['Binary search, heaps, tries', 'Graphs, BFS/DFS, shortest paths', 'Dynamic programming essentials'],
  },
  {
    title: 'System Design Essentials',
    items: ['Caching, sharding, replication', 'Consistency models & CAP', 'Designing scalable services'],
  },
  {
    title: 'End-to-End Projects',
    items: ['Design URL shortener', 'Real-time chat system', 'Newsfeed & rate limiter'],
  },
];

export default function Curriculum() {
  return (
    <section id="curriculum" className="bg-slate-50">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">A focused, interview-first curriculum</h2>
            <p className="mt-4 text-slate-600">Each module is crafted with real interview signals and includes cheat-sheets, drills, and checkpoints.</p>
            <div className="mt-8 space-y-6">
              {modules.map((m) => (
                <div key={m.title} className="rounded-xl bg-white p-6 border border-slate-200">
                  <h3 className="text-lg font-semibold text-slate-900">{m.title}</h3>
                  <ul className="mt-3 space-y-2">
                    {m.items.map((it) => (
                      <li key={it} className="flex items-start gap-2 text-slate-700">
                        <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-indigo-600 via-fuchsia-500 to-emerald-500 p-[1px] shadow-xl">
            <div className="rounded-2xl bg-white p-8">
              <h3 className="text-xl font-semibold text-slate-900">What you’ll build & articulate</h3>
              <p className="mt-2 text-slate-600">Practice designing systems and coding solutions with clear tradeoff discussions.</p>
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-lg border border-slate-200 p-4">
                  <div className="font-semibold">System diagrams</div>
                  <div className="text-slate-600 mt-1">From API to storage layers</div>
                </div>
                <div className="rounded-lg border border-slate-200 p-4">
                  <div className="font-semibold">Complexity analysis</div>
                  <div className="text-slate-600 mt-1">Time/space tradeoffs</div>
                </div>
                <div className="rounded-lg border border-slate-200 p-4">
                  <div className="font-semibold">Patterns & heuristics</div>
                  <div className="text-slate-600 mt-1">For DP/graphs/greedy</div>
                </div>
                <div className="rounded-lg border border-slate-200 p-4">
                  <div className="font-semibold">Mock interview drills</div>
                  <div className="text-slate-600 mt-1">With feedback loops</div>
                </div>
              </div>
              <a href="#cta" className="mt-8 inline-flex items-center justify-center w-full rounded-lg bg-indigo-600 text-white py-3 font-semibold hover:bg-indigo-700 transition">Join the waitlist</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
