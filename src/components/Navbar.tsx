import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../utils/cn";
import { Leaf, Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const links = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
      <nav className="flex items-center justify-between w-full max-w-5xl px-6 py-3 rounded-full bg-white/40 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
        <Link to="/" className="flex items-center gap-2 text-emerald-900 font-medium text-lg shrink-0">
          <Leaf className="w-5 h-5 text-emerald-600" />
          <span>Verdant</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={cn(
                    "relative text-sm font-medium transition-colors duration-300",
                    isActive ? "text-emerald-900" : "text-stone-600 hover:text-emerald-800"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute left-0 right-0 -bottom-1 h-[2px] bg-emerald-600 rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="px-5 py-2 text-sm font-medium text-white bg-emerald-800 rounded-full hover:bg-emerald-700 transition-colors shadow-sm"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-emerald-900 hover:text-emerald-700 transition-colors focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[100px] z-40 md:hidden px-4 pointer-events-none"
          >
            <div className="w-full bg-white/95 backdrop-blur-2xl border border-white/40 rounded-3xl shadow-2xl p-6 pointer-events-auto">
              <ul className="flex flex-col gap-4">
                {links.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className={cn(
                          "block py-3 px-4 rounded-xl text-base font-medium transition-all duration-200",
                          isActive
                            ? "bg-emerald-50 text-emerald-900"
                            : "text-stone-600 hover:bg-stone-50 hover:text-emerald-800"
                        )}
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-6 pt-6 border-t border-stone-100">
                <Link
                  to="/contact"
                  className="block w-full py-4 text-center text-base font-semibold text-white bg-emerald-800 rounded-xl hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-900/10"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
