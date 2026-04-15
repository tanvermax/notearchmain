
import { motion } from "framer-motion";
import { ArrowRight, Landmark, GraduationCap, Monitor, Tablet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const PRODUCT_DATA = [
  {
    title: "NoteArch Institution",
    description: "A comprehensive ERP solution designed for educational institutions. Streamline administration, enhance communication, and manage all academic operations from one unified platform.",
    icon: <Landmark className="w-8 h-8" />,
    tag: "Enterprise ERP",
    color: "group-hover:text-blue-600",
    border: "hover:border-blue-500/50",
    bg: "bg-blue-500/5"
  },
  {
    title: "NoteArch Student",
    description: "A personalized virtual academic environment for students. Connect seamlessly with educational resources, track assignments, and engage with learning materials anywhere.",
    icon: <GraduationCap className="w-8 h-8" />,
    tag: "LMS Platform",
    color: "group-hover:text-cyan-600",
    border: "hover:border-cyan-500/50",
    bg: "bg-cyan-500/5"
  },
  {
    title: "TeknoBoard",
    description: "New generation interactive touch panels and digital boards. Available in multiple sizes, designed to make classroom teaching more engaging and collaborative.",
    icon: <Monitor className="w-8 h-8" />,
    tag: "Smart Hardware",
    color: "group-hover:text-indigo-600",
    border: "hover:border-indigo-500/50",
    bg: "bg-indigo-500/5"
  },
  {
    title: "TeknoBook",
    description: "Interactive touch panels (7\", 10\", 15\") equipped with NoteArch software. The ultimate notebook-sized digital companion for day-to-day academic tasks.",
    icon: <Tablet className="w-8 h-8" />,
    tag: "Mobile Device",
    color: "group-hover:text-emerald-600",
    border: "hover:border-emerald-500/50",
    bg: "bg-emerald-500/5"
  }
];

export default function ProductFeatures() {
  return (
    <section className="py-24 max-w-7xl mx-auto bg-white dark:bg-slate-950 transition-colors">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Our Solutions</h2>
          <h3 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Everything you need to <span className="text-blue-500 underline decoration-primary/20">Digitalize</span>.
          </h3>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCT_DATA.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* The Card */}
              <div className={`relative h-full p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-all duration-500 ${product.border} hover:shadow-2xl hover:shadow-primary/5 flex flex-col`}>
                
                {/* Decorative Background Glow */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] ${product.bg}`} />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon & Tag */}
                  <div className="flex justify-between items-start mb-8">
                    <div className={`p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 transition-colors duration-500 ${product.color}`}>
                      {product.icon}
                    </div>
                    <Badge variant="outline" className="text-[10px] font-bold uppercase tracking-tighter opacity-70">
                      {product.tag}
                    </Badge>
                  </div>

                  {/* Text Content */}
                  <h4 className="text-xl font-bold mb-4 text-slate-900 dark:text-white group-hover:translate-x-1 transition-transform">
                    {product.title}
                  </h4>
                  
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                    {product.description}
                  </p>

                  {/* Button */}
                  <Button 
                    variant="ghost" 
                    className="group/btn w-full justify-between rounded-xl hover:bg-primary hover:text-white transition-all duration-300 border border-transparent hover:border-primary px-4"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 -rotate-45 group-hover/btn:rotate-0 transition-transform" />
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