"use client";

import { useEffect, useState } from "react";

const CBG_GOLD = "#b8860b";

function getTimeRemaining(targetDate: Date) {
  const now = new Date();
  const diff = targetDate.getTime() - now.getTime();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds, expired: false };
}

export default function Countdown() {
  // Target: December 11, 2026 at 00:00:00
  const [targetDate] = useState(() => new Date("2026-12-11T00:00:00-03:00"));
  const [time, setTime] = useState(() => getTimeRemaining(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeRemaining(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const items = [
    { value: time.days, label: "DÍAS" },
    { value: time.hours, label: "HORAS" },
    { value: time.minutes, label: "MINUTOS" },
    { value: time.seconds, label: "SEGUNDOS" },
  ];

  return (
    <div className="flex items-center justify-center gap-3 sm:gap-6">
      {items.map((item, index) => (
        <div key={item.label} className="flex items-center gap-3 sm:gap-6">
          <div className="text-center">
            <div
              className="flex h-16 w-16 items-center justify-center rounded-lg text-2xl font-bold text-white sm:h-20 sm:w-20 sm:text-3xl"
              style={{ backgroundColor: CBG_GOLD }}
            >
              {String(item.value).padStart(2, "0")}
            </div>
            <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-white/70">
              {item.label}
            </p>
          </div>
          {index < items.length - 1 && (
            <span className="text-2xl font-bold text-white/50 sm:text-3xl">:</span>
          )}
        </div>
      ))}
    </div>
  );
}
