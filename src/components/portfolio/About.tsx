import { profile, stats } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container">
        <div className="max-w-3xl reveal">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            About
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold">
            Securing networks at enterprise scale.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            {profile.summary}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="reveal rounded-xl border border-border bg-card p-6 hover:shadow-elegant hover:-translate-y-1 transition-all"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="font-display text-3xl sm:text-4xl font-bold text-primary">
                {s.value}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
