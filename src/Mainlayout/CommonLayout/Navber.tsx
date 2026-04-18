"use client";

import { useState, useEffect, useCallback } from "react";
import { LogIn, Menu, X, ExternalLink } from "lucide-react";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

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

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [isOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) setIsOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  const isActive = useCallback((href: string) => {
    if (href === "/") return location.pathname === "/";
    if (href.includes("#")) {
      return location.hash === href.replace("/", "");
    }
    return location.pathname === href;
  }, [location]);

  const handleLinkClick = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-7xl rounded-2xl border transition-all duration-300",
          scrolled
            ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-lg border-slate-200/50 dark:border-slate-700/50"
            : "bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border-transparent"
        )}
      >
        <div className="px-4 md:px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <HashLink
            to="/#"
            onClick={handleLinkClick}
            className="flex items-center gap-2 group transition-all duration-300 hover:scale-105 flex-shrink-0"
          >
            <div className="relative">
              <img src={logo} className="w-10 h-10" alt="NoteArch Logo" />
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-20 blur-xl rounded-full transition" />
            </div>
            <span className="text-xl font-black bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
              NoteArch
            </span>
          </HashLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <NavigationMenu>
              <NavigationMenuList>
                {NAV_ITEMS.map((item) => (
                  <NavigationMenuItem key={item.label}>
                    {item.children ? (
                      <>
                        <NavigationMenuTrigger className="rounded-full">
                          {item.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="w-72 p-3 grid gap-2">
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
                            "rounded-full transition-all",
                            isActive(item.href)
                              ? "bg-white dark:bg-slate-800 shadow text-primary"
                              : "bg-transparent hover:bg-white/70 dark:hover:bg-slate-800/70"
                          )}
                        >
                          {item.label}
                        </HashLink>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex gap-2 border-r pr-3 border-slate-200 dark:border-slate-800">
              <LangToggle />
              <ModeToggle />
            </div>

            <Button className="hidden sm:flex rounded-full px-6 font-semibold bg-gradient-to-r from-blue-600 to-indigo-500 text-white shadow-lg hover:shadow-indigo-500/30 transition-all hover:scale-105">
              <LogIn className="mr-2 h-4 w-4" />
              Login
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden rounded-full"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-all duration-300",
          isOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        
        {/* Menu Panel */}
        <div
          className={cn(
            "absolute top-0 right-0 h-full w-full max-w-100% bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-300 ease-out",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <img src={logo} className="w-8 h-8" alt="NoteArch Logo" />
                <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                  NoteArch
                </span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <X />
              </Button>
            </div>

            {/* Navigation Links */}
            <div className="flex-1  overflow-y-auto py-6 px-4">
              <div className="flex flex-col gap-2">
                {NAV_ITEMS.map((item) => (
                  <div key={item.label}>
                    {item.children ? (
                      <>
                        <div className="text-xs font-semibold uppercase text-slate-400 px-3 mb-2">
                          {item.label}
                        </div>
                        {item.children.map((child) => (
                          <a
                            key={child.title}
                            href={child.href}
                            target={child.isExternal ? "_blank" : undefined}
                            rel={child.isExternal ? "noopener noreferrer" : undefined}
                            onClick={handleLinkClick}
                            className="flex items-center justify-between p-3 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-primary/10 hover:text-primary transition-all"
                          >
                            {child.title}
                            {child.isExternal && <ExternalLink className="h-4 w-4" />}
                          </a>
                        ))}
                      </>
                    ) : (
                      <HashLink
                        smooth
                        to={item.href}
                        onClick={handleLinkClick}
                        className={cn(
                          "block p-3 rounded-xl text-lg font-semibold transition-all",
                          "text-slate-700 dark:text-slate-200 hover:bg-primary/10 hover:text-primary",
                          isActive(item.href) && "bg-primary/10 text-primary"
                        )}
                      >
                        {item.label}
                      </HashLink>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-slate-200 dark:border-slate-800 p-4 space-y-4">
              <div className="flex items-center justify-between bg-blue-100 dark:bg-slate-800/50 p-3 rounded-xl">
                <span className="text-sm font-medium">Preferences</span>
                <div className="flex gap-2">
                  <LangToggle />
                  <ModeToggle />
                </div>
              </div>

              <Button className="w-full h-12 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-500 text-white shadow-lg hover:shadow-indigo-500/30 transition-all">
                <LogIn className="mr-2 h-4 w-4" />
                Login to Account
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ListItem = ({ title, href, isExternal }: any) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        {isExternal ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between items-center p-3 rounded-xl bg-slate-50 dark:bg-slate-900 hover:bg-white dark:hover:bg-slate-800 transition-all shadow-sm hover:shadow-md"
          >
            {title}
            <ExternalLink className="h-4 w-4 ml-2" />
          </a>
        ) : (
          <HashLink
            smooth
            to={href}
            className="block p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
          >
            {title}
          </HashLink>
        )}
      </NavigationMenuLink>
    </li>
  );
};

export default Navbar;