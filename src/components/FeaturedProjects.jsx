import { ArrowRight } from "lucide-react";
import { Button, Card, Icon, Reveal, Section, SectionHeading, Tag } from "./ui-kit";
import { projects } from "../data/eceData";

const featured = projects.slice(0, 3);

const scrollToProjects = () => {
  const el = document.getElementById("projects");
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function FeaturedProjects() {
  return (
    <Section id="featured">
      <SectionHeading
        eyebrow="Featured"
        title="Featured Projects"
        subtitle="A quick look at student prototypes currently on display at the department innovation centre."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {featured.map((project, i) => (
          <Reveal key={project.title} delay={i * 80}>
            <Card className="flex h-full flex-col p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 text-accent">
                <Icon name={project.icon} className="h-6 w-6" />
              </span>
              <span className="mt-5 text-xs uppercase tracking-wider text-accent">
                {project.category}
              </span>
              <h3 className="mt-2 text-lg font-semibold">{project.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.slice(0, 3).map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <div className="mt-10 flex justify-center">
          <Button variant="outline" onClick={scrollToProjects}>
            View All Projects <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
