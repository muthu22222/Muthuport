import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Code2 } from "lucide-react";
import { SectionHeader } from "./Section";

const timeline = [
  {
    year: "2023 — Present",
    title: "B.E. Computer Science Engineering",
    place: "SNS College of Engineering · 3rd Year",
    icon: GraduationCap,
  },
  {
    year: "2024 — Present",
    title: "Freelance Developer & Designer",
    place: "Building websites for startups & local businesses",
    icon: Briefcase,
  },
  {
    year: "2023 — Present",
    title: "Self-taught Full Stack Engineer",
    place: "React · Node.js · Firebase · Figma",
    icon: Code2,
  },
];

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="About"
          title={<>Designer who codes, <span className="text-gradient-primary">developer who designs</span>.</>}
        />
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5 text-muted-foreground leading-relaxed"
          >
            <p className="text-lg">
              I'm a third-year CSE student at SNS College of Engineering, obsessed
              with the intersection of <span className="text-foreground">elegant design</span> and
              <span className="text-foreground"> robust code</span>.
            </p>
            <p>
              From clinic booking platforms to AI landing pages, I ship complete
              products — from Figma wireframes to deployed React apps. I love
              working with founders and small teams who care about details.
            </p>
            <p>
              Currently freelancing and looking for an internship where I can
              grow alongside great engineers.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {["Freelance", "Open to Internships", "Remote", "Coimbatore, IN"].map((t) => (
                <span key={t} className="glass rounded-full px-3 py-1 text-xs text-foreground">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="relative">
            <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-transparent" />
            <div className="space-y-6">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass relative ml-2 flex gap-4 rounded-2xl p-5"
                >
                  <div className="relative -ml-12 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary glow-purple">
                    <item.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-primary">
                      {item.year}
                    </div>
                    <div className="mt-1 font-display text-lg font-semibold">{item.title}</div>
                    <div className="text-sm text-muted-foreground">{item.place}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}