import { useMemo, useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import { Button, Card, Chip, Icon, Reveal, Section, SectionHeading } from "./ui-kit";
import { learningLevels, learningTopics } from "../data/eceData";

const levelStyles = {
  Beginner: "bg-accent/20 text-accent",
  Intermediate: "bg-primary/25 text-foreground",
  Advanced: "bg-signal/20 text-signal",
};

export default function LearningHub() {
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return learningTopics.filter((topic) => {
      const matchesLevel = level === "All" || topic.level === level;
      const matchesQuery =
        !q ||
        topic.title.toLowerCase().includes(q) ||
        topic.description.toLowerCase().includes(q);
      return matchesLevel && matchesQuery;
    });
  }, [query, level]);

  return (
    <Section id="learning">
      <SectionHeading
        eyebrow="Learning Hub"
        title="Learning Resources"
        subtitle="Structured starting points for the core skills every ECE student needs, from first Arduino sketch to advanced RTL design."
      />

      <Reveal>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <label className="relative block w-full sm:max-w-sm">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search topics..."
              className="w-full rounded-xl border border-border bg-surface-2 py-3 pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/60 focus:outline-none"
            />
          </label>
          <div className="flex flex-wrap gap-2">
            {learningLevels.map((l) => (
              <Chip key={l} active={level === l} onClick={() => setLevel(l)}>
                {l}
              </Chip>
            ))}
          </div>
        </div>
      </Reveal>

      {filtered.length === 0 ? (
        <p className="mt-12 text-center text-sm text-muted-foreground">
          No learning topics match this filter.
        </p>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {filtered.map((topic, i) => (
            <Reveal key={topic.title} delay={(i % 4) * 70}>
              <Card className="flex h-full flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/20 text-accent">
                    <Icon name={topic.icon} />
                  </span>
                  <span
                    className={`rounded-full px-3 py-1 text-[11px] font-medium ${levelStyles[topic.level]}`}
                  >
                    {topic.level}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold">{topic.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {topic.description}
                </p>
                <Button variant="ghost" className="mt-5 self-start px-0">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Button>
              </Card>
            </Reveal>
          ))}
        </div>
      )}
    </Section>
  );
}
