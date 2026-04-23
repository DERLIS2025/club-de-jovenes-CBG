"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const BACKGROUND_IMAGE_URL = "/campamento-bg.jpg";

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BACKGROUND_IMAGE_URL})` }}
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/80"
        aria-hidden="true"
      />

      <section
        className={`relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-6 text-center transition-all duration-1000 sm:px-8 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-sky-200/80 sm:text-base">
          Club de Jóvenes CBG
        </p>

        <h1 className="text-5xl font-extrabold leading-tight drop-shadow-[0_8px_28px_rgba(0,0,0,0.7)] sm:text-6xl md:text-7xl lg:text-8xl">
          Campamento 2026
        </h1>

        <p className="mt-4 max-w-2xl text-base font-medium text-slate-100/90 sm:text-xl md:text-2xl">
          Tiempo con propósito
        </p>

        <Link
          href="/bienvenida"
          className="mt-10 inline-flex items-center justify-center rounded-xl bg-sky-500 px-8 py-4 text-lg font-bold text-slate-950 shadow-[0_12px_28px_rgba(14,165,233,0.38),0_0_28px_rgba(56,189,248,0.3)] transition-all duration-300 hover:scale-105 hover:bg-sky-400 hover:shadow-[0_14px_32px_rgba(56,189,248,0.5),0_0_34px_rgba(125,211,252,0.38)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        >
          Iniciar sesión
        </Link>
      </section>
    </main>
  );
}
