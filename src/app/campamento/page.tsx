"use client";

import Link from "next/link";
import { ReactNode, useEffect, useRef, useState } from "react";

type Remera = {
  nombre: string;
  descripcion: string;
  tono: string;
};

type Equipo = {
  nombre: string;
  descripcion: string;
  color: string;
  borde: string;
};

type Dia = {
  dia: string;
  actividades: string[];
};

const REMERAS: Remera[] = [
  {
    nombre: "Remera oficial blanca",
    descripcion: "Diseño clásico del campamento en base clara, cómodo y versátil.",
    tono: "from-slate-100 to-slate-300",
  },
  {
    nombre: "Remera oficial negra",
    descripcion: "Versión premium en negro con detalles del evento y tema central.",
    tono: "from-slate-700 to-slate-900",
  },
  {
    nombre: "Remera por equipo",
    descripcion: "Modelo especial por color de equipo para actividades y dinámicas.",
    tono: "from-sky-500 to-emerald-500",
  },
];

const EQUIPOS: Equipo[] = [
  {
    nombre: "Equipo Azul",
    descripcion: "Pasión por servir con fidelidad y compañerismo.",
    color: "bg-blue-500/20",
    borde: "border-blue-300/35",
  },
  {
    nombre: "Equipo Rojo",
    descripcion: "Compromiso, entrega y entusiasmo para cada desafío.",
    color: "bg-rose-500/20",
    borde: "border-rose-300/35",
  },
  {
    nombre: "Equipo Verde",
    descripcion: "Crecimiento, vida espiritual y apoyo mutuo.",
    color: "bg-emerald-500/20",
    borde: "border-emerald-300/35",
  },
  {
    nombre: "Equipo Amarillo",
    descripcion: "Gozo, creatividad y actitud positiva en unidad.",
    color: "bg-amber-500/20",
    borde: "border-amber-300/35",
  },
];

const CRONOGRAMA: Dia[] = [
  { dia: "Viernes", actividades: ["Llegada", "Apertura", "Cena", "Plenaria 1"] },
  {
    dia: "Sábado",
    actividades: ["Devocional", "Juegos", "Talleres", "Plenaria 2", "Fogata"],
  },
  { dia: "Domingo", actividades: ["Devocional", "Culto", "Almuerzo", "Cierre"] },
];

