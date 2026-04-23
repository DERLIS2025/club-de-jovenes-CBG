import Link from "next/link";

export default function BienvenidaPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-sky-300/80">
          Club de Jóvenes CBG
        </p>

        <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
          Bienvenidos a la página
          <br />
          del Club de Jóvenes
        </h1>

        <p className="mt-6 max-w-2xl text-base text-slate-300 sm:text-lg md:text-xl">
          Este es un espacio pensado para compartir información, experiencias,
          actividades y todo lo relacionado con nuestro campamento 2026.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
          >
            Volver al inicio
          </Link>

          <Link
            href="/registro"
            className="inline-flex items-center justify-center rounded-xl bg-sky-500 px-6 py-3 text-base font-bold text-slate-950 transition hover:scale-105 hover:bg-sky-400"
          >
            Continuar
          </Link>
        </div>
      </section>
    </main>
  );
}
