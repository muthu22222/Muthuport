import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Github, Atom, Bot, Server, Zap, Wind, Target, Flame, Database, Download } from "lucide-react";
import profile from "@/assets/profile.jpg";
import resume from "@/assets/resume.jpg";
import resumePdf from "@/assets/resume.pdf";
import { downloadFile } from "@/lib/utils";

interface CountUpProps {
  to: number;
  duration?: number;
  suffix?: string;
}

function CountUp({ to, duration = 3.5, suffix = "" }: CountUpProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = to;
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / totalMiliseconds, 1);
      
      // Easing out quad
      const easeProgress = progress * (2 - progress);

      setCount(Math.floor(easeProgress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [to, duration]);

  return <>{count}{suffix}</>;
}

const orbitItems = [
  { icon: <Atom className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-400" />, color: "border-cyan-500/30" },
  { icon: <Github className="h-5 w-5 sm:h-6 sm:w-6 text-foreground" />, color: "border-slate-500/30" },
  { icon: <Bot className="h-5 w-5 sm:h-6 sm:w-6 text-purple-400" />, color: "border-purple-500/30" },
  { icon: <Server className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />, color: "border-green-500/30" },
  { icon: <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400" />, color: "border-yellow-500/30" },
  { icon: <Wind className="h-5 w-5 sm:h-6 sm:w-6 text-teal-400" />, color: "border-teal-500/30" },
  { icon: <Target className="h-5 w-5 sm:h-6 sm:w-6 text-pink-400" />, color: "border-pink-500/30" },
  { icon: <Flame className="h-5 w-5 sm:h-6 sm:w-6 text-orange-400" />, color: "border-orange-500/30" },
  { icon: <Database className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400" />, color: "border-blue-500/30" },
];

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
            className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold"
          >
            <Sparkles className="h-3 w-3 text-primary" />
            <span className="text-muted-foreground">Currently in freelancing</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Hi, I'm <span className="text-gradient">Muthukumaran</span>
            <br />
            <span className="text-gradient-primary">Full stack developer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-xl text-base font-bold text-muted-foreground/90 sm:text-lg"
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
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-105 glow-purple"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-foreground transition-all hover:bg-white/10"
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
              <div className="font-display text-2xl font-bold text-gradient-primary">
                <CountUp to={4} suffix="+" />
              </div>
              <div className="text-xs font-bold text-muted-foreground/90">Projects Completed</div>
            </div>
            <div>
              <div className="font-display text-2xl font-bold text-gradient-primary">
                <CountUp to={5} suffix="+" />
              </div>
              <div className="text-xs font-bold text-muted-foreground/90">Courses Completed</div>
            </div>
            <div>
              <div className="font-display text-2xl font-bold text-gradient-primary">
                <CountUp to={7} suffix="+" />
              </div>
              <div className="text-xs font-bold text-muted-foreground/90">Tools Learned</div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto flex flex-col items-center"
        >
          {/* Avatar Container with Orbit and Glow */}
          <div className="relative flex items-center justify-center h-72 w-72 sm:h-96 sm:w-96">
            {/* Orbital Spinning system */}
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none [--orbit-radius:130px] sm:[--orbit-radius:185px]">
              <motion.div
                className="relative h-[260px] w-[260px] sm:h-[370px] sm:w-[370px] rounded-full border border-dashed border-primary/20 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                {orbitItems.map((item, idx) => {
                  const angle = (idx * 360) / orbitItems.length;
                  return (
                    <div
                      key={idx}
                      className="absolute left-1/2 top-1/2 -ml-5 -mt-5 sm:-ml-6 sm:-mt-6"
                      style={{
                        transform: `rotate(${angle}deg) translateX(var(--orbit-radius)) rotate(-${angle}deg)`,
                      }}
                    >
                      <motion.div
                        className={`flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border bg-background/80 backdrop-blur-md shadow-lg pointer-events-auto transition-transform duration-300 hover:scale-110 hover:border-primary/60 ${item.color}`}
                        animate={{ rotate: -360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        {item.icon}
                      </motion.div>
                    </div>
                  );
                })}
              </motion.div>
            </div>
            
            {/* Glow effect */}
            <div className="absolute inset-0 animate-glow-pulse rounded-full bg-gradient-to-tr from-primary to-accent blur-2xl opacity-60" />
            
            {/* Portrait Image */}
            <div className="relative z-10 animate-float">
              <div className="rounded-full bg-gradient-to-tr from-primary via-accent to-primary p-1">
                <div className="rounded-full bg-background p-1">
                  <img
                    src={profile}
                    alt="Muthukumaran"
                    width={400}
                    height={400}
                    className="h-60 w-60 rounded-full object-cover sm:h-80 sm:w-80"
                  />
                </div>
              </div>
              <div className="glass absolute -bottom-2 -left-4 rounded-full px-4 py-2 text-xs">
                <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-green-400"></span>
                Open to work
              </div>
            </div>
          </div>

          {/* Download Resume Button */}
          <div className="mt-20 sm:mt-28 flex justify-center z-30">
            <a
              href={resumePdf || "/resume.pdf"}
              download="resume.pdf"
              onClick={(e) => {
                e.preventDefault();
                downloadFile(resumePdf || "/resume.pdf", "resume.pdf");
              }}
              className="glass inline-flex items-center gap-2 rounded-full border border-primary/30 hover:border-primary/60 px-5 py-2.5 text-xs font-display font-bold text-foreground hover:text-primary transition-all duration-300 hover:scale-105 bg-background/40 hover:bg-primary/5 shadow-md pointer-events-auto cursor-pointer"
            >
              <Download className="h-4 w-4 text-primary" />
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}