import { useEffect, useRef, useState } from "react";
import { Shield, Cloud, Network, Server, Router } from "lucide-react";
import { skillCategories, proficiencies } from "@/data/profile";

const icons = [Shield, Cloud, Network, Server, Router];

export default function Skills() {
  const barsRef = useRef<HTMLDivElement>(null);
  const [animateBars, setAnimateBars] = useState(false);

  useEffect(() => {
    if (!barsRef.current) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateBars(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(barsRef.current);
    return () => io.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 md:py-28 bg-[hsl(var(--surface))]">
      <div className="container">
        <div className="max-w-2xl reveal">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Skills
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold">
            Core technical capabilities
          </h2>
          <p className="mt-4 text-muted-foreground">
            A focused stack across firewalls, cloud security, load balancing and
            core networking.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => {
            const Icon = icons[i % icons.length];
            return (
              <article
                key={cat.title}
                className="reveal group rounded-xl border border-border bg-card p-6 hover:border-primary/40 hover:shadow-elegant hover:-translate-y-1 transition-all"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent text-accent-foreground group-hover:scale-110 transition-transform">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display font-semibold text-lg">
                    {cat.title}
                  </h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {cat.items.map((it) => (
                    <li
                      key={it}
                      className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        {/* Proficiency bars */}
        <div ref={barsRef} className="mt-14 grid lg:grid-cols-2 gap-x-12 gap-y-6 reveal">
          {proficiencies.map((p, idx) => (
            <div key={p.name}>
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">{p.name}</span>
                <span className="text-muted-foreground">{p.level}%</span>
              </div>
              <div className="mt-2 h-2 w-full rounded-full bg-secondary overflow-hidden">
                <div
                  className="h-full rounded-full gradient-accent transition-[width] duration-1000 ease-out"
                  style={{
                    width: animateBars ? `${p.level}%` : "0%",
                    transitionDelay: `${idx * 120}ms`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
