

import { NavLink } from "react-router-dom"; // Standard router
import { Send, ArrowRight, Globe } from "lucide-react";
import logo from "../../assets/image.png";
import { cn } from "../../lib/utils";
import { IoLogoFacebook } from "react-icons/io5";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-slate-950 pt-24 pb-12 border-t border-slate-100 dark:border-slate-800 transition-colors relative overflow-hidden">
      {/* Structural Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
          
          {/* Brand & Newsletter Section */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="flex items-center gap-3 group cursor-pointer w-fit">
              <img src={logo} alt="NoteArch Logo" className="w-12 h-12 transition-transform duration-500 group-hover:rotate-[360deg]" />
              <div className="flex flex-col">
                <span className="text-3xl font-black tracking-tighter text-slate-900 dark:text-white leading-none">
                  NoteArch
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600">Institute</span>
              </div>
            </div>
            
            <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-md">
              The world&apos;s first intelligent academic lifecycle management system. 
              Modernizing education with cloud-native synchronization and AI analysis.
            </p>

            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Join the Newsletter</h4>
              <div className="relative group max-w-sm">
                <input
                  type="email"
                  placeholder="admin@institution.edu"
                  className="w-full h-14 pl-5 pr-16 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:bg-white dark:focus:bg-slate-950 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all font-medium"
                />
                <button className="absolute right-2 top-2 h-10 w-12 bg-blue-600 hover:bg-blue-700 text-white rounded-xl flex items-center justify-center transition-all shadow-lg shadow-blue-500/20 active:scale-90">
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Social Matrix */}
            <div className="flex gap-3">
              <SocialLink icon={<IoLogoFacebook className="h-4 w-4" />} href="#" />
              <SocialLink icon={<FaXTwitter className="h-4 w-4" />} href="#" />
              <SocialLink icon={<FaInstagram className="h-4 w-4" />} href="#" />
              <SocialLink icon={<FaLinkedin className="h-4 w-4" />} href="#" />
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-10">
            <FooterColumn title="Product">
              <FooterLink to="/products">Ecosystem</FooterLink>
              <FooterLink to="/services">Services</FooterLink>
              <FooterLink to="/features">Platform</FooterLink>
              <FooterLink to="/pricing">Licensing</FooterLink>
            </FooterColumn>

            <FooterColumn title="Knowledge">
              <FooterLink to="/blog">Insights</FooterLink>
              <FooterLink to="/guidance">Blueprints</FooterLink>
              <FooterLink to="/faqs">Center</FooterLink>
              <FooterLink to="/demo">Simulate</FooterLink>
            </FooterColumn>

            <FooterColumn title="Legal">
              <FooterLink to="/terms">Terms</FooterLink>
              <FooterLink to="/privacy">Privacy</FooterLink>
              <FooterLink to="/refund">Refunds</FooterLink>
              <FooterLink to="/cookie">Security</FooterLink>
            </FooterColumn>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-slate-400 font-bold text-xs">
              © {currentYear} NoteArch <span className="text-slate-300 dark:text-slate-700 mx-2">|</span> Toronto, Canada
            </p>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
               <Globe className="w-3 h-3 text-slate-400" />
               <span className="text-[10px] font-black uppercase text-slate-500">Global Edition</span>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <NavLink to="/system-status" className="group text-[10px] font-black uppercase tracking-widest text-emerald-500 flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/5 hover:bg-emerald-500/10 transition-colors">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
              Infrastructure Stable
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Helpers ---

const FooterColumn = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="flex flex-col gap-8">
    <h3 className="font-black text-slate-900 dark:text-white uppercase tracking-[0.3em] text-[10px]">
      {title}
    </h3>
    <ul className="flex flex-col gap-4">{children}</ul>
  </div>
);

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <li>
    <NavLink
      to={to}
      className={({ isActive }) => cn(
        "group flex items-center text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all text-sm font-bold uppercase tracking-tight",
        isActive && "text-blue-600"
      )}
    >
      <div className="w-0 group-hover:w-5 overflow-hidden transition-all duration-300 ease-out opacity-0 group-hover:opacity-100 text-blue-600">
        <ArrowRight className="h-4 w-4" />
      </div>
      {children}
    </NavLink>
  </li>
);

const SocialLink = ({ icon, href }: { icon: React.ReactNode; href: string }) => (
  <a
    href={href}
    className="h-11 w-11 flex items-center justify-center rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 hover:-translate-y-1 transition-all shadow-sm"
  >
    {icon}
  </a>
);

export default Footer;