import { useMemo, useState } from "react";
import { ArrowUpRight, Search, Users } from "lucide-react";
import { Button, Card, Chip, Icon, Reveal, Section, SectionHeading, Tag } from "./ui-kit";
import { projectCategories, projects } from "../data/eceData";

export default function Projects() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const matchesCategory = category === "All" || p.category === category;
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tech.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Student Projects"
        title="Project Showcase"
        subtitle="Working prototypes built by our students across embedded systems, IoT, VLSI, robotics, communication and applied machine learning."
      />

      <Reveal>
        <div className="mt-10 flex flex-col gap-4">
          <label className="relative block">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects by title, description or component..."
              className="w-full rounded-xl border border-border bg-surface-2 py-3 pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/60 focus:outline-none"
            />
          </label>
          <div className="flex flex-wrap gap-2">
            {projectCategories.map((c) => (
              <Chip key={c} active={category === c} onClick={() => setCategory(c)}>
                {c}
              </Chip>
            ))}
          </div>
        </div>
      </Reveal>

      {filtered.length === 0 ? (
        <p className="mt-12 text-center text-sm text-muted-foreground">
          No projects match your search. Try a different keyword or category.
        </p>
      ) : (
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((project, i) => (
            <Reveal key={project.title} delay={(i % 3) * 70}>
              <Card className="group flex h-full flex-col overflow-hidden">
                <div className="relative flex h-36 items-center justify-center circuit-grid bg-navy/60">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/25 text-accent transition-transform duration-300 group-hover:scale-110">
                    <Icon name={project.icon} className="h-8 w-8" />
                  </span>
                  <span className="absolute right-3 top-3 rounded-full border border-border bg-navy/80 px-3 py-1 text-[11px] font-medium text-accent">
                    {project.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                  <p className="mt-4 flex items-start gap-2 text-xs text-muted-foreground">
                    <Users className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {project.team.join(", ")}
                  </p>
                  <Button variant="outline" className="mt-6 self-start">
                    View Project <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      )}
    </Section>
  );
}
