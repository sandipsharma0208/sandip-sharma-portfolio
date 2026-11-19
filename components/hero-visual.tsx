"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Braces, Code2, Smartphone } from "lucide-react";
import Image from "next/image";

export function HeroVisual() {
  const reduceMotion = useReducedMotion();
  const float = reduceMotion ? undefined : { y: [0, -7, 0] };
  return (
    <div className="hero-art" aria-label="Portrait of Sandip Sharma">
      <motion.div
        className="floating-label floating-one"
        animate={float}
        transition={{ duration: 4.3, repeat: Infinity, ease: "easeInOut" }}
      >
        <Code2 size={15} aria-hidden="true" /> React.js
      </motion.div>
      <motion.div
        className="floating-label floating-two"
        animate={float}
        transition={{
          duration: 4.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.7,
        }}
      >
        <Smartphone size={15} aria-hidden="true" /> React Native
      </motion.div>
      <motion.div
        className="floating-label floating-three"
        animate={float}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.1,
        }}
      >
        <Braces size={15} aria-hidden="true" /> TypeScript
      </motion.div>
      <div className="profile-portrait">
        <Image
          src="/sandip-profile-v2.png"
          alt="Sandip Sharma"
          fill
          sizes="(max-width: 700px) 85vw, 430px"
          priority
        />
        <span className="portrait-badge">
          <strong>2+</strong>
          <small>Years building</small>
        </span>
      </div>
    </div>
  );
}
