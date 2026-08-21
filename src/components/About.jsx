import { Check, Eye, Target } from "lucide-react";
import { Card, Icon, Reveal, Section, SectionHeading } from "./ui-kit";
import { careerFields, missionPoints } from "../data/eceData";

export default function About() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About"
        title="About the Department"
        subtitle="Electronics and Communication Engineering sits at the centre of modern technology — powering smartphones, satellites, medical devices, electric vehicles, industrial automation and the networks that connect them. Our department combines strong fundamentals with laboratory practice so students can design, test and deploy real electronic systems."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <Reveal>
          <Card className="h-full p-7">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 text-accent">
              <Eye className="h-6 w-6" strokeWidth={1.6} />
            </span>
            <h3 className="mt-5 text-xl font-semibold">Vision</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              To develop technically skilled and innovative engineers capable of solving real-world
              challenges.
            </p>
          </Card>
        </Reveal>

        <Reveal delay={100}>
          <Card className="h-full p-7">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20 text-accent">
              <Target className="h-6 w-6" strokeWidth={1.6} />
            </span>
            <h3 className="mt-5 text-xl font-semibold">Mission</h3>
            <ul className="mt-4 space-y-3">
              {missionPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>
      </div>

      <div className="mt-16">
        <SectionHeading title="Career Opportunities" align="center" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {careerFields.map((field, i) => (
            <Reveal key={field.title} delay={i * 60}>
              <Card className="group flex h-full items-center gap-4 p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-accent transition-transform duration-300 group-hover:scale-110">
                  <Icon name={field.icon} />
                </span>
                <span className="text-sm font-semibold">{field.title}</span>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
