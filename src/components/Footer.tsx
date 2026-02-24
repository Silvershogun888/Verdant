import React from "react";
import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 text-stone-100 font-medium text-xl mb-6">
            <Leaf className="w-6 h-6 text-emerald-500" />
            <span>Verdant</span>
          </Link>
          <p className="text-sm leading-relaxed max-w-xs">
            Cultivating sustainable futures through precision agriculture and natural stewardship.
          </p>
        </div>

        <div>
          <h4 className="text-stone-100 font-medium mb-6">Services</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/services" className="hover:text-emerald-400 transition-colors">Precision Farming</Link></li>
            <li><Link to="/services" className="hover:text-emerald-400 transition-colors">Soil Management</Link></li>
            <li><Link to="/services" className="hover:text-emerald-400 transition-colors">Crop Consulting</Link></li>
            <li><Link to="/services" className="hover:text-emerald-400 transition-colors">Irrigation Systems</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-stone-100 font-medium mb-6">Company</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/about" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
            <li><Link to="/projects" className="hover:text-emerald-400 transition-colors">Our Projects</Link></li>
            <li><Link to="/contact" className="hover:text-emerald-400 transition-colors">Careers</Link></li>
            <li><Link to="/contact" className="hover:text-emerald-400 transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-stone-100 font-medium mb-6">Connect</h4>
          <p className="text-sm mb-4">
            123 Harvest Way<br />
            Agri Valley, CA 93245
          </p>
          <p className="text-sm">
            hello@verdant.ag<br />
            (555) 123-4567
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-stone-800 text-xs flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} Verdant Agriculture. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-stone-200 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-stone-200 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
