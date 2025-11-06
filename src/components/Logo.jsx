import React from 'react';

export default function Logo({ className = '', size = 40, withText = true }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-label="Hackora logo"
      >
        <defs>
          <linearGradient id="hackoraGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="50%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
        </defs>
        <rect x="6" y="6" width="52" height="52" rx="14" fill="url(#hackoraGradient)" />
        <path d="M18 42V22h6v6h16v-6h6v20h-6v-8H24v8h-6z" fill="white" opacity="0.95" />
      </svg>
      {withText && (
        <div className="leading-tight">
          <div className="text-2xl font-extrabold tracking-tight text-white">hackora</div>
          <div className="text-xs text-white/70 -mt-0.5">DSA • System Design • FAANG</div>
        </div>
      )}
    </div>
  );
}
