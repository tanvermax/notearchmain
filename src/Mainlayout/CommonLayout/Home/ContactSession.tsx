
import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const CONTACT_INFO = [
  {
    icon: <Phone className="w-6 h-6 text-white" />,
    title: "Phone",
    value: "Mobile : +0000",
    bg: "bg-blue-600"
  },
  {
    icon: <Mail className="w-6 h-6 text-white" />,
    title: "Email",
    value: "tec@notearch.com",
    bg: "bg-blue-700"
  },
  {
    icon: <MapPin className="w-6 h-6 text-white" />,
    title: "Location",
    value: "Suite 700 55 Town Centre Crt TORONTO, ON M1P 4X4 Canada",
    bg: "bg-blue-800"
  }
];

export default function ContactSection() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-10 left-10 opacity-10 pointer-events-none">
        <div className="grid grid-cols-4 gap-2">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-400" />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 dark:text-white mb-4">
            Lets Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="h-1.5 w-20 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Form Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">Your Name</label>
                  <Input 
                    placeholder="Enter Your Name" 
                    className="h-14 rounded-xl border-slate-100 bg-slate-50/50 focus:bg-white transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">Your Email</label>
                  <Input 
                    type="email" 
                    placeholder="Enter Your Email" 
                    className="h-14 rounded-xl border-slate-100 bg-slate-50/50 focus:bg-white transition-all"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">Message</label>
                <Textarea 
                  placeholder="Send Your Message" 
                  className="min-h-[180px] rounded-2xl border-slate-100 bg-slate-50/50 focus:bg-white transition-all resize-none"
                />
              </div>

              <Button className="w-full h-14 rounded-xl text-lg font-bold gap-3 shadow-lg shadow-primary/25 hover:scale-[1.02] transition-transform">
                Send Message <Send className="w-5 h-5" />
              </Button>
            </form>
          </motion.div>

          {/* Info Tiles */}
          <div className="lg:col-span-5 space-y-6">
            {CONTACT_INFO.map((info, idx) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex items-center gap-6"
              >
                <div className={`${info.bg} p-4 rounded-2xl shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                  {info.icon}
                </div>
                <div className="flex-grow">
                  <h4 className="text-xs font-bold uppercase text-slate-400 tracking-widest mb-1">{info.title}</h4>
                  <p className="text-slate-900 dark:text-slate-100 font-bold leading-tight">
                    {info.value}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full border border-slate-100 dark:border-slate-800 flex items-center justify-center text-slate-300 group-hover:text-primary group-hover:border-primary/20 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}

            {/* Subtle Map Placeholder / Decorative box */}
            <div className="mt-8 p-1 bg-gradient-to-br from-primary/20 to-transparent rounded-[2rem]">
               <div className="h-32 bg-slate-100 dark:bg-slate-800 rounded-[1.8rem] flex items-center justify-center border border-dashed border-slate-300 dark:border-slate-700">
                  <span className="text-xs font-bold text-slate-400 italic">Interactive Map Coming Soon</span>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}