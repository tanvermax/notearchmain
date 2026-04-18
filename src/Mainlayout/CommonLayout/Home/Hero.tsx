import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Monitor,
  Smartphone,
  ShieldCheck,
  Zap,
  Globe,
  Check,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Lottie from "lottie-react";
import animationData from "../../../assets/lottifile/Animation - 1740010453167.json";
import animationData1 from "../../../assets/lottifile/STUDENT.json";
import animationData2 from "../../../assets/lottifile/Teacher Pythagoras Theorem.json";
import animationData3 from "../../../assets/lottifile/learning.json";

const SCENES = [
  {
    id: 1,
    tag: "Hybrid Learning",
    title: "Hybrid Physical & Real-Time Virtual",
    desc: "Break the walls of the classroom. Connect on-site students with remote learners in a single, unified digital environment.",
    icon: <Monitor className="w-5 h-5" />,
    stats: "99% Uptime",
    color: "from-blue-600 to-indigo-600",
    image: animationData, // Screenshot 1
  },
  {
    id: 2,
    tag: "Student Access",
    title: "365/24/7 Academic Engagement",
    desc: "Education doesn't sleep. Give students the tools to learn from the sofa, the park, or the library with synchronized progress.",
    icon: <Smartphone className="w-5 h-5" />,
    stats: "Anywhere Access",
    color: "from-cyan-500 to-blue-500",
    image: animationData1, // Screenshot 2
  },
  {
    id: 3,
    tag: "Parental Peace",
    title: "Real-Time Progress Monitoring",
    desc: "Transparent education. Parents can monitor attendance, grades, and behavior in real-time via the NoteArch dashboard.",
    icon: <ShieldCheck className="w-5 h-5" />,
    stats: "Live Updates",
    color: "from-indigo-500 to-purple-600",
    image: animationData2, // Screenshot 3
  },
  {
    id: 4,
    tag: "Institutional Growth",
    title: "Digitalizing the Entire Academia",
    desc: "Scale your institution with a centralized cloud infrastructure that handles everything from enrollment to graduation.",
    icon: <Globe className="w-5 h-5" />,
    stats: "Full Scale",
    color: "from-sky-500 to-emerald-500",
    image: animationData3, // Screenshot 4
  },
];

export default function PremiumHero() {
  const [index, setIndex] = useState(0);
  const Lottianimation = (Lottie as any).default || Lottie;
  // Auto-play feature
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % SCENES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const active = SCENES[index];

  return (
    <section className="relative pt-20 min-h-[90vh] w-full flex items-center bg-white dark:bg-slate-950 overflow-hidden">
      {/* Dynamic Background Glow */}
      <div
        className={cn(
          "absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] opacity-20 transition-colors duration-1000 bg-gradient-to-br",
          active.color,
        )}
      />

      <div className="max-w-7xl  mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center z-10">
        {/* LEFT: CONTENT SECTION */}
        <div className="space-y-8 text-left">
          <div className="flex flex-col gap-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id + "tag"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center gap-2 w-fit px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
              >
                <span className="text-primary">{active.icon}</span>
                <span className="text-sm font-bold text-blue-500 tracking-wide uppercase">
                  {active.tag}
                </span>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.h1
                key={active.id + "title"}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="text-5xl text-blue-500 lg:text-7xl font-black tracking-tight leading-[1.05]"
              >
                {active.title}
              </motion.h1>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p
                key={active.id + "desc"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-lg text-slate-500 dark:text-slate-400 max-w-lg"
              >
                {active.desc}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="rounded-xl px-8 h-14 bg-blue-500 hover:scale-105 transition-transform text-lg shadow-lg shadow-primary/25"
            >
              Start Transformation
            </Button>
            <div className="flex items-center gap-3 px-4 border-l-2 border-slate-200 dark:border-slate-800">
              <div className="h-10 w-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                <Zap className="w-5 h-5 fill-current" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase">
                  Current Status
                </p>
                <p className="text-sm font-bold">{active.stats}</p>
              </div>
            </div>
          </div>

          {/* Progress Indicators (Clickable) */}
          <div className="flex gap-3 pt-8">
            {SCENES.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className="group relative h-1.5 transition-all duration-300 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800"
                style={{ width: i === index ? "60px" : "20px" }}
              >
                {i === index && (
                  <motion.div
                    layoutId="progress"
                    className={cn(
                      "absolute inset-0 bg-gradient-to-r",
                      active.color,
                    )}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 8, ease: "linear" }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT: THE "PRODUCT MOCKUP" VISUAL */}
        <div className="relative flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 1.1, rotateY: -15 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="relative z-20 w-full max-w-175 aspect-4/3 rounded-3xl overflow-hidden shadow-2xl shadow-black/20 border-[px]  dark:border-slate-800 bg-slate-200"
            >
              {/* Inside the "Screen" */}
              <div className="absolute inset-0 bg-white dark:bg-slate-900 flex items-center justify-center">
              
                <Lottianimation
                
                  animationData={active.image}
                  loop={true}
                  className="w-full  "
                  autoplay={true}
                />

                {/* Overlaying Floating Elements to make it feel "UI-like" */}
                <motion.div
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  className="absolute bottom-4 left-4 right-4 p-4 bg-white/10 dark:bg-slate-800/90 backdrop-blur rounded-xl border border-white/20 shadow-lg flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                      <Check className="w-4 h-4 " />
                    </div>
                    <span className="text-sm font-bold">System Online</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-400" />
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Decorative Elements around the image */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
}
