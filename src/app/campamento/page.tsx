"use client";

import Link from "next/link";
import { ReactNode, useEffect, useRef, useState } from "react";

type Remera = {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  tono: string;
  textoTono: string;
};

type Equipo = {
  nombre: string;
  descripcion: string;
  color: string;
  borde: string;
  texto: string;
};

type Dia = {
  dia: string;
  actividades: string[];
};

const TALLAS = ["S", "M", "L", "XL", "XXL"];

const REMERAS: Remera[] = [
  {
    id: "blanca",
    nombre: "Remera oficial blanca",
    descripcion: "Diseño clásico del campamento en base clara, cómodo y versátil.",
    precio: 100000,
    tono: "from-stone-100 to-stone-200",
    textoTono: "text-stone-700",
  },
  {
    id: "negra",
    nombre: "Remera oficial negra",
    descripcion: "Versión premium en negro con detalles del evento y tema central.",
    precio: 100000,
    tono: "from-stone-700 to-stone-900",
    textoTono: "text-white",
  },
  {
    id: "equipo",
    nombre: "Remera por equipo",
    descripcion: "Modelo especial por color de equipo para actividades y dinámicas.",
    precio: 100000,
    tono: "from-emerald-500 to-teal-600",
    textoTono: "text-white",
  },
];

