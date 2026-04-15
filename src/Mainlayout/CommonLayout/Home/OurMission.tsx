
import { motion } from "framer-motion";
import { Rocket, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Lottie from "lottie-react";
import animationData from "../../../assets/lottifile/rocket launched into space.json";

export default function MissionSection() {
      const Lottianimation = (Lottie as any).default || Lottie;
    
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/30 transition-colors overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT SIDE: THE VISUAL MOCKUP (Image 7) */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative z-10 rounded-[2.5rem] overflow-hidden border-8 border-white dark:border-slate-800 shadow-2xl"
            >
              {/* Actual Image from your Screenshot 7 */}
              {/* <img 
                src="/path-to-mission-bridge-illustration.jpg" 
                alt="Our Mission - Bridging the Gap" 
                className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
              />
               */}
               <Lottianimation
                
                  animationData={animationData}
                  loop={true}
                  className="w-full  "
                  autoplay={true}
                />
              {/* Overlay Glass Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/20 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl border border-white/20 hidden md:flex items-center gap-4">
                <div className="bg-primary p-2 rounded-lg text-white">
                  <Target className="w-5 h-5" />
                </div>
                <p className="text-sm font-bold text-slate-800 dark:text-slate-100">
                  Aiming for 360° Digitalization
                </p>
              </div>
            </motion.div>

            {/* Decorative Floating Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -top-10 -left-10 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"
            />
          </div>

          {/* RIGHT SIDE: THE CONTENT */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest"
              >
                <Rocket className="w-3.5 h-3.5" />
                Our Mission
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="text-4xl lg:text-5xl font-black tracking-tighter text-slate-900 dark:text-white"
              >
                Bridging the Gap Between <span className="text-primary">Tradition & Innovation</span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
              >
                NoteArch aims to provide a 360° digitalization of the full academic lifecycle 
                using a single platform. We are developed to facilitate a complete 
                Enterprise Resource Planning (ERP) solution for academic institutes as well 
                as individual learners.
              </motion.p>
            </div>

            {/* Key Mission Points */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm">
                <Zap className="w-5 h-5 text-yellow-500" />
                <span className="font-bold text-sm">Digital Innovation</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm">
                <Target className="w-5 h-5 text-blue-500" />
                <span className="font-bold text-sm">Academic Excellence</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button size="lg" className="rounded-full px-10 h-14 text-lg font-bold shadow-xl shadow-primary/20 hover:translate-y-[-2px] transition-all">
                Read More
              </Button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}