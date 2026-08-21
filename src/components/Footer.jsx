import { CircuitBoard, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { contactInfo, learningTopics, navLinks } from "../data/eceData";

const go = (id) => (event) => {
  event.preventDefault();
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const socials = [Linkedin, Twitter, Instagram, Facebook];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-navy/60">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/20 text-accent ring-1 ring-border">
              <CircuitBoard className="h-6 w-6" strokeWidth={1.6} />
            </span>
            <span className="font-display text-lg font-bold">ECE</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            The Department of Electronics &amp; Communication Engineering blends strong fundamentals
            with hands-on laboratories, student innovation and industry-focused training.
          </p>
          <div className="mt-5 flex gap-3">
            {socials.map((Cmp, i) => (
              <a
                key={i}
                href="#contact"
                onClick={go("contact")}
                aria-label="Department social profile"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-primary/60 hover:text-accent"
              >
                <Cmp className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-accent">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.slice(0, 6).map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={go(link.id)}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-accent">
            Learning
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {learningTopics.slice(0, 6).map((topic) => (
              <li key={topic.title}>
                <a
                  href="#learning"
                  onClick={go("learning")}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {topic.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-accent">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>{contactInfo.address}</span>
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 shrink-0 text-accent" />
              <span>{contactInfo.email}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 shrink-0 text-accent" />
              <span>{contactInfo.phone}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border py-6">
        <p className="text-center text-xs text-muted-foreground">
          © 2026 ECE Department Digital Hub. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
