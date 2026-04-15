import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Monitor, 
  Smartphone, 
  Tablet, 
  Settings, 
  Download, 
  CheckCircle2, 
  ExternalLink 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Lottie from "lottie-react";
import animationData from "../../../assets/lottifile/Mobile App Showcase.json";


const PRODUCTS = [
  {
    id: "institution",
    name: "NoteArch Institution",
    tagline: "Complete ERP Solution for Academic Institutes",
    category: "For Institutions",
    description: "Designed specifically for educational institutions of any size. It streamlines administrative processes, enhances communication, and provides a unified platform for managing all academic operations.",
    features: ["Centralized Dashboard", "Real-time Attendance", "Integrated Grading System", "Virtual Classroom Management"],
    platforms: ["Windows", "Android", "iOS (Coming Soon)"],
    image: animationData, // Image from screenshot 10
    color: "blue"
  },
  {
    id: "student",
    name: "NoteArch Student",
    tagline: "Personalized Virtual Academic World",
    category: "For Students",
    description: "Creates a personalized virtual academic environment by connecting students with teachers, parents, and tutors in real time. Provides comprehensive tools for homework and progress tracking.",
    features: ["Real-time Communication", "Homework Tracking", "Progress Monitoring", "Digital Study Materials"],
    platforms: ["Windows", "Android", "iOS (Coming Soon)"],
    image: animationData,
    color: "cyan"
  },
  {
    id: "board",
    name: "TeknoBoard",
    tagline: "Interactive Touch Panel for Enhanced Classroom Experience",
    category: "Hardware Solution",
    description: "New generation cost-effective interactive touch panel available in multiple sizes (65\", 75\", 86\") that transforms traditional classrooms into dynamic learning environments.",
    features: ["Physical & Virtual Mode", "Real-time Screen Sharing", "Multimedia Integration", "Seamless Software Sync"],
    specs: { display: "4K UHD", touch: "20 Point Multi-touch", os: "Android/Windows Dual OS" },
    image: animationData,
    color: "indigo"
  },
  {
    id: "book",
    name: "TeknoBook",
    tagline: "Portable Digital Notebook for Academic Activities",
    category: "Portable Device",
    description: "A notebook-sized interactive touch panel (7\", 10\", 15\") designed for day-to-day academic activities with enhanced parent monitoring capabilities.",
    features: ["Portable Digital Notebook", "Ambient Touch Experience", "24/7 Connectivity", "Parental Monitoring"],
    specs: { display: "HD IPS", battery: "10+ Hours", storage: "Up to 256GB" },
    image: animationData,
    color: "emerald"
  }
];

export default function ProductShowcase() {
  const [activeId, setActiveId] = useState(PRODUCTS[0].id);
  const activeProduct = PRODUCTS.find(p => p.id === activeId)!;
      const Lottianimation = (Lottie as any).default || Lottie;

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/20">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="px-4 py-1 border-primary text-primary font-bold">
            THE SUITE
          </Badge>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white">
            Our <span className="text-primary">Products</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto italic">
            "Bridging the gap between hardware and academic intelligence."
          </p>
        </div>

        {/* Product Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {PRODUCTS.map((product) => (
            <button
              key={product.id}
              onClick={() => setActiveId(product.id)}
              className={cn(
                "px-6 py-3 rounded-full font-bold transition-all border-2",
                activeId === product.id 
                  ? "bg-primary border-primary text-white shadow-lg shadow-primary/20 scale-105" 
                  : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-500 hover:border-primary/50"
              )}
            >
              {product.name}
            </button>
          ))}
        </div>

        {/* Main Display Area */}
        <div className="relative min-h-[600px] bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden p-8 md:p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Product Visual */}
              <div className="relative group">
                <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-3xl group-hover:bg-primary/10 transition-colors" />
                {/* <motion.img 
                  layoutId="product-img"
                  src={activeProduct.image}
                  className="relative z-10 w-full h-auto object-contain max-h-[450px] drop-shadow-2xl"
                  alt={activeProduct.name}
                /> */}
                 <Lottianimation
                                
                                  animationData={activeProduct.image}
                                  loop={true}
                                  className="w-full  "
                                  autoplay={true}
                                />
              </div>

              {/* Product Info */}
              <div className="space-y-8">
                <div>
                  <Badge className="mb-4 bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-100 hover:bg-slate-100 capitalize">
                    {activeProduct.category}
                  </Badge>
                  <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-2 italic">
                    {activeProduct.name}
                  </h3>
                  <p className="text-primary font-bold text-lg mb-4">{activeProduct.tagline}</p>
                  <p className="text-slate-500 leading-relaxed">
                    {activeProduct.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {activeProduct.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      {f}
                    </div>
                  ))}
                </div>

                {/* Platforms / Specs */}
                <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                  <p className="text-xs uppercase font-black text-slate-400 mb-3 tracking-widest">Available On / Specifications</p>
                  <div className="flex flex-wrap gap-2">
                    {activeProduct.platforms?.map(p => (
                      <span key={p} className="px-3 py-1 bg-slate-50 dark:bg-slate-800 rounded-md text-xs font-bold border border-slate-200 dark:border-slate-700 uppercase">
                        {p}
                      </span>
                    ))}
                    {activeProduct.specs && Object.entries(activeProduct.specs).map(([key, val]) => (
                      <span key={key} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 rounded-md text-xs font-bold border border-blue-100 dark:border-blue-800 text-blue-600 uppercase">
                        {key}: {val}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button size="lg" className="rounded-full px-8 gap-2 bg-primary shadow-lg shadow-primary/20">
                    Request Demo <Settings className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="lg" className="rounded-full px-8 gap-2">
                    Download Brochure <Download className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}