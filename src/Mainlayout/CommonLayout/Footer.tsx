import React from "react";
import { NavLink } from "react-router";
import { Send, ArrowRight } from "lucide-react";
import logo from "../../assets/image.png";
import { cn } from "../../lib/utils";
import { IoLogoFacebook } from "react-icons/io5";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" bg-slate-50 dark:bg-[#020617] pt-20 pb-10 border-t border-slate-200 dark:border-slate-800/50 transition-colors overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6">
        
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand & Newsletter - Takes up 4 columns on large screens */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="flex items-center gap-2 group cursor-pointer">
              <img src={logo} alt="NoteArch Logo" className="w-10 h-10 transition-transform group-hover:scale-110" />
              <span className="text-2xl font-black tracking-tighter bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                NoteArch
              </span>
            </div>
            
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-sm">
              Empowering educators and institutions with smart digital management tools. 
              Stay updated with our latest features and educational insights.
            </p>

            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white">Newsletter</h4>
              <div className="relative group max-w-sm">
                <input
                  type="email"
                  placeholder="hello@example.com"
                  className="w-full h-12 pl-4 pr-14 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
                />
                <button className="absolute right-1.5 top-1.5 h-9 w-12 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center transition-all shadow-md active:scale-95">
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              <SocialLink icon={<IoLogoFacebook className="h-4 w-4" />} href="#" />
              <SocialLink icon={<FaXTwitter className="h-4 w-4" />} href="#" />
              <SocialLink icon={<FaInstagram className="h-4 w-4" />} href="#" />
              <SocialLink icon={<FaLinkedin className="h-4 w-4" />} href="#" />
            </div>
          </div>

          {/* Links Sections - 8 columns remaining */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <FooterColumn title="Product">
              <FooterLink to="/products">All Products</FooterLink>
              <FooterLink to="/services">Services</FooterLink>
              <FooterLink to="/features">Features</FooterLink>
              <FooterLink to="/pricing">Pricing Plans</FooterLink>
            </FooterColumn>

            <FooterColumn title="Support">
              <FooterLink to="/guidance">Guidance</FooterLink>
              <FooterLink to="/blog">Our Blog</FooterLink>
              <FooterLink to="/contact">Contact Us</FooterLink>
              <FooterLink to="/faqs">Help Center</FooterLink>
              <FooterLink to="/demo">Request Demo</FooterLink>
            </FooterColumn>

            <FooterColumn title="Company" className="col-span-2 sm:col-span-1">
              <FooterLink to="/terms">Terms of Service</FooterLink>
              <FooterLink to="/privacy">Privacy Policy</FooterLink>
              <FooterLink to="/cookie">Cookies</FooterLink>
              <FooterLink to="/refund">Refund Policy</FooterLink>
            </FooterColumn>
          </div>
        </div>

        {/* Bottom Decorative Section */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 dark:text-slate-500 text-sm text-center md:text-left">
            © {currentYear} <span className="font-semibold text-slate-700 dark:text-slate-300">NoteArch Institute.</span> Built for the future of education.
          </p>
          
          <div className="flex items-center gap-6">
            <NavLink to="/system-status" className="text-xs font-medium text-emerald-500 flex items-center gap-1.5 hover:underline">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Systems Operational
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Sub-components ---

const FooterColumn = ({ title, children, className }: { title: string; children: React.ReactNode; className?: string }) => (
  <div className={cn("flex flex-col gap-5", className)}>
    <h3 className="font-bold text-slate-900 dark:text-white uppercase tracking-[0.15em] text-[11px]">
      {title}
    </h3>
    <ul className="flex flex-col gap-3.5">{children}</ul>
  </div>
);

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <li>
    <NavLink
      to={to}
      className={({ isActive }) => cn(
        "group flex items-center gap-0 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all text-sm",
        isActive && "text-blue-600 font-medium"
      )}
    >
      <ArrowRight className="h-0 w-0 group-hover:w-3 group-hover:h-3 group-hover:mr-2 transition-all duration-300 opacity-0 group-hover:opacity-100" />
      {children}
    </NavLink>
  </li>
);

const SocialLink = ({ icon, href }: { icon: React.ReactNode; href: string }) => (
  <a
    href={href}
    className="h-9 w-9 flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 text-slate-600 dark:text-slate-400 hover:text-blue-600 hover:border-blue-600/30 hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-all shadow-sm"
  >
    {icon}
  </a>
);

export default Footer;