
import { motion } from "framer-motion";
import { CheckCircle2,  Sparkles } from "lucide-react";


const APP_HIGHLIGHTS = [
  { icon: <CheckCircle2 className="w-5 h-5 text-emerald-500" />, text: "Real-time Attendance" },
  { icon: <CheckCircle2 className="w-5 h-5 text-emerald-500" />, text: "Direct Parent-Teacher Messaging" },
  { icon: <CheckCircle2 className="w-5 h-5 text-emerald-500" />, text: "Offline Digital Gradebook Access" },
  { icon: <CheckCircle2 className="w-5 h-5 text-emerald-500" />, text: "365/24/7 Academic Sync" }
];

export default function SaaSShowcaseAppDownload() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900 overflow-hidden relative">
      
      {/* Dynamic Background Glow Effect (Stripe Style) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/10 blur-[130px] rounded-full opacity-60 pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* LEFT SIDE: Floating, Interactive Devices */}
          <div className="relative group flex justify-center lg:justify-start">
            
            {/* Secondary Phone (Rotated Behind) */}
            <motion.div
              initial={{ opacity: 0, x: 50, rotate: 0 }}
              whileInView={{ opacity: 1, x: -60, rotate: -15 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute z-0 w-[240px] md:w-[280px] hidden md:block"
            >
              <img 
                src="https://images.pexels.com/photos/5053841/pexels-photo-5053841.jpeg" 
                alt="Mobile App Interface 1" 
                className="rounded-[3rem] shadow-2xl border-[8px] border-slate-900 dark:border-slate-800"
              />
            </motion.div>

            {/* Primary Phone (Center) with Deep Shadow */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              className="relative z-10 w-[260px] md:w-[320px] lg:w-[350px]"
            >
              <img 
                src="https://images.pexels.com/photos/50614/pexels-photo-50614.jpeg" 
                alt="Mobile App Interface 2" 
                className="rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-[8px] border-slate-900 dark:border-slate-800"
              />
              
              {/* Floating 'Attendance' UI Element (Contextual Visual) */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-12 top-20 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-white/20 hidden lg:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase">Dashboard</p>
                    <p className="text-sm font-black text-slate-900 dark:text-white">Attendance Marked</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Dynamic Text & Actionable Links */}
          <div className="space-y-10 text-center lg:text-left">
            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="inline-flex items-center gap-2 px-3 py-1 w-fit rounded-full bg-blue-500/10 border border-blue-500/20 text-primary text-xs font-bold"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Mobile First Academic Lifecycle
                </motion.div>
                
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white leading-[1.05]">
                  The Power of NoteArch <br />
                  <span className="text-primary">In Your Pocket</span>
                </h2>
              </div>
              
              <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Access your personalized learning environment anytime, anywhere. 
                Our mobile app syncs instantly, keeping you connected on the go.
              </p>
            </div>

            {/* Feature Checklist - Clean and modern */}
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              {APP_HIGHLIGHTS.map(item => (
                <li key={item.text} className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                  {item.icon}
                  {item.text}
                </li>
              ))}
            </ul>

            {/* Action Buttons (Store Links) */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-6">
              <motion.a href="#" whileHover={{ y: -5 }} className="transition-transform duration-300">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                  alt="Get it on Google Play" 
                  className="h-14 drop-shadow-lg"
                />
              </motion.a>
              <motion.a href="#" whileHover={{ y: -5 }} className="transition-transform duration-300">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                  alt="Download on the App Store" 
                  className="h-14 drop-shadow-lg"
                />
              </motion.a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}