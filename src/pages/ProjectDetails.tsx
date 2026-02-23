import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { GlassCard } from "../components/GlassCard";
import { Button } from "../components/Button";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";

const projectData = {
  title: "Valley Vineyard Optimization",
  category: "Precision Farming",
  client: "Oak & Vine Estate",
  location: "Napa Valley, CA",
  duration: "18 Months",
  description: "A comprehensive overhaul of a 500-acre vineyard focusing on microclimate management and precision irrigation to combat recent drought conditions while improving grape quality.",
  gallery: [
    { url: "https://images.unsplash.com/photo-1592982537447-6f2a6a0c5c13?q=80&w=2940&auto=format&fit=crop", caption: "Aerial view of the optimized blocks" },
    { url: "https://images.unsplash.com/photo-1586771107445-d3af25164478?q=80&w=2940&auto=format&fit=crop", caption: "Smart irrigation sensors installed" },
    { url: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2940&auto=format&fit=crop", caption: "Harvest season results" }
  ],
  results: [
    { label: "Water Saved", value: "40%" },
    { label: "Yield Increase", value: "15%" },
    { label: "Quality Score", value: "+12 pts" },
    { label: "ROI", value: "2.4x" }
  ]
};

export default function ProjectDetails() {
  const { id } = useParams();
  const [currentImage, setCurrentImage] = useState(0);

  // Auto-advance gallery
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % projectData.gallery.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pt-32 pb-24 px-6 max-w-5xl mx-auto min-h-screen relative">
      <Link to="/projects" className="inline-flex items-center gap-2 text-stone-500 hover:text-emerald-700 transition-colors mb-12 font-medium">
        <ArrowLeft className="w-4 h-4" /> Back to Projects
      </Link>

      <div className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-emerald-700 font-medium mb-4">{projectData.category}</p>
          <h1 className="text-4xl md:text-6xl font-medium text-stone-900 mb-8 tracking-tight">
            {projectData.title}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-stone-200"
        >
          <div>
            <p className="text-sm text-stone-500 mb-1">Client</p>
            <p className="font-medium text-stone-900">{projectData.client}</p>
          </div>
          <div>
            <p className="text-sm text-stone-500 mb-1">Location</p>
            <p className="font-medium text-stone-900">{projectData.location}</p>
          </div>
          <div>
            <p className="text-sm text-stone-500 mb-1">Duration</p>
            <p className="font-medium text-stone-900">{projectData.duration}</p>
          </div>
        </motion.div>
      </div>

      {/* Gallery */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden mb-24 bg-stone-200"
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImage}
            src={projectData.gallery[currentImage].url}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Glass caption panel fades in */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`caption-${currentImage}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="absolute bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-80"
          >
            <GlassCard className="p-4 text-sm text-stone-800">
              {projectData.gallery[currentImage].caption}
            </GlassCard>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
          <button
            onClick={() => setCurrentImage((prev) => (prev === 0 ? projectData.gallery.length - 1 : prev - 1))}
            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white pointer-events-auto hover:bg-white/40 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setCurrentImage((prev) => (prev + 1) % projectData.gallery.length)}
            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white pointer-events-auto hover:bg-white/40 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-32">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-medium text-stone-900 mb-6">The Challenge & Solution</h2>
          <p className="text-lg text-stone-600 leading-relaxed mb-6">
            {projectData.description}
          </p>
          <p className="text-lg text-stone-600 leading-relaxed">
            By implementing a network of soil moisture sensors and integrating them with localized weather forecasting, we created a predictive irrigation model. This allowed the estate to reduce water usage significantly while maintaining the precise stress levels required for premium wine grapes.
          </p>
        </div>

        {/* Results Section */}
        <div>
          <h3 className="text-xl font-medium text-stone-900 mb-8">Key Results</h3>
          <div className="relative">
            {/* Gridline draw first */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-0 top-0 bottom-0 w-px bg-emerald-200 origin-top"
            />
            
            <div className="space-y-8 pl-8">
              {projectData.results.map((result, i) => (
                <motion.div
                  key={result.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="text-sm text-stone-500 mb-1">{result.label}</p>
                  <p className="text-3xl font-medium text-emerald-900">{result.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Request Quote Button */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        >
          <Button variant="glass" size="lg" className="shadow-2xl bg-emerald-900/80 hover:bg-emerald-900 text-white border-white/10 backdrop-blur-xl">
            Request a Quote
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
