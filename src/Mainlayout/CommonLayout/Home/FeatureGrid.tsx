"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  UserSquare2, 
  GraduationCap, 
  Layout, 
  Users2, 
  CalendarRange, 
  Palmtree, 
  FileText, 
  ClipboardCheck, 
  BookOpenCheck,
  Plus,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const FEATURE_LIST = [
  { name: "Student Management", icon: <UserSquare2 />, color: "text-emerald-500", bg: "bg-emerald-500/10", glow: "hover:shadow-emerald-500/20" },
  { name: "Academics Management", icon: <GraduationCap />, color: "text-purple-500", bg: "bg-purple-500/10", glow: "hover:shadow-purple-500/20" },
  { name: "Slider Management", icon: <Layout />, color: "text-sky-500", bg: "bg-sky-500/10", glow: "hover:shadow-sky-500/20" },
  { name: "Teacher Management", icon: <Users2 />, color: "text-amber-500", bg: "bg-amber-500/10", glow: "hover:shadow-amber-500/20" },
  { name: "Session Year Management", icon: <CalendarRange />, color: "text-indigo-500", bg: "bg-indigo-500/10", glow: "hover:shadow-indigo-500/20" },
  { name: "Holiday Management", icon: <Palmtree />, color: "text-teal-500", bg: "bg-teal-500/10", glow: "hover:shadow-teal-500/20" },
  { name: "Timetable Management", icon: <FileText />, color: "text-violet-500", bg: "bg-violet-500/10", glow: "hover:shadow-violet-500/20" },
  { name: "Attendance Management", icon: <ClipboardCheck />, color: "text-blue-500", bg: "bg-blue-500/10", glow: "hover:shadow-blue-500/20" },
  { name: "Exam Management", icon: <BookOpenCheck />, color: "text-rose-500", bg: "bg-rose-500/10", glow: "hover:shadow-rose-500/20" },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-32 relative bg-white dark:bg-slate-950 transition-colors overflow-hidden">
      {/* Background Micro-Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-50" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20 space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 text-blue-600 dark:text-blue-400 border border-blue-600/10"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Core Modules</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white"
          >
            Powerful <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent italic">Features</span>
          </motion.h2>
          
          <p className="max-w-xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
            NoteArch offers a modular ecosystem designed to handle every facet of the academic lifecycle with precision.
          </p>
        </div>

        {/* The Smart Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURE_LIST.map((feature, idx) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className={cn(
                "group relative p-8 bg-white dark:bg-slate-900/50 rounded-[2rem] border border-slate-200 dark:border-slate-800 transition-all duration-500",
                feature.glow,
                "hover:border-transparent"
              )}
            >
              {/* Animated Inner Glow on Hover */}
              <div className={cn(
                "absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10",
                feature.bg
              )} />

              <div className="flex items-center gap-6">
                {/* Icon Container */}
                <div className={cn(
                  "relative w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-sm",
                  "bg-slate-50 dark:bg-slate-800 group-hover:bg-white dark:group-hover:bg-slate-700",
                  feature.color
                )}>
                  {React.cloneElement(feature.icon as React.ReactElement<{ className?: string }>, { 
                    className: "w-7 h-7" 
                  })}
                </div>
                
                {/* Label & Details */}
                <div className="flex flex-col">
                  <span className="font-black text-slate-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {feature.name}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">
                    NoteArch {idx % 2 === 0 ? 'Enterprise' : 'Module'}
                  </span>
                </div>

                <Plus className="ml-auto w-5 h-5 text-slate-300 group-hover:text-blue-600 group-hover:rotate-90 transition-all" />
              </div>

              {/* Decorative Corner Accent */}
              <div className={cn(
                "absolute top-4 right-4 w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity",
                feature.color.replace('text', 'bg')
              )} />
            </motion.div>
          ))}
        </div>

        {/* Action Button Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 flex flex-col items-center space-y-6"
        >
          <Button 
            size="lg" 
            className="rounded-2xl px-12 h-16 text-lg font-black bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-2xl hover:scale-105 transition-transform border-none"
          >
            Explore 50+ Modules
          </Button>
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
            Scalable • Integrated • Secure
          </p>
        </motion.div>
      </div>
    </section>
  );
}