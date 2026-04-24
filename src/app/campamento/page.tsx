"use client";

import Link from "next/link";
import { ReactNode, useEffect, useRef, useState } from "react";

/* ─── Types ─── */
type Remera = {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  ref: string;
  tono: string;
};

type Equipo = {
  nombre: string;
  descripcion: string;
  color: string;
};

type Dia = {
  dia: string;
  actividades: string[];
};

/* ─── Data ─── */
const TALLAS = ["S", "M", "L", "XL", "XXL"];

const REMERAS: Remera[] = [
  {
    id: "blanca",
    nombre: "Remera oficial blanca",
    descripcion: "Diseño clásico del campamento en base clara.",
    precio: 100000,
    ref: "CBG-REM-01",
    tono: "bg-stone-100",
  },
  {
    id: "negra",
    nombre: "Remera oficial negra",
    descripcion: "Versión premium en negro con detalles del evento.",
    precio: 100000,
    ref: "CBG-REM-02",
    tono: "bg-stone-800",
  },
  {
    id: "equipo",
    nombre: "Remera por equipo",
    descripcion: "Modelo especial por color de equipo.",
    precio: 100000,
    ref: "CBG-REM-03",
    tono: "bg-emerald-600",
  },
];

const EQUIPOS: Equipo[] = [
  { nombre: "Equipo Azul", descripcion: "Pasión por servir con fidelidad.", color: "#dbeafe" },
  { nombre: "Equipo Rojo", descripcion: "Compromiso y entusiasmo.", color: "#fee2e2" },
  { nombre: "Equipo Verde", descripcion: "Crecimiento y apoyo mutuo.", color: "#dcfce7" },
  { nombre: "Equipo Amarillo", descripcion: "Gozo y creatividad.", color: "#fef9c3" },
];

const CRONOGRAMA: Dia[] = [
  { dia: "Viernes", actividades: ["Llegada", "Apertura", "Cena", "Plenaria 1"] },
  { dia: "Sábado", actividades: ["Devocional", "Juegos", "Talleres", "Plenaria 2", "Fogata"] },
  { dia: "Domingo", actividades: ["Devocional", "Culto", "Almuerzo", "Cierre"] },
];

const WHATSAPP_NUMBER = "595985194953";

