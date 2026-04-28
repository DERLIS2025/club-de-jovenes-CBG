"use client";

import Link from "next/link";
import { useState } from "react";
import Header from "@/components/Header";

const CBG = {
  navy: "#1e3a5c",
  gold: "#b8860b",
  cream: "#f8f6f1",
  text: "#1a1a1a",
  textMuted: "#666666",
  border: "#e5e5e5",
};

type Remera = {
  id: string;
  nombre: string;
  precio: number;
  imagen: string;
};

type Dia = {
  dia: string;
  actividades: string[];
};

const TALLAS = ["S", "M", "L", "XL", "XXL"];

const REMERAS: Remera[] = [
  {
    id: "oficial-1",
    nombre: "Remera oficial del campamento",
    precio: 100000,
    imagen: "/campamento/remera-oficial.jpg",
  },
  {
    id: "oficial-2",
    nombre: "Remera oficial del campamento",
    precio: 100000,
    imagen: "/campamento/remera-oficial.jpg",
  },
  {
    id: "oficial-3",
    nombre: "Remera oficial del campamento",
    precio: 100000,
    imagen: "/campamento/remera-oficial.jpg",
  },
];

const CRONOGRAMA: Dia[] = [
  { dia: "Viernes", actividades: ["Llegada", "Apertura", "Cena", "Plenaria 1"] },
  { dia: "Sábado", actividades: ["Devocional", "Juegos", "Talleres", "Plenaria 2", "Fogata"] },
  { dia: "Domingo", actividades: ["Devocional", "Culto", "Almuerzo", "Cierre"] },
];

const WHATSAPP_NUMBER = "595985194953";

const MAPS_URL = "https://maps.app.goo.gl/S4kDff6SKFJpFPh78";

const MAPS_EMBED_URL =
  "https://www.google.com/maps?q=Campamento%20Kavaju%20Palabra%20de%20Vida%20Atyra%20Paraguay&output=embed";

const YOUTUBE_VIDEO_ID = "_EpTnktKT-o";
const YOUTUBE_EMBED_URL = `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`;

