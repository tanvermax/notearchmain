import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  LayoutDashboard,
  BookOpen,
  Building2,
  Zap,
  Check,

  Sparkles
} from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Lottie from "lottie-react";

// Maintain your imports for Lottie
import animationData from "../../../assets/lottifile/Animation - 1740010453167.json"; // Institution
import animationData1 from "../../../assets/lottifile/STUDENT.json"; // Student
import animationData2 from "../../../assets/lottifile/Teacher Pythagoras Theorem.json"; // TeknoBoard
import animationData3 from "../../../assets/lottifile/learning.json"; // TeknoBook

const SCENES = [
  {
    id: 1,
    tag: "NoteArch Institution",
    title: "The Backbone of Intelligent Academia",
    desc: "A 360° ERP solution for institutions. Digitalize admissions, administration, and faculty workflows within a single secured AI-powered ecosystem.",
    icon: <Building2 className="w-5 h-5" />,
    stats: "Full ERP Integration",
    color: "from-blue-700 to-indigo-600",
    image: animationData,
    cta: "Digitalize Your Institute"
  },
  {
    id: 2,
    tag: "NoteArch Student",
    title: "Your Personalized Virtual World",
    desc: "Connected 365/24/7. Access lecture notes, track real-time progress, and bridge the gap between classroom learning and home study.",
    icon: <GraduationCap className="w-5 h-5" />,
    stats: "24/7 Connectivity",
    color: "from-blue-500 to-cyan-500",
    image: animationData1,
    cta: "Explore Student Portal"
  },
  {
    id: 3,
    tag: "TeknoBoard",
    title: "Interactive Teaching Redefined",
    desc: "Empower teachers with smart delivery tools. Share real-time lecture notes, agenda books, and virtual classroom facilities seamlessly.",
    icon: <LayoutDashboard className="w-5 h-5" />,
    stats: "Real-time Delivery",
    color: "from-indigo-500 to-blue-600",
    image: animationData2,
    cta: "See Smart Features"
  },
  {
    id: 4,
    tag: "TeknoBook",
    title: "Systematic Archival for Success",
    desc: "Transform notes into a lifelong career arch. A secured digital library for students, parents, and mentors to ensure uninterrupted learning.",
    icon: <BookOpen className="w-5 h-5" />,
    stats: "AI-Powered Archival",
    color: "from-slate-700 to-slate-900",
    image: animationData3,
    cta: "Start Archiving"
  },
];

export default function PremiumHero() {
  const [index, setIndex] = useState(0);
  const Lottianimation = (Lottie as any).default || Lottie;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % SCENES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const active = SCENES[index];

  return (
    <section className="relative pt-28 pb-20 min-h-[95vh] w-full flex items-center bg-slate-50 dark:bg-slate-950 overflow-hidden">
      {/* Refined Background Glow */}
      <div
        className={cn(
          "absolute top-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full blur-[140px] opacity-10 transition-colors duration-1000 bg-gradient-to-br",
          active.color,
        )}
      />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* LEFT: CONTENT SECTION */}
        <div className="space-y-8">
          <div className="space-y-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id + "tag"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center gap-2 w-fit px-4 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-blue-500/10 shadow-sm"
              >
                <span className="text-blue-600 dark:text-blue-400">{active.icon}</span>
                <span className="text-xs font-black text-slate-600 dark:text-slate-300 tracking-[0.2em] uppercase">
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
                className="text-5xl lg:text-7xl font-black tracking-tight leading-[1.1] text-slate-900 dark:text-white"
              >
                {active.title.split(' ').map((word, i) => (
                    <span key={i} className={cn(i > 2 && "bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent")}>
                        {word}{' '}
                    </span>
                ))}
              </motion.h1>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p
                key={active.id + "desc"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed font-medium"
              >
                {active.desc}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Action Area */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <Button
              size="lg"
              className="rounded-full px-10 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-105 transition-all text-lg font-bold shadow-xl shadow-blue-500/25 border-none"
            >
              {active.cta}
              <Sparkles className="ml-2 w-5 h-5" />
            </Button>
            
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-blue-500 shadow-sm">
                <Zap className="w-6 h-6 fill-blue-500/10" />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  Performance
                </p>
                <p className="text-sm font-bold text-slate-900 dark:text-white">{active.stats}</p>
              </div>
            </div>
          </div>

          {/* Pagination Indicators */}
          <div className="flex gap-4 pt-10">
            {SCENES.map((scene, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className="group flex flex-col gap-2"
              >
                <div 
                  className="h-1.5 rounded-full bg-slate-200 dark:bg-slate-800 transition-all duration-300 overflow-hidden"
                  style={{ width: i === index ? "80px" : "30px" }}
                >
                  {i === index && (
                    <motion.div
                      layoutId="progress"
                      className={cn("h-full bg-gradient-to-r", active.color)}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 8, ease: "linear" }}
                    />
                  )}
                </div>
                <span className={cn(
                    "text-[10px] font-bold uppercase tracking-tighter transition-opacity",
                    i === index ? "opacity-100 text-blue-600" : "opacity-0"
                )}>
                    0{scene.id}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT: THE VISUAL SCREEN */}
        <div className="relative group">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.05, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative z-20 w-full aspect-square lg:aspect-4/3 rounded-[2.5rem] p-4 bg-white dark:bg-slate-900 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] border border-slate-200/50 dark:border-slate-800/50"
            >
              <div className="w-full h-full rounded-[1.8rem] overflow-hidden bg-slate-50 dark:bg-slate-950 relative flex items-center justify-center">
                <Lottianimation
                  animationData={active.image}
                  loop={true}
                  className="w-[85%] h-[85%] object-contain"
                  autoplay={true}
                />

                {/* Floating Status Bar */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="absolute bottom-6 left-6 right-6 p-4 bg-white/80 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl border border-white dark:border-slate-800 shadow-xl flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                      <Check className="w-5 h-5 stroke-[3px]" />
                    </div>
                    <div>
                      <p className="text-xs font-black text-slate-400 uppercase tracking-tight">Ecosystem Status</p>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">Active & Secured</p>
                    </div>
                  </div>
                  {/* <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-700" />
                    ))}
                  </div> */}
                  <AvatarGroup className="grayscale">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
        <AvatarFallback>LR</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage
          src="https://github.com/evilrabbit.png"
          alt="@evilrabbit"
        />
        <AvatarFallback>ER</AvatarFallback>
      </Avatar>
    </AvatarGroup>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Artistic Glow Elements */}
          <div className={cn(
              "absolute -inset-4 rounded-[3rem] blur-3xl opacity-10 transition-colors duration-1000 bg-gradient-to-r",
              active.color
          )} />
        </div>
      </div>
    </section>
  );
}