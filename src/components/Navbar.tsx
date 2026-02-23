import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { cn } from "../utils/cn";
import { Leaf } from "lucide-react";

export const Navbar = () => {
  const location = useLocation();

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
        <Link to="/" className="flex items-center gap-2 text-emerald-900 font-medium text-lg">
          <Leaf className="w-5 h-5 text-emerald-600" />
          <span>Verdant</span>
        </Link>

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

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="px-5 py-2 text-sm font-medium text-white bg-emerald-800 rounded-full hover:bg-emerald-700 transition-colors shadow-sm"
          >
            Get a Quote
          </Link>
        </div>
      </nav>
    </header>
  );
};
