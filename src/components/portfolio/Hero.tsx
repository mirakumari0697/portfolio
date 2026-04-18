import { Download, Mail, MapPin, ArrowRight } from "lucide-react";
import { profile } from "@/data/profile";
import profilePhoto from "@/assets/profile-photo.jpeg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative gradient-hero pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      {/* subtle grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div className="container relative">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center">
          <div className="animate-fade-in-slow">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 backdrop-blur px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              Available for new opportunities
            </div>

            <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-balance">
              {profile.name}
              <span className="block mt-2 bg-gradient-to-r from-primary to-sky-500 bg-clip-text text-transparent">
                {profile.role}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              {profile.tagline} I design, deploy and defend enterprise security
              infrastructure — from Palo Alto firewalls to Zscaler cloud
              security.
            </p>

            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              {profile.location}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex h-11 items-center gap-2 rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-elegant hover:shadow-glow hover:-translate-y-0.5 transition-all"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex h-11 items-center gap-2 rounded-md border border-border bg-background px-5 text-sm font-semibold hover:bg-muted transition-colors"
              >
                <Mail className="h-4 w-4" />
                Get in touch
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Profile portrait placeholder */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-4 rounded-full gradient-accent opacity-20 blur-2xl"
              />
              {/* TODO: Replace src/assets/profile-photo.jpg with your real photo */}
              <img
                src={profilePhoto}
                alt={`${profile.name} — ${profile.role}`}
                width={288}
                height={288}
                className="relative h-56 w-56 sm:h-72 sm:w-72 rounded-full border-4 border-background shadow-glow object-cover"
              />
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-background border border-border px-4 py-1.5 text-xs font-semibold shadow-elegant whitespace-nowrap">
                🔐 Network Security Engineer
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
