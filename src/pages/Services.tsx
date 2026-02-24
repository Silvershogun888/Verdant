import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import { GlassCard } from "../components/GlassCard";
import { Button } from "../components/Button";
import { cn } from "../utils/cn";
import { ArrowRight, Droplets, Sprout, Sun, Wind } from "lucide-react";
import { useLocation } from "react-router-dom";

const services = [
  {
    id: "precision-farming",
    title: "Precision Farming",
    icon: Sprout,
    desc: "Data-driven insights for optimal crop yield and soil health.",
    content: "Our precision farming solutions utilize advanced sensors, high-resolution satellite imagery, and sophisticated machine learning algorithms to monitor every acre in real-time. We track crop vigor, soil moisture gradients, and precise nutrient levels to create dynamic prescription maps. By applying the exact resource needed at the specific location and time, we significantly maximize yield potential while drastically reducing the environmental footprint of modern agriculture.",
    features: ["Soil Mapping & Analysis", "Variable Rate Technology", "Yield Monitoring", "Drone Scouting"],
    img: "https://images.unsplash.com/photo-1592982537447-6f2a6a0c5c13?q=80&w=2940&auto=format&fit=crop"
  },
  {
    id: "irrigation-systems",
    title: "Irrigation Systems",
    icon: Droplets,
    desc: "Smart water management that conserves resources naturally.",
    content: "Water is our most precious resource, and its management is critical for future sustainability. Our intelligent, autonomous irrigation systems integrate hyper-local weather forecasting with deep-soil moisture sensor networks and real-time plant water-stress indicators. This closed-loop system delivers precise volumes of water to the root zone exactly when needed, eliminating waste, preventing runoff, and building deep crop resilience against regional drought conditions.",
    features: ["Drip Irrigation Design", "Automated Scheduling", "Moisture Sensor Networks", "Water Usage Analytics"],
    img: "https://images.unsplash.com/photo-1586771107445-d3af25164478?q=80&w=2940&auto=format&fit=crop"
  },
  {
    id: "climate-adaptation",
    title: "Climate Adaptation",
    icon: Sun,
    desc: "Strategies to thrive in changing environmental conditions.",
    content: "As global weather patterns become increasingly unpredictable, traditional agricultural practices must evolve to stay viable. We empower farms to build long-term resilience through strategic crop diversification, active microclimate management, and advanced predictive modeling. By simulating future climate scenarios, we help producers select the most resilient cultivars and implement protective infrastructure, ensuring operational stability and food security in the face of climate uncertainty.",
    features: ["Risk Assessment", "Microclimate Monitoring", "Resilient Crop Selection", "Extreme Weather Planning"],
    img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2940&auto=format&fit=crop"
  },
  {
    id: "soil-quality",
    title: "Air & Soil Quality",
    icon: Wind,
    desc: "Monitoring and improving the foundational elements of growth.",
    content: "Healthy, living soil is the indispensable foundation of a truly sustainable agricultural system. We specialize in implementing science-backed regenerative practices that rebuild soil organic matter, enhance microbial biodiversity, and optimize carbon sequestration pathways. Our holistic approach transforms depleted fields into naturally fertile, sponge-like ecosystems that retain more water, suppress diseases, and provide a stable, nutrient-rich environment for superior crop growth.",
    features: ["Carbon Tracking", "Cover Crop Strategies", "Microbiome Analysis", "Erosion Control"],
    img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2832&auto=format&fit=crop"
  }
];

const ServiceSection = ({ service, index }: { key?: React.Key, service: typeof services[0], index: number }) => {
  return (
    <div id={service.id} className="pt-32 pb-16 scroll-mt-24">
      {/* 1. Divider line draw */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="h-px w-full bg-emerald-200 origin-left mb-16"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="order-2 lg:order-1">
          {/* 2. Title fade up */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
              <service.icon className="w-6 h-6" />
            </div>
            <h2 className="text-3xl md:text-4xl font-medium text-stone-900">{service.title}</h2>
          </motion.div>

          {/* 3. Content stagger */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg text-stone-600 mb-8 leading-relaxed"
          >
            {service.content}
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {service.features.map((feature, i) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1, ease: "easeOut" }}
                className="flex items-center gap-3 text-stone-700 font-medium"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                {feature}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            <Button variant="outline" className="gap-2">
              Learn More <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 lg:order-2"
        >
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-lg">
            <img src={service.img} alt={service.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-stone-900/10" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default function Services() {
  const [activeSection, setActiveSection] = useState(services[0].id);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          window.scrollTo({
            top: el.offsetTop - 100,
            behavior: "smooth"
          });
        }
      }, 100); // small delay to ensure DOM is ready and PageTransition completes
    }
  }, [location.hash]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = services.map(s => document.getElementById(s.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(services[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 100,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto relative flex flex-col lg:flex-row gap-16">

      {/* Sticky glass side navigation */}
      <div className="hidden lg:block w-64 shrink-0">
        <div className="sticky top-32">
          <GlassCard className="p-6">
            <h3 className="text-sm font-medium text-stone-500 uppercase tracking-wider mb-6">Our Services</h3>
            <ul className="space-y-4">
              {services.map((service) => {
                const isActive = activeSection === service.id;
                return (
                  <li key={service.id}>
                    <button
                      onClick={() => scrollTo(service.id)}
                      className={cn(
                        "relative text-left w-full py-2 text-sm font-medium transition-colors duration-300",
                        isActive ? "text-emerald-900" : "text-stone-600 hover:text-emerald-800"
                      )}
                    >
                      {service.title}
                      {isActive && (
                        <motion.div
                          layoutId="sidebar-underline"
                          className="absolute left-0 right-0 -bottom-1 h-[2px] bg-emerald-600 rounded-full"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </GlassCard>
        </div>
      </div>

      <div className="flex-1">
        <div className="mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-6xl font-medium text-stone-900 mb-6 tracking-tight"
          >
            Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl text-stone-600 max-w-2xl leading-relaxed"
          >
            Comprehensive agricultural solutions designed to harmonize productivity with environmental stewardship.
          </motion.p>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <ServiceSection key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
