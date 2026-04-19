"use client";

import { motion } from "framer-motion";
import { Eye, Globe, Lightbulb, Sparkles, Map } from "lucide-react";
import { Button } from "@/components/ui/button";
import Lottie from "lottie-react";
import animationData from "../../../assets/lottifile/brain yoga.json";
import { cn } from "@/lib/utils";

export default function VisionSection() {
  const Lottianimation = (Lottie as any).default || Lottie;

  return (
    <section id="vision" className="py-32 relative bg-white dark:bg-slate-950 transition-colors overflow-hidden">
      {/* Subtle Background Text for a "Branded" feel */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-slate-50 dark:text-slate-900/20 select-none pointer-events-none z-0">
        VISION
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT SIDE: THE STRATEGIC CONTENT */}
          <div className="lg:col-span-6 space-y-10">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/5 dark:bg-blue-400/10 border border-blue-500/10 text-blue-600 dark:text-blue-400"
              >
                <Eye className="w-4 h-4" />
                <span className="text-[10px] font-black uppercase tracking-[0.25em]">Our Visionary Foundation</span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-5xl lg:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.05]"
              >
                Empowering Minds, <br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">Connecting the World</span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium max-w-xl"
              >
                Founded by a global collective with research roots in <span className="text-blue-600 dark:text-blue-400 font-bold">North America, Europe, and Asia</span>, we bridge high-level R&D with practical academic digitalization.
              </motion.p>
            </div>

            {/* Vision Pillars with Card Design */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { 
                  label: "Academic Excellence", 
                  desc: "Global research standards",
                  icon: <Lightbulb className="w-5 h-5" />,
                  color: "bg-blue-500"
                },
                { 
                  label: "24/7 Global Access", 
                  desc: "Uninterrupted connectivity",
                  icon: <Globe className="w-5 h-5" />,
                  color: "bg-indigo-500"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex flex-col gap-4 p-6 rounded-[2rem] bg-slate-50 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-800 hover:border-blue-500/50 transition-all shadow-sm"
                >
                  <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg", item.color)}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 dark:text-white uppercase tracking-tight text-sm">{item.label}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
              <Button size="lg" className="w-full sm:w-auto rounded-full px-10 h-16 bg-blue-600 text-white font-black text-lg hover:scale-105 transition-all shadow-xl shadow-blue-500/25 border-none">
                Discover Our Roots
              </Button>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
                <Sparkles className="w-4 h-4 text-emerald-500" />
                <span className="text-[10px] font-black uppercase text-emerald-600 tracking-widest">Research-First Approach</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: THE VISUAL */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 w-full aspect-square flex items-center justify-center"
            >
              {/* Central Glowing Core */}
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-[80%] h-[80%] bg-blue-500/5 dark:bg-blue-400/5 rounded-full blur-[80px] animate-pulse" />
              </div>

              {/* The Animation */}
              <div className="relative z-20 w-[40%] h-full scale-125 lg:scale-150">
                <Lottianimation
                  animationData={animationData}
                  loop={true}
                  className="w-full h-full"
                  autoplay={true}
                />
              </div>

              {/* Decorative "Data" Circles */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { repeat: Infinity, duration: 10 + i * 5, ease: "linear" },
                    scale: { repeat: Infinity, duration: 3, ease: "easeInOut" }
                  }}
                  className="absolute border border-slate-200 dark:border-slate-800 rounded-full"
                  style={{
                    width: `${40 + i * 20}%`,
                    height: `${40 + i * 20}%`,
                  }}
                />
              ))}

              {/* Floating "Global" Marker */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 5 }}
                className="absolute top-0 right-10 p-3 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex items-center gap-2"
              >
                <Map className="w-4 h-4 text-blue-500" />
                <span className="text-[10px] font-black uppercase text-slate-500">Global Node</span>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}