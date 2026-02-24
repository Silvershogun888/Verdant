import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLocation } from "react-router-dom";

export const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
        className="w-full h-full min-h-screen bg-stone-50 text-stone-900"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

