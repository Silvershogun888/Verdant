import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GlassCard } from "../components/GlassCard";
import { Button } from "../components/Button";
import { cn } from "../utils/cn";
import { Mail, MapPin, Phone } from "lucide-react";

const InputField = ({ label, id, type = "text", error, ...props }: any) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  return (
    <div className="relative mb-8">
      <motion.div
        animate={error ? { x: [-2, 2, -2, 2, 0] } : {}}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="relative"
      >
        <label
          htmlFor={id}
          className={cn(
            "absolute left-4 transition-all duration-300 pointer-events-none",
            isFocused || hasValue
              ? "-top-2.5 text-xs text-emerald-700 bg-white/80 backdrop-blur-sm px-1 rounded-sm"
              : "top-3.5 text-stone-500"
          )}
        >
          {label}
        </label>
        
        {type === "textarea" ? (
          <textarea
            id={id}
            onFocus={() => setIsFocused(true)}
            onBlur={(e) => {
              setIsFocused(false);
              setHasValue(e.target.value.length > 0);
            }}
            onChange={(e) => setHasValue(e.target.value.length > 0)}
            className={cn(
              "w-full bg-white/50 border border-stone-200 rounded-xl px-4 py-3.5 text-stone-900 focus:outline-none transition-colors duration-300 min-h-[120px] resize-y",
              error ? "border-red-300" : "hover:border-stone-300"
            )}
            {...props}
          />
        ) : (
          <input
            type={type}
            id={id}
            onFocus={() => setIsFocused(true)}
            onBlur={(e) => {
              setIsFocused(false);
              setHasValue(e.target.value.length > 0);
            }}
            onChange={(e) => setHasValue(e.target.value.length > 0)}
            className={cn(
              "w-full bg-white/50 border border-stone-200 rounded-xl px-4 py-3.5 text-stone-900 focus:outline-none transition-colors duration-300",
              error ? "border-red-300" : "hover:border-stone-300"
            )}
            {...props}
          />
        )}

        {/* Focus ring draws around field */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: isFocused ? 1 : 0, opacity: isFocused ? 1 : 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 border-2 border-emerald-500 rounded-xl pointer-events-none origin-center"
        />
      </motion.div>
      
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="absolute -bottom-5 left-4 text-xs text-red-500 font-medium"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate validation
    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    
    const newErrors: Record<string, string> = {};
    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      form.reset();
      
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1500);
  };

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-6xl font-medium text-stone-900 mb-6 tracking-tight"
        >
          Get in Touch
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed"
        >
          Ready to cultivate a sustainable future? Let's discuss how our precision agriculture solutions can benefit your land.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <GlassCard className="p-8 md:p-12">
            <h2 className="text-2xl font-medium text-stone-900 mb-8">Send a Message</h2>
            
            <form onSubmit={handleSubmit}>
              <InputField id="name" name="name" label="Full Name" error={errors.name} />
              <InputField id="email" name="email" type="email" label="Email Address" error={errors.email} />
              <InputField id="company" name="company" label="Company / Farm Name" />
              <InputField id="message" name="message" type="textarea" label="How can we help?" />
              
              <div className="relative">
                <Button 
                  type="submit" 
                  size="lg" 
                  className={cn("w-full relative overflow-hidden", isSuccess ? "bg-emerald-600" : "")}
                  disabled={isSubmitting}
                >
                  {/* Liquid confirmation fill on click */}
                  <AnimatePresence>
                    {isSubmitting && (
                      <motion.span
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1.5, opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="absolute inset-0 bg-emerald-700 rounded-full origin-center"
                      />
                    )}
                  </AnimatePresence>
                  
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? "Sending..." : isSuccess ? "Message Sent!" : "Send Message"}
                  </span>
                </Button>
              </div>
            </form>
          </GlassCard>
        </motion.div>

        {/* Contact Info & Map */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-between"
        >
          <div className="space-y-8 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-stone-900 mb-1">Headquarters</h3>
                <p className="text-stone-600 leading-relaxed">123 Harvest Way<br />Agri Valley, CA 93245</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-stone-900 mb-1">Email Us</h3>
                <p className="text-stone-600 leading-relaxed">hello@verdant.ag<br />support@verdant.ag</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-stone-900 mb-1">Call Us</h3>
                <p className="text-stone-600 leading-relaxed">(555) 123-4567<br />Mon-Fri, 8am-6pm PST</p>
              </div>
            </div>
          </div>

          {/* Map: Simple fade in only */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="w-full h-64 rounded-3xl overflow-hidden bg-stone-200 relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2948&auto=format&fit=crop" 
              alt="Map location" 
              className="w-full h-full object-cover opacity-80 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-emerald-900/10" />
            
            {/* Map pin */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-4 h-4 rounded-full bg-emerald-600 shadow-[0_0_0_4px_rgba(16,185,129,0.2)]" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
