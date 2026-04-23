"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

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

    if (!node) {
      return;
    }

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
      "Propiciar un ambiente donde surjan amistades genuinas y relaciones que honren a Dios, ya sea en la forma de amistad bíblica o, si el Señor lo permite, vínculos orientados al matrimonio.",
    icon: "🌱",
  },
];

export default function BienvenidaPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.15),transparent_45%),radial-gradient(circle_at_85%_0%,rgba(15,23,42,0.65),transparent_40%)]" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-14 sm:px-10 sm:py-20">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-200/80 sm:text-sm">
            Club de Jóvenes CBG
          </p>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Bienvenidos al Campamento 2026
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-200 sm:text-lg">
            Un espacio preparado para escuchar la Palabra de Dios, examinar la
            fe que profesamos y responder con arrepentimiento genuino y fe
            activa.
          </p>
        </Reveal>

        <Reveal>
          <section className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-900/40 backdrop-blur-sm sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-200">
              Objetivo principal
            </p>

            <p className="mt-5 text-lg leading-relaxed text-slate-100 sm:text-xl">
              Exponer a cada acampante al evangelio de Jesucristo.
            </p>

            <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
              Por medio de una confrontación clara en los materiales, en el
              trato personal, en los acercamientos y en el testimonio coherente
              de todo el campamento, buscamos que cada participante examine la
              autenticidad de su fe, evalúe sus convicciones y responda con
              arrepentimiento genuino y fe activa.
            </p>

            <blockquote className="mt-8 rounded-2xl border border-sky-200/30 bg-slate-900/60 px-6 py-5 text-center">
              <p className="text-lg font-semibold text-sky-100 sm:text-xl">
                “Examinaos a vosotros mismos si estáis en la fe.”
              </p>
              <footer className="mt-2 text-sm font-medium uppercase tracking-[0.15em] text-sky-200/80">
                1 Corintios 13:5
              </footer>
            </blockquote>
          </section>
        </Reveal>

        <section>
          <Reveal>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Objetivos secundarios
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
                Enfoques prácticos para que cada joven crezca en fe, comunión y
                compromiso diario con Cristo.
              </p>
            </div>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
            {secondaryObjectives.map((objective, index) => (
              <Reveal key={objective.title} delay={index * 90}>
                <article className="h-full rounded-2xl border border-white/10 bg-slate-900/65 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/60">
                  <div className="flex items-center gap-3">
                    <span
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-300/15 text-lg"
                      aria-hidden="true"
                    >
                      {objective.icon}
                    </span>
                    <span className="text-sm font-semibold text-sky-200">
                      {index + 1}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-semibold leading-snug text-white">
                    {objective.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                    {objective.description}
                  </p>

                  {index === 4 ? (
                    <p className="mt-4 rounded-xl bg-slate-800/70 px-4 py-3 text-sm font-medium text-slate-200">
                      En otras palabras, que la fe que profesen sea real en su
                      día a día.
                    </p>
                  ) : null}
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <Reveal>
          <section className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-2xl shadow-slate-900/40 sm:p-10">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Sigamos adelante con propósito
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Estamos orando para que este campamento produzca fruto duradero en
              cada vida.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/registro"
                className="inline-flex w-full items-center justify-center rounded-xl bg-sky-500 px-6 py-3 text-base font-semibold text-slate-950 transition-all duration-300 hover:scale-[1.02] hover:bg-sky-400 sm:w-auto"
              >
                Inscribirme al campamento
              </Link>
              <Link
                href="/"
                className="inline-flex w-full items-center justify-center rounded-xl border border-slate-500/50 px-6 py-3 text-base font-semibold text-slate-100 transition-all duration-300 hover:scale-[1.02] hover:border-slate-300/70 hover:bg-slate-800/80 sm:w-auto"
              >
                Volver al inicio
              </Link>
            </div>
          </section>
        </Reveal>
      </div>
    </main>
  );
}
