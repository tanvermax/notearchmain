"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Languages } from "lucide-react";
import { cn } from "@/lib/utils";

export function LangToggle() {
  // Replace this with your actual i18n logic (e.g., from next-intl or react-i18next)
  const [lang, setLang] = useState("EN");

  return (
    <div className="flex items-center gap-1 bg-slate-100/50 dark:bg-slate-800/50 p-1 rounded-full border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-md">
      {/* Icon Indicator */}
      <div className="pl-2 pr-1 text-slate-400">
        <Languages className="w-3.5 h-3.5" />
      </div>

      <div className="flex relative">
        <LangButton 
          active={lang === "BN"} 
          onClick={() => setLang("BN")} 
          label="BN" 
        />
        <LangButton 
          active={lang === "EN"} 
          onClick={() => setLang("EN")} 
          label="EN" 
        />
      </div>
    </div>
  );
}

interface LangButtonProps {
  active: boolean;
  onClick: () => void;
  label: string;
}

function LangButton({ active, onClick, label }: LangButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative px-3 py-1 rounded-full text-[10px] font-black tracking-widest transition-colors duration-300",
        active 
          ? "text-blue-600 dark:text-blue-400" 
          : "text-slate-500 hover:text-slate-900 dark:hover:text-slate-200"
      )}
    >
      {/* The Animated "Pill" background */}
      {active && (
        <motion.div
          layoutId="activeLang"
          className="absolute inset-0 bg-white dark:bg-slate-900 rounded-full shadow-sm"
          transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
        />
      )}
      <span className="relative z-10">{label}</span>
    </button>
  );
}