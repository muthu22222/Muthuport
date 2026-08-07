import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Database, Cpu, Megaphone, BarChart3, Award, X, Download, Github } from "lucide-react";
import { SectionHeader } from "./Section";
import { downloadFile } from "@/lib/utils";

import certNptel from "@/assets/cert_nptel.jpg";
import certOracle from "@/assets/cert_oracle.jpg";
import certHp from "@/assets/cert_accenture.jpg";
import certAccenture from "@/assets/cert_hp.jpg";

const items = [
  {
    title: "Database Management System",
    org: "NPTEL · IIT Kharagpur (Swayam)",
    desc: "Successfully completed the 8-week proctored exam and coursework covering advanced relational model, SQL, and database transaction architectures.",
    icon: Database,
    image: certNptel,
    color: "from-blue-500/10 to-indigo-500/10 border-blue-500/20 hover:border-blue-500/50",
    iconColor: "text-blue-400",
  },
  {
    title: "Oracle Certified Foundations Associate",
    org: "Oracle Cloud Infrastructure",
    desc: "Achieved the official 2025 Certified AI Foundations Associate credential, validating core knowledge in machine learning models and cloud AI infrastructure.",
    icon: Cpu,
    image: certOracle,
    color: "from-amber-500/10 to-orange-500/10 border-amber-500/20 hover:border-amber-500/50",
    iconColor: "text-amber-400",
  },
  {
    title: "Social Media Marketing",
    org: "HP LIFE Foundation",
    desc: "Completed the HP LIFE program specializing in target social media advertising, campaign analytics, and strategic content planning for audience engagement.",
    icon: Megaphone,
    image: certHp,
    color: "from-cyan-500/10 to-sky-500/10 border-cyan-500/20 hover:border-cyan-500/50",
    iconColor: "text-cyan-400",
  },
  {
    title: "Digital Skills: Web Analytics",
    org: "Accenture",
    desc: "Mastered fundamental analytics methodologies, measuring digital channel reach, descriptive/prescriptive insights, and building business measurement plans.",
    icon: BarChart3,
    image: certAccenture,
    color: "from-purple-500/10 to-pink-500/10 border-purple-500/20 hover:border-purple-500/50",
    iconColor: "text-purple-400",
  },
];

export function Certificates() {
  const [selectedCert, setSelectedCert] = useState<{ image: string; title: string } | null>(null);

  return (
    <section id="certificates" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Achievements"
          title={<>Courses and <span className="text-gradient-primary">Certification</span></>}
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className={`glass group relative flex flex-col justify-between overflow-hidden rounded-3xl p-6 border bg-gradient-to-br ${it.color} transition-all duration-300`}
            >
              <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative flex flex-col h-full justify-between">
                <div>
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-background/50 backdrop-blur border border-primary/20 shadow-md ${it.iconColor}`}>
                    <it.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold leading-snug text-foreground group-hover:text-primary transition-colors duration-300">
                    {it.title}
                  </h3>
                  <div className="mt-1 text-xs font-bold text-primary tracking-wide uppercase">
                    {it.org}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground/90 font-semibold">
                    {it.desc}
                  </p>
                </div>
                
                <div className="mt-6">
                  <button
                    onClick={() => setSelectedCert({ image: it.image, title: it.title })}
                    className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 hover:border-primary/60 px-4 py-2 text-xs font-semibold text-foreground hover:text-primary transition-all duration-300 hover:scale-105 bg-background/40 hover:bg-primary/5 cursor-pointer shadow-sm"
                  >
                    <Award className="h-4 w-4 text-primary animate-pulse" />
                    View Certificate
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View my works CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 flex flex-col items-center justify-center text-center"
        >
          <div className="glass relative overflow-hidden rounded-3xl p-8 max-w-xl w-full border border-primary/20 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 glow-purple">
            <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-accent/20 blur-2xl" />
            <div className="absolute -left-12 -bottom-12 h-24 w-24 rounded-full bg-primary/20 blur-2xl" />
            
            <h4 className="font-display text-lg font-bold text-foreground uppercase tracking-wide">
              View My Works
            </h4>
            <p className="mt-2 text-sm font-semibold text-muted-foreground/90">
              Explore my GitHub repositories to review my open-source codebases, automation scripts, and digital solutions.
            </p>
            
            <div className="mt-6 flex justify-center">
              <a
                href="https://github.com/muthu22222?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-bold text-primary-foreground transition-all duration-300 hover:scale-105 shadow-md pointer-events-auto"
              >
                <Github className="h-5 w-5 transition-transform group-hover:scale-110" />
                <span>Click here to explore more</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Premium Lightbox Modal for Certificate */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] max-w-2xl overflow-hidden rounded-3xl bg-background border border-primary/20 p-2 shadow-2xl cursor-default glow-purple"
            >
              {/* Image with gradient border */}
              <div className="rounded-2xl overflow-hidden bg-background">
                <img
                  src={selectedCert.image}
                  alt={`${selectedCert.title} Certificate`}
                  className="max-h-[80vh] w-auto max-w-full object-contain"
                />
              </div>

              {/* Action Buttons Overlay */}
              <div className="absolute top-4 right-4 flex gap-2">
                <button
                  onClick={() => downloadFile(selectedCert.image, `Muthukumaran_${selectedCert.title.replace(/\s+/g, "_")}_Certificate.jpg`)}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-background/80 backdrop-blur-md border border-primary/20 hover:border-primary/50 text-foreground hover:text-primary transition-all hover:scale-105 cursor-pointer"
                  title="Download Certificate"
                >
                  <Download className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-background/80 backdrop-blur-md border border-primary/20 hover:border-primary/50 text-foreground hover:text-red-500 transition-all hover:scale-105 cursor-pointer"
                  title="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}