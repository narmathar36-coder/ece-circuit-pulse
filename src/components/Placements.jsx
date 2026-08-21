import { Briefcase, Building2 } from "lucide-react";
import { Card, Counter, Icon, Reveal, Section, SectionHeading, Tag } from "./ui-kit";
import { careerTracks, placementStats, recruiters } from "../data/eceData";

export default function Placements() {
  return (
    <Section id="placements">
      <SectionHeading
        eyebrow="Placements"
        title="Placements &amp; Careers"
        subtitle="Dedicated training in aptitude, core subjects and interview readiness, backed by strong core-sector and IT recruiter relationships."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_1fr]">
        <Reveal>
          <Card hover={false} className="h-full p-7">
            <h3 className="text-lg font-semibold">Placement Statistics</h3>
            <div className="mt-6 space-y-6">
              {placementStats.map((stat) => (
                <div key={stat.label}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{stat.label}</span>
                    <span className="font-display font-semibold text-accent">
                      <Counter value={stat.value} suffix="%" />
                    </span>
                  </div>
                  <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-surface-2">
                    <div
                      className="h-full rounded-full bg-[linear-gradient(90deg,var(--primary),var(--accent))] transition-[width] duration-1000"
                      style={{ width: `${stat.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </Reveal>

        <Reveal delay={100}>
          <Card hover={false} className="h-full p-7">
            <h3 className="flex items-center gap-2 text-lg font-semibold">
              <Building2 className="h-5 w-5 text-accent" /> Recruiting Partners
            </h3>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {recruiters.map((company) => (
                <div
                  key={company}
                  className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-center text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {company}
                </div>
              ))}
            </div>
          </Card>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {careerTracks.map((track, i) => (
          <Reveal key={track.title} delay={(i % 3) * 70}>
            <Card className="flex h-full flex-col p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 text-accent">
                <Icon name={track.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{track.title}</h3>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-accent">
                Job Roles
              </p>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                {track.roles.map((role) => (
                  <li key={role} className="flex items-center gap-2">
                    <Briefcase className="h-3.5 w-3.5 text-accent" /> {role}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-accent">
                Required Skills
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {track.skills.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
