import { ArrowRight, BookOpen, Sparkles } from "lucide-react";
import { Button, Counter, Reveal } from "./ui-kit";
import CircuitVisual from "./CircuitVisual";
import { stats } from "../data/eceData";

const scrollTo = (id) => () => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-20">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal>
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-accent">
              <Sparkles className="h-3.5 w-3.5" /> Department Digital Hub
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">
              Electronics &amp; Communication{" "}
              <span className="text-gradient">Engineering</span>
            </h1>
            <p className="mt-4 font-display text-xl font-semibold text-accent sm:text-2xl">
              Learn. Build. Innovate.
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Explore electronics, communication technologies, embedded systems and emerging
              innovations through practical learning and student projects.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button onClick={scrollTo("projects")}>
                Explore Projects <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" onClick={scrollTo("learning")}>
                <BookOpen className="h-4 w-4" /> Explore Learning Hub
              </Button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <CircuitVisual />
        </Reveal>
      </div>

      <div className="mx-auto mt-16 w-full max-w-7xl px-5 sm:px-8">
        <Reveal>
          <dl className="grid grid-cols-2 gap-4 rounded-3xl glass p-6 sm:p-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <dt className="font-display text-3xl font-bold text-gradient sm:text-4xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </dt>
                <dd className="mt-1 text-sm text-muted-foreground">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
