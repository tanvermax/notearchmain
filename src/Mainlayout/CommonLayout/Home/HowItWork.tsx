import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { 
  Building2, 
  Users, 
  Settings2, 
  CheckCircle2, 
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";
const FormSetupMockup = () => (
    <div className="absolute bottom-4 left-4 w-[180px] p-4 bg-white/90 backdrop-blur-sm rounded-xl shadow-xl space-y-2 border border-white/20 hidden md:block z-20">
        <div className="h-4 w-20 bg-primary/20 rounded-full" />
        <div className="h-6 w-full bg-slate-100 rounded-full" />
        <div className="h-6 w-full bg-slate-100 rounded-full" />
    </div>
)
const TeamManagementMockup = () => (
    <div className="absolute bottom-4 left-4 w-[200px] p-4 bg-white/90 backdrop-blur-sm rounded-xl shadow-xl flex items-center gap-3 border border-white/20 hidden md:block z-20">
        <Users className="w-10 h-10 text-primary" />
        <div className="space-y-1 flex-grow">
            <div className="h-4 w-24 bg-slate-100 rounded-full" />
            <div className="h-4 w-32 bg-primary/20 rounded-full" />
        </div>
    </div>
)
const DashboardMockup = () => (
    <div className="absolute bottom-4 left-4 w-[220px] p-4 bg-white/90 backdrop-blur-sm rounded-xl shadow-xl space-y-2 border border-white/20 hidden md:block z-20">
        <div className="flex justify-between items-center gap-4">
            <div className="h-10 w-10 bg-emerald-500 rounded-full flex items-center justify-center text-white"><CheckCircle2 className="w-6 h-6"/></div>
            <div className="h-10 w-full bg-slate-100 rounded-full" />
        </div>
    </div>
)
const JOURNEY_STEPS = [
  {
    id: 1,
    title: "Onboarding & Setup",
    desc: "Register Your Institution And Set Up Your Profile With Basic Information About Your School, Classes, And Administrative Needs.",
    icon: <Building2 className="w-8 h-8 text-white" />,
    color: "from-blue-700 to-indigo-800",
    visual: <FormSetupMockup />
  },
  {
    id: 2,
    title: "Team & Student Sync",
    desc: "Add Teachers, Students, And Staff Members. Our Intuitive System Handles Attendance, Assignments, Exams, And Communication Seamlessly.",
    icon: <Users className="w-8 h-8 text-white" />,
    color: "from-indigo-700 to-purple-800",
    visual: <TeamManagementMockup />
  },
  {
    id: 3,
    title: "Monitor & Growth",
    desc: "Monitor Progress, Generate Reports, And Manage Your Entire Institution From Anywhere. Complete Digitalization In Just A Few Clicks!",
    icon: <Settings2 className="w-8 h-8 text-white" />,
    color: "from-purple-700 to-blue-800",
    visual: <DashboardMockup />
  }
];

export default function InteractiveOnboarding() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  
  const springProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  const widthPercentage = useTransform(springProgress, [0, 1], ["0%", "100%"]);
  
  // Transform background based on scroll
  const gradientIndex = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [0, 0.4, 0.7, 1]);

  return (
    <section ref={targetRef} className="py-24 bg-white dark:bg-slate-950 min-h-[120vh]">
      <div className="container mx-auto px-6 max-w-7xl relative">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-sm font-bold tracking-widest text-primary uppercase"
          >
            Digitalization Pipeline
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white leading-[1.05]"
          >
            How Does <span className="text-blue-600">It Work?</span>
          </motion.h3 >
          <p className="text-lg text-slate-500 max-w-lg mx-auto leading-relaxed pt-2">
            "Your 3-step blueprint to educational modernization."
          </p>
        </div>

        {/* The Dynamic Journey Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[2.5rem] bg-blue-900 shadow-2xl overflow-hidden p-12 md:p-16 text-white"
        >
          {/* Dynamic Background Gradient that changes on scroll */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br"
            style={{ 
              background: useTransform(
                scrollYProgress,
                [0, 0.4, 0.7, 1],
                [
                  "linear-gradient(to bottom right, #1d4ed8, #4338ca)", // Step 1
                  "linear-gradient(to bottom right, #4338ca, #6d28d9)", // Step 2
                  "linear-gradient(to bottom right, #6d28d9, #1d4ed8)", // Step 3
                  "linear-gradient(to bottom right, #1d4ed8, #4338ca)", // Post-scroll
                ]
              )
            }}
          />

          {/* Floating 'Active Step' Indicator */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
            {JOURNEY_STEPS.map((_, i) => (
              <motion.div
                key={i}
                className="w-20 h-1.5 rounded-full bg-white/20 overflow-hidden"
              >
                <motion.div 
                  className="h-full bg-white"
                  style={{ 
                    width: i === 0 
                      ? useTransform(scrollYProgress, [0, 0.3], ["0%", "100%"]) 
                      : i === 1 
                      ? useTransform(scrollYProgress, [0.3, 0.6], ["0%", "100%"])
                      : useTransform(scrollYProgress, [0.6, 0.9], ["0%", "100%"])
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* Horizontal Journey Nodes */}
          <div className="grid md:grid-cols-3 gap-16 items-start relative z-10 pt-16">
            {JOURNEY_STEPS.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center group"
              >
                {/* Visual Number Node with Glow */}
                <motion.div
                  style={{ 
                    borderColor: useTransform(scrollYProgress, [0 + index * 0.33, 0.33 + index * 0.33], ["rgba(255,255,255,0.1)", "#22c55e"]) 
                  }}
                  className="relative w-24 h-24 rounded-full bg-white/10 flex items-center justify-center text-3xl font-extrabold mb-10 border-4 border-white/20 group-hover:scale-105 transition-transform"
                >
                  {index + 1}
                  {/* Floating Icon */}
                  <div className="absolute -top-6 -right-6 p-3 rounded-2xl bg-white shadow-xl text-primary">
                    {step.icon}
                  </div>
                  {/* Active Pulse effect when scroll is over it */}
                   <motion.div 
                    className="absolute inset-0 bg-white/10 rounded-full blur-xl pointer-events-none"
                    style={{ 
                      opacity: useTransform(scrollYProgress, [0 + index * 0.33, 0.33 + index * 0.33], [0, 1]) 
                    }}
                    />
                </motion.div>
                
                {/* Step Info */}
                <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                <p className="text-blue-50/80 text-sm md:text-base leading-relaxed font-medium line-clamp-3">
                  {step.desc}
                </p>
                
                {/* Hover Visual Placeholder */}
                <div className="w-full h-12 bg-white/5 rounded-xl border border-white/10 mt-6 flex items-center justify-center text-xs text-blue-100 italic opacity-50 group-hover:opacity-100 transition-opacity">
                  Visual Coming Soon
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Call to Action */}
          <motion.div 
            className="mt-20 pt-10 border-t border-white/10 text-center relative z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-xs uppercase font-black text-blue-200 tracking-widest mb-4">Immediate Trial</p>
            <Button size="lg" className="rounded-full px-12 h-14 text-lg font-semibold gap-3 bg-white text-blue-900 hover:scale-105 transition-transform shadow-xl shadow-black/10">
              Try Demo School <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Minimalist visual placeholders for Step Visuals (You can replace these with your screenshots later)
