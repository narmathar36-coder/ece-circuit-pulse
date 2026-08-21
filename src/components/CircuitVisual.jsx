import { Cpu, Wifi, RadioTower, Microchip, Zap, Bot } from "lucide-react";

const floatIcons = [
  { Cmp: Wifi, className: "left-2 top-6", delay: "0s" },
  { Cmp: RadioTower, className: "right-4 top-12", delay: "0.8s" },
  { Cmp: Microchip, className: "left-6 bottom-10", delay: "1.4s" },
  { Cmp: Bot, className: "right-8 bottom-6", delay: "0.4s" },
];

export default function CircuitVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      <div className="absolute inset-0 rounded-[2rem] circuit-grid opacity-70" />
      <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_center,color-mix(in_oklab,var(--primary)_28%,transparent),transparent_65%)]" />

      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
        <g stroke="var(--accent)" strokeWidth="1.4" fill="none" opacity="0.55">
          <path d="M40 90 H140 V60 H260" strokeDasharray="6 8" style={{ animation: "dash-flow 6s linear infinite" }} />
          <path d="M40 200 H110 V300 H250" strokeDasharray="6 8" style={{ animation: "dash-flow 8s linear infinite" }} />
          <path d="M360 140 H300 V240 H210" strokeDasharray="6 8" style={{ animation: "dash-flow 7s linear infinite" }} />
          <path d="M200 340 V300" strokeDasharray="4 6" style={{ animation: "dash-flow 5s linear infinite" }} />
        </g>
        <g fill="var(--primary)">
          {[
            [140, 60],
            [110, 300],
            [300, 140],
            [210, 240],
            [40, 200],
          ].map(([cx, cy]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="4.5" />
          ))}
        </g>
        <g stroke="var(--signal)" fill="none" strokeWidth="2" opacity="0.75">
          <path d="M290 330 q14 -22 28 0 q14 22 28 0" />
          <path d="M282 344 q22 -34 44 0 q22 34 44 0" opacity="0.5" />
        </g>
      </svg>

      <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-3xl glass p-4 sm:h-48 sm:w-48">
        <div className="flex h-full flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-navy/60">
          <Cpu className="h-12 w-12 text-accent" strokeWidth={1.3} />
          <span className="font-display text-xs uppercase tracking-[0.28em] text-muted-foreground">
            ECE Core
          </span>
        </div>
        <span
          className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-accent/50"
          style={{ animation: "signal-pulse 3.4s ease-in-out infinite" }}
        />
      </div>

      {floatIcons.map(({ Cmp, className, delay }, i) => (
        <span
          key={i}
          className={`absolute ${className} flex h-14 w-14 items-center justify-center rounded-2xl glass text-accent`}
          style={{ animation: `float-soft 6s ease-in-out ${delay} infinite` }}
        >
          <Cmp className="h-6 w-6" strokeWidth={1.5} />
        </span>
      ))}

      <span
        className="absolute right-1/2 top-2 flex h-12 w-12 translate-x-1/2 items-center justify-center rounded-2xl glass text-signal"
        style={{ animation: "float-soft 7s ease-in-out 1s infinite" }}
      >
        <Zap className="h-5 w-5" strokeWidth={1.6} />
      </span>
    </div>
  );
}
