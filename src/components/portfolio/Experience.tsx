import { Briefcase, MapPin, Calendar } from "lucide-react";
import { experience } from "@/data/profile";

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="container">
        <div className="max-w-2xl reveal">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Experience
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold">
            Where I've made an impact
          </h2>
        </div>

        <div className="mt-12 relative">
          <div
            aria-hidden
            className="absolute left-4 md:left-6 top-2 bottom-2 w-px bg-border"
          />
          <ol className="space-y-8">
            {experience.map((job, i) => (
              <li
                key={job.company}
                className="reveal relative pl-12 md:pl-20"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="absolute left-0 md:left-2 top-1 grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground shadow-elegant">
                  <Briefcase className="h-4 w-4" />
                </span>
                <article className="rounded-xl border border-border bg-card p-6 hover:shadow-elegant hover:-translate-y-1 transition-all">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <h3 className="font-display text-xl font-bold">
                        {job.role}
                      </h3>
                      <p className="text-primary font-semibold">{job.company}</p>
                    </div>
                    <div className="flex flex-col sm:items-end text-xs text-muted-foreground gap-1">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {job.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" />
                        {job.location}
                      </span>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {job.points.map((pt) => (
                      <li
                        key={pt}
                        className="relative pl-5 text-sm text-muted-foreground leading-relaxed"
                      >
                        <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-primary" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
