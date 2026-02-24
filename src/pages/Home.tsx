import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import { Button } from "../components/Button";
import { GlassCard } from "../components/GlassCard";
import { ArrowRight, Droplets, Sprout, Sun, Wind } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../utils/cn";

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background with upward drift */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2832&auto=format&fit=crop"
          alt="Morning mist over farmland"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-stone-900/30" />
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl px-6 flex flex-col items-center text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <GlassCard className="p-8 md:p-12">
            <div className="overflow-hidden mb-4">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl md:text-6xl font-medium tracking-tight text-stone-900 pb-2 md:pb-4"
              >
                Cultivating the Future
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-6">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl md:text-6xl font-medium tracking-tight text-emerald-800 pb-2 md:pb-4"
              >
                of Agriculture
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="text-lg md:text-xl text-stone-700 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Precision farming and natural stewardship working in harmony to yield sustainable, breathable ecosystems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
            >
              <Button size="lg" className="gap-2">
                Explore Services <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { id: "precision-farming", icon: Sprout, title: "Precision Farming", desc: "Data-driven insights for optimal crop yield and soil health." },
    { id: "irrigation-systems", icon: Droplets, title: "Irrigation Systems", desc: "Smart water management that conserves resources naturally." },
    { id: "climate-adaptation", icon: Sun, title: "Climate Adaptation", desc: "Strategies to thrive in changing environmental conditions." },
    { id: "soil-quality", icon: Wind, title: "Air & Soil Quality", desc: "Monitoring and improving the foundational elements of growth." },
  ];

  return (
    <section className="py-32 px-6 bg-stone-50 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-medium text-stone-900 mb-4">Our Services</h2>
          <p className="text-stone-600 max-w-2xl mx-auto">Harmonizing technology with nature's rhythms.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link to={`/services#${service.id}`} className="block h-full">
                <GlassCard className="h-full p-8 group hover:bg-white/80 transition-colors duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out" />

                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + i * 0.1, type: "spring", stiffness: 200, damping: 20 }}
                    className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-6 text-emerald-700"
                  >
                    <service.icon className="w-6 h-6" />
                  </motion.div>

                  <h3 className="text-xl font-medium text-stone-900 mb-3">{service.title}</h3>
                  <p className="text-stone-600 leading-relaxed">{service.desc}</p>
                </GlassCard>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    { img: "https://images.unsplash.com/photo-1592982537447-6f2a6a0c5c13?q=80&w=2940&auto=format&fit=crop", title: "Valley Vineyard Optimization", category: "Precision Farming" },
    { img: "https://images.unsplash.com/photo-1586771107445-d3af25164478?q=80&w=2940&auto=format&fit=crop", title: "Highland Wheat Irrigation", category: "Water Management" },
    { img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2940&auto=format&fit=crop", title: "Coastal Soil Restoration", category: "Soil Health" },
  ];

  return (
    <section className="py-32 px-6 bg-stone-100 -mt-[1px] relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-medium text-stone-900 mb-4">Featured Projects</h2>
            <p className="text-stone-600">Real results rooted in sustainable practices.</p>
          </div>
          <Link to="/projects" className="hidden md:flex items-center gap-2 text-emerald-700 hover:text-emerald-800 font-medium transition-colors">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/5]"
            >
              <motion.img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-stone-900/40 transition-colors duration-500" />

              {/* Glass overlay on hover */}
              <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <GlassCard className="p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <p className="text-emerald-800 text-sm font-medium mb-1">{project.category}</p>
                  <h3 className="text-stone-900 text-xl font-medium">{project.title}</h3>
                </GlassCard>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AnimatedNumber = ({ value, suffix = "" }: { value: number, suffix?: string }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const startTime = performance.now();

      const updateNumber = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Ease out expo
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

        setDisplayValue(Math.floor(easeProgress * value));

        if (progress < 1) {
          requestAnimationFrame(updateNumber);
        }
      };

      requestAnimationFrame(updateNumber);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-5xl md:text-6xl font-medium text-emerald-900 font-mono tracking-tighter">
      {displayValue}
      <motion.span
        initial={{ opacity: 0, x: -10 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 2, duration: 0.5 }}
        className="text-2xl md:text-3xl text-emerald-700 ml-1 font-sans"
      >
        {suffix}
      </motion.span>
    </span>
  );
};

const Stats = () => {
  return (
    <section className="py-24 px-6 bg-stone-50 -mt-[1px] relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="h-px w-full bg-emerald-200 origin-left mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <AnimatedNumber value={150} suffix="+" />
            <p className="text-stone-600 mt-4 font-medium">Farms Optimized</p>
          </div>
          <div>
            <AnimatedNumber value={30} suffix="%" />
            <p className="text-stone-600 mt-4 font-medium">Average Yield Increase</p>
          </div>
          <div>
            <AnimatedNumber value={2} suffix="M+" />
            <p className="text-stone-600 mt-4 font-medium">Gallons Water Saved</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2940&auto=format&fit=crop"
          alt="Green field"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-emerald-900/90 mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <GlassCard className="p-12 md:p-16 text-center border-white/20 bg-white/10 before:from-white/20 before:to-transparent">
            <motion.div
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="absolute inset-0 pointer-events-none"
            >
              <svg className="w-full h-full absolute inset-0 rounded-2xl" preserveAspectRatio="none">
                <rect x="1" y="1" width="100%" height="100%" rx="16" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
              </svg>
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-medium text-white mb-6">Ready to cultivate your future?</h2>
            <p className="text-emerald-50 text-lg mb-10 max-w-xl mx-auto">
              Partner with us to bring sustainable, precision agriculture to your land.
            </p>
            <Button variant="glass" size="lg">
              Request a Consultation
            </Button>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="pb-0">
      <Hero />
      <Services />
      <Projects />
      <Stats />
      <CTA />
    </div>
  );
}