/* ─── Helpers ─── */
function getWhatsAppUrl(producto: string, talla: string): string {
  const message = `Hola! Quiero reservar la ${producto} en talla ${talla} para el Campamento CBG 2026.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function formatPrice(gs: number): string {
  return "Gs. " + gs.toLocaleString("es-PY");
}

/* ─── Components ─── */

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="font-serif text-xl font-bold tracking-tight text-stone-900">
          JÓVENES CBG
        </Link>
        <nav className="hidden gap-8 text-sm font-medium uppercase tracking-wider text-stone-600 sm:flex">
          <Link href="/bienvenida" className="hover:text-stone-900">Inicio</Link>
          <Link href="/campamento" className="text-stone-900">Campamento</Link>
          <Link href="/registro" className="hover:text-stone-900">Registro</Link>
          <Link href="/reglamento" className="hover:text-stone-900">Reglamento</Link>
        </nav>
        <Link
          href="/registro"
          className="rounded-sm border border-stone-900 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-stone-900 transition hover:bg-stone-900 hover:text-white"
        >
          Inscribirme
        </Link>
      </div>
    </header>
  );
}

function HeroBanner() {
  return (
    <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden bg-stone-900 sm:h-[70vh]">
      {/* Background placeholder - replace with real image */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-800 via-stone-700 to-stone-900" />
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-300">
              Campamento CBG 2026
            </p>
            <h1 className="mt-4 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Tiempo con propósito
            </h1>
            <p className="mt-4 text-base leading-relaxed text-stone-300 sm:text-lg">
              Un campamento diseñado para escuchar la Palabra de Dios, fortalecer la comunión y vivir una experiencia centrada en Cristo.
            </p>
            <div className="mt-8 flex gap-4">
              <Link
                href="/registro"
                className="inline-flex items-center justify-center rounded-sm bg-white px-8 py-3 text-sm font-semibold uppercase tracking-wider text-stone-900 transition hover:bg-stone-100"
              >
                Registrarme
              </Link>
              <Link
                href="/reglamento"
                className="inline-flex items-center justify-center rounded-sm border border-white/40 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-white/10"
              >
                Leer reglamento
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CategoryNav() {
  const categories = [
    { label: "Remeras", href: "#remeras" },
    { label: "Equipos", href: "#equipos" },
    { label: "Cronograma", href: "#cronograma" },
    { label: "Lugar", href: "#lugar" },
  ];

  return (
    <div className="border-b border-stone-200 bg-white">
      <div className="mx-auto flex max-w-7xl justify-center gap-2 px-4 py-4 sm:gap-4 sm:px-6 lg:px-8">
        {categories.map((cat) => (
          <a
            key={cat.label}
            href={cat.href}
            className="rounded-sm border border-stone-300 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-stone-700 transition hover:border-stone-900 hover:text-stone-900 sm:px-6"
          >
            {cat.label}
          </a>
        ))}
      </div>
    </div>
  );
}

function TemaSection() {
  return (
    <section className="relative overflow-hidden bg-stone-100">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2">
          <div className="flex items-center bg-stone-900 px-8 py-16 sm:px-12 lg:px-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-400">
                Tema Central
              </p>
              <h2 className="mt-4 font-serif text-3xl font-bold text-white sm:text-4xl">
                Una fe examinada, una vida rendida a Cristo
              </h2>
              <blockquote className="mt-6 border-l-2 border-stone-500 pl-5 text-stone-300">
                <p className="text-lg italic">&ldquo;Examinaos a vosotros mismos si estáis en la fe.&rdquo;</p>
                <footer className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
                  1 Corintios 13:5
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="relative min-h-[300px] bg-gradient-to-br from-stone-300 to-stone-400 lg:min-h-0">
            <div className="absolute inset-0 flex items-center justify-center text-stone-500">
              <span className="text-sm uppercase tracking-wider">Imagen del campamento</span>
            </div>
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
    <section id="remeras" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-400">
              Edición limitada
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-stone-900 sm:text-4xl">
              Remeras oficiales
            </h2>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {REMERAS.map((remera) => (
            <article key={remera.id} className="group">
              {/* Image */}
              <div className={`relative aspect-[4/5] overflow-hidden rounded-sm ${remera.tono}`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-medium uppercase tracking-wider text-stone-400">
                    Imagen próximamente
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="mt-4">
                <p className="text-xs text-stone-400">Ref: {remera.ref}</p>
                <h3 className="mt-1 font-serif text-lg font-bold text-stone-900">{remera.nombre}</h3>
                <p className="mt-1 text-sm text-stone-500">{remera.descripcion}</p>
                <p className="mt-3 text-lg font-bold text-stone-900">{formatPrice(remera.precio)}</p>

                {/* Sizes */}
                <div className="mt-3 flex gap-2">
                  {TALLAS.map((talla) => (
                    <button
                      key={talla}
                      type="button"
                      onClick={() => handleSizeChange(remera.id, talla)}
                      className={`h-8 w-8 rounded-sm border text-xs font-medium transition ${
                        selectedSizes[remera.id] === talla
                          ? "border-stone-900 bg-stone-900 text-white"
                          : "border-stone-300 text-stone-600 hover:border-stone-500"
                      }`}
                    >
                      {talla}
                    </button>
                  ))}
                </div>

                {/* WhatsApp CTA */}
                <a
                  href={getWhatsAppUrl(remera.nombre, selectedSizes[remera.id] || "M")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-sm bg-stone-900 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-stone-700"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.521.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Reservar
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function EquiposSection() {
  return (
    <section id="equipos" className="bg-stone-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 font-serif text-3xl font-bold text-stone-900 sm:text-4xl">
          Equipos del campamento
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {EQUIPOS.map((equipo) => (
            <article
              key={equipo.nombre}
              className="rounded-sm border border-stone-200 bg-white p-6 transition hover:shadow-md"
              style={{ borderTop: `4px solid ${equipo.color}` }}
            >
              <h3 className="font-serif text-lg font-bold text-stone-900">{equipo.nombre}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">{equipo.descripcion}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CronogramaSection() {
  return (
    <section id="cronograma" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 font-serif text-3xl font-bold text-stone-900 sm:text-4xl">
          Cronograma
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {CRONOGRAMA.map((bloque) => (
            <article key={bloque.dia} className="rounded-sm border border-stone-200 bg-stone-50 p-6">
              <h3 className="font-serif text-xl font-bold text-stone-900">{bloque.dia}</h3>
              <ul className="mt-4 space-y-3">
                {bloque.actividades.map((actividad, i) => (
                  <li key={actividad} className="flex items-center gap-3 text-sm text-stone-600">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-stone-200 text-xs font-semibold text-stone-600">
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
    <section id="lugar" className="bg-stone-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-sm border border-stone-200 bg-white p-8">
            <h2 className="font-serif text-3xl font-bold text-stone-900 sm:text-4xl">
              Lugar del campamento
            </h2>
            <div className="mt-6 space-y-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-stone-400">Nombre</p>
                <p className="mt-1 text-lg font-medium text-stone-900">A definir</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-stone-400">Dirección</p>
                <p className="mt-1 text-lg font-medium text-stone-900">A definir</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-stone-400">Ciudad</p>
                <p className="mt-1 text-lg font-medium text-stone-900">A definir</p>
              </div>
            </div>
            <button
              type="button"
              className="mt-6 inline-flex items-center justify-center rounded-sm border border-stone-900 px-6 py-2.5 text-sm font-semibold uppercase tracking-wider text-stone-900 transition hover:bg-stone-900 hover:text-white"
            >
              Ver en Google Maps
            </button>
          </div>

          <div className="rounded-sm border border-stone-200 bg-white p-8">
            <h2 className="font-serif text-3xl font-bold text-stone-900 sm:text-4xl">Mapa</h2>
            <div className="mt-6 flex aspect-square items-center justify-center rounded-sm bg-stone-100">
              <div className="text-center">
                <p className="text-sm font-medium text-stone-500">Mapa próximamente</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VideoSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 font-serif text-3xl font-bold text-stone-900 sm:text-4xl">
          Video informativo
        </h2>
        <div className="aspect-video w-full rounded-sm bg-stone-100">
          <div className="flex h-full items-center justify-center">
            <div className="text-center">
              <p className="text-lg font-medium text-stone-500">Video próximamente</p>
              <p className="mt-1 text-sm text-stone-400">Sección preparada para YouTube</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="bg-stone-900 py-16">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
          Antes de continuar
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-stone-400">
          Lee cuidadosamente el reglamento del campamento. Estas normas nos ayudarán a vivir este tiempo con orden, respeto y propósito.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/registro"
            className="inline-flex items-center justify-center rounded-sm bg-white px-8 py-3 text-sm font-semibold uppercase tracking-wider text-stone-900 transition hover:bg-stone-100"
          >
            Registrarme
          </Link>
          <Link
            href="/reglamento"
            className="inline-flex items-center justify-center rounded-sm border border-white/30 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-white/10"
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
    <footer className="bg-stone-950 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="font-serif text-lg font-bold text-white">JÓVENES CBG</h4>
            <p className="mt-2 text-sm text-stone-500">Campamento 2026</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-stone-400">Navegación</h4>
            <ul className="mt-3 space-y-2 text-sm text-stone-500">
              <li><Link href="/bienvenida" className="hover:text-white">Inicio</Link></li>
              <li><Link href="/campamento" className="hover:text-white">Campamento</Link></li>
              <li><Link href="/registro" className="hover:text-white">Registro</Link></li>
              <li><Link href="/reglamento" className="hover:text-white">Reglamento</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-stone-400">Contacto</h4>
            <ul className="mt-3 space-y-2 text-sm text-stone-500">
              <li>WhatsApp: 0985 194953</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-stone-400">Redes</h4>
            <div className="mt-3 flex gap-4">
              <a href="#" className="text-stone-500 hover:text-white">Instagram</a>
              <a href="#" className="text-stone-500 hover:text-white">Facebook</a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-stone-800 pt-8 text-center text-xs text-stone-600">
          © 2026 Jóvenes CBG. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

/* ─── Reveal Animation ─── */
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
      { threshold: 0.1 }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transform-gpu transition-all duration-700 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

/* ─── Main Page ─── */
export default function CampamentoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroBanner />
      <CategoryNav />
      <TemaSection />
      <RemerasSection />
      <EquiposSection />
      <CronogramaSection />
      <LugarSection />
      <VideoSection />
      <CTASection />
      <Footer />
    </div>
  );
}
