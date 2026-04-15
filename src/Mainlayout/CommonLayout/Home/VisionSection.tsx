
import { motion } from "framer-motion";
import { Eye, Globe, Lightbulb, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Lottie from "lottie-react";
import animationData from "../../../assets/lottifile/brain yoga.json";



export default function VisionSection() {
      const Lottianimation = (Lottie as any).default || Lottie;

  return (
    <section className="py-24 bg-white dark:bg-slate-950 transition-colors overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT SIDE: THE CONTENT */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 dark:text-blue-400 text-xs font-bold uppercase tracking-widest"
              >
                <Eye className="w-3.5 h-3.5" />
                Our Vision
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-4xl lg:text-5xl font-black tracking-tighter text-slate-900 dark:text-white"
              >
                Empowering Minds, <br />
                <span className="text-blue-500">Connecting the World</span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
              >
                NoteArch was established by a group of visionary people with superior knowledge 
                in the academic field, unique research & development experience in 
                internationally renowned research institutes in North America, Europe, and Asia.
              </motion.p>
            </div>

            {/* Vision Features - Directly mapping to your graphic labels */}
            <motion.ul 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {[
                { label: "Academic Excellence", icon: <Lightbulb className="w-5 h-5" /> },
                { label: "24/7 Global Access", icon: <Globe className="w-5 h-5" /> }
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                  <div className="p-2 bg-blue-500 rounded-lg text-white shadow-lg shadow-blue-500/30">
                    {item.icon}
                  </div>
                  <span className="font-bold text-slate-800 dark:text-slate-200">{item.label}</span>
                  <Check className="ml-auto w-5 h-5 text-blue-500" />
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button variant="outline" size="lg" className="rounded-full px-10 h-14 text-lg font-bold border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all">
                Read More
              </Button>
            </motion.div>
          </div>

          {/* RIGHT SIDE: THE VISUAL (Screenshot 8) */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              viewport={{ once: true }}
              className="relative z-10 w-full"
            >
              {/* Image Frame */}
              {/* <div className="relative rounded-[2rem] overflow-hidden bg-white dark:bg-slate-900 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 dark:border-slate-800"> */}
                {/* <img 
                  src="/path-to-vision-brain-illustration.jpg" 
                  alt="Our Vision Visualization" 
                  className="w-full h-auto p-4 md:p-8"
                /> */}
                <Lottianimation
                                
                                  animationData={animationData}
                                  loop={true}
                                  className="w-full  "
                                  autoplay={true}
                                />
              {/* </div> */}

              {/* Central Pulse Effect (Mimicking the "Brain" glow in your image) */}
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-32 h-32 bg-blue-400 rounded-full blur-[60px] pointer-events-none"
              />
            </motion.div>

            {/* Decorative Background Glows */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 left-10 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl" />
          </div>

        </div>
      </div>
    </section>
  );
}