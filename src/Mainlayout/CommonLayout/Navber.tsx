import { useState } from "react";
import { LogIn, Menu, X } from "lucide-react";
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
import { NavLink } from "react-router";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  {
    label: "Products",
    href: "#",
    children: [
      { title: "OneTab", href: "/products/onetab", desc: "শিক্ষাপ্রতিষ্ঠান ও শিক্ষকদের জন্য ডিজিটাল ম্যানেজমেন্ট।" },
      { title: "OneBoard", href: "/products/oneboard", desc: "শ্রেণীকক্ষের জন্য স্মার্ট ইন্টারঅ্যাক্টিভ বোর্ড।" },
      { title: "OneBook", href: "/products/onebook", desc: " শিক্ষার্থী ও অভিভাবকদের জন্য স্মার্ট ট্যাবলেট।" },
    ],
  },
  { label: "Service", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Guidance", href: "/guidance" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
 const [isOpen, setIsOpen] = useState(false);

  // Active style helper for mobile/simple links
  const activeClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      "block p-2 text-lg font-medium transition-colors rounded-md",
      isActive 
        ? "text-primary bg-primary/10" 
        : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
    );

  return (
    <nav className="sticky top-0 z-50 w-full py-2 bg-white/80 backdrop-blur-md dark:bg-slate-950/80 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 flex h-16 items-center justify-between">
        
        {/* Brand / Logo */}
        <div className="flex items-center gap-2 font-bold text-xl tracking-tighter cursor-pointer">
          <img src={logo} className="w-10 h-10 object-contain" alt="Logo" />
          <span className="text-2xl font-black tracking-tighter bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                NoteArch
              </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-2">
          <NavigationMenu>
            <NavigationMenuList>
             {NAV_ITEMS.map((item) => (
                <NavigationMenuItem key={item.label}>
                  {item.children ? (
                    <>
                      <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-100 gap-3 p-4 md:w-125 md:grid-cols-2">
                          {item.children.map((child) => (
                            <ListItem key={child.title} title={child.title} href={child.href}>
                              {child.desc}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    /* shadcn NavigationMenuLink handles NavLink integration nicely */
                    <NavigationMenuLink asChild>
                       <NavLink to={item.href} className={navigationMenuTriggerStyle()}>
                        {item.label}
                      </NavLink>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right Side: Actions */}
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-2">
            <LangToggle />
            <ModeToggle />
          </div>

          <Button variant="outline" className="hidden sm:flex gap-2 border-primary text-primary hover:bg-primary hover:text-white">
            <LogIn className="h-4 w-4" />
            Login
          </Button>

          {/* Mobile Menu Trigger */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={cn(
        "fixed inset-0 top-16 z-40  md:hidden transition-all duration-300 ease-in-out",
        isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 "
      )}>
        <div className="flex flex-col bg-white dark:bg-slate-950 b p-6 gap-6 h-[calc(100vh-64px)] overflow-y-auto">
          <div className="space-y-4">
            {NAV_ITEMS.map((item) => (
            <div key={item.label} className="border-b border-slate-100 dark:border-slate-800 pb-2">
              {item.children ? (
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold text-slate-400 px-2 uppercase tracking-widest">{item.label}</span>
                  {item.children.map((child) => (
                    <NavLink key={child.title} to={child.href} className={activeClass} onClick={() => setIsOpen(false)}>
                      <div className="font-semibold">{child.title}</div>
                      <div className="text-xs opacity-70 font-normal">{child.desc}</div>
                    </NavLink>
                  ))}
                </div>
              ) : (
                <NavLink to={item.href} className={activeClass} onClick={() => setIsOpen(false)}>
                  {item.label}
                </NavLink>
              )}
            </div>
          ))}
          </div>
          
          {/* Mobile Bottom Actions */}
          <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800 space-y-4">
            <div className="flex justify-between items-center bg-slate-50 dark:bg-slate-900 p-4 rounded-xl">
              <span className="font-medium">Settings</span>
              <div className="flex gap-3">
                <LangToggle />
                <ModeToggle />
              </div>
            </div>
            <Button className="w-full h-12 text-lg gap-2 shadow-lg shadow-primary/20">
              <LogIn className="h-5 w-5" />
              Login
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const ListItem = ({ title, children, href }: { title: string; children: string; href: string }) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <NavLink
          to={href}
          className={({ isActive }) => cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
            isActive ? "bg-primary/5 text-primary" : "hover:bg-slate-100 dark:hover:bg-slate-800"
          )}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
            {children}
          </p>
        </NavLink>
      </NavigationMenuLink>
    </li>
  );
};

export default Navbar;