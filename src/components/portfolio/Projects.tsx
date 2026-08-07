import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Github, ChevronLeft, ChevronRight, X, Download } from "lucide-react";
import { SectionHeader } from "./Section";
import { downloadFile } from "@/lib/utils";
import clinic from "@/assets/project-clinic.jpg";
import portfolio from "@/assets/project-portfolio.jpg";
import ai from "@/assets/project-ai.jpg";
import event from "@/assets/project-event.jpg";
import studymate from "@/assets/project-studymate.png";

import studymateAnalytics from "@/assets/studymate_analytics.png";
import studymateDashboard from "@/assets/studymate_dashboard.png";
import studymateSignup from "@/assets/studymate_signup.png";
import studymateLanding from "@/assets/studymate_landing.png";

import frostbiteBrowse from "@/assets/frostbite_browse.png";
import frostbiteDetails from "@/assets/frostbite_details.png";
import frostbiteBrochure from "@/assets/frostbite_brochure.png";

import zootonnCover from "@/assets/project-restaurant.jpg"; // Placeholder
import zootonnDesign from "@/assets/project-restaurant.jpg"; // Placeholder
import aiworkerCover from "@/assets/project-clinic.jpg"; // Placeholder
import aiworkerDesign from "@/assets/project-clinic.jpg"; // Placeholder

const projects = [
  {
    title: "Health Nav",
    description: "A healthcare web application that recommends appropriate doctors/specialists based on user-reported symptoms, age, and symptom duration. Features symptom-to-specialist matching logic and structured MySQL schema.",
    image: clinic,
    tags: ["React.js", "Node.js", "MySQL", "API Handling"],
    demo: "#",
    repo: "https://github.com/muthu22222",
    designs: [
      { image: clinic, caption: "Health Nav — Healthcare doctor recommendation & specialist matching." },
    ],
  },
  {
    title: "Study-Mate AI",
    description: "An AI-powered study planner that helps students create and track personalized study schedules. Implements AI-driven plan generation and progress tracking features to keep users on pace with their goals.",
    image: studymate,
    tags: ["React.js", "Node.js", "AI/API Integration"],
    demo: "#",
    repo: "https://github.com/muthu22222/Study-Mate-AI",
    designs: [
      { image: studymateLanding, caption: "Landing Page — conversion-focused marketing page highlighting core features." },
      { image: studymateDashboard, caption: "Dashboard Home — daily study schedules, statistics cards, and upcoming exams." },
      { image: studymateAnalytics, caption: "Progress Analytics — comprehensive learning trends, subject distributions, and AI insights." },
      { image: studymateSignup, caption: "User Onboarding — seamless sign-up and authentication onboarding flow." },
    ],
  },
  {
    title: "Ready-to-Eat",
    description: "A mobile/web food ordering platform letting users browse, order, and track ready-made food from nearby restaurants in real time. Deployed using Firebase for backend services.",
    image: frostbiteBrowse,
    tags: ["React.js", "Node.js", "MySQL", "Firebase"],
    demo: "#",
    repo: "https://github.com/muthu22222/readytoeat",
    designs: [
      { image: frostbiteBrowse, caption: "Browse Meals — browse food categories and items in real time." },
      { image: frostbiteDetails, caption: "Product Detail — view item details, pricing, and order tracking." },
      { image: frostbiteBrochure, caption: "Brochure Request — simple dynamic order tracking form." },
    ],
  },
];

export function Projects() {
  const [activeDesigns, setActiveDesigns] = useState<{ image: string; caption: string }[] | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const openLightbox = (designsList: { image: string; caption: string }[]) => {
    setActiveDesigns(designsList);
    setActiveSlide(0);
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeDesigns) return;
    setActiveSlide((prev) => (prev + 1) % activeDesigns.length);
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeDesigns) return;
    setActiveSlide((prev) => (prev - 1 + activeDesigns.length) % activeDesigns.length);
  };

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
              className="glass group relative overflow-hidden rounded-3xl"
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
                  <button
                    onClick={() => openLightbox(p.designs)}
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-2 text-xs font-semibold text-primary-foreground transition-transform hover:scale-105 cursor-pointer"
                  >
                    <Palette className="h-3.5 w-3.5" /> View Designs
                  </button>
                  {p.repo && p.repo !== "#" && (
                    <a
                      href={p.repo}
                      className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all hover:bg-white/10 cursor-pointer"
                    >
                      <Github className="h-3.5 w-3.5" /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Dynamic Project Designs Carousel Lightbox */}
      <AnimatePresence>
        {activeDesigns && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveDesigns(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-background border border-primary/20 p-2 shadow-2xl cursor-default glow-purple"
            >
              {/* Slideshow Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-black/40 flex items-center justify-center">
                <motion.img
                  key={activeSlide}
                  src={activeDesigns[activeSlide].image}
                  alt={`Design slide ${activeSlide + 1}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="h-full w-full object-contain"
                />

                {/* Left/Right Navigation Arrows */}
                {activeDesigns.length > 1 && (
                  <>
                    <button
                      onClick={prevSlide}
                      className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-background/80 backdrop-blur border border-primary/20 hover:border-primary/50 text-foreground hover:text-primary transition-all hover:scale-105 cursor-pointer shadow-lg z-10"
                      aria-label="Previous slide"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-background/80 backdrop-blur border border-primary/20 hover:border-primary/50 text-foreground hover:text-primary transition-all hover:scale-105 cursor-pointer shadow-lg z-10"
                      aria-label="Next slide"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </>
                )}

                {/* Dots indicator */}
                {activeDesigns.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10 bg-background/40 backdrop-blur-md px-3 py-1.5 rounded-full">
                    {activeDesigns.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveSlide(idx);
                        }}
                        className={`h-2 w-2 rounded-full transition-all cursor-pointer ${
                          idx === activeSlide
                            ? "bg-primary w-4"
                            : "bg-foreground/40 hover:bg-foreground/75"
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Caption Bar */}
              <div className="p-4 sm:p-6 bg-background">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold text-primary tracking-widest uppercase">
                      Screen {activeSlide + 1} of {activeDesigns.length}
                    </span>
                    <p className="mt-1 text-sm font-semibold text-foreground/90">
                      {activeDesigns[activeSlide].caption}
                    </p>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <button
                      onClick={() => downloadFile(activeDesigns[activeSlide].image, `StudyMate_Design_${activeSlide + 1}.png`)}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-background border border-primary/20 hover:border-primary/50 text-foreground hover:text-primary transition-all hover:scale-105 cursor-pointer"
                      title="Download image"
                    >
                      <Download className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => setActiveDesigns(null)}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-background border border-primary/20 hover:border-primary/50 text-foreground hover:text-red-500 transition-all hover:scale-105 cursor-pointer"
                      title="Close"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}