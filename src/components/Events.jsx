import { useMemo, useState } from "react";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import { Button, Card, Chip, Icon, Reveal, Section, SectionHeading } from "./ui-kit";
import { eventCategories, events } from "../data/eceData";

export default function Events() {
  const [category, setCategory] = useState("All");

  const filtered = useMemo(
    () => (category === "All" ? events : events.filter((e) => e.category === category)),
    [category],
  );

  return (
    <Section id="events">
      <SectionHeading
        eyebrow="Events"
        title="Upcoming Events"
        subtitle="Workshops, hackathons, seminars and the annual symposium — all organised by the department and open to students."
      />

      <Reveal>
        <div className="mt-10 flex flex-wrap gap-2">
          {eventCategories.map((c) => (
            <Chip key={c} active={category === c} onClick={() => setCategory(c)}>
              {c}
            </Chip>
          ))}
        </div>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((event, i) => (
          <Reveal key={event.title} delay={(i % 3) * 70}>
            <Card className="group flex h-full flex-col overflow-hidden">
              <div className="relative flex h-32 items-center justify-center circuit-grid bg-navy/60">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/20 text-accent transition-transform duration-300 group-hover:scale-110">
                  <Icon name={event.icon} className="h-7 w-7" />
                </span>
                <span className="absolute left-3 top-3 rounded-full border border-border bg-navy/80 px-3 py-1 text-[11px] text-accent">
                  {event.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold">{event.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-accent" /> {event.date}
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-accent" /> {event.time}
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {event.venue}
                  </li>
                </ul>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {event.description}
                </p>
                <Button className="mt-6 self-start">Register</Button>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
