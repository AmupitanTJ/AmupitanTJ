"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CursorFollower() {
  const reduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const x = useMotionValue(-40);
  const y = useMotionValue(-40);
  const springX = useSpring(x, { stiffness: 520, damping: 36, mass: 0.25 });
  const springY = useSpring(y, { stiffness: 520, damping: 36, mass: 0.25 });

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const update = () => setEnabled(finePointer.matches && !reduceMotion);
    const move = (event: PointerEvent) => {
      x.set(event.clientX - 10);
      y.set(event.clientY - 10);
      const target = event.target as Element | null;
      setActive(Boolean(target?.closest("a, button, [role='button']")));
    };

    update();
    finePointer.addEventListener("change", update);
    window.addEventListener("pointermove", move, { passive: true });
    return () => {
      finePointer.removeEventListener("change", update);
      window.removeEventListener("pointermove", move);
    };
  }, [reduceMotion, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[100] size-5 rounded-full border border-white bg-white/10 mix-blend-difference"
      style={{ x: springX, y: springY }}
      animate={{ scale: active ? 1.8 : 1, opacity: active ? 0.9 : 0.65 }}
      transition={{ duration: 0.16 }}
    />
  );
}
