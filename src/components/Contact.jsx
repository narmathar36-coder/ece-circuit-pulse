import { useState } from "react";
import { Clock, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter, CheckCircle2 } from "lucide-react";
import { Button, Card, Reveal, Section, SectionHeading } from "./ui-kit";
import { contactInfo } from "../data/eceData";

const initialForm = { name: "", email: "", subject: "", message: "" };

const socials = [
  { Cmp: Linkedin, label: "LinkedIn" },
  { Cmp: Twitter, label: "Twitter" },
  { Cmp: Instagram, label: "Instagram" },
  { Cmp: Facebook, label: "Facebook" },
];

const details = [
  { Cmp: MapPin, label: "Address", value: contactInfo.address },
  { Cmp: Mail, label: "Email", value: contactInfo.email },
  { Cmp: Phone, label: "Phone", value: contactInfo.phone },
  { Cmp: Clock, label: "Working Hours", value: contactInfo.hours },
];

const inputClass =
  "w-full rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/60 focus:outline-none";

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);

  const update = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
    setSent(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setSent(true);
    setForm(initialForm);
  };

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Get in Touch"
        subtitle="Reach the department office for admissions guidance, project collaboration or industry partnership enquiries."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="flex h-full flex-col gap-6">
            <Card hover={false} className="p-7">
              <ul className="space-y-5">
                {details.map(({ Cmp, label, value }) => (
                  <li key={label} className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-accent">
                      <Cmp className="h-5 w-5" strokeWidth={1.6} />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-accent">{label}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{value}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex gap-3 border-t border-border pt-6">
                {socials.map(({ Cmp, label }) => (
                  <a
                    key={label}
                    href="#contact"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-primary/60 hover:text-accent"
                  >
                    <Cmp className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </Card>

            <Card hover={false} className="flex min-h-[220px] flex-1 items-center justify-center circuit-grid p-7 text-center">
              <div>
                <MapPin className="mx-auto h-8 w-8 text-accent" strokeWidth={1.5} />
                <p className="mt-3 font-display text-sm font-semibold">Campus Map</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Block C, Engineering Campus — map view placeholder
                </p>
              </div>
            </Card>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <Card hover={false} className="h-full p-7">
            <h3 className="text-lg font-semibold">Send us a message</h3>
            <form className="mt-6 space-y-4" onSubmit={onSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  required
                  className={inputClass}
                  placeholder="Your name"
                  value={form.name}
                  onChange={update("name")}
                />
                <input
                  required
                  type="email"
                  className={inputClass}
                  placeholder="Email address"
                  value={form.email}
                  onChange={update("email")}
                />
              </div>
              <input
                required
                className={inputClass}
                placeholder="Subject"
                value={form.subject}
                onChange={update("subject")}
              />
              <textarea
                required
                rows={6}
                className={`${inputClass} resize-none`}
                placeholder="Write your message..."
                value={form.message}
                onChange={update("message")}
              />
              <Button type="submit">
                Send Message <Send className="h-4 w-4" />
              </Button>
              {sent ? (
                <p className="flex items-center gap-2 text-sm text-accent">
                  <CheckCircle2 className="h-4 w-4" /> Thank you! Your message has been recorded.
                </p>
              ) : null}
            </form>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}
