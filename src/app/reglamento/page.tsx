import Link from "next/link";

export default function ReglamentoPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-12 sm:px-8 lg:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur-md sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-200/75">
            Club de Jóvenes CBG
          </p>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Reglamento del Campamento Jóvenes CBG 2026
          </h1>

          <div className="mt-8 space-y-5 text-base leading-8 text-slate-300 sm:text-lg">
            <p>
              <span className="font-semibold text-white">Querido acampante:</span>
            </p>

            <p>
              Gracias por inscribirte al Campamento CBG 2026. Es un verdadero
              gozo contar contigo.
            </p>

            <p>
              Nuestro anhelo es que este tiempo sea de bendición y
              transformación para tu vida.
            </p>

            <p>
              Deseamos honrar a Dios en cada detalle de esta actividad. Por
              ello, buscamos que todo se realice con orden, respeto y
              excelencia, conforme a principios que le agradan.
            </p>

            <p>
              Las siguientes normas tienen como propósito facilitar el
              desarrollo del campamento y cuidar el bienestar espiritual y
              físico de todos.
            </p>
          </div>

          <div className="mt-10 rounded-3xl border border-sky-300/15 bg-sky-400/10 p-6">
            <h2 className="text-xl font-bold text-sky-200 sm:text-2xl">
              Próximo paso
            </h2>
            <p className="mt-3 text-slate-200">
              Aquí puedes continuar agregando todas las reglas oficiales del
              campamento, condiciones de participación y lineamientos de
              convivencia.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/registro"
              className="inline-flex items-center justify-center rounded-2xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Volver al registro
            </Link>

            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-2xl bg-sky-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-sky-300"
            >
              Ir al inicio
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
