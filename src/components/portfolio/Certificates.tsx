import { motion } from "framer-motion";
import { Award, Trophy, Medal, Star, Zap, BadgeCheck } from "lucide-react";
import { SectionHeader } from "./Section";

const items = [
  { title: "Full Stack Web Development", org: "Meta · Coursera", icon: Award, span: "md:col-span-2" },
  { title: "UI/UX Design Foundations", org: "Google", icon: Star, span: "" },
  { title: "React Advanced Patterns", org: "Frontend Masters", icon: Zap, span: "" },
  { title: "Hackathon Winner", org: "SNS TechFest 2024", icon: Trophy, span: "md:col-span-2" },
  { title: "Firebase Certified", org: "Google Cloud", icon: BadgeCheck, span: "" },
  { title: "Open Source Contributor", org: "GitHub", icon: Medal, span: "" },
];

export function Certificates() {
  return (
    <section id="certificates" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Achievements"
          title={<>Certificates & <span className="text-gradient-primary">milestones</span></>}
        />
        <div className="grid auto-rows-[180px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -5 }}
              className={`glass group relative flex flex-col justify-between overflow-hidden rounded-3xl p-6 ${it.span}`}
            >
              <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary glow-purple">
                <it.icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold leading-tight">{it.title}</h3>
                <div className="mt-1 text-xs text-muted-foreground">{it.org}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}