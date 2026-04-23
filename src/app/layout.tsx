import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "club_de_jovenes_CBG.com",
  description: "Campamento 2026 - Club de Jóvenes C.B.G"
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
