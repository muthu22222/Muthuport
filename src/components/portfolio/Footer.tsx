import { Github, Linkedin, Instagram } from "lucide-react";

const socialLinks = [
  { Icon: Github, href: "https://github.com/muthu22222/Muthuport" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/muthu-mk/" },
  { Icon: Instagram, href: "https://www.instagram.com/frozynnnn/" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} <span className="text-gradient-primary font-semibold">Muthukumaran</span> · Built with React & Tailwind CSS
        </div>
        <div className="flex gap-3">
          {socialLinks.map(({ Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
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