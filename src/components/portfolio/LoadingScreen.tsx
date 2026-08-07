import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Smooth counter animation
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 16);

    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "auto";
    }, 2400);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  // SVG Circle dimensions
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (counter / 100) * circumference;

  const titleText = "WELCOME TO MY PORTFOLIO";

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", // Modern sliding wipe exit!
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
        >
          {/* Radial Ambient Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[35rem] w-[35rem] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[20rem] w-[20rem] rounded-full bg-accent/5 blur-[90px] pointer-events-none" />

          <div className="relative flex flex-col items-center gap-10">
            {/* SVG Circular Loader wrapping the pulsing logo */}
            <div className="relative flex h-32 w-32 items-center justify-center">
              {/* Spinning decorative background ring */}
              <svg className="absolute h-full w-full -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r={radius}
                  className="stroke-primary/10 fill-none"
                  strokeWidth="2"
                />
                <motion.circle
                  cx="64"
                  cy="64"
                  r={radius}
                  className="stroke-primary fill-none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  animate={{ strokeDashoffset }}
                  transition={{ ease: "easeInOut" }}
                />
              </svg>

              {/* Pulsing Central Initial */}
              <motion.div
                className="h-20 w-20 rounded-full border border-primary/20 bg-black/40 backdrop-blur shadow-2xl flex items-center justify-center glow-purple"
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-xl font-display font-extrabold text-gradient-primary">M</span>
              </motion.div>
            </div>

            {/* High-tech, Ultra-spaced Lettering */}
            <div className="flex flex-col items-center gap-3 text-center">
              <motion.h2
                initial={{ letterSpacing: "-0.2em", opacity: 0, filter: "blur(10px)" }}
                animate={{ letterSpacing: "0.25em", opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.5, ease: [0.215, 0.61, 0.355, 1], delay: 0.2 }}
                className="font-display text-xs sm:text-sm font-extrabold uppercase text-foreground tracking-[0.25em] pl-[0.25em] text-gradient-primary glow-purple-sm"
              >
                {titleText}
              </motion.h2>

              {/* Monospace System Metadata */}
              <div className="font-mono text-[10px] text-muted-foreground/60 flex items-center gap-2 mt-2 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
                <span>SYS.LOAD: {counter}%</span>
                <span className="opacity-30">|</span>
                <span>BUILD.v2.0</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