const EQUIPOS: Equipo[] = [
  {
    nombre: "Equipo Azul",
    descripcion: "Pasión por servir con fidelidad y compañerismo.",
    color: "bg-blue-50",
    borde: "border-blue-200",
    texto: "text-blue-900",
  },
  {
    nombre: "Equipo Rojo",
    descripcion: "Compromiso, entrega y entusiasmo para cada desafío.",
    color: "bg-red-50",
    borde: "border-red-200",
    texto: "text-red-900",
  },
  {
    nombre: "Equipo Verde",
    descripcion: "Crecimiento, vida espiritual y apoyo mutuo.",
    color: "bg-emerald-50",
    borde: "border-emerald-200",
    texto: "text-emerald-900",
  },
  {
    nombre: "Equipo Amarillo",
    descripcion: "Gozo, creatividad y actitud positiva en unidad.",
    color: "bg-amber-50",
    borde: "border-amber-200",
    texto: "text-amber-900",
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

const WHATSAPP_NUMBER = "595985194953";

function getWhatsAppUrl(producto: string, talla: string): string {
  const message = `Hola! Quiero reservar la ${producto} en talla ${talla} para el Campamento CBG 2026.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function formatPrice(gs: number): string {
  return gs.toLocaleString("es-PY") + " Gs";
}

export default function CampamentoPage() {
  const [selectedSizes, setSelectedSizes] = useState<Record<string, string>>({});

  const handleSizeChange = (productId: string, talla: string) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: talla }));
  };

  return (
    <main className="min-h-screen bg-stone-50 text-stone-800">
      {/* HERO */}
      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:px-10">
        <Reveal>
          <section className="relative overflow-hidden rounded-[2rem] border border-stone-200 bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] sm:p-12">
            <div className="pointer-events-none absolute -top-20 right-0 h-56 w-56 rounded-full bg-emerald-100/40 blur-3xl" />
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-700">
              Campamento CBG
            </p>
            <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
              Campamento Jóvenes CBG 2026
            </h1>
            <h2 className="mt-3 font-serif text-xl font-medium italic text-stone-500 sm:text-2xl">
              Tiempo con propósito
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-stone-600 sm:text-lg">
              Un campamento diseñado para escuchar la Palabra de Dios,
              fortalecer la comunión y vivir una experiencia centrada en Cristo.
            </p>
            <Link
              href="/reglamento"
              className="mt-8 inline-flex items-center justify-center rounded-xl bg-stone-900 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-stone-700"
            >
              Leer reglamento
            </Link>
          </section>
        </Reveal>

        {/* TEMA CENTRAL */}
        <Reveal delay={60}>
          <section className="mt-10 rounded-3xl border border-stone-200 bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">
              Tema central
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-stone-900 sm:text-4xl">
              Tema del campamento
            </h2>
            <p className="mt-6 font-serif text-2xl font-medium italic text-stone-700 sm:text-3xl">
              Una fe examinada, una vida rendida a Cristo.
            </p>
            <blockquote className="mt-6 border-l-4 border-emerald-400 pl-5 text-stone-600">
              <p className="text-lg italic">“Examinaos a vosotros mismos si estáis en la fe.”</p>
              <footer className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-stone-400">
                1 Corintios 13:5
              </footer>
            </blockquote>
          </section>
        </Reveal>

        {/* REMERAS OFICIALES */}
        <section className="mt-14">
          <Reveal>
            <div className="flex items-end justify-between">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
                Remeras oficiales
              </h2>
              <span className="hidden text-sm text-stone-400 sm:block">Edición limitada</span>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {REMERAS.map((remera, index) => (
              <Reveal key={remera.id} delay={index * 70}>
                <article className="group h-full rounded-2xl border border-stone-200 bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
                  {/* Imagen placeholder */}
                  <div
                    className={`flex h-48 items-center justify-center rounded-xl bg-gradient-to-br ${remera.tono} ${remera.textoTono} text-sm font-bold uppercase tracking-[0.2em]`}
                  >
                    Imagen próximamente
                  </div>

                  <h3 className="mt-5 font-serif text-xl font-bold text-stone-900">{remera.nombre}</h3>
                  <p className="mt-2 text-sm leading-6 text-stone-500">{remera.descripcion}</p>

                  {/* Precio */}
                  <p className="mt-4 text-2xl font-bold text-stone-900">{formatPrice(remera.precio)}</p>

                  {/* Selector de tallas */}
                  <div className="mt-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-stone-400">Talla</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {TALLAS.map((talla) => (
                        <button
                          key={talla}
                          type="button"
                          onClick={() => handleSizeChange(remera.id, talla)}
                          className={`rounded-lg border px-3 py-1.5 text-sm font-medium transition ${
                            selectedSizes[remera.id] === talla
                              ? "border-stone-900 bg-stone-900 text-white"
                              : "border-stone-200 text-stone-600 hover:border-stone-400"
                          }`}
                        >
                          {talla}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Botón WhatsApp */}
                  <a
                    href={getWhatsAppUrl(
                      remera.nombre,
                      selectedSizes[remera.id] || "M"
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.521.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Reservar por WhatsApp
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* EQUIPOS */}
        <section className="mt-14">
          <Reveal>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
              Equipos del campamento
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {EQUIPOS.map((equipo, index) => (
              <Reveal key={equipo.nombre} delay={index * 60}>
                <article
                  className={`h-full rounded-2xl border ${equipo.borde} ${equipo.color} p-6`}
                >
                  <h3 className={`font-serif text-xl font-bold ${equipo.texto}`}>{equipo.nombre}</h3>
                  <p className="mt-2 text-sm leading-6 text-stone-600">{equipo.descripcion}</p>
                  <div className="mt-5 rounded-xl border border-dashed border-stone-300 p-3 text-xs text-stone-400">
                    Integrantes próximamente
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CRONOGRAMA */}
        <section className="mt-14">
          <Reveal>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
              Cronograma
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {CRONOGRAMA.map((bloque, index) => (
              <Reveal key={bloque.dia} delay={index * 70}>
                <article className="rounded-2xl border border-stone-200 bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                  <h3 className="font-serif text-2xl font-bold text-stone-900">{bloque.dia}</h3>
                  <ul className="mt-4 space-y-3">
                    {bloque.actividades.map((actividad) => (
                      <li key={actividad} className="flex items-start gap-3 text-stone-600">
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-emerald-500" />
                        <span className="text-sm">{actividad}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* LUGAR + MAPA */}
        <section className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="rounded-2xl border border-stone-200 bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
                Lugar del campamento
              </h2>
              <div className="mt-6 rounded-xl border border-stone-100 bg-stone-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">Nombre</p>
                <p className="mt-1 text-lg font-semibold text-stone-800">A definir</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">Dirección</p>
                <p className="mt-1 text-lg font-semibold text-stone-800">A definir</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">Ciudad</p>
                <p className="mt-1 text-lg font-semibold text-stone-800">A definir</p>
              </div>
              <button
                type="button"
                className="mt-5 inline-flex items-center justify-center rounded-xl border border-stone-300 px-5 py-2.5 text-sm font-semibold text-stone-700 transition hover:bg-stone-100"
              >
                Ver en Google Maps
              </button>
            </article>
          </Reveal>

          <Reveal delay={80}>
            <article className="rounded-2xl border border-stone-200 bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
                Mapa
              </h2>
              <div className="mt-6 flex min-h-64 items-center justify-center rounded-xl border border-dashed border-stone-300 bg-stone-50 text-center text-stone-400">
                <div>
                  <p className="text-lg font-semibold text-stone-600">Mapa próximamente</p>
                  <p className="mt-2 text-sm text-stone-400">
                    Este bloque está listo para insertar un iframe de Google Maps.
                  </p>
                </div>
              </div>
            </article>
          </Reveal>
        </section>

        {/* VIDEO */}
        <Reveal>
          <section className="mt-14 rounded-2xl border border-stone-200 bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)] sm:p-8">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
              Video informativo
            </h2>
            <div className="mt-6 aspect-video w-full rounded-xl border border-dashed border-stone-300 bg-stone-50 p-6 text-center text-stone-400">
              <div className="flex h-full items-center justify-center">
                <div>
                  <p className="text-lg font-semibold text-stone-600">Video próximamente</p>
                  <p className="mt-2 text-sm text-stone-400">
                    Sección preparada para insertar iframe de YouTube responsive.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* CTA FINAL */}
        <Reveal>
          <section className="mt-14 rounded-2xl border border-stone-200 bg-stone-900 p-8 sm:p-10">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-white">
              Antes de continuar
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-stone-300">
              Lee cuidadosamente el reglamento del campamento. Estas normas nos ayudarán a vivir este tiempo con orden, respeto y propósito.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/reglamento"
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wider text-stone-900 transition hover:bg-stone-100"
              >
                Leer reglamento
              </Link>
              <Link
                href="/registro"
                className="inline-flex items-center justify-center rounded-xl border border-stone-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-800"
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
