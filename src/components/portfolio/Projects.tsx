import { Rocket, ShieldCheck, RefreshCw } from "lucide-react";
import { projects } from "@/data/profile";

const icons = [Rocket, ShieldCheck, RefreshCw];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 bg-[hsl(var(--surface))]">
      <div className="container">
        <div className="max-w-2xl reveal">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Projects
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold">
            Key projects & accomplishments
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {projects.map((p, i) => {
            const Icon = icons[i % icons.length];
            return (
              <article
                key={p.title}
                className="reveal group relative overflow-hidden rounded-2xl border border-border bg-card p-6 hover:shadow-glow hover:-translate-y-1 transition-all"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div
                  aria-hidden
                  className="absolute -top-16 -right-16 h-40 w-40 rounded-full gradient-accent opacity-10 group-hover:opacity-20 transition-opacity"
                />
                <span className="grid h-12 w-12 place-items-center rounded-xl gradient-accent text-primary-foreground shadow-elegant">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold">{p.title}</h3>
                <p className="mt-1 inline-block rounded-md bg-accent px-2 py-0.5 text-xs font-semibold text-accent-foreground">
                  {p.impact}
                </p>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  {p.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
