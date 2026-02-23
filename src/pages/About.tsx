import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import { GlassCard } from "../components/GlassCard";
import { cn } from "../utils/cn";

const timeline = [
  { year: "2015", title: "Roots Established", desc: "Founded with a vision to integrate technology and traditional farming." },
  { year: "2018", title: "First Major Harvest", desc: "Successfully optimized over 10,000 acres of farmland in the Central Valley." },
  { year: "2021", title: "National Expansion", desc: "Opened offices in the Midwest, bringing precision agriculture to the heartland." },
  { year: "2024", title: "Global Reach", desc: "Partnering with international farms to combat global climate challenges." }
];

const team = [
  { name: "Dr. Elena Rostova", role: "Chief Agronomist", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2788&auto=format&fit=crop" },
  { name: "Marcus Chen", role: "Head of Technology", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop" },
  { name: "Sarah Jenkins", role: "Sustainability Director", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2861&auto=format&fit=crop" },
  { name: "David O'Connor", role: "Field Operations", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop" }
];

const TimelineNode = ({ item, index, isLast }: { key?: React.Key, item: typeof timeline[0], index: number, isLast: boolean }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-20%", once: true });

  return (
    <div className="relative pl-12 md:pl-0" ref={ref}>
      {/* Mobile vertical line */}
      {!isLast && (
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-[11px] top-6 bottom-[-24px] w-0.5 bg-emerald-200 origin-top md:hidden"
        />
      )}

      <div className={cn(
        "md:flex items-center justify-between w-full",
        index % 2 === 0 ? "md:flex-row-reverse" : ""
      )}>
        <div className="md:w-5/12" />
        
        {/* Node blooms in gently */}
        <div className="absolute left-0 md:static md:w-2/12 flex justify-center z-10">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 200, damping: 20 }}
            className="w-6 h-6 rounded-full bg-emerald-100 border-4 border-white shadow-sm flex items-center justify-center"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-600" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20, y: 20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "md:w-5/12 pb-12 md:pb-0",
            index % 2 === 0 ? "md:text-left" : "md:text-right"
          )}
        >
          <span className="text-emerald-700 font-mono text-sm font-medium tracking-wider mb-2 block">{item.year}</span>
          <h3 className="text-2xl font-medium text-stone-900 mb-3">{item.title}</h3>
          <p className="text-stone-600 leading-relaxed">{item.desc}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default function About() {
  const pathRef = useRef<SVGPathElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-6xl font-medium text-stone-900 mb-6 tracking-tight"
        >
          Our Story
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed"
        >
          We believe that the future of farming lies in the delicate balance between technological innovation and natural stewardship.
        </motion.p>
      </div>

      {/* Timeline Section */}
      <div className="mb-32 relative" ref={containerRef}>
        {/* Curved path for desktop */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px z-0">
          <svg className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-24 overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 1000">
            <motion.path
              ref={pathRef}
              d="M50,0 C80,200 20,400 50,600 C80,800 20,900 50,1000"
              fill="none"
              stroke="rgba(16, 185, 129, 0.2)"
              strokeWidth="2"
              style={{ pathLength }}
              className="origin-top"
            />
          </svg>
        </div>

        <div className="space-y-0 md:space-y-24 relative z-10">
          {timeline.map((item, i) => (
            <TimelineNode key={item.year} item={item} index={i} isLast={i === timeline.length - 1} />
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div>
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-4xl font-medium text-stone-900 mb-4"
          >
            The People Behind the Growth
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              {/* Gentle lift 4-6px on hover */}
              <GlassCard className="p-6 h-full transition-transform duration-500 ease-out group-hover:-translate-y-1.5 group-hover:shadow-xl">
                <div className="aspect-square rounded-2xl overflow-hidden mb-6">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                </div>
                <h3 className="text-xl font-medium text-stone-900 mb-2">{member.name}</h3>
                
                {/* Role badges use liquid hover */}
                <div className="relative inline-flex overflow-hidden rounded-full px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium group/badge">
                  <span className="absolute inset-0 w-full h-full bg-emerald-100 scale-0 rounded-full opacity-0 group-hover/badge:scale-150 group-hover/badge:opacity-100 transition-all duration-700 ease-out origin-center" />
                  <span className="relative z-10">{member.role}</span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
