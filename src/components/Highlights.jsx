import { Card, Icon, Reveal, Section, SectionHeading } from "./ui-kit";
import { highlights } from "../data/eceData";

export default function Highlights() {
  return (
    <Section id="highlights" className="pt-4">
      <SectionHeading
        eyebrow="Highlights"
        title="Department Highlights"
        subtitle="What makes learning here practical, current and industry-connected."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {highlights.map((item, i) => (
          <Reveal key={item.title} delay={i * 70}>
            <Card className="h-full p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20 text-accent">
                <Icon name={item.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
