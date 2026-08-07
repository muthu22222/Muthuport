import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-14 max-w-2xl text-center"
    >
      <div className="glass mb-4 inline-block rounded-full px-4 py-1 text-xs uppercase tracking-widest text-muted-foreground">
        {eyebrow}
      </div>
      <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted-foreground">{description}</p>
      )}
    </motion.div>
  );
}