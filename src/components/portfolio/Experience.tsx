import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "./Section";
import { Award, X, Download } from "lucide-react";
import { downloadFile } from "@/lib/utils";
import certificateMarketing from "@/assets/certificate.png";
import certificatePython from "@/assets/certificate_python.jpg";

const items = [
  {
    tag: "Internship",
    role: "Python Developer Intern",
    org: "Alfido Tech · Remote",
    period: "Aug 2025 – Sep 2025",
    desc: "Wrote and tested Python scripts to automate data processing and backend logic, strengthening core programming and debugging skills. Collaborated with dev team using Git and refactored code for performance.",
    certificateImage: certificatePython,
  },
  {
    tag: "Internship",
    role: "Web Developer Intern",
    org: "InternPe · Remote",
    period: "Nov 2025 – Dec 2025",
    desc: "Built responsive front-end components using HTML5, CSS3, and JavaScript, translating design requirements into functional UI. Integrated REST APIs with React.js for reusable components.",
  },
];

export function Experience() {
  const [selectedCert, setSelectedCert] = useState<{ image: string; title: string } | null>(null);

  return (
    <section id="experience" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Experience"
          title={<>Experience creates <span className="text-gradient-primary">mastery</span></>}
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
                {it.certificateImage && (
                  <button
                    onClick={() => setSelectedCert({ image: it.certificateImage, title: it.role })}
                    className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-primary/30 hover:border-primary/60 px-3.5 py-1.5 text-xs font-semibold text-foreground hover:text-primary transition-all duration-300 hover:scale-105 bg-background/40 hover:bg-primary/5 cursor-pointer shadow-sm"
                  >
                    <Award className="h-3.5 w-3.5 text-primary animate-pulse" />
                    View Certificate
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
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