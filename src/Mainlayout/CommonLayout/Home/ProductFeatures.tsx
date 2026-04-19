

import { motion } from "framer-motion";
import { ArrowRight, Landmark, GraduationCap, Monitor, Tablet, Sparkle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const PRODUCT_DATA = [
  {
    title: "NoteArch Institution",
    description: "A comprehensive ERP solution designed for educational institutions. Streamline administration and faculty workflows from one unified platform.",
    icon: <Landmark className="w-8 h-8" />,
    tag: "Enterprise ERP",
    color: "text-blue-600",
    border: "group-hover:border-blue-500/50",
    bg: "bg-blue-600",
    shadow: "shadow-blue-500/10"
  },
  {
    title: "NoteArch Student",
    description: "A personalized virtual academic environment. Connect with resources, track assignments, and engage with materials 365/24/7.",
    icon: <GraduationCap className="w-8 h-8" />,
    tag: "LMS Platform",
    color: "text-cyan-600",
    border: "group-hover:border-cyan-500/50",
    bg: "bg-cyan-600",
    shadow: "shadow-cyan-500/10"
  },
  {
    title: "TeknoBoard",
    description: "New generation interactive touch panels. Multiple sizes designed to make classroom teaching more engaging and collaborative.",
    icon: <Monitor className="w-8 h-8" />,
    tag: "Smart Hardware",
    color: "text-indigo-600",
    border: "group-hover:border-indigo-500/50",
    bg: "bg-indigo-600",
    shadow: "shadow-indigo-500/10"
  },
  {
    title: "TeknoBook",
    description: "Interactive touch panels (7\"-15\") with NoteArch software. The ultimate digital companion for day-to-day academic tasks.",
    icon: <Tablet className="w-8 h-8" />,
    tag: "Mobile Device",
    color: "text-emerald-600",
    border: "group-hover:border-emerald-500/50",
    bg: "bg-emerald-600",
    shadow: "shadow-emerald-500/10"
  }
];

export default function ProductFeatures() {
  return (
    <section id="product" className="py-32 relative overflow-hidden bg-white dark:bg-slate-950 transition-colors">
      {/* Decorative Background Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <Sparkle className="w-4 h-4 text-blue-600 fill-blue-600" />
              <span className="text-xs font-black tracking-[0.3em] text-blue-600 uppercase">Product Suite</span>
            </div>
            <h3 className="text-4xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Unified <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">Digital</span> Ecosystem.
            </h3>
          </div>
          <p className="text-slate-500 dark:text-slate-400 max-w-sm text-sm font-medium leading-relaxed">
            Four powerful solutions interlinked under a single backbone to bridge the gap in the academic lifecycle.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCT_DATA.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={cn(
                "relative h-full p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 transition-all duration-500",
                "hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)]",
                product.border
              )}>
                
                {/* Number Indicator */}
                <span className="absolute top-8 right-8 text-4xl font-black text-slate-100 dark:text-slate-800 transition-colors group-hover:text-slate-200 dark:group-hover:text-slate-700">
                    0{idx + 1}
                </span>

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon & Tag */}
                  <div className="mb-10">
                    <div className={cn(
                        "w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 mb-6",
                        "bg-white dark:bg-slate-800 shadow-lg group-hover:scale-110",
                        product.color,
                        product.shadow
                    )}>
                      {product.icon}
                    </div>
                    <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-800 text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                      {product.tag}
                    </Badge>
                  </div>

                  {/* Text Content */}
                  <h4 className="text-2xl font-black mb-4 text-slate-900 dark:text-white leading-tight">
                    {product.title}
                  </h4>
                  
                  <p className="text-slate-500 dark:text-slate-400 text-[15px] leading-relaxed mb-10 flex-grow font-medium">
                    {product.description}
                  </p>

                  {/* Enhanced Button */}
                  <Button 
                    className={cn(
                        "group/btn w-full h-12 justify-between rounded-2xl transition-all duration-300",
                        "bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white hover:text-white border-none",
                        `hover:${product.bg}`
                    )}
                  >
                    <span className="font-bold">Explore Platform</span>
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover/btn:rotate-[-45deg]">
                        <ArrowRight className="w-4 h-4" />
                    </div>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}