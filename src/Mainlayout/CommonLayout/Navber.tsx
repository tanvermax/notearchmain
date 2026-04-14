import { Moon, Sun, BookOpen, LogIn, Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../../components/ui/navigation-menu";
import { Button } from "../../components/ui/button";
import logo from "../../assets/image.png"
import { ModeToggle } from "./ModeToggler";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white dark:bg-slate-950 dark:border-slate-800 transition-colors">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        
        {/* Brand / Logo */}
        <div className="flex items-center gap-2 font-bold text-xl tracking-tighter cursor-pointer">
          <img src={logo} className="w-12" alt="" />
          <span className="text-slate-900 dark:text-white">NoteArch</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-2">
          <NavigationMenu>
            <NavigationMenuList>
              
              {/* Home */}
              <NavigationMenuItem>
                <a href="/" className={navigationMenuTriggerStyle()}>
                  Home
                </a>
              </NavigationMenuItem>

              {/* Products (Dropdown) */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    <ListItem title="OneTab" href="/products/onetab">
                      শিক্ষাপ্রতিষ্ঠান ও শিক্ষকদের জন্য ডিজিটাল ম্যানেজমেন্ট।
                    </ListItem>
                    <ListItem title="OneBoard" href="/products/oneboard">
                      শ্রেণীকক্ষের জন্য স্মার্ট ইন্টারঅ্যাক্টিভ বোর্ড।
                    </ListItem>
                    <ListItem title="OneBook" href="/products/onebook">
                      শিক্ষার্থী ও অভিভাবকদের জন্য স্মার্ট ট্যাবলেট।
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Service */}
              <NavigationMenuItem>
                <a href="/services" className={navigationMenuTriggerStyle()}>
                  Service
                </a>
              </NavigationMenuItem>

              {/* Blog */}
              <NavigationMenuItem>
                <a href="/blog" className={navigationMenuTriggerStyle()}>
                  Blog
                </a>
              </NavigationMenuItem>

              {/* Guidance */}
              <NavigationMenuItem>
                <a href="/guidance" className={navigationMenuTriggerStyle()}>
                  Guidance
                </a>
              </NavigationMenuItem>

              {/* Contact */}
              <NavigationMenuItem>
                <a href="/contact" className={navigationMenuTriggerStyle()}>
                  Contact
                </a>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right Side: Theme & Login */}
        <div className="flex items-center gap-3">
         <ModeToggle/>

          <Button variant="outline" className="hidden sm:flex gap-2 border-primary text-primary hover:bg-primary hover:text-white">
            <LogIn className="h-4 w-4" />
            Login
          </Button>

          {/* Mobile Menu Trigger */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

const ListItem = ({ title, children, href }: { title: string; children: string; href: string }) => {
  return (
    <li>
      <a
        href={href}
        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
      >
        <div className="text-sm font-medium leading-none text-slate-900 dark:text-white">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
          {children}
        </p>
      </a>
    </li>
  );
};

export default Navbar;