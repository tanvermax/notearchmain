
import { motion } from "framer-motion";
import { 
  Cloud, 
  Settings2, 
  Code2, 
  FileCheck2, 
  BarChart3, 
  ChevronRight,
  ShieldCheck
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const SERVICES = [
  {
    id: "01",
    title: "Complete Digitalization Service",
    description: "Transform your organization with comprehensive digital solutions including infrastructure setup, software implementation, and ongoing support.",
    tags: ["Digital Infrastructure", "Staff Training", "24/7 Support"],
    icon: <Cloud className="w-6 h-6 text-blue-500" />,
    gradient: "from-blue-500/10 to-transparent"
  },
  {
    id: "02",
    title: "NoteArch Integration Services",
    description: "Seamlessly integrate NoteArch products with your existing systems. We ensure smooth data migration and system compatibility across all platforms.",
    tags: ["API Integration", "Data Migration", "System Compatibility"],
    icon: <Settings2 className="w-6 h-6 text-purple-500" />,
    gradient: "from-purple-500/10 to-transparent"
  },
  {
    id: "03",
    title: "Customized Solution Development",
    description: "Get tailor-made software solutions designed specifically for your organizational needs, featuring custom modules and specialized workflows.",
    tags: ["Custom Development", "Agile Methodology", "Quality Assurance"],
    icon: <Code2 className="w-6 h-6 text-emerald-500" />,
    gradient: "from-emerald-500/10 to-transparent"
  },
  {
    id: "04",
    title: "Government Tender Consultancy",
    description: "Navigate government procurement processes with confidence. We provide comprehensive support for tender preparation and compliance documentation.",
    tags: ["Tender Prep", "Compliance Support", "Documentation"],
    icon: <FileCheck2 className="w-6 h-6 text-orange-500" />,
    gradient: "from-orange-500/10 to-transparent"
  },
  {
    id: "05",
    title: "Project Financing Consultancy",
    description: "Secure optimal financing solutions for your Ed-Tech projects. Our experts help identify funding opportunities and connect you with investors.",
    tags: ["Financial Planning", "Investment Proposals", "Funding"],
    icon: <BarChart3 className="w-6 h-6 text-pink-500" />,
    gradient: "from-pink-500/10 to-transparent"
  }
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl space-y-4">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase">Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 dark:text-white">
              Tailored Professional <span className="text-primary">Services</span>
            </h3>
          </div>
          <p className="text-slate-500 dark:text-slate-400 max-w-sm text-sm">
            We don't just provide software; we provide a complete ecosystem of technical 
            consultancy and support to ensure your success.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-full"
            >
              {/* Card Container */}
              <div className="h-full p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 flex flex-col overflow-hidden">
                
                {/* Visual Number & Icon */}
                <div className="flex justify-between items-start mb-8">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.gradient} border border-slate-100 dark:border-slate-800`}>
                    {service.icon}
                  </div>
                  <span className="text-5xl font-black text-slate-100 dark:text-slate-800 transition-colors group-hover:text-primary/10">
                    {service.id}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-4 flex-grow">
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Micro Tags (Refined version of the buttons in your screenshot) */}
                <div className="flex flex-wrap gap-2 mt-8">
                  {service.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="bg-slate-50 dark:bg-slate-800 text-[10px] font-bold py-1 px-3">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Hover Arrow Link */}
                <div className="mt-8 pt-6 border-t border-slate-50 dark:border-slate-800 flex justify-end">
                  <motion.div 
                    className="flex items-center gap-2 text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ x: 5 }}
                  >
                    Details <ChevronRight className="w-4 h-4" />
                  </motion.div>
                </div>

                {/* Subtle Background Glow */}
                <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${service.gradient} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity`} />
              </div>
            </motion.div>
          ))}
          
          {/* A Final "Trust" card to fill the grid (Optional but recommended) */}
          <div className="hidden lg:flex p-8 rounded-[2.5rem] bg-primary items-center justify-center text-center flex-col space-y-4 text-white">
             <ShieldCheck className="w-12 h-12" />
             <h4 className="text-2xl font-bold leading-tight">Secure & Certified Operations</h4>
             <p className="text-sm text-blue-100 opacity-80">We follow international standards for data migration and project consultancy.</p>
          </div>

        </div>
      </div>
    </section>
  );
}