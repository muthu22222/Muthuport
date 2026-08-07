import { motion } from "framer-motion";
import { Users, Lightbulb, Zap, Clock } from "lucide-react";
import { SectionHeader } from "./Section";

const softSkills = [
  {
    tag: "Collaboration",
    title: "Strong communication and teamwork",
    desc: "Collaborating effectively with cross-functional teams and stakeholders to build cohesive solutions.",
    icon: Users,
  },
  {
    tag: "Innovation",
    title: "Creative thinking and problem-solving",
    desc: "Approaching design and architectural challenges with innovative out-of-the-box ideas.",
    icon: Lightbulb,
  },
  {
    tag: "Speed",
    title: "Quick learner with adaptability",
    desc: "Swiftly mastering new frameworks, libraries, and emerging AI technologies to stay ahead.",
    icon: Zap,
  },
  {
    tag: "Reliability",
    title: "Time management and discipline",
    desc: "Delivering professional work under precise timelines with structured discipline.",
    icon: Clock,
  },
];

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="About"
          title={<>Creative designer turned <span className="text-gradient-primary">problem-solving developer</span>.</>}
        />
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5 text-muted-foreground leading-relaxed"
          >
            <p className="text-lg font-bold text-foreground">
              I’m Muthukumaran, a Computer Science and Design student at SNS College of Engineering, Coimbatore.
            </p>
            <p className="font-semibold text-muted-foreground/90">
              Full-Stack & Python Developer experienced in React.js, Node.js, MySQL, and backend automation.
            </p>
            <p className="font-semibold text-muted-foreground/90">
              Skilled at building and deploying web applications end-to-end with a strong foundation in problem-solving.
            </p>
            <p className="font-semibold text-muted-foreground/90">
              Seeking a Software Developer / Web Developer Intern role to apply and grow these skills in collaborative teams.
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
              {softSkills.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass relative ml-12 flex gap-4 rounded-2xl p-5"
                >
                  <div className="absolute -left-11 top-6 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary glow-purple z-10">
                    <item.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-primary font-bold">
                      {item.tag}
                    </div>
                    <div className="mt-1 font-display text-lg font-bold text-foreground">{item.title}</div>
                    <div className="text-sm font-semibold text-muted-foreground/90 mt-1">{item.desc}</div>
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