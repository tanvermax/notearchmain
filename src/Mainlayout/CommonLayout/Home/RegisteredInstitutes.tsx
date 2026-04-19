

import { motion } from "framer-motion";
import { ShieldCheck, Award } from "lucide-react";

const INSTITUTES = [
  { id: 1, name: "Sunatul Jamaat of Ontario Canada", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6vx8jdprrH1-Y3nbzHXVU1LO5m3sD_AmMAIx9lXW83Q&s" },
  { id: 2, name: "Oxford Academic Institute", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6vx8jdprrH1-Y3nbzHXVU1LO5m3sD_AmMAIx9lXW83Q&s" },
  { id: 3, name: "Global Science Academy", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6vx8jdprrH1-Y3nbzHXVU1LO5m3sD_AmMAIx9lXW83Q&s" },
  { id: 4, name: "Heritage International School", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6vx8jdprrH1-Y3nbzHXVU1LO5m3sD_AmMAIx9lXW83Q&s" },
  { id: 5, name: "North Star University", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6vx8jdprrH1-Y3nbzHXVU1LO5m3sD_AmMAIx9lXW83Q&s" },
];

export default function RegisteredInstitutes() {
  // Triple the list to ensure perfectly seamless looping on very wide screens
  const marqueeItems = [...INSTITUTES, ...INSTITUTES, ...INSTITUTES];

  return (
    <section id="partners" className="py-32 bg-white dark:bg-slate-950 transition-colors overflow-hidden">
      <div className="container mx-auto px-6 mb-20">
        <div className="flex flex-col items-center text-center space-y-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/10 text-emerald-600 dark:text-emerald-400"
          >
            <ShieldCheck className="w-4 h-4" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Verified Partners</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white"
          >
            Trusted by Global <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">Academia</span>
          </motion.h2>
          
          <p className="max-w-xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
            NoteArch powers leading educational organizations worldwide, from North America to Asia, ensuring 360° digitalization.
          </p>
        </div>
      </div>

      {/* The Infinite Marquee Container */}
      <div className="relative flex w-full">
        {/* Soft edge masking for the "vanishing" effect */}
        <div className="absolute left-0 top-0 bottom-0 w-40 z-20 bg-gradient-to-r from-white dark:from-slate-950 to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-40 z-20 bg-gradient-to-l from-white dark:from-slate-950 to-transparent" />

        <motion.div 
          className="flex gap-10 whitespace-nowrap"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{ 
            repeat: Infinity, 
            duration: 40, 
            ease: "linear" 
          }}
        >
          {marqueeItems.map((item, index) => (
            <div 
              key={index}
              className="group relative w-[320px] bg-slate-50 dark:bg-slate-900/40 p-10 rounded-[2.5rem] border border-slate-200/50 dark:border-slate-800/50 flex flex-col items-center justify-center gap-8 hover:bg-white dark:hover:bg-slate-900 hover:border-blue-500/30 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
            >
              {/* Floating Decorative Icon */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <Award className="w-5 h-5 text-blue-500" />
              </div>

              {/* Logo Frame */}
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative w-28 h-28 rounded-full bg-white dark:bg-slate-800 shadow-inner p-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    <img 
                    src={item.logo} 
                    alt={item.name} 
                    className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                </div>
              </div>

              <div className="space-y-2 text-center">
                <p className="text-[15px] font-black text-slate-800 dark:text-slate-200 whitespace-normal leading-tight group-hover:text-blue-600 transition-colors">
                    {item.name}
                </p>
                <div className="h-1 w-0 group-hover:w-full bg-blue-500 mx-auto transition-all duration-500 rounded-full" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Trust Bar */}
      <div className="container mx-auto px-6 mt-20 flex justify-center">
        <div className="flex items-center gap-8 opacity-40 grayscale pointer-events-none">
            {/* Optional: Add small text labels or tiny secondary logos here for more depth */}
            <span className="text-[10px] font-black uppercase tracking-widest">Global Standards</span>
            <span className="text-[10px] font-black uppercase tracking-widest">ISO Certified Workflows</span>
            <span className="text-[10px] font-black uppercase tracking-widest">Data Privacy First</span>
        </div>
      </div>
    </section>
  );
}