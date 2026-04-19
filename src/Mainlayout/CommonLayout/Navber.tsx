

import { useState, useEffect, useCallback } from "react";
import { LogIn, Menu, X, ExternalLink, Sparkles } from "lucide-react";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import {motion} from "framer-motion"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../../components/ui/navigation-menu";

import { Button } from "../../components/ui/button";
import logo from "../../assets/image.png";
import { ModeToggle } from "./ModeToggler";
import { LangToggle } from "./LangToggler";
import { cn } from "../../lib/utils";
import { AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/#product" },
  { label: "Service", href: "/#service" },
  { label: "Blog", href: "/blog" },
  {
    label: "Guidance",
    href: "/guidance",
    children: [
      {
        title: "User Manual Guide",
        href: "https://drive.google.com/file/d/1f6AmYtw4x_-HuP7W7QMTq913bViMcz_T/view",
        isExternal: true,
      },
    ],
  },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = useCallback((href: string) => {
    if (href === "/") return location.pathname === "/" && !location.hash;
    if (href.includes("#")) {
      return location.hash === href.split("#")[1] || (location.pathname === "/" && location.hash === `#${href.split("#")[1]}`);
    }
    return location.pathname === href;
  }, [location]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-7xl rounded-2xl border transition-all duration-500",
          scrolled
            ? "bg-white/70 dark:bg-slate-900/80 backdrop-blur-xl shadow-2xl border-blue-500/10 py-2"
            : "bg-transparent border-transparent py-4"
        )}
      >
        <div className="px-4 md:px-6 flex items-center justify-between h-14">
          {/* Logo Section */}
          <HashLink
            to="/#"
            className="flex items-center gap-2 group transition-transform hover:scale-105"
          >
            <div className="relative">
              <img src={logo} className="w-10 h-10 object-contain z-10 relative" alt="NoteArch" />
              <div className="absolute inset-0 bg-blue-500/20 blur-lg rounded-full animate-pulse group-hover:bg-indigo-500/40" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xl font-black bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                NoteArch
              </span>
              <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase ml-0.5">
                Ecosystem
              </span>
            </div>
          </HashLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center bg-slate-100/50 dark:bg-slate-800/50 p-1 rounded-full border border-slate-200/50 dark:border-slate-700/50">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                {NAV_ITEMS.map((item) => (
                  <NavigationMenuItem key={item.label}>
                    {item.children ? (
                      <>
                        <NavigationMenuTrigger className="rounded-full bg-transparent hover:bg-white dark:hover:bg-slate-800 h-9 px-4">
                          {item.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="w-72 p-3 grid gap-2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg">
                            {item.children.map((child) => (
                              <ListItem key={child.title} {...child} />
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink asChild>
                        <HashLink
                          smooth
                          to={item.href}
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "rounded-full h-9 px-4 transition-all relative group bg-transparent",
                            isActive(item.href) 
                              ? "text-blue-600 dark:text-blue-400 font-bold" 
                              : "text-slate-600 dark:text-slate-300"
                          )}
                        >
                          {item.label}
                          {isActive(item.href) && (
                            <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full" />
                          )}
                        </HashLink>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-1 bg-slate-100/50 dark:bg-slate-800/50 p-1 rounded-full mr-2">
              <LangToggle />
              <ModeToggle />
            </div>

            <Button className="hidden sm:flex rounded-full px-5 h-10 font-bold bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] hover:shadow-blue-500/50 hover:scale-[1.02] transition-all border-none">
              <LogIn className="mr-2 h-4 w-4" />
              Login
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden rounded-full hover:bg-blue-50 dark:hover:bg-slate-800"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Simplified Mobile Menu logic remains similar but uses the new theme colors */}
      {/* ... [Mobile Overlay Logic] ... */}
     {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[40] lg:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl pt-24 px-6 pb-10 flex flex-col justify-between"
          >
            {/* Navigation Links */}
            <div className="space-y-4">
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {item.children ? (
                    <div className="space-y-3">
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-4">
                        {item.label}
                      </p>
                      {item.children.map((child) => (
                        <a
                          key={child.title}
                          href={child.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800"
                        >
                          <span className="font-bold text-slate-900 dark:text-white">{child.title}</span>
                          <ExternalLink className="h-4 w-4 text-blue-500" />
                        </a>
                      ))}
                    </div>
                  ) : (
                    <HashLink
                      smooth
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "block p-2 text-xl font-black tracking-tighter transition-all",
                        isActive(item.href) 
                          ? "text-blue-600 dark:text-blue-400" 
                          : "text-slate-900 dark:text-white"
                      )}
                    >
                      {item.label}
                    </HashLink>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Mobile Footer Actions */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-100 dark:bg-slate-900">
                <span className="text-sm font-bold text-slate-500">Preferences</span>
                <div className="flex flex-col md:flex-row gap-2">
                  <LangToggle />
                  <ModeToggle />
                </div>
              </div>

              <Button className="w-full h-14 rounded-2xl text-lg font-black bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl shadow-blue-500/20">
                <LogIn className="mr-2 h-5 w-5" />
                Access Portal
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const ListItem = ({ title, href, isExternal }: any) => (
  <li>
    <NavigationMenuLink asChild>
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="flex items-center justify-between p-3 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all border border-transparent hover:border-blue-100 dark:hover:border-blue-800 group"
      >
        <span className="text-sm font-semibold group-hover:text-blue-600 transition-colors">{title}</span>
        {isExternal ? <ExternalLink className="h-3 w-3 text-slate-400" /> : <Sparkles className="h-3 w-3 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />}
      </a>
    </NavigationMenuLink>
  </li>
);

export default Navbar;