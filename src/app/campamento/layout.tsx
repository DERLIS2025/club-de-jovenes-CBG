import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gracia Camp 2026 | Jóvenes CBG",
  description:
    "Campamento 2026 de Jóvenes CBG. Por gracia somos salvos — Efesios 2:8.",
  alternates: {
    canonical: "/campamento",
  },
  openGraph: {
    title: "Gracia Camp 2026 | Jóvenes CBG",
    description:
      "Campamento 2026 de Jóvenes CBG. Por gracia somos salvos — Efesios 2:8.",
    url: "https://jovenescbg.vercel.app/campamento",
    siteName: "Jóvenes CBG",
    type: "website",
    locale: "es_PY",
    images: [
      {
        url: "https://jovenescbg.vercel.app/og/gracia-camp-whatsapp.png",
        width: 1200,
        height: 630,
        alt: "Gracia Camp 2026 - Jóvenes CBG",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gracia Camp 2026 | Jóvenes CBG",
    description:
      "Campamento 2026 de Jóvenes CBG. Por gracia somos salvos — Efesios 2:8.",
    images: ["https://jovenescbg.vercel.app/og/gracia-camp-whatsapp.png"],
  },
};

export default function CampamentoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
