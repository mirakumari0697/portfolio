import { GraduationCap, Award } from "lucide-react";
import { education, certifications } from "@/data/profile";

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28">
      <div className="container">
        <div className="max-w-2xl reveal">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Education & Certifications
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold">
            Foundations & credentials
          </h2>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-5">
          <article className="reveal rounded-2xl border border-border bg-card p-6 hover:shadow-elegant transition-all">
            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground">
                <GraduationCap className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold">
                  {education.degree}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {education.school}
                </p>
                <p className="mt-3 inline-block rounded-md bg-secondary px-2 py-0.5 text-xs font-semibold">
                  {education.period}
                </p>
              </div>
            </div>
          </article>

          <article className="reveal rounded-2xl border border-border bg-card p-6 hover:shadow-elegant transition-all">
            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl gradient-accent text-primary-foreground shadow-elegant">
                <Award className="h-5 w-5" />
              </span>
              <div className="w-full">
                <h3 className="font-display text-lg font-bold">
                  Certifications
                </h3>
                <ul className="mt-3 space-y-3">
                  {certifications.map((c) => (
                    <li
                      key={c.code}
                      className="flex items-center justify-between rounded-lg border border-border bg-background px-4 py-3"
                    >
                      <div>
                        <p className="font-medium text-sm">{c.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {c.issuer}
                        </p>
                      </div>
                      <span className="rounded-md gradient-accent px-2.5 py-1 text-xs font-bold text-primary-foreground">
                        {c.code}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
