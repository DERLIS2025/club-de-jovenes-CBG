"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const CBG_NAVY = "#1e3a5c";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { label: "INICIO", href: "/bienvenida" },
    { label: "CAMPAMENTO", href: "/campamento" },
    { label: "REGISTRO", href: "/registro" },
    { label: "REGLAMENTO", href: "/reglamento" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#e5e5e5] bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/bienvenida"
          className="font-serif text-xl font-bold tracking-tight"
          style={{ color: CBG_NAVY }}
        >
          JÓVENES CBG
        </Link>

        <nav className="hidden gap-8 text-sm font-medium uppercase tracking-wider sm:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="transition"
                style={{
                  color: isActive ? CBG_NAVY : "#666666",
                  fontWeight: isActive ? 600 : 500,
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/registro"
          className="rounded-sm px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white transition hover:opacity-90"
          style={{ backgroundColor: CBG_NAVY }}
        >
          Inscribirme
        </Link>
      </div>
    </header>
  );
}
