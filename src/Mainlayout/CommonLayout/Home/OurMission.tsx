"use client";

import { motion } from "framer-motion";
import { Rocket, Target, Zap, Link, Globe, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Lottie from "lottie-react";
import animationData from "../../../assets/lottifile/rocket launched into space.json";
import { cn } from "@/lib/utils";

export default function MissionSection() {
  const Lottianimation = (Lottie as any).default || Lottie;

  return (
    <section id="mission" className="py-32 relative bg-slate-50 dark:bg-slate-950/50 transition-colors overflow-hidden">
      {/* Decorative Gradient Background */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          
          {/* LEFT SIDE: THE VISUAL PORTAL */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square rounded-[3rem] bg-white dark:bg-slate-900 shadow-2xl border border-slate-200/50 dark:border-slate-800 p-8 flex items-center justify-center overflow-hidden group"
            >
              {/* Inner Portal Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <Lottianimation
                animationData={animationData}
                loop={true}
                className="w-full h-full relative z-10 scale-110"
                autoplay={true}
              />

              {/* Dynamic Overlay Badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute top-12 right-12 p-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white dark:border-slate-700 z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-slate-600 dark:text-slate-300">Secured</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating Connection Icon to represent "Interlinked Backbone" */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-600 rounded-3xl shadow-2xl flex items-center justify-center text-white z-30 animate-bounce">
                <Link className="w-10 h-10" />
            </div>
          </div>

          {/* RIGHT SIDE: THE STRATEGIC CONTENT */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-600/10 text-blue-600 dark:text-blue-400">
                <Rocket className="w-4 h-4 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">NoteArch Mission</span>
              </div>
              
              <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Bridging the Gap with <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">360° Digitalization</span>
              </h2>
              
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                NoteArch provides a single platform ecosystem. Whether through <span className="text-blue-600 font-bold">NoteArch-(Institution)</span> or <span className="text-indigo-500 font-bold">NoteArch-(Student)</span>, we ensure uninterrupted learning at any situation, globally.
              </p>
            </div>

            {/* Feature Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: <Zap className="text-amber-500" />, title: "Real-time Monitoring", desc: "For parents & teachers" },
                { icon: <Globe className="text-blue-500" />, title: "Global Accessibility", desc: "365/24/7 connectivity" }
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm group hover:border-blue-500/50 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2">
                    {feature.icon}
                    <span className="font-black text-sm text-slate-900 dark:text-white uppercase tracking-tight">{feature.title}</span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{feature.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-6 pt-4">
              <Button size="lg" className="rounded-full px-10 h-16 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-lg font-black shadow-2xl hover:scale-105 transition-all">
                Learn More
              </Button>
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Status</span>
                <span className="text-sm font-bold text-emerald-500">Live & Interlinked</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}