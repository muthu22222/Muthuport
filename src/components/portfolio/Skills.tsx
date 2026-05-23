import { motion } from "framer-motion";
import { SectionHeader } from "./Section";

const skills = [
  { name: "HTML", icon: "🌐", color: "from-orange-500/20 to-red-500/20" },
  { name: "CSS", icon: "🎨", color: "from-blue-500/20 to-cyan-500/20" },
  { name: "JavaScript", icon: "⚡", color: "from-yellow-500/20 to-amber-500/20" },
  { name: "React", icon: "⚛️", color: "from-cyan-500/20 to-blue-500/20" },
  { name: "Tailwind", icon: "💨", color: "from-teal-500/20 to-cyan-500/20" },
  { name: "Firebase", icon: "🔥", color: "from-amber-500/20 to-orange-500/20" },
  { name: "Figma", icon: "🎯", color: "from-pink-500/20 to-purple-500/20" },
  { name: "GitHub", icon: "🐙", color: "from-gray-500/20 to-slate-500/20" },
  { name: "Node.js", icon: "🟢", color: "from-green-500/20 to-emerald-500/20" },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Tech Stack"
          title={<>Tools I use to <span className="text-gradient-primary">ship fast</span></>}
          description="A focused stack I know deeply — chosen for speed, scalability, and beautiful end results."
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className={`glass group relative overflow-hidden rounded-2xl p-6 transition-all hover:border-primary/50`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 transition-opacity group-hover:opacity-100`}
              />
              <div className="relative flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-2xl">
                  {s.icon}
                </div>
                <div>
                  <div className="font-display text-lg font-semibold">{s.name}</div>
                  <div className="text-xs text-muted-foreground">Production ready</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}