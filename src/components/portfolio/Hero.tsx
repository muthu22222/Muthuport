import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import profile from "@/assets/profile.jpg";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute top-20 -left-32 h-96 w-96 animate-blob rounded-full bg-primary/30 blur-3xl" />
      <div
        className="absolute bottom-10 right-0 h-96 w-96 animate-blob rounded-full bg-accent/30 blur-3xl"
        style={{ animationDelay: "5s" }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-12 px-6 lg:grid-cols-[1.3fr_1fr] lg:items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs"
          >
            <Sparkles className="h-3 w-3 text-primary" />
            <span className="text-muted-foreground">Available for Freelance & Internships</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Hi, I'm <span className="text-gradient">Muthukumaran</span>
            <br />
            <span className="text-muted-foreground">I build</span>{" "}
            <span className="text-gradient-primary">premium</span>
            <br />
            digital experiences.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg"
          >
            Full Stack Web Developer & UI/UX Designer crafting fast, beautiful
            interfaces with React, Node.js and a designer's eye for detail.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 glow-purple"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-white/10"
            >
              Hire Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12 flex flex-wrap gap-8 text-sm"
          >
            <div>
              <div className="font-display text-2xl font-bold text-gradient-primary">5+</div>
              <div className="text-xs text-muted-foreground">Projects Shipped</div>
            </div>
            <div>
              <div className="font-display text-2xl font-bold text-gradient-primary">3rd</div>
              <div className="text-xs text-muted-foreground">Year CSE Student</div>
            </div>
            <div>
              <div className="font-display text-2xl font-bold text-gradient-primary">∞</div>
              <div className="text-xs text-muted-foreground">Cups of Coffee</div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative mx-auto"
        >
          <div className="absolute inset-0 animate-glow-pulse rounded-full bg-gradient-to-tr from-primary to-accent blur-2xl opacity-60" />
          <div className="relative animate-float">
            <div className="rounded-full bg-gradient-to-tr from-primary via-accent to-primary p-1">
              <div className="rounded-full bg-background p-1">
                <img
                  src={profile}
                  alt="Muthukumaran"
                  width={400}
                  height={400}
                  className="h-72 w-72 rounded-full object-cover sm:h-80 sm:w-80"
                />
              </div>
            </div>
            <div className="glass absolute -bottom-2 -left-4 rounded-full px-4 py-2 text-xs">
              <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-green-400"></span>
              Open to work
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}