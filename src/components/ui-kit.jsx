import { useEffect, useRef, useState } from "react";
import * as Icons from "lucide-react";

export function Icon({ name, className = "h-5 w-5" }) {
  const Cmp = Icons[name] || Icons.CircuitBoard;
  return <Cmp className={className} strokeWidth={1.6} aria-hidden="true" />;
}

export function useInView(options = { threshold: 0.15 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      });
    }, options);
    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, visible];
}

export function Reveal({ children, delay = 0, className = "" }) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${className}`}
    >
      {children}
    </div>
  );
}

export function Section({ id, children, className = "" }) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 sm:py-24 ${className}`}>
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, subtitle, align = "center" }) {
  const alignment = align === "left" ? "text-left" : "text-center mx-auto";
  return (
    <Reveal>
      <div className={`max-w-3xl ${alignment}`}>
        {eyebrow ? (
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-accent">
            {eyebrow}
          </span>
        ) : null}
        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">{title}</h2>
        {subtitle ? (
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">{subtitle}</p>
        ) : null}
      </div>
    </Reveal>
  );
}

export function Card({ children, className = "", hover = true }) {
  return (
    <div className={`glass ${hover ? "glass-hover" : ""} rounded-2xl ${className}`}>{children}</div>
  );
}

const buttonStyles = {
  primary:
    "bg-primary text-primary-foreground hover:brightness-110 shadow-[0_18px_40px_-20px_var(--primary)]",
  accent: "bg-accent text-accent-foreground hover:brightness-110",
  outline: "border border-border bg-surface-2 text-foreground hover:border-primary/60",
  ghost: "text-muted-foreground hover:text-foreground",
};

export function Button({ variant = "primary", className = "", as = "button", ...props }) {
  const Cmp = as;
  return (
    <Cmp
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${buttonStyles[variant]} ${className}`}
      {...props}
    />
  );
}

export function Chip({ active, children, ...props }) {
  return (
    <button
      type="button"
      className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors duration-300 ${
        active
          ? "border-transparent bg-primary text-primary-foreground"
          : "border-border bg-surface-2 text-muted-foreground hover:text-foreground"
      }`}
      {...props}
    >
      {children}
    </button>
  );
}

export function Tag({ children }) {
  return (
    <span className="rounded-md border border-border bg-surface-2 px-2 py-1 text-xs text-muted-foreground">
      {children}
    </span>
  );
}

export function Counter({ value, suffix = "" }) {
  const [ref, visible] = useInView({ threshold: 0.4 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!visible) return;
    let frame;
    const duration = 1400;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [visible, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
