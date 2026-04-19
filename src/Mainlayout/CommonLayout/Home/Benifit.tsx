"use client";

import { motion } from "framer-motion";
import { 
  Globe2, 
  Cpu, 
  ShieldAlert, 
  GitMerge, 
  Users, 
  Archive,
  ArrowUpRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const BENEFITS = [
  {
    title: "Global Accessibility",
    description: "Learn and teach from anywhere in the world with 24/7 connectivity and cloud synchronization.",
    icon: <Globe2 className="w-8 h-8" />,
    color: "blue",
    gradient: "from-blue-600 to-cyan-500"
  },
  {
    title: "AI Powered Analysis",
    description: "Intelligent academic progress analysis to improve student learning outcomes and performance tracking.",
    icon: <Cpu className="w-8 h-8" />,
    color: "purple",
    gradient: "from-purple-600 to-pink-500"
  },
  {
    title: "Disaster Resilient",
    description: "Ensure uninterrupted learning during natural disasters or global situations with robust offline modes.",
    icon: <ShieldAlert className="w-8 h-8" />,
    color: "emerald",
    gradient: "from-emerald-600 to-teal-500"
  },
  {
    title: "Seamless Integration",
    description: "Integrate with existing third-party ERP solutions for a unified experience across all your tools.",
    icon: <GitMerge className="w-8 h-8" />,
    color: "orange",
    gradient: "from-orange-600 to-amber-500"
  },
  {
    title: "Collaborative Learning",
    description: "Connect students, teachers, parents, and tutors in a unified learning environment for better engagement.",
    icon: <Users className="w-8 h-8" />,
    color: "pink",
    gradient: "from-pink-600 to-rose-500"
  },
  {
    title: "Systematic Archival",
    description: "Comprehensive archival of student notes and progress for future career success and academic history.",
    icon: <Archive className="w-8 h-8" />,
    color: "sky",
    gradient: "from-sky-600 to-blue-400"
  }
];

export default function KeyBenefits() {
  return (
    <section id="benefits" className="py-32 relative bg-white dark:bg-slate-950 transition-colors overflow-hidden">
      {/* Background Decorative Mesh */}
      <div className="absolute inset-0 z-0 opacity-30 dark:opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-400/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-24 space-y-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="px-4 py-1.5 rounded-full bg-blue-600/5 border border-blue-500/10 text-[10px] font-black uppercase tracking-[0.3em] text-blue-600"
          >
            Why Choose Us
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 dark:text-white"
          >
            Future-Proof <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent italic">Benefits</span>
          </motion.h2>
          <p className="max-w-2xl text-slate-500 dark:text-slate-400 font-medium text-lg leading-relaxed">
            NoteArch is built with a deep understanding of academic challenges, delivering 
            solutions that scale globally while staying grounded in educational excellence.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BENEFITS.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative p-10 rounded-[3rem] bg-slate-50 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-800 transition-all duration-500 hover:bg-white dark:hover:bg-slate-900 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] hover:-translate-y-2"
            >
              {/* Top-Right Arrow (Hover only) */}
              <div className="absolute top-8 right-8 text-slate-300 dark:text-slate-700 group-hover:text-blue-600 transition-colors">
                <ArrowUpRight className="w-6 h-6 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>

              {/* Icon Section */}
              <div className="mb-10 relative">
                <div className={cn(
                    "absolute inset-0 blur-3xl rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br",
                    benefit.gradient
                )} />
                <div className={cn(
                    "relative w-20 h-20 rounded-[1.5rem] flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-lg group-hover:text-white bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700",
                    `group-hover:bg-gradient-to-br ${benefit.gradient}`
                )}>
                  {benefit.icon}
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-black text-slate-900 dark:text-white leading-tight tracking-tight">
                  {benefit.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              {/* Bottom Decorative Edge */}
              <div className={cn(
                "absolute bottom-0 left-12 right-12 h-1 rounded-t-full opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-r",
                benefit.gradient
              )} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}