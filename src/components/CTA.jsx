import React from 'react';
import { Mail } from 'lucide-react';

export default function CTA() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = new FormData(form).get('email');
    alert(`Thanks! We'll reach out at ${email}`);
    form.reset();
  };

  return (
    <section id="cta" className="bg-slate-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="rounded-2xl bg-gradient-to-br from-fuchsia-600 to-indigo-600 p-[1px] shadow-2xl">
          <div className="rounded-2xl bg-slate-900 p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Ready to level up with Hackora?</h3>
              <p className="mt-3 text-white/80">Get early access, weekly interview problems, and curated design prompts.</p>
            </div>
            <form onSubmit={handleSubmit} className="w-full md:w-auto flex-1 max-w-xl flex gap-3">
              <div className="relative flex-1">
                <Mail className="h-5 w-5 text-white/60 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-800/60 border border-white/10 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
                />
              </div>
              <button type="submit" className="rounded-lg bg-white text-slate-900 font-semibold px-5 py-3 hover:opacity-90 transition">
                Join
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
