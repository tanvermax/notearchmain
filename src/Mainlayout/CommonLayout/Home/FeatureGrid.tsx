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
  Plus
} from "lucide-react";
import { Button } from "@/components/ui/button";

const FEATURE_LIST = [
  { name: "Student Management", icon: <UserSquare2 />, color: "border-l-emerald-500", shadow: "hover:shadow-emerald-500/10" },
  { name: "Academics Management", icon: <GraduationCap />, color: "border-l-purple-500", shadow: "hover:shadow-purple-500/10" },
  { name: "Slider Management", icon: <Layout />, color: "border-l-sky-500", shadow: "hover:shadow-sky-500/10" },
  { name: "Teacher Management", icon: <Users2 />, color: "border-l-amber-500", shadow: "hover:shadow-amber-500/10" },
  { name: "Session Year Management", icon: <CalendarRange />, color: "border-l-indigo-500", shadow: "hover:shadow-indigo-500/10" },
  { name: "Holiday Management", icon: <Palmtree />, color: "border-l-teal-500", shadow: "hover:shadow-teal-500/10" },
  { name: "Timetable Management", icon: <FileText />, color: "border-l-violet-500", shadow: "hover:shadow-violet-500/10" },
  { name: "Attendance Management", icon: <ClipboardCheck />, color: "border-l-blue-500", shadow: "hover:shadow-blue-500/10" },
  { name: "Exam Management", icon: <BookOpenCheck />, color: "border-l-rose-500", shadow: "hover:shadow-rose-500/10" },
];

export default function FeaturesGrid() {
  return (
    <section className="py-24 bg-slate-50/50 dark:bg-slate-900/10">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 dark:text-white"
          >
            Powerful <span className="text-primary">Features</span>
          </motion.h2>
          <div className="w-20 h-1.5 bg-primary/20 mx-auto rounded-full overflow-hidden">
            <motion.div 
              initial={{ x: "-100%" }}
              whileInView={{ x: "0%" }}
              transition={{ duration: 1 }}
              className="w-full h-full bg-primary"
            />
          </div>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURE_LIST.map((feature, idx) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`group flex items-center p-6 bg-white dark:bg-slate-900 rounded-2xl border-l-4 ${feature.color} border-y border-r border-slate-100 dark:border-slate-800 shadow-sm transition-all duration-300 ${feature.shadow} hover:border-slate-200 dark:hover:border-slate-700`}
            >
              <div className="flex items-center gap-6 w-full">
                {/* Icon Container */}
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {React.cloneElement(feature.icon as React.ReactElement, { className: "w-6 h-6" } as any)}
                </div>
                
                {/* Label */}
                <span className="font-bold text-slate-800 dark:text-slate-200 group-hover:text-primary transition-colors">
                  {feature.name}
                </span>

                {/* Subtle Plus Sign on hover */}
                <Plus className="ml-auto w-4 h-4 text-slate-300 opacity-0 group-hover:opacity-100 transition-all transform group-hover:rotate-90" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <Button 
            size="lg" 
            className="rounded-full px-12 h-14 text-lg font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-transform"
          >
            View More Features
          </Button>
        </motion.div>
      </div>
    </section>
  );
}