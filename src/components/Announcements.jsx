import { ArrowRight, CalendarDays, Megaphone } from "lucide-react";
import { Button, Card, Reveal, Section, SectionHeading } from "./ui-kit";
import { announcements } from "../data/eceData";

export default function Announcements() {
  return (
    <Section id="announcements">
      <SectionHeading
        eyebrow="Announcements"
        title="Latest Announcements"
        subtitle="Academic notices, workshop invitations and opportunities published by the department."
      />

      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {announcements.map((item, i) => (
          <Reveal key={item.title} delay={(i % 2) * 80}>
            <Card className="flex h-full gap-5 p-6">
              <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-accent sm:flex">
                <Megaphone className="h-6 w-6" strokeWidth={1.6} />
              </span>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                  <span className="rounded-full border border-border bg-surface-2 px-3 py-1 text-accent">
                    {item.category}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CalendarDays className="h-3.5 w-3.5" /> {item.date}
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                <Button variant="ghost" className="mt-4 px-0">
                  Read More <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
