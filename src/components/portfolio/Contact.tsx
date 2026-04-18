import { Mail, Phone, Linkedin, Github, Download } from "lucide-react";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-[hsl(var(--surface))] border-t border-border"
    >
      <div className="container">
        <div className="max-w-2xl mx-auto text-center reveal">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Contact
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold">
            Let's build something secure together.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Have an opportunity, project or question? I'd love to hear from you.
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-flex h-12 items-center gap-2 rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-elegant hover:shadow-glow hover:-translate-y-0.5 transition-all"
          >
            <Mail className="h-4 w-4" />
            {profile.email}
          </a>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${profile.phone.replace(/\s+/g, "")}`}
              className="inline-flex h-10 items-center gap-2 rounded-md border border-border bg-background px-4 text-sm font-medium hover:bg-muted transition-colors"
            >
              <Phone className="h-4 w-4 text-primary" />
              {profile.phone}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-md border border-border bg-background px-4 text-sm font-medium hover:bg-muted transition-colors"
            >
              <Linkedin className="h-4 w-4 text-primary" />
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-md border border-border bg-background px-4 text-sm font-medium hover:bg-muted transition-colors"
            >
              <Github className="h-4 w-4 text-primary" />
              GitHub
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex h-10 items-center gap-2 rounded-md border border-border bg-background px-4 text-sm font-medium hover:bg-muted transition-colors"
            >
              <Download className="h-4 w-4 text-primary" />
              Resume PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
