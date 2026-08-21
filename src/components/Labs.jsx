import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button, Card, Icon, Reveal, Section, SectionHeading, Tag } from "./ui-kit";
import { labs } from "../data/eceData";

export default function Labs() {
  const [openLab, setOpenLab] = useState(null);

  return (
    <Section id="labs">
      <SectionHeading
        eyebrow="Laboratories"
        title="Our Laboratories"
        subtitle="Purpose-built labs where theory becomes working hardware — from breadboard logic to FPGA design and RF measurement."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {labs.map((lab, i) => {
          const open = openLab === lab.name;
          return (
            <Reveal key={lab.name} delay={(i % 3) * 80}>
              <Card className="flex h-full flex-col p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 text-accent">
                  <Icon name={lab.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{lab.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {lab.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {lab.tech.slice(0, 3).map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>

                {open ? (
                  <div className="mt-5 space-y-4 rounded-xl border border-border bg-surface-2 p-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                        Major Equipment
                      </p>
                      <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                        {lab.equipment.map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                        Technologies Used
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {lab.tech.map((t) => (
                          <Tag key={t}>{t}</Tag>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : null}

                <Button
                  variant="outline"
                  className="mt-6 self-start"
                  onClick={() => setOpenLab(open ? null : lab.name)}
                  aria-expanded={open}
                >
                  {open ? "Hide Details" : "View Details"}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                  />
                </Button>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