function getWhatsAppUrl(producto: string, talla: string): string {
  const message = `Hola! Quiero reservar la ${producto} en talla ${talla} para el Campamento CBG 2026.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function formatPrice(gs: number): string {
  return "Gs. " + gs.toLocaleString("es-PY");
}

function HeroBanner() {
  const [heroSrc, setHeroSrc] = useState("/campamento-hero.jpg");

  return (
    <section className="relative h-[250px] w-full overflow-hidden bg-[#0f1f33] sm:h-[420px] lg:h-[560px]">
      <img
        src={heroSrc}
        alt="Campamento 2026"
        className="absolute inset-0 h-full w-full object-cover object-left sm:object-center"
        onError={() => {
          if (heroSrc !== "/campamento/campamento-hero.jpg") {
            setHeroSrc("/campamento/campamento-hero.jpg");
          }
        }}
      />
      <div className="absolute inset-0 bg-black/5" />
    </section>
  );
}

function CategoryNav() {
  const pageLinks = [
    { label: "Bienvenida", href: "/bienvenida" },
    { label: "Registrarme", href: "/registro" },
    { label: "Reglamento", href: "/reglamento" },
  ];

  const sectionLinks = [
    { label: "Remeras", href: "#remeras" },
    { label: "Cronograma", href: "#cronograma" },
    { label: "Lugar", href: "#lugar" },
    { label: "Video", href: "#video" },
  ];

  return (
    <div className="border-b border-[#e5e5e5] bg-white">
      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-2 sm:flex sm:flex-wrap sm:justify-center sm:gap-3">
          {pageLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-sm bg-[#1e3a5c] px-4 py-3 text-center text-sm font-semibold uppercase tracking-wider text-white transition hover:opacity-90 sm:px-6 sm:text-base"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="mt-4 flex snap-x gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:justify-center sm:overflow-visible">
          {sectionLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="shrink-0 snap-start rounded-sm border border-[#e5e5e5] px-4 py-2.5 text-xs font-medium uppercase tracking-wider text-[#666666] transition hover:border-[#1e3a5c] hover:bg-[#1e3a5c] hover:text-white sm:text-sm"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function TemaSection() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: CBG.cream }}>
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2">
          <div
            className="flex items-center px-6 py-12 sm:px-12 sm:py-16 lg:px-16"
            style={{ backgroundColor: CBG.navy }}
          >
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/65 sm:text-base">
                Tema Central
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-5xl">
                Una fe examinada, una vida rendida a Cristo
              </h2>

              <blockquote className="mt-6 border-l-2 border-[#b8860b] pl-5 text-white/80">
                <p className="text-base italic sm:text-xl">
                  &ldquo;Examinaos a vosotros mismos si estáis en la fe.&rdquo;
                </p>
                <footer className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-white/55 sm:text-sm">
                  1 Corintios 13:5
                </footer>
              </blockquote>
            </div>
          </div>

          <div className="relative min-h-[240px] overflow-hidden sm:min-h-[300px] lg:min-h-0">
            <img
              src="/campamento-bg.jpg"
              alt="Imagen del campamento"
              className="h-full min-h-[240px] w-full object-cover sm:min-h-[300px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function RemerasSection() {
  const [selectedSizes, setSelectedSizes] = useState<Record<string, string>>({});

  const handleSizeChange = (productId: string, talla: string) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: talla }));
  };

  return (
    <section id="remeras" className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12">
          <p
            className="text-xs font-medium uppercase tracking-[0.25em] sm:text-base"
            style={{ color: CBG.gold }}
          >
            Edición limitada
          </p>

          <h2
            className="mt-3 text-3xl font-semibold leading-tight sm:text-6xl"
            style={{ color: CBG.text }}
          >
            Remeras oficiales
          </h2>

          <p className="mt-3 max-w-3xl text-sm leading-relaxed sm:text-lg" style={{ color: CBG.textMuted }}>
            Elegí tu talle y reservá por WhatsApp.
          </p>
        </div>

        <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:grid sm:snap-none sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3">
          {REMERAS.map((remera) => (
            <article
              key={remera.id}
              className="group min-w-[84%] max-w-[84%] snap-start rounded-sm border border-[#e5e5e5] bg-white p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:min-w-0 sm:max-w-none sm:p-4"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-[#f8f6f1]">
                <img
                  src={remera.imagen}
                  alt={remera.nombre}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-[#1e3a5c] shadow-sm sm:left-4 sm:top-4 sm:px-4 sm:py-1.5 sm:text-sm">
                  Oficial
                </div>
              </div>

              <div className="mt-4 sm:mt-5">
                <h3 className="text-xl font-semibold leading-tight sm:text-3xl" style={{ color: CBG.text }}>
                  {remera.nombre}
                </h3>

                <div className="mt-4 flex items-end justify-between gap-3">
                  <p className="text-2xl font-semibold sm:text-3xl" style={{ color: CBG.text }}>
                    {formatPrice(remera.precio)}
                  </p>
                  <p className="text-[10px] font-medium uppercase tracking-wider sm:text-sm" style={{ color: CBG.gold }}>
                    Precio único
                  </p>
                </div>

                <div className="mt-4 sm:mt-5">
                  <p className="mb-2 text-xs font-medium uppercase tracking-wider sm:text-sm" style={{ color: CBG.textMuted }}>
                    Elegí tu talle
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {TALLAS.map((talla) => (
                      <button
                        key={talla}
                        type="button"
                        onClick={() => handleSizeChange(remera.id, talla)}
                        className="h-9 min-w-9 rounded-sm border px-2 text-xs font-medium transition sm:h-10 sm:min-w-10 sm:px-3 sm:text-sm"
                        style={{
                          borderColor: selectedSizes[remera.id] === talla ? CBG.navy : CBG.border,
                          backgroundColor:
                            selectedSizes[remera.id] === talla ? CBG.navy : "transparent",
                          color: selectedSizes[remera.id] === talla ? "white" : CBG.textMuted,
                        }}
                      >
                        {talla}
                      </button>
                    ))}
                  </div>
                </div>

                <a
                  href={getWhatsAppUrl(remera.nombre, selectedSizes[remera.id] || "M")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 flex w-full items-center justify-center rounded-sm py-3 text-xs font-semibold uppercase tracking-wider text-white transition hover:opacity-90 sm:mt-6 sm:py-4 sm:text-lg"
                  style={{ backgroundColor: CBG.navy }}
                >
                  Reservar por WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CronogramaSection() {
  return (
    <section id="cronograma" className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          className="mb-8 text-3xl font-semibold leading-tight sm:mb-10 sm:text-5xl"
          style={{ color: CBG.text }}
        >
          Cronograma
        </h2>

        <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:grid sm:snap-none sm:grid-cols-3 sm:overflow-visible sm:px-0 sm:pb-0">
          {CRONOGRAMA.map((bloque) => (
            <article
              key={bloque.dia}
              className="min-w-[78%] max-w-[78%] snap-start rounded-sm border border-[#e5e5e5] p-5 sm:min-w-0 sm:max-w-none sm:p-6"
              style={{ backgroundColor: CBG.cream }}
            >
              <h3 className="text-xl font-semibold sm:text-2xl" style={{ color: CBG.navy }}>
                {bloque.dia}
              </h3>

              <ul className="mt-4 space-y-3">
                {bloque.actividades.map((actividad, i) => (
                  <li
                    key={actividad}
                    className="flex items-center gap-3 text-sm sm:text-base"
                    style={{ color: CBG.textMuted }}
                  >
                    <span
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-medium text-white"
                      style={{ backgroundColor: CBG.navy }}
                    >
                      {i + 1}
                    </span>
                    {actividad}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function LugarSection() {
  return (
    <section id="lugar" className="py-14 sm:py-16" style={{ backgroundColor: CBG.cream }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-sm border border-[#e5e5e5] bg-white p-5 sm:p-8">
            <h2
              className="text-3xl font-semibold leading-tight sm:text-5xl"
              style={{ color: CBG.text }}
            >
              Lugar del campamento
            </h2>

            <div className="mt-6 space-y-4">
              <div>
                <p
                  className="text-xs font-medium uppercase tracking-wider sm:text-sm"
                  style={{ color: CBG.gold }}
                >
                  Nombre
                </p>
                <p className="mt-1 text-base font-medium sm:text-xl" style={{ color: CBG.text }}>
                  Campamento Kavaju - Palabra de Vida
                </p>
              </div>

              <div>
                <p
                  className="text-xs font-medium uppercase tracking-wider sm:text-sm"
                  style={{ color: CBG.gold }}
                >
                  Dirección
                </p>
                <p className="mt-1 text-base font-medium sm:text-xl" style={{ color: CBG.text }}>
                  Ver ubicación exacta en Google Maps
                </p>
              </div>

              <div>
                <p
                  className="text-xs font-medium uppercase tracking-wider sm:text-sm"
                  style={{ color: CBG.gold }}
                >
                  Ciudad
                </p>
                <p className="mt-1 text-base font-medium sm:text-xl" style={{ color: CBG.text }}>
                  Atyrá, Paraguay
                </p>
              </div>
            </div>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-sm border border-[#1e3a5c] px-5 py-3 text-sm font-medium uppercase tracking-wider text-[#1e3a5c] transition hover:bg-[#1e3a5c] hover:text-white sm:px-7 sm:text-base"
            >
              Ver en Google Maps
            </a>
          </div>

          <div className="rounded-sm border border-[#e5e5e5] bg-white p-5 sm:p-8">
            <h2
              className="text-3xl font-semibold leading-tight sm:text-5xl"
              style={{ color: CBG.text }}
            >
              Mapa
            </h2>

            <div className="mt-6 overflow-hidden rounded-sm" style={{ backgroundColor: CBG.cream }}>
              <iframe
                src={MAPS_EMBED_URL}
                title="Mapa del Campamento Kavaju - Palabra de Vida"
                className="aspect-square w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VideoSection() {
  return (
    <section id="video" className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          className="mb-6 text-3xl font-semibold leading-tight sm:text-5xl"
          style={{ color: CBG.text }}
        >
          Video informativo
        </h2>

        <div className="aspect-video w-full overflow-hidden rounded-sm bg-black">
          <iframe
            src={YOUTUBE_EMBED_URL}
            title="Video informativo del Campamento CBG 2026"
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-14 sm:py-16" style={{ backgroundColor: CBG.navy }}>
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold leading-tight text-white sm:text-5xl">
          Antes de continuar
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-white/70 sm:text-lg">
          Lee cuidadosamente el reglamento del campamento. Estas normas nos ayudarán a vivir este
          tiempo con orden, respeto y propósito.
        </p>

        <div className="mt-8 grid gap-3 sm:flex sm:flex-row sm:items-center sm:justify-center sm:gap-4">
          <Link
            href="/bienvenida"
            className="inline-flex items-center justify-center rounded-sm border border-white/30 px-6 py-3 text-sm font-medium uppercase tracking-wider text-white transition hover:bg-white/10 sm:px-8 sm:text-base"
          >
            Bienvenida
          </Link>

          <Link
            href="/registro"
            className="inline-flex items-center justify-center rounded-sm bg-white px-6 py-3 text-sm font-medium uppercase tracking-wider transition hover:bg-white/90 sm:px-8 sm:text-base"
            style={{ color: CBG.navy }}
          >
            Registrarme
          </Link>

          <Link
            href="/reglamento"
            className="inline-flex items-center justify-center rounded-sm border border-white/30 px-6 py-3 text-sm font-medium uppercase tracking-wider text-white transition hover:bg-white/10 sm:px-8 sm:text-base"
          >
            Leer reglamento
          </Link>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 sm:py-12" style={{ backgroundColor: "#0f1f33" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <h4 className="text-lg font-semibold text-white sm:text-xl">JÓVENES CBG</h4>
            <p className="mt-2 text-sm text-white/50 sm:text-base">Campamento 2026</p>
          </div>

          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider text-white/50 sm:text-base">
              Principal
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-white/50 sm:text-base">
              <li>
                <Link href="/" className="hover:text-white">
                  Portada
                </Link>
              </li>
              <li>
                <Link href="/campamento" className="hover:text-white">
                  Inicio
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider text-white/50 sm:text-base">
              Páginas
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-white/50 sm:text-base">
              <li>
                <Link href="/bienvenida" className="hover:text-white">
                  Bienvenida
                </Link>
              </li>
              <li>
                <Link href="/registro" className="hover:text-white">
                  Registro
                </Link>
              </li>
              <li>
                <Link href="/reglamento" className="hover:text-white">
                  Reglamento
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider text-white/50 sm:text-base">
              Contacto
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-white/50 sm:text-base">
              <li>WhatsApp: 0985 194953</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider text-white/50 sm:text-base">
              Redes
            </h4>
            <div className="mt-3 flex gap-4 text-sm sm:text-base">
              <a href="#" className="text-white/50 hover:text-white">
                Instagram
              </a>
              <a href="#" className="text-white/50 hover:text-white">
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8 text-center text-xs text-white/30 sm:mt-12 sm:text-sm">
          © 2026 Jóvenes CBG. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

export default function CampamentoPage() {
  return (
    <div className="min-h-screen bg-white text-[15px] antialiased sm:text-[16px] md:text-[17px]">
      <Header />
      <HeroBanner />
      <CategoryNav />
      <TemaSection />
      <RemerasSection />
      <CronogramaSection />
      <LugarSection />
      <VideoSection />
      <CTASection />
      <Footer />
    </div>
  );
}
