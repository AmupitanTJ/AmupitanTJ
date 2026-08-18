"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, stagger } from "@/lib/motion";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: fadeUp.hidden,
        visible: {
          ...fadeUp.visible,
          transition: { ...fadeUp.visible.transition, delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealGroup({ children, className }: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={stagger}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  );
}

export function DrawRule({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.hr
      aria-hidden="true"
      className={cn("origin-left border-rule", className)}
      initial={reduceMotion ? false : { scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}
