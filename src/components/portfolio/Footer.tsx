import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} <span className="text-gradient-primary font-semibold">Muthukumaran</span> · Built with React & Tailwind CSS
        </div>
        <div className="flex gap-3">
          {[Github, Linkedin, Twitter, Instagram].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white transition-all hover:scale-110"
            >
              <Icon className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}