import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLocation } from "react-router-dom";

export const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{
          clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
          opacity: 0.8,
        }}
        animate={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          opacity: 1,
        }}
        exit={{
          clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
          opacity: 0.8,
        }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1], // Soft ease out
        }}
        className="w-full h-full min-h-screen bg-stone-50 text-stone-900"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

