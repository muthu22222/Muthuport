import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="glass flex items-center justify-between rounded-full px-6 py-3">
          <a href="#home" className="font-display text-lg !font-bold tracking-tight">
            <span className="text-gradient-primary">MK.</span>
          </a>
          <ul className="hidden items-center gap-3 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <motion.a
                  href={l.href}
                  className="text-xs sm:text-sm font-display !font-extrabold text-foreground/90 hover:text-primary transition-all duration-300 block border border-primary/30 hover:border-primary/60 px-3.5 py-1.5 rounded-full bg-primary/5 hover:bg-primary/10 shadow-sm"
                  whileHover={{
                    textShadow: "0 0 12px rgba(168, 85, 247, 0.8), 0 0 22px rgba(168, 85, 247, 0.4)",
                    scale: 1.05,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  {l.label}
                </motion.a>
              </li>
            ))}
          </ul>
          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <a
              href="#contact"
              className="rounded-full bg-gradient-to-r from-primary to-accent px-5 py-2 text-sm font-display !font-bold text-primary-foreground transition-transform hover:scale-105"
            >
              Hire Me
            </a>
          </div>
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setOpen(!open)}
              className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-primary/5 border border-primary/20 hover:border-primary/40 text-foreground transition-all hover:scale-105 cursor-pointer"
              aria-label="Toggle menu"
            >
              <div className="relative h-5 w-6 flex flex-col justify-center items-center">
                <span className={`absolute block h-0.5 w-6 bg-foreground transition-all duration-300 ${open ? "rotate-45" : "-translate-y-1.5"}`}></span>
                <span className={`absolute block h-0.5 w-6 bg-foreground transition-all duration-300 ${open ? "opacity-0" : "opacity-100"}`}></span>
                <span className={`absolute block h-0.5 w-6 bg-foreground transition-all duration-300 ${open ? "-rotate-45" : "translate-y-1.5"}`}></span>
              </div>
            </button>
          </div>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="glass mt-2 rounded-2xl p-4 md:hidden"
            >
              <ul className="space-y-3">
                {links.map((l) => (
                  <li key={l.href}>
                    <motion.a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block text-sm font-display !font-extrabold text-foreground/90 hover:text-primary transition-all duration-300 border border-primary/30 hover:border-primary/60 px-4 py-2.5 rounded-xl bg-primary/5 hover:bg-primary/10"
                      whileHover={{
                        textShadow: "0 0 12px rgba(168, 85, 247, 0.8), 0 0 22px rgba(168, 85, 247, 0.4)",
                        scale: 1.02,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                    >
                      {l.label}
                    </motion.a>
                  </li>
                ))}
                <li className="pt-2">
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-primary to-accent py-3 text-sm font-display !font-bold text-primary-foreground transition-transform hover:scale-102 shadow-md cursor-pointer"
                  >
                    Hire Me
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}