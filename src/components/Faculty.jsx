import { Linkedin, Mail } from "lucide-react";
import { Card, Reveal, Section, SectionHeading } from "./ui-kit";
import { faculty } from "../data/eceData";

export default function Faculty() {
  return (
    <Section id="faculty">
      <SectionHeading
        eyebrow="Faculty"
        title="Meet Our Faculty"
        subtitle="Experienced teachers and active researchers guiding students across communication, VLSI, embedded systems and intelligent electronics."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {faculty.map((member, i) => (
          <Reveal key={member.email} delay={(i % 4) * 80}>
            <Card className="group h-full overflow-hidden">
              <div className="relative flex h-36 items-center justify-center circuit-grid bg-navy/60">
                <span className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/25 font-display text-2xl font-bold text-accent ring-1 ring-border transition-transform duration-300 group-hover:scale-105">
                  {member.initials}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold">{member.name}</h3>
                <p className="text-sm text-accent">{member.designation}</p>
                <p className="mt-3 text-xs text-muted-foreground">{member.qualification}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Specialization: {member.specialization}
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-accent"
                  >
                    <Mail className="h-4 w-4" /> Email
                  </a>
                  <a
                    href="#faculty"
                    aria-label={`LinkedIn profile of ${member.name}`}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/60 hover:text-accent"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
