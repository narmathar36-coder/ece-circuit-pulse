import { Card, Icon, Reveal, Section, SectionHeading } from "./ui-kit";
import { achievements } from "../data/eceData";

export default function Achievements() {
  return (
    <Section id="achievements">
      <SectionHeading
        eyebrow="Achievements"
        title="Department Achievements"
        subtitle="Recognition earned by our students and faculty across competitions, research and industry certifications."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {achievements.map((item, i) => (
          <Reveal key={item.title} delay={(i % 4) * 70}>
            <Card className="group h-full p-6">
              <div className="flex items-start justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20 text-accent transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                  <Icon name={item.icon} className="h-6 w-6" />
                </span>
                <span className="font-display text-sm font-semibold text-signal">
                  {item.metric}
                </span>
              </div>
              <h3 className="mt-5 text-base font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
