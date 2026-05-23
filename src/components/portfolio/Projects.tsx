import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { SectionHeader } from "./Section";
import clinic from "@/assets/project-clinic.jpg";
import restaurant from "@/assets/project-restaurant.jpg";
import portfolio from "@/assets/project-portfolio.jpg";
import ai from "@/assets/project-ai.jpg";
import event from "@/assets/project-event.jpg";

const projects = [
  {
    title: "Clinic Booking Platform",
    description: "End-to-end appointment booking with patient dashboards, doctor schedules and SMS reminders.",
    image: clinic,
    tags: ["React", "Firebase", "Tailwind"],
    demo: "#",
    repo: "#",
  },
  {
    title: "Restaurant Website",
    description: "Elegant menu, reservations and ordering flow for a multi-location restaurant brand.",
    image: restaurant,
    tags: ["React", "Node.js", "Stripe"],
    demo: "#",
    repo: "#",
  },
  {
    title: "Portfolio Website",
    description: "The site you're looking at — futuristic, animated, fully responsive premium portfolio.",
    image: portfolio,
    tags: ["React", "Framer Motion", "Tailwind"],
    demo: "#",
    repo: "#",
  },
  {
    title: "AI SaaS Landing Page",
    description: "Conversion-focused landing page with motion-rich hero and pricing for an AI startup.",
    image: ai,
    tags: ["React", "GSAP", "Tailwind"],
    demo: "#",
    repo: "#",
  },
  {
    title: "Event Management App",
    description: "Ticketing, attendee management and live dashboards for college and corporate events.",
    image: event,
    tags: ["React", "Firebase", "Node.js"],
    demo: "#",
    repo: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Selected Work"
          title={<>Projects I've <span className="text-gradient-primary">shipped</span></>}
          description="A few products built from scratch — design, frontend, backend, deployment."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
              className={`glass group relative overflow-hidden rounded-3xl ${
                i === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1280}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              </div>
              <div className="relative -mt-16 p-6 sm:p-8">
                <div className="mb-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="glass rounded-full border border-primary/30 px-3 py-1 text-xs text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="font-display text-2xl font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                <div className="mt-5 flex gap-3">
                  <a
                    href={p.demo}
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-2 text-xs font-semibold text-primary-foreground transition-transform hover:scale-105"
                  >
                    <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                  </a>
                  <a
                    href={p.repo}
                    className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all hover:bg-white/10"
                  >
                    <Github className="h-3.5 w-3.5" /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}