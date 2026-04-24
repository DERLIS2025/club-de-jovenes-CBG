"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const BACKGROUND_IMAGE_URL = "/bienvenida-bg.jpg";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transform-gpu transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

const secondaryObjectives = [
  {
    title: "Fomentar la unidad espiritual del grupo",
    description:
      "Promover vínculos centrados en Cristo que trasciendan lo superficial y fortalezcan la vida en comunidad.",
    icon: "🤝",
  },
  {
    title: "Profundizar la comunión cristiana",
    description:
      "Generar espacios intencionales de convivencia, conversación y edificación mutua entre los participantes.",
    icon: "🕊️",
  },
  {
    title: "Alcanzar con el evangelio a invitados e inconstantes",
    description:
      "Presentar el mensaje de salvación de forma clara, directa y relevante a quienes no tienen una fe firme o son nuevos.",
    icon: "📖",
  },
  {
    title: "Consolidar convicciones doctrinales",
    description:
      "Afirmar la comprensión bíblica sobre la gravedad del pecado, la necesidad de salvación y el llamado a la santidad.",
    icon: "🛡️",
  },
  {
    title: "Llamar a una vida rendida a Cristo",
    description:
      "Desafiar a los jóvenes a una entrega total, evidenciada en obediencia, compromiso y transformación práctica.",
    icon: "🔥",
  },
  {
    title: "Facilitar relaciones sanas y edificantes",
    description:
      "Propiciar un ambiente donde surjan amistades genuinas y relaciones que honren a Dios.",
    icon: "🌱",
  },
];

export default function BienvenidaPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-slate-100">

      {/* 🔥 IMAGEN DE FONDO */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BACKGROUND_IMAGE_URL})` }}
      />

      {/* 🔥 OVERLAY OSCURO PRO */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-14 sm:px-10 sm:py-20">

        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-200/80 sm:text-sm">
            Jóvenes de CBG
          </p>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Bienvenidos al Campamento 2026
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-200 sm:text-lg">
            Un espacio preparado para escuchar la Palabra de Dios, examinar la
            fe y responder con arrepentimiento genuino.
          </p>
        </Reveal>

        <Reveal>
          <section className="rounded-3xl border border-white/10 bg-black/40 p-8 shadow-2xl backdrop-blur-md sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-200">
              Objetivo principal
            </p>

            <p className="mt-5 text-lg text-slate-100 sm:text-xl">
              Exponer a cada acampante al evangelio de Jesucristo.
            </p>

            <blockquote className="mt-8 rounded-2xl border border-sky-200/30 bg-slate-900/60 px-6 py-5 text-center">
              <p className="text-lg font-semibold text-sky-100">
                “Examinaos a vosotros mismos si estáis en la fe.”
              </p>
              <footer className="mt-2 text-sm text-sky-200/80">
                1 Corintios 13:5
              </footer>
            </blockquote>
          </section>
        </Reveal>

        <section>
          <Reveal>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white">
                Objetivos específicos
              </h2>
            </div>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
            {secondaryObjectives.map((obj, index) => (
              <Reveal key={obj.title} delay={index * 100}>
                <article className="rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-md transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{obj.icon}</span>
                    <span className="text-sm text-sky-200">
                      {index + 1}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl text-white">
                    {obj.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-300">
                    {obj.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <Reveal>
          <section className="rounded-3xl border border-white/10 bg-black/40 p-8 text-center backdrop-blur-md">
            <h2 className="text-2xl font-bold text-white">
              Sigamos adelante con propósito
            </h2>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row justify-center">
              <Link
                href="/registro"
                className="rounded-xl bg-sky-500 px-6 py-3 font-semibold text-slate-950 hover:bg-sky-400 transition"
              >
                Inscribirme
              </Link>

              <Link
                href="/"
                className="rounded-xl border border-slate-500 px-6 py-3 text-white hover:bg-slate-800 transition"
              >
                Volver
              </Link>
            </div>
          </section>
        </Reveal>

      </div>
    </main>
  );
}
