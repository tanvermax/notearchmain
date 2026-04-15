import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BrainCircuit, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// If you are using the actual PNG image from screenshot 5, place it here.
// const aboutVisual = "/path-to-about-us-illustration-from-screenshot5.png";
// For demonstration, I will create a refined 'mockup' using Lucide icons to match the aesthetic.

export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-950 transition-colors overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Section Header with subtle line and micro-text */}
        <div className="flex flex-col md:flex-row items-baseline gap-4 mb-16 border-l-2 border-primary/20 pl-6">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">
            The Philosophy
          </h2>
          <h3 className="text-4xl font-black tracking-tighter text-blue-500 dark:text-white sm:text-5xl lg:text-6xl">
            About Us
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT CONTENT AREA: CONTENT is EXACTLY from screenshot 5 */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Entrance animation for the text content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }} // Animation triggers when 30% is visible
              className="space-y-6 "
            >
              {/* Highlight Paragraph from screenshot 5 */}
              <p className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                Notes are the backbone of Intelligent Academic Lifecycle (IAL).
              </p>
              
              {/* Supporting Paragraph from screenshot 5 */}
              <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
                Student&apos;s class notes are crucial element for their effective learning.
                Teacher&apos;s lecture notes are key resource to facilitate improved learning
                path for students. Examiners remarks/notes on
              </p>
            </motion.div>

            {/* Premium CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Button 
                size="lg" 
                className="group bg-blue-500 h-14 px-8 rounded-full shadow-xl shadow-primary/20 hover:scale-105 transition-all text-lg font-semibold"
              >
                Read More
                <motion.span
                  className="inline-block ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </Button>
            </motion.div>

          </div>

          {/* RIGHT VISUAL AREA: A refined illustration frame */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Entrance animation and subtle hover effects */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, type: "spring", stiffness: 100 }}
              whileHover={{ rotateY: 5 }} // Subtle 3D tilt on hover
              viewport={{ once: true }}
              className="relative z-20 w-full max-w-[480px] aspect-[10/7] rounded-[2rem] border-4 border-blue-500 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-2xl shadow-black/20 group overflow-hidden"
            >
              
              {/* Decorative Blue Gradient Mask on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-gradient-to-br from-blue-600/10 to-transparent rounded-[2rem]" />
              
              {/* If you are using your actual PNG from screenshot 5, put it here:
                  <img src={aboutVisual} alt="About Us Illustration" className="w-full h-full object-contain z-10 relative" />
              */}

              {/* DEMO Illustration: Mockup of the 'notes brain tree' concept */}
              <div className="relative z-10 w-full h-full flex items-center justify-center border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-3xl p-6 bg-slate-50/50 dark:bg-slate-800/20">
                <BrainCircuit className="w-20 h-20 text-blue-500/60 dark:text-blue-400/50" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-500/10 dark:bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />
                
                {/* Visualizing "notes remarks" floating */}
                <motion.div 
                  className="absolute bottom-6 left-6 p-3 rounded-full bg-white dark:bg-slate-900 shadow-xl border border-white/20"
                  animate={{ y: [0, -8, 0], opacity: [0.8, 1, 0.8] }}
                  transition={{ repeat: Infinity, duration: 4, delay: 0.5 }}
                >
                  <Mic className="w-6 h-6 text-primary" />
                </motion.div>
                
                <span className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[10px] uppercase font-black tracking-widest text-slate-400 opacity-50">
                  Concept Visualization
                </span>
              </div>
            </motion.div>

            {/* Glowing Decorative Background Orbs */}
            <div className="absolute top-1/4 -right-16 w-80 h-80 bg-primary/20 rounded-full blur-[120px] pointer-events-none opacity-60 dark:opacity-80" />
            <div className="absolute bottom-1/4 -left-16 w-80 h-80 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none opacity-40 dark:opacity-60" />
          </div>

        </div>
      </div>
    </section>
  );
}