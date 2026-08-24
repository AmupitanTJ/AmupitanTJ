"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { duration, easeOut, fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

type SectionRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function SectionReveal({
  children,
  className,
  delay = 0,
}: SectionRevealProps) {
  const reduceMotion = useReducedMotion();
  const allowMotion = reduceMotion === false;
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!allowMotion) {
      return;
    }

    const node = ref.current;
    if (!node) {
      return;
    }

    const rect = node.getBoundingClientRect();
    const onScreen = rect.top < window.innerHeight && rect.bottom > 0;
    if (onScreen) {
      setVisible(true);
      return;
    }

    const frame = window.requestAnimationFrame(() => setVisible(false));

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          window.cancelAnimationFrame(frame);
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);
    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [allowMotion]);

  return (
    <motion.div
      ref={ref}
      data-reveal=""
      className={cn(className)}
      initial={false}
      animate={allowMotion && !visible ? fadeUp.hidden : { opacity: 1, y: 0 }}
      transition={{ duration: duration.slow, ease: easeOut, delay }}
    >
      {children}
    </motion.div>
  );
}
