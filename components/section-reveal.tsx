"use client";

import { motion, useReducedMotion } from "framer-motion";

export function SectionReveal({ children, className }: Readonly<{ children: React.ReactNode; className?: string }>) {
  const reduceMotion = useReducedMotion();
  return <motion.div className={className} initial={reduceMotion ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}>{children}</motion.div>;
}