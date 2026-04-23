"use client";

import { ChangeEvent, FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type FormData = {
  nombre: string;
  apellido: string;
  edad: string;
  telefono: string;
  cedula: string;
  sexo: string;
  iglesia: string;
  esInvitado: string;
  invitadoPor: string;
  alergias: string;
  medicamentos: string;
  enfermedadBase: string;
  contactoEmergenciaNombre: string;
  contactoEmergenciaTelefono: string;
  observaciones: string;
  formaPago: string;
  nombrePadreMadre: string;
  telefonoPadreMadre: string;
};

const initialForm: FormData = {
  nombre: "",
  apellido: "",
  edad: "",
  telefono: "",
  cedula: "",
  sexo: "",
  iglesia: "",
  esInvitado: "",
  invitadoPor: "",
  alergias: "",
  medicamentos: "",
  enfermedadBase: "",
  contactoEmergenciaNombre: "",
  contactoEmergenciaTelefono: "",
  observaciones: "",
  formaPago: "",
  nombrePadreMadre: "",
  telefonoPadreMadre: "",
};

export default function RegistroPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>(initialForm);

  const edadNumero = Number(formData.edad);
  const esMenor = useMemo(() => {
    if (!formData.edad) return false;
    return !Number.isNaN(edadNumero) && edadNumero < 18;
  }, [edadNumero, formData.edad]);

  const mostrarInvitado = formData.esInvitado === "si";

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log("Datos del registro:", formData);
    router.push("/reglamento");
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-12 sm:px-8 lg:px-10">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-200/75">
            Club de Jóvenes CBG
          </p>

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Registro Campamento 2026
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
            Completa este formulario con los datos necesarios para tu inscripción.
            Queremos cuidar bien cada detalle del campamento y contar con la
            información importante de cada participante.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-8 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur-md sm:p-8"
        >
            <section>
              <h2 className="text-2xl font-bold text-white">
                Datos personales
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                Información básica del participante.
              </p>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <Field
                  label="Nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />

                <Field
                  label="Apellido"
                  name="apellido"
                  value={formData.apellido}
                  onChange={handleChange}
                  required
                />

                <Field
                  label="Edad"
                  name="edad"
                  type="number"
                  value={formData.edad}
                  onChange={handleChange}
                  required
                />

                <Field
                  label="Número de teléfono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                />

                <Field
                  label="Cédula"
                  name="cedula"
                  value={formData.cedula}
                  onChange={handleChange}
                  required
                />

                <SelectField
                  label="Sexo"
                  name="sexo"
                  value={formData.sexo}
                  onChange={handleChange}
                  required
                  options={[
                    { value: "", label: "Seleccionar" },
                    { value: "masculino", label: "Masculino" },
                    { value: "femenino", label: "Femenino" },
                  ]}
                />

                <Field
                  label="Iglesia / congregación"
                  name="iglesia"
                  value={formData.iglesia}
                  onChange={handleChange}
                />

                <SelectField
                  label="¿Eres invitado?"
                  name="esInvitado"
                  value={formData.esInvitado}
                  onChange={handleChange}
                  required
                  options={[
                    { value: "", label: "Seleccionar" },
                    { value: "no", label: "No" },
                    { value: "si", label: "Sí" },
                  ]}
                />
              </div>
            </section>

            {esMenor && (
              <section className="rounded-3xl border border-red-400/30 bg-red-500/10 p-6">
                <h3 className="text-xl font-bold text-red-300">
                  Atención: participante menor de edad
                </h3>
                <p className="mt-2 text-sm leading-6 text-red-100/90">
                  Como el participante es menor de edad, necesitamos los datos
                  del padre, madre o tutor responsable.
                </p>

                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  <Field
                    label="Nombre del padre, madre o tutor"
                    name="nombrePadreMadre"
                    value={formData.nombrePadreMadre}
                    onChange={handleChange}
                    required={esMenor}
                  />

                  <Field
                    label="Teléfono del padre, madre o tutor"
                    name="telefonoPadreMadre"
                    value={formData.telefonoPadreMadre}
                    onChange={handleChange}
                    required={esMenor}
                  />
                </div>
              </section>
            )}

            {mostrarInvitado && (
              <section className="rounded-3xl border border-amber-400/25 bg-amber-400/10 p-6">
                <h3 className="text-xl font-bold text-amber-300">
                  Información de invitación
                </h3>
                <p className="mt-2 text-sm leading-6 text-amber-100/90">
                  Como marcaste que eres invitado, necesitamos saber quién te
                  invitó.
                </p>

                <div className="mt-5">
                  <Field
                    label="Nombre de quien te invitó"
                    name="invitadoPor"
                    value={formData.invitadoPor}
                    onChange={handleChange}
                    required={mostrarInvitado}
                  />
                </div>
              </section>
            )}

            <section>
              <h2 className="text-2xl font-bold text-white">
                Salud y cuidados
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                Estos datos nos ayudan a acompañarte y cuidarte mejor durante el
                campamento.
              </p>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <Field
                  label="¿Tiene algún tipo de alergia?"
                  name="alergias"
                  value={formData.alergias}
                  onChange={handleChange}
                  placeholder="Ej.: Alergia a penicilina, maní, picaduras, etc."
                />

                <Field
                  label="¿Qué remedio toma?"
                  name="medicamentos"
                  value={formData.medicamentos}
                  onChange={handleChange}
                  placeholder="Ej.: Antialérgicos, medicación diaria, etc."
                />

                <Field
                  label="¿Tiene enfermedad de base?"
                  name="enfermedadBase"
                  value={formData.enfermedadBase}
                  onChange={handleChange}
                  placeholder="Ej.: Asma, diabetes, hipertensión, etc."
                />

                <Field
                  label="Contacto de emergencia"
                  name="contactoEmergenciaNombre"
                  value={formData.contactoEmergenciaNombre}
                  onChange={handleChange}
                  placeholder="Nombre y apellido"
                />

                <Field
                  label="Teléfono de emergencia"
                  name="contactoEmergenciaTelefono"
                  value={formData.contactoEmergenciaTelefono}
                  onChange={handleChange}
                  placeholder="Número de contacto"
                />
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">
                Pago y observaciones
              </h2>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <SelectField
                  label="Forma de pago"
                  name="formaPago"
                  value={formData.formaPago}
                  onChange={handleChange}
                  required
                  options={[
                    { value: "", label: "Seleccionar" },
                    { value: "efectivo", label: "Efectivo" },
                    { value: "transferencia", label: "Transferencia" },
                  ]}
                />
              </div>

              <div className="mt-5">
                <TextAreaField
                  label="Observaciones"
                  name="observaciones"
                  value={formData.observaciones}
                  onChange={handleChange}
                  placeholder="Agrega aquí cualquier información adicional que sea importante para el equipo organizador."
                />
              </div>
            </section>

            <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
              <Link
                href="/bienvenida"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Volver
              </Link>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-2xl bg-sky-400 px-8 py-3 font-bold text-slate-950 shadow-[0_12px_28px_rgba(56,189,248,0.28)] transition hover:-translate-y-0.5 hover:bg-sky-300"
              >
                Enviar registro
              </button>
            </div>
        </form>
      </div>
    </main>
  );
}

type BaseFieldProps = {
  label: string;
  name: string;
  value: string;
  required?: boolean;
  placeholder?: string;
  onChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
};

function Field({
  label,
  name,
  value,
  required = false,
  placeholder,
  onChange,
  type = "text",
}: BaseFieldProps & { type?: string }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-slate-200">
        {label} {required && <span className="text-red-300">*</span>}
      </span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-300/50 focus:ring-2 focus:ring-sky-300/20"
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  value,
  required = false,
  onChange,
  options,
}: BaseFieldProps & {
  options: { value: string; label: string }[];
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-slate-200">
        {label} {required && <span className="text-red-300">*</span>}
      </span>
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none transition focus:border-sky-300/50 focus:ring-2 focus:ring-sky-300/20"
      >
        {options.map((option) => (
          <option
            key={option.value || option.label}
            value={option.value}
            className="bg-slate-900"
          >
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

function TextAreaField({
  label,
  name,
  value,
  placeholder,
  onChange,
}: BaseFieldProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-slate-200">
        {label}
      </span>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={5}
        className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-300/50 focus:ring-2 focus:ring-sky-300/20"
      />
    </label>
  );
}
