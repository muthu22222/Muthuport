import { motion } from "framer-motion";
import { SectionHeader } from "./Section";

const skills = [
  { name: "Python", icon: "🐍", color: "from-yellow-500/20 to-blue-500/20", progress: 92, barColor: "bg-yellow-500 shadow-[0_0_12px_rgba(234,179,8,0.5)]" },
  { name: "JavaScript", icon: "⚡", color: "from-amber-500/20 to-yellow-500/20", progress: 90, barColor: "bg-amber-500 shadow-[0_0_12px_rgba(245,158,11,0.5)]" },
  { name: "React.js", icon: "⚛️", color: "from-cyan-500/20 to-blue-500/20", progress: 88, barColor: "bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.5)]" },
  { name: "Node.js", icon: "🟢", color: "from-green-500/20 to-emerald-500/20", progress: 85, barColor: "bg-green-500 shadow-[0_0_12px_rgba(34,197,94,0.5)]" },
  { name: "MySQL", icon: "🛢️", color: "from-blue-500/20 to-sky-500/20", progress: 86, barColor: "bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.5)]" },
  { name: "Tailwind CSS", icon: "💨", color: "from-teal-500/20 to-cyan-500/20", progress: 92, barColor: "bg-teal-500 shadow-[0_0_12px_rgba(20,184,166,0.5)]" },
  { name: "C / C++", icon: "⚙️", color: "from-purple-500/20 to-indigo-500/20", progress: 82, barColor: "bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.5)]" },
  { name: "Git & GitHub", icon: "🐙", color: "from-gray-500/20 to-slate-500/20", progress: 90, barColor: "bg-slate-400 shadow-[0_0_12px_rgba(148,163,184,0.5)]" },
  { name: "Vercel / Firebase / Railway", icon: "🚀", color: "from-orange-500/20 to-red-500/20", progress: 88, barColor: "bg-orange-500 shadow-[0_0_12px_rgba(249,115,22,0.5)]" },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="SKILLS"
          title={<>Tools I use to <span className="text-gradient-primary">ship fast</span></>}
          description="A focused stack I know deeply — chosen for speed, scalability, and beautiful end results."
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
              <div className="relative flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-2xl">
                    {s.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="font-display text-lg font-bold text-foreground">{s.name}</div>
                      <div className="text-sm font-bold text-primary">{s.progress}%</div>
                    </div>
                    <div className="text-xs font-semibold text-muted-foreground/80 mt-0.5">Production ready</div>
                  </div>
                </div>
                {/* Custom animated progress bar */}
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden relative mt-1">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.05 + 0.15, ease: "easeOut" }}
                    className={`h-full rounded-full ${s.barColor}`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}