"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const YOUTUBE_VIDEO_ID = "_EpTnktKT-o";

const YOUTUBE_BACKGROUND_URL = `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&controls=0&loop=1&playlist=${YOUTUBE_VIDEO_ID}&playsinline=1&modestbranding=1&rel=0&showinfo=0`;

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#1e3a5c] text-white">
      {/* Video de fondo */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <iframe
          src={YOUTUBE_BACKGROUND_URL}
          title="Video de fondo Campamento 2026"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-screen min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Overlay más suave, no tan oscuro */}
      <div
        className="absolute inset-0 bg-[#1e3a5c]/55"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/35"
        aria-hidden="true"
      />

      <section
        className={`relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-6 text-center transition-all duration-1000 sm:px-8 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.35em] text-sky-100/90 sm:text-base">
          Jóvenes de C.B.G
        </p>

        <h1 className="text-5xl font-semibold leading-tight drop-shadow-[0_8px_28px_rgba(0,0,0,0.55)] sm:text-6xl md:text-7xl lg:text-8xl">
          Campamento 2026
        </h1>

        <p className="mt-4 max-w-2xl text-base font-medium text-slate-100/90 sm:text-xl md:text-2xl">
          Tiempo con propósito
        </p>

        <Link
          href="/campamento"
          className="mt-10 inline-flex items-center justify-center rounded-xl bg-sky-500 px-8 py-4 text-lg font-semibold text-slate-950 shadow-[0_12px_28px_rgba(14,165,233,0.38),0_0_28px_rgba(56,189,248,0.3)] transition-all duration-300 hover:scale-105 hover:bg-sky-400 hover:shadow-[0_14px_32px_rgba(56,189,248,0.5),0_0_34px_rgba(125,211,252,0.38)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        >
          Ver campamento
        </Link>
      </section>
    </main>
  );
}
