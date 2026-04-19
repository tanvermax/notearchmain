"use client";

import { motion } from "framer-motion";
import { 
  Cloud, 
  Settings2, 
  Code2, 
  FileCheck2, 
  BarChart3, 
  ChevronRight,
  ShieldCheck,
  Briefcase
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const SERVICES = [
  {
    id: "01",
    title: "Complete Digitalization",
    description: "End-to-end transformation covering infrastructure setup, software deployment, and lifecycle support.",
    tags: ["Infrastructure", "Training", "24/7 Support"],
    icon: <Cloud className="w-6 h-6" />,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "group-hover:border-blue-500/50"
  },
  {
    id: "02",
    title: "Integration Services",
    description: "Seamlessly bridging NoteArch with your legacy systems via secure APIs and high-fidelity data migration.",
    tags: ["API Bridge", "Migration", "Sync"],
    icon: <Settings2 className="w-6 h-6" />,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    border: "group-hover:border-purple-500/50"
  },
  {
    id: "03",
    title: "Customized Solutions",
    description: "Tailor-made software modules designed for unique institutional workflows and specialized requirements.",
    tags: ["Agile Dev", "Custom UI", "Scalable"],
    icon: <Code2 className="w-6 h-6" />,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    border: "group-hover:border-emerald-500/50"
  },
  {
    id: "04",
    title: "Government Tenders",
    description: "Expert consultancy for government procurement, compliance documentation, and tender preparation.",
    tags: ["Compliance", "Documentation", "Advisory"],
    icon: <FileCheck2 className="w-6 h-6" />,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    border: "group-hover:border-orange-500/50"
  },
  {
    id: "05",
    title: "Project Financing",
    description: "Strategic financial planning and investor matching for large-scale Ed-Tech implementation projects.",
    tags: ["Funding", "Proposals", "ROI Analysis"],
    icon: <BarChart3 className="w-6 h-6" />,
    color: "text-pink-500",
    bg: "bg-pink-500/10",
    border: "group-hover:border-pink-500/50"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-32 relative bg-white dark:bg-slate-950 transition-colors overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute -left-20 top-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl space-y-6">
            <div className="flex items-center gap-2 text-blue-600">
              <Briefcase className="w-4 h-4" />
              <span className="text-[10px] font-black tracking-[0.4em] uppercase">Consultancy & Support</span>
            </div>
            <h3 className="text-5xl lg:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-[0.9]">
              Expertise <br /> 
              <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent italic">Simplified.</span>
            </h3>
          </div>
          <p className="text-slate-500 dark:text-slate-400 max-w-md text-lg font-medium leading-relaxed">
            We provide more than just code. We offer a full-spectrum technical 
            consultancy ecosystem to ensure institutional longevity.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={cn(
                "relative h-full p-10 rounded-[3rem] border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/50 transition-all duration-500",
                "hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] hover:-translate-y-3 flex flex-col",
                service.border
              )}>
                
                {/* ID & Icon Container */}
                <div className="flex justify-between items-center mb-10">
                  <div className={cn("p-5 rounded-[1.5rem] shadow-sm transition-all duration-500 group-hover:scale-110", service.bg, service.color)}>
                    {service.icon}
                  </div>
                  <span className="text-6xl font-black text-slate-50 dark:text-slate-800/50 transition-colors group-hover:text-slate-100 dark:group-hover:text-slate-800">
                    {service.id}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-4 flex-grow relative z-10">
                  <h4 className="text-2xl font-black text-slate-900 dark:text-white">
                    {service.title}
                  </h4>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>

                {/* Micro Tags */}
                <div className="flex flex-wrap gap-2 mt-10">
                  {service.tags.map(tag => (
                    <Badge key={tag} className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10px] font-black px-4 py-1.5 rounded-xl hover:bg-blue-600 hover:text-white transition-colors border-none">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Hover Detail Indicator */}
                <div className="mt-8 pt-6 border-t border-slate-50 dark:border-slate-800 overflow-hidden">
                  <div className="flex items-center gap-2 text-[10px] font-black text-blue-600 uppercase tracking-widest translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    View Project Scope <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Final Strategy Card */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             className="relative p-10 rounded-[3rem] bg-slate-900 dark:bg-blue-600 items-start justify-between flex flex-col text-white overflow-hidden shadow-2xl"
          >
             {/* Decorative pattern for the CTA card */}
             <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_2px_2px,_rgba(255,255,255,0.15)_1px,_transparent_0)] bg-[size:24px_24px]" />
             
             <div className="relative z-10 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="text-3xl font-black leading-tight">Secure & Certified <br /> Operations.</h4>
                <p className="text-sm text-slate-300 dark:text-blue-100 font-medium">We adhere to global standards for digital migration and academic data privacy.</p>
             </div>

             <Button className="relative z-10 w-full h-14 rounded-2xl bg-white text-slate-900 font-black hover:bg-slate-100 border-none mt-8 transition-transform hover:scale-[1.02]">
                Let&apos;s Talk Strategy
             </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}