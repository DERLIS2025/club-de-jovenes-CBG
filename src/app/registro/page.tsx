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
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/registro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorPayload = await response.json().catch(() => null);

        setSubmitError(
          errorPayload?.error ??
            "No se pudo guardar tu registro. Inténtalo nuevamente."
        );
        return;
      }

      router.push("/reglamento");
    } catch (error) {
      console.error("Error:", error);
      setSubmitError(
        "No se pudo conectar con el servidor. Inténtalo de nuevo."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-widest text-sky-200">
            Club de Jóvenes CBG
          </p>

          <h1 className="text-4xl font-extrabold mt-4">
            Registro Campamento 2026
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

          <Field label="Nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />
          <Field label="Apellido" name="apellido" value={formData.apellido} onChange={handleChange} required />
          <Field label="Edad" name="edad" type="number" value={formData.edad} onChange={handleChange} required />
          <Field label="Teléfono" name="telefono" value={formData.telefono} onChange={handleChange} required />
          <Field label="Cédula" name="cedula" value={formData.cedula} onChange={handleChange} required />

          <SelectField
            label="¿Es invitado?"
            name="esInvitado"
            value={formData.esInvitado}
            onChange={handleChange}
            required
            options={[
              { value: "", label: "Seleccionar" },
              { value: "si", label: "Sí" },
              { value: "no", label: "No" },
            ]}
          />

          {mostrarInvitado && (
            <Field
              label="¿Quién te invitó?"
              name="invitadoPor"
              value={formData.invitadoPor}
              onChange={handleChange}
              required
            />
          )}

          {esMenor && (
            <>
              <Field
                label="Nombre del tutor"
                name="nombrePadreMadre"
                value={formData.nombrePadreMadre}
                onChange={handleChange}
                required
              />
              <Field
                label="Teléfono del tutor"
                name="telefonoPadreMadre"
                value={formData.telefonoPadreMadre}
                onChange={handleChange}
                required
              />
            </>
          )}

          {submitError && (
            <p className="text-red-400 text-sm">{submitError}</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-sky-400 text-black px-6 py-3 rounded-xl font-bold"
          >
            {isSubmitting ? "Enviando..." : "Enviar registro"}
          </button>

          <Link href="/bienvenida" className="block mt-4 text-center underline">
            Volver
          </Link>
        </form>
      </div>
    </main>
  );
}

/* COMPONENTES */

function Field({ label, name, value, onChange, required = false, type = "text" }: any) {
  return (
    <input
      type={type}
      name={name}
      placeholder={label}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full p-3 rounded-xl bg-slate-800"
    />
  );
}

function SelectField({ label, name, value, onChange, options, required = false }: any) {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full p-3 rounded-xl bg-slate-800"
    >
      {options.map((o: any) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
}