import { motion } from "framer-motion";
import { SectionHeader } from "./Section";

const items = [
  {
    tag: "Internship",
    role: "Web Development Intern",
    org: "Tech Startup · Remote",
    period: "2024",
    desc: "Contributed React components and design polish to a SaaS dashboard. Shipped 12+ features.",
  },
  {
    tag: "Freelance",
    role: "Full Stack Freelancer",
    org: "Independent · Multiple Clients",
    period: "2024 — Present",
    desc: "Delivered websites for clinics, restaurants and event organizers. End-to-end design + build.",
  },
  {
    tag: "Personal",
    role: "Indie Builder",
    org: "Side Projects",
    period: "Ongoing",
    desc: "Experimenting with AI tools, micro-SaaS ideas and design systems for fun and learning.",
  },
  {
    tag: "Collaboration",
    role: "Startup Collaborator",
    org: "Early-stage founders",
    period: "2025",
    desc: "Partner with founders on MVPs — translate ideas into product within days, not months.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Experience"
          title={<>Where I've been <span className="text-gradient-primary">building</span></>}
        />
        <div className="grid gap-5 md:grid-cols-2">
          {items.map((it, i) => (
            <motion.div
              key={it.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass group relative overflow-hidden rounded-2xl p-6"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/20 blur-3xl transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-0.5 text-xs text-primary">
                    {it.tag}
                  </span>
                  <span className="text-xs text-muted-foreground">{it.period}</span>
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold">{it.role}</h3>
                <div className="text-sm text-muted-foreground">{it.org}</div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}