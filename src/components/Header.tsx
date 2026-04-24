"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const CBG_NAVY = "#1e3a5c";

function getTimeRemaining() {
  const target = new Date("2026-12-11T00:00:00-03:00");
  const now = new Date();
  const diff = target.getTime() - now.getTime();

  if (diff <= 0) return { days: 0, hours: 0, expired: true };

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  return { days, hours, expired: false };
}

export default function Header() {
  const pathname = usePathname();
  const [time, setTime] = useState(() => getTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeRemaining());
    }, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

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

        <nav className="hidden gap-6 text-sm font-medium uppercase tracking-wider sm:flex items-center">
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

          {/* ⏱️ SMALL RED COUNTDOWN BADGE */}
          {!time.expired && (
            <div
              className="ml-2 flex items-center gap-1.5 rounded-sm px-3 py-1.5 text-xs font-bold text-white"
              style={{ backgroundColor: "#dc2626" }}
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
              {time.days}d {time.hours}h
            </div>
          )}
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
