import { ArrowUp } from "lucide-react";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} {profile.name}. Crafted with care.
        </p>
        <a
          href="#home"
          className="inline-flex items-center gap-1.5 font-medium hover:text-foreground transition-colors"
        >
          Back to top
          <ArrowUp className="h-4 w-4" />
        </a>
      </div>
    </footer>
  );
}
