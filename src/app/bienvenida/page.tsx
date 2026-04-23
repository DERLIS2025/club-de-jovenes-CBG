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
      className={`transition-all duration-700 ${
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
    <main className="min-h-screen bg-slate-950 text-white px-6 py-14">
      <div className="mx-auto max-w-6xl space-y-16">

        {/* HERO */}
        <Reveal className="text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-sky-200">
            Club de Jóvenes CBG
          </p>

          <h1 className="mt-6 text-4xl font-extrabold sm:text-5xl">
            Bienvenidos al Campamento 2026
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-slate-300">
            Un espacio preparado para examinar tu fe, confrontar tu vida con la
            Palabra de Dios y responder con arrepentimiento genuino.
          </p>
        </Reveal>

        {/* OBJETIVO PRINCIPAL */}
        <Reveal>
          <div className="rounded-3xl bg-white/5 p-8 border border-white/10">
            <h2 className="text-xl text-sky-300 font-semibold uppercase tracking-wider">
              Objetivo principal
            </h2>

            <p className="mt-4 text-lg">
              Exponer a cada acampante al evangelio de Jesucristo.
            </p>

            <p className="mt-4 text-slate-300">
              Que cada participante examine la autenticidad de su fe, evalúe sus
              convicciones y responda con arrepentimiento genuino y fe activa.
            </p>

            <blockquote className="mt-6 text-center text-sky-200 italic">
              “Examinaos a vosotros mismos si estáis en la fe.”
              <br />
              <span className="text-sm text-sky-300">
                1 Corintios 13:5
              </span>
            </blockquote>
          </div>
        </Reveal>

        {/* OBJETIVOS SECUNDARIOS */}
        <div>
          <Reveal className="text-center">
            <h2 className="text-3xl font-bold">Objetivos secundarios</h2>
          </Reveal>

          <div className="grid mt-8 gap-6 md:grid-cols-2">
            {secondaryObjectives.map((item, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:scale-[1.02] transition">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                  </div>

                  <p className="mt-3 text-slate-300">
                    {item.description}
                  </p>

                  {i === 4 && (
                    <p className="mt-4 text-sm text-slate-200">
                      En otras palabras, que la fe que profesen sea real en su día a día.
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* CTA FINAL */}
        <Reveal>
          <div className="text-center mt-10">
            <h3 className="text-2xl font-bold">
              Continuemos este camino
            </h3>

            <div className="mt-6 flex gap-4 justify-center">
              <Link
                href="/"
                className="px-6 py-3 border border-white/20 rounded-xl hover:bg-white/10"
              >
                Volver
              </Link>

              <Link
                href="/registro"
                className="px-6 py-3 bg-sky-400 text-black font-semibold rounded-xl hover:bg-sky-300"
              >
                Continuar
              </Link>
            </div>
          </div>
        </Reveal>

      </div>
    </main>
  );
}