"use client";

import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  ArrowRight,
  Globe,
  MessageSquare
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const CONTACT_INFO = [
  {
    icon: <Phone className="w-5 h-5 text-white" />,
    title: "Phone Support",
    value: "Mobile: +0000 000 000",
    bg: "bg-blue-600",
    shadow: "shadow-blue-500/20"
  },
  {
    icon: <Mail className="w-5 h-5 text-white" />,
    title: "Email Inquiry",
    value: "tec@notearch.com",
    bg: "bg-indigo-600",
    shadow: "shadow-indigo-500/20"
  },
  {
    icon: <MapPin className="w-5 h-5 text-white" />,
    title: "Global HQ",
    value: "Suite 700, 55 Town Centre Crt, TORONTO, ON M1P 4X4, Canada",
    bg: "bg-slate-900",
    shadow: "shadow-slate-500/20"
  }
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors">
      {/* Structural Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 dark:bg-slate-900/20 -skew-x-12 translate-x-1/4 pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-20 space-y-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/5 border border-blue-500/10 text-blue-600 dark:text-blue-400"
          >
            <MessageSquare className="w-4 h-4" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Get In Touch</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 dark:text-white">
            Let&apos;s Start a <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent italic">Conversation</span>
          </h2>
          <p className="max-w-xl text-slate-500 dark:text-slate-400 font-medium">
            Whether you are an institution in Toronto or a school in Asia, our team is ready to assist your digital journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Contact Form Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white dark:bg-slate-900 p-8 md:p-16 rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.05)] dark:shadow-none border border-slate-100 dark:border-slate-800 relative group overflow-hidden"
          >
            {/* Soft background glow for the form */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[80px] -z-10 group-hover:bg-blue-500/10 transition-colors" />

            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                  <Input 
                    placeholder="John Doe" 
                    className="h-16 rounded-2xl border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:ring-2 focus:ring-blue-500/20 transition-all placeholder:text-slate-400 font-medium"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Work Email</label>
                  <Input 
                    type="email" 
                    placeholder="john@institution.com" 
                    className="h-16 rounded-2xl border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:ring-2 focus:ring-blue-500/20 transition-all placeholder:text-slate-400 font-medium"
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Message</label>
                <Textarea 
                  placeholder="How can we help your organization?" 
                  className="min-h-[200px] rounded-[2rem] border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none p-6 font-medium"
                />
              </div>

              <Button className="w-full h-16 rounded-2xl text-lg font-black gap-3 bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-500/20 hover:scale-[1.01] transition-all group border-none text-white">
                Send Message 
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </form>
          </motion.div>

          {/* Info Details Stack */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              {CONTACT_INFO.map((info, idx) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group p-8 rounded-[2rem] bg-slate-50/50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-900 transition-all duration-500 flex items-start gap-6"
                >
                  <div className={cn(
                    "p-4 rounded-2xl shadow-lg transition-all duration-500 group-hover:scale-110",
                    info.bg, info.shadow
                  )}>
                    {info.icon}
                  </div>
                  <div className="flex-grow space-y-1">
                    <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em]">{info.title}</h4>
                    <p className="text-slate-900 dark:text-slate-100 font-bold leading-relaxed text-sm">
                      {info.value}
                    </p>
                  </div>
                  <div className="mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-5 h-5 text-blue-600" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Global Reach Card */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="p-10 rounded-[2.5rem] bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden"
            >
              <Globe className="absolute -bottom-10 -right-10 w-40 h-40 text-white/5 rotate-12" />
              <div className="relative z-10 space-y-4">
                <h4 className="text-2xl font-black italic">Global Reach</h4>
                <p className="text-sm text-slate-400 font-medium leading-relaxed">
                  Supporting academic transformation across <span className="text-blue-400">North America, Europe, and Asia</span> with decentralized support hubs.
                </p>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500">Systems Online</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}