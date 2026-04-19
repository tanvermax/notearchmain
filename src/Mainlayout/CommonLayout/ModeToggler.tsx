"use client";

import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();



  return (
    <div className="flex items-center gap-1 bg-slate-100/50 dark:bg-slate-800/50 p-1 rounded-full border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-md">
      <ThemeButton 
        active={theme === "light"} 
        onClick={() => setTheme("light")} 
        icon={<Sun className="w-4 h-4" />} 
        label="Light" 
      />
      <ThemeButton 
        active={theme === "dark"} 
        onClick={() => setTheme("dark")} 
        icon={<Moon className="w-4 h-4" />} 
        label="Dark" 
      />
      <ThemeButton 
        active={theme === "system"} 
        onClick={() => setTheme("system")} 
        icon={<Monitor className="w-4 h-4" />} 
        label="System" 
      />
    </div>
  );
}

interface ThemeButtonProps {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}

function ThemeButton({ active, onClick, icon, label }: ThemeButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative px-3 py-1.5 rounded-full flex items-center gap-2 transition-all duration-300",
        active 
          ? "text-blue-600 dark:text-blue-400 shadow-sm" 
          : "text-slate-500 hover:text-slate-900 dark:hover:text-slate-200"
      )}
    >
      {/* Animated Background Pill */}
      {active && (
        <motion.div
          layoutId="activeTheme"
          className="absolute inset-0 bg-white dark:bg-slate-900 rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.05)]"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
      
      <span className="relative z-10">{icon}</span>
      {active && (
        <motion.span 
          initial={{ opacity: 0, w: 0 } as any} 
          animate={{ opacity: 1, w: "auto" }as any}
          className="relative z-10 text-[10px] font-black uppercase tracking-widest overflow-hidden whitespace-nowrap"
        >
          {label}
        </motion.span>
      )}
    </button>
  );
}