export default function CampamentoPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:px-10">
        <Reveal>
          <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950/80 p-8 shadow-[0_20px_60px_rgba(2,6,23,0.5)] sm:p-10">
            <div className="pointer-events-none absolute -top-20 right-0 h-56 w-56 rounded-full bg-sky-400/20 blur-3xl" />
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-200/80">
              Campamento CBG
            </p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Campamento Jóvenes CBG 2026
            </h1>
            <h2 className="mt-2 text-xl font-semibold text-sky-200 sm:text-2xl">
              Tiempo con propósito
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
              Un campamento diseñado para escuchar la Palabra de Dios,
              fortalecer la comunión y vivir una experiencia centrada en Cristo.
            </p>
            <Link
              href="/reglamento"
              className="mt-8 inline-flex items-center justify-center rounded-2xl bg-sky-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-sky-300"
            >
              Leer reglamento
            </Link>
          </section>
        </Reveal>

        <Reveal delay={60}>
          <section className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300/85">
              Tema central
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
              Tema del campamento
            </h2>
            <p className="mt-6 text-2xl font-semibold text-sky-100 sm:text-3xl">
              Una fe examinada, una vida rendida a Cristo.
            </p>
            <blockquote className="mt-6 border-l-4 border-sky-300/60 pl-5 text-slate-300">
              <p className="text-lg italic">“Examinaos a vosotros mismos si estáis en la fe.”</p>
              <footer className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                1 Corintios 13:5
              </footer>
            </blockquote>
          </section>
        </Reveal>

        <section className="mt-12">
          <Reveal>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Remeras oficiales del campamento
            </h2>
          </Reveal>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {REMERAS.map((remera, index) => (
              <Reveal key={remera.nombre} delay={index * 70}>
                <article className="h-full rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-[0_14px_36px_rgba(2,6,23,0.45)] transition duration-300 hover:-translate-y-1 hover:border-sky-300/40">
                  <div
                    className={`flex h-40 items-center justify-center rounded-2xl bg-gradient-to-br ${remera.tono} text-sm font-bold uppercase tracking-[0.25em] text-slate-950`}
                  >
                    Imagen placeholder
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-white">{remera.nombre}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{remera.descripcion}</p>
                  <p className="mt-4 text-lg font-semibold text-sky-200">Consultar</p>
                  <button
                    type="button"
                    className="mt-4 w-full rounded-xl border border-white/15 px-4 py-2.5 font-semibold text-white transition hover:bg-white/10"
                  >
                    Reservar remera
                  </button>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <Reveal>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Equipos del campamento
            </h2>
          </Reveal>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {EQUIPOS.map((equipo, index) => (
              <Reveal key={equipo.nombre} delay={index * 60}>
                <article
                  className={`h-full rounded-3xl border ${equipo.borde} ${equipo.color} p-5 backdrop-blur-sm`}
                >
                  <h3 className="text-xl font-bold text-white">{equipo.nombre}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-200">{equipo.descripcion}</p>
                  <div className="mt-5 rounded-xl border border-dashed border-white/25 p-3 text-xs text-slate-300">
                    Espacio para integrantes (próximamente)
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <Reveal>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Cronograma
            </h2>
          </Reveal>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {CRONOGRAMA.map((bloque, index) => (
              <Reveal key={bloque.dia} delay={index * 70}>
                <article className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
                  <h3 className="text-2xl font-bold text-sky-200">{bloque.dia}</h3>
                  <ul className="mt-4 space-y-3">
                    {bloque.actividades.map((actividad) => (
                      <li key={actividad} className="flex items-start gap-3 text-slate-200">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-300" />
                        <span>{actividad}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Lugar del campamento
              </h2>
              <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                <p className="text-sm uppercase tracking-[0.25em] text-sky-300">Nombre del lugar</p>
                <p className="mt-1 text-lg font-semibold">A definir</p>
                <p className="mt-4 text-sm uppercase tracking-[0.25em] text-sky-300">Dirección</p>
                <p className="mt-1 text-lg font-semibold">A definir</p>
                <p className="mt-4 text-sm uppercase tracking-[0.25em] text-sky-300">Ciudad</p>
                <p className="mt-1 text-lg font-semibold">A definir</p>
              </div>
              <button
                type="button"
                className="mt-5 inline-flex items-center justify-center rounded-xl border border-white/15 px-5 py-2.5 font-semibold text-white transition hover:bg-white/10"
              >
                Ver ubicación en Google Maps
              </button>
            </article>
          </Reveal>

          <Reveal delay={80}>
            <article className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Mapa
              </h2>
              <div className="mt-6 flex min-h-64 items-center justify-center rounded-2xl border border-dashed border-white/20 bg-slate-950/80 text-center text-slate-300">
                <div>
                  <p className="text-lg font-semibold text-slate-100">Mapa próximamente</p>
                  <p className="mt-2 text-sm text-slate-400">
                    Este bloque está listo para insertar un iframe de Google Maps.
                  </p>
                </div>
              </div>
            </article>
          </Reveal>
        </section>

        <Reveal>
          <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Video informativo
            </h2>
            <div className="mt-6 aspect-video w-full rounded-2xl border border-dashed border-white/20 bg-slate-900/80 p-6 text-center text-slate-300">
              <div className="flex h-full items-center justify-center">
                <div>
                  <p className="text-lg font-semibold text-slate-100">Video próximamente</p>
                  <p className="mt-2 text-sm text-slate-400">
                    Sección preparada para insertar iframe de YouTube responsive.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="mt-12 rounded-3xl border border-sky-300/25 bg-gradient-to-br from-sky-500/15 to-indigo-500/10 p-7 sm:p-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-white">
              Antes de continuar
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-200">
              Lee cuidadosamente el reglamento del campamento. Estas normas nos ayudarán a vivir este tiempo con orden, respeto y propósito.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/reglamento"
                className="inline-flex items-center justify-center rounded-2xl bg-sky-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-sky-300"
              >
                Leer reglamento
              </Link>
              <Link
                href="/registro"
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Volver al registro
              </Link>
            </div>
          </section>
        </Reveal>
      </div>
    </main>
  );
}

function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transform-gpu transition-all duration-700 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
