
import { motion } from "framer-motion";
import { 
  Globe2, 
  Cpu, 
  ShieldAlert, 
  Unlink2, 
  Users, 
  Archive 
} from "lucide-react";

const BENEFITS = [
  {
    title: "Global Accessibility",
    description: "Learn and teach from anywhere in the world with 24/7 connectivity and cloud synchronization.",
    icon: <Globe2 className="w-8 h-8 text-blue-500" />,
    color: "from-blue-500/20 to-transparent"
  },
  {
    title: "AI Powered Analysis",
    description: "Intelligent academic progress analysis to improve student learning outcomes and performance tracking.",
    icon: <Cpu className="w-8 h-8 text-purple-500" />,
    color: "from-purple-500/20 to-transparent"
  },
  {
    title: "Disaster Resilient",
    description: "Ensure uninterrupted learning during natural disasters or global situations with robust offline modes.",
    icon: <ShieldAlert className="w-8 h-8 text-emerald-500" />,
    color: "from-emerald-500/20 to-transparent"
  },
  {
    title: "Seamless Integration",
    description: "Integrate with existing third-party ERP solutions for a unified experience across all your tools.",
    icon: <Unlink2 className="w-8 h-8 text-orange-500" />,
    color: "from-orange-500/20 to-transparent"
  },
  {
    title: "Collaborative Learning",
    description: "Connect students, teachers, parents, and tutors in a unified learning environment for better engagement.",
    icon: <Users className="w-8 h-8 text-pink-500" />,
    color: "from-pink-500/20 to-transparent"
  },
  {
    title: "Systematic Archival",
    description: "Comprehensive archival of student notes and progress for future career success and academic history.",
    icon: <Archive className="w-8 h-8 text-sky-500" />,
    color: "from-sky-500/20 to-transparent"
  }
];

export default function KeyBenefits() {
  return (
    <section className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Section Title */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 dark:text-white"
          >
            Key <span className="text-blue-600">Benefits</span>
          </motion.h2>
          <div className="mt-4 flex justify-center">
            <div className="h-1 w-24 bg-blue-600 rounded-full" />
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BENEFITS.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative group p-10 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 transition-all duration-300 hover:bg-white dark:hover:bg-slate-800 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Floating Icon */}
              <div className="mb-8 relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity`} />
                <div className="relative w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center border border-slate-100 dark:border-slate-700 group-hover:rotate-6 transition-transform">
                  {benefit.icon}
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">
                  {benefit.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              {/* Bottom Decorative Line */}
              <div className="absolute bottom-0 left-10 right-10 h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}