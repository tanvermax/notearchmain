"use client";

import { motion } from "framer-motion";
import { ArrowRight, BrainCircuit, Sparkles, GraduationCap, Users, PencilRuler, Database } from "lucide-react";
import { Button } from "@/components/ui/button";


export default function AboutUs() {
  return (
    <section id="about" className="py-32 relative bg-white dark:bg-slate-950 transition-colors overflow-hidden">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT CONTENT AREA */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-blue-600 dark:text-blue-400"
              >
                <Sparkles className="w-5 h-5 fill-current" />
                <span className="text-xs font-black tracking-[0.3em] uppercase">The IAL Philosophy</span>
              </motion.div>

              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-4xl lg:text-6xl font-black tracking-tighter text-slate-900 dark:text-white leading-[1.1]"
              >
                Notes are the <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">Backbone</span> of Intelligent Learning.
              </motion.h3>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium max-w-2xl"
            >
              <p>
                Student&apos;s class notes are a <span className="text-slate-900 dark:text-white font-bold">crucial element</span> for effective learning. Teacher&apos;s lecture notes are the key resource to facilitate an improved learning path. 
              </p>
              <p className="text-base opacity-80">
                Examiners&apos; remarks on assignments, homework, and test papers help parents, teachers, and students to further improve the learning process through our AI-powered feedback loops.
              </p>
            </motion.div>

            {/* Stakeholder Icons (Visual Representation) */}
            <div className="flex flex-wrap gap-4 py-4">
              {[
                { icon: <GraduationCap />, label: "Students" },
                { icon: <Users />, label: "Parents" },
                { icon: <PencilRuler />, label: "Teachers" },
                { icon: <Database />, label: "Archival" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm font-bold text-slate-600 dark:text-slate-300">
                  <span className="text-blue-500">{item.icon}</span>
                  {item.label}
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Button 
                size="lg" 
                className="group h-16 px-10 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:scale-105 transition-all text-lg font-bold shadow-2xl shadow-blue-500/10"
              >
                Our Complete Mission
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>

          {/* RIGHT VISUAL AREA */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative z-20 rounded-[3rem] overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-2 shadow-2xl"
            >
              <div className="bg-slate-50 dark:bg-slate-950 rounded-[2.5rem] p-8 aspect-square flex flex-col items-center justify-center relative overflow-hidden group">
                
                {/* Animated Core */}
                <div className="relative z-10 w-32 h-32 rounded-full bg-blue-600 flex items-center justify-center shadow-[0_0_50px_-12px_rgba(37,99,235,1)]">
                   <BrainCircuit className="w-16 h-16 text-white animate-pulse" />
                </div>

                {/* Orbiting Elements */}
                <div className="absolute inset-0 animate-[spin_20s_linear_infinite] opacity-30">
                    <div className="absolute top-10 left-1/2 w-4 h-4 rounded-full bg-indigo-500" />
                    <div className="absolute bottom-10 left-1/2 w-3 h-3 rounded-full bg-blue-400" />
                </div>

                <div className="mt-12 space-y-4 w-full relative z-10">
                   {[
                     { label: "Note Preparation", progress: "100%" },
                     { label: "Delivery & Interaction", progress: "85%" },
                     { label: "AI Assessment", progress: "60%" }
                   ].map((step, i) => (
                     <div key={i} className="space-y-1">
                        <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-400">
                           <span>{step.label}</span>
                           <span>{step.progress}</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                           <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: step.progress }}
                              transition={{ duration: 1, delay: i * 0.2 }}
                              className="h-full bg-blue-600 rounded-full" 
                           />
                        </div>
                     </div>
                   ))}
                </div>
              </div>
            </motion.div>

            {/* Decorative Floaties */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl" />
          </div>

        </div>
      </div>
    </section>
  );
}