

import { motion } from "framer-motion";
import { 
  Building2, 
  Users, 
  Settings2, 
  ArrowRight,
  Zap,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";

const JOURNEY_STEPS = [
  {
    id: 1,
    title: "Onboarding & Setup",
    desc: "Register your institution and configure your profile with custom classes and administrative protocols.",
    icon: <Building2 className="w-6 h-6" />,
    color: "group-hover:text-blue-500",
    glow: "bg-blue-500/10"
  },
  {
    id: 2,
    title: "Team & Student Sync",
    desc: "Sync teachers and students effortlessly. Our system automates attendance, exams, and daily logs.",
    icon: <Users className="w-6 h-6" />,
    color: "group-hover:text-indigo-500",
    glow: "bg-indigo-500/10"
  },
  {
    id: 3,
    title: "Monitor & Growth",
    desc: "Generate real-time reports and manage your entire institution from one centralized dashboard.",
    icon: <Settings2 className="w-6 h-6" />,
    color: "group-hover:text-emerald-500",
    glow: "bg-emerald-500/10"
  }
];

export default function RefinedJourney() {
  return (
    <section className="py-32 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header - Stays clean */}
        <div className="flex flex-col items-center text-center mb-24 space-y-4">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/5 border border-blue-500/10 text-blue-600 font-bold text-[10px] uppercase tracking-widest">
            <Zap className="w-3.5 h-3.5" />
            The Process
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 dark:text-white">
            Simple <span className="italic bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Onboarding</span>
          </h2>
        </div>

        {/* The Grid - No longer relies on complex scroll percentages */}
        <div className="grid lg:grid-cols-3 gap-8 relative">
          
          {/* Connecting Line (Desktop Only) */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 dark:bg-slate-800 -translate-y-12 hidden lg:block -z-10" />

          {JOURNEY_STEPS.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.2 }}
              className="group relative"
            >
              <div className="flex flex-col items-center text-center p-10 rounded-[3rem] bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 transition-all duration-500 hover:bg-white dark:hover:bg-slate-900 hover:shadow-2xl hover:shadow-blue-500/5">
                
                {/* Step Number Badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[10px] font-black uppercase tracking-tighter">
                  Step 0{idx + 1}
                </div>

                {/* Icon Circle */}
                <div className="relative mb-8">
                  <div className="w-24 h-24 rounded-[2.5rem] bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <div className="text-slate-600 transition-colors duration-500 group-hover:text-blue-600">
                      {step.icon}
                    </div>
                  </div>
                  {/* Status Indicator */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: idx * 0.3 + 0.5 }}
                    className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-emerald-500 border-4 border-white dark:border-slate-900 flex items-center justify-center"
                  >
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </motion.div>
                </div>

                {/* Text Content */}
                <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
                  {step.title}
                </h4>
                <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed text-sm">
                  {step.desc}
                </p>

                {/* Hover Visual Detail */}
                <div className="mt-8 w-full pt-8 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center justify-center gap-2 text-blue-600 font-black text-[10px] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">
                    View Tutorial <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 flex flex-col items-center gap-6"
        >
          <Button className="h-16 px-12 rounded-2xl bg-blue-600 text-white font-black hover:bg-blue-700 transition-all hover:scale-105 shadow-xl shadow-blue-500/20">
            Start Free Implementation
          </Button>
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
            No Credit Card Required • Setup in 24h
          </p>
        </motion.div>
      </div>
    </section>
  );
}