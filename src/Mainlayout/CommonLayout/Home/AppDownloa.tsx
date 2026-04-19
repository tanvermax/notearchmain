"use client";

import { motion } from "framer-motion";
import { 
  CheckCircle2,  
  Sparkles, 
  Smartphone, 
  Zap, 
  ShieldCheck,
  BellRing
} from "lucide-react";


const APP_HIGHLIGHTS = [
  { icon: <Zap className="w-4 h-4 text-amber-500" />, text: "Real-time Attendance" },
  { icon: <BellRing className="w-4 h-4 text-blue-500" />, text: "Direct Messaging" },
  { icon: <ShieldCheck className="w-4 h-4 text-emerald-500" />, text: "Offline Gradebook" },
  { icon: <Sparkles className="w-4 h-4 text-purple-500" />, text: "Academic Sync" }
];

export default function SaaSShowcaseAppDownload() {
  return (
    <section id="mobile-app" className="py-32 relative bg-white dark:bg-slate-950 overflow-hidden">
      
      {/* Structural Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_20%,rgba(59,130,246,0.05)_0%,transparent_50%)]" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* LEFT SIDE: The Device Stage (Col 5) */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Background Glow */}
            <div className="absolute inset-0 bg-blue-500/20 blur-[120px] rounded-full scale-75 animate-pulse" />

            {/* Secondary Device (Perspective) */}
            <motion.div
              initial={{ opacity: 0, x: 40, rotate: 10 }}
              whileInView={{ opacity: 0.4, x: 80, rotate: 25 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute z-0 w-[280px] hidden lg:block grayscale"
            >
              <div className="aspect-[9/19] rounded-[3rem] border-[8px] border-slate-900 bg-slate-800 shadow-2xl" />
            </motion.div>

            {/* Primary Device */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative z-10 w-[300px] md:w-[340px]"
            >
              {/* iPhone Mockup Frame */}
              <div className="relative aspect-[9/19] rounded-[3.5rem] border-[12px] border-slate-950 bg-slate-900 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] overflow-hidden">
                 {/* Internal UI Mockup */}
                 <div className="absolute inset-0 bg-gradient-to-b from-blue-600 to-indigo-700 p-6 flex flex-col justify-between">
                    <div className="w-1/2 h-1 bg-white/20 mx-auto rounded-full mb-8" />
                    <div className="space-y-4">
                        <div className="w-full h-32 bg-white/10 rounded-2xl backdrop-blur-md" />
                        <div className="grid grid-cols-2 gap-4">
                            <div className="h-20 bg-white/10 rounded-2xl backdrop-blur-md" />
                            <div className="h-20 bg-white/10 rounded-2xl backdrop-blur-md" />
                        </div>
                    </div>
                    <div className="w-full h-40 bg-white rounded-t-3xl mt-auto" />
                 </div>
              </div>
              
              {/* Floating Glass Widget: Attendance */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-12 top-24 z-20 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl p-5 rounded-[2rem] shadow-2xl border border-white/20 hidden md:flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Live Status</p>
                  <p className="text-sm font-black text-slate-900 dark:text-white">Attendance Verified</p>
                </div>
              </motion.div>

              {/* Floating Glass Widget: Notification */}
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-12 bottom-24 z-20 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl p-5 rounded-[2rem] shadow-2xl border border-white/20 hidden md:flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <BellRing className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">New Message</p>
                  <p className="text-sm font-black text-slate-900 dark:text-white">Teacher: Grade Posted</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Content (Col 7) */}
          <div className="lg:col-span-7 space-y-12 text-center lg:text-left">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/5 border border-blue-500/10 text-blue-600 dark:text-blue-400 w-fit mx-auto lg:mx-0"
              >
                <Smartphone className="w-4 h-4" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Mobile Ecosystem</span>
              </motion.div>
              
              <h2 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-[0.9]">
                NoteArch <br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent italic">In Your Pocket</span>
              </h2>
              
              <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                Bridge the gap between home and the classroom. Our mobile experience 
                ensures that academic intelligence is always within reach, keeping students 
                and parents synced in real-time.
              </p>
            </div>

            {/* Micro-Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg mx-auto lg:mx-0">
              {APP_HIGHLIGHTS.map(item => (
                <motion.div 
                  key={item.text} 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 transition-colors hover:bg-white"
                >
                  <div className="p-2 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700">
                    {item.icon}
                  </div>
                  <span className="text-xs font-black text-slate-700 dark:text-slate-200 uppercase tracking-tight">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="transition-all"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                  alt="Play Store" 
                  className="h-16 drop-shadow-2xl"
                />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="transition-all"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                  alt="App Store" 
                  className="h-16 drop-shadow-2xl"
                />
              </motion.a>
            </div>
            
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
                Available for Android & iOS (Coming Soon)
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}