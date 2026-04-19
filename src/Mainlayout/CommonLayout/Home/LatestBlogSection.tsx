"use client";

import { motion } from "framer-motion";
import { Calendar, Eye, ArrowRight, Newspaper } from "lucide-react";
import { Link } from "react-router-dom"; // Assuming standard router; change to "next/link" if using Next.js
import { cn } from "@/lib/utils";

const BLOG_POSTS = [
  {
    id: 1,
    title: "NoteArch: Transforming Academic Management for Global Success",
    category: "EDUCATION",
    date: "Dec 28, 2025",
    views: "189 Views",
    description: "Discover how NoteArch is redefining institutional efficiency through decentralized infrastructure and cloud-native tools.",
    image: "https://images.pexels.com/photos/31040303/pexels-photo-31040303.jpeg",
    color: "bg-blue-600"
  },
  {
    id: 2,
    title: "Revolutionizing Education Through AI-Powered Intelligence",
    category: "NEWS",
    date: "Nov 28, 2025",
    views: "696 Views",
    description: "NoteArch is an artificial intelligence powered, secured and cost effective Intelligent Academic Lifecycle Management System.",
    image: "https://images.pexels.com/photos/18069494/pexels-photo-18069494.png",
    color: "bg-emerald-600"
  }
];

export default function LatestBlogSection() {
  return (
    <section id="blog" className="py-32 bg-white dark:bg-slate-950 transition-colors overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20 space-y-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/5 border border-blue-500/10 text-blue-600 dark:text-blue-400"
          >
            <Newspaper className="w-4 h-4" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Insights & Updates</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-[0.9]">
            Latest <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent italic">Perspectives</span>
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          {BLOG_POSTS.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="bg-slate-50 dark:bg-slate-900/50 rounded-[3rem] overflow-hidden border border-slate-100 dark:border-slate-800 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)]">
                
                {/* Image Container with Hover Scale */}
                <div className="relative h-72 overflow-hidden">
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className={cn(
                    "absolute top-6 left-6 px-5 py-2 rounded-2xl text-[10px] font-black tracking-widest text-white shadow-xl uppercase",
                    post.color
                  )}>
                    {post.category}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-10 space-y-6">
                  <div className="flex items-center gap-8">
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
                      <Calendar className="w-4 h-4 text-blue-600" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
                      <Eye className="w-4 h-4 text-blue-600" />
                      {post.views}
                    </div>
                  </div>

                  <h3 className="text-3xl font-black text-slate-900 dark:text-white leading-[1.1] group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed line-clamp-2">
                    {post.description}
                  </p>

                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                    <span className="text-xs font-black uppercase tracking-widest text-blue-600 flex items-center gap-2 group-hover:gap-4 transition-all">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center text-slate-300 group-hover:text-blue-600 transition-colors shadow-sm">
                        <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global CTA */}
        <div className="flex justify-center">
          <Link to="/blog" className="group relative px-12 py-6 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl text-lg font-black transition-all hover:scale-[1.02] shadow-2xl">
            <span className="relative z-10 flex items-center gap-3">
              View All Blog Posts <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}