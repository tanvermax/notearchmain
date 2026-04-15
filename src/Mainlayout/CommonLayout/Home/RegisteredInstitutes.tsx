import React from "react";
import { motion } from "framer-motion";

// Sample data - You can add more institutes here
const INSTITUTES = [
  { id: 1, name: "Sunatul Jamaat of Ontario Canada", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6vx8jdprrH1-Y3nbzHXVU1LO5m3sD_AmMAIx9lXW83Q&s" },
  { id: 2, name: "Oxford Academic Institute", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6vx8jdprrH1-Y3nbzHXVU1LO5m3sD_AmMAIx9lXW83Q&s" },
  { id: 3, name: "Global Science Academy", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6vx8jdprrH1-Y3nbzHXVU1LO5m3sD_AmMAIx9lXW83Q&s" },
  { id: 4, name: "Heritage International School", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6vx8jdprrH1-Y3nbzHXVU1LO5m3sD_AmMAIx9lXW83Q&s" },
  { id: 5, name: "North Star University", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6vx8jdprrH1-Y3nbzHXVU1LO5m3sD_AmMAIx9lXW83Q&s" },
];

export default function RegisteredInstitutes() {
  // Create a doubled list to ensure the marquee never has a gap
  const marqueeItems = [...INSTITUTES, ...INSTITUTES];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/20 overflow-hidden">
      <div className="container mx-auto px-6 mb-12 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black tracking-tighter text-blue-500 dark:text-blue-500"
        >
          Our Registered <span className="text-primary">Institutes</span>
        </motion.h2>
        <p className="mt-4 text-slate-500 dark:text-slate-400">
          Trusted by leading educational organizations worldwide.
        </p>
      </div>

      {/* The Infinite Marquee */}
      <div className="relative flex w-full overflow-hidden">
        {/* Left & Right Gradient Fades to make it look smooth */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent" />

        <motion.div 
          className="flex gap-8 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            repeat: Infinity, 
            duration: 30, 
            ease: "linear" 
          }}
        >
          {marqueeItems.map((item, index) => (
            <div 
              key={index}
              className="group w-[280px] bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center gap-6 hover:shadow-xl hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-24 h-24 rounded-full border-2 border-primary/20 p-2 flex items-center justify-center group-hover:scale-110 transition-transform">
                <img 
                  src={item.logo} 
                  alt={item.name} 
                  className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all"
                />
              </div>
              <p className="text-sm font-bold text-slate-700 dark:text-slate-300 text-center whitespace-normal leading-tight">
                {item.name}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}