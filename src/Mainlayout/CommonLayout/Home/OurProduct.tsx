"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Settings, 
  Download, 
  CheckCircle2, 

  Cpu,
  Smartphone
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
    image: animationData,
    color: "bg-blue-600",
    text: "text-blue-600",
    shadow: "shadow-blue-500/20"
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
    color: "bg-cyan-500",
    text: "text-cyan-500",
    shadow: "shadow-cyan-500/20"
  },
  {
    id: "board",
    name: "TeknoBoard",
    tagline: "Interactive Touch Panel for Enhanced Classrooms",
    category: "Hardware Solution",
    description: "New generation cost-effective interactive touch panel available in multiple sizes (65\", 75\", 86\") that transforms traditional classrooms into dynamic learning environments.",
    features: ["Physical & Virtual Mode", "Real-time Screen Sharing", "Multimedia Integration", "Seamless Software Sync"],
    specs: { display: "4K UHD", touch: "20 Point Multi-touch", os: "Android/Windows Dual OS" },
    image: animationData,
    color: "bg-indigo-600",
    text: "text-indigo-600",
    shadow: "shadow-indigo-500/20"
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
    color: "bg-emerald-600",
    text: "text-emerald-600",
    shadow: "shadow-emerald-500/20"
  }
];

export default function ProductShowcase() {
  const [activeId, setActiveId] = useState(PRODUCTS[0].id);
  const activeProduct = PRODUCTS.find(p => p.id === activeId)!;
  const Lottianimation = (Lottie as any).default || Lottie;

  return (
    <section id="showcase" className="py-32 relative bg-slate-50 dark:bg-slate-950 transition-colors overflow-hidden">
      {/* Background Accents */}
      <div className={cn("absolute top-0 right-0 w-1/3 h-1/3 blur-[150px] opacity-10 transition-colors duration-700", activeProduct.color)} />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20 space-y-6">
          <Badge variant="outline" className="px-6 py-1.5 border-slate-200 dark:border-slate-800 text-[10px] font-black tracking-[0.3em] uppercase">
            The Digital Suite
          </Badge>
          <h2 className="text-4xl md:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
            Integrated <span className={cn("transition-colors duration-500", activeProduct.text)}>NoteArch</span> Portfolio
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl font-medium text-lg italic">
            &quot;Bridging the gap between hardware and academic intelligence.&quot;
          </p>
        </div>

        {/* Dynamic Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 p-2 bg-slate-100 dark:bg-slate-900/50 w-fit mx-auto rounded-[2rem] border border-slate-200 dark:border-slate-800">
          {PRODUCTS.map((product) => (
            <button
              key={product.id}
              onClick={() => setActiveId(product.id)}
              className={cn(
                "relative px-8 py-4 rounded-[1.5rem] text-sm font-black tracking-tight transition-all uppercase",
                activeId === product.id ? "text-white" : "text-slate-500 hover:text-slate-900 dark:hover:text-white"
              )}
            >
              {activeId === product.id && (
                <motion.div
                  layoutId="activeTab"
                  className={cn("absolute inset-0 rounded-[1.5rem] shadow-xl", activeProduct.color, activeProduct.shadow)}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{product.name}</span>
            </button>
          ))}
        </div>

        {/* Main Product Stage */}
        <div className="relative bg-white dark:bg-slate-900 rounded-[3.5rem] border border-slate-200 dark:border-slate-800 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="grid lg:grid-cols-11 gap-0 items-stretch"
            >
              {/* Visual Showcase (Col 5) */}
              <div className="lg:col-span-5 bg-slate-50/50 dark:bg-slate-950/50 p-12 flex items-center justify-center relative border-b lg:border-b-0 lg:border-r border-slate-100 dark:border-slate-800">
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className={cn("w-full h-full animate-pulse", activeProduct.color)} style={{ clipPath: 'circle(40% at 50% 50%)', filter: 'blur(80px)' }} />
                </div>
                <div className="relative z-10 w-full max-w-sm drop-shadow-[0_30px_60px_rgba(0,0,0,0.15)] group-hover:scale-105 transition-transform duration-500">
                  <Lottianimation
                    animationData={activeProduct.image}
                    loop={true}
                    autoplay={true}
                  />
                </div>
              </div>

              {/* Content Details (Col 6) */}
              <div className="lg:col-span-6 p-12 lg:p-16 flex flex-col justify-center space-y-10">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Badge className={cn("px-4 py-1 rounded-full text-white border-none", activeProduct.color)}>
                        {activeProduct.category}
                    </Badge>
                    <div className="h-px flex-grow bg-slate-100 dark:bg-slate-800" />
                  </div>
                  <h3 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-tight tracking-tighter">
                    {activeProduct.name}
                  </h3>
                  <p className="text-lg font-bold text-slate-500 dark:text-slate-400">{activeProduct.tagline}</p>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed max-w-xl">
                    {activeProduct.description}
                  </p>
                </div>

                {/* Features Matrix */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                  {activeProduct.features.map((f) => (
                    <div key={f} className="flex items-start gap-3 group">
                      <div className={cn("mt-1 p-0.5 rounded-full transition-colors", activeProduct.text)}>
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-bold text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                        {f}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech Specs / Platforms */}
                <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 space-y-4">
                  <div className="flex items-center gap-2">
                    {activeProduct.specs ? <Cpu className="w-4 h-4 text-slate-400" /> : <Smartphone className="w-4 h-4 text-slate-400" />}
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Technical Specifications</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeProduct.platforms?.map(p => (
                      <span key={p} className="px-4 py-1.5 bg-white dark:bg-slate-900 rounded-xl text-[10px] font-black border border-slate-200 dark:border-slate-800 uppercase tracking-tighter">
                        {p}
                      </span>
                    ))}
                    {activeProduct.specs && Object.entries(activeProduct.specs).map(([key, val]) => (
                      <span key={key} className="px-4 py-1.5 bg-white dark:bg-slate-900 rounded-xl text-[10px] font-black border border-slate-200 dark:border-slate-800 uppercase tracking-tighter">
                        <span className={activeProduct.text}>{key}:</span> {val}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Row */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button size="lg" className={cn("rounded-2xl px-10 h-16 text-lg font-black shadow-2xl transition-all hover:scale-105 border-none", activeProduct.color, activeProduct.shadow)}>
                    Request Live Demo
                    <Settings className="ml-2 w-5 h-5 animate-spin-slow" />
                  </Button>
                  <Button variant="outline" size="lg" className="rounded-2xl px-10 h-16 text-lg font-black border-2 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900">
                    Brochure
                    <Download className="ml-2 w-5 h-5" />
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