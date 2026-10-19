import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

/**
 * Renders the Jyoti Constructions ("JC") emblem.
 * Attempts to load /logo.png if provided in public/, and seamlessly falls back
 * to a faithful, razor-sharp SVG recreation of the official JC logo (bold italic
 * cobalt blue "JC" monogram with the signature black and blue orbital swooshes).
 */
export function Logo({ className = 'w-11 h-9', variant = 'light' }: LogoProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className={`relative inline-flex items-center justify-center rounded bg-white border ${
        variant === 'dark' ? 'border-slate-200 shadow-2xs' : 'border-white/15'
      } overflow-hidden shrink-0 ${className}`}
    >
      {!imgError ? (
        <img
          src="/logo.png"
          alt="Jyoti Constructions Logo"
          referrerPolicy="no-referrer"
          onError={() => setImgError(true)}
          className="w-full h-full object-contain p-0.5"
        />
      ) : (
        <svg
          viewBox="0 0 120 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full p-1"
          aria-label="Jyoti Constructions JC Emblem"
        >
          {/* Upper right blue orbital crest */}
          <path
            d="M72 20C88 9 109 10 113 24C114 27 113 30 112 32C111 22 95 16 72 20Z"
            fill="#1D4ED8"
          />
          {/* Bold italic 'J' in Cobalt Blue */}
          <path
            d="M45 22H59L49 58C46.5 67 39 72 27 72H10L18 59H28C33 59 35.5 56.5 37 51L45 22Z"
            fill="#1E40AF"
          />
          {/* Bold italic 'C' in Cobalt Blue */}
          <path
            d="M99 27L94 40H74C65 40 59 45 57.5 52C56 59 60.5 63 69 63H84L74 74H62C46 74 39 65 42 51C45 36 58 26 77 26H99Z"
            fill="#1E40AF"
          />
          {/* Dynamic sweeping black swoosh arc */}
          <path
            d="M101 18C112 22 114 38 103 55L109 55L98 67L89 67C74 82 52 88 41 80C34 75 34 65 38 56C38 66 44 72 56 71C72 70 91 55 98 37C102 27 100 20 94 18H101Z"
            fill="#0F172A"
          />
        </svg>
      )}
    </div>
  );
}
