import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GlassCard } from "../components/GlassCard";
import { cn } from "../utils/cn";
import { Link } from "react-router-dom";

const categories = ["All", "Precision Farming", "Water Management", "Soil Health", "Climate Adaptation"];

const projects = [
  { id: 1, img: "https://images.unsplash.com/photo-1592982537447-6f2a6a0c5c13?q=80&w=2940&auto=format&fit=crop", title: "Valley Vineyard Optimization", category: "Precision Farming" },
  { id: 2, img: "https://images.unsplash.com/photo-1586771107445-d3af25164478?q=80&w=2940&auto=format&fit=crop", title: "Highland Wheat Irrigation", category: "Water Management" },
  { id: 3, img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2940&auto=format&fit=crop", title: "Coastal Soil Restoration", category: "Soil Health" },
  { id: 4, img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2832&auto=format&fit=crop", title: "Desert Microclimate Control", category: "Climate Adaptation" },
  { id: 5, img: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2940&auto=format&fit=crop", title: "Organic Orchard Transition", category: "Soil Health" },
  { id: 6, img: "https://images.unsplash.com/photo-1585401081052-127e742888c3?q=80&w=2940&auto=format&fit=crop", title: "Smart Drip Network", category: "Water Management" },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-6xl font-medium text-stone-900 mb-6 tracking-tight"
        >
          Our Projects
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed"
        >
          Explore how we've helped farms across the country achieve sustainable, profitable growth.
        </motion.p>
      </div>

      {/* Filter chips */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-wrap justify-center gap-3 mb-16"
      >
        {categories.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "relative px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-500 overflow-hidden group",
                isActive ? "text-emerald-900" : "text-stone-600 hover:text-stone-900 bg-white/50 border border-stone-200"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="active-chip"
                  className="absolute inset-0 bg-emerald-100 border border-emerald-200 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {/* Liquid hover effect for inactive chips */}
              {!isActive && (
                <span className="absolute inset-0 w-full h-full bg-stone-100 scale-0 rounded-full opacity-0 group-hover:scale-150 group-hover:opacity-100 transition-all duration-700 ease-out origin-center" />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          );
        })}
      </motion.div>

      {/* Project Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, i) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link to={`/projects/${project.id}`} className="block group relative rounded-2xl overflow-hidden aspect-[4/5]">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-stone-900/40 transition-colors duration-500" />
                
                {/* Glass overlay on hover */}
                <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end">
                  <GlassCard className="p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <p className="text-emerald-800 text-sm font-medium mb-1">{project.category}</p>
                    <h3 className="text-stone-900 text-xl font-medium mb-4">{project.title}</h3>
                    
                    {/* "View Project" button fades in softly */}
                    <div className="inline-flex items-center gap-2 text-sm font-medium text-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      View Project <span className="w-4 h-px bg-emerald-700 block transition-all group-hover:w-6" />
                    </div>
                  </GlassCard>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
